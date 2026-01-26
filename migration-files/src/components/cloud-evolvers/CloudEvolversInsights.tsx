import React from 'react';
import { BookOpen, Shield, Network, Settings, Cloud, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { getTranslations } from '@/utils/i18n';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: { name: string; title: string };
  publishedAt: string;
  category?: string;
}

interface CloudEvolversInsightsProps {
  t: ReturnType<typeof getTranslations>;
  posts: BlogPost[];
  loading?: boolean;
  currentPage?: number;
  totalPages?: number;
  autoPagination?: boolean;
  onToggleAutoPagination?: (enabled: boolean) => void;
  onPageChange?: (page: number) => void;
}

// Helper function to get category icon
function getCategoryIcon(category: string) {
  const iconMap = {
    'Azure Security': Shield,
    'Identity': Shield,
    'API Management': Settings,
    'DevOps': Settings,
    'Azure': Cloud,
    'Microsoft 365': Cloud,
    'Cloud Architecture': Cloud,
    'Security': Shield,
    'Networking': Network,
    'Cost Management': Settings,
    'Infrastructure': Cloud
  };
  return iconMap[category as keyof typeof iconMap] || BookOpen;
}

// Helper function to format date
function formatBlogDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return '1 day ago';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return months === 1 ? '1 month ago' : `${months} months ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return years === 1 ? '1 year ago' : `${years} years ago`;
    }
  } catch {
    return 'Recently';
  }
}

export function CloudEvolversInsights({ 
  t, 
  posts, 
  loading = false, 
  currentPage = 0, 
  totalPages = 1, 
  autoPagination = true, 
  onToggleAutoPagination,
  onPageChange 
}: CloudEvolversInsightsProps) {
  return (
    <div className="col-span-1 flex flex-col h-full">
      <div className="cloud-evolvers-insights-section cloud-evolvers-section-content bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-emerald-900/20 backdrop-blur-md rounded-lg p-4 lg:p-6 border border-emerald-400/30 shadow-xl flex flex-col h-full">
        <div className="text-center mb-6 flex-shrink-0">
          <Badge variant="secondary" className="mb-3 text-xs bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
            {t.training?.cloudEvolvers?.latestInsights || 'Latest Insights'}
          </Badge>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {t.training?.cloudEvolvers?.latestInsights || 'Latest Azure Insights'}
          </h2>
          <p className="text-xs lg:text-sm text-emerald-200/80 leading-relaxed">
            {t.blog?.blogDescription || 'Expert insights and practical guidance from our Azure consultants'}
          </p>
        </div>
        
        <div className="cloud-evolvers-blog-posts cloud-evolvers-flex-content flex-grow">
          <div className="space-y-3">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
                <span className="ml-2 text-xs text-emerald-200/80">Loading insights...</span>
              </div>
            ) : posts && posts.length > 0 ? (
              posts.map((post, index) => {
                const IconComponent = getCategoryIcon(post.category || '');
                return (
                  <Link 
                    key={`${post.id}-${index}`} 
                    href={`/blog/${post.slug}`}
                    className="block"
                  >
                    <div className="bg-emerald-800/20 rounded-lg p-3 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-200 hover:bg-emerald-700/20 group">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-emerald-500/20 rounded-lg flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors duration-200">
                          <IconComponent className="h-4 w-4 text-emerald-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-emerald-100 mb-1 line-clamp-2 group-hover:text-white transition-colors duration-200">
                            {post.title}
                          </h3>
                          <p className="text-xs text-emerald-200/70 line-clamp-2 mb-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-emerald-300/80">
                              {post.author?.name || 'Cloud Evolvers'}
                            </span>
                            <span className="text-emerald-400/80">
                              {formatBlogDate(post.publishedAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-8 w-8 text-emerald-400/60 mx-auto mb-3" />
                <p className="text-sm text-emerald-200/80 mb-2">No insights available yet</p>
                <p className="text-xs text-emerald-300/60">Check back soon for the latest Azure content</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Pagination indicators and auto-pagination toggle */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center justify-center gap-3 px-2 py-4 border-t border-emerald-500/20 mt-2">
            {/* Centered pagination dots - bigger size with click functionality */}
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 ${
                    i === currentPage 
                      ? 'bg-emerald-400 scale-125 shadow-lg shadow-emerald-400/50' 
                      : 'bg-emerald-500/40 hover:bg-emerald-500/60'
                  }`}
                  onClick={() => {
                    if (onPageChange) {
                      onPageChange(i);
                    }
                  }}
                  title={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            {/* Improved auto-pagination toggle */}
            {onToggleAutoPagination && (
              <button
                onClick={() => onToggleAutoPagination(!autoPagination)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                  autoPagination 
                    ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40 hover:bg-emerald-500/30 shadow-sm' 
                    : 'bg-emerald-800/20 text-emerald-400/80 border-emerald-600/30 hover:bg-emerald-700/30'
                }`}
                title={autoPagination ? 'Auto-pagination enabled - Click to pause' : 'Auto-pagination disabled - Click to enable'}
              >
                <span className="text-sm">
                  {autoPagination ? '⏸️' : '▶️'}
                </span>
                <span>
                  {autoPagination ? 'Auto' : 'Manual'}
                </span>
              </button>
            )}
          </div>
        )}
        
        {/* Bottom CTA to match other sections */}
        <div className="text-center mt-6 flex-shrink-0">
          <Link href="/blog">
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold px-4 py-2 text-xs shadow-lg shadow-emerald-500/25">
              <BookOpen className="mr-2 h-3 w-3" />
              View All Insights
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
