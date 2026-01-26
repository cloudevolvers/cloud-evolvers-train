import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import axios from 'axios';
import fs from 'fs';
// Import the instantiated service from app.js
import { localStorageService } from '../app.js'; // Adjust path as needed

// --- Configuration ---
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'x';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || 'x';
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || 'x';

// --- Helper Functions ---

function maskApiKey(key, revealLength = 4) {
    if (!key) return null;
    if (key.length <= revealLength * 2) return '****';
    const prefix = key.substring(0, revealLength);
    const suffix = key.substring(key.length - revealLength);
    const masked = '*'.repeat(key.length - (revealLength * 2));
    return `${prefix}${masked}${suffix}`;
}

function parseMetadata(metadataString) {
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
    // Use the imported service instance directly
    return localStorageService.listImages(
        localStorageService.getBlogImagesDir(),
        filename => localStorageService.getBlogImageUrl(filename)
    );
};

export const handleGeneralUpload = async (file, body) => { // Make async for potential future async operations
    if (!file) {
        throw new Error('No image file provided');
    }
    const metadata = parseMetadata(body.metadata);
    const section = (body.section || metadata.section || 'blog').toLowerCase();
    // Use isLocalDev from the service instance
    const isLocalDev = localStorageService.isLocalDev;
    console.log(`Processing uploaded image for section: ${section}, isLocalDev=${isLocalDev}, metadata:`, metadata);

    let targetDir, filenamePrefix, getImageUrlFn;
    const timestamp = Date.now();
    const originalExt = path.extname(file.originalname).toLowerCase();
    // Sanitize original filename slightly for prefix use
    const safeOriginalName = path.basename(file.originalname, originalExt)
                                .replace(/[^a-zA-Z0-9-_]/g, '_') // Replace invalid chars
                                .substring(0, 50); // Limit length

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

    // Construct a more descriptive final filename
    const finalFilename = `${filenamePrefix}-${timestamp}${originalExt}`;

    // Use the service to save the uploaded file (move from temp)
    const finalPath = localStorageService.saveUploadedFile(file, targetDir, finalFilename);

    // Update file info (though maybe not strictly necessary after move)
    file.path = finalPath;
    file.filename = finalFilename;

    const imageUrl = getImageUrlFn(finalFilename);

    // Save metadata file using the service
    const metadataPath = path.join(targetDir, `${finalFilename}.json`);
    const fullMetadata = {
        ...metadata,
        originalName: file.originalname,
        uploadedAt: new Date().toISOString(),
        size: file.size,
        mimeType: file.mimetype,
        section: section,
    };
    // Use async writeJsonFile
    await localStorageService.writeJsonFile(metadataPath, fullMetadata);

    return {
        success: true,
        url: imageUrl,
        path: finalPath, // The final path where the image is stored
        name: file.originalname,
        id: finalFilename, // Use final filename as ID
        size: file.size,
        metadata: fullMetadata,
        section: section
    };
};


export const deleteBlogImage = (imageId) => {
    // Use the imported service instance directly
    return localStorageService.deleteImage(
        localStorageService.getBlogImagesDir(),
        imageId
        // No public dir needed anymore
    );
};

