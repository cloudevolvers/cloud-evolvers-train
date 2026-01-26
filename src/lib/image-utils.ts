/**
 * Image Utilities - Fallback handling for missing images
 * 
 * Provides utilities for handling image loading with graceful fallbacks
 */

// Default fallback image (a beautiful space/cloud image)
export const FALLBACK_IMAGE = '/images/unsplash/azure-cloud-infrastructure-modern.jpg';

// Image path mappings for missing images
const imageMappings: Record<string, string> = {
  // Professional images that are missing - map to existing unsplash images
  '/professional-images/cloud-infrastructure-modern.jpg': '/images/unsplash/azure-cloud-infrastructure-modern.jpg',
  '/professional-images/corporate-training-room.jpg': '/images/unsplash/business-training-session.jpg',
  '/professional-images/cloud-services-dashboard.jpg': '/images/unsplash/business-analytics-dashboard.jpg',
  '/professional-images/team-collaboration-modern.jpg': '/images/unsplash/business-team-collaboration-modern.jpg',
  
  // Missing unsplash images - map to similar existing ones
  '/images/unsplash/security-key-visualization.jpg': '/images/unsplash/azure-security-center.jpg',
  '/images/unsplash/serverless-computing-cloud.jpg': '/images/unsplash/cloud-server-modern.jpg',
};

/**
 * Get the actual image path, with fallback to existing images
 * @param imagePath - Original image path
 * @returns Mapped image path or fallback
 */
export function getImagePath(imagePath: string): string {
  if (!imagePath) return FALLBACK_IMAGE;
  
  // Check if we have a mapping for this image
  if (imageMappings[imagePath]) {
    return imageMappings[imagePath];
  }
  
  return imagePath;
}

/**
 * Handle image error by setting fallback
 * @param event - Image error event
 * @param fallbackSrc - Optional custom fallback image
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc: string = FALLBACK_IMAGE
): void {
  const target = event.currentTarget;
  if (target.src !== fallbackSrc) {
    target.src = fallbackSrc;
  }
}

/**
 * Create onError handler for image elements
 * @param fallbackSrc - Optional custom fallback image
 * @returns Error handler function
 */
export function createImageErrorHandler(fallbackSrc?: string) {
  return (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    handleImageError(event, fallbackSrc);
  };
}
