import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

interface Service {
  id: string;
  name: string;
  title?: string;
  slug: string;
  description: string;
  features?: string[];
  category?: string;
  icon?: string;
  url?: string;
  status?: string;
  lastUpdated?: string;
}

// Get the services data file path
const getServicesDataPath = (): string => {
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  if (isLocalDev) {
    return path.join(process.cwd(), '.local', 'services.json');
  }
  return path.join(process.cwd(), 'public', 'services.json');
};

// Read services data
async function readServicesData(language: string = 'en'): Promise<Record<string, Service>> {
  try {
    // Determine the services directory based on language
    const servicesDir = language === 'nl' 
      ? path.join(process.cwd(), 'public', 'services', 'nl')
      : path.join(process.cwd(), 'public', 'services');
    
    if (!existsSync(servicesDir)) {
      console.log(`Services directory not found for language ${language}, returning empty object`);
      return {};
    }

    // Read the index file to get the list of services
    const indexPath = path.join(servicesDir, 'index.json');
    if (!existsSync(indexPath)) {
      console.log(`Services index file not found for language ${language}, returning empty object`);
      return {};
    }

    const indexData = await fs.readFile(indexPath, 'utf-8');
    const index = JSON.parse(indexData);
    const services: Record<string, Service> = {};

    // Load each individual service file
    if (index.items && Array.isArray(index.items)) {
      for (const item of index.items) {
        const serviceFile = path.join(servicesDir, `${item.slug}.json`);
        if (existsSync(serviceFile)) {
          try {
            const serviceData = await fs.readFile(serviceFile, 'utf-8');
            const service = JSON.parse(serviceData);
            services[service.slug] = service;
          } catch (error) {
            console.warn(`Failed to load service ${item.slug}:`, error);
          }
        }
      }
    }

    return services;
  } catch (error) {
    console.error('Error reading services data:', error);
    return {};
  }
}

// Write services data
async function writeServicesData(data: Record<string, Service>): Promise<void> {
  try {
    const dataPath = getServicesDataPath();
    const dir = path.dirname(dataPath);
    
    // Ensure directory exists
    if (!existsSync(dir)) {
      await fs.mkdir(dir, { recursive: true });
    }
    
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing services data:', error);
    throw new Error('Could not save services data.');
  }
}

// GET /api/services - Get all services
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const language = searchParams.get('lang') || 'en';
    
    const services = await readServicesData(language);
    
    if (slug) {
      // Return specific service by slug
      const service = Object.values(services).find(s => s.slug === slug);
      if (service) {
        return NextResponse.json(service);
      } else {
        return NextResponse.json(
          { error: 'Service not found' },
          { status: 404 }
        );
      }
    }
    
    // Return all services as array
    const servicesArray = Object.values(services);
    return NextResponse.json(servicesArray);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST /api/services - Create or update a service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const services = await readServicesData();
    
    // Generate slug if not provided
    if (!body.slug && body.name) {
      body.slug = body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    
    // Generate ID if not provided
    if (!body.id) {
      body.id = body.slug || Date.now().toString();
    }
    
    // Add timestamps
    const now = new Date().toISOString();
    if (!services[body.slug]) {
      body.createdAt = now;
    }
    body.lastUpdated = now;
    
    // Save the service
    services[body.slug] = body;
    await writeServicesData(services);
    
    return NextResponse.json({ success: true, service: body });
  } catch (error) {
    console.error('Error creating/updating service:', error);
    return NextResponse.json(
      { error: 'Failed to save service' },
      { status: 500 }
    );
  }
}

// DELETE /api/services - Delete a service
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Service slug is required' },
        { status: 400 }
      );
    }
    
    const services = await readServicesData();
    
    if (!services[slug]) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }
    
    delete services[slug];
    await writeServicesData(services);
    
    return NextResponse.json({ success: true, message: 'Service deleted' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