export const getProviderStatus = async () => {
    const results = {
        unsplash: { status: 'unknown', message: 'Not checked', keyPartial: maskApiKey(UNSPLASH_ACCESS_KEY) },
        pexels: { status: 'unknown', message: 'Not checked', keyPartial: maskApiKey(PEXELS_API_KEY) },
        pixabay: { status: 'unknown', message: 'Not checked', keyPartial: maskApiKey(PIXABAY_API_KEY) },
        local: { status: 'operational', message: 'Local storage available' }
    };

    // Check Unsplash
    try {
        const unsplashResponse = await axios.get('https://api.unsplash.com/photos', {
            headers: { 'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`, 'Accept-Version': 'v1' },
            params: { per_page: 1, client_id: UNSPLASH_ACCESS_KEY }
        });
        if (unsplashResponse.status === 200) results.unsplash = { ...results.unsplash, status: 'operational', message: 'API connection successful' };
    } catch (error) {
        results.unsplash = { ...results.unsplash, status: 'error', message: error.response?.status === 401 ? 'Invalid API key' : 'Connection failed' };
    }

    // Check Pexels
    try {
        const pexelsResponse = await axios.get('https://api.pexels.com/v1/curated', {
            headers: { 'Authorization': PEXELS_API_KEY }, params: { per_page: 1 }
        });
        if (pexelsResponse.status === 200) results.pexels = { ...results.pexels, status: 'operational', message: 'API connection successful' };
    } catch (error) {
        results.pexels = { ...results.pexels, status: 'error', message: error.response?.status === 401 ? 'Invalid API key' : 'Connection failed' };
    }

    // Check Pixabay
    try {
        const pixabayResponse = await axios.get('https://pixabay.com/api/', {
            params: { key: PIXABAY_API_KEY, per_page: 1 }
        });
        if (pixabayResponse.status === 200) results.pixabay = { ...results.pixabay, status: 'operational', message: 'API connection successful' };
    } catch (error) {
        results.pixabay = { ...results.pixabay, status: 'error', message: error.response?.status === 401 ? 'Invalid API key' : 'Connection failed' };
    }

    return results;
};

// --- Search Functions ---

const searchUnsplash = async (query, page, per_page) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: { 'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`, 'Accept-Version': 'v1' },
            params: { query, page, per_page, client_id: UNSPLASH_ACCESS_KEY }
        });
        return {
            images: response.data.results.map(image => ({
                id: image.id, name: image.description || image.alt_description || 'Unsplash image',
                url: image.urls.regular, thumbnail: image.urls.small, source: 'unsplash',
                sourceUrl: image.links.html, authorName: image.user.name, authorUrl: image.user.links.html,
                width: image.width, height: image.height
            })),
            total: response.data.total,
            total_pages: Math.ceil(response.data.total / per_page)
        };
    } catch (error) {
        console.error('Unsplash search error:', error.message);
        return { images: [], total: 0, total_pages: 0, error: error.message };
    }
};

const searchPexels = async (query, page, per_page) => {
     try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: { 'Authorization': PEXELS_API_KEY }, params: { query, page, per_page }
        });
        return {
            images: response.data.photos.map(photo => ({
                id: photo.id, name: photo.alt || 'Pexels image', url: photo.src.large,
                thumbnail: photo.src.medium, source: 'pexels', sourceUrl: photo.url,
                authorName: photo.photographer, authorUrl: photo.photographer_url,
                width: photo.width, height: photo.height
            })),
            total: response.data.total_results,
            total_pages: Math.ceil(response.data.total_results / per_page)
        };
    } catch (error) {
        console.error('Pexels search error:', error.message);
        return { images: [], total: 0, total_pages: 0, error: error.message };
    }
};

const searchPixabay = async (query, page, per_page) => {
    if (!PIXABAY_API_KEY) return { images: [], total: 0, total_pages: 0, error: 'Pixabay API key not configured' };
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: { key: PIXABAY_API_KEY, q: query, page, per_page, image_type: 'photo' },
            timeout: 5000
        });
        return {
            images: response.data.hits.map(hit => ({
                id: hit.id, name: hit.tags.split(',')[0] || 'Pixabay image', url: hit.largeImageURL,
                thumbnail: hit.webformatURL, source: 'pixabay', sourceUrl: hit.pageURL,
                authorName: hit.user, authorUrl: `https://pixabay.com/users/${hit.user}-${hit.user_id}/`,
                width: hit.imageWidth, height: hit.imageHeight
            })),
            total: response.data.totalHits,
            total_pages: Math.ceil(response.data.totalHits / per_page)
        };
    } catch (error) {
        console.error('Pixabay search error:', error.message);
        return { images: [], total: 0, total_pages: 0, error: error.message };
    }
};

/**
 * Search for images in local storage by query string
 * @param {string} query - Search term
 * @returns {Promise<Object>} Search results with images array
 */
