"use client";
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Upload, Crop, RotateCw, X, RefreshCw } from "lucide-react";

interface ServiceImageEditorProps {
  imageUrl: string;
  onCancel: () => void;
  onUpload: (file: File) => Promise<void>;
}

export default function ServiceImageEditor({ 
  imageUrl, 
  onCancel, 
  onUpload
}: ServiceImageEditorProps) {
  const [loading, setLoading] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const processCroppedImage = async () => {
    if (!imageRef.current || !canvasRef.current) return;
    
    try {
      setLoading(true);
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas size to match the image's natural dimensions
      canvas.width = imageRef.current.naturalWidth;
      canvas.height = imageRef.current.naturalHeight;
      
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply transformations
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale, scale);
      ctx.drawImage(imageRef.current, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
      
      // Convert canvas to blob
      const blob = await new Promise<Blob | null>((resolve) => 
        canvas.toBlob(resolve, 'image/jpeg', 0.95)
      );
      
      if (!blob) {
        throw new Error('Failed to create image blob');
      }
      
      // Create a file from the blob
      const file = new File([blob], 'service-image.jpg', { type: 'image/jpeg' });
      
      // Upload the processed image
      await onUpload(file);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full max-w-md mx-auto overflow-hidden rounded-md bg-black/5">
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Image preview"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
        {/* Hidden canvas for image processing */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Scale</label>
            <span className="text-sm text-muted-foreground">{scale.toFixed(1)}x</span>
          </div>
          <Slider
            value={[scale]}
            min={0.5}
            max={2}
            step={0.1}
            onValueChange={(values) => setScale(values[0])}
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Rotation</label>
            <span className="text-sm text-muted-foreground">{rotation}°</span>
          </div>
          <Slider
            value={[rotation]}
            min={-180}
            max={180}
            step={5}
            onValueChange={(values) => setRotation(values[0])}
          />
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button 
          type="button" 
          onClick={processCroppedImage}
          disabled={loading}
        >
          {loading ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Crop className="h-4 w-4 mr-2" />
              Process & Upload
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
