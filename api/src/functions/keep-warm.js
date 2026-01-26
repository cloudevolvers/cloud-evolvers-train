/**
 * 🔥 Keep-Warm Function - Maintains Token Cache Performance
 * 
 * This function runs every 30 minutes to:
 * - Keep the Function App warm and ready
 * - Pre-fetch and cache Microsoft Graph tokens
 * - Ensure optimal response times for form submissions
 * 
 * Timer Schedule: every 30 minutes
 */

const { app } = require('@azure/functions');
const TokenService = require('../services/token-service');

app.timer('keep-warm', {
    // Run every 30 minutes
    schedule: '0 */30 * * * *',
    handler: async (myTimer, context) => {
        const startTime = Date.now();
        context.log('🔥 Keep-warm function triggered');
        context.log(`⏰ Timer info: ${JSON.stringify(myTimer)}`);
        
        try {
            // Warm up the token cache
            const tokenWarmupSuccess = await TokenService.warmupCache(context);
            
            // Get performance statistics
            const stats = TokenService.getStats();
            context.log('📊 Token service statistics:', stats);
            
            // Check environment variables
            const envStatus = {
                tenantId: !!process.env.EMAIL_AZURE_TENANT_ID,
                clientId: !!process.env.EMAIL_AZURE_CLIENT_ID,
                clientSecret: !!process.env.EMAIL_AZURE_CLIENT_SECRET,
                apiKey: !!process.env.API_KEY,
                sender: !!process.env.EMAIL_SENDER
            };
            
            context.log('🔐 Environment variables status:', envStatus);
            
            const executionTime = Date.now() - startTime;
            
            if (tokenWarmupSuccess) {
                context.log(`✅ Keep-warm completed successfully in ${executionTime}ms`);
                context.log('🚀 Function App is warmed up and ready for requests');
            } else {
                context.log(`⚠️ Keep-warm completed with warnings in ${executionTime}ms`);
            }
            
            // Optional: Make a test health check
            try {
                const healthCheck = await fetch(`${process.env.WEBSITE_HOSTNAME || 'localhost'}/api/health`);
                context.log(`💓 Health check: ${healthCheck.ok ? 'OK' : 'FAILED'}`);
            } catch (healthError) {
                context.log(`⚠️ Health check failed: ${healthError.message}`);
            }
            
        } catch (error) {
            context.log(`❌ Keep-warm function failed: ${error.message}`);
            context.log(`Stack trace: ${error.stack}`);
        }
    }
});