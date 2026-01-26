'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { 
  FaServer, 
  FaDollarSign, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaCogs, 
  FaUsers, 
  FaCloud, 
  FaCode,
  FaDatabase,
  FaRocket
} from 'react-icons/fa';

interface BlogImageProps {
  post: BlogPost;
  className?: string;
  priority?: boolean;
}

// Helper function to generate category-based icon image
const generateCategoryIconImage = (category: string, title: string): string => {
  // Filter out SVG extensions to avoid 404s
  if (title.toLowerCase().includes('.svg')) {
    return '';
  }

  // Category to icon mapping
  const categoryIcons: { [key: string]: any } = {
    'Infrastructure': FaServer,
    'Cost Management': FaDollarSign,
    'Networking': FaNetworkWired,
    'Security': FaShieldAlt,
    'DevOps': FaCogs,
    'Identity': FaUsers,
    'Cloud Engineering': FaCloud,
    'Development': FaCode,
    'Database': FaDatabase,
    'Performance': FaRocket,
  };

  // Find matching icon
  const IconComponent = categoryIcons[category] || FaCloud;
  
  // Generate SVG with Cloud Evolvers branding
  const iconSvg = `
    <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#0d9488;stop-opacity:0.2" />
        </linearGradient>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#10b981" />
          <stop offset="100%" style="stop-color:#0d9488" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#bgGradient)" />
      <g transform="translate(200, 100)">
        <circle r="30" fill="url(#iconGradient)" opacity="0.2" />
        <text x="0" y="0" text-anchor="middle" dominant-baseline="central" 
              font-family="Arial, sans-serif" font-size="24" fill="url(#iconGradient)">
          ${category === 'Infrastructure' ? '🖥️' : 
            category === 'Cost Management' ? '💰' :
            category === 'Networking' ? '🌐' :
            category === 'Security' ? '🛡️' :
            category === 'DevOps' ? '⚙️' :
            category === 'Identity' ? '👥' :
            category === 'Database' ? '🗄️' :
            category === 'Performance' ? '🚀' : '☁️'}
        </text>
      </g>
      <text x="200" y="160" text-anchor="middle" 
            font-family="Arial, sans-serif" font-size="14" fill="#10b981" font-weight="bold">
        ${category}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(iconSvg)}`;
};

// Helper function to normalize image paths
function normalizeImagePath(imagePath: string | undefined): string {
  if (!imagePath) {
    return '/images/blog/default-blog-image.jpg'; // Use existing default blog image
  }
  
  // If it's already a complete URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it's already a proper path starting with /, return as is
  if (imagePath.startsWith('/')) {
    return imagePath;
  }
  
  // Otherwise, assume it's a relative path and add the blog directory prefix
  return `/images/blog/${imagePath}`;
}

export default function BlogImageWithFallback({ post, className = "", priority = false }: BlogImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    // Try post image first, then category-based icon as fallback
    if (post.image) {
      const normalizedPath = normalizeImagePath(post.image);
      return normalizedPath;
    }
    // Generate category-based icon image
    return generateCategoryIconImage(post.category || 'General', post.title);
  });
  
  const [isError, setIsError] = useState(false);
  const [hasTriedFallbacks, setHasTriedFallbacks] = useState(false);

  const handleError = () => {
    console.error(`Error loading image: ${imgSrc} for post "${post.title}"`);
    
    // Avoid infinite error loops
    if (hasTriedFallbacks) {
      console.log('Using final fallback - category icon');
      return;
    }
    
    setIsError(true);
    setHasTriedFallbacks(true);
    
    // Fallback to category-based icon
    console.log('Image error, using category-based icon fallback');
    const categoryIcon = generateCategoryIconImage(post.category || 'General', post.title);
    setImgSrc(categoryIcon);
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={imgSrc}
        alt={post.imageAlt || post.title || "Blog post image"}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-cover"
        onError={handleError}
      />
    </div>
  );
}
