import dotenv from 'dotenv';
import path from 'path';
import axios from 'axios';
import fs from 'fs';

dotenv.config();

// --- Configuration ---
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'x';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || 'x';
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || 'x';

// LocalStorageService instance - we'll need to import this
let localStorageService: any;

// Initialize storage service
if (typeof window === 'undefined') {
  // Server-side only
  try {
    const { createLocalStorageService } = require('../../backend/local-storage-service.js');
    localStorageService = createLocalStorageService();
  } catch (error) {
    console.error('Failed to initialize storage service:', error);
  }
}

// --- Helper Functions ---

function maskApiKey(key: string, revealLength = 4): string | null {
  if (!key) return null;
  if (key.length <= revealLength * 2) return '****';
  const prefix = key.substring(0, revealLength);
  const suffix = key.substring(key.length - revealLength);
  const masked = '*'.repeat(key.length - (revealLength * 2));
  return `${prefix}${masked}${suffix}`;
}

function parseMetadata(metadataString: string): Record<string, any> {
  try {
    return metadataString ? JSON.parse(metadataString) : {};
  } catch (e) {
    console.error('Error parsing metadata:', e);
    return {};
  }
}

// --- Service Methods ---

export const getApiKeys = () => {
  return {
    unsplash: { key: maskApiKey(UNSPLASH_ACCESS_KEY), exists: !!UNSPLASH_ACCESS_KEY },
    pexels: { key: maskApiKey(PEXELS_API_KEY), exists: !!PEXELS_API_KEY },
    pixabay: { key: maskApiKey(PIXABAY_API_KEY), exists: !!PIXABAY_API_KEY }
  };
};

export const listLocalBlogImages = () => {
  if (!localStorageService) {
    throw new Error('Storage service not initialized');
  }
  return localStorageService.listImages(
    localStorageService.getBlogImagesDir(),
    (filename: string) => localStorageService.getBlogImageUrl(filename)
  );
};

export const handleGeneralUpload = async (file: any, body: Record<string, any>) => {
  if (!file) {
    throw new Error('No image file provided');
  }
  
  if (!localStorageService) {
    throw new Error('Storage service not initialized');
  }

  const metadata = parseMetadata(body.metadata);
  const section = (body.section || metadata.section || 'blog').toLowerCase();
  const isLocalDev = localStorageService.isLocalDev;
  console.log(`Processing uploaded image for section: ${section}, isLocalDev=${isLocalDev}, metadata:`, metadata);

  let targetDir: string, filenamePrefix: string, getImageUrlFn: (filename: string) => string;
  const timestamp = Date.now();
  const originalExt = path.extname(file.originalname).toLowerCase();
  const safeOriginalName = path.basename(file.originalname, originalExt)
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .substring(0, 50);

  switch (section) {
    case 'showcase':
      targetDir = localStorageService.getShowcaseImagesDir();
      filenamePrefix = `showcase-${safeOriginalName}`;
      getImageUrlFn = localStorageService.getShowcaseImageUrl;
      break;
    case 'services':
    case 'service':
      targetDir = localStorageService.getServicesImagesDir();
      filenamePrefix = `service-${metadata.serviceId || safeOriginalName}`;
      getImageUrlFn = localStorageService.getServiceImageUrl;
      break;
    default: // blog
      targetDir = localStorageService.getBlogImagesDir();
      filenamePrefix = `blog-${safeOriginalName}`;
      getImageUrlFn = localStorageService.getBlogImageUrl;
      break;
  }

  const finalFilename = `${filenamePrefix}-${timestamp}${originalExt}`;
  const finalPath = localStorageService.saveUploadedFile(file, targetDir, finalFilename);

  file.path = finalPath;
  file.filename = finalFilename;

  const imageUrl = getImageUrlFn(finalFilename);

  const metadataPath = path.join(targetDir, `${finalFilename}.json`);
  const fullMetadata = {
    ...metadata,
    originalName: file.originalname,
    uploadedAt: new Date().toISOString(),
    size: file.size,
    mimeType: file.mimetype,
    section: section,
  };

  await localStorageService.writeJsonFile(metadataPath, fullMetadata);

  return {
    success: true,
    url: imageUrl,
    path: finalPath,
    name: file.originalname,
    id: finalFilename,
    size: file.size,
    metadata: fullMetadata,
    section: section
  };
};

export const deleteBlogImage = (imageId: string) => {
  if (!localStorageService) {
    throw new Error('Storage service not initialized');
  }
  return localStorageService.deleteImage(
    localStorageService.getBlogImagesDir(),
    imageId
  );
};

export const deleteImage = async (section: string, imageId: string) => {
  if (!localStorageService) {
    throw new Error('Storage service not initialized');
  }

  let targetDir: string;
  const sectionLower = section.toLowerCase();
  
  if (sectionLower === 'blog') targetDir = localStorageService.getBlogImagesDir();
  else if (sectionLower === 'services') targetDir = localStorageService.getServicesImagesDir();
  else if (sectionLower === 'showcase') targetDir = localStorageService.getShowcaseImagesDir();
  else throw new Error('Invalid section specified');

  return await localStorageService.deleteImage(targetDir, imageId);
};

