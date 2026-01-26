import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MagnifyingGlass, Image as ImageIcon, ArrowSquareOut } from "@phosphor-icons/react";

interface ImageResult {
  id: string;
  url: string;
  thumbnail: string;
  alt: string;
  width: number;
  height: number;
  author: string;
  authorUrl?: string;
  sourceUrl?: string;
  provider: string;
}

interface ImageSearchResponse {
  query: string;
  provider: string;
  total: number;
  results: ImageResult[];
  providers: Array<{
    provider: string;
    total: number;
    totalPages: number;
  }>;
}

export function ImageAPITester() {
  const [query, setQuery] = useState('cloud computing training');
  const [provider, setProvider] = useState('all');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ImageResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const searchImages = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const searchParams = new URLSearchParams({
        query: query.trim(),
        provider,
        per_page: '12'
      });
      
      const response = await fetch(`/api/images?${searchParams}`);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      const data: ImageSearchResponse = await response.json();
      setResults(data.results || []);
      
    } catch (err) {
      console.error('Search error:', err);
      setError(err instanceof Error ? err.message : 'Failed to search images');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = async (image: ImageResult) => {
    setDownloading(image.id);
    
    try {
      const filename = `${image.alt.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${image.id}`;
      
      const response = await fetch('/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: image.url,
          filename,
          metadata: {
            provider: image.provider,
            author: image.author,
            sourceUrl: image.sourceUrl,
            originalAlt: image.alt
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`Download failed: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Download successful:', result);
      alert(`✅ Downloaded successfully to: ${result.publicPath}`);
      
    } catch (err) {
      console.error('Download error:', err);
      alert(`❌ Download failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="w-6 h-6" />
            Image API Tester
          </CardTitle>
          <CardDescription>
            Test the Cloud Evolvers Image API for searching and downloading professional images
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium">Search Query</label>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., cloud computing training, business team, technology"
                onKeyPress={(e) => e.key === 'Enter' && searchImages()}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-32 px-3 py-2 border rounded-md"
              >
                <option value="all">All</option>
                <option value="unsplash">Unsplash</option>
                <option value="pexels">Pexels</option>
                <option value="pixabay">Pixabay</option>
              </select>
            </div>
            <Button onClick={searchImages} disabled={loading}>
              <MagnifyingGlass className="w-4 h-4 mr-2" />
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </div>
          
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
              <strong>Error:</strong> {error}
            </div>
          )}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Search Results ({results.length})</CardTitle>
            <CardDescription>
              Click download to save images to public/images directory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((image) => (
                <div key={image.id} className="border rounded-lg overflow-hidden bg-white">
                  <div className="aspect-video relative">
                    <img
                      src={image.thumbnail}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <Badge 
                      className="absolute top-2 right-2"
                      variant={image.provider === 'unsplash' ? 'default' : 'secondary'}
                    >
                      {image.provider}
                    </Badge>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-sm font-medium line-clamp-2">{image.alt}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {image.width} × {image.height} • by {image.author}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => downloadImage(image)}
                        disabled={downloading === image.id}
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        {downloading === image.id ? 'Downloading...' : 'Download'}
                      </Button>
                      {image.sourceUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(image.sourceUrl, '_blank')}
                        >
                          <ArrowSquareOut className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default ImageAPITester;