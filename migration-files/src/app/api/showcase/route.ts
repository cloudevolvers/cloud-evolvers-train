import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  category: string;
  url?: string;
  tags?: string[];
  features: string[];
  createdAt: string;
  updatedAt: string;
  order?: number;
}

// Available showcase categories
const SHOWCASE_CATEGORIES = [
  'platform',
  'file-management', 
  'administration',
  'user-experience',
  'development'
];

// Simple data access using public/showcase.json
const getShowcaseDataPath = (lang: string = 'en'): string => {
  // Try language-specific file first, fallback to main file
  const langPath = path.join(process.cwd(), 'public', `showcase-${lang}.json`);
  const defaultPath = path.join(process.cwd(), 'public', 'showcase.json');
  
  return existsSync(langPath) ? langPath : defaultPath;
};

async function readShowcaseData(lang: string = 'en'): Promise<ShowcaseItem[]> {
  try {
    const dataPath = getShowcaseDataPath(lang);
    
    if (!existsSync(dataPath)) {
      console.log(`No showcase data file found for ${lang}, returning empty array`);
      return [];
    }
    
    const data = await fs.readFile(dataPath, 'utf-8');
    const items = JSON.parse(data) as ShowcaseItem[];
    
    // Sort by order if available, otherwise by createdAt
    return items.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  } catch (error) {
    console.error('Error reading showcase data:', error);
    return [];
  }
}

async function writeShowcaseData(data: ShowcaseItem[]): Promise<void> {
  try {
    const dataPath = getShowcaseDataPath();
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing showcase data:', error);
    throw new Error('Could not save showcase data.');
  }
}

// GET /api/showcase - Get all showcase items
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';
    const limit = searchParams.get('limit');
    
    const items = await readShowcaseData(lang);
    
    // If no showcase items exist, return a "Coming Soon" placeholder
    if (items.length === 0) {
      const comingSoonItem: ShowcaseItem = {
        id: 'coming-soon',
        title: lang === 'nl' ? 'Binnenkort beschikbaar' : 'Coming Soon',
        description: lang === 'nl' 
          ? 'Spannende showcase projecten komen binnenkort. Kom later terug om onze uitgelichte werkzaamheden en klantoplossingen te bekijken.'
          : 'Exciting showcase projects are coming soon. Check back later to see our featured work and client solutions.',
        image: '/images/placeholder.jpg',
        category: lang === 'nl' ? 'aankondiging' : 'announcement',
        features: lang === 'nl' 
          ? ['Showcase projecten in ontwikkeling', 'Klantsuccesverhalen', 'Uitgelichte oplossingen']
          : ['Showcase projects in development', 'Client success stories', 'Featured solutions'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      return NextResponse.json([comingSoonItem]);
    }
    
    // Apply limit if specified
    const finalItems = limit ? items.slice(0, parseInt(limit)) : items;
    
    return NextResponse.json(finalItems);
  } catch (error) {
    console.error('Error fetching showcase items:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST /api/showcase - Create a new showcase item (Auth handled by middleware)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { category, ...itemData } = body;
    
    // Validate category
    if (!category || !SHOWCASE_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Invalid or missing category. Available categories: ${SHOWCASE_CATEGORIES.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Get all existing items
    const items = await readShowcaseData();
    
    const newItem: ShowcaseItem = {
      id: `showcase-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      category,
      ...itemData,
    };

    // Basic validation
    if (!newItem.title || !newItem.image) {
      return NextResponse.json(
        { success: false, error: 'Title and image are required.' },
        { status: 400 }
      );
    }

    // Add the new item and save
    items.push(newItem);
    await writeShowcaseData(items);
    
    return NextResponse.json(
      { success: true, item: newItem },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating showcase item:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