async function searchLocalImages(query) {
  console.log(`Searching local images for: ${query}`);
  try {
    // Create a combined result from all sections
    const results = { images: [] };
    
    // Search blog images
    const blogDir = localStorageService.getBlogImagesDir();
    const blogImages = localStorageService.searchImages(
      blogDir, 
      query, 
      localStorageService.getBlogImageUrl.bind(localStorageService)
    );
    
    // Search service images
    const servicesDir = localStorageService.getServicesImagesDir();
    const serviceImages = localStorageService.searchImages(
      servicesDir,
      query,
      localStorageService.getServiceImageUrl.bind(localStorageService)
    );
    
    // Search showcase images
    const showcaseDir = localStorageService.getShowcaseImagesDir();
    const showcaseImages = localStorageService.searchImages(
      showcaseDir,
      query,
      localStorageService.getShowcaseImageUrl.bind(localStorageService)
    );
    
    // Merge all results
    results.images = [
      ...blogImages.map(img => ({ ...img, section: 'blog' })),
      ...serviceImages.map(img => ({ ...img, section: 'services' })),
      ...showcaseImages.map(img => ({ ...img, section: 'showcase' }))
    ];
    
    console.log(`Found ${results.images.length} total local images matching "${query}"`);
    return results;
  } catch (error) {
    console.error('Error searching local images:', error);
    return { images: [] }; // Return empty result on error
  }
}

/**
 * Search for images across multiple providers or in a specific provider
 * @param {string} query - The search term
 * @param {number} page - Page number for pagination
 * @param {number} per_page - Items per page
 * @param {string} provider - Provider to search (all, unsplash, pexels, local)
 * @returns {Promise<Object>} Search results
 */
export const searchImages = async (query, page = 1, per_page = 30, provider = 'all') => {
  if (!query) {
    throw new Error('Search query is required');
  }

  console.log(`Searching for images with query: ${query}, provider: ${provider}`);

  try {
    // Declare the promises variable before using it
    let promises = [];
    let results = { images: [] };

    // Convert provider to lowercase for case-insensitive comparison
    const providerLower = provider.toLowerCase();

    // If provider is 'all' or not specified, search all enabled providers
    if (providerLower === 'all') {
      // First search local images
      results = await searchLocalImages(query);
      const localImages = results.images || [];
      console.log(`Found ${localImages.length} local images for query: ${query}`);

      // Then prepare promises for external provider searches
      promises = [];
      
      // Only add Unsplash if API key is available
      if (process.env.UNSPLASH_ACCESS_KEY) {
        // Fix: Use searchUnsplash instead of searchUnsplashImages
        promises.push(searchUnsplash(query, page, per_page));
      }
      
      // Only add Pexels if API key is available
      if (process.env.PEXELS_API_KEY) {
        // Fix: Use searchPexels instead of searchPexelsImages
        promises.push(searchPexels(query, page, per_page));
      }
      
      // Add Pixabay if API key is available
      if (process.env.PIXABAY_API_KEY) {
        promises.push(searchPixabay(query, page, per_page));
      }
      
      // If we have any external provider promises, execute them
      if (promises.length > 0) {
        const externalResults = await Promise.all(promises);
        
        // Merge results from all providers
        externalResults.forEach(providerResult => {
          if (providerResult && providerResult.images) {
            results.images = [...results.images, ...providerResult.images];
          }
        });
      }
    } else if (providerLower === 'unsplash') {
      // Search only Unsplash
      // Fix: Use searchUnsplash instead of searchUnsplashImages
      results = await searchUnsplash(query, page, per_page);
    } else if (providerLower === 'pexels') {
      // Search only Pexels
      // Fix: Use searchPexels instead of searchPexelsImages
      results = await searchPexels(query, page, per_page);
    } else if (providerLower === 'pixabay') {
      // Add Pixabay as a provider option
      results = await searchPixabay(query, page, per_page);
    } else if (providerLower === 'local') {
      // Search only local images
      results = await searchLocalImages(query);
    } else {
      // If provider is not recognized, return empty results
      console.warn(`Unrecognized provider: ${provider}`);
      return { images: [] };
    }

    return results;
  } catch (error) {
    console.error(`Error searching images with provider ${provider}:`, error);
    throw error;
  }
};

// --- Image Serving ---

