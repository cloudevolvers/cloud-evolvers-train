/**
 * 🏥 Health Check Function - System Status Monitoring
 * 
 * Features:
 * - Token service status monitoring
 * - Environment configuration validation
 * - Performance statistics reporting
 * - Uptime tracking
 */

const { app } = require('@azure/functions');
const TokenService = require('../services/token-service');

const startTime = new Date();

app.http('health', {
    methods: ['GET', 'OPTIONS'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Health check endpoint called');

        // 🔐 SECURITY: API Key Authentication (Optional for health checks)
        const apiKey = request.headers.get('x-api-key') || request.headers.get('X-API-Key');
        const expectedApiKey = process.env.API_KEY;
        
        // Universal CORS headers (allow all origins)
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

        // Health checks can be public, but API key gives more detailed info
        const isAuthenticated = apiKey && expectedApiKey && apiKey === expectedApiKey;

        const responseHeaders = {
            ...corsHeaders,
            'Content-Type': 'application/json'
        };

        try {
            const now = new Date();
            const uptime = Math.floor((now.getTime() - startTime.getTime()) / 1000);
            
            // Check environment variables
            const envCheck = {
                tenantId: !!process.env.EMAIL_AZURE_TENANT_ID,
                clientId: !!process.env.EMAIL_AZURE_CLIENT_ID,
                clientSecret: !!process.env.EMAIL_AZURE_CLIENT_SECRET,
                apiKey: !!process.env.API_KEY,
                emailSender: !!process.env.EMAIL_SENDER
            };
            
            // Get token service statistics
            const tokenStats = TokenService.getStats();
            
            // Determine overall health
            const missingEnvVars = Object.entries(envCheck)
                .filter(([key, value]) => !value)
                .map(([key]) => key);
            
            const isHealthy = missingEnvVars.length === 0;
            
            const healthStatus = isAuthenticated ? {
                status: isHealthy ? 'healthy' : 'degraded',
                timestamp: now.toISOString(),
                uptime: `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${uptime % 60}s`,
                environment: {
                    ...envCheck,
                    missing: missingEnvVars
                },
                tokenService: {
                    ...tokenStats,
                    lastCheck: now.toISOString()
                },
                version: '2.0.0-optimized'
            } : {
                status: isHealthy ? 'healthy' : 'degraded',
                timestamp: now.toISOString(),
                message: 'Provide X-API-Key header for detailed information'
            };
            
            context.log(`Health status: ${healthStatus.status}`);
            if (missingEnvVars.length > 0) {
                context.log(`Missing environment variables: ${missingEnvVars.join(', ')}`);
            }
            
            return {
                status: isHealthy ? 200 : 503,
                headers: responseHeaders,
                body: JSON.stringify(healthStatus, null, 2)
            };
            
        } catch (error) {
            context.log(`❌ Health check failed: ${error.message}`);
            
            return {
                status: 500,
                headers: responseHeaders,
                body: JSON.stringify({
                    status: 'unhealthy',
                    error: error.message,
                    timestamp: new Date().toISOString()
                })
            };
        }
    }
});
