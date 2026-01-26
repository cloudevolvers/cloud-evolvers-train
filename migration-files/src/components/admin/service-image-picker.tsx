"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Save } from "lucide-react";
import Image from 'next/image';
import ImagePicker from './image-picker';
import { toast } from 'sonner';

interface ServiceImagePickerProps {
  serviceId: string;
  currentImage?: string;
  currentAlt?: string;
  onUpdate: (imageUrl: string, alt: string) => void;
}

export default function ServiceImagePicker({
  serviceId,
  currentImage = '',
  currentAlt = '',
  onUpdate
}: ServiceImagePickerProps) {
  const [image, setImage] = useState(currentImage);
  const [alt, setAlt] = useState(currentAlt);
  const [saving, setSaving] = useState(false);
  
  const handleImageSelect = (imageData: { url: string; alt: string }) => {
    setImage(imageData.url);
    if (imageData.alt && !alt) {
      setAlt(imageData.alt);
    }
  };
  
  const handleSave = async () => {
    try {
      setSaving(true);
      
      // Get services from localStorage
      const storedServices = localStorage.getItem('services');
      if (!storedServices) {
        throw new Error('Services not found');
      }
      
      // Parse services
      const services = JSON.parse(storedServices);
      
      // Find and update the target service
      let updated = false;
      let updatedService = null;
      Object.keys(services).forEach(key => {
        if (services[key].id === serviceId) {
          services[key].image = image; // Ensure the correct URL is saved
          services[key].imageAlt = alt;
          updatedService = services[key];
          updated = true;
        }
      });
      
      if (!updated) {
        throw new Error('Service not found');
      }
      
      // Save back to localStorage
      localStorage.setItem('services', JSON.stringify(services));
      
      // Try to update via API
      try {
        await fetch('/api/services', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedService)
        });
      } catch (apiError) {
        console.warn('Backend API error, but image updated in localStorage:', apiError);
      }
      
      // Call the onUpdate callback
      onUpdate(image, alt);
      
      toast.success('Service image updated successfully');
    } catch (error) {
      console.error('Failed to update service image:', error);
      toast.error('Failed to update service image');
    } finally {
      setSaving(false);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Image</CardTitle>
        <CardDescription>
          Update the featured image for this service
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border rounded-lg overflow-hidden">
          {image ? (
            <div className="relative aspect-video">
              <Image
                src={image}
                alt={alt || 'Service image preview'}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 bg-muted">
              <ImageIcon className="h-12 w-12 text-muted-foreground opacity-40" />
              <p className="mt-2 text-sm text-muted-foreground">No image selected</p>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="image-alt">Image Alt Text</Label>
          <Input
            id="image-alt"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            placeholder="Describe the image for accessibility"
          />
          <p className="text-xs text-muted-foreground">
            Alt text helps people using screen readers understand your images.
          </p>
        </div>
        
        <div>
          <ImagePicker
            onSelect={handleImageSelect}
            buttonLabel="Select Image"
            sections={["Services", "All"]}
          />
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button onClick={handleSave} disabled={saving || !image}>
          <Save className="h-4 w-4 mr-2" />
          {saving ? 'Saving...' : 'Save Image'}
        </Button>
      </CardFooter>
    </Card>
  );
}
