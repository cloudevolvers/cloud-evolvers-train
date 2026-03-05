/**
 * Cloud Evolvers - Pricing API
 * Cloudflare Pages Function
 *
 * Reads pricing from D1 database (cloud-evolvers-pricing)
 * Falls back to hardcoded data if D1 is unavailable
 */

interface Env {
  API_KEY: string;
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

// ═══════════════════════════════════════
// Fallback pricing (used if D1 unavailable)
// ═══════════════════════════════════════

const fallbackTrainingPricing: Record<string, any> = {
  'az-900': { code: 'AZ-900', name: 'Microsoft Azure Fundamentals', slug: 'azure-fundamentals', duration: { days: 2, hours: 16 }, pricing: { individual: { amount: 550, currency: 'EUR' }, corporate: { amount: 450, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'Practice exam voucher', 'Certification exam voucher (optional)', 'MCT-led instruction'], category: 'fundamentals' },
  'ai-900': { code: 'AI-900', name: 'Azure AI Fundamentals', slug: 'azure-ai-fundamentals', duration: { days: 2, hours: 16 }, pricing: { individual: { amount: 550, currency: 'EUR' }, corporate: { amount: 450, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'Practice exam voucher', 'MCT-led instruction'], category: 'fundamentals' },
  'az-security-fundamentals': { code: '', name: 'Azure Security Fundamentals', slug: 'azure-security-fundamentals', duration: { days: 2, hours: 16 }, pricing: { individual: { amount: 550, currency: 'EUR' }, corporate: { amount: 450, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Security hands-on labs', 'Practice exam voucher', 'MCT-led instruction'], category: 'fundamentals' },
  'ms-900': { code: 'MS-900', name: 'Microsoft 365 Fundamentals', slug: 'microsoft-365-fundamentals', duration: { days: 1, hours: 8 }, pricing: { individual: { amount: 550, currency: 'EUR' }, corporate: { amount: 450, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'Practice exam voucher', 'MCT-led instruction'], category: 'fundamentals' },
  'pl-900': { code: 'PL-900', name: 'Microsoft Power Platform Fundamentals', slug: 'power-platform-fundamentals', duration: { days: 1, hours: 8 }, pricing: { individual: { amount: 550, currency: 'EUR' }, corporate: { amount: 450, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'Practice exam voucher', 'MCT-led instruction'], category: 'fundamentals' },
  'sc-900': { code: 'SC-900', name: 'Security, Compliance & Identity Fundamentals', slug: 'security-compliance-identity-fundamentals', duration: { days: 2, hours: 16 }, pricing: { individual: { amount: 550, currency: 'EUR' }, corporate: { amount: 450, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'Practice exam voucher', 'MCT-led instruction'], category: 'fundamentals' },
  'copilot-fundamentals': { code: '', name: 'Microsoft 365 Copilot & Agent Administration Fundamentals', slug: 'copilot-agent-administration-fundamentals', duration: { days: 1, hours: 8 }, pricing: { individual: { amount: 550, currency: 'EUR' }, corporate: { amount: 450, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'MCT-led instruction'], category: 'fundamentals' },
  'az-104': { code: 'AZ-104', name: 'Microsoft Azure Administrator', slug: 'azure-administrator', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1795, currency: 'EUR' }, corporate: { amount: 1495, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs with Azure sandbox', 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-104-mastery': { code: 'AZ-104', name: 'Azure Administrator Mastery', slug: 'azure-administrator-mastery', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1495, currency: 'EUR' }, corporate: { amount: 1295, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Advanced hands-on labs', 'Real-world scenarios', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-204': { code: 'AZ-204', name: 'Developing Solutions for Microsoft Azure', slug: 'azure-developer', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 2195, currency: 'EUR' }, corporate: { amount: 1895, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on development labs', 'Azure DevOps access', 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-305': { code: 'AZ-305', name: 'Designing Microsoft Azure Infrastructure Solutions', slug: 'azure-solutions-architect', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1795, currency: 'EUR' }, corporate: { amount: 1495, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Architecture design workshops', 'Real-world case studies', 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-400': { code: 'AZ-400', name: 'Designing and Implementing Microsoft DevOps Solutions', slug: 'azure-devops-engineer', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1795, currency: 'EUR' }, corporate: { amount: 1495, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'CI/CD pipeline labs', 'Azure DevOps organization access', 'GitHub Actions labs', 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-500': { code: 'AZ-500', name: 'Microsoft Azure Security Technologies', slug: 'azure-security-engineer', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1795, currency: 'EUR' }, corporate: { amount: 1495, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Security labs and scenarios', 'Microsoft Defender for Cloud access', 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'security' },
  'ai-102': { code: 'AI-102', name: 'Designing and Implementing a Microsoft Azure AI Solution', slug: 'azure-ai-engineer', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1950, currency: 'EUR' }, corporate: { amount: 1650, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Azure AI Services labs', 'OpenAI integration workshops', 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'ai' },
  'az-700': { code: 'AZ-700', name: 'Azure Network Engineer Associate', slug: 'azure-network-engineer', duration: { days: 3, hours: 24 }, pricing: { individual: { amount: 1295, currency: 'EUR' }, corporate: { amount: 1095, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Networking labs', 'Practice exam access', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-140': { code: 'AZ-140', name: 'Azure Virtual Desktop Specialty', slug: 'azure-virtual-desktop', duration: { days: 3, hours: 24 }, pricing: { individual: { amount: 1595, currency: 'EUR' }, corporate: { amount: 1395, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'AVD hands-on labs', 'Practice exam access', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-220': { code: 'AZ-220', name: 'Azure IoT Developer Specialty', slug: 'azure-iot-developer', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1895, currency: 'EUR' }, corporate: { amount: 1595, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'IoT Hub labs', 'Practice exam access', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-stack-hub': { code: '', name: 'Azure Stack Hub Administration', slug: 'azure-stack-hub', duration: { days: 3, hours: 24 }, pricing: { individual: { amount: 1295, currency: 'EUR' }, corporate: { amount: 1095, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'azure' },
  'az-support': { code: '', name: 'Azure Support Engineer Excellence', slug: 'azure-support-engineer', duration: { days: 2, hours: 16 }, pricing: { individual: { amount: 895, currency: 'EUR' }, corporate: { amount: 750, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Troubleshooting labs', 'MCT-led instruction'], category: 'azure' },
  'ai-bootcamp': { code: '', name: 'Azure AI Developer Bootcamp', slug: 'azure-ai-developer-bootcamp', duration: { days: 3, hours: 24 }, pricing: { individual: { amount: 1395, currency: 'EUR' }, corporate: { amount: 1195, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Azure AI Services labs', 'OpenAI integration workshops', 'Hands-on projects', 'MCT-led instruction'], category: 'ai' },
  'sc-100': { code: 'SC-100', name: 'Microsoft Cybersecurity Architect', slug: 'cybersecurity-architect', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 2195, currency: 'EUR' }, corporate: { amount: 1895, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Security architecture labs', 'Practice exam access', 'Certification exam voucher (optional)', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'security' },
  'ms-102': { code: 'MS-102', name: 'Microsoft 365 Administrator', slug: 'microsoft-365-administrator', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1795, currency: 'EUR' }, corporate: { amount: 1495, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'Practice exam access', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'microsoft-365' },
  'ms-identity': { code: '', name: 'Microsoft 365 Identity & Access Administrator', slug: 'microsoft-365-identity-access-administrator', duration: { days: 3, hours: 24 }, pricing: { individual: { amount: 1195, currency: 'EUR' }, corporate: { amount: 995, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Identity labs', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'microsoft-365' },
  'ms-security': { code: '', name: 'Microsoft 365 Security Administrator', slug: 'microsoft-365-security-administrator', duration: { days: 3, hours: 24 }, pricing: { individual: { amount: 1195, currency: 'EUR' }, corporate: { amount: 995, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Security labs', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'microsoft-365' },
  'copilot-mastery': { code: '', name: 'Microsoft 365 Copilot Mastery', slug: 'microsoft-365-copilot-mastery', duration: { days: 1, hours: 8 }, pricing: { individual: { amount: 595, currency: 'EUR' }, corporate: { amount: 495, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Copilot hands-on labs', 'Prompt engineering workshops', 'MCT-led instruction'], category: 'microsoft-365' },
  'teams-admin': { code: '', name: 'Teams Advanced Administration', slug: 'teams-advanced-administration', duration: { days: 2, hours: 16 }, pricing: { individual: { amount: 895, currency: 'EUR' }, corporate: { amount: 750, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Teams administration labs', 'MCT-led instruction'], category: 'microsoft-365' },
  'sc-200': { code: 'SC-200', name: 'Microsoft Security Operations Analyst', slug: 'security-operations-analyst', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1895, currency: 'EUR' }, corporate: { amount: 1595, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Microsoft Sentinel labs', 'Practice exam access', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'security' },
  'pl-automation': { code: '', name: 'Power Platform Automation Bootcamp', slug: 'power-platform-automation', duration: { days: 2, hours: 16 }, pricing: { individual: { amount: 895, currency: 'EUR' }, corporate: { amount: 750, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Power Automate labs', 'Power Apps labs', 'MCT-led instruction'], category: 'power-platform' },
  'ws-hybrid-admin': { code: '', name: 'Windows Server Hybrid Administrator', slug: 'windows-server-hybrid-administrator', duration: { days: 3, hours: 24 }, pricing: { individual: { amount: 1095, currency: 'EUR' }, corporate: { amount: 895, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'windows-server' },
  'ws-hybrid-infra': { code: '', name: 'Windows Server Hybrid Infrastructure', slug: 'windows-server-hybrid-infrastructure', duration: { days: 4, hours: 32 }, pricing: { individual: { amount: 1595, currency: 'EUR' }, corporate: { amount: 1395, currency: 'EUR', minParticipants: 5 }, custom: true }, includes: ['Official Microsoft courseware', 'Hands-on labs', 'MCT-led instruction', 'Post-training support (30 days)'], category: 'windows-server' },
};

const fallbackServicePricing: Record<string, any> = {
  'consulting-hourly': { name: 'Cloud Consulting (Hourly)', pricing: { amount: 175, currency: 'EUR', unit: 'hour' }, description: 'Expert Azure consulting and architecture guidance', minHours: 4 },
  'consulting-day': { name: 'Cloud Consulting (Day Rate)', pricing: { amount: 1295, currency: 'EUR', unit: 'day' }, description: 'Full day on-site or remote consulting', savings: '7% discount vs hourly' },
  'health-check': { name: 'Azure Health Check', pricing: { amount: 2495, currency: 'EUR', unit: 'package' }, description: 'Comprehensive Azure environment assessment', includes: ['Security posture review', 'Cost optimization analysis', 'Architecture assessment', 'Best practices recommendations', 'Executive summary report'] },
  'managed-services-starter': { name: 'Managed Services - Starter', pricing: { amount: 995, currency: 'EUR', unit: 'month' }, description: 'Basic Azure management and monitoring', includes: ['24/7 monitoring', 'Monthly cost reports', 'Security updates', 'Email support (business hours)'] },
  'managed-services-professional': { name: 'Managed Services - Professional', pricing: { amount: 2495, currency: 'EUR', unit: 'month' }, description: 'Full Azure management with priority support', includes: ['Everything in Starter', 'Priority phone support', 'Quarterly architecture reviews', 'Performance optimization', 'Disaster recovery planning'] },
};

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

  if (requireAuth && (!apiKey || apiKey !== env.API_KEY)) {
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
