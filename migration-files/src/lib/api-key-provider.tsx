"use client";
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Define API key interface
export interface ApiKey {
  id: string;
  service: string;
  key: string;
  description?: string;
  name?: string;
  createdAt: string;
  lastUpdated?: string;
  isActive: boolean;
}

// Default API keys for when storage is unavailable
const DEFAULT_API_KEYS: ApiKey[] = [
  {
    id: 'default-pexels',
    service: 'Pexels',
    key: '563492ad6f91700001000001583be10f9d1b4fc781763ff28ea302a2',
    description: 'Default Pexels API key',
    createdAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: 'default-unsplash',
    service: 'Unsplash',
    key: 'w6txB97RRtlEXFjKZStjLMVVMZBIFsL6gJ_YwFBDXvs',
    description: 'Default Unsplash API key',
    createdAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: 'default-pixabay',
    service: 'Pixabay',
    key: '41506324-43d58be8d976b8acd0a62a569',
    description: 'Default Pixabay API key',
    createdAt: new Date().toISOString(),
    isActive: true
  }
];

// Context interface
interface ApiKeysContextType {
  apiKeys: ApiKey[];
  isLoading: boolean;
  error: string | null;
  usingFallback: boolean;
  refreshApiKeys: () => Promise<void>;
  getApiKey: (service: string) => string | null;
}

// Create context
const ApiKeysContext = createContext<ApiKeysContextType>({
  apiKeys: [],
  isLoading: false,
  error: null,
  usingFallback: false,
  refreshApiKeys: async () => {},
  getApiKey: () => null
});

// Provider component
export function ApiKeyProvider({ children }: { children: React.ReactNode }) {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  // Load API keys from local storage
  const loadFromLocalStorage = useCallback(() => {
    try {
      // Check if localStorage is available (only in browser)
      if (typeof window !== 'undefined') {
        const savedKeys = localStorage.getItem('apiKeys');
        if (savedKeys) {
          return JSON.parse(savedKeys) as ApiKey[];
        }
      }
      return [];
    } catch (err) {
      console.error('Error loading API keys from localStorage:', err);
      return [];
    }
  }, []);

  // Refresh API keys
  const refreshApiKeys = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Try to get API keys from local storage first
      const localKeys = loadFromLocalStorage();
      
      if (localKeys && localKeys.length > 0) {
        setApiKeys(localKeys);
        setUsingFallback(false);
        setIsLoading(false);
        return;
      }
      
      // If no keys in local storage, use defaults
      setApiKeys(DEFAULT_API_KEYS);
      setUsingFallback(true);
      setError('Using default API keys. Keys will not be persisted.');
    } catch (err) {
      console.error('Error fetching API keys:', err);
      setApiKeys(DEFAULT_API_KEYS);
      setUsingFallback(true);
      setError('Failed to fetch API keys. Using defaults.');
    } finally {
      setIsLoading(false);
    }
  }, [loadFromLocalStorage]);

  // Get an API key by service name
  const getApiKey = useCallback((service: string): string | null => {
    // Case-insensitive service name matching
    const key = apiKeys.find(k => 
      k.service.toLowerCase() === service.toLowerCase() && k.isActive
    );
    return key ? key.key : null;
  }, [apiKeys]);

  // Initialize on mount
  useEffect(() => {
    refreshApiKeys();
  }, [refreshApiKeys]);

  return (
    <ApiKeysContext.Provider value={{
      apiKeys,
      isLoading,
      error,
      usingFallback,
      refreshApiKeys,
      getApiKey
    }}>
      {children}
    </ApiKeysContext.Provider>
  );
}

// Custom hook to use the API keys context
export function useApiKeys() {
  return useContext(ApiKeysContext);
}
