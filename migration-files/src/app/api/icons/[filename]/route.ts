import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

/**
 * DELETE /api/icons/[filename] - Delete an icon
 */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ filename: string }> }
) {
  try {
    // Simple auth check
    const authorization = request.headers.get('authorization');
    if (!authorization?.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { filename } = await context.params;
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'general';

    if (!filename) {
      return NextResponse.json(
        { error: 'No filename provided' },
        { status: 400 }
      );
    }

    // Construct the file path
    const filePath = path.join(process.cwd(), 'public', 'icons', category, filename);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Icon not found' },
        { status: 404 }
      );
    }

    // Ensure the file is within the icons directory (security check)
    const iconsDir = path.join(process.cwd(), 'public', 'icons');
    if (!filePath.startsWith(iconsDir)) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      );
    }

    // Delete the file
    fs.unlinkSync(filePath);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Icon deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting icon:', error);
    return NextResponse.json(
      { error: 'Failed to delete icon' },
      { status: 500 }
    );
  }
}
