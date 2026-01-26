import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export interface ShowcaseCategory {
  name: string;
  displayName: string;
  count: number;
}

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

// GET /api/showcase/categories - Get available categories with counts
export async function GET() {
  try {
    const items = await readShowcaseData();
    const categoriesWithCounts: ShowcaseCategory[] = [];
    
    for (const category of SHOWCASE_CATEGORIES) {
      const categoryItems = items.filter(item => item.category === category);
      categoriesWithCounts.push({
        name: category,
        displayName: category.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        count: categoryItems.length
      });
    }
    
    return NextResponse.json(categoriesWithCounts);
  } catch (error) {
    console.error('Error fetching showcase categories:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
