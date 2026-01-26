import { toast } from 'sonner';
import type { ChangeEvent, DragEvent, ClipboardEvent } from 'react'; // Import ClipboardEvent from 'react'

export interface ImageUploadOptions {
  file: File;
  metadata?: {
    name?: string;
    alt?: string;
    section?: string;
    tags?: string[];
    [key: string]: any;
  };
  serviceId?: string; // For service-specific uploads
  blogId?: string;    // For blog-specific uploads
  debug?: boolean;    // Enable detailed logging
}

export interface ImageUploadResult {
  success: boolean;
  url: string;
  id: string;
  name: string;
  alt?: string;
  section?: string;
  source?: string; // Add source property
  error?: string;
  debugInfo?: any;
}

export interface PastedImageUploadOptions {
  dataUrl: string;
  name: string;
  metadata?: {
    alt?: string;
    section?: string;
    [key: string]: any;
  };
  debug?: boolean;
  authToken?: string; // Add authToken property
}

export interface ImageDeleteOptions {
  id: string;
  section?: 'blog' | 'service' | 'general';
  debug?: boolean;
}

export interface ImageProviderStatus {
  unsplash: {
    status: 'operational' | 'degraded' | 'error' | 'unknown';
    message: string;
  };
  pexels: {
    status: 'operational' | 'degraded' | 'error' | 'unknown';
    message: string;
  };
  local: {
    status: 'operational' | 'degraded' | 'error' | 'unknown';
    message: string;
  };
}

// Helper to get base URL - consolidated function
function getBaseUrl() {
  if (typeof window === 'undefined') {
    // Server-side: use absolute URL
    return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  } else {
    // Client-side: construct absolute URL using window.location
    return `${window.location.protocol}//${window.location.host}`;
  }
}

/**
 * Image Upload Service - Enhanced for Azure Web Apps
 * 
 * This service handles image uploading from various sources including:
 * - Clipboard pastes
 * - File uploads
 * - Image URLs
 * 
 * Special handling is included for Azure Web Apps environment
 */

interface UploadPastedImageParams {
  dataUrl: string;
  name: string;
  metadata: {
    section: string;
    [key: string]: string;
  };
}

interface UploadResponse {
  success: boolean;
  url?: string;
  error?: string;
}

class ImageUploadService {
  private backendUrl: string = '/backend';
  private debugMode: boolean = process.env.NODE_ENV === 'development';
  
  /**
   * Set debug mode for the service
   */
  public setDebugMode(enabled: boolean): void {
    this.debugMode = enabled;
    this.log('Debug mode set to:', enabled);
  }
  
  /**
   * Log debug information if debug mode is enabled
   */
  private log(...args: any[]): void {
    if (this.debugMode) {
      console.log('[ImageUploadService]', ...args);
    }
  }
  