export const serveImageFile = (section, filename, res) => {
    const sanitizedFilename = path.basename(filename).replace(/[^a-zA-Z0-9-_.]/g, '');
    let imageDir;
    const defaultImagePath = null; // Define if you have default images

    switch (section) {
        case 'blog':
            imageDir = localStorageService.getBlogImagesDir();
            // defaultImagePath = path.join(process.cwd(), 'public/images/blog/default.jpg'); // Example default
            break;
        case 'services':
            imageDir = localStorageService.getServicesImagesDir();
            break;
        case 'showcase':
            imageDir = localStorageService.getShowcaseImagesDir();
            break;
        default:
            console.warn(`Unknown section for serving image: ${section}`);
            return res.status(400).send('Invalid image section');
    }

    const filePath = path.join(imageDir, sanitizedFilename);
    // Use the imported service instance directly
    localStorageService.streamImageToResponse(filePath, res, defaultImagePath);
};


// --- Image Saving/Manipulation ---

export const saveImageFromProvider = async (imageUrl, name, section = 'blog', metadata = {}) => {
    if (!imageUrl) throw new Error('No image URL provided');

    try {
        const timestamp = Date.now();
        const imageName = name || `${section}_image_${timestamp}`;
        console.log(`Saving external image: ${imageName} from ${imageUrl} for section: ${section}`);

        // Attempt to download the image with longer timeout and proper headers
        const response = await axios.get(imageUrl, { 
            responseType: 'arraybuffer', 
            timeout: 30000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; xEvolve/1.0)',
                'Accept': 'image/webp,image/jpeg,image/png,image/gif,image/*,*/*;q=0.8'
            }
        });

        // Log the response details for debugging
        console.log(`Downloaded image (${response.data.length} bytes) with content-type: ${response.headers['content-type']}`);
        
        const contentType = response.headers['content-type'];
        
        // Verify the content type is an image
        if (!contentType || !contentType.startsWith('image/')) {
            console.error(`Invalid content type for image: ${contentType}`);
            throw new Error(`Downloaded content is not a valid image (${contentType})`);
        }

        // Determine file extension from content type
        let fileExtension = '.jpg'; // Default
        if (contentType) {
            const mimeType = contentType.split(';')[0]; // Handle potential charset info
            if (mimeType === 'image/png') fileExtension = '.png';
            else if (mimeType === 'image/gif') fileExtension = '.gif';
            else if (mimeType === 'image/webp') fileExtension = '.webp';
            else if (mimeType === 'image/jpeg') fileExtension = '.jpg';
            else if (mimeType === 'image/svg+xml') fileExtension = '.svg';
            // Add more types if needed
        }

        const safeSection = section.replace(/[^a-z0-9]/gi, '-').toLowerCase();
        // Add more randomness and source information to the filename
        const source = metadata.source || 'external';
        const filename = `${safeSection}-${source}-${timestamp}${fileExtension}`;

        // Get appropriate directories and URL functions based on section
        let targetDir, getImageUrlFn;
        if (section === 'blog') {
            targetDir = localStorageService.getBlogImagesDir();
            getImageUrlFn = localStorageService.getBlogImageUrl;
        } else if (section === 'services' || section === 'service') {
            targetDir = localStorageService.getServicesImagesDir();
            getImageUrlFn = localStorageService.getServiceImageUrl;
        } else if (section === 'showcase') {
            targetDir = localStorageService.getShowcaseImagesDir();
            getImageUrlFn = localStorageService.getShowcaseImageUrl;
        } else {
            console.warn(`Unknown section '${section}', defaulting to 'blog'.`);
            targetDir = localStorageService.getBlogImagesDir();
            getImageUrlFn = localStorageService.getBlogImageUrl;
            section = 'blog'; // Correct the section variable
        }

        // Ensure directory exists
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
            console.log(`Created directory: ${targetDir}`);
        }

        // Save image directly to file
        const imagePath = path.join(targetDir, filename);
        fs.writeFileSync(imagePath, Buffer.from(response.data));
        console.log(`Successfully saved external image to: ${imagePath}`);

        const finalImageUrl = getImageUrlFn(filename);
        console.log(`Final image URL: ${finalImageUrl}`);

        const fullMetadata = {
            ...metadata, 
            originalUrl: imageUrl, 
            savedAt: new Date().toISOString(),
            name: imageName, 
            isLocalCopy: true, 
            copiedFrom: metadata.source || 'unknown', 
            section,
            mimeType: contentType,
            size: response.data.length,
        };

        // Save metadata using the service
        const metadataPath = path.join(targetDir, `${filename}.json`);
        await localStorageService.writeJsonFile(metadataPath, fullMetadata);
        console.log(`Saved metadata file: ${metadataPath}`);

        return {
            success: true, 
            url: finalImageUrl, 
            name: imageName, 
            id: filename, 
            section, 
            metadata: fullMetadata
        };
    } catch (error) {
        console.error('Error saving image from provider:', error);
        throw error; // Re-throw to be handled by the caller
    }
};

