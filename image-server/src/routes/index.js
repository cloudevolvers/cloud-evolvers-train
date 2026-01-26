import { healthCheck } from './healthRoute.js';
import { searchImages } from './searchRoute.js';
import { downloadImageRoute } from './downloadRoute.js';
import { listImages } from './listRoute.js';
import { bulkSearch } from './bulkSearchRoute.js';
import { listServiceImages, listAllServiceImages } from './serviceRoute.js';

/**
 * Setup all routes for the Express app
 */
export const setupRoutes = (app) => {
    // Health check
    app.get('/health', healthCheck);
    
    // Image search
    app.get('/search', searchImages);
    
    // Image download
    app.post('/download', downloadImageRoute);
    
    // List downloaded images
    app.get('/downloaded', listImages);
    
    // List images by service
    app.get('/api/images/service/:service', listServiceImages);
    
    // List all images organized by service
    app.get('/api/images/all', listAllServiceImages);
    
    // Bulk search
    app.post('/bulk-search', bulkSearch);
    
    // Root route
    app.get('/', (req, res) => {
        res.json({
            service: 'Cloud Evolvers Image Server',
            version: '1.0.0',
            endpoints: [
                'GET /health - Health check',
                'GET /search?query=<term>&provider=<provider> - Search images',
                'POST /download - Download an image',
                'GET /downloaded - List downloaded images',
                'GET /api/images/service/:service - List images from specific service (unsplash, pexels, pixabay)',
                'GET /api/images/all - List all images organized by service',
                'POST /bulk-search - Bulk search multiple queries'
            ],
            timestamp: new Date().toISOString()
        });
    });
};