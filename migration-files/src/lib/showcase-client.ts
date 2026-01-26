/**
 * Client library for interacting with the showcase API
 */

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  category: string;
  url?: string;
  tags?: string[];
  features?: string[]; // Add features property
  createdAt?: string;
  updatedAt?: string;
}

// Helper function to ensure we're using proper URLs in both client and server environments
function getBaseUrl() {
  if (typeof window === 'undefined') {
    // Server-side: use absolute URL - detect the correct port in development
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
      // In development, Next.js usually runs on 8084, backend on 3000
      return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8084';
    }
    return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  } else {
    // Client-side: use relative URL
    return '';
  }
}

/**
 * Fetch all showcase items from the API
 */
export async function getShowcaseItems(): Promise<ShowcaseItem[]> {
  try {
    const baseUrl = getBaseUrl();
    // Updated URL to use new Next.js API route
    const urlPath = '/api/showcase';
    const timestamp = Date.now();
    
    // Create URL safely based on environment
    const finalUrl = baseUrl 
      ? new URL(`${urlPath}?t=${timestamp}`, baseUrl).toString()
      : `${urlPath}?t=${timestamp}`;
    
    const response = await fetch(finalUrl, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch showcase items: ${response.status}`);
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching showcase items:', error);
    return [];
  }
}

/**
 * Create a new showcase item
 */
export async function createShowcaseItem(item: Partial<ShowcaseItem>): Promise<ShowcaseItem> {
  const baseUrl = getBaseUrl();
  const urlPath = '/api/showcase';
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to create showcase item: ${response.status}`);
  }
  
  const result = await response.json();
  return result.success ? result.item : result;
}

/**
 * Delete a showcase item
 */
export async function deleteShowcaseItem(id: string): Promise<void> {
  const baseUrl = getBaseUrl();
  const urlPath = `/api/showcase/${id}`;
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error(`Failed to delete showcase item: ${response.status}`);
  }
}

/**
 * Upload an image for a showcase item
 */
export async function uploadShowcaseImage(file: File): Promise<{ url: string }> {
  const formData = new FormData();
  formData.append('image', file);
  
  const baseUrl = getBaseUrl();
  const urlPath = '/api/images';
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.status}`);
  }
  
  return response.json();
}

/**
 * Get the correct URL for a showcase image
 */
export function getShowcaseImageUrl(imagePath: string): string {
  if (!imagePath) return '/images/placeholder.jpg';
  
  // If it's already a full URL, return it
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it starts with / it's already a path, use as-is (this covers /showcase/, /images/, etc.)
  if (imagePath.startsWith('/')) {
    return imagePath;
  }
  
  // If it's just a filename (no leading slash), assume it's in the showcase folder
  return `/showcase/${imagePath}`;
}

/**
 * Update an existing showcase item
 */
export async function updateShowcaseItem(id: string, item: Partial<ShowcaseItem>): Promise<ShowcaseItem> {
  const baseUrl = getBaseUrl();
  const urlPath = `/api/showcase/${id}`;
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update showcase item: ${response.status}`);
  }
  
  const result = await response.json();
  return result.success ? result.item : result;
}
