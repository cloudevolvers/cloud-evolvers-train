import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { bulkSearchQueries } from '../src/utils/searchQueries.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const IMAGE_SERVER_URL = 'http://localhost:3001';
const BATCH_SIZE = 5; // Number of concurrent queries
const IMAGES_PER_QUERY = 20; // Images to fetch per query
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds between batches

async function bulkDownloadImages() {
    console.log('🚀 Starting bulk image download process...');
    console.log(`📊 Total queries: ${bulkSearchQueries.length}`);
    console.log(`🔍 Images per query: ${IMAGES_PER_QUERY}`);
    console.log(`📦 Batch size: ${BATCH_SIZE}`);
    
    let totalDownloaded = 0;
    let totalFound = 0;
    const downloadedFiles = [];
    
    // Process queries in batches
    for (let i = 0; i < bulkSearchQueries.length; i += BATCH_SIZE) {
        const batch = bulkSearchQueries.slice(i, i + BATCH_SIZE);
        console.log(`\n📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(bulkSearchQueries.length / BATCH_SIZE)}`);
        
        try {
            // Search for images in this batch
            const response = await axios.post(`${IMAGE_SERVER_URL}/bulk-search`, {
                queries: batch,
                provider: 'all',
                perPage: IMAGES_PER_QUERY
            });
            
            const batchResults = response.data.results;
            
            // Download best images from each query
            for (const queryResult of batchResults) {
                if (queryResult.results && queryResult.results.length > 0) {
                    totalFound += queryResult.results.length;
                    console.log(`📸 Found ${queryResult.results.length} images for "${queryResult.query}"`);
                    
                    // Download top 3 images from each query
                    const topImages = queryResult.results.slice(0, 3);
                    
                    for (const [index, image] of topImages.entries()) {
                        try {
                            const filename = `${queryResult.query.replace(/\s+/g, '-')}-${image.provider}-${index + 1}.jpg`;
                            
                            // Check if file already exists
                            const projectRoot = path.resolve(__dirname, '../../');
                            const imagesDir = path.join(projectRoot, 'public', 'images');
                            const filePath = path.join(imagesDir, filename);
                            
                            if (fs.existsSync(filePath)) {
                                console.log(`⏭️  Skipping existing file: ${filename}`);
                                continue;
                            }
                            
                            const downloadResponse = await axios.post(`${IMAGE_SERVER_URL}/download`, {
                                imageUrl: image.url,
                                filename: filename,
                                metadata: {
                                    query: queryResult.query,
                                    provider: image.provider,
                                    author: image.author,
                                    authorUrl: image.authorUrl,
                                    sourceUrl: image.sourceUrl,
                                    alt: image.alt
                                }
                            });
                            
                            if (downloadResponse.data.success) {
                                totalDownloaded++;
                                downloadedFiles.push({
                                    filename,
                                    query: queryResult.query,
                                    provider: image.provider,
                                    author: image.author,
                                    size: downloadResponse.data.size
                                });
                                console.log(`✅ Downloaded: ${filename} (${Math.round(downloadResponse.data.size / 1024)}KB)`);
                            }
                            
                            // Small delay between downloads
                            await new Promise(resolve => setTimeout(resolve, 300));
                            
                        } catch (downloadError) {
                            console.error(`❌ Failed to download image for "${queryResult.query}":`, downloadError.message);
                        }
                    }
                } else {
                    console.log(`⚠️  No images found for "${queryResult.query}"`);
                }
            }
            
        } catch (error) {
            console.error(`❌ Error processing batch starting at index ${i}:`, error.message);
        }
        
        // Delay between batches
        if (i + BATCH_SIZE < bulkSearchQueries.length) {
            console.log(`⏸️  Waiting ${DELAY_BETWEEN_BATCHES / 1000}s before next batch...`);
            await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
        }
    }
    
    // Generate summary report
    const summary = {
        totalQueries: bulkSearchQueries.length,
        totalImagesFound: totalFound,
        totalImagesDownloaded: totalDownloaded,
        downloadedFiles: downloadedFiles,
        providers: [...new Set(downloadedFiles.map(f => f.provider))],
        topQueries: downloadedFiles.reduce((acc, file) => {
            acc[file.query] = (acc[file.query] || 0) + 1;
            return acc;
        }, {}),
        timestamp: new Date().toISOString()
    };
    
    // Save summary report
    const reportPath = path.join(__dirname, '../', 'bulk-download-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));
    
    console.log('\n🎉 Bulk download complete!');
    console.log(`📊 Summary:`);
    console.log(`   - Queries processed: ${summary.totalQueries}`);
    console.log(`   - Images found: ${summary.totalImagesFound}`);
    console.log(`   - Images downloaded: ${summary.totalImagesDownloaded}`);
    console.log(`   - Providers used: ${summary.providers.join(', ')}`);
    console.log(`   - Report saved: ${reportPath}`);
    
    return summary;
}

// Only run if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    bulkDownloadImages()
        .then(() => {
            console.log('✅ Bulk download script completed successfully');
            process.exit(0);
        })
        .catch((error) => {
            console.error('❌ Bulk download script failed:', error);
            process.exit(1);
        });
}

export { bulkDownloadImages, bulkSearchQueries };