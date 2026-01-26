'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import axios from 'axios';

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

// Define context types
interface ImageContextProps {
  images: Image[];
  isLoading: boolean;
  error: string | null;
  refreshImages: () => Promise<void>;
  uploadImage: (file: File, metadata?: any) => Promise<void>;
  deleteImage: (id: string) => Promise<void>;
  uploadBlogImage: (file: File, metadata: any) => Promise<{ success: boolean; url?: string; error?: string }>;
}

// Create context with default values
const ImageContext = createContext<ImageContextProps | undefined>(undefined);

// Create provider component
export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to refresh images
  const refreshImages = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/images/blog-images', {
        headers: { 'Cache-Control': 'no-cache' }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setImages(data.images);
      } else {
        setError(data.message || 'Failed to load images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to load images. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to upload an image
  const uploadImage = useCallback(async (file: File, metadata: any = {}) => {
    const formData = new FormData();
    formData.append('image', file);
    
    // Add metadata
    if (metadata) {
      formData.append('metadata', JSON.stringify(metadata));
    }
    
    const response = await fetch('/api/images', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to upload image');
    }
    
    await refreshImages();
  }, [refreshImages]);

  // Function to delete an image
  const deleteImage = useCallback(async (id: string) => {
    const response = await fetch(`/api/images/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to delete image');
    }
    
    await refreshImages();
  }, [refreshImages]);

  const uploadBlogImage = async (file: File, metadata: any) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('name', metadata.name || file.name);
      formData.append('alt', metadata.alt || '');
      
      if (metadata.section) {
        formData.append('section', metadata.section);
      }
      
      const response = await fetch('/api/images/blog-images', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Refresh images after upload
        refreshImages();
        return { success: true, url: data.url };
      } else {
        return { success: false, error: data.message || 'Failed to upload image' };
      }
    } catch (error) {
      console.error('Error uploading blog image:', error);
      return { success: false, error: 'Error uploading image' };
    }
  };

  // Provide context to children
  return (
    <ImageContext.Provider value={{
      images,
      isLoading,
      error,
      uploadImage,
      deleteImage,
      refreshImages,
      uploadBlogImage
    }}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the image context
export const useImages = () => {
  const context = useContext(ImageContext);
  
  if (context === undefined) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  
  return context;
};
