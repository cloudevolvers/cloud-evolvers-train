import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
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
const getShowcaseDataPath = (): string => {
  return path.join(process.cwd(), 'public', 'showcase.json');
};

async function readShowcaseData(): Promise<ShowcaseItem[]> {
  try {
    const dataPath = getShowcaseDataPath();
    
    if (!existsSync(dataPath)) {
      console.log('No showcase data file found, returning empty array');
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

// GET /api/showcase/category/[category] - Get showcases by category
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await context.params;
    
    if (!SHOWCASE_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Invalid category. Available categories: ${SHOWCASE_CATEGORIES.join(', ')}` 
        },
        { status: 400 }
      );
    }
    
    const allItems = await readShowcaseData();
    const categoryItems = allItems.filter(item => item.category === category);
    
    return NextResponse.json(categoryItems);
  } catch (error) {
    console.error('Error fetching showcase category:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
