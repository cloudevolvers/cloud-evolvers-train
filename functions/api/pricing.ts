/**
 * Cloud Evolvers - Pricing API
 * Cloudflare Pages Function
 *
 * Returns pricing information for training courses and services
 */

interface Env {
  API_KEY: string;
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
};

// Training course pricing data
const trainingPricing = {
  // Azure Fundamentals
  'az-900': {
    code: 'AZ-900',
    name: 'Microsoft Azure Fundamentals',
    duration: { days: 1, hours: 8 },
    pricing: {
      individual: { amount: 495, currency: 'EUR' },
      corporate: { amount: 395, currency: 'EUR', minParticipants: 5 },
      custom: true,
    },
    includes: [
      'Official Microsoft courseware',
      'Hands-on labs',
      'Practice exam voucher',
      'Certification exam voucher (optional)',
      'MCT-led instruction',
    ],
  },
  // Azure Administrator
  'az-104': {
    code: 'AZ-104',
    name: 'Microsoft Azure Administrator',
    duration: { days: 4, hours: 32 },
    pricing: {
      individual: { amount: 1995, currency: 'EUR' },
      corporate: { amount: 1695, currency: 'EUR', minParticipants: 5 },
      custom: true,
    },
    includes: [
      'Official Microsoft courseware',
      'Hands-on labs with Azure sandbox',
      'Practice exam access',
      'Certification exam voucher (optional)',
      'MCT-led instruction',
      'Post-training support (30 days)',
    ],
  },
  // Azure Developer
  'az-204': {
    code: 'AZ-204',
    name: 'Developing Solutions for Microsoft Azure',
    duration: { days: 5, hours: 40 },
    pricing: {
      individual: { amount: 2495, currency: 'EUR' },
      corporate: { amount: 2095, currency: 'EUR', minParticipants: 5 },
      custom: true,
    },
    includes: [
      'Official Microsoft courseware',
      'Hands-on development labs',
      'Azure DevOps access',
      'Practice exam access',
      'Certification exam voucher (optional)',
      'MCT-led instruction',
      'Post-training support (30 days)',
    ],
  },
  // Azure Solutions Architect
  'az-305': {
    code: 'AZ-305',
    name: 'Designing Microsoft Azure Infrastructure Solutions',
    duration: { days: 4, hours: 32 },
    pricing: {
      individual: { amount: 2295, currency: 'EUR' },
      corporate: { amount: 1895, currency: 'EUR', minParticipants: 5 },
      custom: true,
    },
    includes: [
      'Official Microsoft courseware',
      'Architecture design workshops',
      'Real-world case studies',
      'Practice exam access',
      'Certification exam voucher (optional)',
      'MCT-led instruction',
      'Post-training support (30 days)',
    ],
  },
  // Azure DevOps Engineer
  'az-400': {
    code: 'AZ-400',
    name: 'Designing and Implementing Microsoft DevOps Solutions',
    duration: { days: 5, hours: 40 },
    pricing: {
      individual: { amount: 2495, currency: 'EUR' },
      corporate: { amount: 2095, currency: 'EUR', minParticipants: 5 },
      custom: true,
    },
    includes: [
      'Official Microsoft courseware',
      'CI/CD pipeline labs',
      'Azure DevOps organization access',
      'GitHub Actions labs',
      'Practice exam access',
      'Certification exam voucher (optional)',
      'MCT-led instruction',
      'Post-training support (30 days)',
    ],
  },
  // Azure Security Engineer
  'az-500': {
    code: 'AZ-500',
    name: 'Microsoft Azure Security Technologies',
    duration: { days: 4, hours: 32 },
    pricing: {
      individual: { amount: 2295, currency: 'EUR' },
      corporate: { amount: 1895, currency: 'EUR', minParticipants: 5 },
      custom: true,
    },
    includes: [
      'Official Microsoft courseware',
      'Security labs and scenarios',
      'Microsoft Defender for Cloud access',
      'Practice exam access',
      'Certification exam voucher (optional)',
      'MCT-led instruction',
      'Post-training support (30 days)',
    ],
  },
  // AI Engineer
  'ai-102': {
    code: 'AI-102',
    name: 'Designing and Implementing a Microsoft Azure AI Solution',
    duration: { days: 4, hours: 32 },
    pricing: {
      individual: { amount: 2295, currency: 'EUR' },
      corporate: { amount: 1895, currency: 'EUR', minParticipants: 5 },
      custom: true,
    },
    includes: [
      'Official Microsoft courseware',
      'Azure AI Services labs',
      'OpenAI integration workshops',
      'Practice exam access',
      'Certification exam voucher (optional)',
      'MCT-led instruction',
      'Post-training support (30 days)',
    ],
  },
};

