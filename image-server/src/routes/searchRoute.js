import { searchUnsplash, searchPexels, searchPixabay, searchAllProviders } from '../services/imageSearchService.js';

/**
 * Search images route handler
 */
export const searchImages = async (req, res) => {
    try {
        const { query, provider = 'all', page = 1, per_page = 30 } = req.query;
        
        if (!query) {
            return res.status(400).json({
                error: 'Query parameter is required',
                example: '/search?query=cloud%20computing&provider=unsplash'
            });
        }
        
        const pageNum = parseInt(page);
        const perPage = Math.min(parseInt(per_page), 100);
        let results = [];
        
        console.log(`🔍 Searching for "${query}" via ${provider} (page ${pageNum}, per_page ${perPage})`);
        
        if (provider === 'all') {
            results = await searchAllProviders(query, pageNum, perPage);
        } else {
            // Search specific provider
            switch (provider.toLowerCase()) {
                case 'unsplash':
                    const unsplashResults = await searchUnsplash(query, pageNum, perPage);
                    results = unsplashResults.results;
                    break;
                case 'pexels':
                    const pexelsResults = await searchPexels(query, pageNum, perPage);
                    results = pexelsResults.results;
                    break;
                case 'pixabay':
                    const pixabayResults = await searchPixabay(query, pageNum, perPage);
                    results = pixabayResults.results;
                    break;
                default:
                    return res.status(400).json({
                        error: `Unknown provider: ${provider}`,
                        available: ['all', 'unsplash', 'pexels', 'pixabay']
                    });
            }
        }
        
        console.log(`✅ Found ${results.length} images`);
        
        res.json({
            query,
            provider,
            page: pageNum,
            perPage,
            total: results.length,
            results: results.slice(0, perPage)
        });
        
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({
            error: error.message || 'Internal server error',
            timestamp: new Date().toISOString()
        });
    }
};