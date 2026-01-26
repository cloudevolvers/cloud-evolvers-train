'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

// Define image type
export interface Image {
  id: string;
  name: string;
  url: string;
  thumbnail?: string;
  section?: string;
  alt?: string;
  uploadedAt?: string;
}

export function useImages() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [debugMode, setDebugMode] = useState<boolean>(false);

  // Load images on component mount
  useEffect(() => {
    refreshImages();
  }, []);

  // Function to refresh images
  const refreshImages = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Add cache-busting parameter
      const response = await fetch(`/backend/images?_t=${Date.now()}`);
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setImages(data);
      } else {
        console.warn('Unexpected response format from images API:', data);
        setImages([]);
      }
    } catch (err) {
      console.error('Error fetching images:', err);
      setError('Failed to load images. Please try again.');
      // Don't clear images on error to preserve any existing data
    } finally {
      setIsLoading(false);
    }
  };

  // Function to upload an image
  const uploadImage = async (file: File, metadata: any = {}) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      // Add metadata as JSON string
      if (metadata) {
        formData.append('metadata', JSON.stringify(metadata));
      }
      
      // Add debug flag if in debug mode
      if (debugMode) {
        formData.append('debug', 'true');
      }
      
      const response = await fetch('/backend/images/upload', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error(`Failed to upload image: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        await refreshImages(); // Refresh images after successful upload
      }
      
      return data;
    } catch (err: any) {
      console.error('Error uploading image:', err);
      const errorMessage = err.message || 'Failed to upload image';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsLoading(false);
    }
  };
  
  // Specific function for blog image uploads
  const uploadBlogImage = async (file: File, metadata: any = {}) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      // Add metadata as JSON string
      if (metadata) {
        formData.append('metadata', JSON.stringify(metadata));
      }
      
      // Add debug flag if in debug mode
      if (debugMode) {
        formData.append('debug', 'true');
      }
      
      // Use the specific blog image endpoint
      const response = await fetch('/backend/images/blog', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error(`Failed to upload blog image: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        await refreshImages(); // Refresh images after successful upload
        
        return {
          success: true,
          url: data.url,
          id: data.id,
          name: data.name || metadata.name,
          alt: metadata.alt,
          debugInfo: debugMode ? data : undefined
        };
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (err: any) {
      console.error('Error uploading blog image:', err);
      const errorMessage = err.message || 'Failed to upload image';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Function to delete an image
  const deleteImage = async (id: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/backend/images/delete?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete image: ${response.status}`);
      }
      
      // Remove the deleted image from state
      setImages(prevImages => prevImages.filter(image => image.id !== id));
      return true;
    } catch (err: any) {
      console.error('Error deleting image:', err);
      setError(err.message || 'Failed to delete image');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Import an image from URL
  const importImageFromUrl = async (url: string, name: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/backend/images/blog-images/external', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          imageUrl: url,
          name: name || 'External image'
        })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to import image: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        await refreshImages();
        return data;
      } else {
        throw new Error(data.error || 'Import failed');
      }
    } catch (err: any) {
      console.error('Error importing image:', err);
      const errorMessage = err.message || 'Failed to import image';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    images,
    isLoading,
    error,
    refreshImages,
    uploadImage,
    uploadBlogImage,
    deleteImage,
    importImageFromUrl,
    setDebugMode: (enabled: boolean) => setDebugMode(enabled),
  };
}
