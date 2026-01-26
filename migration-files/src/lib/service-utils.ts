import { Service } from '@/types/service';

/**
 * Gets a fallback image URL for services without images
 */
export function getServiceImageUrl(service: Service): string {
  // Default fallback image
  const defaultFallback = '/images/services/default-service-image.jpg';
  
  // If service has an image that starts with '/images/', use it directly
  if (service.image && service.image.startsWith('/images/')) {
    return service.image;
  }
  
  // If service has an image that doesn't have the '/images/' prefix, add it
  if (service.image && !service.image.startsWith('/images/')) {
    return `/images${service.image}`;
  }
  
  // Return default fallback
  return defaultFallback;
}

/**
 * Ensures a service has an image by providing fallbacks
 */
export function ensureServiceImage(service: Service): Service {
  if (service.image) return service;
  
  return {
    ...service,
    image: getServiceImageUrl(service),
  };
}

/**
 * Processes a service's description to add proper styling
 */
export function processServiceContent(content?: string): string {
  if (!content) return '';
  
  // If content doesn't contain HTML, wrap it in paragraph tags
  if (!content.includes('<')) {
    return `<p>${content}</p>`;
  }
  
  return content;
}

/**
 * Update a service's image in localStorage
 */
export function updateLocalStorageServiceImage(serviceId: string, imageUrl: string, alt: string = ''): boolean {
  try {
    if (typeof window === 'undefined') return false;
    
    const servicesStr = localStorage.getItem('services');
    if (!servicesStr) return false;
    
    const services = JSON.parse(servicesStr);
    
    // Find the service by ID and update
    let updated = false;
    Object.keys(services).forEach(key => {
      if (services[key].id === serviceId) {
        services[key].image = imageUrl;
        services[key].imageAlt = alt;
        updated = true;
      }
    });
    
    if (!updated) return false;
    
    // Save back to localStorage
    localStorage.setItem('services', JSON.stringify(services));
    return true;
  } catch (error) {
    console.error('Error updating service image in localStorage:', error);
    return false;
  }
}
