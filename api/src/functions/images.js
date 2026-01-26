const { app } = require('@azure/functions');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { DefaultAzureCredential } = require('@azure/identity');
const { SecretClient } = require('@azure/keyvault-secrets');

// Azure Key Vault configuration
const keyVaultUrl = 'https://cloudevolvers-staging-kv.vault.azure.net/';
let secretClient;
let apiKeys = {};

// Initialize Azure Key Vault client
async function initializeKeyVault() {
    try {
        const credential = new DefaultAzureCredential();
        secretClient = new SecretClient(keyVaultUrl, credential);
        
        // Fetch API keys from Key Vault
        const secrets = await Promise.allSettled([
            secretClient.getSecret('UNSPLASH-API-KEY'),
            secretClient.getSecret('PEXELS-API-KEY'),
            secretClient.getSecret('PIXABAY-API-KEY')
        ]);
        
        if (secrets[0].status === 'fulfilled') {
            apiKeys.unsplash = secrets[0].value.value;
        }
        if (secrets[1].status === 'fulfilled') {
            apiKeys.pexels = secrets[1].value.value;
        }
        if (secrets[2].status === 'fulfilled') {
            apiKeys.pixabay = secrets[2].value.value;
        }
        
        console.log('Successfully initialized API keys from Key Vault');
    } catch (error) {
        console.warn('Failed to initialize Key Vault, falling back to environment variables:', error.message);
        // Fallback to environment variables
        apiKeys = {
            unsplash: process.env.UNSPLASH_API_KEY,
            pexels: process.env.PEXELS_API_KEY,
            pixabay: process.env.PIXABAY_API_KEY
        };
    }
}

// Search Unsplash
async function searchUnsplash(query, page = 1, perPage = 20) {
    if (!apiKeys.unsplash) {
        throw new Error('Unsplash API key not configured');
    }
    
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                'Authorization': `Client-ID ${apiKeys.unsplash}`,
                'Accept-Version': 'v1'
            },
            params: {
                query,
                page,
                per_page: perPage,
                client_id: apiKeys.unsplash
            }
        });
        
        return {
            provider: 'unsplash',
            results: response.data.results.map(photo => ({
                id: `unsplash-${photo.id}`,
                url: photo.urls.regular,
                fullUrl: photo.urls.full,
                thumbnail: photo.urls.thumb,
                alt: photo.alt_description || photo.description || query,
                width: photo.width,
                height: photo.height,
                author: photo.user.name,
                authorUrl: photo.user.links.html,
                sourceUrl: photo.links.html,
                downloadUrl: photo.links.download_location
            })),
            total: response.data.total,
            totalPages: response.data.total_pages
        };
    } catch (error) {
        console.error('Unsplash search error:', error.message);
        throw new Error(`Failed to search Unsplash: ${error.message}`);
    }
}

// Search Pexels
async function searchPexels(query, page = 1, perPage = 20) {
    if (!apiKeys.pexels) {
        throw new Error('Pexels API key not configured');
    }
    
    try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
                'Authorization': apiKeys.pexels
            },
            params: {
                query,
                page,
                per_page: perPage
            }
        });
        
        return {
            provider: 'pexels',
            results: response.data.photos.map(photo => ({
                id: `pexels-${photo.id}`,
                url: photo.src.large,
                fullUrl: photo.src.original,
                thumbnail: photo.src.medium,
                alt: photo.alt || query,
                width: photo.width,
                height: photo.height,
                author: photo.photographer,
                authorUrl: photo.photographer_url,
                sourceUrl: photo.url
            })),
            total: response.data.total_results,
            totalPages: Math.ceil(response.data.total_results / perPage)
        };
    } catch (error) {
        console.error('Pexels search error:', error.message);
        throw new Error(`Failed to search Pexels: ${error.message}`);
    }
}

