/**
 * Secret health monitoring endpoint
 * Tests Azure AD authentication and sends alert email if it fails.
 * Called weekly via GitHub Actions cron.
 *
 * GET /api/monitor?alert=true  — test auth + send alert on failure
 * GET /api/monitor             — test auth only (dry run)
 */

interface Env {
  FORM_API_KEY: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}

const ALERT_EMAIL = 'yair@cloudevolvers.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Require API key for the monitor endpoint
  const apiKey = request.headers.get('x-api-key');
  if (!apiKey || apiKey !== env.FORM_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const url = new URL(request.url);
  const shouldAlert = url.searchParams.get('alert') === 'true';

  const emailClientId = env.EMAIL_CLIENT_ID;
  const result: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    checks: {} as Record<string, unknown>,
  };

  // Check 1: Are all required env vars present?
  const envCheck = {
    EMAIL_TENANT_ID: !!env.EMAIL_TENANT_ID,
    EMAIL_CLIENT_ID: !!env.EMAIL_CLIENT_ID,
    EMAIL_CLIENT_SECRET: !!env.EMAIL_CLIENT_SECRET,
    EMAIL_SENDER_ADDRESS: !!env.EMAIL_SENDER_ADDRESS,
  };
  const allEnvPresent = Object.values(envCheck).every(Boolean);
  (result.checks as Record<string, unknown>).envVars = { ok: allEnvPresent, details: envCheck };

  if (!allEnvPresent) {
    result.status = 'error';
    result.message = 'Missing environment variables';
    return respond(result);
  }

  // Check 2: Can we get an Azure AD token?
  let tokenOk = false;
  let tokenError = '';
  try {
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

    if (tokenResponse.ok) {
      tokenOk = true;
    } else {
      const errorBody = await tokenResponse.text();
      tokenError = `HTTP ${tokenResponse.status}`;
      // Check for expired secret specifically
      if (errorBody.includes('7000222') || errorBody.includes('expired')) {
        tokenError = 'CLIENT_SECRET_EXPIRED';
      }
    }
  } catch (e) {
    tokenError = e instanceof Error ? e.message : 'Unknown error';
  }

  (result.checks as Record<string, unknown>).azureAuth = { ok: tokenOk, error: tokenError || undefined };
  result.status = tokenOk ? 'healthy' : 'error';
  result.message = tokenOk
    ? 'All checks passed'
    : `Azure AD auth failed: ${tokenError}`;

  // If auth failed and alerting is enabled, try to send alert via alternative method
  if (!tokenOk && shouldAlert) {
    // We can't use Graph API since the token is broken.
    // Log the failure for GitHub Actions to pick up.
    result.alertRequired = true;
    result.alertEmail = ALERT_EMAIL;
    result.alertReason = tokenError;
  }

  return respond(result);
};

function respond(data: Record<string, unknown>) {
  const status = data.status === 'healthy' ? 200 : 503;
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
