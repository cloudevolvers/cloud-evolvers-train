/**
 * Enhanced blog list with professional card layout
 * Replaces basic list rendering with rich, branded blog cards
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { BlogPost } from '@/types/blog';
import { getBrandConfig } from '@/lib/brand-config';

interface BlogListProps {
  initialPosts: BlogPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const brandConfig = getBrandConfig();
  const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';

  // Get unique categories from posts
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category).filter(Boolean)))];

  // Filter posts by selected category
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const truncateExcerpt = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  };

  const getIconForCategory = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'security':
      case 'beveiliging':
        return (
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'infrastructure':
      case 'infrastructuur':
        return (
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'api management':
        return (
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        );
      case 'cost management':
      case 'kostenbeheer':
        return (
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'networking':
        return (
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'azure identity':
        return (
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        );
    }
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-20">
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
          isCloudEvolvers
            ? 'bg-emerald-100 dark:bg-emerald-900/30'
            : 'bg-blue-100 dark:bg-blue-900/30'
        }`}>
          <svg className={`w-12 h-12 ${
            isCloudEvolvers ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-foreground">No Blog Posts Yet</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          We're working on some great content for you. Check back soon for insightful articles and guides.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      {categories.length > 2 && (
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? isCloudEvolvers
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : isCloudEvolvers
                    ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50'
              }`}
            >
              {category === 'all' ? 'All Posts' : category}
            </button>
          ))}
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.slug} 
            className="group relative bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Featured Image with Icon */}
            <div className={`relative h-48 flex items-center justify-center ${
              isCloudEvolvers
                ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600'
                : 'bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600'
            }`}>
              {/* Category-specific Icon */}
              {getIconForCategory(post.category)}
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="absolute top-8 left-8 w-1 h-1 bg-white/40 rounded-full"></div>
              
              {/* Category Badge */}
              {post.category && (
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-black/20 backdrop-blur-sm border border-white/20">
                    {post.category}
                  </span>
                </div>
              )}

              {/* Translation Status Badge */}
              {(post as any).autoTranslated && (
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium text-amber-800 bg-amber-100/90 backdrop-blur-sm border border-amber-200/50">
                    🔄 Auto-translated
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {truncateExcerpt(post.excerpt)}
                </p>
              )}

              {/* Meta Information */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    <span>{calculateReadTime(post.content)}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded text-xs ${
                        isCloudEvolvers
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300'
                          : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Author and Read More */}
              <div className="flex items-center justify-between">
                {/* Author */}
                {post.author && (
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white ${
                      isCloudEvolvers
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                      {post.author.name && post.author.name.length > 0
                        ? post.author.name
                            .split(' ')
                            .filter(n => n && n.length > 0)
                            .map(n => n[0])
                            .join('')
                            .toUpperCase()
                            .substring(0, 2)
                        : 'AU'
                      }
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {post.author.name || 'Azure Specialist'}
                    </span>
                  </div>
                )}

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.slug}`}
                  className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${
                    isCloudEvolvers
                      ? 'text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200'
                      : 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
                  }`}
                >
                  Read More
                  <ArrowRightIcon className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No posts message for filtered results */}
      {filteredPosts.length === 0 && selectedCategory !== 'all' && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No posts in this category</h3>
          <p className="text-muted-foreground mb-4">
            Try selecting a different category or view all posts.
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              isCloudEvolvers
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            View All Posts
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogList;
