import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Download an image from a URL and save it to the public/images directory
 */
export const downloadImage = async (imageUrl, filename) => {
    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: {
                'User-Agent': 'Cloud-Evolvers-Image-Server/1.0'
            }
        });
        
        // Determine the project root and public/images directory
        const projectRoot = path.resolve(__dirname, '../../../');
        const imagesDir = path.join(projectRoot, 'public', 'images');
        
        // Ensure the images directory exists
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }
        
        // Write the image file
        const filePath = path.join(imagesDir, filename);
        fs.writeFileSync(filePath, response.data);
        
        return {
            success: true,
            filePath,
            publicPath: `/images/${filename}`,
            size: response.data.length
        };
    } catch (error) {
        console.error('Error downloading image:', error.message);
        throw new Error(`Failed to download image: ${error.message}`);
    }
};

/**
 * List all downloaded images in the public/images directory
 */
export const listDownloadedImages = () => {
    const projectRoot = path.resolve(__dirname, '../../../');
    const imagesDir = path.join(projectRoot, 'public', 'images');
    
    if (!fs.existsSync(imagesDir)) {
        return [];
    }
    
    const files = fs.readdirSync(imagesDir)
        .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map(file => {
            const filePath = path.join(imagesDir, file);
            const stats = fs.statSync(filePath);
            return {
                filename: file,
                path: `/images/${file}`,
                size: stats.size,
                created: stats.birthtime,
                modified: stats.mtime
            };
        })
        .sort((a, b) => b.created - a.created);
    
    return files;
};

/**
 * Sanitize filename for safe file system operations
 */
export const sanitizeFilename = (filename) => {
    const sanitized = filename.replace(/[^a-zA-Z0-9.-]/g, '-').toLowerCase();
    return sanitized.endsWith('.jpg') ? sanitized : `${sanitized}.jpg`;
};