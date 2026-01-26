"use client";

import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageIcon, Bold, Italic, Heading1, Heading2, List, ListOrdered, Link as LinkIcon, Code } from 'lucide-react';
import { toast } from 'sonner';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageUpload?: (file: File) => Promise<string | null>;
}

export default function RichTextEditor({ value, onChange, onImageUpload }: RichTextEditorProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  const insertText = (before: string, after: string = '') => {
    const textArea = document.querySelector('textarea');
    if (!textArea) return;
    
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    const newText = value.substring(0, start) + 
                   before + 
                   selectedText + 
                   after + 
                   value.substring(end);
    
    onChange(newText);
    
    // Set cursor position after inserted text
    setTimeout(() => {
      const newPosition = start + before.length + selectedText.length + after.length;
      textArea.focus();
      textArea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };
  
  const applyFormatting = (format: string) => {
    switch (format) {
      case 'bold':
        insertText('**', '**');
        break;
      case 'italic':
        insertText('*', '*');
        break;
      case 'h1':
        insertText('# ');
        break;
      case 'h2':
        insertText('## ');
        break;
      case 'ul':
        insertText('- ');
        break;
      case 'ol':
        insertText('1. ');
        break;
      case 'link':
        insertText('[', '](https://)');
        break;
      case 'code':
        insertText('`', '`');
        break;
      default:
        break;
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setSelectedFile(file);
    
    if (onImageUpload) {
      try {
        const imageUrl = await onImageUpload(file);
        if (imageUrl) {
          insertText(`![${file.name}](${imageUrl})`);
          toast.success('Image uploaded successfully');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Failed to upload image');
      } finally {
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    }
  };
  
  return (
    <div className="border rounded-md">
      <div className="bg-muted p-2 border-b flex flex-wrap gap-1">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('bold')}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('italic')}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('h1')}
          title="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('h2')}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('ul')}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('ol')}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('link')}
          title="Insert Link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => applyFormatting('code')}
          title="Code"
        >
          <Code className="h-4 w-4" />
        </Button>
        
        {onImageUpload && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleUploadClick}
            title="Upload Image"
            disabled={!onImageUpload}
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
        )}
        
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
      
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your content here using markdown..."
        className="min-h-[300px] rounded-t-none border-0 p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      
      <div className="bg-muted p-2 border-t text-xs text-muted-foreground">
        This editor uses Markdown for formatting. You can also directly type Markdown syntax.
      </div>
    </div>
  );
}
