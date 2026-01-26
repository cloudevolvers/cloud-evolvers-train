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

async function writeShowcaseData(data: ShowcaseItem[]): Promise<void> {
  try {
    const dataPath = getShowcaseDataPath();
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing showcase data:', error);
    throw new Error('Could not save showcase data.');
  }
}

// GET /api/showcase/[id] - Get a specific showcase item by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const items = await readShowcaseData();
    const item = items.find(i => i.id === id);
    
    if (item) {
      return NextResponse.json(item);
    } else {
      return NextResponse.json(
        { success: false, error: 'Showcase item not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error fetching showcase item:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// PUT /api/showcase/[id] - Update an existing showcase item
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    
    // Get all items
    const items = await readShowcaseData();
    const itemIndex = items.findIndex(i => i.id === id);
    
    if (itemIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Showcase item not found' },
        { status: 404 }
      );
    }

    const updatedItem: ShowcaseItem = {
      ...items[itemIndex],
      ...body,
      id,
      updatedAt: new Date().toISOString(),
    };

    // Basic validation
    if (!updatedItem.title || !updatedItem.image) {
      return NextResponse.json(
        { success: false, error: 'Title and image are required.' },
        { status: 400 }
      );
    }

    // Update the item
    items[itemIndex] = updatedItem;
    await writeShowcaseData(items);

    return NextResponse.json({ success: true, item: updatedItem });
  } catch (error) {
    console.error('Error updating showcase item:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE /api/showcase/[id] - Delete a showcase item
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    
    // Get all items
    const items = await readShowcaseData();
    const filteredItems = items.filter(i => i.id !== id);
    
    if (filteredItems.length === items.length) {
      return NextResponse.json(
        { success: false, error: 'Showcase item not found' },
        { status: 404 }
      );
    }

    // Save the updated list
    await writeShowcaseData(filteredItems);
    
    return NextResponse.json({ success: true, message: 'Showcase item deleted' });
  } catch (error) {
    console.error('Error deleting showcase item:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
