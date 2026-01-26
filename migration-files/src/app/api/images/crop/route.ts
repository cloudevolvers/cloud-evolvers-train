import { NextRequest, NextResponse } from 'next/server';
import { handleGeneralUpload } from '@/lib/image-service';

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
 * POST /api/images/crop - Upload a cropped version of an image
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

    // Convert File to a format compatible with the existing service
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create a file object similar to multer's format (memory storage for crop)
    const multerLikeFile = {
      fieldname: 'image',
      originalname: file.name,
      encoding: 'binary',
      mimetype: file.type,
      buffer: buffer,
      size: file.size,
      filename: file.name
    };

    const body = {
      metadata: metadata || '{}',
      section: section || 'blog'
    };

    try {
      const result = await handleGeneralUpload(multerLikeFile, body);
      return NextResponse.json(result);
    } catch (serviceError) {
      throw serviceError;
    }
  } catch (error) {
    console.error('Error uploading cropped image:', error);
    return NextResponse.json(
      { 
        error: 'Failed to upload cropped image', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
