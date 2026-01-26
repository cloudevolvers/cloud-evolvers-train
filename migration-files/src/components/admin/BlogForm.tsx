'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BlogPost } from '@/types/blog';
import { Editor } from '@/components/ui/md-editor';
import Image from 'next/image';
import { format } from 'date-fns';
import { PlusCircle, X, ImageIcon, Check, Info, Calendar, Plus, Save } from 'lucide-react';
import { toast } from 'sonner';
import MarkdownIt from 'markdown-it';
import ImagePicker from '@/components/admin/image-picker';
import { v4 as uuidv4 } from "uuid";
import { normalizeBlogImagePath } from '@/lib/blog-image-service';

// Initialize markdown-it
const md = new MarkdownIt();

interface BlogFormProps {
  post: Partial<BlogPost>;
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: Partial<BlogPost>) => void;
  // Fix the return type of onImageSelect to match what's actually returned
  onImageSelect: (imageData: any) => Promise<{success: boolean; url: string; error?: string;} | null>;
  onOpenImagePicker: () => void; // Added this prop for external image picker
  availableCategories: string[];
  onAddCategory: () => void;
}

export default function BlogForm({
  post,
  isOpen,
  onClose,
  onSave,
  onImageSelect,
  onOpenImagePicker,
  availableCategories,
  onAddCategory
}: BlogFormProps) {
  // Form state
  const [title, setTitle] = useState(post.title || '');
  const [content, setContent] = useState(post.content || '');
  const [author, setAuthor] = useState(typeof post.author === 'object' ? post.author.name : post.author || '');
  const [slug, setSlug] = useState(post.slug || '');
  const [excerpt, setExcerpt] = useState(post.excerpt || '');
  const [date, setDate] = useState(post.date || format(new Date(), 'yyyy-MM-dd'));
  const [category, setCategory] = useState(post.category || '');
  const [tags, setTags] = useState<string[]>(post.tags || []);
  const [image, setImage] = useState<string>(post.image || '');
  const [currentTag, setCurrentTag] = useState('');
  const [activeTab, setActiveTab] = useState('edit');
  const [isGeneratingSlug, setIsGeneratingSlug] = useState(false);
  const [activeImageTab, setActiveImageTab] = useState('upload');

  // Image upload state
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Add validation state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle slug generation based on title
  useEffect(() => {
    if (!slug && title && !isGeneratingSlug) {
      setIsGeneratingSlug(true);
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      setSlug(generatedSlug);
      setIsGeneratingSlug(false);
    }
  }, [title, slug, isGeneratingSlug]);

  // Reset form when post changes (e.g., when editing a different post)
  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setContent(post.content || '');
      setAuthor(typeof post.author === 'object' ? post.author.name : post.author || '');
      setSlug(post.slug || '');
      setExcerpt(post.excerpt || '');
      setDate(post.date || format(new Date(), 'yyyy-MM-dd'));
      setCategory(post.category || '');
      setTags(post.tags || []);
      setImage(post.image || '');
      setActiveTab('edit');
    }
  }, [post]);

  // Handle tag addition
  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  // Handle tag removal
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // Handle image upload with fixed typing
  const handleImageUpload = async () => {
    if (!selectedImage) return null;

    try {
      setIsUploading(true);
      const result = await onImageSelect(selectedImage);
      
      // Check result is not null before accessing properties
      if (result && result.success && result.url) {
        setImage(result.url);
        toast.success('Image uploaded successfully');
        setSelectedImage(null);
        return result;
      } else {
        // Handle the error properly with optional chaining
        toast.error(result?.error || 'Failed to upload image');
        return null;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  // Function to handle selecting an image from the image picker
  const handlePickImage = (imageData: any) => {
    setImage(imageData.url);
    toast.success('Image selected successfully');
    setSelectedImage(null); // Clear any upload in progress
  };

  // Handle category selection or addition of new category
  const handleCategoryChange = (value: string) => {
    // Special handling for "add new" option
    if (value === "add_new") {
      if (onAddCategory) {
        onAddCategory();
      }
    } else {
      setCategory(value);
    }
  };

  // Add validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Check required fields
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    
    if (!content.trim()) {
      newErrors.content = "Content is required";
    }
    
    if (!author.trim()) {
      newErrors.author = "Author is required";
    }
    
    if (!slug.trim()) {
      newErrors.slug = "Slug is required";
    }
    
    // Update the errors state
    setErrors(newErrors);
    
    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before saving
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    if (!title) {
      toast.error('Title is required');
      return;
    }
    
    const updatedPost: Partial<BlogPost> = {
      ...post,
      title,
      content,
      author: { name: author, title: 'Content Writer' },
      slug,
      excerpt,
      date,
      category,
      tags,
      image,
    };

    // Normalize the image path before saving
    if (updatedPost.image) {
      updatedPost.image = normalizeBlogImagePath(updatedPost.image);
      
      // Extract just the filename if it's an API path
      if (updatedPost.image.startsWith('/api/images/blog/')) {
        const parts = updatedPost.image.split('/');
        updatedPost.image = parts[parts.length - 1];
      }
    }
    
    console.log('Saving blog post with data:', updatedPost);
    onSave(updatedPost);
  };

  // Handle showing the image picker
  const handleShowImagePicker = () => {
    onOpenImagePicker();
  };

  // The component must return JSX
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader>
          <DialogTitle>{post.id ? "Edit" : "Create"} Blog Post</DialogTitle>
        </DialogHeader>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs defaultValue="edit" className="flex-1 flex flex-col">
            <div className="border-b px-6 py-2 flex-shrink-0">
              <TabsList>
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="flex-1 overflow-auto">
              <TabsContent value="edit" className="flex-1 data-[state=active]:flex flex-col h-full">
                <ScrollArea className="flex-1 px-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 180px)" }}>
                  <div className="space-y-6 py-4 min-h-full">
                    {/* Main Info Section */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input 
                          id="title" 
                          value={title} 
                          onChange={(e) => setTitle(e.target.value)} 
                          placeholder="Enter post title"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="slug">URL Slug</Label>
                          <Input 
                            id="slug" 
                            value={slug} 
                            onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^\w-]+/g, '-'))} 
                            placeholder="url-friendly-slug"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="date">Publication Date</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="date" 
                              type="date"
                              value={date} 
                              onChange={(e) => setDate(e.target.value)}
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="author">Author</Label>
                          <Input 
                            id="author" 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)} 
                            placeholder="Author name"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <div className="flex gap-2">
                            <Select value={category} onValueChange={handleCategoryChange}>
                              <SelectTrigger id="category" className="flex-1">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {availableCategories.map((cat) => (
                                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                ))}
                                <SelectItem value="add_new" className="text-primary">
                                  + Add new category
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            {onAddCategory && (
                              <Button variant="outline" size="icon" onClick={onAddCategory} title="Add new category">
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea 
                          id="excerpt" 
                          value={excerpt} 
                          onChange={(e) => setExcerpt(e.target.value)} 
                          placeholder="Brief summary of the post (displayed in previews)"
                          rows={2}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="tags" className="flex items-center gap-1">
                          Tags
                          <Info className="h-3 w-3 text-muted-foreground cursor-help" aria-label="Press Enter to add a tag" />
                        </Label>
                        <div className="flex gap-2 items-center">
                          <Input 
                            id="tags" 
                            value={currentTag} 
                            onChange={(e) => setCurrentTag(e.target.value)} 
                            placeholder="Enter tags and press Enter"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddTag();
                              }
                            }}
                            className="flex-1"
                          />
                          <Button type="button" variant="outline" onClick={handleAddTag}>
                            Add
                          </Button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-2">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="px-2 py-1 gap-1">
                              {tag}
                              <button 
                                onClick={() => handleRemoveTag(tag)}
                                className="ml-1 rounded-full"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Image Section */}
                    <div>
                      <Label className="mb-2 block">Featured Image</Label>
                      <div className="border rounded-md p-4">
                        {image ? (
                          <div className="space-y-2">
                            <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden">
                              <Image
                                src={image}
                                alt="Blog featured image"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 800px"
                              />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs truncate text-muted-foreground">
                                {image}
                              </span>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setImage('')}
                              >
                                <X className="h-4 w-4 mr-2" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <Tabs defaultValue="upload" className="w-full">
                              <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="upload">Upload New</TabsTrigger>
                                <TabsTrigger value="pick">Select Existing</TabsTrigger>
                              </TabsList>
                              
                              {/* Upload tab */}
                              <TabsContent value="upload">
                                <div className="space-y-4">
                                  {selectedImage ? (
                                    <div className="space-y-2">
                                      <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden">
                                        <Image
                                          src={URL.createObjectURL(selectedImage)}
                                          alt="Preview"
                                          fill
                                          className="object-cover"
                                          sizes="(max-width: 768px) 100vw, 800px"
                                        />
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-sm truncate">
                                          {selectedImage.name}
                                        </span>
                                        <div className="flex gap-2">
                                          <Button 
                                            variant="outline" 
                                            size="sm" 
                                            onClick={() => setSelectedImage(null)}
                                          >
                                            <X className="h-4 w-4 mr-2" />
                                            Cancel
                                          </Button>
                                          <Button 
                                            size="sm"
                                            onClick={handleImageUpload}
                                            disabled={isUploading}
                                          >
                                            {isUploading ? (
                                              <>Loading...</>
                                            ) : (
                                              <>
                                                <Check className="h-4 w-4 mr-2" />
                                                Use Image
                                              </>
                                            )}
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="border-dashed border-2 border-muted-foreground/20 rounded-lg p-12 text-center">
                                      <div className="mb-4 flex flex-col items-center">
                                        <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                                        <p className="text-muted-foreground mb-4">
                                          Select an image to upload for your blog post
                                        </p>
                                        <Input 
                                          type="file" 
                                          accept="image/*" 
                                          onChange={handleImageChange}
                                          className="max-w-xs mx-auto"
                                        />
                                      </div>
                                      <p className="text-xs text-muted-foreground mt-2">
                                        Recommended size: 1200×630 pixels
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </TabsContent>
                              
                              {/* Pick existing image tab */}
                              <TabsContent value="pick">
                                <div className="space-y-4">
                                  <Button 
                                    onClick={onOpenImagePicker}
                                    className="w-full py-8 flex flex-col items-center justify-center"
                                    variant="outline"
                                  >
                                    <ImageIcon className="h-8 w-8 mb-2 text-muted-foreground" />
                                    <span>Browse Image Library</span>
                                  </Button>
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Content Editor */}
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Write your blog post content using Markdown syntax
                      </p>
                      <div className="border rounded-md">
                        <Editor 
                          value={content}
                          onChange={setContent}
                          className="min-h-[400px] max-h-none overflow-y-auto"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="preview" className="mt-0 border-0 p-6">
                <ScrollArea className="h-[600px] overflow-auto">
                  <div className="max-w-3xl mx-auto">
                    <div className="prose dark:prose-invert w-full max-w-none">
                      <h1>{title || 'Untitled Post'}</h1>
                      
                      {image && (
                        <div className="relative aspect-video w-full my-4">
                          <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mb-6">
                        {date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {date}
                          </span>
                        )}
                        
                        {author && (
                          <span className="flex items-center gap-1">
                            <span>•</span>
                            {author}
                          </span>
                        )}
                        
                        {category && (
                          <Badge variant="outline">{category}</Badge>
                        )}
                      </div>
                      
                      {excerpt && (
                        <div className="bg-muted p-4 rounded-lg mb-6 italic">
                          {excerpt}
                        </div>
                      )}
                      
                      <div className="mt-8" dangerouslySetInnerHTML={{ 
                        __html: content 
                          ? md.render(content)
                          : '<p>No content yet...</p>'
                      }} />

                      {tags.length > 0 && (
                        <div className="mt-8 pt-4 border-t">
                          <h3>Tags</h3>
                          <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        <DialogFooter className="px-6 py-4 border-t">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>
            {post.id ? 'Update Post' : 'Create Post'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
