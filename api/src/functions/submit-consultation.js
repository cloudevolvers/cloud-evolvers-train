const { app } = require('@azure/functions');
const GraphService = require('../services/graph-service');

app.http('submit-consultation', {
    methods: ['POST', 'OPTIONS'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Processing training consultation form submission - v2.1');
        context.log('Environment check - API_KEY present:', !!process.env.API_KEY);
        context.log('Environment check - EMAIL_AZURE_CLIENT_SECRET present:', !!process.env.EMAIL_AZURE_CLIENT_SECRET);

        // 🔐 SECURITY: API Key Authentication
        const apiKey = request.headers.get('x-api-key') || request.headers.get('X-API-Key');
        const expectedApiKey = process.env.API_KEY;
        
        // Universal CORS headers (allow all origins since we're using API key auth)
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-API-Key',
            'Access-Control-Max-Age': '86400'
        };

        // Handle preflight OPTIONS request
        if (request.method === 'OPTIONS') {
            return {
                status: 200,
                headers: corsHeaders
            };
        }

        // 🔐 SECURITY: Validate API key
        if (!expectedApiKey) {
            context.log('ERROR: API_KEY environment variable not configured');
            return {
                status: 500,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    error: 'Server configuration error - API_KEY environment variable missing',
                    success: false 
                })
            };
        }

        if (!apiKey || apiKey !== expectedApiKey) {
            context.log(`WARNING: Invalid API key provided: ${apiKey ? 'present but incorrect' : 'missing'}`);
            context.log(`Expected API key starts with: ${expectedApiKey.substring(0, 3)}...`);
            return {
                status: 401,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Unauthorized: Invalid API key' })
            };
        }

        try {
            // 🔐 SECURITY: Enhanced Input Validation
            const body = await request.json();
            
            // Basic required field validation
            if (!body.name || !body.email || !body.training) {
                return {
                    status: 400,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ error: 'Missing required fields: name, email, and training are required' })
                };
            }

            // 🔐 SECURITY: Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(body.email)) {
                return {
                    status: 400,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ error: 'Invalid email format' })
                };
            }

            // 🔐 SECURITY: Input length validation
            if (body.name.length > 100 || body.email.length > 254 || 
                (body.message && body.message.length > 2000)) {
                return {
                    status: 400,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ error: 'Input too long' })
                };
            }

            // 🔐 SECURITY: Environment variable validation with debug info
            const tenantId = process.env.EMAIL_AZURE_TENANT_ID;
            const clientId = process.env.EMAIL_AZURE_CLIENT_ID;
            const clientSecret = process.env.EMAIL_AZURE_CLIENT_SECRET;

            if (!tenantId || !clientId || !clientSecret) {
                const missingVars = [];
                if (!tenantId) missingVars.push('EMAIL_AZURE_TENANT_ID');
                if (!clientId) missingVars.push('EMAIL_AZURE_CLIENT_ID');
                if (!clientSecret) missingVars.push('EMAIL_AZURE_CLIENT_SECRET');
                
                context.log(`ERROR: Missing Azure AD environment variables: ${missingVars.join(', ')}`);
                context.log(`DEBUG: Tenant ID: ${tenantId ? tenantId.substring(0, 3) + '...' : 'missing'}`);
                context.log(`DEBUG: Client ID: ${clientId ? clientId.substring(0, 3) + '...' : 'missing'}`);
                
                return {
                    status: 500,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ 
                        error: 'Azure AD environment variables missing or incorrect',
                        debug: {
                            tenantId: tenantId ? tenantId.substring(0, 3) + '...' : 'missing',
                            clientId: clientId ? clientId.substring(0, 3) + '...' : 'missing',
                            missing: missingVars
                        }
                    })
                };
            }

            // Send email via optimized Graph service with token caching
            await GraphService.sendConsultationEmail(body, context);

            return {
                status: 200,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Training consultation request submitted successfully! We will contact you within 24 hours.' 
                })
            };

        } catch (error) {
            context.log('ERROR processing training consultation:', error);
            
            return {
                status: 500,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Failed to submit consultation request. Please try again later.' })
            };
        }
    }
});
