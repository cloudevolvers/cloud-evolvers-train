"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Search, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface ImageSearchPanelProps {
  onSelect: (imageUrl: string, imageName: string) => void;
  defaultQuery?: string;
  defaultProvider?: string;
  showLocalResults?: boolean;
  maxHeight?: string;
  className?: string;
  serviceId?: string;
}

export default function ImageSearchPanel({
  onSelect,
  defaultQuery = '',
  defaultProvider = 'all',
  showLocalResults = true,
  maxHeight = '400px',
  className = '',
  serviceId
}: ImageSearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState(defaultQuery);
  const [provider, setProvider] = useState(defaultProvider);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [recentImages, setRecentImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingRecent, setLoadingRecent] = useState(false);

  useEffect(() => {
    if (showLocalResults) {
      loadRecentImages();
    }
  }, [showLocalResults]);

  // Load recent images
  const loadRecentImages = async () => {
    try {
      setLoadingRecent(true);
      const response = await fetch("/api/images/blog");
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setRecentImages(data.slice(0, 8)); // Limit to 8 recent images
        }
      }
    } catch (error) {
      console.error("Failed to load recent images:", error);
    } finally {
      setLoadingRecent(false);
    }
  };

  // Handle image search
  const handleSearchImages = async () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    try {
      setLoading(true);
      setSearchResults([]);

      const response = await fetch(
        `/api/images/search/${provider}?query=${encodeURIComponent(searchQuery)}`
      );

      if (!response.ok) {
        throw new Error("Failed to search images");
      }

      const data = await response.json();
      setSearchResults(data.images || []);

      if ((data.images || []).length === 0) {
        toast.info("No images found for your search");
      }
    } catch (error) {
      console.error("Error searching images:", error);
      toast.error("Failed to search images");
    } finally {
      setLoading(false);
    }
  };

  // Handle selecting an image
  const handleSelectImage = (imageUrl: string, imageName: string) => {
    onSelect(imageUrl, imageName);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearchImages();
            }}
          />
        </div>

        <Select value={provider} onValueChange={setProvider}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="unsplash">Unsplash</SelectItem>
            <SelectItem value="pexels">Pexels</SelectItem>
            <SelectItem value="pixabay">Pixabay</SelectItem>
            <SelectItem value="local">Local Only</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleSearchImages} disabled={loading || !searchQuery.trim()}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
          Search
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
        </div>
      ) : searchResults.length > 0 ? (
        <>
          <h3 className="text-sm font-medium">Search Results</h3>
          <ScrollArea className={`max-h-[${maxHeight}]`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {searchResults.map((image, index) => (
                <Card
                  key={`search-${index}`}
                  className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
                  onClick={() => handleSelectImage(image.url, image.name)}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={image.thumbnail || image.url}
                      alt={image.name || "Search result"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1">
                      {image.source}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </>
      ) : searchQuery ? (
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground">No results found. Try a different search term.</p>
        </div>
      ) : showLocalResults && recentImages.length > 0 ? (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Recent Images</h3>
            <Button variant="ghost" size="sm" onClick={loadRecentImages} disabled={loadingRecent}>
              <RefreshCw className={`h-3 w-3 mr-1 ${loadingRecent ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {recentImages.map((image, index) => (
              <Card
                key={`recent-${index}`}
                className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
                onClick={() => handleSelectImage(image.url, image.name)}
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.url}
                    alt={image.name || "Recent image"}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-1">
                  <p className="text-xs truncate">{image.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground">
            Search for images or select from your library
          </p>
        </div>
      )}
    </div>
  );
}
