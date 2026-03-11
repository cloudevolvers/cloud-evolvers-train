/**
 * Health check endpoint that verifies configuration
 */

interface Env {
  FORM_API_KEY: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
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
      FORM_API_KEY: env.FORM_API_KEY ? '✅ configured' : '❌ missing',
      EMAIL_TENANT_ID: env.EMAIL_TENANT_ID ? '✅ configured' : '❌ missing',
      EMAIL_CLIENT_ID: env.EMAIL_CLIENT_ID ? '✅ configured' : '❌ missing',
      EMAIL_CLIENT_SECRET: env.EMAIL_CLIENT_SECRET ? `✅ configured (${env.EMAIL_CLIENT_SECRET.length} chars)` : '❌ missing',
      EMAIL_SENDER_ADDRESS: env.EMAIL_SENDER_ADDRESS ? `✅ ${env.EMAIL_SENDER_ADDRESS}` : '❌ missing',
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
