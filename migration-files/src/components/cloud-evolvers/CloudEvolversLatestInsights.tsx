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

interface CloudEvolversLatestInsightsProps {
  t: ReturnType<typeof getTranslations>;
  blogPosts: BlogPost[];
  loading: boolean;
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
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 60) return '1 month ago';
    return `${Math.floor(diffDays / 30)} months ago`;
  } catch {
    return 'Recently';
  }
}

export function CloudEvolversLatestInsights({ t, blogPosts, loading }: CloudEvolversLatestInsightsProps) {
  return (
    <div className="col-span-1">
      <div className="cloud-evolvers-blog-section cloud-evolvers-section-content bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-emerald-900/20 backdrop-blur-md rounded-lg p-4 lg:p-6 border border-emerald-400/30 shadow-xl">
        <div className="text-center mb-6 flex-shrink-0">
          <Badge variant="secondary" className="mb-3 text-xs bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
            {t.training?.cloudEvolvers?.latestInsights || 'Latest Insights'}
          </Badge>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {t.training?.cloudEvolvers?.latestInsights || 'Latest Insights'}
          </h2>
          <p className="text-xs lg:text-sm text-emerald-100/80 mb-4 leading-relaxed">
            {t.training?.cloudEvolvers?.latestInsightsDesc || 'Technical Azure guides from our certified experts.'}
          </p>
        </div>
        
        {/* Blog content - Reduced content to prevent overflow */}
        <div className="cloud-evolvers-blog-list cloud-evolvers-flex-content">
          <div className="flex-1 min-h-0">
            {loading ? (
              <div className="flex justify-center items-center py-6">
                <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 overflow-hidden">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="group bg-gradient-to-br from-emerald-800/30 to-emerald-700/20 rounded-lg p-3 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                          {React.createElement(getCategoryIcon(post.category || ''), {
                            className: "h-5 w-5 text-white"
                          })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-emerald-100 mb-1 line-clamp-1">{post.title}</h3>
                          <p className="text-xs text-emerald-200/80 mb-1">{post.category || 'Azure'} • {formatBlogDate(post.publishedAt)} • {post.author?.name || 'Expert'}</p>
                          <p className="text-xs text-emerald-300/70 leading-tight line-clamp-2">{post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                
                {/* Show placeholder if no blog posts */}
                {!loading && blogPosts.length === 0 && (
                  <div className="text-center py-6">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-emerald-400/50" />
                    <p className="text-xs text-emerald-200/60">Blog posts loading...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
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