// Service packages pricing
const servicePricing = {
  'consulting-hourly': {
    name: 'Cloud Consulting (Hourly)',
    pricing: { amount: 175, currency: 'EUR', unit: 'hour' },
    description: 'Expert Azure consulting and architecture guidance',
    minHours: 4,
  },
  'consulting-day': {
    name: 'Cloud Consulting (Day Rate)',
    pricing: { amount: 1295, currency: 'EUR', unit: 'day' },
    description: 'Full day on-site or remote consulting',
    savings: '7% discount vs hourly',
  },
  'health-check': {
    name: 'Azure Health Check',
    pricing: { amount: 2495, currency: 'EUR', unit: 'package' },
    description: 'Comprehensive Azure environment assessment',
    includes: [
      'Security posture review',
      'Cost optimization analysis',
      'Architecture assessment',
      'Best practices recommendations',
      'Executive summary report',
    ],
  },
  'managed-services-starter': {
    name: 'Managed Services - Starter',
    pricing: { amount: 995, currency: 'EUR', unit: 'month' },
    description: 'Basic Azure management and monitoring',
    includes: [
      '24/7 monitoring',
      'Monthly cost reports',
      'Security updates',
      'Email support (business hours)',
    ],
  },
  'managed-services-professional': {
    name: 'Managed Services - Professional',
    pricing: { amount: 2495, currency: 'EUR', unit: 'month' },
    description: 'Full Azure management with priority support',
    includes: [
      'Everything in Starter',
      'Priority phone support',
      'Quarterly architecture reviews',
      'Performance optimization',
      'Disaster recovery planning',
    ],
  },
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);

  // Optional API key validation for pricing (can be public or protected)
  const apiKey = request.headers.get('x-api-key');
  const requireAuth = url.searchParams.get('auth') === 'required';

  if (requireAuth && (!apiKey || apiKey !== env.API_KEY)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized', details: 'Invalid API key' }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // Get specific course or service pricing
  const courseCode = url.searchParams.get('course');
  const serviceId = url.searchParams.get('service');
  const category = url.searchParams.get('category');

  try {
    let responseData: any;

    if (courseCode) {
      // Return specific course pricing
      const course = trainingPricing[courseCode.toLowerCase() as keyof typeof trainingPricing];
      if (!course) {
        return new Response(
          JSON.stringify({ error: 'Not Found', details: `Course ${courseCode} not found` }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      responseData = { course };
    } else if (serviceId) {
      // Return specific service pricing
      const service = servicePricing[serviceId as keyof typeof servicePricing];
      if (!service) {
        return new Response(
          JSON.stringify({ error: 'Not Found', details: `Service ${serviceId} not found` }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      responseData = { service };
    } else if (category === 'training') {
      // Return all training pricing
      responseData = { training: trainingPricing };
    } else if (category === 'services') {
      // Return all service pricing
      responseData = { services: servicePricing };
    } else {
      // Return all pricing
      responseData = {
        training: trainingPricing,
        services: servicePricing,
        currency: 'EUR',
        vatNote: 'All prices exclude 21% VAT',
        lastUpdated: '2024-01-01',
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
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
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
