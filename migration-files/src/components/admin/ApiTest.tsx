'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader, Check, X, RefreshCw, Server } from 'lucide-react';

export default function ApiTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  
  const testBackendApi = async () => {
    setIsLoading(true);
    setResults(null);
    
    try {
      // Test basic API connectivity
      const pingResponse = await fetch('/api/health', { 
        cache: 'no-store' 
      });
      const pingResult = await pingResponse.json();
      
      // Test blog API
      const blogResponse = await fetch('/api/blog?t=' + Date.now(), { 
        cache: 'no-store' 
      });
      const blogStatus = blogResponse.ok;
      let blogData = null;
      try {
        blogData = await blogResponse.json();
      } catch (e) {
        console.error('Error parsing blog response:', e);
      }
      
      setResults({
        timestamp: new Date().toISOString(),
        ping: {
          success: pingResponse.ok,
          status: pingResponse.status,
          data: pingResult
        },
        blog: {
          success: blogStatus,
          status: blogResponse.status,
          error: !blogStatus,
          data: blogData
        }
      });
    } catch (error) {
      setResults({
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        failed: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-base">API Connection Test</CardTitle>
            <CardDescription>Verify backend API connectivity</CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={testBackendApi}
            disabled={isLoading}
          >
            {isLoading ? (
              <><Loader className="h-4 w-4 mr-2 animate-spin" /> Testing...</>
            ) : (
              <><RefreshCw className="h-4 w-4 mr-2" /> Test API</>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-3">
        {results ? (
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Backend API:</span>
                </div>
                {results.failed ? (
                  <Badge variant="destructive" className="text-xs">
                    <X className="h-3 w-3 mr-1" /> Failed
                  </Badge>
                ) : results.ping?.success ? (
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-xs">
                    <Check className="h-3 w-3 mr-1" /> Connected
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="text-xs">
                    <X className="h-3 w-3 mr-1" /> Error
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Blog API:</span>
                </div>
                {results.blog?.success ? (
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-xs">
                    <Check className="h-3 w-3 mr-1" /> Connected
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="text-xs">
                    <X className="h-3 w-3 mr-1" /> Error
                  </Badge>
                )}
              </div>
            </div>
            
            {results.error && (
              <div className="text-xs bg-red-50 dark:bg-red-900/20 p-2 rounded-md text-red-700 dark:text-red-300">
                {results.error}
              </div>
            )}
            
            {!results.failed && results.blog?.data?.success && (
              <div className="text-xs text-muted-foreground">
                Found {results.blog.data.posts?.length || 0} blog posts
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-3 text-sm text-muted-foreground">
            {isLoading ? 'Testing API connectivity...' : 'Click "Test API" to verify backend connectivity'}
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground border-t pt-3">
        {results?.timestamp ? `Last tested: ${new Date(results.timestamp).toLocaleTimeString()}` : 'Not tested yet'}
      </CardFooter>
    </Card>
  );
}