export const savePastedShowcaseImage = async (imageBase64, name, mimeType, metadata = {}) => {
    const buffer = Buffer.from(imageBase64, 'base64');
    const timestamp = Date.now();
    const extension = mimeType.split('/')[1] || 'png';
    const filename = `showcase-pasted-${timestamp}.${extension}`;
    const showcaseDir = localStorageService.getShowcaseImagesDir();

    // Use service to save data
    const filePath = localStorageService.saveImageFromData(buffer, showcaseDir, filename);

    const imageUrl = localStorageService.getShowcaseImageUrl(filename);
    console.log(`Pasted showcase image saved: ${filePath}`);

    // Save metadata using the service
     const fullMetadata = {
        ...metadata, originalName: name, uploadedAt: new Date().toISOString(),
        mimeType: mimeType, isPasted: true, section: 'showcase', size: buffer.length
    };
     const metadataPath = path.join(showcaseDir, `${filename}.json`);
     await localStorageService.writeJsonFile(metadataPath, fullMetadata);


    return { success: true, url: imageUrl, id: filename, name, metadata: fullMetadata };
};

export const handleCroppedImage = async (file, body) => {
     if (!file || !file.buffer) {
        throw new Error('No cropped image data uploaded');
    }
    const metadata = parseMetadata(body.metadata);
    const section = (metadata.section || 'blog').toLowerCase();
    console.log(`Cropping image for section: ${section}`);

    metadata.isCropped = true;
    metadata.originalId = metadata.originalId || null; // ID (filename) of the original image
    metadata.cropDate = new Date().toISOString();
    metadata.size = file.buffer.length; // Size of the cropped image

    let targetDir, getImageUrlFn, filename;
    const timestamp = Date.now();
    // Determine extension from original filename in metadata or default
    const originalExt = path.extname(metadata.name || 'image.jpg').toLowerCase();
    const fileExtension = ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(originalExt) ? originalExt : '.jpg';

    if (section === 'showcase') {
        targetDir = localStorageService.getShowcaseImagesDir();
        getImageUrlFn = localStorageService.getShowcaseImageUrl;
        filename = `showcase-cropped-${timestamp}${fileExtension}`;
    } else if (section === 'service' || section === 'services') {
        targetDir = localStorageService.getServicesImagesDir();
        getImageUrlFn = localStorageService.getServiceImageUrl;
        const serviceId = metadata.serviceId || 'unknown';
        filename = `service-${serviceId}-cropped-${timestamp}${fileExtension}`;
    } else { // Default to blog
        targetDir = localStorageService.getBlogImagesDir();
        getImageUrlFn = localStorageService.getBlogImageUrl;
        filename = `blog-cropped-${timestamp}${fileExtension}`;
        metadata.section = 'blog'; // Ensure section is set correctly
    }

    // Use service to save data
    const savedPath = localStorageService.saveImageFromData(file.buffer, targetDir, filename);
    console.log(`Cropped image saved to: ${savedPath}`);
    const imageUrl = getImageUrlFn(filename);

    // Save metadata using the service
    const metadataPath = path.join(targetDir, `${filename}.json`);
    await localStorageService.writeJsonFile(metadataPath, metadata);

    return { success: true, url: imageUrl, id: filename, metadata, isCropped: true, section };
};