  /**
   * Upload an image file with metadata
   */
  public async uploadImage(options: ImageUploadOptions): Promise<ImageUploadResult> {
    const { file, metadata = {}, debug = false } = options;
    
    // Enable debug for this call if requested
    const tempDebug = this.debugMode || debug;
    
    try {
      if (tempDebug) {
        this.log('Uploading image:', {
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          metadata
        });
      }
      
      // Create form data for upload
      const formData = new FormData();
      formData.append('image', file);
      
      // Add metadata if provided
      if (Object.keys(metadata).length > 0) {
        formData.append('metadata', JSON.stringify(metadata));
      }
      
      // Determine the endpoint based on section
      const section = metadata?.section?.toLowerCase();
      let endpoint = '/backend/images/upload';
      
      if (section === 'showcase') {
        endpoint = '/backend/images/showcase-images/upload';
      } else if (section === 'services' || section === 'service') {
        endpoint = '/backend/images/service-images/upload';
      } else if (section === 'training') {
        endpoint = '/backend/images/training-images/upload';
      }
      
      if (tempDebug) {
        this.log(`Using endpoint: ${endpoint} for section: ${section || 'blog'}`);
      }
      
      // Make the upload request
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed with status ${response.status}: ${errorText}`);
      }
      
      const result = await response.json();
      
      if (tempDebug) {
        this.log('Upload response:', result);
      }
      
      if (!result.success && !result.url) {
        throw new Error(result.error || 'Unknown error occurred during upload');
      }
      
      return {
        success: true,
        url: result.url,
        id: result.id,
        name: result.name || metadata.name || file.name,
        alt: metadata.alt || '',
        section: metadata.section || '',
        source: 'local', // Add source property
        debugInfo: tempDebug ? result : undefined
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown upload error';
      
      if (tempDebug) {
        console.error('[ImageUploadService] Upload error:', error);
      }
      
      return {
        success: false,
        url: '',
        id: '',
        name: '',
        error: errorMessage, // Assign errorMessage to the error property
        debugInfo: tempDebug ? { error, file: file.name } : undefined
      };
    }
  }
  
  /**
   * Upload a pasted image from a data URL
   * Enhanced with better support for Azure Web Apps
   */
  public async uploadPastedImage(options: PastedImageUploadOptions): Promise<ImageUploadResult> {
    const { dataUrl, name, metadata = {}, debug = false, authToken } = options;
    
    // --- ADD LOGGING ---
    this.log('uploadPastedImage called. Received authToken:', authToken ? `Token present (length: ${authToken.length})` : 'Token NOT present');
    // --- END LOGGING ---

    // Enable debug for this call if requested
    const tempDebug = this.debugMode || debug;
    
    try {
      if (tempDebug) {
        this.log('Uploading pasted image:', {
          name,
          dataUrlLength: dataUrl.length,
          metadata
        });
      }
      
      // Create a sanitized filename from the provided name
      const sanitizedName = this.sanitizeFileName(name);
      const timestamp = new Date().getTime();
      const uniqueFileName = `${sanitizedName}-${timestamp}`;
      
      // Enhanced version that works with showcase section properly
      if (metadata?.section === 'showcase') {
        // Extract the base64 data and MIME type
        const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        
        if (!matches || matches.length !== 3) {
          throw new Error('Invalid image data');
        }
        
        const mimeType = matches[1];
        const base64Data = matches[2];
        
        // Prepare the payload for showcase specific endpoint
        const payload = {
          image: base64Data,
          name: uniqueFileName,
          mimeType,
          metadata
        };
        
        // Prepare headers, including Authorization if token is provided
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
        };
        if (authToken) {
          headers['Authorization'] = `Bearer ${authToken}`;
          // --- ADD LOGGING ---
          this.log('Authorization header added.');
          // --- END LOGGING ---
        } else {
          // --- ADD LOGGING ---
          this.log('No authToken provided, Authorization header NOT added.');
          // --- END LOGGING ---
        }

        // Send to backend using the showcase specific endpoint
        const baseUrl = getBaseUrl();
        const url = new URL('/backend/images/showcase-images/paste', baseUrl);
        
        // --- ADD LOGGING ---
        this.log('Making fetch request to /backend/images/showcase-images/paste with headers:', headers);
        // --- END LOGGING ---
        
        const response = await fetch(url.toString(), {
          method: 'POST',
          headers: headers, // Use the prepared headers
          body: JSON.stringify(payload),
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server error: ${response.status} - ${errorText}`);
        }
        
        const result = await response.json();
        
        // Make sure we get a properly formatted URL that works in Azure Web Apps
        const imageUrl = result.url.startsWith('/') ? result.url : `/${result.url}`;
        
