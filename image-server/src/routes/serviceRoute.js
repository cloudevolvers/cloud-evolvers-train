import fs from 'fs/promises';
import path from 'path';

/**
 * List images from a specific service folder
 */
export const listServiceImages = async (req, res) => {
    try {
        const { service } = req.params;
        
        // Validate service parameter
        const validServices = ['unsplash', 'pexels', 'pixabay'];
        if (!validServices.includes(service)) {
            return res.status(400).json({
                error: 'Invalid service',
                message: `Service must be one of: ${validServices.join(', ')}`,
                validServices
            });
        }

        // Define images directory path (from project root)
        const imagesDir = path.resolve('../public/images', service);
        
        try {
            // Check if service directory exists
            await fs.access(imagesDir);
        } catch (error) {
            return res.status(404).json({
                error: 'Service directory not found',
                message: `Directory for service '${service}' does not exist`,
                path: imagesDir
            });
        }

        // Read directory contents
        const files = await fs.readdir(imagesDir);
        
        // Filter for image files and get stats
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        const images = [];

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (imageExtensions.includes(ext)) {
                const filePath = path.join(imagesDir, file);
                try {
                    const stats = await fs.stat(filePath);
                    images.push({
                        filename: file,
                        path: `/images/${service}/${file}`,
                        size: stats.size,
                        created: stats.birthtime.toISOString(),
                        modified: stats.mtime.toISOString(),
                        service: service
                    });
                } catch (err) {
                    console.warn(`Failed to get stats for ${file}:`, err);
                }
            }
        }

        // Sort by filename
        images.sort((a, b) => a.filename.localeCompare(b.filename));

        res.json(images);

    } catch (error) {
        console.error('Error listing service images:', error);
        res.status(500).json({
            error: 'Failed to list images',
            message: error.message
        });
    }
};

/**
 * List all images organized by service
 */
export const listAllServiceImages = async (req, res) => {
    try {
        const services = ['unsplash', 'pexels', 'pixabay'];
        const allImages = [];
        const serviceStats = {};

        for (const service of services) {
            try {
                const imagesDir = path.resolve('../public/images', service);
                
                // Check if service directory exists
                await fs.access(imagesDir);
                
                // Read directory contents
                const files = await fs.readdir(imagesDir);
                
                // Filter for image files and get stats
                const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
                const serviceImages = [];

                for (const file of files) {
                    const ext = path.extname(file).toLowerCase();
                    if (imageExtensions.includes(ext)) {
                        const filePath = path.join(imagesDir, file);
                        try {
                            const stats = await fs.stat(filePath);
                            const imageData = {
                                filename: file,
                                path: `/images/${service}/${file}`,
                                size: stats.size,
                                created: stats.birthtime.toISOString(),
                                modified: stats.mtime.toISOString(),
                                service: service
                            };
                            serviceImages.push(imageData);
                            allImages.push(imageData);
                        } catch (err) {
                            console.warn(`Failed to get stats for ${file}:`, err);
                        }
                    }
                }

                serviceStats[service] = {
                    count: serviceImages.length,
                    totalSize: serviceImages.reduce((sum, img) => sum + img.size, 0)
                };

            } catch (error) {
                console.warn(`Service directory '${service}' not found or inaccessible`);
                serviceStats[service] = {
                    count: 0,
                    totalSize: 0,
                    error: 'Directory not found'
                };
            }
        }

        // Sort all images by filename
        allImages.sort((a, b) => a.filename.localeCompare(b.filename));

        res.json({
            images: allImages,
            summary: {
                total: allImages.length,
                totalSize: allImages.reduce((sum, img) => sum + img.size, 0),
                services: serviceStats
            }
        });

    } catch (error) {
        console.error('Error listing all service images:', error);
        res.status(500).json({
            error: 'Failed to list images',
            message: error.message
        });
    }
};