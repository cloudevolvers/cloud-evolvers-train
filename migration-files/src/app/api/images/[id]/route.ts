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
 * DELETE /api/images/[id] - Delete an image by ID (filename)
 */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const isAuthenticated = await requireAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section'); // Optional: specify section via query param

    if (!id) {
      return NextResponse.json(
        { error: 'No image ID provided' },
        { status: 400 }
      );
    }

    const storageService = getStorageService();
    let success = false;

    if (section) {
      // Delete from specific section
      const sectionLower = section.toLowerCase();
      
      if (['blog', 'services', 'showcase', 'icons'].includes(sectionLower)) {
        success = await storageService.deleteFile(id, sectionLower as 'blog' | 'showcase' | 'services' | 'icons');
      } else {
        return NextResponse.json(
          { error: 'Invalid section specified' },
          { status: 400 }
        );
      }
    } else {
      // Try to delete from blog section by default if no section provided
      console.warn(`No section specified for deleting ${id}, attempting delete from blog.`);
      success = await storageService.deleteFile(id, 'blog');
      
      // If not found in blog, try other sections
      if (!success) {
        for (const cat of ['showcase', 'services', 'icons']) {
          success = await storageService.deleteFile(id, cat as 'showcase' | 'services' | 'icons');
          if (success) break;
        }
      }
    }

    if (!success) {
      return NextResponse.json(
        { error: 'Image not found in specified section or could not be deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Image deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/images/[id] - Update image metadata (placeholder for future implementation)
 */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const isAuthenticated = await requireAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const updates = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      );
    }

    // For now, just return success - metadata updates can be implemented later
    return NextResponse.json({ 
      success: true, 
      message: 'Image metadata update not yet implemented',
      id,
      updates 
    });
  } catch (error) {
    console.error('Error updating image metadata:', error);
    return NextResponse.json(
      { 
        error: 'Failed to update image metadata', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
