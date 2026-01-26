/**
 * Shared utility functions for image handling across blog, showcase, and services
 */

import path from 'path';
import fs from 'fs';

/**
 * Determine base directory for various image types based on environment
 */
export function getImageBaseDir(section = 'blog') {
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  
  // Base directories based on environment
  const baseDir = isLocalDev 
    ? path.join(process.cwd(), '.local', 'images')
    : path.join('/home/data', 'images');
  
  // Specific section directory
  return path.join(baseDir, section.toLowerCase());
}

/**
 * Ensure directory exists
 */
export function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
  return dirPath;
}

/**
 * Get image URL for frontend consumption based on section
 */
export function getImageUrl(filename, section = 'blog') {
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  
  // For showcase, always use the backend route
  if (section === 'showcase') {
    return `/backend/images/showcase-images/file/${filename}`;
  }
  
  // For blog, use the appropriate URL format
  if (section === 'blog') {
    return `/backend/images/blog-images/file/${filename}`;
  }
  
  // For services
  if (section === 'services' || section === 'service') {
    return `/backend/images/service-images/file/${filename}`;
  }
  
  // Default - use direct path for local dev, backend route for production
  return isLocalDev 
    ? `/images/${section}/${filename}`
    : `/backend/images/${section}/${filename}`;
}

/**
 * Generate a unique filename with appropriate prefix
 */
export function generateFilename(originalName, section = 'blog') {
  const timestamp = Date.now();
  const uniqueSuffix = Math.round(Math.random() * 1E9);
  const ext = path.extname(originalName);
  
  return `${section.toLowerCase()}-${timestamp}-${uniqueSuffix}${ext}`;
}

/**
 * Save an image file to the appropriate location
 */
export function saveImageFile(file, section = 'blog') {
  const dirPath = getImageBaseDir(section);
  ensureDirectoryExists(dirPath);
  
  const destPath = path.join(dirPath, file.filename);
  
  // If file is already in final location, return
  if (file.path === destPath) {
    return {
      success: true,
      path: destPath,
      url: getImageUrl(file.filename, section)
    };
  }
  
  // Copy the file to destination
  fs.copyFileSync(file.path, destPath);
  
  // Remove original if it's in temp location
  if (fs.existsSync(file.path) && file.path !== destPath) {
    fs.unlinkSync(file.path);
  }
  
  return {
    success: true,
    path: destPath,
    url: getImageUrl(file.filename, section)
  };
}

export default {
  getImageBaseDir,
  ensureDirectoryExists,
  getImageUrl,
  generateFilename,
  saveImageFile
};
