import { Service } from '@/types/service';

// Server-only imports
let fs: any = null;
let path: any = null;
let matter: any = null;

// Initialize server-only modules
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

export function getAllServices(): Service[] {
  // Only run file operations on server
  if (!isServer || !fs || !path || !matter) {
    return [];
  }
  
  // Ensure the directory exists
  if (!fs.existsSync(SERVICES_MARKDOWN_DIR)) {
    return [];
  }
  
  // Get all .md files
  const files = fs.readdirSync(SERVICES_MARKDOWN_DIR).filter(file => file.endsWith('.md'));

  // Parse each file and convert to Service objects
  const services = files.map(file => {
    const fullPath = path.join(SERVICES_MARKDOWN_DIR, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id: data.id || path.basename(file, '.md'),
      title: data.title || '',
      slug: data.slug || path.basename(file, '.md'),
      description: data.description || '',
      icon: data.icon || 'Settings', // Default icon
      content,
      features: data.features || [],
      isPublished: data.isPublished !== false, // Default to true if not specified
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
      order: data.order || 0
    } as Service;
  });

  // Sort by order or publishedAt date
  return services.sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getServiceBySlug(slug: string): Service | undefined {
  if (!isServer) {
    return undefined;
  }
  
  const services = getAllServices();
  return services.find(service => service.slug === slug);
}
