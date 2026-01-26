'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ImageIcon, Search, Search as SearchIcon, ExternalLink, RefreshCw, Check, X } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

interface ImageSearchProps {
  onImageSelect: (imageUrl: string, imageAlt?: string) => void;
  buttonLabel?: string;
  currentImage?: string;
}

interface ImageResult {
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

interface SearchResponse {
  images: ImageResult[];
  total?: number;
  sourceStats?: Record<string, number>;
}

const ImageSearch = ({ onImageSelect, buttonLabel = "Search Images", currentImage }: ImageSearchProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ImageResult[]>([]);
  const [localImages, setLocalImages] = useState<ImageResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<ImageResult | null>(null);
  
  // Load local images on initial render
  useEffect(() => {
    const loadLocalImages = async () => {
      try {
        const response = await fetch('/api/images');
        if (response.ok) {
          const data = await response.json();
          setLocalImages(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error('Error loading local images:', error);
      }
    };
    
    if (open) {
      loadLocalImages();
    }
  }, [open]);
  
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    
    setLoading(true);
    
    try {
      const endpoint = `/api/images/search/all?query=${encodeURIComponent(searchTerm)}`;
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.statusText}`);
      }
      
      const data: SearchResponse = await response.json();
      
      setSearchResults(data.images || []);
      
      // Update active tab if current tab has no results
      if (activeTab !== 'all' && data.sourceStats) {
        if (data.sourceStats[activeTab] === 0) {
          setActiveTab('all');
        }
      }
    } catch (error) {
      console.error('Error searching images:', error);
      toast.error('Failed to search images');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleImageClick = (image: ImageResult) => {
    setSelectedImage(image);
  };
  
  const handleSelectImage = () => {
    if (selectedImage) {
      onImageSelect(selectedImage.url, selectedImage.name);
      setOpen(false);
      toast.success('Image selected successfully');
    }
  };
  
  const filteredImages = activeTab === 'all' 
    ? searchResults 
    : searchResults.filter(img => img.source === activeTab);
  
  const providerCounts = searchResults.reduce((counts, img) => {
    counts[img.source] = (counts[img.source] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" type="button" className="w-full">
          <ImageIcon className="h-4 w-4 mr-2" />
          {buttonLabel}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Search for Images</DialogTitle>
          <DialogDescription>
            Search for images to use in your blog post from various sources including your uploaded images.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex mt-2 mb-4">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for images..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button onClick={handleSearch} disabled={loading} className="ml-2">
            {loading ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Search className="h-4 w-4 mr-2" />}
            Search
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <TabsList className="mb-4">
            <TabsTrigger value="all">
              All Sources
              {searchResults.length > 0 && ` (${searchResults.length})`}
            </TabsTrigger>
            <TabsTrigger value="local" disabled={!providerCounts.local}>
              Local
              {providerCounts.local ? ` (${providerCounts.local})` : ''}
            </TabsTrigger>
            <TabsTrigger value="unsplash" disabled={!providerCounts.unsplash}>
              Unsplash
              {providerCounts.unsplash ? ` (${providerCounts.unsplash})` : ''}
            </TabsTrigger>
            <TabsTrigger value="pexels" disabled={!providerCounts.pexels}>
              Pexels
              {providerCounts.pexels ? ` (${providerCounts.pexels})` : ''}
            </TabsTrigger>
            <TabsTrigger value="pixabay" disabled={!providerCounts.pixabay}>
              Pixabay
              {providerCounts.pixabay ? ` (${providerCounts.pixabay})` : ''}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="flex-1 flex flex-col data-[state=active]:flex-1">
            {filteredImages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-muted-foreground bg-muted/20 rounded-md">
                <ImageIcon className="h-12 w-12 mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No images found</h3>
                <p className="max-w-md">
                  {searchTerm 
                    ? "Try another search term or check another source" 
                    : "Enter a search term above to find images"}
                </p>
                
                {!searchTerm && localImages.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Recent uploads</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {localImages.slice(0, 4).map(image => (
                        <div 
                          key={image.id}
                          className={`relative aspect-square rounded-md overflow-hidden border-2 cursor-pointer transition-all hover:opacity-90 ${selectedImage?.id === image.id ? 'border-blue-500 ring-2 ring-blue-500' : 'border-transparent'}`}
                          onClick={() => handleImageClick(image)}
                        >
                          <Image 
                            src={image.thumbnail || image.url}
                            alt={image.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <ScrollArea className="flex-1 pr-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredImages.map((image) => (
                    <Card 
                      key={`${image.source}-${image.id}`}
                      className={`overflow-hidden cursor-pointer transition-all hover:opacity-90 ${selectedImage?.id === image.id && selectedImage?.source === image.source ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => handleImageClick(image)}
                    >
                      <div className="relative aspect-video">
                        <Image 
                          src={image.thumbnail || image.url}
                          alt={image.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        {selectedImage?.id === image.id && selectedImage?.source === image.source && (
                          <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 flex justify-between items-center">
                          <span className="truncate max-w-[80%]">{image.source}</span>
                          {image.sourceUrl && (
                            <a 
                              href={image.sourceUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-blue-300 hover:text-blue-100"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                      <CardContent className="p-2">
                        <div className="text-xs truncate">{image.name}</div>
                        {image.authorName && (
                          <div className="text-xs text-muted-foreground truncate">
                            By: {image.authorName}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="border-t border-gray-200 dark:border-gray-800 my-4" />
        
        {selectedImage && (
          <div className="bg-muted/30 p-2 rounded-md mb-4 flex items-center">
            <div className="relative h-16 w-16 bg-muted rounded overflow-hidden mr-3">
              <Image 
                src={selectedImage.thumbnail || selectedImage.url}
                alt={selectedImage.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="font-medium truncate">{selectedImage.name}</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="capitalize">{selectedImage.source}</span>
                {selectedImage.authorName && (
                  <>
                    <span>•</span>
                    <span>{selectedImage.authorName}</span>
                  </>
                )}
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSelectedImage(null)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleSelectImage} 
            disabled={!selectedImage}
          >
            Use Selected Image
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageSearch;
