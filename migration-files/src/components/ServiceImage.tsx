'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Service } from '@/types/service';

interface ServiceImageProps {
  service: Service;
  className?: string;
  priority?: boolean;
}

// Helper function to normalize image paths
function normalizeImagePath(imagePath: string | undefined): string {
  if (!imagePath) {
    return '/images/services/default-service-image.jpg';
  }
  
  // If it's already a complete URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it's already a proper path starting with /, return as is
  if (imagePath.startsWith('/')) {
    return imagePath;
  }
  
  // Otherwise, assume it's a relative path and add the services directory prefix
  return `/images/services/${imagePath}`;
}

export default function ServiceImageWithFallback({ service, className = "", priority = false }: ServiceImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    // Get the image path from the service, or use a default
    const imagePath = service.image || '/images/services/default-service-image.jpg';
    
    // Normalize the path
    const normalizedPath = normalizeImagePath(imagePath);
    return normalizedPath;
  });
  
  const [isError, setIsError] = useState(false);
  
  // Optionally fetch from backend if we have a service ID but no image
  useEffect(() => {
    const fetchImageIfNeeded = async () => {
      if (!service.image && service.id) {
        try {
          const response = await fetch(`/api/images/service-images/${service.id}`);
          if (response.ok) {
            const data = await response.json();
            if (data.success && data.imageUrl) {
              setImgSrc(data.imageUrl);
            }
          }
        } catch (error) {
          console.error("Failed to fetch service image:", error);
        }
      }
    };
    
    fetchImageIfNeeded();
  }, [service.id, service.image]);

  // Handle image loading errors
  const handleError = () => {
    console.error(`Error loading image: ${imgSrc} for service "${service.name || service.title || 'Unknown service'}"`);
    
    if (!isError) {
      setIsError(true);
      setImgSrc('/images/services/default-service-image.jpg');
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={imgSrc}
        alt={service.imageAlt || service.name || service.title || "Service image"}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-cover"
        onError={handleError}
      />
    </div>
  );
}
