/**
 * Health check endpoint that verifies configuration
 */

interface Env {
  API_KEY: string;
  AZURE_AD_CLIENT_ID: string;
  AZURE_AD_TENANT_ID: string;
  EMAIL_AZURE_CLIENT_ID: string;
  EMAIL_AZURE_CLIENT_SECRET: string;
  EMAIL_SENDER: string;
  ADMIN_PASSWORD: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env } = context;

  // Check which environment variables are configured (don't expose values!)
  const config = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: {
      API_KEY: env.API_KEY ? '✅ configured' : '❌ missing',
      AZURE_AD_CLIENT_ID: env.AZURE_AD_CLIENT_ID ? '✅ configured' : '❌ missing',
      AZURE_AD_TENANT_ID: env.AZURE_AD_TENANT_ID ? '✅ configured' : '❌ missing',
      EMAIL_AZURE_CLIENT_ID: env.EMAIL_AZURE_CLIENT_ID ? '✅ configured' : '❌ missing',
      EMAIL_AZURE_CLIENT_SECRET: env.EMAIL_AZURE_CLIENT_SECRET ? `✅ configured (${env.EMAIL_AZURE_CLIENT_SECRET.length} chars)` : '❌ missing',
      EMAIL_SENDER: env.EMAIL_SENDER ? `✅ ${env.EMAIL_SENDER}` : '❌ missing',
      ADMIN_PASSWORD: env.ADMIN_PASSWORD ? '✅ configured' : '❌ missing',
    },
    endpoints: {
      pricing: '/api/pricing',
      contact: '/api/submit-consultation',
      admin: '/api/pricing/admin',
    },
  };

  return new Response(JSON.stringify(config, null, 2), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
};
