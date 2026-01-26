import { getApiKeys, isProviderAvailable } from '../services/keyVaultService.js';

/**
 * Health check route handler
 */
export const healthCheck = (req, res) => {
    const apiKeys = getApiKeys();
    
    res.json({
        status: 'healthy',
        service: 'Cloud Evolvers Image Server',
        version: '1.0.0',
        providers: Object.entries(apiKeys)
            .filter(([_, key]) => key && key !== 'placeholder' && key !== 'x')
            .map(([provider, _]) => provider),
        timestamp: new Date().toISOString()
    });
};