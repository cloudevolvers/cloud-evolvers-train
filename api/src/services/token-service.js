/**
 * 🚀 Azure Functions Token Service - Optimized for Performance
 * 
 * Features:
 * - In-memory token caching with automatic refresh
 * - Pre-emptive token renewal (5 minutes before expiry)
 * - Thread-safe token acquisition
 * - Comprehensive error handling and retry logic
 * - Performance monitoring and logging
 */

const { ClientSecretCredential } = require('@azure/identity');

class TokenService {
    constructor() {
        this.tokenCache = new Map();
        this.refreshPromises = new Map(); // Prevent concurrent refresh attempts
        this.stats = {
            cacheHits: 0,
            cacheMisses: 0,
            tokenRefreshes: 0,
            errors: 0
        };
    }

    /**
     * Get cached access token or fetch new one
     * @param {Object} context - Azure Functions context for logging
     * @returns {Promise<string>} Access token
     */
    async getGraphToken(context) {
        const cacheKey = 'graph-token';
        const now = new Date().getTime();
        
        try {
            // Check if we have a valid cached token
            const cachedToken = this.tokenCache.get(cacheKey);
            
            if (cachedToken && this.isTokenValid(cachedToken, now)) {
                this.stats.cacheHits++;
                context?.log(`✅ Token cache HIT - expires in ${Math.round((cachedToken.expiresAt - now) / 1000 / 60)} minutes`);
                return cachedToken.accessToken;
            }

            this.stats.cacheMisses++;
            context?.log(`🔄 Token cache MISS - fetching new token`);

            // Prevent concurrent token refresh attempts
            if (this.refreshPromises.has(cacheKey)) {
                context?.log(`⏳ Token refresh in progress - waiting...`);
                return await this.refreshPromises.get(cacheKey);
            }

            // Start token refresh
            const refreshPromise = this.fetchNewToken(context);
            this.refreshPromises.set(cacheKey, refreshPromise);

            try {
                const newToken = await refreshPromise;
                
                // Cache the new token with metadata
                const tokenData = {
                    accessToken: newToken.token,
                    expiresAt: now + (newToken.expiresOnTimestamp * 1000), // Convert to milliseconds
                    fetchedAt: now
                };
                
                this.tokenCache.set(cacheKey, tokenData);
                this.stats.tokenRefreshes++;
                
                const expiresInMinutes = Math.round((tokenData.expiresAt - now) / 1000 / 60);
                context?.log(`🎯 New token cached - expires in ${expiresInMinutes} minutes`);
                
                return newToken.token;
                
            } finally {
                // Clean up refresh promise
                this.refreshPromises.delete(cacheKey);
            }

        } catch (error) {
            this.stats.errors++;
            context?.log(`❌ Token service error: ${error.message}`);
            
            // Clean up failed refresh promise
            this.refreshPromises.delete(cacheKey);
            throw new Error(`Failed to obtain access token: ${error.message}`);
        }
    }

    /**
     * Check if token is valid and not close to expiry
     * @param {Object} tokenData - Cached token data
     * @param {number} now - Current timestamp
     * @returns {boolean} Whether token is valid
     */
    isTokenValid(tokenData, now) {
        if (!tokenData || !tokenData.accessToken || !tokenData.expiresAt) {
            return false;
        }
        
        // Refresh token 5 minutes before expiry (300,000 ms)
        const refreshBuffer = 5 * 60 * 1000;
        return (tokenData.expiresAt - now) > refreshBuffer;
    }

    /**
     * Fetch new token from Azure AD
     * @param {Object} context - Azure Functions context for logging
     * @returns {Promise<Object>} Token response
     */
    async fetchNewToken(context) {
        const tenantId = process.env.EMAIL_AZURE_TENANT_ID;
        const clientId = process.env.EMAIL_AZURE_CLIENT_ID;
        const clientSecret = process.env.EMAIL_AZURE_CLIENT_SECRET;

        if (!tenantId || !clientId || !clientSecret) {
            const missingVars = [];
            if (!tenantId) missingVars.push('EMAIL_AZURE_TENANT_ID');
            if (!clientId) missingVars.push('EMAIL_AZURE_CLIENT_ID');
            if (!clientSecret) missingVars.push('EMAIL_AZURE_CLIENT_SECRET');
            
            throw new Error(`Missing Azure AD environment variables: ${missingVars.join(', ')}`);
        }

        context?.log(`🔐 Fetching new token from Azure AD (tenant: ${tenantId.substring(0, 8)}...)`);

        const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
        
        // Get token with retry logic
        const maxRetries = 3;
        let lastError;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const tokenResponse = await credential.getToken(['https://graph.microsoft.com/.default']);
                context?.log(`✅ Token acquired successfully on attempt ${attempt}`);
                return tokenResponse;
                
            } catch (error) {
                lastError = error;
                context?.log(`⚠️ Token fetch attempt ${attempt} failed: ${error.message}`);
                
                if (attempt < maxRetries) {
                    // Exponential backoff: 1s, 2s, 4s
                    const delay = Math.pow(2, attempt - 1) * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        
        throw lastError;
    }

    /**
     * Warm up the token cache (for keep-warm function)
     * @param {Object} context - Azure Functions context for logging
     */
    async warmupCache(context) {
        context?.log(`🔥 Warming up token cache...`);
        
        try {
            await this.getGraphToken(context);
            context?.log(`✅ Token cache warmed up successfully`);
            return true;
            
        } catch (error) {
            context?.log(`❌ Failed to warm up token cache: ${error.message}`);
            return false;
        }
    }

    /**
     * Get performance statistics
     * @returns {Object} Performance stats
     */
    getStats() {
        const totalRequests = this.stats.cacheHits + this.stats.cacheMisses;
        return {
            ...this.stats,
            cacheHitRate: totalRequests > 0 ? (this.stats.cacheHits / totalRequests * 100).toFixed(1) + '%' : '0%',
            totalRequests
        };
    }

    /**
     * Clear the token cache (for testing/debugging)
     */
    clearCache() {
        this.tokenCache.clear();
        this.refreshPromises.clear();
        this.stats = {
            cacheHits: 0,
            cacheMisses: 0,
            tokenRefreshes: 0,
            errors: 0
        };
    }
}

// Export singleton instance
module.exports = new TokenService();