        return {
          success: true,
          url: imageUrl,
          id: result.id || '',
          name: uniqueFileName,
          section: 'showcase',
          debugInfo: tempDebug ? result : undefined
        };
      }
      
      // Default flow for non-showcase images
      // Convert data URL to File object
      const blob = await fetch(dataUrl).then(res => res.blob());
      const file = new File([blob], `${uniqueFileName}.png`, { type: 'image/png' });
      
      // Use the regular upload function
      return this.uploadImage({
        file,
        metadata: {
          name: uniqueFileName,
          ...metadata
        },
        debug: tempDebug
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown paste upload error';
      
      if (tempDebug) {
        console.error('[ImageUploadService] Paste upload error:', error);
      }
      
      return {
        success: false,
        url: '',
        id: '',
        name: '',
        error: errorMessage,
        debugInfo: tempDebug ? { error } : undefined
      };
    }
  }
  
  /**
   * Delete an image by ID
   */
  public async deleteImage(options: ImageDeleteOptions): Promise<boolean> {
    const { id, section = 'general', debug = false } = options;
    
    // Enable debug for this call if requested
    const tempDebug = this.debugMode || debug;
    
    try {
      if (tempDebug) {
        this.log('Deleting image:', { id, section });
      }
      
      // Determine the correct endpoint based on section
      let endpoint = `${this.backendUrl}/images/delete?id=${encodeURIComponent(id)}`;
      
      if (section === 'service') {
        endpoint = `${this.backendUrl}/images/service-images/delete?id=${encodeURIComponent(id)}`;
      }
      
      if (tempDebug) {
        this.log(`Using delete endpoint: ${endpoint}`);
      }
      
      const response = await fetch(endpoint, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Delete failed with status ${response.status}: ${errorText}`);
      }
      
      const result = await response.json();
      
      if (tempDebug) {
        this.log('Delete response:', result);
      }
      
      return result.success === true;
    } catch (error) {
      if (tempDebug) {
        console.error('[ImageUploadService] Delete error:', error);
      }
      
      return false;
    }
  }
  
  /**
   * Check status of image providers
   */
  public async checkProvidersStatus(): Promise<ImageProviderStatus> {
    try {
      this.log('Checking image providers status');
      
      const response = await fetch(`${this.backendUrl}/images/providers/status`);
      
      if (!response.ok) {
        throw new Error(`Provider status check failed: ${response.statusText}`);
      }
      
      const result = await response.json();
      
      this.log('Provider status response:', result);
      
      return {
        unsplash: result.unsplash || { status: 'unknown', message: 'No data' },
        pexels: result.pexels || { status: 'unknown', message: 'No data' },
        local: result.local || { status: 'unknown', message: 'No data' }
      };
    } catch (error) {
      console.error('[ImageUploadService] Provider status check error:', error);
      
      return {
        unsplash: { status: 'error', message: 'Connection error' },
        pexels: { status: 'error', message: 'Connection error' },
        local: { status: 'error', message: 'Connection error' }
      };
    }
  }
  
  /**
   * Handle pasting an image from clipboard
   * Enhanced with multiple fallbacks for Azure Web Apps
   */
  public handleImagePaste(event: ClipboardEvent): Promise<string | null> {
    return new Promise((resolve) => {
      try {
        // Prevent default behavior to prevent unwanted text insertions
        event.preventDefault();
        
        const items = event.clipboardData?.items;
        
        if (!items) {
          this.log('No items in clipboard data');
          resolve(null);
          return;
        }
        
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            
            if (!blob) {
              this.log('No blob data from clipboard item');
              continue;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => {
              const result = e.target?.result as string;
              this.log('Image pasted from clipboard, data URL length:', result?.length);
              resolve(result);
            };
            reader.onerror = () => {
              console.error('[ImageUploadService] Error reading clipboard image');
              resolve(null);
            };
            reader.readAsDataURL(blob);
            return;
          }
        }
        
        this.log('No image found in clipboard');
        resolve(null);
      } catch (error) {
        console.error('[ImageUploadService] Paste handling error:', error);
        toast.error('Error', {
          description: 'Failed to process pasted image'
        });
        resolve(null);
      }
    });
  }
  
  /**
   * Diagnostic function to check storage configuration
   */
  public async checkStorageConfig(): Promise<any> {
    try {
      this.log('Checking storage configuration');
      
      const response = await fetch(`${this.backendUrl}/images/storage-info`);
      
      if (!response.ok) {
        return {
          success: false,
          error: `Failed with status: ${response.status}`
        };
      }
      
      const result = await response.json();
      
      this.log('Storage info:', result);
      
      return {
        success: true,
        ...result
      };
    } catch (error) {
      console.error('[ImageUploadService] Storage config check error:', error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        isLocal: null
      };
    }
  }
  
  /**
   * Sanitizes a filename to prevent security issues
   */
  private sanitizeFileName(filename: string): string {
    // Replace special characters and spaces
    return filename
      .replace(/[^a-z0-9]/gi, '-')
      .replace(/-+/g, '-')
      .toLowerCase();
  }
}

// Export singleton instance
export const imageUploadService = new ImageUploadService();

// Also export the class for testing or custom instances
export default ImageUploadService;
