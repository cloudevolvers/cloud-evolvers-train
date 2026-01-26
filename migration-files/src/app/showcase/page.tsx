  "use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ShowcaseItem, getShowcaseItems, getShowcaseImageUrl } from '@/lib/showcase-client';
import ShowcaseIcon from '@/components/ui/showcase-icon';

// Extended type for showcase items with coming soon items
type ExtendedShowcaseItem = ShowcaseItem & { isComingSoon?: boolean };

// Function to get category color
function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'administration': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'platform': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'file-management': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'development': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'user-experience': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'default': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  };
  return colors[category] || colors.default;
}

// Function to normalize image path for showcase items
function normalizeShowcaseImagePath(imagePath: string): string {
  return getShowcaseImageUrl(imagePath);
}

export default function ShowcasePage() {
  const [items, setItems] = useState<ShowcaseItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShowcaseItems() {
      try {
        setLoading(true);
        const showcaseItems = await getShowcaseItems();
        setItems(showcaseItems);
        
        // Extract unique categories
        const uniqueCategories = ['all', ...Array.from(new Set(
          showcaseItems.map(item => item.category).filter(Boolean)
        ))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error loading showcase:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchShowcaseItems();
  }, []);

  // Filter items by active category
  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3">Our Showcase</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our featured projects and solutions that demonstrate our expertise and capabilities.
        </p>
      </div>

      {/* Category tabs */}
      {categories.length > 1 && (
        <div className="flex justify-center mb-8">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="mb-4 overflow-auto flex-wrap">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}

      {loading ? (
        // Loading state
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="border rounded-lg p-6 animate-pulse">
              <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>
              <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-4/6"></div>
            </div>
          ))}
        </div>
      ) : filteredItems.length === 0 ? (
        // No items found
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <p className="text-xl font-medium mb-2">No showcase items found</p>
          <p className="text-muted-foreground mb-4">
            {activeCategory !== 'all' 
              ? `No items in the "${activeCategory}" category` 
              : "No showcase items available"}
          </p>
        </div>
      ) : (
        // Display showcase items with auto-scaling grid
        (() => {
          // Limit to max 10 items and determine grid layout
          const maxItems = 10;
          const actualItems = filteredItems.slice(0, maxItems);
          const totalSlots = Math.min(maxItems, Math.max(actualItems.length, 6)); // Show at least 6 slots, max 10
          
          // Auto-scale grid based on total items (simplified)
          let gridCols = "grid-cols-1";
          if (actualItems.length === 1) {
            gridCols = "grid-cols-1 max-w-md mx-auto";
          } else if (actualItems.length <= 4) {
            gridCols = "grid-cols-1 md:grid-cols-2";
          } else {
            gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
          }

          // Don't show coming soon slots if we only have real projects
          const comingSoonSlots: ExtendedShowcaseItem[] = actualItems.length === 0 ? Array(3).fill(null).map((_, index) => ({
            id: `coming-soon-${index}`,
            title: 'Coming Soon',
            description: 'New showcase project will be featured here soon.',
            image: '',
            category: '',
            isComingSoon: true
          })) : [];

          const allSlots: ExtendedShowcaseItem[] = [...actualItems, ...comingSoonSlots];

          return (
            <div className={`grid ${gridCols} gap-6 md:gap-8`}>
              {allSlots.map((item) => (
                <Card key={item.id} className={`overflow-hidden flex flex-col ${item.isComingSoon ? 'opacity-60 cursor-default border-dashed' : 'hover:shadow-lg transition-shadow'}`}>
                  <div className="relative h-56 w-full">
                    {item.isComingSoon ? (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                            <div className="text-gray-500 text-2xl">?</div>
                          </div>
                          <p className="text-gray-500 text-sm">Coming Soon</p>
                        </div>
                      </div>
                    ) : (
                      <div 
                        className="w-full h-full flex flex-col items-center justify-center text-white"
                        style={{ background: getCategoryColor(item.category) }}
                      >
                        <div className="mb-3">
                          <ShowcaseIcon icon={item.icon} className="text-white" size={48} />
                        </div>
                        <h4 className="text-sm font-medium text-center px-2">
                          {item.title}
                        </h4>
                        {item.category && (
                          <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30">
                            {item.category}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="flex-grow flex flex-col pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      {!item.isComingSoon && item.icon && (
                        <div className="flex-shrink-0">
                          <ShowcaseIcon icon={item.icon} className="text-blue-500" size={24} />
                        </div>
                      )}
                      <h3 className={`text-lg font-semibold ${item.isComingSoon ? 'text-gray-500' : ''}`}>
                        {item.title}
                      </h3>
                    </div>
                    {/* Check if features exists before mapping */}
                    {!item.isComingSoon && 'features' in item && Array.isArray(item.features) && item.features.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {item.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className={`text-muted-foreground mb-4 ${item.isComingSoon ? 'text-gray-400' : ''}`}>
                      {item.description}
                    </p>
                    
                    {/* Display tags if available */}
                    {!item.isComingSoon && 'tags' in item && item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                        {item.tags.map((tag, i) => (
                          <Badge key={i} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  
                  {!item.isComingSoon && 'url' in item && item.url && (
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={item.url}>
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  )}
                  
                  {item.isComingSoon && (
                    <CardFooter className="pt-0">
                      <div className="w-full text-center text-gray-400 text-sm py-2 bg-gray-50/50 rounded border-t border-gray-200">
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                          Project in development
                        </span>
                      </div>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          );
        })()
      )}
    </div>
  );
}