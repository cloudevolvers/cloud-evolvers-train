/**
 * Utility functions for handling images, especially normalizing showcase image paths
 */

/**
 * Normalizes showcase image paths to ensure they work in both development and production
 */
export function normalizeShowcaseImagePath(imagePath: string): string {
  if (!imagePath) return '/images/showcase/default.jpg';
  
  // If already an absolute URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If it's already an API path for showcase images, return as is
  if (imagePath.startsWith('/api/images/showcase-images/file/')) {
    return imagePath;
  }
  
  // If it's a filename without path
  if (!imagePath.includes('/')) {
    return `/api/images/showcase-images/file/${imagePath}`;
  }
  
  // Extract the filename for any other path format
  const parts = imagePath.split('/');
  const filename = parts[parts.length - 1];
  
  return `/api/images/showcase-images/file/${filename}`;
}

/**
 * Detects if the current environment is production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Helper function to create standard image props for Next.js Image component
 */
export function getShowcaseImageProps(src: string, alt: string = '') {
  const normalizedSrc = normalizeShowcaseImagePath(src);
  
  return {
    src: normalizedSrc,
    alt,
    width: 0,
    height: 0,
    sizes: "(max-width: 768px) 100vw, 50vw",
    style: { width: '100%', height: 'auto' },
    priority: false,
  };
}
