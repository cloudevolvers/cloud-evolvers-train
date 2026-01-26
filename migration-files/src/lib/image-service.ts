import dotenv from 'dotenv';
import path from 'path';
import axios from 'axios';
import fs from 'fs';

dotenv.config();

// --- Configuration ---
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'x';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || 'x';
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || 'x';

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

// --- Local Storage Functions ---

function getStorageDirectory() {
  return path.join(process.env.HOME || '/home', 'data');
}

function getBlogImagesDir() {
  return path.join(getStorageDirectory(), 'blog-images');
}

function getShowcaseImagesDir() {
  return path.join(getStorageDirectory(), 'showcase-images');
}

function getServicesImagesDir() {
  return path.join(getStorageDirectory(), 'services-images');
}

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getBlogImageUrl(filename: string) {
  return `/api/images/blog-images/file/${filename}`;
}

function getShowcaseImageUrl(filename: string) {
  return `/api/images/showcase-images/file/${filename}`;
}

function getServiceImageUrl(filename: string) {
  return `/api/images/service-images/file/${filename}`;
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
  const blogImagesDir = getBlogImagesDir();
  ensureDirectoryExists(blogImagesDir);
  
  try {
    const files = fs.readdirSync(blogImagesDir);
    return files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        filename: file,
        url: getBlogImageUrl(file),
        path: path.join(blogImagesDir, file)
      }));
  } catch (error) {
    console.error('Error listing blog images:', error);
    return [];
  }
};

export const handleGeneralUpload = async (file: any, body: Record<string, any>) => {
  if (!file) {
    throw new Error('No image file provided');
  }

  const metadata = parseMetadata(body.metadata);
  const section = (body.section || metadata.section || 'blog').toLowerCase();
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  console.log(`Processing uploaded image for section: ${section}, isLocalDev=${isLocalDev}, metadata:`, metadata);

  let targetDir: string, filenamePrefix: string, getImageUrlFn: (filename: string) => string;
  const timestamp = Date.now();
  const originalExt = path.extname(file.originalname).toLowerCase();
  const safeOriginalName = path.basename(file.originalname, originalExt)
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .substring(0, 50);

  switch (section) {
    case 'showcase':
      targetDir = getShowcaseImagesDir();
      filenamePrefix = `showcase-${safeOriginalName}`;
      getImageUrlFn = getShowcaseImageUrl;
      break;
    case 'services':
    case 'service':
      targetDir = getServicesImagesDir();
      filenamePrefix = `service-${metadata.serviceId || safeOriginalName}`;
      getImageUrlFn = getServiceImageUrl;
      break;
    default: // blog
      targetDir = getBlogImagesDir();
      filenamePrefix = `blog-${safeOriginalName}`;
      getImageUrlFn = getBlogImageUrl;
      break;
  }

  ensureDirectoryExists(targetDir);

  // Generate unique filename
  let finalFilename = `${filenamePrefix}-${timestamp}${originalExt}`;
  let finalPath = path.join(targetDir, finalFilename);
  let counter = 1;

  // Ensure filename is unique
  while (fs.existsSync(finalPath)) {
    finalFilename = `${filenamePrefix}-${timestamp}-${counter}${originalExt}`;
    finalPath = path.join(targetDir, finalFilename);
    counter++;
  }

  // Save the file
  try {
    fs.writeFileSync(finalPath, file.buffer);
    
    const imageUrl = getImageUrlFn(finalFilename);
    
    return {
      success: true,
      filename: finalFilename,
      url: imageUrl,
      path: finalPath,
      section,
      metadata
    };
  } catch (error) {
    console.error('Error saving uploaded file:', error);
    throw new Error('Failed to save uploaded file');
  }
};

export const saveImageFromProvider = async (imageUrl: string, name: string, section = 'blog', metadata: any = {}) => {
  try {
    // Download the image from the URL
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    
    // Get file extension from URL or use jpg as default
    const urlPath = new URL(imageUrl).pathname;
    const ext = path.extname(urlPath) || '.jpg';
    const cleanName = name.replace(/[^a-zA-Z0-9-_]/g, '_');
    
    // Create a file-like object
    const file = {
      originalname: `${cleanName}${ext}`,
      buffer,
      size: buffer.length,
      encoding: 'binary',
      mimetype: response.headers['content-type'] || 'image/jpeg'
    };
    
    // Use the existing upload handler
    const result = await handleGeneralUpload(file, {
      section,
      metadata: JSON.stringify(metadata)
    });
    
    return {
      success: true,
      filename: result.filename,
      url: result.url,
      section: result.section,
      originalUrl: imageUrl,
      name
    };
  } catch (error) {
    console.error('Error saving image from provider:', error);
    throw new Error('Failed to save image from provider');
  }
};