export const getStorageInfo = () => {
  if (!localStorageService) {
    throw new Error('Storage service not initialized');
  }
  return {
    blogImagesDir: localStorageService.getBlogImagesDir(),
    showcaseImagesDir: localStorageService.getShowcaseImagesDir(),
    servicesImagesDir: localStorageService.getServicesImagesDir(),
    isLocalDev: localStorageService.isLocalDev
  };
};

export const searchImages = async (query: string, page = 1, perPage = 30, provider = 'all') => {
  const results: any = { images: [], total: 0, page, per_page: perPage };

  if (!query) {
    throw new Error('Search query is required');
  }

  if (provider === 'all' || provider === 'unsplash') {
    try {
      const unsplashResponse = await axios.get('https://api.unsplash.com/search/photos', {
        headers: { 'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        params: { query, page, per_page: Math.min(perPage, 30) }
      });
      
      if (unsplashResponse.data?.results) {
        results.images.push(...unsplashResponse.data.results.map((img: any) => ({
          id: img.id,
          url: img.urls.regular,
          thumbnail: img.urls.thumb,
          alt: img.alt_description || img.description || query,
          provider: 'unsplash',
          author: img.user?.name,
          downloadUrl: img.urls.full
        })));
      }
    } catch (error) {
      console.error('Unsplash search error:', error);
    }
  }

  if (provider === 'all' || provider === 'pexels') {
    try {
      const pexelsResponse = await axios.get('https://api.pexels.com/v1/search', {
        headers: { 'Authorization': PEXELS_API_KEY },
        params: { query, page, per_page: Math.min(perPage, 80) }
      });
      
      if (pexelsResponse.data?.photos) {
        results.images.push(...pexelsResponse.data.photos.map((img: any) => ({
          id: `pexels-${img.id}`,
          url: img.src.large,
          thumbnail: img.src.medium,
          alt: img.alt || query,
          provider: 'pexels',
          author: img.photographer,
          downloadUrl: img.src.original
        })));
      }
    } catch (error) {
      console.error('Pexels search error:', error);
    }
  }

  results.total = results.images.length;
  return results;
};

export const saveImageFromProvider = async (sourceImageUrl: string, name: string, section = 'blog', metadata: Record<string, any> = {}) => {
  if (!localStorageService) {
    throw new Error('Storage service not initialized');
  }

  try {
    const response = await axios.get(sourceImageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    
    const ext = path.extname(new URL(sourceImageUrl).pathname) || '.jpg';
    const timestamp = Date.now();
    const safeFilename = name.replace(/[^a-zA-Z0-9-_]/g, '_').substring(0, 50);
    const filename = `${section}-${safeFilename}-${timestamp}${ext}`;

    let targetDir: string, getImageUrlFn: (filename: string) => string;
    
    switch (section.toLowerCase()) {
      case 'showcase':
        targetDir = localStorageService.getShowcaseImagesDir();
        getImageUrlFn = localStorageService.getShowcaseImageUrl;
        break;
      case 'services':
      case 'service':
        targetDir = localStorageService.getServicesImagesDir();
        getImageUrlFn = localStorageService.getServiceImageUrl;
        break;
      default: // blog
        targetDir = localStorageService.getBlogImagesDir();
        getImageUrlFn = localStorageService.getBlogImageUrl;
        break;
    }

    // Ensure directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, filename);
    fs.writeFileSync(filePath, buffer);

    const imageUrl = getImageUrlFn(filename);

    // Save metadata
    const metadataPath = path.join(targetDir, `${filename}.json`);
    const fullMetadata = {
      ...metadata,
      originalName: name,
      uploadedAt: new Date().toISOString(),
      size: buffer.length,
      section: section,
      source: 'external'
    };
    
    await localStorageService.writeJsonFile(metadataPath, fullMetadata);

    return {
      success: true,
      url: imageUrl,
      name: filename,
      id: filename,
      size: buffer.length,
      metadata: fullMetadata
    };
  } catch (error) {
    console.error('Error saving image from provider:', error);
    throw error;
  }
};

export const serveImageFile = (section: string, filename: string, res: any) => {
  if (!localStorageService) {
    throw new Error('Storage service not initialized');
  }

  let targetDir: string;
  
  switch (section.toLowerCase()) {
    case 'showcase':
      targetDir = localStorageService.getShowcaseImagesDir();
      break;
    case 'services':
    case 'service':
      targetDir = localStorageService.getServicesImagesDir();
      break;
    default: // blog
      targetDir = localStorageService.getBlogImagesDir();
      break;
  }

  const filePath = path.join(targetDir, filename);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Image not found' });
  }

  res.sendFile(path.resolve(filePath));
};
