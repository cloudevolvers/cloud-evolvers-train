/**
 * Cloud Evolvers - Pricing API
 * Cloudflare Pages Function
 *
 * Reads pricing from D1 database (cloud-evolvers-pricing)
 * Falls back to hardcoded data if D1 is unavailable
 */

interface Env {
  FORM_API_KEY: string;
  PRICING_DB: D1Database;
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
};

// ═══════════════════════════════════════
// D1 Database queries
// ═══════════════════════════════════════

interface TrainingRow {
  id: string;
  code: string;
  name: string;
  slug: string;
  duration_days: number;
  duration_hours: number;
  price_individual: number;
  price_corporate: number;
  corporate_min_participants: number;
  currency: string;
  custom_pricing: number;
  includes: string;
  category: string;
}

interface ServiceRow {
  id: string;
  name: string;
  price_amount: number;
  currency: string;
  unit: string;
  description: string;
  min_hours: number | null;
  savings: string | null;
  includes: string;
}

function rowToTrainingPricing(row: TrainingRow) {
  return {
    code: row.code,
    name: row.name,
    slug: row.slug,
    duration: { days: row.duration_days, hours: row.duration_hours },
    pricing: {
      individual: { amount: row.price_individual, currency: row.currency },
      corporate: { amount: row.price_corporate, currency: row.currency, minParticipants: row.corporate_min_participants },
      custom: row.custom_pricing === 1,
    },
    includes: JSON.parse(row.includes),
    category: row.category,
  };
}

function rowToServicePricing(row: ServiceRow) {
  const result: any = {
    name: row.name,
    pricing: { amount: row.price_amount, currency: row.currency, unit: row.unit },
    description: row.description,
  };
  if (row.min_hours) result.minHours = row.min_hours;
  if (row.savings) result.savings = row.savings;
  const includes = JSON.parse(row.includes);
  if (includes.length > 0) result.includes = includes;
  return result;
}

async function getTrainingFromD1(db: D1Database): Promise<Record<string, any>> {
  const { results } = await db.prepare(
    'SELECT * FROM training_pricing WHERE active = 1 ORDER BY category, price_individual'
  ).all<TrainingRow>();
  const pricing: Record<string, any> = {};
  for (const row of results) {
    pricing[row.id] = rowToTrainingPricing(row);
  }
  return pricing;
}

async function getServicesFromD1(db: D1Database): Promise<Record<string, any>> {
  const { results } = await db.prepare(
    'SELECT * FROM service_pricing WHERE active = 1'
  ).all<ServiceRow>();
  const pricing: Record<string, any> = {};
  for (const row of results) {
    pricing[row.id] = rowToServicePricing(row);
  }
  return pricing;
}

// Fallback pricing (used if D1 unavailable)
import { fallbackTrainingPricing, fallbackServicePricing } from './_pricing-fallback';

// ═══════════════════════════════════════
// API Handlers
// ═══════════════════════════════════════

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);

  // Optional API key validation
  const apiKey = request.headers.get('x-api-key');
  const requireAuth = url.searchParams.get('auth') === 'required';

  if (requireAuth && (!apiKey || apiKey !== env.FORM_API_KEY)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized', details: 'Invalid API key' }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const courseCode = url.searchParams.get('course');
  const serviceId = url.searchParams.get('service');
  const category = url.searchParams.get('category');

  try {
    // Try D1 first, fall back to hardcoded
    let trainingPricing: Record<string, any>;
    let servicePricing: Record<string, any>;
    let source = 'database';

    if (env.PRICING_DB) {
      try {
        trainingPricing = await getTrainingFromD1(env.PRICING_DB);
        servicePricing = await getServicesFromD1(env.PRICING_DB);
      } catch (dbError) {
        console.error('D1 query failed, using fallback:', dbError);
        trainingPricing = fallbackTrainingPricing;
        servicePricing = fallbackServicePricing;
        source = 'fallback';
      }
    } else {
      trainingPricing = fallbackTrainingPricing;
      servicePricing = fallbackServicePricing;
      source = 'fallback';
    }

    let responseData: any;

    if (courseCode) {
      const course = trainingPricing[courseCode.toLowerCase()];
      if (!course) {
        return new Response(
          JSON.stringify({ error: 'Not Found', details: `Course ${courseCode} not found` }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      responseData = { course, source };
    } else if (serviceId) {
      const service = servicePricing[serviceId];
      if (!service) {
        return new Response(
          JSON.stringify({ error: 'Not Found', details: `Service ${serviceId} not found` }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      responseData = { service, source };
    } else if (category === 'training') {
      responseData = { training: trainingPricing, source };
    } else if (category === 'services') {
      responseData = { services: servicePricing, source };
    } else {
      responseData = {
        training: trainingPricing,
        services: servicePricing,
        currency: 'EUR',
        vatNote: 'All prices exclude 21% VAT',
        lastUpdated: '2026-03-05',
        source,
        contact: {
          email: 'training@cloudevolvers.com',
          phone: '+31 6-34272027',
          note: 'Contact us for custom packages and volume discounts',
        },
      };
    }

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching pricing:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};
