import axios from 'axios';
import { getApiKeys, isProviderAvailable } from './keyVaultService.js';

/**
 * Search Unsplash for images
 */
export const searchUnsplash = async (query, page = 1, perPage = 30) => {
    if (!isProviderAvailable('unsplash')) {
        throw new Error('Unsplash API key not configured');
    }
    
    const apiKeys = getApiKeys();
    
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
                orientation: 'landscape',
                order_by: 'relevant'
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
                provider: 'unsplash',
                downloadUrl: photo.urls.raw + '&w=1920&h=1080&fit=crop'
            })),
            total: response.data.total,
            totalPages: response.data.total_pages
        };
    } catch (error) {
        console.error('Unsplash search error:', error.message);
        throw new Error(`Failed to search Unsplash: ${error.message}`);
    }
};

/**
 * Search Pexels for images
 */
export const searchPexels = async (query, page = 1, perPage = 30) => {
    if (!isProviderAvailable('pexels')) {
        throw new Error('Pexels API key not configured');
    }
    
    const apiKeys = getApiKeys();
    
    try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
                'Authorization': apiKeys.pexels
            },
            params: {
                query,
                page,
                per_page: perPage,
                orientation: 'landscape'
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
                sourceUrl: photo.url,
                provider: 'pexels'
            })),
            total: response.data.total_results,
            totalPages: Math.ceil(response.data.total_results / perPage)
        };
    } catch (error) {
        console.error('Pexels search error:', error.message);
        throw new Error(`Failed to search Pexels: ${error.message}`);
    }
};

/**
 * Search Pixabay for images
 */
export const searchPixabay = async (query, page = 1, perPage = 30) => {
    if (!isProviderAvailable('pixabay')) {
        throw new Error('Pixabay API key not configured');
    }
    
    const apiKeys = getApiKeys();
    
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: apiKeys.pixabay,
                q: query,
                image_type: 'photo',
                page,
                per_page: perPage,
                safesearch: 'true',
                order: 'popular',
                orientation: 'horizontal',
                min_width: 1920,
                min_height: 1080
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
                sourceUrl: photo.pageURL,
                provider: 'pixabay'
            })),
            total: response.data.totalHits,
            totalPages: Math.ceil(response.data.totalHits / perPage)
        };
    } catch (error) {
        console.error('Pixabay search error:', error.message);
        throw new Error(`Failed to search Pixabay: ${error.message}`);
    }
};

/**
 * Search all available providers
 */
export const searchAllProviders = async (query, page = 1, perPage = 30) => {
    const searchPromises = [];
    const perProviderLimit = Math.ceil(perPage / 3);
    
    if (isProviderAvailable('unsplash')) {
        searchPromises.push(searchUnsplash(query, page, perProviderLimit));
    }
    if (isProviderAvailable('pexels')) {
        searchPromises.push(searchPexels(query, page, perProviderLimit));
    }
    if (isProviderAvailable('pixabay')) {
        searchPromises.push(searchPixabay(query, page, perProviderLimit));
    }
    
    if (searchPromises.length === 0) {
        throw new Error('No image providers available');
    }
    
    const allResults = await Promise.allSettled(searchPromises);
    const successfulResults = allResults
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    
    const combinedResults = successfulResults.reduce((acc, providerResult) => {
        acc.push(...providerResult.results);
        return acc;
    }, []);
    
    return combinedResults;
};