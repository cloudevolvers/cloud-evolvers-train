/**
 * Cloud Evolvers - Contact Form API
 * Cloudflare Pages Function
 *
 * Handles contact form submissions and sends emails via Microsoft Graph API
 */

interface Env {
  FORM_API_KEY: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  training: string;
  preferredDates?: string[];
  message?: string;
  language?: 'en' | 'nl';
  visitorId?: string;
  sessionId?: string;
  sourcePath?: string;
  sourceUrl?: string;
  portfolioEventName?: string;
  portfolioMetadata?: Record<string, unknown>;
}

const PORTFOLIO_EVENTS_URL = 'https://dashboard-api-prod.reactor-servers.workers.dev/api/events/collect';

type PortfolioEventName =
  | 'contact_requested'
  | 'demo_booked'
  | 'tool_report_requested'
  | 'trial_requested';

const PORTFOLIO_EVENT_NAMES = new Set<PortfolioEventName>([
  'contact_requested',
  'demo_booked',
  'tool_report_requested',
  'trial_requested',
]);

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
    // Validate API key for scripts, but do not require a public build-time secret
    // for same-origin website form submissions.
    const apiKey = request.headers.get('x-api-key');
    if (!isAuthorizedSubmission(request, apiKey, env.FORM_API_KEY)) {
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

    const leadType = inferLeadType(body.training, body.message);
    const primaryEventName =
      normalizePortfolioEventName(body.portfolioEventName) ??
      inferPortfolioEventName(body.training, body.message);
    const isSmoke = body.email.trim().toLowerCase().startsWith('smoke+');

    if (isSmoke) {
      await emitPortfolioEvent(primaryEventName, body, {
        status: 'received',
        lead_type: leadType,
        smoke_test: true,
      });

      return new Response(
        JSON.stringify({
          success: true,
          autoresponder: 'skipped_smoke',
          message: body.language === 'nl'
            ? 'Bericht succesvol verzonden'
            : 'Message sent successfully',
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get Microsoft Graph access token using dedicated email service principal
    const emailClientId = env.EMAIL_CLIENT_ID;
    const emailSender = env.EMAIL_SENDER_ADDRESS;

    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${env.EMAIL_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: emailClientId,
          client_secret: env.EMAIL_CLIENT_SECRET,
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
            clientId: emailClientId.substring(0, 8) + '...',
            tenantId: env.EMAIL_TENANT_ID.substring(0, 8) + '...',
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
                            ${isNL ? 'Beantwoorden' : `Reply to ${body.name.split(' ')[0]}`}
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

    await emitPortfolioEvent(primaryEventName, body, {
      status: 'received',
      lead_type: leadType,
    });

    await emitPortfolioEvent('lead_internal_notification_sent', body, {
      status: 'sent',
      provider: 'microsoft_graph',
      lead_type: leadType,
    });

    const autoReplyResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${emailSender}/sendMail`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: buildAutoReplySubject(body.training, isNL),
            body: {
              contentType: 'HTML',
              content: buildAutoReplyHtml(body, isNL),
            },
            toRecipients: [
              { emailAddress: { address: body.email, name: body.name } },
            ],
            replyTo: [
              { emailAddress: { address: 'training@cloudevolvers.com', name: 'Cloud Evolvers' } },
            ],
          },
        }),
      }
    );

    if (!autoReplyResponse.ok) {
      const errorText = await autoReplyResponse.text();
      console.error('Failed to send auto-reply:', errorText);
      await emitPortfolioEvent('lead_autoresponder_sent', body, {
        status: 'failed',
        provider: 'microsoft_graph',
        lead_type: leadType,
        provider_message: 'Microsoft Graph auto-reply send failed',
      });
    } else {
      await emitPortfolioEvent('lead_autoresponder_sent', body, {
        status: 'sent',
        provider: 'microsoft_graph',
        lead_type: leadType,
      });
    }

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        autoresponder: autoReplyResponse.ok ? 'sent' : 'failed',
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

function isAuthorizedSubmission(request: Request, apiKey: string | null, expectedApiKey: string): boolean {
  if (apiKey && expectedApiKey && apiKey === expectedApiKey) return true;
  return isAllowedSiteUrl(request.headers.get('Origin')) || isAllowedSiteUrl(request.headers.get('Referer'));
}

function isAllowedSiteUrl(value: string | null): boolean {
  if (!value) return false;

  try {
    const { hostname, protocol } = new URL(value);
    if (protocol !== 'https:') return false;
    return (
      hostname === 'cloudevolvers.com' ||
      hostname === 'www.cloudevolvers.com' ||
      hostname === 'test.cloudevolvers.com' ||
      hostname === 'cloud-evolvers-train.pages.dev' ||
      hostname.endsWith('.cloud-evolvers-train.pages.dev')
    );
  } catch {
    return false;
  }
}

function buildAutoReplySubject(training: string, isNL: boolean): string {
  const label = training || (isNL ? 'uw aanvraag' : 'your request');
  return isNL
    ? `We hebben uw aanvraag ontvangen: ${label}`
    : `We received your request: ${label}`;
}

function buildAutoReplyHtml(body: ContactFormData, isNL: boolean): string {
  const firstName = body.name.trim().split(/\s+/)[0] || (isNL ? 'daar' : 'there');
  const leadType = inferLeadType(body.training, body.message);
  const reviewLine = leadType === 'compliance_readiness'
    ? isNL
      ? 'We bekijken uw readiness-scan en sturen een compacte eerste route voor Azure, Microsoft 365, DORA, NIS2, NIST of CIS.'
      : 'We will review your readiness scan and send back a compact first path for Azure, Microsoft 365, DORA, NIS2, NIST, or CIS.'
    : isNL
      ? 'We bekijken uw vraag en koppelen die aan de juiste training, workshop of technische vervolgstap.'
      : 'We will review your request and map it to the right training, workshop, or technical next step.';

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#0f172a;padding:28px 32px;">
              <p style="margin:0;color:#93c5fd;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Cloud Evolvers</p>
              <h1 style="margin:6px 0 0;color:#ffffff;font-size:24px;line-height:1.25;">${isNL ? 'Aanvraag ontvangen' : 'Request received'}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 16px;">${isNL ? 'Hoi' : 'Hi'} ${escapeHtml(firstName)},</p>
              <p style="margin:0 0 16px;line-height:1.6;">${escapeHtml(reviewLine)}</p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin:20px 0;">
                <p style="margin:0 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.5px;">${isNL ? 'Onderwerp' : 'Topic'}</p>
                <p style="margin:0;font-weight:bold;">${escapeHtml(body.training || (isNL ? 'Algemene vraag' : 'General inquiry'))}</p>
              </div>
              <p style="margin:0 0 16px;line-height:1.6;">${isNL ? 'Als er spoed is, reageer dan op deze mail met de deadline, tenant-scope of het compliancegesprek waar u naartoe werkt.' : 'If there is urgency, reply with the deadline, tenant scope, or compliance discussion you are working toward.'}</p>
              <p style="margin:24px 0 0;">Cloud Evolvers<br><a href="https://cloudevolvers.com" style="color:#2563eb;">cloudevolvers.com</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function inferLeadType(training: string, message?: string): string {
  const text = `${training} ${message ?? ''}`.toLowerCase();
  if (/(dora|nis2|nist|cis|compliance|readiness|secure score|defender|purview)/.test(text)) {
    return 'compliance_readiness';
  }
  if (/(az-|exam|cert|training|course|workshop)/.test(text)) {
    return 'training';
  }
  return 'contact';
}

function normalizePortfolioEventName(value: unknown): PortfolioEventName | null {
  return typeof value === 'string' && PORTFOLIO_EVENT_NAMES.has(value as PortfolioEventName)
    ? value as PortfolioEventName
    : null;
}

function inferPortfolioEventName(training: string, message?: string): PortfolioEventName {
  const text = `${training} ${message ?? ''}`.toLowerCase();
  if (/(dora|nis2|nist|cis|compliance|readiness|secure score|defender|purview)/.test(text)) {
    return 'tool_report_requested';
  }
  return 'contact_requested';
}

async function emitPortfolioEvent(
  eventName: string,
  body: ContactFormData,
  metadata: Record<string, string | number | boolean | null>,
) {
  try {
    const isSmoke = body.email.trim().toLowerCase().startsWith('smoke+');
    await fetch(PORTFOLIO_EVENTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productSlug: 'cloud-evolvers',
        eventName,
        source: isSmoke ? 'smoke-test' : 'cloud-evolvers-pages-function',
        path: normalizeOptionalString(body.sourcePath, 500) ?? '/api/submit-consultation',
        url: normalizeOptionalString(body.sourceUrl, 1000) ?? 'https://cloudevolvers.com/api/submit-consultation',
        visitorId: normalizeOptionalString(body.visitorId, 120) ?? undefined,
        sessionId: normalizeOptionalString(body.sessionId, 120) ?? undefined,
        metadata: {
          ...safePortfolioMetadata(body.portfolioMetadata),
          ...metadata,
          has_phone: Boolean(body.phone),
          has_preferred_dates: Boolean(body.preferredDates?.length),
          language: body.language ?? 'en',
        },
      }),
    });
  } catch {
    // Lead delivery must not depend on portfolio telemetry.
  }
}

function normalizeOptionalString(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

function safePortfolioMetadata(input: unknown): Record<string, string | number | boolean | null> {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return {};
  const output: Record<string, string | number | boolean | null> = {};
  for (const [key, value] of Object.entries(input).slice(0, 24)) {
    if (!/^[a-zA-Z0-9_.:-]{1,64}$/.test(key)) continue;
    if (typeof value === 'string') output[key] = value.slice(0, 200);
    else if (typeof value === 'number' && Number.isFinite(value)) output[key] = value;
    else if (typeof value === 'boolean' || value === null) output[key] = value;
  }
  return output;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
