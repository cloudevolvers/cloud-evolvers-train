import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';

/**
 * GET /api/images/training-images/file/[filename] - Serve training images
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await context.params;
    
    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      );
    }

    // Security: Prevent path traversal
    const safeFilename = path.basename(filename);
    const filePath = path.join(process.cwd(), 'public', 'images', 'training', safeFilename);

    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      // Return a default training image if file doesn't exist
      const defaultImagePath = path.join(process.cwd(), 'public', 'cloudevolvers-logo', 'logo', 'vector', 'logo.svg');
      try {
        await fs.access(defaultImagePath);
        const defaultImageBuffer = await fs.readFile(defaultImagePath);
        return new NextResponse(new Uint8Array(defaultImageBuffer), {
          headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=31536000', // 1 year
          },
        });
      } catch {
        // If no default image, return a gradient placeholder
        return NextResponse.json(
          { error: 'Image not found', suggestion: 'Upload training images via admin panel' },
          { status: 404 }
        );
      }
    }

    // Read and serve the file
    const fileBuffer = await fs.readFile(filePath);
    const ext = path.extname(safeFilename).toLowerCase();
    
    let contentType = 'image/jpeg'; // default
    switch (ext) {
      case '.png':
        contentType = 'image/png';
        break;
      case '.gif':
        contentType = 'image/gif';
        break;
      case '.webp':
        contentType = 'image/webp';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
    }

    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000', // 1 year
      },
    });
  } catch (error) {
    console.error('Error serving training image:', error);
    return NextResponse.json(
      { error: 'Failed to serve image' },
      { status: 500 }
    );
  }
}
