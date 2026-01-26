"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Clipboard, Search, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import ImageSearchPanel from './ImageSearchPanel';
import { imageUploadService } from '@/lib/image-upload-service';

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
  const [activeTab, setActiveTab] = useState<string>('upload');
  const [uploading, setUploading] = useState(false);
  const [imageAlt, setImageAlt] = useState(currentAlt || '');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [makePublic, setMakePublic] = useState(false);
  
  // Paste functionality
  const [pastedImage, setPastedImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setSelectedFile(file);
    
    // Generate preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  // Upload selected file
  const uploadSelectedFile = async () => {
    if (!selectedFile) {
      toast.error('Please select an image to upload');
      return;
    }
    
    try {
      setUploading(true);
      toast.loading('Uploading image...', { id: 'upload-image' });
      
      // Create FormData and append file
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('section', 'blog');
      formData.append('blogId', blogId);
      formData.append('public', makePublic.toString());
      
      // Upload to API
      const response = await fetch('/api/images/upload', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      
      const result = await response.json();
      
      // Update blog post with new image
      if (result.success && result.url) {
        onUpdate(result.url, imageAlt || result.name || '');
        toast.success('Image uploaded successfully', { id: 'upload-image' });
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`, { id: 'upload-image' });
    } finally {
      setUploading(false);
    }
  };
  
  // Handle image paste from clipboard
  const handleImagePaste = async (e: React.ClipboardEvent) => {
    try {
      toast.info('Processing pasted image...', { duration: 2000 });
      
      const dataUrl = await imageUploadService.handleImagePaste(e);
      
      if (dataUrl) {
        setPastedImage(dataUrl);
        // Generate a default name
        const randomId = Math.floor(Math.random() * 10000);
        const defaultName = `blog-image-${blogId}-${new Date().toISOString().slice(0, 10)}-${randomId}`;
        setImageName(defaultName);
        toast.success('Image pasted successfully!');
      } else {
        toast.error('No image found in clipboard');
      }
    } catch (error) {
      console.error('Error handling pasted image:', error);
      toast.error(`Failed to process pasted image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };
  
  // Save pasted image
  const savePastedImage = async () => {
    if (!pastedImage || !imageName.trim()) {
      toast.error('Please provide an image name');
      return;
    }
    
    try {
      setUploading(true);
      toast.loading('Saving image...', { id: 'saving-image' });
      
      // Get token
      const token = localStorage.getItem('auth_token') || '';
      
      // Upload options
      const uploadOptions = {
        dataUrl: pastedImage,
        name: imageName.trim(),
        metadata: {
          section: 'blog',
          blogId: blogId,
          source: 'paste',
          public: makePublic
        },
        authToken: token
      };
      
      // Upload pasted image
      const result = await imageUploadService.uploadPastedImage(uploadOptions);
      
      if (result.success) {
        onUpdate(result.url, imageAlt || imageName.trim() || '');
        setPastedImage(null);
        setImageName('');
        toast.success('Image saved successfully', { id: 'saving-image' });
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error saving pasted image:', error);
      toast.error(`Failed to save image: ${error instanceof Error ? error.message : 'Unknown error'}`, { id: 'saving-image' });
    } finally {
      setUploading(false);
    }
  };
  
  // Handle selecting image from search
  const handleImageSelect = (imageUrl: string, imageName: string) => {
    try {
      setUploading(true);
      
      // Update blog post with selected image
      onUpdate(imageUrl, imageAlt || imageName || '');
      
      toast.success('Image selected successfully');
    } catch (error) {
      console.error('Error selecting image:', error);
      toast.error(`Failed to select image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Current image preview */}
      {currentImage && (
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-medium mb-3">Current Image</h2>
            <div className="relative h-64 mb-4">
              <Image
                src={currentImage}
                alt={currentAlt || 'Blog image'}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Image alt text"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={() => onUpdate(currentImage, imageAlt)}
                disabled={currentAlt === imageAlt}
              >
                Update Alt Text
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 mt-3">
              <Checkbox 
                id="make-public-current"
                checked={makePublic}
                onCheckedChange={(checked) => setMakePublic(checked as boolean)}
              />
              <label 
                htmlFor="make-public-current" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Make public (override Azure storage account settings)
              </label>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Image selector tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="upload">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </TabsTrigger>
          <TabsTrigger value="paste">
            <Clipboard className="h-4 w-4 mr-2" />
            Paste
          </TabsTrigger>
          <TabsTrigger value="search">
            <Search className="h-4 w-4 mr-2" />
            Search
          </TabsTrigger>
        </TabsList>
        
        {/* Upload tab */}
        <TabsContent value="upload">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {previewImage ? (
                  <div className="relative h-48 mx-auto">
                    <Image
                      src={previewImage}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      Click to browse or drag and drop
                    </p>
                  </>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="make-public-upload"
                  checked={makePublic}
                  onCheckedChange={(checked) => setMakePublic(checked as boolean)}
                />
                <label 
                  htmlFor="make-public-upload" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Make public (override Azure storage account settings)
                </label>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={uploadSelectedFile}
                  disabled={!selectedFile || uploading}
                >
                  {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Upload Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Paste tab */}
        <TabsContent value="paste">
          <Card>
            <CardContent className="p-4 space-y-4">
              {pastedImage ? (
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative h-60">
                    <Image 
                      src={pastedImage} 
                      alt="Pasted image"
                      fill
                      className="object-contain" 
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-start">
                      <Input 
                        placeholder="Image name (required)"
                        className="max-w-xs"
                        value={imageName}
                        onChange={(e) => setImageName(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          onClick={() => setPastedImage(null)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          onClick={savePastedImage}
                          disabled={!imageName.trim() || uploading}
                        >
                          {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Save Image
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="make-public-paste"
                        checked={makePublic}
                        onCheckedChange={(checked) => setMakePublic(checked as boolean)}
                      />
                      <label 
                        htmlFor="make-public-paste" 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Make public (override Azure storage account settings)
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onPaste={handleImagePaste}
                  tabIndex={0}
                  role="button"
                  aria-label="Paste image area"
                >
                  <Clipboard className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Paste an image (Ctrl+V / Cmd+V) here
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Works with images from websites, files, or screenshots
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Search tab */}
        <TabsContent value="search">
          <Card>
            <CardContent className="p-4">
              <ImageSearchPanel 
                onSelect={handleImageSelect}
                showLocalResults={true}
                maxHeight="400px"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
