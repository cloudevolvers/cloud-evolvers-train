import path from 'path';
import fs from 'fs';

/**
 * Local Storage Service
 * Handles all file system operations for storing and retrieving images and other data.
 */
export class LocalStorageService {
  constructor(config = {}) {
    console.log(`LocalStorageService initialized for production storage`);

    // Always use production storage paths
    this.baseDir = '/home/data'; // Base /home/data directory

    // Set specific directories using appConfig paths if provided, otherwise derive from baseDir
    this.imagesBaseDir = config.imagesBaseDir || path.join(this.baseDir, 'images');
    // For blog images, use the public folder instead of private storage
    this.blogImagesDir = config.blogImagesDir || path.join(process.cwd(), 'public', 'images', 'blog');
    this.serviceImagesDir = config.serviceImagesDir || path.join(this.imagesBaseDir, 'services');
    this.showcaseImagesDir = config.showcaseImagesDir || path.join(this.imagesBaseDir, 'showcase');
    this.trainingImagesDir = config.trainingImagesDir || path.join(this.imagesBaseDir, 'training');
    // For blogs, use the public folder instead of private storage
    this.blogDir = config.blogDir || path.join(process.cwd(), 'public', 'blog'); // For blog markdown files in public folder
    this.servicesDir = config.servicesDir || path.join(this.baseDir, 'services'); // For services markdown/json
    // For trainings, use the public folder instead of private storage
    this.trainingDir = config.trainingDir || path.join(process.cwd(), 'public', 'trainings'); // For training markdown files in public folder

    // Public URLs (remain relative to web root)
    this.publicBaseUrl = '/images';

    // Initialize directories
    this.ensureDirectories();
  }

  /**
   * Create necessary directories if they don't exist
   */
  ensureDirectories() {
    const dirsToCreate = [
      this.baseDir,
      this.imagesBaseDir, // Ensure images base directory exists
      // Note: blogImagesDir is now in public folder and managed there
      this.serviceImagesDir,
      this.showcaseImagesDir,
      this.trainingImagesDir,
      this.servicesDir // Ensure services content directory exists
      // Note: blogDir and trainingDir are not included as they're in public folder and should exist via git
    ];

    for (const dir of dirsToCreate) {
      try {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
          console.log(`Created directory: ${dir}`);
          try {
            fs.chmodSync(dir, 0o755);
            console.log(`Set permissions for directory: ${dir}`);
          } catch (permError) {
            console.error(`Failed to set permissions for directory: ${dir}`, permError);
          }
        }
      } catch (error) {
        console.error(`Failed to create directory: ${dir}`, error);
        // Add specific error handling if needed, e.g., for Azure Web Apps permissions
      }
    }

