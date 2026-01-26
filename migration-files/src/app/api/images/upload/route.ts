import { NextRequest, NextResponse } from 'next/server';
import { handleGeneralUpload } from '@/lib/image-service';
import { requireAuth } from '@/lib/auth-middleware';

/**
 * POST /api/images/upload - Upload a new image (unified handler)
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authResult = await requireAuth(request);
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('image') as File;
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Convert formData to body object for compatibility with existing service
    const body: Record<string, any> = {};
    const formEntries = Array.from(formData.entries());
    for (const [key, value] of formEntries) {
      if (key !== 'image') {
        body[key] = value;
      }
    }

    // Convert File to a format compatible with existing service
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileObj = {
      buffer,
      originalname: file.name,
      mimetype: file.type,
      size: file.size,
    };

    const result = await handleGeneralUpload(fileObj, body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to upload image' },
      { status: 500 }
    );
  }
}
