/**
 * Hero Image Downloader Utility
 * Downloads high-quality professional images for the Cloud Evolvers training website
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Mock API keys for testing (replace with real ones from Key Vault in production)
const API_KEYS = {
    unsplash: process.env.UNSPLASH_API_KEY || 'your-unsplash-key',
    pexels: process.env.PEXELS_API_KEY || 'your-pexels-key',
    pixabay: process.env.PIXABAY_API_KEY || 'your-pixabay-key'
};

// High-quality image queries for professional training website
const IMAGE_QUERIES = [
    {
        query: 'professional cloud computing training',
        filename: 'professional-cloud-training-hero',
        description: 'Professional cloud computing training session'
    },
    {
        query: 'azure cloud infrastructure modern office',
        filename: 'azure-cloud-infrastructure',
        description: 'Modern Azure cloud infrastructure visualization'
    },
    {
        query: 'business team collaboration technology',
        filename: 'business-team-collaboration',
        description: 'Professional business team collaboration'
    },
    {
        query: 'data center servers cloud computing',
        filename: 'data-center-servers',
        description: 'Modern data center and cloud servers'
    },
    {
        query: 'professional developer coding laptop',
        filename: 'developer-coding-professional',
        description: 'Professional developer working on code'
    },
    {
        query: 'corporate training presentation modern',
        filename: 'corporate-training-presentation',
        description: 'Modern corporate training presentation'
    },
    {
        query: 'technology innovation digital transformation',
        filename: 'technology-innovation',
        description: 'Technology innovation and digital transformation'
    },
    {
        query: 'modern office workspace collaboration',
        filename: 'modern-office-workspace',
        description: 'Modern office workspace with collaboration'
    }
];

// Search Unsplash for high-quality images
async function searchUnsplash(query, perPage = 10) {
    if (!API_KEYS.unsplash) {
        console.log('Unsplash API key not configured, skipping...');
        return [];
    }
    
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                'Authorization': `Client-ID ${API_KEYS.unsplash}`,
                'Accept-Version': 'v1'
            },
            params: {
                query,
                per_page: perPage,
                orientation: 'landscape',
                order_by: 'relevant'
            }
        });
        
        return response.data.results.map(photo => ({
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
            provider: 'unsplash'
        }));
    } catch (error) {
        console.error('Unsplash search error:', error.message);
        return [];
    }
}

// Search Pexels for high-quality images
async function searchPexels(query, perPage = 10) {
    if (!API_KEYS.pexels) {
        console.log('Pexels API key not configured, skipping...');
        return [];
    }
    
    try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
                'Authorization': API_KEYS.pexels
            },
            params: {
                query,
                per_page: perPage,
                orientation: 'landscape'
            }
        });
        
        return response.data.photos.map(photo => ({
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
        }));
    } catch (error) {
        console.error('Pexels search error:', error.message);
        return [];
    }
}

// Download image from URL
async function downloadImage(imageUrl, outputPath) {
    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: {
                'User-Agent': 'Cloud-Evolvers-Training/1.0'
            }
        });
        
        fs.writeFileSync(outputPath, response.data);
        return {
            success: true,
            size: response.data.length,
            path: outputPath
        };
    } catch (error) {
        console.error('Download error:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// Main function to download hero images
async function downloadHeroImages() {
    console.log('🚀 Starting hero image download process...\n');
    
    const projectRoot = path.resolve(__dirname, '../../../');
    const imagesDir = path.join(projectRoot, 'public', 'images');
    
    // Ensure images directory exists
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
        console.log('✅ Created images directory');
    }
    
    const downloadedImages = [];
    
    for (const { query, filename, description } of IMAGE_QUERIES) {
        console.log(`🔍 Searching for: "${query}"`);
        
        try {
            // Search both Unsplash and Pexels
            const [unsplashResults, pexelsResults] = await Promise.all([
                searchUnsplash(query, 5),
                searchPexels(query, 5)
            ]);
            
            const allResults = [...unsplashResults, ...pexelsResults];
            
            if (allResults.length === 0) {
                console.log(`❌ No results found for "${query}"`);
                continue;
            }
            
            // Select the best image (highest resolution, good aspect ratio)
            const bestImage = allResults
                .filter(img => img.width >= 1200 && img.height >= 600) // Minimum size
                .sort((a, b) => {
                    // Prefer landscape orientation and higher resolution
                    const aRatio = a.width / a.height;
                    const bRatio = b.width / b.height;
                    const aScore = (aRatio >= 1.5 && aRatio <= 2.5 ? 100 : 0) + (a.width * a.height) / 1000000;
                    const bScore = (bRatio >= 1.5 && bRatio <= 2.5 ? 100 : 0) + (b.width * b.height) / 1000000;
                    return bScore - aScore;
                })[0];
                
            if (!bestImage) {
                console.log(`❌ No suitable image found for "${query}"`);
                continue;
            }
            
            // Download the image
            const fileExtension = bestImage.url.includes('.jpg') ? '.jpg' : '.png';
            const outputFilename = `${filename}${fileExtension}`;
            const outputPath = path.join(imagesDir, outputFilename);
            
            console.log(`📥 Downloading: ${bestImage.url}`);
            console.log(`   Provider: ${bestImage.provider}`);
            console.log(`   Author: ${bestImage.author}`);
            console.log(`   Size: ${bestImage.width}x${bestImage.height}`);
            
            const downloadResult = await downloadImage(bestImage.url, outputPath);
            
            if (downloadResult.success) {
                console.log(`✅ Downloaded: ${outputFilename} (${Math.round(downloadResult.size / 1024)}KB)`);
                
                downloadedImages.push({
                    filename: outputFilename,
                    path: `/images/${outputFilename}`,
                    description,
                    metadata: {
                        provider: bestImage.provider,
                        author: bestImage.author,
                        authorUrl: bestImage.authorUrl,
                        sourceUrl: bestImage.sourceUrl,
                        width: bestImage.width,
                        height: bestImage.height,
                        size: downloadResult.size
                    }
                });
            } else {
                console.log(`❌ Failed to download: ${downloadResult.error}`);
            }
            
        } catch (error) {
            console.error(`❌ Error processing "${query}":`, error.message);
        }
        
        console.log(''); // Empty line for readability
    }
    
    // Generate a summary report
    console.log('📊 Download Summary:');
    console.log(`✅ Successfully downloaded: ${downloadedImages.length} images`);
    console.log(`❌ Failed: ${IMAGE_QUERIES.length - downloadedImages.length} images\n`);
    
    if (downloadedImages.length > 0) {
        console.log('📋 Downloaded Images:');
        downloadedImages.forEach((img, index) => {
            console.log(`${index + 1}. ${img.filename}`);
            console.log(`   Path: ${img.path}`);
            console.log(`   Description: ${img.description}`);
            console.log(`   Author: ${img.metadata.author} (${img.metadata.provider})`);
            console.log(`   Size: ${img.metadata.width}x${img.metadata.height} (${Math.round(img.metadata.size / 1024)}KB)`);
            console.log('');
        });
        
        // Generate TypeScript interface for Hero component
        console.log('🔧 TypeScript interface for Hero component:');
        console.log('```typescript');
        console.log('const heroImages = [');
        downloadedImages.forEach((img, index) => {
            console.log(`  {`);
            console.log(`    src: '${img.path}',`);
            console.log(`    alt: '${img.description}',`);
            console.log(`    description: '${img.description}'`);
            console.log(`  }${index < downloadedImages.length - 1 ? ',' : ''}`);
        });
        console.log('];');
        console.log('```');
    }
}

// Run the script if called directly
if (require.main === module) {
    downloadHeroImages().catch(console.error);
}

module.exports = { downloadHeroImages, searchUnsplash, searchPexels, downloadImage };