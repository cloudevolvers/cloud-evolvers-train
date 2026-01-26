import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

// Azure Key Vault configuration
const KEY_VAULT_URL = process.env.KEY_VAULT_URL || 'https://xevolve-shared-kv.vault.azure.net/';

let secretClient;
let apiKeys = {};

/**
 * Initialize API keys from Azure Key Vault or fallback to environment variables
 */
export const initializeApiKeys = async () => {
    try {
        // Try to get from Azure Key Vault first
        if (process.env.NODE_ENV === 'production' || process.env.USE_KEY_VAULT === 'true') {
            console.log('🔑 Initializing Azure Key Vault connection...');
            const credential = new DefaultAzureCredential();
            secretClient = new SecretClient(KEY_VAULT_URL, credential);
            
            const secrets = await Promise.allSettled([
                secretClient.getSecret('xevolve-p-website-unsplash-access-key'),
                secretClient.getSecret('xevolve-p-website-pexels-api-key'),
                secretClient.getSecret('xevolve-p-website-pixabay-api-key')
            ]);
            
            if (secrets[0].status === 'fulfilled') {
                apiKeys.unsplash = secrets[0].value.value;
            }
            if (secrets[1].status === 'fulfilled') {
                apiKeys.pexels = secrets[1].value.value;
            }
            if (secrets[2].status === 'fulfilled') {
                apiKeys.pixabay = secrets[2].value.value;
            }
            
            console.log('✅ Successfully loaded API keys from Azure Key Vault');
        }
    } catch (error) {
        console.warn('⚠️  Failed to load from Key Vault, using environment variables:', error.message);
    }
    
    // Fallback to environment variables
    apiKeys = {
        unsplash: apiKeys.unsplash || process.env.UNSPLASH_API_KEY || process.env.UNSPLASH_ACCESS_KEY,
        pexels: apiKeys.pexels || process.env.PEXELS_API_KEY,
        pixabay: apiKeys.pixabay || process.env.PIXABAY_API_KEY
    };
    
    // Log available providers
    const availableProviders = Object.entries(apiKeys)
        .filter(([_, key]) => key && key !== 'placeholder' && key !== 'x')
        .map(([provider, _]) => provider);
    
    console.log('🔑 Available providers:', availableProviders.length > 0 ? availableProviders.join(', ') : 'None (using demo mode)');
    
    if (availableProviders.length === 0) {
        console.warn('⚠️  No API keys configured. Server will run in demo mode with limited functionality.');
    }
};

/**
 * Get the current API keys
 */
export const getApiKeys = () => apiKeys;

/**
 * Check if a specific provider is available
 */
export const isProviderAvailable = (provider) => {
    const key = apiKeys[provider.toLowerCase()];
    return key && key !== 'placeholder' && key !== 'x';
};