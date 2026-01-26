import { NextRequest, NextResponse } from 'next/server';
import { getStorageService } from '@/lib/next-storage-service';

export const runtime = 'nodejs';

// Simple auth check function
async function requireAuth(request: NextRequest) {
  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Bearer ')) {
    return false;
  }
  // Add your JWT verification logic here if needed
  return true;
}

/**
 * GET /api/images - Get storage information
 */
export async function GET() {
  try {
    const storageService = getStorageService();
    const storageInfo = storageService.getStorageInfo();
    return NextResponse.json(storageInfo);
  } catch (error) {
    console.error('Error fetching storage info:', error);
    return NextResponse.json(
      { error: 'Failed to fetch storage info' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/images - Upload a new image
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const isAuthenticated = await requireAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('image') as File;
    const metadata = formData.get('metadata') as string;
    const section = formData.get('section') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Parse metadata
    let parsedMetadata = {};
    try {
      if (metadata) {
        parsedMetadata = JSON.parse(metadata);
      }
    } catch (error) {
      console.warn('Invalid metadata JSON:', error);
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const category = (section || 'blog').toLowerCase() as 'blog' | 'showcase' | 'services';
    
    // Generate filename
    const timestamp = Date.now();
    const originalExt = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const safeOriginalName = file.name
      .replace(/\.[^/.]+$/, '') // Remove extension
      .replace(/[^a-zA-Z0-9-_]/g, '_') // Replace invalid chars
      .substring(0, 50); // Limit length
    
    const filename = `${category}-${safeOriginalName}-${timestamp}.${originalExt}`;
    
    // Save using storage service
    const storageService = getStorageService();
    const result = await storageService.saveFile(filename, buffer, category);

    return NextResponse.json({
      success: result.success,
      url: result.url,
      path: result.path,
      filename,
      metadata: parsedMetadata,
      section: category
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to upload image' 
      },
      { status: 500 }
    );
  }
}
