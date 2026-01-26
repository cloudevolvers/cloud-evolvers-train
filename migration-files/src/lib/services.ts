import { Service } from '@/types/service';

// Server-only imports
let fs: any = null;
let path: any = null;
let matter: any = null;

// Initialize server-only modules conditionally
if (typeof window === 'undefined') {
  try {
    fs = require('fs');
    path = require('path');
    matter = require('gray-matter');
  } catch (e) {
    console.error('Failed to import server-only modules:', e);
  }
}

const isServer = typeof window === 'undefined';

// Define paths safely
export const SERVICES_MARKDOWN_DIR = isServer && path 
  ? path.join(process.cwd(), 'src/data/services')
  : '';

// Create directory if it doesn't exist (server-side only)
if (isServer && fs && path) {
  try {
    if (!fs.existsSync(SERVICES_MARKDOWN_DIR)) {
      fs.mkdirSync(SERVICES_MARKDOWN_DIR, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating services directory:', error);
  }
}

/**
 * Fetch all services from the Express backend
 */
export async function getAllServices(): Promise<Service[]> {
  try {
    // In server component
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const host = process.env.VERCEL_URL || 'localhost:3000';
    const url = `${protocol}://${host}/backend/services`;
    
    const response = await fetch(url, { 
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' } 
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }
    
    const data = await response.json();
    return data.success && data.services ? data.services : [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

/**
 * Fetch a single service by slug from the Express backend
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    // In server component
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const host = process.env.VERCEL_URL || 'localhost:3000';
    const url = `${protocol}://${host}/backend/services/${slug}`;
    
    const response = await fetch(url, { 
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' } 
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch service: ${response.status}`);
    }
    
    const data = await response.json();
    return data.success && data.service ? data.service : null;
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    return null;
  }
}