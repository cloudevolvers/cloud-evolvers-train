/**
 * Enhanced blog post layout with professional styling
 * Replaces markdown-style rendering with rich, branded layouts
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { BlogContent } from './BlogContent';
import { getBrandConfig } from '@/lib/brand-config';
import type { BlogPost } from '@/types/blog';

interface BlogPostLayoutProps {
  post: BlogPost;
  showBackLink?: boolean;
}

export function BlogPostLayout({ post, showBackLink = true }: BlogPostLayoutProps) {
  const brandConfig = getBrandConfig();
  const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
  
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

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Navigation */}
      {showBackLink && (
        <div className="mb-8">
          <Link 
            href="/blog"
            className={`inline-flex items-center gap-2 text-sm transition-colors ${
              isCloudEvolvers
                ? 'text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200'
                : 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
            }`}
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <header className="mb-12">
        {/* Featured Image */}
        {post.image && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-96 object-cover"
              priority
            />
          </div>
        )}

        {/* Category Badge */}
        {post.category && (
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              isCloudEvolvers
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
            }`}>
              {post.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
          isCloudEvolvers
            ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent'
        }`}>
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        {/* Author */}
        {post.author && (
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white ${
              isCloudEvolvers
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}>
              {post.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <span className="font-medium">
              {post.author.name}
            </span>
          </div>
        )}          {/* Date */}
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
          
          {/* Read Time */}
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            <span>{calculateReadTime(post.content)}</span>
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {post.tags.map((tag) => (
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
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose-container">
        <BlogContent content={post.content} />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Author Info */}
          {post.author && (
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-medium text-white ${
                isCloudEvolvers
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500'
              }`}>
                {post.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div>
                <div className="font-medium text-foreground">
                  {post.author.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {post.author.title || (isCloudEvolvers ? 'Cloud Training Expert' : 'Azure Consultant')}
                </div>
              </div>
            </div>
          )}

          {/* Share Actions */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">Share:</span>
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                isCloudEvolvers
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300'
              }`}
            >
              Twitter
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                isCloudEvolvers
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300'
              }`}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default BlogPostLayout;
