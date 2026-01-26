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

// Read services data for a specific language
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

// GET /api/services/[slug] - Get specific service by slug
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('lang') || 'en';
    
    console.log(`[API] Fetching service with slug "${slug}" for language "${language}"`);
    
    const services = await readServicesData(language);
    
    // Return specific service by slug
    const service = Object.values(services).find(s => s.slug === slug);
    if (service) {
      console.log(`[API] Found service: ${service.title || service.name}`);
      return NextResponse.json(service);
    } else {
      console.log(`[API] Service not found for slug: "${slug}"`);
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}