// --- Other ---

export const getStorageInfo = () => {
    // Use the imported service instance directly
    const info = localStorageService.getStorageInfo();
    info.environment = {
        NODE_ENV: process.env.NODE_ENV || 'not set',
        LOCAL_DEV: process.env.LOCAL_DEV || 'not set', // Raw value
        // isLocalDev is already in the info object from the service
        path: process.cwd(),
    };
    return info;
};

export const refreshEnvironment = () => {
    // This is deprecated and not supported in ESM. Just return current info.
    console.warn("refreshEnvironment called, but modifying the shared localStorageService instance is not recommended. Returning current info.");
    return getStorageInfo();
};

export const getBlogImageInfo = async (slug, category) => { // Make async
     if (!slug) throw new Error('Missing slug parameter');

    const blogImagesPath = localStorageService.getBlogImagesDir();
    const categoryImageMap = { // These should probably point to backend served URLs now
        'Azure Security': '/backend/images/blog-images/file/security.jpg', // Example update
        'API Management': '/backend/images/blog-images/file/api-management.jpg',
        'Identity': '/backend/images/blog-images/file/identity.jpg',
        'DevOps': '/backend/images/blog-images/file/devops.jpg',
    };
    const defaultImage = '/backend/images/blog-images/file/default-blog-image.jpg'; // Example update

    // Try finding image based on slug (check multiple extensions)
    const possibleExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    let foundImagePath = null;
    for (const ext of possibleExtensions) {
        const slugBasedFilename = `${slug}${ext}`;
        const fullImagePath = path.join(blogImagesPath, slugBasedFilename);
        if (await localStorageService.exists(fullImagePath)) { // Use async exists check
            foundImagePath = localStorageService.getBlogImageUrl(slugBasedFilename);
            break;
        }
    }

    if (foundImagePath) {
        return { success: true, imagePath: foundImagePath };
    }
    if (category && categoryImageMap[category]) {
        // Check if the category image actually exists before returning it? Optional.
        return { success: true, imagePath: categoryImageMap[category] };
    }
    // Check if default image exists? Optional.
    return { success: true, imagePath: defaultImage };
};

// Helper to find image and its directory by filename across sections
async function findImageFile(imageId) {
    const sections = [
        { dir: localStorageService.getBlogImagesDir(), section: 'blog', getUrl: localStorageService.getBlogImageUrl },
        { dir: localStorageService.getServicesImagesDir(), section: 'services', getUrl: localStorageService.getServiceImageUrl },
        { dir: localStorageService.getShowcaseImagesDir(), section: 'showcase', getUrl: localStorageService.getShowcaseImageUrl },
    ];

    for (const sec of sections) {
        const filePath = path.join(sec.dir, imageId);
        if (await localStorageService.exists(filePath)) {
            return {
                filePath,
                directory: sec.dir,
                section: sec.section,
                getUrl: sec.getUrl.bind(localStorageService) // Bind context
            };
        }
    }
    return null;
}


export const updateImageMetadata = async (imageId, updates) => {
    const imageInfo = await findImageFile(imageId);

    if (!imageInfo) {
        throw new Error('Image not found');
    }

    const metadataPath = `${imageInfo.filePath}.json`;
    let existingMetadata = {};
    if (await localStorageService.exists(metadataPath)) {
        try {
            // Use service method to read JSON
            existingMetadata = await localStorageService.readJsonFile(metadataPath);
        } catch (err) {
            console.error(`Error reading metadata for ${imageId}:`, err);
            // Decide if we should proceed with empty metadata or throw
        }
    }

    // Merge updates, ensuring section is preserved or updated if provided
    const updatedMetadata = {
        ...existingMetadata,
        ...updates,
        section: updates.section || existingMetadata.section || imageInfo.section, // Prioritize update, then existing, then detected
        updatedAt: new Date().toISOString()
    };

    // Use service method to write JSON
    await localStorageService.writeJsonFile(metadataPath, updatedMetadata);

    const imageUrl = imageInfo.getUrl(imageId);
    return { success: true, id: imageId, url: imageUrl, metadata: updatedMetadata };
};