// Search Pixabay
async function searchPixabay(query, page = 1, perPage = 20) {
    if (!apiKeys.pixabay) {
        throw new Error('Pixabay API key not configured');
    }
    
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: apiKeys.pixabay,
                q: query,
                image_type: 'photo',
                page,
                per_page: perPage,
                safesearch: 'true',
                order: 'popular'
            }
        });
        
        return {
            provider: 'pixabay',
            results: response.data.hits.map(photo => ({
                id: `pixabay-${photo.id}`,
                url: photo.largeImageURL,
                fullUrl: photo.fullHDURL || photo.largeImageURL,
                thumbnail: photo.webformatURL,
                alt: photo.tags || query,
                width: photo.imageWidth,
                height: photo.imageHeight,
                author: photo.user,
                authorUrl: `https://pixabay.com/users/${photo.user}-${photo.user_id}/`,
                sourceUrl: photo.pageURL
            })),
            total: response.data.totalHits,
            totalPages: Math.ceil(response.data.totalHits / perPage)
        };
    } catch (error) {
        console.error('Pixabay search error:', error.message);
        throw new Error(`Failed to search Pixabay: ${error.message}`);
    }
}

// Download and save image to public/images directory
async function downloadAndSaveImage(imageUrl, filename) {
    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: {
                'User-Agent': 'Cloud-Evolvers-Training/1.0'
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
}

// Main API handler
app.http('images', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            // Initialize Key Vault on first request
            if (!secretClient) {
                await initializeKeyVault();
            }
            
            const method = request.method.toLowerCase();
            
            if (method === 'get') {
                // Handle search requests
                const query = request.query.get('query');
                const provider = request.query.get('provider') || 'all';
                const page = parseInt(request.query.get('page') || '1');
                const perPage = Math.min(parseInt(request.query.get('per_page') || '20'), 50);
                
                if (!query) {
                    return {
                        status: 400,
                        jsonBody: {
                            error: 'Query parameter is required',
                            example: '/api/images?query=cloud%20computing&provider=unsplash'
                        }
                    };
                }
                
                let results = [];
                
                switch (provider.toLowerCase()) {
                    case 'unsplash':
                        const unsplashResults = await searchUnsplash(query, page, perPage);
                        results.push(unsplashResults);
                        break;
                        
                    case 'pexels':
                        const pexelsResults = await searchPexels(query, page, perPage);
                        results.push(pexelsResults);
                        break;
                        
                    case 'pixabay':
                        const pixabayResults = await searchPixabay(query, page, perPage);
                        results.push(pixabayResults);
                        break;
                        
                    case 'all':
                    default:
                        // Search all providers
                        const searchPromises = [];
                        if (apiKeys.unsplash) searchPromises.push(searchUnsplash(query, page, Math.ceil(perPage / 3)));
                        if (apiKeys.pexels) searchPromises.push(searchPexels(query, page, Math.ceil(perPage / 3)));
                        if (apiKeys.pixabay) searchPromises.push(searchPixabay(query, page, Math.ceil(perPage / 3)));
                        
                        const allResults = await Promise.allSettled(searchPromises);
                        results = allResults
                            .filter(result => result.status === 'fulfilled')
                            .map(result => result.value);
                        break;
                }
                
                // Combine and flatten results
                const combinedResults = results.reduce((acc, providerResult) => {
                    acc.push(...providerResult.results);
                    return acc;
                }, []);
                
                return {
                    status: 200,
                    jsonBody: {
                        query,
                        provider,
                        page,
                        perPage,
                        total: combinedResults.length,
                        results: combinedResults.slice(0, perPage),
                        providers: results.map(r => ({
                            provider: r.provider,
                            total: r.total,
                            totalPages: r.totalPages
                        }))
                    }
                };
                
            } else if (method === 'post') {
                // Handle image download requests
                const body = await request.json();
                const { imageUrl, filename, metadata } = body;
                
                if (!imageUrl || !filename) {
                    return {
                        status: 400,
                        jsonBody: {
                            error: 'imageUrl and filename are required'
                        }
                    };
                }
                
                // Sanitize filename
                const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '-').toLowerCase();
                const finalFilename = sanitizedFilename.endsWith('.jpg') ? sanitizedFilename : `${sanitizedFilename}.jpg`;
                
                const downloadResult = await downloadAndSaveImage(imageUrl, finalFilename);
                
                return {
                    status: 200,
                    jsonBody: {
                        message: 'Image downloaded successfully',
                        ...downloadResult,
                        metadata: metadata || {}
                    }
                };
            }
            
        } catch (error) {
            console.error('Images API error:', error);
            return {
                status: 500,
                jsonBody: {
                    error: error.message || 'Internal server error',
                    timestamp: new Date().toISOString()
                }
            };
        }
    }
});

module.exports = { searchUnsplash, searchPexels, searchPixabay, downloadAndSaveImage };