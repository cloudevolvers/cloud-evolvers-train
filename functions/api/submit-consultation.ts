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
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#3b82f6;width:40px;height:40px;border-radius:10px;" align="center">
                    <span style="color:#fff;font-size:20px;line-height:40px;">☁</span>
                  </td>
                  <td style="padding-left:12px;">
                    <span style="color:#fff;font-size:18px;font-weight:bold;letter-spacing:-0.5px;">Cloud Evolvers</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background:#fff;border-radius:16px;overflow:hidden;">

              <!-- Blue Header -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#3b82f6;padding:32px 32px 24px;">
                    <p style="margin:0 0 4px;color:rgba(255,255,255,0.8);font-size:13px;text-transform:uppercase;letter-spacing:1px;">
                      ${isNL ? 'Nieuw Verzoek' : 'New Request'}
                    </p>
                    <h1 style="margin:0;color:#fff;font-size:24px;font-weight:bold;">
                      ${body.training}
                    </h1>
                  </td>
                </tr>
              </table>

              <!-- Content -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:32px;">

                    <!-- From -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">${isNL ? 'Van' : 'From'}</p>
                          <p style="margin:0;color:#0f172a;font-size:18px;font-weight:bold;">${body.name}</p>
                          <p style="margin:6px 0 0;">
                            <a href="mailto:${body.email}" style="color:#3b82f6;text-decoration:none;font-size:14px;">${body.email}</a>
                            ${body.phone ? `<span style="color:#cbd5e1;margin:0 8px;">•</span><a href="tel:${body.phone}" style="color:#3b82f6;text-decoration:none;font-size:14px;">${body.phone}</a>` : ''}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Dates -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                      <tr>
                        <td style="background:#f8fafc;border-radius:8px;padding:16px;">
                          <p style="margin:0 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">${isNL ? 'Voorkeurdatums' : 'Preferred Dates'}</p>
                          <p style="margin:0;color:#0f172a;font-size:15px;">${formattedDates}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    ${body.message ? `
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                      <tr>
                        <td style="border-left:3px solid #3b82f6;padding-left:16px;">
                          <p style="margin:0 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">${isNL ? 'Bericht' : 'Message'}</p>
                          <p style="margin:0;color:#334155;font-size:15px;line-height:1.6;white-space:pre-wrap;">${body.message}</p>
                        </td>
                      </tr>
                    </table>
                    ` : ''}

                    <!-- CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="padding-top:8px;">
                          <a href="mailto:${body.email}?subject=Re: ${encodeURIComponent(body.training)}" style="display:inline-block;background:#0f172a;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:bold;">
                            ${isNL ? 'Beantwoorden' : 'Reply to ${body.name.split(' ')[0]}'}
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:24px 0 0;">
              <p style="margin:0;color:#64748b;font-size:12px;">
                cloudevolvers.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