    // Removed legacy public directory creation logic
    return this;
  }

  /**
   * Get the blog images directory
   * @returns {string} Directory path
   */
  getBlogImagesDir() {
    return this.blogImagesDir;
  }

  /**
   * Get the services images directory
   * @returns {string} Directory path
   */
  getServicesImagesDir() {
    return this.serviceImagesDir;
  }

  /**
   * Get the showcase images directory
   * @returns {string} Directory path
   */
  getShowcaseImagesDir() {
      return this.showcaseImagesDir;
  }

  /**
   * Get the training images directory
   * @returns {string} Directory path
   */
  getTrainingImagesDir() {
      return this.trainingImagesDir;
  }

  /**
   * Get public URL for a blog image
   * @param {string} filename - Image filename
   * @returns {string} Public URL
   */
  getBlogImageUrl(filename) {
    // Blog images are now served directly from public folder
    return `/images/blog/${filename}`;
  }

  /**
   * Get public URL for a service image
   * @param {string} filename - Image filename
   * @returns {string} Public URL
   */
  getServiceImageUrl(filename) {
    // Always use the backend serving endpoint
    return `/backend/images/service-images/file/${filename}`;
  }

  /**
   * Get public URL for a showcase image
   * @param {string} filename - Image filename
   * @returns {string} Public URL
   */
  getShowcaseImageUrl(filename) {
      // Always use the backend serving endpoint
      return `/backend/images/showcase-images/file/${filename}`;
  }

  /**
   * Get public URL for a training image
   * @param {string} filename - Image filename
   * @returns {string} Public URL
   */
  getTrainingImageUrl(filename) {
      // Always use the backend serving endpoint
      return `/backend/images/training-images/file/${filename}`;
  }


  /**
   * Save an uploaded file (moves from temp location)
   * @param {object} file - The uploaded file object (from multer)
   * @param {string} targetDir - Target directory to save to
   * @param {string} finalFilename - The desired final filename
   * @returns {string} Saved file path
   */
  saveUploadedFile(file, targetDir, finalFilename) {
    if (!file || !file.path) throw new Error('No file or file path provided');
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    const finalPath = path.join(targetDir, finalFilename);

    console.log(`Moving uploaded file from ${file.path} to ${finalPath}`);

    if (!fs.existsSync(file.path)) {
      throw new Error(`Uploaded temporary file not found at ${file.path}`);
    }

    // Check if destination exists (unlikely with unique names, but good practice)
    if (fs.existsSync(finalPath)) {
        console.warn(`Destination file already exists: ${finalPath}. Overwriting.`);
        fs.unlinkSync(finalPath);
    }

    try {
        fs.renameSync(file.path, finalPath);
        console.log(`Successfully moved file to ${finalPath}`);
        return finalPath;
    } catch (error) {
        console.error(`Error moving file from ${file.path} to ${finalPath}:`, error);
        // Attempt copy and delete as fallback? Or just throw.
        throw new Error(`Failed to move uploaded file: ${error.message}`);
    }
  }

  /**
   * List all images in a directory
   * @param {string} directory - Directory to list images from
   * @param {Function} urlGenerator - Function to generate URLs for files
   * @returns {Array} List of image objects { id, name, url, thumbnail, uploadedAt, size, metadata? }
   */
  listImages(directory, urlGenerator) {
    if (!fs.existsSync(directory)) {
      console.warn(`Directory not found for listing images: ${directory}`);
      return [];
    }

    return fs.readdirSync(directory)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        // Filter out metadata files
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
      })
      .map(file => {
        const filePath = path.join(directory, file);
        const url = urlGenerator(file);
        let stats = {};
        let metadata = {};
        try {
            stats = fs.statSync(filePath);
            const metadataPath = `${filePath}.json`;
            if (fs.existsSync(metadataPath)) {
                metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
            }
        } catch (e) {
            console.error(`Error getting stats/metadata for ${file}:`, e);
        }
        return {
          id: file,
          name: metadata.originalName || file,
          url,
          thumbnail: url, // Use same URL for thumbnail for now
          uploadedAt: metadata.uploadedAt || stats.birthtime?.toISOString() || new Date(0).toISOString(),
          size: stats.size || 0,
          metadata: metadata
        };
      });
  }

  /**
   * Search for images in a directory by name or metadata
   * @param {string} directory - Directory to search in
   * @param {string} searchTerm - Search term to match filenames or metadata
   * @param {Function} urlGenerator - Function to generate URLs for files
   * @returns {Array} Matching image objects
   */
  searchImages(directory, searchTerm, urlGenerator) {
    if (!fs.existsSync(directory)) {
        console.warn(`Directory not found for searching images: ${directory}`);
        return [];
    }
    if (!searchTerm) return this.listImages(directory, urlGenerator); // Return all if no term

    const term = searchTerm.toLowerCase();

    return fs.readdirSync(directory)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext); // Only image files
      })
      .map(file => {
        const filePath = path.join(directory, file);
        const url = urlGenerator(file);
        let stats = {};
        let metadata = {};
        let match = false;

        // Check filename
        if (file.toLowerCase().includes(term)) {
            match = true;
        }

        // Check metadata
        try {
            stats = fs.statSync(filePath);
            const metadataPath = `${filePath}.json`;
            if (fs.existsSync(metadataPath)) {
                metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
                // Check relevant metadata fields
                if (metadata.originalName?.toLowerCase().includes(term) ||
                    metadata.tags?.some(tag => tag.toLowerCase().includes(term)) ||
                    metadata.description?.toLowerCase().includes(term)) {
                    match = true;
                }
            }
        } catch (e) {
            console.error(`Error getting stats/metadata for search on ${file}:`, e);
        }

        if (match) {
            return {
              id: file,
              name: metadata.originalName || file,
              url,
              thumbnail: url,
              source: 'local',
              uploadedAt: metadata.uploadedAt || stats.birthtime?.toISOString() || new Date(0).toISOString(),
              size: stats.size || 0,
              metadata: metadata
            };
        }
        return null; // Exclude if no match
      })
      .filter(Boolean); // Remove null entries
  }


  /**
   * Delete an image file and its metadata
   * @param {string} directory - Directory containing the file
   * @param {string} filename - Name of the file to delete
   * @returns {boolean} Success status
   */
  deleteImage(directory, filename) {
    const filePath = path.join(directory, filename);
    const metadataPath = `${filePath}.json`;
    let deleted = false;

    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted image file: ${filePath}`);
        deleted = true;
      } catch (error) {
        console.error(`Error deleting image file: ${filePath}`, error);
        return false; // Stop if image deletion fails
      }
    } else {
        console.warn(`Image file not found for deletion: ${filePath}`);
        // Continue to attempt metadata deletion even if image is missing
    }

    // Delete metadata file if it exists
    if (fs.existsSync(metadataPath)) {
        try {
            fs.unlinkSync(metadataPath);
            console.log(`Deleted metadata file: ${metadataPath}`);
        } catch (error) {
            console.error(`Error deleting metadata file: ${metadataPath}`, error);
            // Don't return false here, maybe the image was deleted successfully
        }
    }

    // Removed legacy public directory cleanup logic
    return deleted; // Return true if the main image file was deleted
  }

  /**
   * Save image data (e.g., from external URL or crop)
   * @param {Buffer} imageData - Binary image data
   * @param {string} directory - Directory to save to
   * @param {string} filename - Filename to use
   * @returns {string} Saved file path
   */
  saveImageFromData(imageData, directory, filename) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    const filePath = path.join(directory, filename);
    fs.writeFileSync(filePath, imageData);
    console.log(`Saved image data to: ${filePath}`);

    // No public copy needed here, serving is handled by backend routes

    return filePath;
  }

  /**
   * Get storage status and information
   * @returns {object} Storage information
   */
  getStorageInfo() {
    return {
      isLocalDev: this.isLocalDev,
      baseDir: this.baseDir,
      imagesBaseDir: this.imagesBaseDir,
      blogImagesDir: this.blogImagesDir,
      serviceImagesDir: this.serviceImagesDir,
      showcaseImagesDir: this.showcaseImagesDir,
      trainingImagesDir: this.trainingImagesDir,
      blogDir: this.blogDir,
      servicesDir: this.servicesDir,
      trainingDir: this.trainingDir,
      directoriesExist: {
        base: fs.existsSync(this.baseDir),
        imagesBase: fs.existsSync(this.imagesBaseDir),
        blogImages: fs.existsSync(this.blogImagesDir),
        serviceImages: fs.existsSync(this.serviceImagesDir),
        showcaseImages: fs.existsSync(this.showcaseImagesDir),
        trainingImages: fs.existsSync(this.trainingImagesDir),
        blogContent: fs.existsSync(this.blogDir),
        servicesContent: fs.existsSync(this.servicesDir),
        trainingContent: fs.existsSync(this.trainingDir),
      }
    };
  }

  /**
   * Stream an image file to the response, or send a default if not found
   * @param {string} filePath - Absolute path to the image file
   * @param {object} res - Express response object
   * @param {string|null} defaultImagePath - Optional default image path
   */
  streamImageToResponse(filePath, res, defaultImagePath = null) {
    // Remove the local require statements - we already have these imported at the top
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath).toLowerCase();
      let contentType = 'image/jpeg';
      if (ext === '.png') contentType = 'image/png';
      else if (ext === '.gif') contentType = 'image/gif';
      else if (ext === '.webp') contentType = 'image/webp';
      else if (ext === '.svg') contentType = 'image/svg+xml';
      res.setHeader('Content-Type', contentType);
      fs.createReadStream(filePath).pipe(res);
    } else if (defaultImagePath && fs.existsSync(defaultImagePath)) {
      res.setHeader('Content-Type', 'image/jpeg');
      fs.createReadStream(defaultImagePath).pipe(res);
    } else {
      res.status(404).send('Image not found');
    }
  }

  /**
   * Reset environment settings (e.g., if LOCAL_DEV changes dynamically)
   * This is generally not recommended, better to restart the app.
   * Kept for potential diagnostic use.
   * @param {object} newConfig - New configuration object
   */
  resetEnvironment(newConfig) {
    console.warn("Resetting LocalStorageService environment. This might lead to inconsistencies.");
    // Re-initialize with new config
    this.constructor(newConfig); // Calls constructor again
    return this;
  }

  // --- Content Specific Methods ---

  /**
   * Get the blog content directory
   * @returns {string} Directory path
   */
  getBlogDir() {
      return this.blogDir;
  }

  /**
   * Get the services content directory
   * @returns {string} Directory path
   */
  getServicesDir() {
      return this.servicesDir;
  }

  /**
   * Get the training content directory
   * @returns {string} Directory path
   */
  getTrainingDir() {
      return this.trainingDir;
  }

  /**
   * Read a file's content.
   * @param {string} filePath - The full path to the file.
   * @returns {Promise<string>} The content of the file.
   * @throws {Error} If the file doesn't exist or cannot be read.
   */
  async readFileContent(filePath) {
      try {
          return await fs.promises.readFile(filePath, 'utf-8');
      } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
          if (error.code === 'ENOENT') {
              throw new Error(`File not found: ${filePath}`);
          }
          throw new Error(`Could not read file: ${filePath}`);
      }
  }

  /**
   * Write content to a file.
   * @param {string} filePath - The full path to the file.
   * @param {string} content - The content to write.
   * @returns {Promise<void>}
   * @throws {Error} If the file cannot be written.
   */
  async writeFileContent(filePath, content) {
      try {
          const dir = path.dirname(filePath);
          if (!fs.existsSync(dir)) {
              await fs.promises.mkdir(dir, { recursive: true });
          }
          await fs.promises.writeFile(filePath, content, 'utf-8');
          console.log(`Successfully wrote file: ${filePath}`);
      } catch (error) {
          console.error(`Error writing file ${filePath}:`, error);
          throw new Error(`Could not write file: ${filePath}`);
      }
  }

   /**
   * Read JSON file content.
   * @param {string} filePath - The full path to the JSON file.
   * @returns {Promise<object>} The parsed JSON object.
   * @throws {Error} If the file doesn't exist, cannot be read, or is invalid JSON.
   */
  async readJsonFile(filePath) {
      const content = await this.readFileContent(filePath);
      try {
          return JSON.parse(content);
      } catch (error) {
          console.error(`Error parsing JSON file ${filePath}:`, error);
          throw new Error(`Invalid JSON format in file: ${filePath}`);
      }
  }

  /**
   * Write an object to a JSON file.
   * @param {string} filePath - The full path to the JSON file.
   * @param {object} data - The JavaScript object to write.
   * @param {number} space - Spaces for pretty printing (default: 2).
   * @returns {Promise<void>}
   * @throws {Error} If the object cannot be stringified or the file cannot be written.
   */
  async writeJsonFile(filePath, data, space = 2) {
      try {
          const content = JSON.stringify(data, null, space);
          await this.writeFileContent(filePath, content);
      } catch (error) {
          // Error could be from JSON.stringify or writeFileContent
          console.error(`Error writing JSON file ${filePath}:`, error);
          throw new Error(`Could not write JSON file: ${filePath}`);
      }
  }

  /**
   * Delete a file.
   * @param {string} filePath - The full path to the file.
   * @returns {Promise<boolean>} True if deleted, false if not found.
   * @throws {Error} If deletion fails for other reasons.
   */
  async deleteFile(filePath) {
      try {
          await fs.promises.unlink(filePath);
          console.log(`Deleted file: ${filePath}`);
          return true;
      } catch (error) {
          if (error.code === 'ENOENT') {
              console.warn(`File not found for deletion: ${filePath}`);
              return false;
          }
          console.error(`Error deleting file ${filePath}:`, error);
          throw new Error(`Could not delete file: ${filePath}`);
      }
  }

  /**
   * Check if a file or directory exists.
   * @param {string} itemPath - The path to check.
   * @returns {Promise<boolean>} True if exists, false otherwise.
   */
  async exists(itemPath) {
      try {
          await fs.promises.access(itemPath);
          return true;
      } catch (error) {
          if (error.code === 'ENOENT') {
              return false;
          }
          // Log other access errors but still return false as it's inaccessible
          console.error(`Error accessing path ${itemPath}:`, error);
          return false;
      }
  }

  /**
   * List files in a directory matching an extension.
   * @param {string} directory - The directory path.
   * @param {string} extension - The file extension (e.g., '.md', '.json').
   * @returns {Promise<string[]>} A list of filenames.
   */
  async listFilesByExtension(directory, extension) {
      if (!await this.exists(directory)) {
          console.warn(`Directory not found for listing: ${directory}`);
          return [];
      }
      try {
          const files = await fs.promises.readdir(directory);
          return files.filter(file => path.extname(file).toLowerCase() === extension.toLowerCase());
      } catch (error) {
          console.error(`Error reading directory ${directory}:`, error);
          throw new Error(`Could not list files in directory: ${directory}`);
      }
  }
}
