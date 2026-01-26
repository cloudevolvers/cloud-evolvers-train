/**
 * Helper utilities for consistent image path handling across the application
 */

/**
 * Normalizes image paths for showcase items
 */
export function normalizeShowcaseImagePath(imagePath: string): string {
  if (!imagePath) return '/images/showcase/default.jpg';
  
  // If it already starts with /backend or http, use as is
  if (imagePath.startsWith('/backend') || imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // For images that might be just filenames
  if (!imagePath.startsWith('/')) {
    return `/backend/images/showcase-images/file/${imagePath}`;
  }
  
  // Default case - already a properly formatted path
  return imagePath;
}

/**
 * Normalizes image paths for blog posts
 */
export function normalizeBlogImagePath(imagePath: string): string {
  if (!imagePath) return '/images/blog/default-blog-image.jpg';
  
  // If it already starts with http or /backend, use as is
  if (imagePath.startsWith('http') || imagePath.startsWith('/backend')) {
    return imagePath;
  }
  
  // If it's an absolute path starting with /images, use as is
  if (imagePath.startsWith('/images/')) {
    return imagePath;
  }
  
  // For simple filenames, add the /images/blog/ prefix
  return `/images/blog/${imagePath}`;
}

/**
 * Generates a fallback image for blog posts based on category
 */
export function getBlogCategoryFallbackImage(category?: string): string {
  if (!category) return '/images/blog/default-blog-image.jpg';
  
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('security')) {
    return '/images/blog/security.jpg';
  } else if (categoryLower.includes('api') || categoryLower.includes('management')) {
    return '/images/blog/api-management.jpg';
  } else if (categoryLower.includes('identity')) {
    return '/images/blog/identity.jpg';
  } else if (categoryLower.includes('devops')) {
    return '/images/blog/devops.jpg';
  }
  
  return '/images/blog/default-blog-image.jpg';
}
