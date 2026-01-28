/**
 * Cloud Evolvers - Pricing Admin API
 * Cloudflare Pages Function
 *
 * Allows admins to update pricing (stored in KV)
 * Protected by admin password
 */

interface Env {
  API_KEY: string;
  ADMIN_PASSWORD: string;
  PRICING_KV?: KVNamespace;
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key, x-admin-password',
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};

// Admin authentication middleware
function authenticateAdmin(request: Request, env: Env): { authenticated: boolean; error?: string } {
  const apiKey = request.headers.get('x-api-key');
  const adminPassword = request.headers.get('x-admin-password');

  if (!apiKey || apiKey !== env.API_KEY) {
    return { authenticated: false, error: 'Invalid API key' };
  }

  if (!adminPassword || adminPassword !== env.ADMIN_PASSWORD) {
    return { authenticated: false, error: 'Invalid admin password' };
  }

  return { authenticated: true };
}

// GET - Fetch current pricing from KV (or defaults)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const auth = authenticateAdmin(request, env);
  if (!auth.authenticated) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized', details: auth.error }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    let pricing = null;

    // Try to get pricing from KV if available
    if (env.PRICING_KV) {
      const stored = await env.PRICING_KV.get('pricing', 'json');
      if (stored) {
        pricing = stored;
      }
    }

    // Return stored pricing or indicate defaults are in use
    return new Response(
      JSON.stringify({
        source: pricing ? 'kv' : 'defaults',
        pricing: pricing,
        message: pricing
          ? 'Custom pricing loaded from KV storage'
          : 'Using default pricing (no custom pricing set)',
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching pricing:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};

// POST/PUT - Update pricing in KV
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const auth = authenticateAdmin(request, env);
  if (!auth.authenticated) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized', details: auth.error }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await request.json();

    // Validate pricing structure
    if (!body || typeof body !== 'object') {
      return new Response(
        JSON.stringify({ error: 'Bad Request', details: 'Invalid pricing data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if KV is available
    if (!env.PRICING_KV) {
      return new Response(
        JSON.stringify({
          error: 'Service Unavailable',
          details: 'KV storage not configured. Please set up PRICING_KV binding in Cloudflare dashboard.',
          instructions: [
            '1. Go to Cloudflare Dashboard > Workers & Pages > cloud-evolvers-train',
            '2. Go to Settings > Functions > KV namespace bindings',
            '3. Add binding: Variable name = PRICING_KV, KV namespace = create new or select existing',
          ],
        }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Store pricing with timestamp
    const pricingData = {
      ...body,
      lastUpdated: new Date().toISOString(),
      updatedBy: 'admin',
    };

    await env.PRICING_KV.put('pricing', JSON.stringify(pricingData));

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Pricing updated successfully',
        pricing: pricingData,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error updating pricing:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE - Reset pricing to defaults
export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  const auth = authenticateAdmin(request, env);
  if (!auth.authenticated) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized', details: auth.error }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    if (env.PRICING_KV) {
      await env.PRICING_KV.delete('pricing');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Pricing reset to defaults',
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error resetting pricing:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};
