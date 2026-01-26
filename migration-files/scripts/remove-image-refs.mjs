import fs from 'fs/promises';
import path from 'path';

const BLOG_DATA_PATH = path.join(process.cwd(), 'src', 'data', 'blogs.json');

async function removeImageReferences() {
    try {
        console.log('Loading blog data...');
        const data = await fs.readFile(BLOG_DATA_PATH, 'utf-8');
        let blogs = JSON.parse(data);

        console.log(`Processing ${blogs.length} blog posts...`);
        
        let updatedCount = 0;
        
        blogs = blogs.map(blog => {
            let updated = false;
            
            // Remove image field if it exists
            if (blog.image) {
                console.log(`Removing image reference from: ${blog.title}`);
                console.log(`  - Image: ${blog.image}`);
                delete blog.image;
                updated = true;
            }
            
            // Remove imageAlt field if it exists  
            if (blog.imageAlt) {
                delete blog.imageAlt;
                updated = true;
            }
            
            if (updated) {
                updatedCount++;
            }
            
            return blog;
        });

        if (updatedCount === 0) {
            console.log('No image references found to remove.');
            return;
        }

        // Save updated data
        console.log('Saving updated blog data...');
        await fs.writeFile(BLOG_DATA_PATH, JSON.stringify(blogs, null, 2));
        
        console.log(`✅ Removed image references from ${updatedCount} blog posts`);
        console.log('🎨 All blog posts now use icon-based visual system');

    } catch (error) {
        console.error('Error removing image references:', error);
        process.exit(1);
    }
}

removeImageReferences();
