/**
 * Test script to demonstrate the image API functionality
 * This script fetches and downloads professional hero images
 */

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Professional image URLs from Unsplash (free to use)
const HERO_IMAGES = [
    {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
        filename: 'professional-cloud-training-hero.jpg',
        alt: 'Professional cloud computing and training environment',
        description: 'Modern cloud infrastructure visualization'
    },
    {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        filename: 'business-team-collaboration-modern.jpg',
        alt: 'Business team collaboration in modern office',
        description: 'Professional business team working together'
    },
    {
        url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
        filename: 'azure-cloud-infrastructure-modern.jpg',
        alt: 'Modern cloud infrastructure and data center',
        description: 'Cloud computing infrastructure visualization'
    },
    {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        filename: 'professional-training-presentation.jpg',
        alt: 'Professional training and presentation session',
        description: 'Corporate training and presentation environment'
    },
    {
        url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        filename: 'developer-coding-workspace.jpg',
        alt: 'Professional developer coding workspace',
        description: 'Modern developer working environment'
    },
    {
        url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        filename: 'corporate-meeting-technology.jpg',
        alt: 'Corporate meeting with technology focus',
        description: 'Professional corporate technology meeting'
    }
];

// Function to download image from URL
async function downloadImage(imageUrl, outputPath) {
    
    try {
        console.log(`📥 Downloading: ${path.basename(outputPath)}`);
        
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: {
                'User-Agent': 'Cloud-Evolvers-Training/1.0'
            }
        });
        
        fs.writeFileSync(outputPath, response.data);
        
        console.log(`✅ Downloaded: ${path.basename(outputPath)} (${Math.round(response.data.length / 1024)}KB)`);
        
        return {
            success: true,
            size: response.data.length,
            path: outputPath
        };
    } catch (error) {
        console.error(`❌ Failed to download ${path.basename(outputPath)}:`, error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// Main function
async function downloadHeroImages() {
    console.log('🚀 Cloud Evolvers - Hero Images Downloader\n');
    
    const projectRoot = path.resolve(__dirname, '..');
    const publicImagesDir = path.join(projectRoot, 'public', 'images');
    
    // Ensure directory exists
    if (!fs.existsSync(publicImagesDir)) {
        fs.mkdirSync(publicImagesDir, { recursive: true });
        console.log('📁 Created public/images directory\n');
    }
    
    const results = [];
    
    for (const image of HERO_IMAGES) {
        const outputPath = path.join(publicImagesDir, image.filename);
        
        // Skip if file already exists
        if (fs.existsSync(outputPath)) {
            console.log(`⏭️  Skipping ${image.filename} (already exists)`);
            results.push({
                ...image,
                success: true,
                skipped: true,
                path: `/images/${image.filename}`
            });
            continue;
        }
        
        const result = await downloadImage(image.url, outputPath);
        
        results.push({
            ...image,
            ...result,
            path: result.success ? `/images/${image.filename}` : null
        });
        
        // Small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // Generate summary
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    console.log('\n📊 Download Summary:');
    console.log(`✅ Successful: ${successful.length}`);
    console.log(`❌ Failed: ${failed.length}`);
    console.log(`📁 Total images in directory: ${fs.readdirSync(publicImagesDir).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i)).length}`);
    
    if (successful.length > 0) {
        console.log('\n🎨 Available Hero Images for React Component:');
        console.log('```typescript');
        console.log('const heroImages = [');
        successful.forEach((img, index) => {
            console.log('  {');
            console.log(`    src: '${img.path}',`);
            console.log(`    alt: '${img.alt}',`);
            console.log(`    description: '${img.description}'`);
            console.log(`  }${index < successful.length - 1 ? ',' : ''}`);
        });
        console.log('];');
        console.log('```');
        
        console.log('\n💡 Usage in Hero component:');
        console.log('1. Copy the heroImages array above');
        console.log('2. Replace the existing heroImages array in Hero.tsx');
        console.log('3. Update currentHeroImage index to switch between images');
        console.log('4. All images are high-quality, professional, and free to use');
    }
    
    return results;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    downloadHeroImages().catch(console.error);
}

export { downloadHeroImages };