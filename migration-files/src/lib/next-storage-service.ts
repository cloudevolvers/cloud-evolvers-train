import fs from 'fs';
import path from 'path';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

export interface StorageConfig {
  isLocalDev: boolean;
  localBasePath: string;
  azureBlobConnectionString?: string;
  azureBlobContainerName?: string;
}

export class NextStorageService {
  private config: StorageConfig;
  private blobContainerClient?: ContainerClient;
  private initializationPromise?: Promise<void>;
  private isInitialized = false;

  constructor() {
    const hasAzureStorage = process.env.AZURE_STORAGE_CONNECTION_STRING && process.env.BLOB_STORAGE_NAME;
    
    this.config = {
      isLocalDev: false, // Always use Azure storage
      localBasePath: 'public', // Fallback directory if Azure fails
      azureBlobConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
      azureBlobContainerName: process.env.BLOB_STORAGE_NAME || 'images'
    };

    console.log(`Storage config: Always using Azure Blob Storage, hasAzureStorage=${!!hasAzureStorage}`);

    // Always ensure local directories exist (for fallback)
    if (typeof process !== 'undefined') {
      this.ensureLocalDirectories();
    }
  }

  private async initializeStorage() {
    // If we're in production and have Azure Blob Storage configuration, initialize it
    if (!this.config.isLocalDev && this.config.azureBlobConnectionString && this.config.azureBlobContainerName) {
      try {
        const blobServiceClient = BlobServiceClient.fromConnectionString(
          this.config.azureBlobConnectionString
        );
        
        this.blobContainerClient = blobServiceClient.getContainerClient(
          this.config.azureBlobContainerName
        );

        // Create container if it doesn't exist
        await this.blobContainerClient.createIfNotExists({
          access: 'blob' // Allow public read access to blobs
        });

        console.log(`✅ Azure Blob Storage initialized: ${this.config.azureBlobContainerName}`);
      } catch (error) {
        console.error('Failed to initialize Azure Blob Storage:', error);
        // Fall back to local storage
        console.log('Falling back to local storage');
      }
    }

    // Ensure local directories exist (as fallback or primary storage)
    this.ensureLocalDirectories();
  }

