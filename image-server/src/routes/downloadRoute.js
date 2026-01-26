import { downloadImage, sanitizeFilename } from '../services/imageDownloadService.js';

/**
 * Download image route handler
 */
export const downloadImageRoute = async (req, res) => {
    try {
        const { imageUrl, filename, metadata } = req.body;
        
        if (!imageUrl || !filename) {
            return res.status(400).json({
                error: 'imageUrl and filename are required'
            });
        }
        
        // Sanitize filename
        const finalFilename = sanitizeFilename(filename);
        
        console.log(`📥 Downloading: ${finalFilename}`);
        
        const downloadResult = await downloadImage(imageUrl, finalFilename);
        
        console.log(`✅ Downloaded: ${finalFilename} (${Math.round(downloadResult.size / 1024)}KB)`);
        
        res.json({
            message: 'Image downloaded successfully',
            ...downloadResult,
            metadata: metadata || {}
        });
        
    } catch (error) {
        console.error('Download error:', error);
        res.status(500).json({
            error: error.message || 'Internal server error',
            timestamp: new Date().toISOString()
        });
    }
};