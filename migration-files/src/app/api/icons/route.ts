import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

interface Icon {
  name: string;
  path: string;
  category: string;
  fileName: string;
}

/**
 * GET /api/icons - Get all icons with optional search and category filtering
 */
export async function GET(request: NextRequest) {
  const startTime = new Date();
  
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search')?.toLowerCase() || '';
    const category = searchParams.get('category')?.toLowerCase() || '';
    
    // Define the base directory for icons
    const baseIconPath = path.join(process.cwd(), 'public', 'icons');
    
    // Check if the directory exists, create if it doesn't
    if (!fs.existsSync(baseIconPath)) {
      fs.mkdirSync(baseIconPath, { recursive: true });
      console.log(`Created icons directory: ${baseIconPath}`);
    }

    // Find all SVG and image files recursively
    const icons = findIconFiles(baseIconPath);
    
    // Filter icons based on search and category
    let filteredIcons = icons;
    
    if (search) {
      filteredIcons = filteredIcons.filter(icon => 
        icon.name.toLowerCase().includes(search) ||
        icon.category.toLowerCase().includes(search) ||
        icon.fileName.toLowerCase().includes(search)
      );
    }
    
    if (category) {
      filteredIcons = filteredIcons.filter(icon => 
        icon.category.toLowerCase().includes(category)
      );
    }

    console.log(`GET /api/icons 200 ${new Date().getTime() - startTime.getTime()}ms - Found ${filteredIcons.length}/${icons.length} icons`);
    
    const uniqueCategories = Array.from(new Set(icons.map(icon => icon.category))).sort();
    
    return NextResponse.json({
      icons: filteredIcons,
      total: icons.length,
      filtered: filteredIcons.length,
      categories: uniqueCategories
    });
  } catch (error) {
    console.error('Error in /api/icons:', error);
    console.log(`GET /api/icons 500 ${new Date().getTime() - startTime.getTime()}ms - ${error instanceof Error ? error.message : 'Unknown error'}`);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

/**
 * POST /api/icons - Upload a new icon
 */
export async function POST(request: NextRequest) {
  try {
    // Simple auth check
    const authorization = request.headers.get('authorization');
    if (!authorization?.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('icon') as File;
    const category = (formData.get('category') as string) || 'general';
    const name = formData.get('name') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No icon file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only SVG, PNG, JPEG, GIF, and WebP files are allowed.' },
        { status: 400 }
      );
    }

    // Create category directory if it doesn't exist
    const categoryDir = path.join(process.cwd(), 'public', 'icons', category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Generate filename
    const timestamp = Date.now();
    const ext = path.extname(file.name);
    const safeName = (name || file.name.replace(ext, '')).replace(/[^a-zA-Z0-9-_]/g, '_');
    const fileName = `${safeName}-${timestamp}${ext}`;
    const filePath = path.join(categoryDir, fileName);

    // Save the file
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const iconPath = `/icons/${category}/${fileName}`;
    
    return NextResponse.json({
      success: true,
      icon: {
        name: safeName,
        path: iconPath,
        category: category,
        fileName: fileName
      }
    });
  } catch (error) {
    console.error('Error uploading icon:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to upload icon' 
      },
      { status: 500 }
    );
  }
}

/**
 * Recursively find all icon files in a directory
 */
function findIconFiles(dir: string, baseDir: string = dir): Icon[] {
  let results: Icon[] = [];
  
  try {
    // Get all files in the directory
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Recursively search subdirectories
        results = results.concat(findIconFiles(itemPath, baseDir));
      } else if (isIconFile(item)) {
        // Get the relative path from the base directory
        const relativePath = path.relative(baseDir, itemPath);
        const pathParts = relativePath.split(path.sep);
        
        // Extract category (first directory level)
        const category = pathParts.length > 1 ? pathParts[0] : 'general';
        
        // Clean up the file name for display
        const fileName = path.basename(item, path.extname(item));
        const displayName = fileName
          .replace(/-/g, ' ') // Replace hyphens with spaces
          .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize words
        
        // Convert to web path
        const webPath = `/icons/${relativePath.replace(/\\/g, '/')}`;
        
        results.push({
          name: displayName,
          path: webPath,
          category: category.replace(/\+/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          fileName: fileName
        });
      }
    }
  } catch (error) {
    console.error(`Error accessing directory ${dir}:`, error);
  }
  
  return results;
}

/**
 * Check if a file is an icon file
 */
function isIconFile(filename: string): boolean {
  const ext = path.extname(filename).toLowerCase();
  return ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
}
