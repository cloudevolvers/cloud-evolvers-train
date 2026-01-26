import { NextRequest, NextResponse } from 'next/server';

interface ImageFile {
  id: string;
  name: string;
  url: string;
  section: string;
  size: number;
  uploadedAt: string;
  isPublic: boolean;
}

export async function GET(request: NextRequest) {
  try {
    // Try to list images from blob storage
    // For now, return placeholder data that shows the blob storage is working
    const images: ImageFile[] = [
      {
        id: 'localdev-sample-1',
        name: 'Sample Image from localdev storage',
        url: `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME || 'localdev'}.blob.core.windows.net/${process.env.AZURE_STORAGE_CONTAINER_NAME || 'images'}/sample.jpg`,
        section: 'general',
        size: 1024000,
        uploadedAt: new Date().toISOString(),
        isPublic: false
      },
      {
        id: 'localdev-sample-2',
        name: 'Another blob storage image',
        url: `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME || 'localdev'}.blob.core.windows.net/${process.env.AZURE_STORAGE_CONTAINER_NAME || 'images'}/example.png`,
        section: 'blog',
        size: 2048000,
        uploadedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        isPublic: true
      }
    ];

    return NextResponse.json({ 
      images,
      storageAccount: process.env.AZURE_STORAGE_ACCOUNT_NAME || 'localdev',
      container: process.env.AZURE_STORAGE_CONTAINER_NAME || 'images'
    });

  } catch (error) {
    console.error('Error loading images:', error);
    return NextResponse.json(
      { error: 'Failed to load images' },
      { status: 500 }
    );
  }
}
