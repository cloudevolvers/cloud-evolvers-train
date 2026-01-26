"use client"; // Add 'use client' because we are using hooks (useState, useEffect)

import { ExternalLink, Zap, Loader2, ArrowRight, Star, PackageOpen, FileText, Monitor, Cloud, Shield, Database, Settings } from 'lucide-react'; // Added more icons
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import { Button } from '@/components/ui/button';
import { getShowcaseImageUrl, ShowcaseItem } from '@/lib/showcase-client';
import { getTranslations } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

// Fetch showcase items from the API
async function fetchShowcaseItems(limit: number, lang: string = 'en'): Promise<ShowcaseItem[]> {
  try {
    console.log(`[fetchShowcaseItems] Fetching ${limit} items for language: ${lang}`);
    const response = await fetch(`/api/showcase?limit=${limit}&lang=${lang}`, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    
    if (!response.ok) {
      console.error(`[fetchShowcaseItems] HTTP ${response.status}: ${response.statusText}`);
      throw new Error(`Failed to fetch showcase items: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`[fetchShowcaseItems] Successfully fetched ${Array.isArray(data) ? data.length : 0} items for ${lang}`);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`[fetchShowcaseItems] Error fetching showcase items for ${lang}:`, error);
    return [];
  }
}

// Fallback items in case the fetch fails
function getFallbackItems(): ShowcaseItem[] {
  return [
    {
      id: 'fallback-1',
      title: 'Azure Cost Optimization Dashboard',
      description: 'Interactive dashboard for tracking and reducing Azure spending',
      image: '/images/showcase/cost-dashboard.jpg',
      category: 'Dashboard',
      url: '/services/cost-optimization'
    },
    {
      id: 'fallback-2',
      title: 'Secure File Transfer Portal',
      description: 'Enterprise solution for secure file sharing and collaboration',
      image: '/images/showcase/file-transfer.jpg',
      category: 'Solution',
      url: '/services/file-transfer'
    },
    {
      id: 'fallback-3',
      title: 'Real-time VM Performance Monitoring',
      description: 'Advanced metrics and alerts for Azure virtual machines',
      image: '/images/showcase/vm-monitoring.jpg',
      category: 'Monitoring',
      url: '/services/azure-monitoring'
    }
  ];
}

// Function to safely get an image URL with fallback
function getSafeImageUrl(image: string | undefined): string { // Allow undefined image
  try {
    if (!image) return '/images/showcase/default.jpg';
    return getShowcaseImageUrl(image);
  } catch (error) {
    console.error('[HomeShowcase] Error getting image URL:', error);
    return '/images/showcase/default.jpg';
  }
}

// Function to get category-specific icons
function getCategoryIcon(category: string) {
  const iconMap: Record<string, React.ReactNode> = {
    'File Management': <FileText className="h-full w-full text-blue-400" />,
    'Cloud Storage': <Cloud className="h-full w-full text-blue-400" />,
    'Dashboard': <Monitor className="h-full w-full text-blue-400" />,
    'Solution': <Settings className="h-full w-full text-blue-400" />,
    'Monitoring': <Zap className="h-full w-full text-blue-400" />,
    'Security': <Shield className="h-full w-full text-blue-400" />,
    'Database': <Database className="h-full w-full text-blue-400" />,
    'default': <PackageOpen className="h-full w-full text-blue-400" />
  };
  
  return iconMap[category] || iconMap['default'];
}

// Remove 'async' from the component definition
export function HomeShowcaseSection() {
  // Add state for items, loading, and error
  const [showcaseItems, setShowcaseItems] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use the language context
  const { language: lang, isClient } = useLanguage();
  const t = getTranslations(isClient ? lang : 'en');

  // Move data fetching logic into useEffect
  useEffect(() => {    async function loadShowcaseSummaryInternal() { // Renamed to avoid conflict
      setLoading(true);
      setError(null);
      console.log('[HomeShowcase] Fetching showcase items...');
      try {
        // Create a promise that rejects after 8 seconds to allow more time for Dutch content
        const timeoutPromise = new Promise<ShowcaseItem[]>((_, reject) => {
          setTimeout(() => reject(new Error('Showcase fetch timeout')), 8000);
        });

        // Fetch data with the actual function, passing current language
        const fetchPromise = fetchShowcaseItems(10, isClient ? lang : 'nl').then(items => {
          console.log(`[HomeShowcase] Fetched ${items.length} items for language: ${isClient ? lang : 'nl'}`);
          // If there are no items, return an empty array (handled later)
          if (!items || items.length === 0) {
            console.log('[HomeShowcase] No items found.');
            return []; // Return empty array, not fallback
          }
          // Sort items by creation date, but don't limit here - let the UI handle it
          const sortedItems = items.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
          return sortedItems;
        });

        // Race the fetch against the timeout
        const loadedItems = await Promise.race([fetchPromise, timeoutPromise]);
        setShowcaseItems(loadedItems);
      } catch (err: any) {
        console.error('[HomeShowcase] Failed to load showcase items:', err);
        setError(err.message || 'Failed to load showcase items.');
        // Only use fallback items on actual error
        setShowcaseItems(getFallbackItems());
      } finally {
        setLoading(false);
      }
    }

    loadShowcaseSummaryInternal();
  }, [lang, isClient]); // Re-run when language changes

  return (
    <div className="showcase-compact flex flex-col h-full">
      <div className="flex justify-between items-center mb-2 sm:mb-3 flex-shrink-0">
        <h2 className="text-lg sm:text-xl 4xl:text-2xl 5xl:text-3xl font-bold flex items-center gap-2">
          <Star className="h-4 w-4 sm:h-5 sm:w-5 4xl:h-6 4xl:w-6 5xl:h-7 5xl:w-7 text-blue-500" />
          {t.showcase.title}
          {/* Show count when there are items */}
          {!loading && !error && showcaseItems.length > 0 && (
            <Badge variant="outline" className="text-xs ml-2 bg-blue-500/10 border-blue-500/30">
              {showcaseItems.length > 3 ? `${Math.min(3, showcaseItems.length)} of ${showcaseItems.length}` : showcaseItems.length}
            </Badge>
          )}
        </h2>
        <Link href="/showcase"> 
          <Button variant="link" size="sm" className="text-xs px-1 h-auto py-0 text-blue-400 hover:text-blue-300">
            {t.showcase.viewAll} <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </Link>
      </div>

      {/* Content area that grows to fill available space */}
      <div className="flex-1 flex flex-col justify-center min-h-0">

      {/* Handle loading state */}
      {loading ? (
        <div className="flex justify-center items-center flex-1 bg-blue-950/30 rounded-lg border border-blue-500/20">        <div className="text-center p-6">
          <Loader2 className="h-8 w-8 4xl:h-10 4xl:w-10 text-blue-400 mx-auto mb-2 animate-spin" />
          <p className="text-muted-foreground">{t.showcase.loading}</p>
        </div>
        </div>
      // Handle error state - still show fallback items here
      ) : error ? (
         <div className="flex justify-center items-center flex-1 bg-red-950/30 rounded-lg border border-red-500/20">
          <div className="text-center p-6 text-red-400">
            <p>{t.showcase.error}: {error}</p>
            <p className="text-sm text-muted-foreground mt-1">{t.showcase.displayingFallback}</p>
             {/* Render fallback items directly here */}
             <div className="space-y-3 4xl:space-y-4 mt-4">
              {showcaseItems.map((item) => ( // showcaseItems should contain fallback items now
                <Link key={item.id} href={item.url || `/showcase#${item.id}`} target={item.url ? "_blank" : "_self"} rel={item.url ? "noopener noreferrer" : ""}>
                  <div className="group bg-blue-950/30 hover:bg-blue-900/40 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 shadow-md hover:shadow-lg">
                    <div className="flex items-center gap-4 p-3">
                      {/* Larger image to match blog post image size */}
                      <div className="relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-md border border-blue-500/30 shadow-sm">
                        <Image
                          src={getSafeImageUrl(item.image)}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="144px"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
                          quality={70}
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex gap-2 items-center mb-1">
                          <h3 className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          {item.category && (
                            <Badge variant="secondary" className="text-xs px-1.5 h-5">
                              {item.category}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                        {/* Add a small view details button to match blog layout */}
                        <div className="mt-1.5 flex justify-end">
                          <Button variant="ghost" size="sm" className="text-xs h-6 px-2 py-0">
                            {t.showcase.viewDetails} <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      // Handle no items found state (after loading and no error)
      ) : showcaseItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center flex-1 bg-blue-950/30 rounded-lg border border-blue-500/20">
          <div className="text-center p-6">
            <PackageOpen className="h-10 w-10 4xl:h-12 4xl:w-12 text-blue-400 mx-auto mb-3" />
            <p className="font-medium text-blue-300">{t.showcase.comingSoon}</p>
            <p className="text-sm text-muted-foreground mt-1">{t.showcase.checkBackLater}</p>
          </div>
        </div>
      // Render items if loaded successfully and not empty
      ) : (
        (() => {
          // Determine how many items to show and layout based on available items
          const itemCount = showcaseItems.length;
          let displayItems = showcaseItems;
          let layoutClass = "space-y-3 4xl:space-y-4"; // Default vertical layout
          
          // For 1-2 items: show all items vertically
          if (itemCount <= 2) {
            displayItems = showcaseItems;
            layoutClass = "space-y-3 4xl:space-y-4";
          }
          // For 3-4 items: show first 3 items vertically (classic layout)
          else if (itemCount <= 4) {
            displayItems = showcaseItems.slice(0, 3);
            layoutClass = "space-y-3 4xl:space-y-4";
          }
          // For 5+ items: show first 4 items in a compact 2x2 grid layout
          else {
            displayItems = showcaseItems.slice(0, 4);
            layoutClass = "grid grid-cols-1 sm:grid-cols-2 gap-2 4xl:gap-3";
          }

          return (
            <div className={`flex-1 ${layoutClass}`}>
              {displayItems.map((item) => (
                <Link key={item.id} href={item.url || `/showcase#${item.id}`} target={item.url ? "_blank" : "_self"} rel={item.url ? "noopener noreferrer" : ""}>
                  <div className={`group bg-blue-950/30 hover:bg-blue-900/40 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 shadow-md hover:shadow-lg ${
                    displayItems.length > 3 ? 'p-2 4xl:p-3' : 'p-3 4xl:p-4'
                  }`}>
                    <div className={`flex items-center gap-3 4xl:gap-4 ${displayItems.length > 3 ? 'flex-col sm:flex-row' : ''}`}>
                      {/* Adaptive image size with icon fallback */}
                      <div className={`relative flex-shrink-0 overflow-hidden rounded-md border border-blue-500/30 shadow-sm bg-blue-950/50 flex items-center justify-center ${
                        displayItems.length > 3 
                          ? 'h-16 w-full sm:h-20 sm:w-28 4xl:h-24 4xl:w-32' 
                          : 'h-24 w-36 4xl:h-28 4xl:w-40'
                      }`}>
                        {/* Always show icon as background */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <div className="w-8 h-8 lg:w-10 lg:h-10">
                            {getCategoryIcon(item.category)}
                          </div>
                        </div>
                        {/* Image overlay (will be transparent if working, icon shows through if not) */}
                        <Image
                          src={getSafeImageUrl(item.image)}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110 relative z-10"
                          sizes={displayItems.length > 3 ? "120px" : "160px"}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
                          quality={70}
                          onError={(e) => {
                            // Hide the broken image so icon shows through
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex gap-2 items-center mb-1">
                          <h3 className={`font-medium group-hover:text-blue-400 transition-colors ${
                            displayItems.length > 3 ? 'text-xs sm:text-sm 4xl:text-base' : 'text-sm 4xl:text-base'
                          }`}>
                            {item.title}
                          </h3>
                          {item.category && displayItems.length <= 3 && (
                            <Badge variant="secondary" className="text-xs 4xl:text-sm px-1.5 h-5 4xl:h-6">
                              {item.category}
                            </Badge>
                          )}
                        </div>
                        <p className={`text-muted-foreground line-clamp-2 ${
                          displayItems.length > 3 ? 'text-xs 4xl:text-sm' : 'text-xs 4xl:text-sm'
                        }`}>
                          {item.description}
                        </p>
                        {/* Add category as text for compact layout */}
                        {item.category && displayItems.length > 3 && (
                          <p className="text-xs 4xl:text-sm text-blue-400 mt-1">{item.category}</p>
                        )}
                        {/* View details button only for larger layouts */}
                        {displayItems.length <= 3 && (
                          <div className="mt-1.5 flex justify-end">
                            <Button variant="ghost" size="sm" className="text-xs 4xl:text-sm h-6 4xl:h-7 px-2 py-0">
                              {t.showcase.viewDetails} <ArrowRight className="h-3 w-3 4xl:h-4 4xl:w-4 ml-1" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          );
        })()
      )}
      </div>
    </div>
  );
}