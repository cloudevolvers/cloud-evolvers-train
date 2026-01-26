"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types for our context
interface ApiKey {
  id: string;
  service: string;
  key: string;
  description?: string;
}

interface ApiKeyContextType {
  apiKeys: ApiKey[];
  refreshKeys: () => Promise<void>;
  getApiKey: (service: string) => string | null;
  isLoading: boolean;
}

// Create the context
const ApiKeyContext = createContext<ApiKeyContextType>({
  apiKeys: [],
  refreshKeys: async () => {},
  getApiKey: () => null,
  isLoading: false
});

// Hook for using the API key context
export const useApiKeys = () => useContext(ApiKeyContext);

// Provider component
export const ApiKeyProvider = ({ children }: { children: React.ReactNode }) => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to refresh API keys
  const refreshKeys = async () => {
    setIsLoading(true);
    try {
      // In a real application, you might fetch these from an API
      // Here we're using environment variables directly
      setApiKeys([
        {
          id: 'pexels',
          service: 'pexels',
          key: process.env.NEXT_PUBLIC_PEXELS_API_KEY || '',
          description: 'Used for image search'
        },
        {
          id: 'unsplash',
          service: 'unsplash',
          key: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY || '',
          description: 'Used for image search'
        },
        {
          id: 'pixabay',
          service: 'pixabay',
          key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY || '',
          description: 'Used for image search'
        }
      ]);
    } catch (error) {
      console.error('Error loading API keys:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get API key by service name
  const getApiKey = (service: string): string | null => {
    const key = apiKeys.find(k => k.service.toLowerCase() === service.toLowerCase());
    return key ? key.key : null;
  };

  // Load keys on mount
  useEffect(() => {
    refreshKeys();
  }, []);

  return (
    <ApiKeyContext.Provider value={{ apiKeys, refreshKeys, getApiKey, isLoading }}>
      {children}
    </ApiKeyContext.Provider>
  );
};
