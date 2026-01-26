'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { 
  Search, RefreshCw, ExternalLink, Image as ImageIcon, 
  Download, Check, Loader2, Camera, FolderOpen, Layers, CropIcon
} from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface ImagePickerProps {
  onSelect: (imageData: any) => void;
  buttonLabel?: string;
  sections?: string[];
  initialSection?: string;
}

export default function ImagePicker({
  onSelect,
  buttonLabel = "Select",
  sections = ["All"],
  initialSection = "All"
}: ImagePickerProps) {
  // State for all image sources
  const [localImages, setLocalImages] = useState<any[]>([]);
  const [unsplashImages, setUnsplashImages] = useState<any[]>([]);
  const [pexelsImages, setPexelsImages] = useState<any[]>([]);
  const [pixabayImages, setPixabayImages] = useState<any[]>([]);
  const [allProvidersResults, setAllProvidersResults] = useState<any[]>([]);
  const [allProvidersLoading, setAllProvidersLoading] = useState(false);
  
  // UI state
  const [activeProvider, setActiveProvider] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>(initialSection);
  const [externalUrl, setExternalUrl] = useState<string>('');
  
  // Loading states
  const [loadingLocal, setLoadingLocal] = useState<boolean>(false);
  const [loadingUnsplash, setLoadingUnsplash] = useState<boolean>(false);
  const [loadingPexels, setLoadingPexels] = useState<boolean>(false);
  const [loadingPixabay, setLoadingPixabay] = useState<boolean>(false);
  const [importingExternal, setImportingExternal] = useState<boolean>(false);
  
  // Cropping states
  const [cropDialogOpen, setCropDialogOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: '%', width: 90, height: 90, x: 5, y: 5 });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageMetadata, setImageMetadata] = useState<any>(null);
  
  // Load local images when component mounts
  useEffect(() => {
    loadLocalImages();
  }, []);
  
  // Filter local images when search term or active section changes
  const filteredLocalImages = localImages.filter(img => {
    // Check section filter
    const passesSection = activeSection === "All" || img.section === activeSection;
    
    // Check search filter
    const passesSearch = !searchTerm || 
      (img.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (img.alt?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (img.section?.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return passesSection && passesSearch;
  });
  
  // Available sections based on local images
  const availableSections = ["All", ...Array.from(new Set(
    localImages
      .map(img => img.section)
      .filter(Boolean)
  ))];
  
  // Filter to only show sections that were requested
  const visibleSections = sections.includes("All") 
    ? availableSections 
    : availableSections.filter(section => sections.includes(section));

  // Load local images
  const loadLocalImages = async () => {
    setLoadingLocal(true);
    try {
      const response = await fetch(`/api/images?t=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        setLocalImages(Array.isArray(data) ? data : []);
      } else {
        console.error('Failed to load images:', response.statusText);
      }
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setLoadingLocal(false);
    }
  };
  
  // Search across all providers at once
  const searchAllProviders = async () => {
    if (!searchTerm.trim()) return;
    
    setAllProvidersLoading(true);
    setAllProvidersResults([]);
    
    try {
      // Call the backend endpoint that searches all providers
      const response = await fetch(`/api/images/search/all?query=${encodeURIComponent(searchTerm)}`);
      
      if (response.ok) {
        const data = await response.json();
        const images = data.images || [];
        
        // Add source labels for grouping
        const processedImages = images.map(img => ({
          ...img,
          sourceLabel: getSourceLabel(img.source || 'unknown')
        }));
        
        setAllProvidersResults(processedImages);
      } else {
        console.error('Failed to search all providers:', response.statusText);
        toast.error('Failed to search across image providers');
      }
    } catch (error) {
      console.error('Error searching all providers:', error);
      toast.error('An error occurred while searching for images');
    } finally {
      setAllProvidersLoading(false);
    }
  };
  
  // Helper to get friendly source name
  const getSourceLabel = (source: string): string => {
    switch(source.toLowerCase()) {
      case 'local': return 'Your Library';
      case 'unsplash': return 'Unsplash';
      case 'pexels': return 'Pexels';
      case 'pixabay': return 'Pixabay';
      default: return 'External';
    }
  };
  
  // Search individual providers
  const searchUnsplash = async () => {
    if (!searchTerm.trim()) return;
    
    setLoadingUnsplash(true);
    try {
      const response = await fetch(`/api/images/search/unsplash?query=${encodeURIComponent(searchTerm)}&per_page=20`);
      
      if (response.ok) {
        const data = await response.json();
        setUnsplashImages(data.images || []);
      }
    } catch (error) {
      console.error('Error searching Unsplash:', error);
    } finally {
      setLoadingUnsplash(false);
    }
  };
  
  // Search Pexels
  const searchPexels = async () => {
    if (!searchTerm.trim()) return;
    
    setLoadingPexels(true);
    try {
      const response = await fetch(`/api/images/search/pexels?query=${encodeURIComponent(searchTerm)}&per_page=20`);
      
      if (response.ok) {
        const data = await response.json();
        setPexelsImages(data.images || []);
      }
    } catch (error) {
      console.error('Error searching Pexels:', error);
    } finally {
      setLoadingPexels(false);
    }
  };
  
  // Search Pixabay
  const searchPixabay = async () => {
    if (!searchTerm.trim()) return;
    
    setLoadingPixabay(true);
    try {
      const response = await fetch(`/api/images/search/pixabay?query=${encodeURIComponent(searchTerm)}&per_page=20`);
      
      if (response.ok) {
        const data = await response.json();
        setPixabayImages(data.images || []);
      }
    } catch (error) {
      console.error('Error searching Pixabay:', error);
    } finally {
      setLoadingPixabay(false);
    }
  };
  
  // Handle search action based on active provider
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    
    switch (activeProvider) {
      case 'all':
        searchAllProviders();
        break;
      case 'unsplash':
        searchUnsplash();
        break;
      case 'pexels':
        searchPexels();
        break;
      case 'pixabay':
        searchPixabay();
        break;
      case 'local':
        // For local, we already filter in the UI
        break;
      default:
        break;
    }
  };
  
  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveProvider(tab);
    
    // Load images for the selected provider if needed and we have a search term
    if (searchTerm) {
      switch (tab) {
        case 'all':
          if (allProvidersResults.length === 0 && !allProvidersLoading) {
            searchAllProviders();
          }
          break;
        case 'unsplash':
          if (unsplashImages.length === 0 && !loadingUnsplash) {
            searchUnsplash();
          }
          break;
        case 'pexels':
          if (pexelsImages.length === 0 && !loadingPexels) {
            searchPexels();
          }
          break;
        case 'pixabay':
          if (pixabayImages.length === 0 && !loadingPixabay) {
            searchPixabay();
          }
          break;
        default:
          break;
      }
    }
  };
  
  // Handle external image import
  const handleImportExternalImage = async () => {
    if (!externalUrl) {
      toast.error('Please enter an image URL');
      return;
    }
    
    setImportingExternal(true);
    try {
      const response = await fetch('/api/images/blog-images/external', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          imageUrl: externalUrl,
          name: 'External image'
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Add the new image to the local images array
          const newImage = {
            id: data.id || `imported-${Date.now()}`,
            url: data.url,
            name: data.name || 'External image',
            source: 'local',
            section: 'Imported',
            uploadedAt: new Date().toISOString()
          };
          
          setLocalImages(prev => [newImage, ...prev]);
          
          onSelect(newImage);
          toast.success('External image imported successfully');
          setExternalUrl('');
        } else {
          toast.error(data.error || 'Failed to import image');
        }
      } else {
        toast.error('Failed to import external image');
      }
    } catch (error) {
      console.error('Error importing external image:', error);
      toast.error('Failed to import external image');
    } finally {
      setImportingExternal(false);
    }
  };
  
  // Handle image selection from any provider
  const handleImageSelect = async (image: any, provider: string) => {
    // For local images, just pass the selection directly
    if (provider === 'local') {
      onSelect(image);
      return;
    }
    
    // For external providers, we need to import the image first
    try {
      toast.loading('Importing image...');
      
      const response = await fetch('/api/images/blog-images/external', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          imageUrl: image.url,
          name: image.name || `${provider}-image`
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          toast.dismiss();
          
          // Create a new image object to add to local images
          const newImage = {
            id: data.id || `imported-${Date.now()}`,
            url: data.url,
            name: data.name || image.name || `${provider}-image`,
            source: 'local',
            section: 'Imported',
            uploadedAt: new Date().toISOString(),
            originalSource: {
              provider,
              url: image.url,
              author: image.authorName,
              sourceUrl: image.sourceUrl
            }
          };
          
          // Add to local images
          setLocalImages(prev => [newImage, ...prev]);
          
          toast.success('Image imported successfully');
          onSelect({
            ...newImage,
            originalSource: provider
          });
        } else {
          toast.dismiss();
          toast.error(data.error || 'Failed to import image');
        }
      } else {
        toast.dismiss();
        toast.error('Failed to import image');
      }
    } catch (error) {
      toast.dismiss();
      console.error('Error importing image:', error);
      toast.error('Failed to import image');
    }
  };
  
  // Open the crop dialog for an image
  const openCropDialog = (image: any) => {
    setImageToCrop(image.url);
    setImageMetadata({
      id: image.id,
      name: image.name,
      section: image.section,
      alt: image.alt,
    });
    setCropDialogOpen(true);
    // Reset crop to default
    setCrop({ unit: '%', width: 90, height: 90, x: 5, y: 5 });
    setCompletedCrop(null);
  };
  
  // Apply the crop to an image
  const applyCrop = async () => {
    if (!completedCrop || !imgRef.current || !previewCanvasRef.current) {
      toast.error('No crop area selected');
      return;
    }
    
    try {
      // Draw cropped image on canvas
      const canvas = previewCanvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('Could not get canvas context');
      }
      
      // Draw the cropped image onto the canvas
      const image = imgRef.current;
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      
      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;
      
      ctx.drawImage(
        image,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );
      
      // Convert canvas to blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((b) => {
          if (b) resolve(b);
          else throw new Error('Failed to create blob');
        }, 'image/jpeg', 0.9);
      });
      
      // Create a File from the blob
      const croppedFile = new File([blob], `cropped-${imageMetadata.name || 'image'}.jpg`, { 
        type: 'image/jpeg',
        lastModified: Date.now()
      });
      
      // Upload the cropped image
      const formData = new FormData();
      formData.append('image', croppedFile);
      formData.append('metadata', JSON.stringify({
        name: `${imageMetadata.name}-cropped`,
        section: imageMetadata.section,
        alt: imageMetadata.alt,
        originalId: imageMetadata.id
      }));
      
      toast.loading('Uploading cropped image...');
      
      const response = await fetch('/api/images/blog', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const result = await response.json();
        
        if (result.success) {
          // Add the cropped image to local images
          const croppedImage = {
            id: result.id || `cropped-${Date.now()}`,
            url: result.url,
            name: `${imageMetadata.name}-cropped`,
            alt: imageMetadata.alt,
            section: imageMetadata.section,
            source: 'local',
            uploadedAt: new Date().toISOString()
          };
          
          // Update local images with the new cropped version
          setLocalImages(prev => [croppedImage, ...prev]);
          
          toast.dismiss();
          toast.success('Image cropped and saved');
          setCropDialogOpen(false);
          
          // Select the cropped image
          onSelect(croppedImage);
        } else {
          toast.dismiss();
          toast.error(result.error || 'Failed to save cropped image');
        }
      } else {
        toast.dismiss();
        toast.error('Failed to upload cropped image');
      }
    } catch (error) {
      toast.dismiss();
      console.error('Error cropping image:', error);
      toast.error('Failed to crop image');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-4 flex items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10"
          />
        </div>
        <Button 
          variant="default" 
          onClick={handleSearch} 
          disabled={!searchTerm.trim() || 
            (activeProvider === 'all' && allProvidersLoading) ||
            (activeProvider === 'unsplash' && loadingUnsplash) ||
            (activeProvider === 'pexels' && loadingPexels) ||
            (activeProvider === 'pixabay' && loadingPixabay)}
        >
          Search
        </Button>
      </div>
      
      <Tabs value={activeProvider} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all" className="flex items-center gap-1">
            <Layers className="h-4 w-4" />
            <span className="hidden sm:inline">All</span>
          </TabsTrigger>
          <TabsTrigger value="local" className="flex items-center gap-1">
            <FolderOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Your Images</span>
          </TabsTrigger>
          <TabsTrigger value="unsplash">Unsplash</TabsTrigger>
          <TabsTrigger value="pexels">Pexels</TabsTrigger>
          <TabsTrigger value="pixabay">Pixabay</TabsTrigger>
          <TabsTrigger value="external" className="flex items-center gap-1">
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">URL</span>
          </TabsTrigger>
        </TabsList>
        
        {/* All Providers tab */}
        <TabsContent value="all" className="mt-4">
          <div className="relative">
            {allProvidersLoading ? (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                  <p className="text-muted-foreground">Searching all providers...</p>
                </div>
              </div>
            ) : !searchTerm ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <Search className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground">Enter a search term to find images across all providers</p>
              </div>
            ) : allProvidersResults.length === 0 ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <ImageIcon className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground mb-2">No images found for "{searchTerm}"</p>
                <p className="text-xs text-muted-foreground mb-4">Try a different search term</p>
              </div>
            ) : (
              <div>
                {/* Group images by provider */}
                {['Your Library', 'Unsplash', 'Pexels', 'Pixabay'].map(provider => {
                  const providerImages = allProvidersResults.filter(img => img.sourceLabel === provider);
                  
                  if (providerImages.length === 0) return null;
                  
                  return (
                    <div key={provider} className="mb-6">
                      <h3 className="text-sm font-medium mb-3">{provider} ({providerImages.length})</h3>
                      <ScrollArea className="h-[240px]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
                          {providerImages.map((image) => (
                            <div 
                              key={`${provider}-${image.id}`} 
                              className="group relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-95 transition-all"
                              onClick={() => handleImageSelect(image, image.source)}
                            >
                              <Image
                                src={image.thumbnail || image.url}
                                alt={image.alt || image.name || `${provider} image`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                                <Button size="sm" variant="secondary" className="mb-2">
                                  <Check className="h-4 w-4 mr-2" />
                                  Use
                                </Button>
                                {image.authorName && (
                                  <p className="text-[10px] text-white/70">Photo by {image.authorName}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </TabsContent>
        
        {/* Local images tab */}
        <TabsContent value="local" className="mt-4">
          {visibleSections.length > 1 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {visibleSections.map(section => (
                <Button
                  key={section}
                  variant={activeSection === section ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveSection(section)}
                  className="text-xs"
                >
                  {section}
                </Button>
              ))}
            </div>
          )}
          
          <div className="relative">
            {loadingLocal ? (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                  <p className="text-muted-foreground">Loading your images...</p>
                </div>
              </div>
            ) : filteredLocalImages.length === 0 ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <Camera className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground mb-4">No images found</p>
                <Button variant="outline" onClick={loadLocalImages}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Images
                </Button>
              </div>
            ) : (
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
                  {filteredLocalImages.map((image) => (
                    <div 
                      key={image.id || image.url} 
                      className="group relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-95 transition-all"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt || image.name || "Image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                        <div className="flex gap-2 mb-2">
                          <Button 
                            size="sm" 
                            variant="secondary"
                            onClick={() => handleImageSelect(image, 'local')}
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Select
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-black/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              openCropDialog(image);
                            }}
                          >
                            <CropIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        </TabsContent>
        
        {/* Other provider tabs - same as before */}
        <TabsContent value="unsplash" className="mt-4">
          <div className="relative">
            {loadingUnsplash ? (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                  <p className="text-muted-foreground">Searching Unsplash...</p>
                </div>
              </div>
            ) : !searchTerm ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <Search className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground">Enter a search term to find images on Unsplash</p>
              </div>
            ) : unsplashImages.length === 0 ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <ImageIcon className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground mb-2">No images found for "{searchTerm}"</p>
                <p className="text-xs text-muted-foreground mb-4">Try a different search term</p>
              </div>
            ) : (
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
                  {unsplashImages.map((image) => (
                    <div 
                      key={image.id} 
                      className="group relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-95 transition-all"
                      onClick={() => handleImageSelect(image, 'unsplash')}
                    >
                      <Image
                        src={image.thumbnail || image.url}
                        alt={image.alt || image.name || "Unsplash image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                        <Button size="sm" variant="secondary" className="mb-2">
                          <Check className="h-4 w-4 mr-2" />
                          Use
                        </Button>
                        <p className="text-[10px] text-white/70">Photo by {image.authorName || 'Unsplash'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="pexels" className="mt-4">
          <div className="relative">
            {loadingPexels ? (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                  <p className="text-muted-foreground">Searching Pexels...</p>
                </div>
              </div>
            ) : !searchTerm ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <Search className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground">Enter a search term to find images on Pexels</p>
              </div>
            ) : pexelsImages.length === 0 ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <ImageIcon className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground mb-2">No images found for "{searchTerm}"</p>
                <p className="text-xs text-muted-foreground mb-4">Try a different search term</p>
              </div>
            ) : (
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
                  {pexelsImages.map((image) => (
                    <div 
                      key={image.id} 
                      className="group relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-95 transition-all"
                      onClick={() => handleImageSelect(image, 'pexels')}
                    >
                      <Image
                        src={image.thumbnail || image.url}
                        alt={image.alt || image.name || "Pexels image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                        <Button size="sm" variant="secondary" className="mb-2">
                          <Check className="h-4 w-4 mr-2" />
                          Use
                        </Button>
                        <p className="text-[10px] text-white/70">Photo by {image.authorName || 'Pexels'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="pixabay" className="mt-4">
          <div className="relative">
            {loadingPixabay ? (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                  <p className="text-muted-foreground">Searching Pixabay...</p>
                </div>
              </div>
            ) : !searchTerm ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <Search className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground">Enter a search term to find images on Pixabay</p>
              </div>
            ) : pixabayImages.length === 0 ? (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                <ImageIcon className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground mb-2">No images found for "{searchTerm}"</p>
                <p className="text-xs text-muted-foreground mb-4">Try a different search term</p>
              </div>
            ) : (
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
                  {pixabayImages.map((image) => (
                    <div 
                      key={image.id} 
                      className="group relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-95 transition-all"
                      onClick={() => handleImageSelect(image, 'pixabay')}
                    >
                      <Image
                        src={image.thumbnail || image.url}
                        alt={image.alt || image.name || "Pixabay image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                        <Button size="sm" variant="secondary" className="mb-2">
                          <Check className="h-4 w-4 mr-2" />
                          Use
                        </Button>
                        <p className="text-[10px] text-white/70">Photo by {image.authorName || 'Pixabay'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        </TabsContent>
        
        {/* External URL tab */}
        <TabsContent value="external" className="mt-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="https://example.com/image.jpg"
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleImportExternalImage()}
              />
              <Button 
                onClick={handleImportExternalImage}
                disabled={!externalUrl || importingExternal}
              >
                {importingExternal ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                Import
              </Button>
            </div>
            
            {externalUrl && (
              <div className="border rounded-md p-2 relative aspect-video">
                <div className="relative w-full h-full">
                  <Image 
                    src={externalUrl} 
                    alt="Preview" 
                    fill
                    className="object-contain"
                    onError={() => {
                      toast.error('Invalid image URL');
                    }}
                  />
                </div>
              </div>
            )}
            
            <p className="text-xs text-muted-foreground">
              Enter the URL of an image to import it to your library
            </p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 text-xs text-center text-muted-foreground">
        {activeProvider === 'all' ? (
          <p>Found {allProvidersResults.length} images across all providers</p>
        ) : activeProvider === 'local' ? (
          <p>Images found: {filteredLocalImages.length}</p>
        ) : activeProvider === 'unsplash' ? (
          <p>Showing {unsplashImages.length} results from Unsplash</p>
        ) : activeProvider === 'pexels' ? (
          <p>Showing {pexelsImages.length} results from Pexels</p>
        ) : activeProvider === 'pixabay' ? (
          <p>Showing {pixabayImages.length} results from Pixabay</p>
        ) : null}
      </div>
      
      {/* Crop Dialog */}
      <Dialog open={cropDialogOpen} onOpenChange={setCropDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Crop Image</DialogTitle>
          </DialogHeader>
          
          <div className="my-4 flex flex-col items-center">
            {imageToCrop && (
              <>
                <div className="max-h-[60vh] overflow-auto mb-4">
                  <ReactCrop
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={16 / 9}
                    className="max-w-full"
                  >
                    <img
                      ref={imgRef}
                      src={imageToCrop}
                      alt="Crop preview"
                      className="max-w-full"
                    />
                  </ReactCrop>
                </div>
                
                <div className="w-full mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                  <div className="relative aspect-[16/9] w-full max-w-md mx-auto border overflow-hidden rounded">
                    <canvas
                      ref={previewCanvasRef}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setCropDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={applyCrop}>
              Apply Crop
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}