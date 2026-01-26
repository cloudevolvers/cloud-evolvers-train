/**
 * API utility functions for making fetch requests with Azure Web Apps support
 */

/**
 * Get the base URL for the current environment, with Azure Web Apps support
 * @returns Base URL string (empty for client-side, full URL for server-side)
 */
function getBaseUrl(): string {
  // Client-side: Always use relative URLs
  if (typeof window !== 'undefined') {
    return '';
  }

  // Server-side: Use Azure Web Apps hostname when available
  if (process.env.WEBSITE_HOSTNAME) {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    return `${protocol}://${process.env.WEBSITE_HOSTNAME}`;
  }

  // Fallback for local development
  return 'http://localhost:3000';
}

/**
 * Helper function to construct backend API URLs with Azure Web Apps support
 */
export function getApiUrl(path: string): string {
  const baseUrl = getBaseUrl();
  
  // Remove leading slash if present, then ensure it has one
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  const finalPath = `/${cleanPath}`;
  
  // For client-side, use relative URLs
  if (typeof window !== 'undefined') {
    return finalPath;
  }
  
  // For server-side, use full URL
  return `${baseUrl}${finalPath}`;
}

/**
 * Make a fetch request to the backend API
 */
export async function fetchApi<T>(
  path: string, 
  options?: RequestInit
): Promise<T> {
  const url = getApiUrl(path);
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${await response.text()}`);
  }
  
  return response.json();
}