// --- Provider Search Functions ---

export const searchUnsplash = async (query: string, page = 1, perPage = 10) => {
  if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'x') {
    throw new Error('Unsplash API key not configured');
  }

  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: UNSPLASH_ACCESS_KEY
      }
    });

    return {
      results: response.data.results.map((photo: any) => ({
        id: photo.id,
        url: photo.urls.regular,
        thumbnail: photo.urls.thumb,
        alt: photo.alt_description || photo.description || query,
        provider: 'unsplash',
        attribution: {
          author: photo.user.name,
          authorUrl: photo.user.links.html,
          source: 'Unsplash',
          sourceUrl: photo.links.html
        }
      })),
      total: response.data.total,
      page,
      perPage
    };
  } catch (error) {
    console.error('Unsplash search error:', error);
    throw new Error('Failed to search Unsplash');
  }
};

export const searchPexels = async (query: string, page = 1, perPage = 10) => {
  if (!PEXELS_API_KEY || PEXELS_API_KEY === 'x') {
    throw new Error('Pexels API key not configured');
  }

  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      params: {
        query,
        page,
        per_page: perPage
      },
      headers: {
        Authorization: PEXELS_API_KEY
      }
    });

    return {
      results: response.data.photos.map((photo: any) => ({
        id: photo.id,
        url: photo.src.large,
        thumbnail: photo.src.medium,
        alt: photo.alt || query,
        provider: 'pexels',
        attribution: {
          author: photo.photographer,
          authorUrl: photo.photographer_url,
          source: 'Pexels',
          sourceUrl: photo.url
        }
      })),
      total: response.data.total_results,
      page,
      perPage
    };
  } catch (error) {
    console.error('Pexels search error:', error);
    throw new Error('Failed to search Pexels');
  }
};

export const searchPixabay = async (query: string, page = 1, perPage = 10) => {
  if (!PIXABAY_API_KEY || PIXABAY_API_KEY === 'x') {
    throw new Error('Pixabay API key not configured');
  }

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: 'photo',
        page,
        per_page: perPage,
        safesearch: 'true'
      }
    });

    return {
      results: response.data.hits.map((photo: any) => ({
        id: photo.id,
        url: photo.largeImageURL,
        thumbnail: photo.webformatURL,
        alt: photo.tags || query,
        provider: 'pixabay',
        attribution: {
          author: photo.user,
          authorUrl: `https://pixabay.com/users/${photo.user}-${photo.user_id}/`,
          source: 'Pixabay',
          sourceUrl: photo.pageURL
        }
      })),
      total: response.data.totalHits,
      page,
      perPage
    };
  } catch (error) {
    console.error('Pixabay search error:', error);
    throw new Error('Failed to search Pixabay');
  }
};

export const getProviderStatus = () => {
  return {
    unsplash: {
      available: !!UNSPLASH_ACCESS_KEY && UNSPLASH_ACCESS_KEY !== 'x',
      key: maskApiKey(UNSPLASH_ACCESS_KEY)
    },
    pexels: {
      available: !!PEXELS_API_KEY && PEXELS_API_KEY !== 'x',
      key: maskApiKey(PEXELS_API_KEY)
    },
    pixabay: {
      available: !!PIXABAY_API_KEY && PIXABAY_API_KEY !== 'x',
      key: maskApiKey(PIXABAY_API_KEY)
    }
  };
};

export const getStorageInfo = () => {
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  const storageDir = getStorageDirectory();
  
  return {
    isLocalDev,
    storageDirectory: storageDir,
    blogImagesDir: getBlogImagesDir(),
    showcaseImagesDir: getShowcaseImagesDir(),
    servicesImagesDir: getServicesImagesDir(),
    environment: {
      LOCAL_DEV: process.env.LOCAL_DEV,
      HOME: process.env.HOME,
      NODE_ENV: process.env.NODE_ENV
    }
  };
};
