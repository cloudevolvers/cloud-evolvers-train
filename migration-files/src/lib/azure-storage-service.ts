import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

class AzureStorageService {
  private connectionString: string;
  private blobServiceClient: BlobServiceClient;

  constructor() {
    this.connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING || '';
    
    if (!this.connectionString) {
      console.warn('Azure Storage connection string not provided');
    }
    
    this.blobServiceClient = BlobServiceClient.fromConnectionString(this.connectionString);
  }

  private getContainerClient(containerName: string): ContainerClient {
    return this.blobServiceClient.getContainerClient(containerName);
  }

  async listBlobs(containerName: string): Promise<string[]> {
    try {
      const containerClient = this.getContainerClient(containerName);
      const blobs: string[] = [];
      
      for await (const blob of containerClient.listBlobsFlat()) {
        blobs.push(blob.name);
      }
      
      return blobs;
    } catch (error) {
      console.error('Error listing blobs:', error);
      return [];
    }
  }

  async downloadBlob(containerName: string, blobName: string): Promise<string | null> {
    try {
      const containerClient = this.getContainerClient(containerName);
      const blobClient = containerClient.getBlobClient(blobName);
      
      const downloadResponse = await blobClient.download();
      const downloaded = await this.streamToText(downloadResponse.readableStreamBody);
      
      return downloaded;
    } catch (error) {
      console.error(`Error downloading blob ${blobName}:`, error);
      return null;
    }
  }

  async uploadBlob(containerName: string, blobName: string, data: string, options?: {
    contentType?: string;
  }): Promise<boolean> {
    try {
      const containerClient = this.getContainerClient(containerName);
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      
      await blockBlobClient.upload(data, data.length, {
        blobHTTPHeaders: {
          blobContentType: options?.contentType || 'application/octet-stream'
        }
      });
      
      return true;
    } catch (error) {
      console.error(`Error uploading blob ${blobName}:`, error);
      return false;
    }
  }

  async deleteBlob(containerName: string, blobName: string): Promise<boolean> {
    try {
      const containerClient = this.getContainerClient(containerName);
      const blobClient = containerClient.getBlobClient(blobName);
      
      await blobClient.delete();
      
      return true;
    } catch (error) {
      console.error(`Error deleting blob ${blobName}:`, error);
      return false;
    }
  }

  // Helper function to convert stream to text
  private async streamToText(readable: NodeJS.ReadableStream | undefined): Promise<string> {
    if (!readable) {
      return '';
    }
    
    const chunks: Buffer[] = [];
    for await (const chunk of readable) {
      chunks.push(Buffer.from(chunk));
    }
    
    return Buffer.concat(chunks).toString('utf-8');
  }
}

// Create a singleton instance
const azureStorage = new AzureStorageService();

export default azureStorage;
