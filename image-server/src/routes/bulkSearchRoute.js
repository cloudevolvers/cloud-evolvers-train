import { searchAllProviders } from '../services/imageSearchService.js';

/**
 * Bulk search route handler for multiple queries
 */
export const bulkSearch = async (req, res) => {
    try {
        const { queries, provider = 'all', perPage = 50 } = req.body;
        
        if (!queries || !Array.isArray(queries)) {
            return res.status(400).json({
                error: 'queries array is required'
            });
        }
        
        console.log(`🔍 Bulk searching for ${queries.length} queries`);
        
        const results = [];
        
        for (const query of queries) {
            try {
                const searchResults = await searchAllProviders(query, 1, perPage);
                
                results.push({
                    query,
                    count: searchResults.length,
                    results: searchResults
                });
                
                console.log(`✅ Found ${searchResults.length} images for "${query}"`);
                
                // Small delay between queries to be respectful to APIs
                await new Promise(resolve => setTimeout(resolve, 500));
                
            } catch (error) {
                console.error(`❌ Error searching for "${query}":`, error.message);
                results.push({
                    query,
                    count: 0,
                    error: error.message,
                    results: []
                });
            }
        }
        
        const totalImages = results.reduce((sum, result) => sum + result.count, 0);
        console.log(`🎉 Bulk search complete: ${totalImages} total images found`);
        
        res.json({
            queries: queries.length,
            totalImages,
            results
        });
        
    } catch (error) {
        console.error('Bulk search error:', error);
        res.status(500).json({
            error: error.message || 'Internal server error',
            timestamp: new Date().toISOString()
        });
    }
};