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
 * POST /api/images/showcase-images/paste - Save a pasted (base64) showcase image
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

    const body = await request.json();
    const { image, name, mimeType, metadata = {} } = body;

    if (!image || !name || !mimeType) {
      return NextResponse.json(
        { error: 'Missing required fields: image, name, or mimeType' },
        { status: 400 }
      );
    }

    // Convert base64 to buffer
    const base64Data = image.replace(/^data:image\/[a-z]+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Generate filename
    const timestamp = Date.now();
    const safeOriginalName = name
      .replace(/\.[^/.]+$/, '') // Remove extension
      .replace(/[^a-zA-Z0-9-_]/g, '_') // Replace invalid chars
      .substring(0, 50); // Limit length
    
    const ext = mimeType.split('/')[1] || 'jpg';
    const filename = `showcase-${safeOriginalName}-${timestamp}.${ext}`;
    
    // Save using storage service
    const storageService = getStorageService();
    const result = await storageService.saveFile(filename, buffer, 'showcase');

    return NextResponse.json({
      success: result.success,
      url: result.url,
      path: result.path,
      filename,
      metadata,
      section: 'showcase'
    });
  } catch (error) {
    console.error('Error saving pasted showcase image:', error);
    return NextResponse.json(
      { error: 'Failed to save pasted showcase image' },
      { status: 500 }
    );
  }
}