  private ensureLocalDirectories() {
    const directories = [
      this.getBlogImagesDir(),
      this.getShowcaseImagesDir(),
      this.getServicesImagesDir(),
      this.getTrainingImagesDir(),
      this.getIconsDir()
    ];

    directories.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
      }
    });
  }

  // Wait for initialization to complete
  async ensureInitialized(): Promise<void> {
    if (this.isInitialized) {
      return;
    }
    
    if (!this.initializationPromise) {
      this.initializationPromise = this.initializeStorage();
    }
    
    await this.initializationPromise;
    this.isInitialized = true;
  }

  // Directory getters
  getBlogImagesDir(): string {
    return path.join(process.cwd(), this.config.localBasePath, 'blog', 'images');
  }

  getShowcaseImagesDir(): string {
    return path.join(process.cwd(), this.config.localBasePath, 'showcase');
  }

  getServicesImagesDir(): string {
    return path.join(process.cwd(), this.config.localBasePath, 'services');
  }

  getTrainingImagesDir(): string {
    return path.join(process.cwd(), this.config.localBasePath, 'images', 'training');
  }

  getIconsDir(): string {
    return path.join(process.cwd(), this.config.localBasePath, 'icons');
  }

  // File operations
  async saveFile(
    filePath: string, 
    buffer: Buffer, 
    category: 'blog' | 'showcase' | 'services' | 'training' | 'icons' = 'blog'
  ): Promise<{ success: boolean; url: string; path?: string }> {
    await this.ensureInitialized();
    
    const fileName = path.basename(filePath);
    
    // Use Azure Blob Storage in production (if configured and not local dev)
    if (!this.config.isLocalDev && this.blobContainerClient) {
      try {
        const blobPath = `${category}/${fileName}`;
        const blockBlobClient = this.blobContainerClient.getBlockBlobClient(blobPath);
        
        // Set content type based on file extension
        const ext = path.extname(fileName).toLowerCase();
        let contentType = 'application/octet-stream';
        switch (ext) {
          case '.jpg':
          case '.jpeg':
            contentType = 'image/jpeg';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.gif':
            contentType = 'image/gif';
            break;
          case '.webp':
            contentType = 'image/webp';
            break;
          case '.svg':
            contentType = 'image/svg+xml';
            break;
        }
        
        await blockBlobClient.upload(buffer, buffer.length, {
          blobHTTPHeaders: { blobContentType: contentType }
        });
        
        const url = blockBlobClient.url;
        console.log(`✅ Saved to Azure Blob Storage: ${blobPath}`);
        return { success: true, url };
      } catch (error) {
        console.error('Failed to save to Azure Blob Storage, falling back to local:', error);
      }
    }

    // Use local storage (development or fallback)
    let localDir: string;
    switch (category) {
      case 'showcase':
        localDir = this.getShowcaseImagesDir();
        break;
      case 'services':
        localDir = this.getServicesImagesDir();
        break;
      case 'training':
        localDir = this.getTrainingImagesDir();
        break;
      case 'icons':
        localDir = this.getIconsDir();
        break;
      default:
        localDir = this.getBlogImagesDir();
    }

    const localPath = path.join(localDir, fileName);
    fs.writeFileSync(localPath, buffer);

    // Generate URL based on category - serve directly from public folder
    let publicUrl: string;
    switch (category) {
      case 'blog':
        publicUrl = `/blog/images/${fileName}`;
        break;
      case 'showcase':
        publicUrl = `/showcase/${fileName}`;
        break;
      case 'services':
        publicUrl = `/services/${fileName}`;
        break;
      case 'icons':
        publicUrl = `/icons/${fileName}`;
        break;
      default:
        publicUrl = `/blog/images/${fileName}`;
    }

    return { success: true, url: publicUrl, path: localPath };
  }

  async getFile(
    fileName: string, 
    category: 'blog' | 'showcase' | 'services' | 'icons' = 'blog'
  ): Promise<{ buffer: Buffer; contentType: string } | null> {
    await this.ensureInitialized();
    
    // Try Azure Blob Storage first if configured
    if (this.blobContainerClient) {
      try {
        const blobPath = `${category}/${fileName}`;
        const blockBlobClient = this.blobContainerClient.getBlockBlobClient(blobPath);
        
        const downloadResponse = await blockBlobClient.download();
        if (downloadResponse.readableStreamBody) {
          const chunks: Buffer[] = [];
          for await (const chunk of downloadResponse.readableStreamBody) {
            chunks.push(Buffer.from(chunk));
          }
          const buffer = Buffer.concat(chunks);
          const contentType = this.getContentType(fileName);
          return { buffer, contentType };
        }
      } catch (error) {
        console.error('Failed to get from Azure Blob Storage, trying local:', error);
      }
    }

    // Fall back to local storage
    let localDir: string;
    switch (category) {
      case 'showcase':
        localDir = this.getShowcaseImagesDir();
        break;
      case 'services':
        localDir = this.getServicesImagesDir();
        break;
      case 'icons':
        localDir = this.getIconsDir();
        break;
      default:
        localDir = this.getBlogImagesDir();
    }

    const localPath = path.join(localDir, fileName);
    
    if (fs.existsSync(localPath)) {
      const buffer = fs.readFileSync(localPath);
      const contentType = this.getContentType(fileName);
      return { buffer, contentType };
    }

    return null;
  }

  async deleteFile(
    fileName: string, 
    category: 'blog' | 'showcase' | 'services' | 'icons' = 'blog'
  ): Promise<boolean> {
    await this.ensureInitialized();
    
    let success = false;

    // Try to delete from Azure Blob Storage if configured
    if (this.blobContainerClient) {
      try {
        const blobPath = `${category}/${fileName}`;
        const blockBlobClient = this.blobContainerClient.getBlockBlobClient(blobPath);
        await blockBlobClient.deleteIfExists();
        success = true;
      } catch (error) {
        console.error('Failed to delete from Azure Blob Storage:', error);
      }
    }

    // Also delete from local storage if it exists
    let localDir: string;
    switch (category) {
      case 'showcase':
        localDir = this.getShowcaseImagesDir();
        break;
      case 'services':
        localDir = this.getServicesImagesDir();
        break;
      case 'icons':
        localDir = this.getIconsDir();
        break;
      default:
        localDir = this.getBlogImagesDir();
    }

    const localPath = path.join(localDir, fileName);
    
    if (fs.existsSync(localPath)) {
      try {
        fs.unlinkSync(localPath);
        success = true;
      } catch (error) {
        console.error('Failed to delete local file:', error);
      }
    }

    return success;
  }

  async listFiles(category: 'blog' | 'showcase' | 'services' | 'icons' = 'blog'): Promise<string[]> {
    await this.ensureInitialized();
    
    const files: string[] = [];

    // Try Azure Blob Storage first if configured
    if (this.blobContainerClient) {
      try {
        const prefix = `${category}/`;
        const listBlobsResponse = this.blobContainerClient.listBlobsFlat({ prefix });
        
        for await (const blob of listBlobsResponse) {
          // Remove the category prefix from the blob name
          const fileName = blob.name.substring(prefix.length);
          if (fileName) {
            files.push(fileName);
          }
        }
        
        return files;
      } catch (error) {
        console.error('Failed to list from Azure Blob Storage, falling back to local:', error);
      }
    }

    // Fall back to local storage
    let localDir: string;
    switch (category) {
      case 'showcase':
        localDir = this.getShowcaseImagesDir();
        break;
      case 'services':
        localDir = this.getServicesImagesDir();
        break;
      case 'icons':
        localDir = this.getIconsDir();
        break;
      default:
        localDir = this.getBlogImagesDir();
    }

    if (fs.existsSync(localDir)) {
      const localFiles = fs.readdirSync(localDir).filter(file => {
        const filePath = path.join(localDir, file);
        return fs.statSync(filePath).isFile();
      });
      files.push(...localFiles);
    }

    return files;
  }

  private getContentType(fileName: string): string {
    const ext = path.extname(fileName).toLowerCase();
    const contentTypes: { [key: string]: string } = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    };
    return contentTypes[ext] || 'application/octet-stream';
  }

  getStorageInfo() {
    return {
      isLocalDev: this.config.isLocalDev,
      localBasePath: this.config.localBasePath,
      azureBlobEnabled: !!this.blobContainerClient,
      azureBlobContainerName: this.config.azureBlobContainerName,
      directories: {
        blog: this.getBlogImagesDir(),
        showcase: this.getShowcaseImagesDir(),
        services: this.getServicesImagesDir(),
        icons: this.getIconsDir()
      }
    };
  }
}

// Singleton instance
let storageInstance: NextStorageService | null = null;

export function getStorageService(): NextStorageService {
  if (!storageInstance) {
    storageInstance = new NextStorageService();
  }
  return storageInstance;
}
