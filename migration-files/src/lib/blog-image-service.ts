/**
 * Blog Image Service
 * Provides functions for handling blog image operations and path normalization
 */

/**
 * Normalize a blog image path to ensure proper display in the UI
 * and compatibility with backend routes
 */
export function normalizeBlogImagePath(imagePath: string | undefined): string {
  if (!imagePath) return '/images/blog/default-blog-image.jpg';
  
  // If already an absolute URL (http or https), use it as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If it's a backend path, use it directly
  if (imagePath.startsWith('/backend/images/')) {
    return imagePath;
  }
  
  // If it's a relative path within the blog directory
  if (!imagePath.startsWith('/')) {
    return `/backend/images/blog/${imagePath}`;
  }
  
  // If it's a different format of path that starts with /
  if (imagePath.includes('/blog/')) {
    // Extract the filename if it's a path like /images/blog/filename.jpg
    const parts = imagePath.split('/');
    const filename = parts[parts.length - 1];
    return `/backend/images/blog/${filename}`;
  }
  
  // Default case - return as is
  return imagePath;
}

/**
 * Get the backend URL for uploading a blog image
 */
export function getBlogImageUploadUrl(): string {
  return '/backend/images/upload';
}

/**
 * Process a blog image upload response to ensure consistent format
 */
export function processBlogImageUploadResponse(response: any): { 
  success: boolean; 
  url: string; 
  error?: string;
} {
  if (!response || !response.success) {
    return { 
      success: false, 
      url: '/images/blog/default-blog-image.jpg',
      error: response?.error || 'Unknown error uploading image'
    };
  }
  
  return {
    success: true,
    url: response.url,
    error: undefined
  };
}

/**
 * Extract the filename from a blog image path
 */
export function getBlogImageFilename(imagePath: string): string {
  if (!imagePath) return '';
  
  // Split by / and get the last part
  const parts = imagePath.split('/');
  return parts[parts.length - 1];
}

/**
 * Check if a blog image path is valid
 */
export function isValidBlogImagePath(imagePath: string): boolean {
  if (!imagePath) return false;
  
  // Check if it's a recognized pattern
  return (
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://') ||
    imagePath.startsWith('/backend/images/blog/') ||
    imagePath.startsWith('/images/blog/')
  );
}
