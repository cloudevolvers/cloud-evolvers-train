import { NextRequest, NextResponse } from 'next/server';
import { getStorageService } from '@/lib/next-storage-service';

/**
 * GET /api/images/blog-images/file/[filename] - Serve blog image files
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await context.params;
    const storageService = getStorageService();
    
    const result = await storageService.getFile(filename, 'blog');
    
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
    console.error('Error serving blog image:', error);
    return NextResponse.json(
      { error: 'Failed to serve image' },
      { status: 500 }
    );
  }
}
