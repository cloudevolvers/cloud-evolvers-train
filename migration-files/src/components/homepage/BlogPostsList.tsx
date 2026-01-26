"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow, isValid } from 'date-fns';
import { ChevronRight, Calendar, User, Clock, ExternalLink, ArrowRight, Loader2, BookOpen, ChevronLeft, Shield, Users, Network, Euro, Building, Settings, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: { name: string; title: string };
  image: string;
  publishedAt: string;
  readTime?: string;
  tags?: string[];
  category?: string;
}

interface BlogPostsListProps {
  limit?: number;
  isHomepage?: boolean;
  useCompactLayout?: boolean;
  showPagination?: boolean;
}

/**
 * Component that fetches and displays a list of blog posts
 * @param {Object} props - Component props
 * @param {number} props.limit - Optional limit of posts to display
 * @param {boolean} props.isHomepage - Whether this is being displayed on homepage
 * @param {boolean} props.useCompactLayout - Whether to use compact layout matching showcase items
 * @param {boolean} props.showPagination - Whether to show pagination controls
 */
export default function BlogPostsList({ 
  limit = 10, 
  isHomepage = false, 
  useCompactLayout = false,
  showPagination = false 
}: BlogPostsListProps) {
  const { language: lang, isClient } = useLanguage();
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [currentLang, setCurrentLang] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(0);

  const t = getTranslations(isClient ? lang : 'en');

  // Debug logging for language changes
  useEffect(() => {
    console.log(`[BLOG] Language context changed to: ${lang}, isClient: ${isClient}`);
  }, [lang, isClient]);

  // Track language changes
  useEffect(() => {
    if (isClient && lang && lang !== currentLang) {
      console.log(`[BLOG] Language changed from ${currentLang} to ${lang}, fetching new posts`);
      setCurrentLang(lang);
      setLoading(true);
      setCurrentPage(0); // Reset pagination when language changes
    }
  }, [lang, isClient, currentLang]);

  /**
   * Formats a date string into a relative time string
   */
  function formatBlogDate(dateString: string | undefined): string {
    if (!dateString) {
      return 'Recently';
    }
    try {
      const date = new Date(dateString);
      if (!isValid(date)) {
        console.warn(`Invalid date string encountered: ${dateString}`);
        return 'Invalid date';
      }
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Recently';
    }
  }

  // Helper function to calculate reading time
  function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  }

  // Helper function to get dynamic badge color based on category
  function getCategoryColor(category: string): string {
    const colors = {
      'Azure Security': 'bg-blue-500/20 text-blue-300 border-blue-400/50 hover:bg-blue-500/30',
      'Identity': 'bg-purple-500/20 text-purple-300 border-purple-400/50 hover:bg-purple-500/30',
      'API Management': 'bg-green-500/20 text-green-300 border-green-400/50 hover:bg-green-500/30',
      'DevOps': 'bg-orange-500/20 text-orange-300 border-orange-400/50 hover:bg-orange-500/30',
      'Azure': 'bg-blue-500/20 text-blue-300 border-blue-400/50 hover:bg-blue-500/30',
      'Microsoft 365': 'bg-purple-500/20 text-purple-300 border-purple-400/50 hover:bg-purple-500/30',
      'Cloud Architecture': 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 hover:bg-cyan-500/30',
      'Security': 'bg-red-500/20 text-red-300 border-red-400/50 hover:bg-red-500/30',
      'Networking': 'bg-teal-500/20 text-teal-300 border-teal-400/50 hover:bg-teal-500/30',
      'Cost Management': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/50 hover:bg-yellow-500/30',
      'Infrastructure': 'bg-indigo-500/20 text-indigo-300 border-indigo-400/50 hover:bg-indigo-500/30'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border-gray-400/50 hover:bg-gray-500/30';
  }

  // Helper function to get category icon
  function getCategoryIcon(category: string) {
    const iconMap = {
      'Azure Security': Shield,
      'Identity': Users,
      'API Management': Settings,
      'DevOps': Settings,
      'Azure': Cloud,
      'Microsoft 365': Building,
      'Cloud Architecture': Building,
      'Security': Shield,
      'Networking': Network,
      'Cost Management': Euro,
      'Infrastructure': Building
    };
    return iconMap[category as keyof typeof iconMap] || BookOpen;
  }

  // Helper function to check if post has a custom image
  function hasCustomImage(post: BlogPost): boolean {
    // Don't treat the new SVG blog images as custom images - they should use React icons instead
    if (!post.image || !post.image.trim() || post.image === 'default') {
      return false;
    }
    
    // If it's one of our new blog SVG files, treat as no custom image (use React icon instead)
    if (post.image.includes('/images/blog/') && post.image.endsWith('.svg')) {
      return false;
    }
    
    return true;
  }

  function normalizeBlogImagePath(imagePath: string): string {
    if (!imagePath) return '/images/blog/default-blog.jpg';
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    if (imagePath.startsWith('/images/blog/')) {
      return imagePath;
    }
    
    if (imagePath.startsWith('/blog/images/')) {
      return imagePath;
    }
    
    if (imagePath.startsWith('/backend/images/')) {
      return imagePath;
    }

    const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    console.log(`[BLOG] Normalized image path: ${normalizedPath}`);
    
    return normalizedPath;
  }

  // Main data fetching effect
  useEffect(() => {
    if (!isClient || !currentLang) return;
    
    let isMounted = true;
    
    async function fetchBlogPosts() {
      try {
        setLoading(true);
        setError(null);
        
        const timestamp = Date.now();
        const fetchLimit = showPagination ? undefined : limit; // Get all posts for pagination
        const url = `/api/blog?t=${timestamp}${fetchLimit ? `&limit=${fetchLimit}` : ''}&lang=${currentLang}`;
        console.log(`[BLOG] Fetching posts for language: ${currentLang} from ${url}`);
        
        const response = await fetch(url, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!isMounted) return;
        
        console.log(`[BLOG] Response for ${currentLang}:`, {
          success: data.success,
          postsCount: data.posts?.length || 0
        });
        
        if (data.success && Array.isArray(data.posts)) {
          const postsWithReadTime = data.posts.map((post: BlogPost) => ({
            ...post,
            readTime: post.readTime || calculateReadingTime(post.content || post.excerpt || '')
          }));
          
          if (showPagination) {
            setAllPosts(postsWithReadTime);
            const pageSize = limit || 3;
            const startIndex = currentPage * pageSize;
            const endIndex = startIndex + pageSize;
            setPosts(postsWithReadTime.slice(startIndex, endIndex));
          } else {
            setPosts(postsWithReadTime);
          }
          
          setLastUpdated(new Date());
          console.log(`[BLOG] Successfully loaded ${postsWithReadTime.length} posts for ${currentLang}`);
        } else {
          console.log(`[BLOG] No posts found for language: ${currentLang}`);
          setPosts([]);
          setAllPosts([]);
        }
        
      } catch (err: any) {
        if (!isMounted) return;
        
        console.error(`[BLOG] Error fetching posts for ${currentLang}:`, err);
        setError(err.message || 'Failed to load blog posts.');
        setPosts([]);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchBlogPosts();
    
    return () => {
      isMounted = false;
    };
  }, [currentLang, limit, isClient, showPagination]);

  // Handle pagination changes
  useEffect(() => {
    if (showPagination && allPosts.length > 0) {
      const pageSize = limit || 3;
      const startIndex = currentPage * pageSize;
      const endIndex = startIndex + pageSize;
      setPosts(allPosts.slice(startIndex, endIndex));
    }
  }, [currentPage, allPosts, limit, showPagination]);

  // Add real-time updates for homepage
  useEffect(() => {
    if (!isHomepage) return;

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    const dataInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        console.log('[BLOG] Refreshing blog data automatically...');
        setLastUpdated(new Date());
      }
    }, 300000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dataInterval);
    };
  }, [isHomepage]);

  // Refresh data when lastUpdated changes
  useEffect(() => {
    if (lastUpdated && posts.length > 0) {
      const timeoutId = setTimeout(() => {
        // Re-fetch logic could be added here if needed
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [lastUpdated, posts.length]);

  // Handle loading state
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-8">
        <div className="relative">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
          <div className="absolute inset-0 h-8 w-8 animate-ping bg-emerald-500/20 rounded-full"></div>
        </div>
        <span className="ml-2 text-sm text-muted-foreground mt-3 animate-pulse">
          {isClient ? t.blog.loading : 'Loading blog posts...'}
        </span>
        <div className="flex space-x-1 mt-2">
          <div className="w-2 h-2 bg-emerald-500/50 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-emerald-500/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-emerald-500/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>{isClient ? t.blog.errorLoading : 'Error loading blog posts'}</p>
        <p className="mt-2">{isClient ? t.blog.tryAgain : 'Please try again later'}</p>
      </div>
    );
  }

  // Handle no posts found state
  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">{t.blog.noPosts}</p>
      </div>
    );
  }

  // Render the posts
  return (
    <div className="space-y-4">
      {isHomepage && posts.length > 0 && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">
              {showPagination ? `${allPosts.length} total posts` : `${posts.length} recent post${posts.length !== 1 ? 's' : ''}`} • Latest {posts.length > 0 ? formatBlogDate(posts[0].publishedAt) : 'Recently'}
            </span>
          </div>
        </div>
      )}
      {posts.map((post, index) => (
        <div 
          key={post.id} 
          className="group animate-in fade-in-0 slide-in-from-bottom-2"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Link href={`/blog/${post.slug}`}>
            {useCompactLayout ? (
              // Compact layout that matches showcase items
              <div className="group bg-emerald-950/30 hover:bg-emerald-900/40 rounded-lg overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="flex items-center gap-4 p-4">
                  {hasCustomImage(post) ? (
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-emerald-500/30 shadow-sm">
                      <Image 
                        src={normalizeBlogImagePath(post.image)}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="64px"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
                      />
                    </div>
                  ) : (
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                      {React.createElement(getCategoryIcon(post.category || ''), {
                        className: "h-8 w-8 text-white"
                      })}
                    </div>
                  )}
                  <div className="flex-grow space-y-2">
                    <div className="flex gap-2 items-center">
                      <h3 className="text-sm font-semibold group-hover:text-emerald-400 line-clamp-2 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      {post.category && (
                        <Badge 
                          variant="outline"
                          className={`text-[10px] px-2 py-0.5 h-5 font-medium truncate max-w-[100px] border transition-colors duration-200 flex-shrink-0 ${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground/80">
                      <Calendar className="h-3 w-3 mr-1.5 flex-shrink-0" />
                      <span className="truncate">{formatBlogDate(post.publishedAt)}</span>
                      {post.author && (
                        <>
                          <span className="mx-2">•</span>
                          <User className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{post.author.name}</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground/70 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-end pt-1">
                      <Button variant="ghost" size="sm" className="text-xs h-6 px-3 py-0 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors">
                        Read More <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Original layout for blog page
              <div className="bg-blue-950/30 hover:bg-blue-950/40 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {hasCustomImage(post) ? (
                    <div className="relative h-48 sm:h-full">
                      <Image 
                        src={normalizeBlogImagePath(post.image)}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                    </div>
                  ) : (
                    <div className="relative h-48 sm:h-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500">
                      {React.createElement(getCategoryIcon(post.category || ''), {
                        className: "h-16 w-16 text-white"
                      })}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
                    </div>
                  )}
                  
                  <div className={`p-4 ${hasCustomImage(post) ? 'sm:col-span-2' : 'sm:col-span-2'} space-y-3`}>
                    <div className="flex flex-wrap gap-2 items-start">
                      <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors leading-tight flex-grow">
                        {post.title}
                      </h3>
                      {post.category && (
                        <Badge 
                          variant="outline"
                          className={`text-[10px] px-2 py-0.5 h-5 font-medium truncate max-w-[120px] border transition-colors duration-200 flex-shrink-0 ${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground/80">
                      {post.publishedAt && (
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          {formatBlogDate(post.publishedAt)}
                        </div>
                      )}
                      
                      {post.author && (
                        <div className="flex items-center">
                          <User className="h-3.5 w-3.5 mr-1.5" />
                          {post.author.name}
                        </div>
                      )}
                      
                      {post.readTime && (
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1.5" />
                          {post.readTime}
                        </div>
                      )}
                    </div>
                    
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground/70 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="flex justify-end pt-2">
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="p-0 h-auto text-xs text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Read more <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Link>
        </div>
      ))}
      
      {/* Pagination Controls for showPagination mode */}
      {showPagination && allPosts.length > (limit || 3) && (
        <div className="flex justify-center items-center gap-6 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <span className="font-medium">
              Page {currentPage + 1} of {Math.ceil(allPosts.length / (limit || 3))}
            </span>
          </div>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentPage(prev => Math.min(Math.ceil(allPosts.length / (limit || 3)) - 1, prev + 1))}
            disabled={currentPage >= Math.ceil(allPosts.length / (limit || 3)) - 1}
            className="border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
      
      {isHomepage && posts.length > 0 && !showPagination && (
        <div className="flex flex-col items-center mt-8 space-y-3">
          <Link href="/blog">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              {t.blog.exploreAllInsights}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
          <p className="text-slate-400 text-sm text-center">{t.blog.discoverArticles.replace('{count}', posts.length.toString())}</p>
        </div>
      )}

      {/* View All button for pagination mode */}
      {showPagination && allPosts.length > 0 && (
        <div className="flex flex-col items-center mt-8 space-y-3">
          <Link href="/blog">
            <Button 
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              View All Articles
            </Button>
          </Link>
          <p className="text-slate-400 text-sm text-center">
            Showing {posts.length} of {allPosts.length} articles
          </p>
        </div>
      )}
    </div>
  );
}
