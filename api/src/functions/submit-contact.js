const { app } = require('@azure/functions');
const GraphService = require('../services/graph-service');

app.http('submit-contact', {
    methods: ['POST', 'OPTIONS'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Processing contact form submission - v1.0');
        
        // 🌐 CORS Headers (Required for web browsers)
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, x-api-key'
        };

        // Handle CORS preflight (OPTIONS) requests
        if (request.method === 'OPTIONS') {
            return {
                status: 204,
                headers: corsHeaders
            };
        }

        try {
            // Parse request body
            let requestBody;
            try {
                const rawBody = await request.text();
                if (!rawBody) {
                    throw new Error('Empty request body');
                }
                requestBody = JSON.parse(rawBody);
                context.log('Successfully parsed request body');
            } catch (parseError) {
                context.log(`ERROR: Failed to parse request body: ${parseError.message}`);
                return {
                    status: 400,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ 
                        success: false, 
                        error: 'Invalid JSON in request body' 
                    })
                };
            }

            // Validate required fields (no API key required for contact form)
            const { name, email, message } = requestBody;
            if (!name || !email || !message) {
                const missingFields = [];
                if (!name) missingFields.push('name');
                if (!email) missingFields.push('email');
                if (!message) missingFields.push('message');
                
                context.log(`ERROR: Missing required fields: ${missingFields.join(', ')}`);
                return {
                    status: 400,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ 
                        success: false, 
                        error: `Missing required fields: ${missingFields.join(', ')}` 
                    })
                };
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                context.log('ERROR: Invalid email format');
                return {
                    status: 400,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ 
                        success: false, 
                        error: 'Invalid email format' 
                    })
                };
            }

            // 📧 Microsoft Graph API - Send Email using optimized service
            try {
                await GraphService.sendContactEmail({ name, email, message }, context);
                context.log('✅ Email sent successfully via Microsoft Graph API');

                // Success response
                return {
                    status: 200,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ 
                        success: true, 
                        message: 'Thank you for your message! We will get back to you soon.' 
                    })
                };

            } catch (emailError) {
                context.log(`ERROR: Failed to send email: ${emailError.message}`);
                
                // Return success anyway since contact was "received"
                return {
                    status: 200,
                    headers: { 
                        ...corsHeaders,
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ 
                        success: true, 
                        message: 'Contact form submitted successfully (we will follow up manually if needed)' 
                    })
                };
            }

        } catch (error) {
            context.log(`ERROR: Unexpected error in contact form handler: ${error.message}`);
            context.log(`ERROR: Stack trace: ${error.stack}`);
            
            return {
                status: 500,
                headers: { 
                    ...corsHeaders,
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ 
                    success: false, 
                    error: 'An unexpected error occurred. Please try again later.' 
                })
            };
        }
    }
});
