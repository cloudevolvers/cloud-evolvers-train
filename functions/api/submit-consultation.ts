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
<html lang="${isNL ? 'nl' : 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%); padding: 40px 40px 50px 40px; border-radius: 16px 16px 0 0; text-align: center;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <!-- Logo/Brand -->
                    <div style="display: inline-block; background: rgba(255,255,255,0.15); padding: 12px 24px; border-radius: 50px; margin-bottom: 20px;">
                      <span style="color: #ffffff; font-size: 14px; font-weight: 600; letter-spacing: 1px;">☁️ CLOUD EVOLVERS</span>
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; line-height: 1.3;">
                      ${isNL ? 'Nieuw Consultatieverzoek' : 'New Consultation Request'}
                    </h1>
                    <p style="margin: 12px 0 0 0; color: rgba(255,255,255,0.85); font-size: 16px;">
                      ${isNL ? 'Via cloudevolvers.com contactformulier' : 'Via cloudevolvers.com contact form'}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="background: #ffffff; padding: 0 40px;">

              <!-- Contact Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: -30px;">
                <tr>
                  <td style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); padding: 28px; border: 1px solid #e2e8f0;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">
                            👤 ${isNL ? 'Contactpersoon' : 'Contact Person'}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px;">
                          <h2 style="margin: 0; color: #0f172a; font-size: 24px; font-weight: 700;">${body.name}</h2>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 16px;">
                          <table role="presentation" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="padding-right: 24px;">
                                <a href="mailto:${body.email}" style="color: #3b82f6; text-decoration: none; font-size: 15px; display: flex; align-items: center;">
                                  <span style="margin-right: 8px;">✉️</span> ${body.email}
                                </a>
                              </td>
                            </tr>
                            ${body.phone ? `
                            <tr>
                              <td style="padding-top: 8px;">
                                <a href="tel:${body.phone}" style="color: #3b82f6; text-decoration: none; font-size: 15px; display: flex; align-items: center;">
                                  <span style="margin-right: 8px;">📞</span> ${body.phone}
                                </a>
                              </td>
                            </tr>
                            ` : ''}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Training Interest -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td style="background: linear-gradient(135deg, #faf5ff 0%, #f0f9ff 100%); border-radius: 12px; padding: 24px; border: 1px solid #e9d5ff;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="color: #7c3aed; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            🎓 ${isNL ? 'Geïnteresseerde Training' : 'Interested Training'}
                          </div>
                          <div style="color: #1e293b; font-size: 20px; font-weight: 700;">${body.training}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Preferred Dates -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td style="background: #f0fdf4; border-radius: 12px; padding: 24px; border: 1px solid #bbf7d0;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="color: #15803d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            📅 ${isNL ? 'Voorkeurdatums' : 'Preferred Dates'}
                          </div>
                          <div style="color: #1e293b; font-size: 16px; line-height: 1.6;">${formattedDates}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              ${body.message ? `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td style="background: #fffbeb; border-radius: 12px; padding: 24px; border: 1px solid #fde68a;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="color: #b45309; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">
                            💬 ${isNL ? 'Bericht' : 'Message'}
                          </div>
                          <div style="color: #1e293b; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${body.message}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Quick Actions -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 32px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-right: 12px;">
                          <a href="mailto:${body.email}?subject=Re: ${encodeURIComponent(body.training)} Training Inquiry" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 14px; font-weight: 600; box-shadow: 0 4px 14px rgba(37,99,235,0.3);">
                            ✉️ ${isNL ? 'Reageren via Email' : 'Reply via Email'}
                          </a>
                        </td>
                        ${body.phone ? `
                        <td>
                          <a href="tel:${body.phone}" style="display: inline-block; background: #ffffff; color: #1e293b; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 14px; font-weight: 600; border: 2px solid #e2e8f0;">
                            📞 ${isNL ? 'Bellen' : 'Call'}
                          </a>
                        </td>
                        ` : ''}
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: #ffffff; padding: 32px 40px 40px 40px; border-radius: 0 0 16px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-top: 1px solid #e2e8f0; padding-top: 24px; text-align: center;">
                    <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;">
                      ${isNL ? 'Dit bericht is automatisch gegenereerd via' : 'This message was automatically generated via'}
                    </p>
                    <p style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 600;">
                      <a href="https://cloudevolvers.com" style="color: #2563eb; text-decoration: none;">cloudevolvers.com</a>
                    </p>
                    <p style="margin: 16px 0 0 0; color: #94a3b8; font-size: 12px;">
                      © ${new Date().getFullYear()} Spot Cloud B.V. (Cloud Evolvers) • Netherlands 🇳🇱
                    </p>
                  </td>
                </tr>
              </table>
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
