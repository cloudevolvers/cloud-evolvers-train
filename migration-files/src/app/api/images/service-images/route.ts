import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function getStorageDirectory() {
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  
  if (isLocalDev) {
    return path.join(process.cwd(), '.local');
  } else {
    return path.join(process.env.HOME || '/home', 'data');
  }
}

function getServicesImagesDir() {
  return path.join(getStorageDirectory(), 'services-images');
}

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export async function GET() {
  try {
    const servicesImagesDir = getServicesImagesDir();
    ensureDirectoryExists(servicesImagesDir);
    
    const files = fs.readdirSync(servicesImagesDir);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        filename: file,
        url: `/api/images/service-images/file/${file}`,
        path: path.join(servicesImagesDir, file),
        size: fs.statSync(path.join(servicesImagesDir, file)).size,
        modified: fs.statSync(path.join(servicesImagesDir, file)).mtime
      }));
    
    return NextResponse.json({
      success: true,
      images,
      count: images.length,
      directory: servicesImagesDir
    });
  } catch (error) {
    console.error('Error listing service images:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to list service images',
        images: [],
        count: 0
      },
      { status: 500 }
    );
  }
}
