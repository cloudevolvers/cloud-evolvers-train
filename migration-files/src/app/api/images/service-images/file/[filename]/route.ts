import { NextRequest, NextResponse } from 'next/server';
import { getStorageService } from '@/lib/next-storage-service';

/**
 * GET /api/images/service-images/file/[filename] - Serve service image files
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await context.params;
    const storageService = getStorageService();
    
    const result = await storageService.getFile(filename, 'services');
    
    if (!result) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }
    
    return new NextResponse(result.buffer, {
      headers: {
        'Content-Type': result.contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving service image:', error);
    return NextResponse.json(
      { error: 'Failed to serve image' },
      { status: 500 }
    );
  }
}
