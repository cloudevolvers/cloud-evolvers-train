'use client';

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Search, ExternalLink, RefreshCw, ImageIcon, Check, X } from "lucide-react";
import Image from 'next/image';
import { toast } from 'sonner';

interface ProviderImage {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  source: string;
  sourceUrl?: string;
  authorName?: string;
  authorUrl?: string;
  width?: number;
  height?: number;
}

interface ProviderStatus {
  status: string;
  message: string;
  keyPartial?: string;
}

interface ProviderImageSelectorProps {
  onImageSelect: (imageUrl: string, alt: string) => void;
  initialSearchTerm?: string;
}

export default function ServiceProviderImageSelector({ onImageSelect, initialSearchTerm = '' }: ProviderImageSelectorProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [images, setImages] = useState<ProviderImage[]>([]);
  const [localImages, setLocalImages] = useState<ProviderImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<ProviderImage | null>(null);
  const [providers, setProviders] = useState({
    unsplash: { status: 'unknown', message: 'Not checked' } as ProviderStatus,
    pexels: { status: 'unknown', message: 'Not checked' } as ProviderStatus,
    pixabay: { status: 'unknown', message: 'Not checked' } as ProviderStatus,
    local: { status: 'operational', message: 'Local storage available' } as ProviderStatus
  });
  const [activeTab, setActiveTab] = useState('search');
  const [sourceStats, setSourceStats] = useState<Record<string, number>>({});
  const [imageAltText, setImageAltText] = useState('');

  // Load providers status and local images on mount
  useEffect(() => {
    const checkProviders = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/images/providers/status');
        if (response.ok) {
          const status = await response.json();
          setProviders(status);
        }
      } catch (error) {
        console.error('Error checking provider status:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchLocalImages = async () => {
      try {
        const response = await fetch('/api/images/service-images');
        if (response.ok) {
          const images = await response.json();
          setLocalImages(images.map((img: any) => ({
            ...img,
            source: 'local'
          })));
        }
      } catch (error) {
        console.error('Error fetching local images:', error);
      }
    };

    checkProviders();
    fetchLocalImages();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast.error('Please enter a search term');
      return;
    }

    setSearching(true);
    setImages([]);

    try {
      const response = await fetch(`/api/images/search/all?query=${encodeURIComponent(searchTerm)}`);
      
      if (response.ok) {
        const data = await response.json();
        setImages(data.images || []);
        setSourceStats(data.sourceStats || {});
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to search images');
      }
    } catch (error) {
      console.error('Error searching images:', error);
      toast.error('Failed to search for images');
    } finally {
      setSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelect = (image: ProviderImage) => {
    setSelectedImage(image);
    setImageAltText(image.name || '');
  };

  const handleConfirmSelection = () => {
    if (!selectedImage) return;
    
    onImageSelect(selectedImage.url, imageAltText);
    toast.success('Image selected successfully');
  };

  // Determine which images to display based on active tab
  const displayImages = activeTab === 'search' ? images : localImages;

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="search">Search Providers</TabsTrigger>
          <TabsTrigger value="local">Local Images ({localImages.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search for images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={searching}
            />
            <Button onClick={handleSearch} disabled={searching || !searchTerm.trim()}>
              {searching ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Search className="h-4 w-4 mr-2" />}
              Search
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Search across: 
            {Object.entries(providers).map(([name, info]) => (
              <span key={name} className="ml-2">
                {name.charAt(0).toUpperCase() + name.slice(1)}
                {info.status === 'operational' ? 
                  <Check className="inline-block h-3 w-3 ml-1 text-green-500" /> : 
                  <X className="inline-block h-3 w-3 ml-1 text-red-500" />}
              </span>
            ))}
          </div>

          {sourceStats && Object.keys(sourceStats).length > 0 && (
            <div className="text-xs text-muted-foreground">
              Found: {' '}
              {Object.entries(sourceStats).map(([source, count], index) => (
                <span key={source}>
                  {source}: {count}
                  {index < Object.entries(sourceStats).length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="local" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Your Uploaded Service Images</h3>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setLocalImages([]);
                fetch('/api/images/service-images')
                  .then(res => res.json())
                  .then(images => setLocalImages(images.map((img: any) => ({
                    ...img,
                    source: 'local'
                  }))))
                  .catch(err => console.error('Error refreshing local images:', err));
              }}
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Refresh
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Images display - shared between tabs */}
      {searching && (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Searching for images...</span>
        </div>
      )}
      
      {!searching && displayImages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <ImageIcon className="h-10 w-10 text-muted-foreground/40 mb-3" />
          <p className="text-muted-foreground">
            {activeTab === 'search' ? 
              'Search for images to get started' : 
              'No local service images found'}
          </p>
        </div>
      )}

      {!searching && displayImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[500px] overflow-y-auto p-1">
          {displayImages.map((image) => (
            <div 
              key={`${image.source}-${image.id}`}
              className={`
                relative cursor-pointer rounded-lg overflow-hidden border-2 
                hover:opacity-95 transition-opacity
                ${selectedImage?.id === image.id && selectedImage?.source === image.source 
                  ? 'border-primary ring-2 ring-primary ring-opacity-50' 
                  : 'border-transparent'
                }
              `}
              onClick={() => handleSelect(image)}
            >
              <div className="aspect-video relative">
                <Image
                  src={image.thumbnail || image.url}
                  alt={image.name || "Image from provider"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-1 text-xs truncate">
                {image.source === 'local' ? 'Your upload' : image.source}
                {image.source !== 'local' && (
                  <a 
                    href={image.sourceUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-block align-text-bottom text-white/80 hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected image details */}
      {selectedImage && (
        <div className="mt-4 space-y-4 border rounded-lg p-4">
          <div className="flex gap-4">
            <div className="w-1/3 relative aspect-video">
              <Image
                src={selectedImage.url}
                alt={selectedImage.name || "Selected image"}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <div className="w-2/3 space-y-3">
              <h3 className="font-medium">Selected Image</h3>
              <p className="text-sm text-muted-foreground">
                Source: {selectedImage.source} 
                {selectedImage.authorName && ` • By ${selectedImage.authorName}`}
                {selectedImage.sourceUrl && (
                  <a 
                    href={selectedImage.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1"
                  >
                    <ExternalLink className="h-3 w-3 inline" />
                  </a>
                )}
              </p>
              
              <div>
                <label className="block text-sm font-medium mb-1">Alt Text</label>
                <Input
                  value={imageAltText}
                  onChange={(e) => setImageAltText(e.target.value)}
                  placeholder="Describe this image for accessibility"
                />
              </div>
              
              <Button onClick={handleConfirmSelection} className="w-full mt-2">
                Use This Image
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
