import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, name, section = 'general', source = 'external', makePublic = true } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'No image URL provided' },
        { status: 400 }
      );
    }

    // Fetch the image from the external URL
    const imageResponse = await fetch(url);
    
    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch image from external URL' },
        { status: 400 }
      );
    }

    // Get the image blob
    const imageBlob = await imageResponse.blob();
    
    // Validate it's an image
    if (!imageBlob.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'URL does not point to a valid image' },
        { status: 400 }
      );
    }

    // Create a File object from the blob
    const fileName = name || `external-image-${Date.now()}`;
    const fileExtension = imageBlob.type.split('/')[1] || 'jpg';
    const fullFileName = `${fileName}.${fileExtension}`;
    
    // Create FormData for the existing upload endpoint
    const uploadFormData = new FormData();
    uploadFormData.append('image', imageBlob, fullFileName);
    uploadFormData.append('section', section);
    uploadFormData.append('public', makePublic.toString());
    uploadFormData.append('name', fileName);
    uploadFormData.append('source', source);

    // Forward to existing upload endpoint which handles Azure Blob Storage
    const uploadResponse = await fetch(`${request.nextUrl.origin}/api/images/upload`, {
      method: 'POST',
      body: uploadFormData,
      headers: {
        // Forward any auth headers
        ...(request.headers.get('authorization') && {
          'authorization': request.headers.get('authorization')!
        }),
        ...(request.headers.get('cookie') && {
          'cookie': request.headers.get('cookie')!
        })
      }
    });

    const uploadResult = await uploadResponse.json();

    if (!uploadResponse.ok) {
      return NextResponse.json(
        { error: uploadResult.error || 'Failed to save image' },
        { status: uploadResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'External image saved successfully',
      url: uploadResult.url,
      fileName: fullFileName,
      source
    });

  } catch (error) {
    console.error('Error saving external image:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
