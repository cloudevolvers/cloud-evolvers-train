'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from 'sonner';
import { Search, Upload, ImageIcon, RefreshCw, Link as LinkIcon, PlusCircle, ExternalLink, Camera } from 'lucide-react';
import { useImages } from '@/lib/image-context';

interface BlogImageUpdaterProps {
  blogId: string;
  currentImage?: string;
  currentAlt?: string;
  onUpdate: (imageUrl: string, imageAlt: string) => void;
}

export default function BlogImageUpdater({
  blogId,
  currentImage,
  currentAlt = '',
  onUpdate
}: BlogImageUpdaterProps) {
  const { images, refreshImages, uploadBlogImage, isLoading } = useImages();
  const [selectedImage, setSelectedImage] = useState<string | null>(currentImage || null);
  const [imageAlt, setImageAlt] = useState<string>(currentAlt || '');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('current');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [externalUrl, setExternalUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Filter images based on search term
  const filteredImages = images.filter(img => 
    img.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (img.section?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  // Load images when component mounts
  useEffect(() => {
    refreshImages();
  }, [refreshImages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      // Reset selection
      setSelectedImage(null);
      setSelectedTab('upload');
    }
  };

  // Handle file selection from clipboard paste
  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          setSelectedFile(file);
          setSelectedTab('upload');
          toast.info('Image pasted! Click "Upload" to use it.');
          break;
        }
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('No file selected');
      return;
    }

    try {
      setIsUploading(true);
      
      const metadata = {
        name: `blog-${blogId}-image`,
        alt: imageAlt || selectedFile.name,
        section: 'Blog'
      };
      
      const result = await uploadBlogImage(selectedFile, metadata);
      
      if (result.success) {
        setSelectedImage(result.url ?? null); // Ensure the URL is correct
        toast.success('Image uploaded successfully');
        if (result.url) {
          onUpdate(result.url, imageAlt); // Pass the correct URL to the parent component
        } else {
          toast.error('Uploaded image URL is missing');
        }
      } else {
        toast.error(result.error || 'Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setSelectedTab('current');
  };

  const handleSaveChanges = () => {
    if (selectedImage) {
      onUpdate(selectedImage, imageAlt);
      toast.success('Image updated successfully');
    } else {
      toast.error('No image selected');
    }
  };

  const handleImportFromUrl = async () => {
    if (!externalUrl) {
      toast.error('Please enter an image URL');
      return;
    }

    try {
      setIsUploading(true);
      
      const response = await fetch('/backend/images/blog-images/external', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageUrl: externalUrl,
          blogId,
          name: `blog-${blogId}-image`
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setSelectedImage(data.url ?? null);
        toast.success('External image imported successfully');
        if (data.url) {
          onUpdate(data.url, imageAlt);
        }
        setExternalUrl('');
        
        // Refresh the images list
        refreshImages();
      } else {
        throw new Error(data.error || 'Failed to import image');
      }
    } catch (error) {
      console.error('Error importing external image:', error);
      toast.error('Failed to import external image');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6" onPaste={handlePaste}>
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle>Blog Post Image</CardTitle>
          <CardDescription>
            The main image for your blog post - displayed at the top of the article and in previews
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="mb-2 block">Current Image</Label>
              <div className="relative aspect-video bg-muted rounded-md overflow-hidden border">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="Blog image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <ImageIcon className="h-12 w-12 text-muted-foreground opacity-50" />
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <Label htmlFor="alt-text">Alt Text (for accessibility)</Label>
                <Input 
                  id="alt-text"
                  value={imageAlt} 
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Describe the image for screen readers"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="current">Existing</TabsTrigger>
                  <TabsTrigger value="upload">Upload New</TabsTrigger>
                  <TabsTrigger value="external">External URL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="current" className="space-y-4">
                  <div className="flex mb-4">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search images..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" onClick={refreshImages} disabled={isLoading} className="ml-2">
                      <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                    </Button>
                  </div>
                  
                  {filteredImages.length === 0 ? (
                    <div className="text-center py-8 border rounded-md">
                      <ImageIcon className="h-10 w-10 mx-auto mb-2 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground">No images found</p>
                      <Button 
                        variant="link" 
                        onClick={() => setSelectedTab('upload')} 
                        className="mt-2"
                      >
                        Upload a new image instead
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto p-1">
                      {filteredImages.map((image) => (
                        <div 
                          key={image.id}
                          onClick={() => handleSelectImage(image.url)}
                          className={`
                            relative aspect-square rounded-md overflow-hidden border-2 cursor-pointer
                            hover:opacity-90 transition-all
                            ${selectedImage === image.url ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'}
                          `}
                        >
                          <Image
                            src={image.url}
                            alt={image.alt || image.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100px, 150px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="upload">
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
                    {selectedFile ? (
                      <div className="space-y-2">
                        <div className="relative mx-auto aspect-video w-full max-w-md bg-muted rounded-md overflow-hidden">
                          <Image
                            src={URL.createObjectURL(selectedFile)}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm">{selectedFile.name}</p>
                        <Button 
                          onClick={handleUpload} 
                          disabled={isUploading}
                          className="mt-4"
                        >
                          {isUploading ? (
                            <>
                              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                              Uploading...
                            </>
                          ) : (
                            <>
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Image
                            </>
                          )}
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <div className="mb-4 flex flex-col items-center">
                          <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                          <p className="text-muted-foreground mb-4">
                            Drag and drop an image here, paste from clipboard, or click to browse
                          </p>
                          <Input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                            className="mx-auto max-w-xs"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-6">
                          You can also paste an image directly from your clipboard anywhere in this area
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="external">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="external-url">External Image URL</Label>
                      <div className="flex mt-1">
                        <div className="relative flex-grow">
                          <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="external-url"
                            placeholder="https://example.com/image.jpg"
                            value={externalUrl}
                            onChange={(e) => setExternalUrl(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        The image will be downloaded and saved to your blog images
                      </p>
                    </div>

                    {externalUrl && (
                      <div className="border rounded-md p-2 mt-4">
                        <p className="text-sm font-medium mb-2">Preview:</p>
                        <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
                          <Image
                            src={externalUrl}
                            alt="External image preview"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                            unoptimized
                          />
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      onClick={handleImportFromUrl} 
                      disabled={isUploading || !externalUrl}
                      className="mt-2"
                    >
                      {isUploading ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Importing...
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Import External Image
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-xs text-muted-foreground">
            {selectedImage ? 'Click "Save Changes" to update the blog post with this image' : 'Select or upload an image'}
          </p>
          <Button onClick={handleSaveChanges} disabled={!selectedImage}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}