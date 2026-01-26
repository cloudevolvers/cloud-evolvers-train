import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const name = formData.get('name') as string;
    const section = formData.get('section') as string || 'general';
    const isPublic = formData.get('public') === 'true';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Create new FormData for the existing upload endpoint
    const uploadFormData = new FormData();
    uploadFormData.append('image', file);
    uploadFormData.append('section', section);
    uploadFormData.append('public', isPublic.toString());
    
    if (name) {
      uploadFormData.append('name', name);
    }

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

    const result = await uploadResponse.json();

    if (uploadResponse.ok && result.success) {
      // Log successful upload to blob storage
      console.log(`✅ Image uploaded to Azure Blob Storage (${process.env.AZURE_STORAGE_ACCOUNT_NAME || 'default'}):`, {
        url: result.url,
        section,
        isPublic,
        size: file.size
      });

      return NextResponse.json({
        success: true,
        url: result.url,
        name: result.name || name || file.name.split('.')[0],
        section,
        size: file.size,
        isPublic,
        uploadedAt: new Date().toISOString(),
        id: result.id || `${section}-${Date.now()}`,
        storage: {
          type: 'azure-blob',
          account: process.env.AZURE_STORAGE_ACCOUNT_NAME || 'default',
          container: process.env.AZURE_STORAGE_CONTAINER_NAME || 'images'
        }
      });
    } else {
      return NextResponse.json(
        { error: result.error || 'Upload to blob storage failed' },
        { status: uploadResponse.status }
      );
    }

  } catch (error) {
    console.error('Error uploading to Azure Blob Storage:', error);
    return NextResponse.json(
      { error: 'Failed to upload image to blob storage' },
      { status: 500 }
    );
  }
}
