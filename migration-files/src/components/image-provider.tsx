"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Interface for site image data structure
 */
export interface SiteImage {
  id: string;
  title: string;
  alt: string;
  url: string;
  section: string;
  width?: number;
  height?: number;
  provider?: string;
  providerUser?: string;
  providerUserName?: string;
  attribution?: string;
}

/**
 * Interface for the image context
 */
export interface ImageContextType {
  images: SiteImage[];
  getImageBySection: (section: string, title?: string) => SiteImage | undefined;
  updateImage: (image: SiteImage) => void;
  addImage: (image: SiteImage) => void;
  deleteImage: (id: string) => void;
}

// Create context with initial undefined value
export const ImageContext = createContext<ImageContextType | undefined>(undefined);

// Sample default images
const defaultImages: SiteImage[] = [
  {
    id: '1',
    section: 'hero',
    title: 'Hero Image',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Azure Dashboard showing real-time metrics and analytics'
  },
  // ...other default images
];

/**
 * Image Provider Component
 * Provides image management functionality to the application
 */
export function ImageProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<SiteImage[]>([]);
  
  // Initialize images from localStorage or defaults
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const storedImages = localStorage.getItem('siteImages');
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      } else {
        setImages(defaultImages);
        localStorage.setItem('siteImages', JSON.stringify(defaultImages));
      }
      
      // Sync with other tabs/windows
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === 'siteImages' && event.newValue) {
          setImages(JSON.parse(event.newValue));
        }
      };
      
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      setImages(defaultImages);
    }
  }, []);
  
  /**
   * Get an image by section and optional title
   */
  const getImageBySection = (section: string, title?: string): SiteImage | undefined => {
    if (title) {
      return images.find(img => img.section === section && img.title === title);
    }
    return images.find(img => img.section === section);
  };
  
  /**
   * Update an existing image
   */
  const updateImage = (updatedImage: SiteImage) => {
    const newImages = images.map(img => 
      img.id === updatedImage.id ? updatedImage : img
    );
    
    setImages(newImages);
    if (typeof window !== 'undefined') {
      localStorage.setItem('siteImages', JSON.stringify(newImages));
    }
  };
  
  /**
   * Add a new image
   */
  const addImage = (newImage: SiteImage) => {
    const imageWithId = {
      ...newImage,
      id: newImage.id || `img_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    };
    
    const newImages = [...images, imageWithId];
    setImages(newImages);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('siteImages', JSON.stringify(newImages));
    }
  };
  
  /**
   * Delete an image by ID
   */
  const deleteImage = (id: string) => {
    const filteredImages = images.filter(img => img.id !== id);
    setImages(filteredImages);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('siteImages', JSON.stringify(filteredImages));
    }
  };
  
  const contextValue: ImageContextType = {
    images,
    getImageBySection,
    updateImage,
    addImage,
    deleteImage
  };
  
  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
}

/**
 * Custom hook to access image context
 */
export function useImages() {
  const context = useContext(ImageContext);
  
  if (context === undefined) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  
  return context;
}