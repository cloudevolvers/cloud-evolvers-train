/**
 * Image Diagnostics Utility
 * Helps identify and fix common image loading issues
 */

/**
 * Converts a backend image path to a proper URL format that Next.js can process
 * This ensures that image optimization works correctly
 */
export function normalizeImagePath(imagePath: string | undefined): string {
  if (!imagePath) return '';
  
  // If already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Handle backend image paths specifically
  if (imagePath.startsWith('/backend/images/')) {
    // For showcase images, ensure proper path format
    if (imagePath.includes('showcase-images/file/')) {
      // Use direct path to bypass image optimization for local backend images
      return imagePath;
    }
    
    // For blog images
    if (imagePath.includes('/blog/')) {
      return imagePath;
    }
    
    // For service images
    if (imagePath.includes('/services/')) {
      return imagePath;
    }
    
    // Default case for other backend images
    return imagePath;
  }
  
  // Handle relative paths
  if (!imagePath.startsWith('/')) {
    // Assume it's a relative path to the appropriate section
    if (imagePath.includes('showcase-')) {
      return `/backend/images/showcase-images/file/${imagePath}`;
    } else if (imagePath.includes('blog-')) {
      return `/backend/images/blog/${imagePath}`;
    } else if (imagePath.includes('service-')) {
      return `/backend/images/services/${imagePath}`;
    }
  }
  
  // Default case - return as is
  return imagePath;
}

/**
 * Check if an image URL is valid and accessible
 * @param url The image URL to check
 * @returns Promise resolving to true if image is accessible, false otherwise
 */
export async function isImageAccessible(url: string): Promise<boolean> {
  if (!url) return false;
  
  try {
    const normalized = normalizeImagePath(url);
    const response = await fetch(normalized, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking image accessibility:', error);
    return false;
  }
}

/**
 * Log details about an image to help with debugging
 */
export function logImageDetails(imagePath: string | undefined, componentName: string): void {
  if (!imagePath) {
    console.warn(`[${componentName}] Image path is empty or undefined`);
    return;
  }
  
  const normalized = normalizeImagePath(imagePath);
  console.log(`[${componentName}] Image details:`, {
    original: imagePath,
    normalized,
    isBackendPath: imagePath.startsWith('/backend/'),
    isShowcasePath: imagePath.includes('showcase-images'),
    isRelativePath: !imagePath.startsWith('/') && !imagePath.startsWith('http')
  });
}
