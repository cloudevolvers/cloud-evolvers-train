"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

interface UploadFile {
  file: File;
  preview: string;
  name: string;
  section: string;
  makePublic: boolean;
}

export default function UploadPage() {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadFile[] = [];
    
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      
      if (!file.type.startsWith('image/')) {
        toast.error(`${file.name} is not an image file`);
        continue;
      }

      const preview = URL.createObjectURL(file);
      newFiles.push({
        file,
        preview,
        name: file.name.split('.')[0],
        section: 'general',
        makePublic: false
      });
    }

    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const updateFile = (index: number, updates: Partial<UploadFile>) => {
    setFiles(prev => {
      const newFiles = [...prev];
      newFiles[index] = { ...newFiles[index], ...updates };
      return newFiles;
    });
  };

  const uploadFiles = async () => {
    if (files.length === 0) {
      toast.error('Please select files to upload');
      return;
    }

    setUploading(true);
    let successCount = 0;
    let errorCount = 0;

    for (const uploadFile of files) {
      try {
        const formData = new FormData();
        formData.append('image', uploadFile.file);
        formData.append('name', uploadFile.name);
        formData.append('section', uploadFile.section);
        formData.append('public', uploadFile.makePublic.toString());

        const response = await fetch('/api/admin/images/upload', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          successCount++;
        } else {
          errorCount++;
          const error = await response.text();
          console.error(`Failed to upload ${uploadFile.name}:`, error);
        }
      } catch (error) {
        errorCount++;
        console.error(`Error uploading ${uploadFile.name}:`, error);
      }
    }

    setUploading(false);

    if (successCount > 0) {
      toast.success(`Successfully uploaded ${successCount} file(s)`);
    }
    if (errorCount > 0) {
      toast.error(`Failed to upload ${errorCount} file(s)`);
    }

    if (successCount === files.length) {
      // Clear files if all uploaded successfully
      files.forEach(f => URL.revokeObjectURL(f.preview));
      setFiles([]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Upload Images</h1>
          <p className="text-muted-foreground">Upload new images to your website</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/admin">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      {/* File Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle>Select Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFileSelect(e.dataTransfer.files);
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleFileSelect(e.target.files)}
              className="hidden"
            />
            <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Drop images here or click to browse</p>
            <p className="text-sm text-muted-foreground">
              Supports JPG, PNG, GIF, WebP
            </p>
          </div>
        </CardContent>
      </Card>

      {/* File List */}
      {files.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Selected Files ({files.length})</CardTitle>
            <Button onClick={uploadFiles} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload All'}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {files.map((uploadFile, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                  {/* Preview */}
                  <div className="relative w-20 h-20 rounded border overflow-hidden flex-shrink-0">
                    <Image
                      src={uploadFile.preview}
                      alt={uploadFile.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* File Details */}
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <Label htmlFor={`name-${index}`}>Image Name</Label>
                        <Input
                          id={`name-${index}`}
                          value={uploadFile.name}
                          onChange={(e) => updateFile(index, { name: e.target.value })}
                          placeholder="Enter image name"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`section-${index}`}>Section</Label>
                        <Select
                          value={uploadFile.section}
                          onValueChange={(value) => updateFile(index, { section: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="blog">Blog</SelectItem>
                            <SelectItem value="showcase">Showcase</SelectItem>
                            <SelectItem value="hero">Hero Images</SelectItem>
                            <SelectItem value="training">Training</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center space-x-2 pt-6">
                        <Checkbox
                          id={`public-${index}`}
                          checked={uploadFile.makePublic}
                          onCheckedChange={(checked) => updateFile(index, { makePublic: checked as boolean })}
                        />
                        <Label htmlFor={`public-${index}`} className="text-sm">
                          Make public
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
