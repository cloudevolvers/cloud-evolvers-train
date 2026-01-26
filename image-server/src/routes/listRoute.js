import { listDownloadedImages } from '../services/imageDownloadService.js';

/**
 * List downloaded images route handler
 */
export const listImages = (req, res) => {
    try {
        const files = listDownloadedImages();
        
        res.json({
            count: files.length,
            images: files
        });
        
    } catch (error) {
        console.error('Error listing images:', error);
        res.status(500).json({
            error: error.message || 'Internal server error'
        });
    }
};