/**
 * Utility to get partially masked API keys for display purposes only.
 * This does NOT return the actual API keys used for authentication.
 * All actual API calls should go through the backend for security.
 */

interface ApiKeyInfo {
  key: string;
  exists: boolean;
}

interface ApiKeysResponse {
  unsplash: ApiKeyInfo;
  pexels: ApiKeyInfo;
  pixabay: ApiKeyInfo;
}

// Cache for API key information
let apiKeysCache: ApiKeysResponse | null = null;

/**
 * Gets a masked version of an API key for display purposes
 * The actual API calls should be made through the backend
 */
export async function getApiKey(service: string): Promise<string | null> {
  try {
    // If we have cached data, use it
    if (!apiKeysCache) {
      // Fetch from our backend endpoint
      const response = await fetch('/backend/images/api-keys');
      if (!response.ok) throw new Error('Failed to fetch API keys');
      
      apiKeysCache = await response.json();
    }
    
    // Get the requested service key info
    const serviceLower = service.toLowerCase();
    const serviceInfo = apiKeysCache![serviceLower as keyof ApiKeysResponse];
    
    if (!serviceInfo) {
      console.warn(`No API key info found for service: ${service}`);
      return null;
    }
    
    // If the key exists, return the masked version
    return serviceInfo.exists ? serviceInfo.key : null;
  } catch (error) {
    console.error('Error fetching API key info:', error);
    return null;
  }
}

/**
 * Checks if an API key exists for a given service
 */
export async function checkApiKeyExists(service: string): Promise<boolean> {
  try {
    const key = await getApiKey(service);
    return !!key;
  } catch (error) {
    return false;
  }
}

/**
 * Synchronous function for components that need immediate access
 * This should only be used for UI decisions, not actual API calls
 */
export function getApiKeySync(service: string): string | null {
  // For synchronous access, we'll use a simpler approach
  // This is only for display purposes, not for actual API access
  
  switch (service.toLowerCase()) {
    case 'unsplash':
      return '******'; // Placeholder masked key
    case 'pexels':
      return '******'; // Placeholder masked key
    case 'pixabay':
      return '******'; // Placeholder masked key
    default:
      console.warn(`No API key info found for service: ${service}`);
      return null;
  }
}
