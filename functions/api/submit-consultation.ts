/**
 * Cloud Evolvers - Contact Form API
 * Cloudflare Pages Function
 *
 * Handles contact form submissions and sends emails via Microsoft Graph API
 */

interface Env {
  API_KEY: string;
  AZURE_AD_CLIENT_ID: string;
  AZURE_AD_TENANT_ID: string;
  EMAIL_AZURE_CLIENT_ID: string;
  EMAIL_AZURE_CLIENT_SECRET: string;
  EMAIL_SENDER: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  training: string;
  preferredDates?: string[];
  message?: string;
  language?: 'en' | 'nl';
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    // Validate API key
    const apiKey = request.headers.get('x-api-key');
    if (!apiKey || apiKey !== env.API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized', details: 'Invalid API key' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return new Response(
        JSON.stringify({ error: 'Bad Request', details: 'Name and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Bad Request', details: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get Microsoft Graph access token using dedicated email service principal
    const emailClientId = env.EMAIL_AZURE_CLIENT_ID || env.AZURE_AD_CLIENT_ID;
    const emailSender = env.EMAIL_SENDER || 'training@cloudevolvers.com';

    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: emailClientId,
          client_secret: env.EMAIL_AZURE_CLIENT_SECRET,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      }
    );

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Failed to get access token:', errorText);
      return new Response(
        JSON.stringify({
          error: 'Authentication Error',
          details: 'Failed to authenticate with Microsoft Graph',
          debug: {
            status: tokenResponse.status,
            clientId: emailClientId?.substring(0, 8) + '...',
            tenantId: env.AZURE_AD_TENANT_ID?.substring(0, 8) + '...',
          }
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const tokenData = await tokenResponse.json() as { access_token: string };

    // Format preferred dates
    const formattedDates = body.preferredDates?.length
      ? body.preferredDates.filter(d => d).join(', ')
      : 'No specific dates provided';

    // Build email content
    const isNL = body.language === 'nl';
    const emailSubject = isNL
      ? `Nieuw consultatieverzoek: ${body.training}`
      : `New Consultation Request: ${body.training}`;

    const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
    .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .value { margin-top: 4px; font-size: 16px; color: #1e293b; }
    .badge { display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">Cloud Evolvers</h1>
      <p style="margin: 8px 0 0 0; opacity: 0.9;">${isNL ? 'Nieuw Consultatieverzoek' : 'New Consultation Request'}</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">${isNL ? 'Naam' : 'Name'}</div>
        <div class="value">${body.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${body.email}" style="color: #2563eb;">${body.email}</a></div>
      </div>
      ${body.phone ? `
      <div class="field">
        <div class="label">${isNL ? 'Telefoon' : 'Phone'}</div>
        <div class="value"><a href="tel:${body.phone}" style="color: #2563eb;">${body.phone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">${isNL ? 'Geïnteresseerde Training' : 'Interested Training'}</div>
        <div class="value"><span class="badge">${body.training}</span></div>
      </div>
      <div class="field">
        <div class="label">${isNL ? 'Voorkeurdatums' : 'Preferred Dates'}</div>
        <div class="value">${formattedDates}</div>
      </div>
      <div class="field">
        <div class="label">${isNL ? 'Bericht' : 'Message'}</div>
        <div class="value">${body.message || (isNL ? 'Geen bericht verstrekt' : 'No message provided')}</div>
      </div>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
      <p style="font-size: 12px; color: #64748b; margin: 0;">
        ${isNL ? 'Dit bericht is verzonden via het contactformulier op cloudevolvers.com' : 'This message was sent via the contact form on cloudevolvers.com'}
      </p>
    </div>
  </div>
</body>
</html>`;

    // Send email via Microsoft Graph using the configured sender
    const sendEmailResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${emailSender}/sendMail`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: emailSubject,
            body: {
              contentType: 'HTML',
              content: emailBody,
            },
            toRecipients: [
              { emailAddress: { address: 'training@cloudevolvers.com' } },
              { emailAddress: { address: 'yair@cloudevolvers.com' } },
            ],
            replyTo: [
              { emailAddress: { address: body.email, name: body.name } },
            ],
          },
        }),
      }
    );

    if (!sendEmailResponse.ok) {
      const errorText = await sendEmailResponse.text();
      console.error('Failed to send email:', errorText);
      return new Response(
        JSON.stringify({
          error: 'Email Send Error',
          details: 'Failed to send email via Microsoft Graph',
          debug: {
            status: sendEmailResponse.status,
            sender: emailSender,
            graphError: errorText.substring(0, 200),
          }
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: isNL
          ? 'Bericht succesvol verzonden'
          : 'Message sent successfully',
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};
