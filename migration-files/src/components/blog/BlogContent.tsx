/**
 * Enhanced blog post content renderer with proper styling
 * Replaces basic markdown rendering with rich, styled content
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { getBrandConfig } from '@/lib/brand-config';

interface BlogContentProps {
  content: string;
  className?: string;
}

export function BlogContent({ content, className = '' }: BlogContentProps) {
  const { theme } = useTheme();
  const brandConfig = getBrandConfig();
  const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
  
  return (
    <div className={`prose prose-lg max-w-none ${
      theme === 'dark' 
        ? isCloudEvolvers 
          ? 'prose-emerald prose-invert' 
          : 'prose-blue prose-invert'
        : isCloudEvolvers
          ? 'prose-emerald'
          : 'prose-blue'
    } ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom code block rendering with syntax highlighting
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            if (!inline && language) {
              return (
                <div className="my-6 rounded-lg overflow-hidden border border-border shadow-sm">
                  <div className={`px-4 py-2 text-xs font-medium border-b border-border ${
                    isCloudEvolvers 
                      ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200' 
                      : 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200'
                  }`}>
                    {language.toUpperCase()}
                  </div>
                  <SyntaxHighlighter
                    style={theme === 'dark' ? oneDark : oneLight}
                    language={language}
                    PreTag="div"
                    className="!mt-0 !mb-0"
                    customStyle={{
                      margin: 0,
                      background: 'transparent'
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              );
            }
            
            // Inline code
            return (
              <code 
                className={`px-1.5 py-0.5 rounded text-sm font-mono ${
                  isCloudEvolvers
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                }`}
                {...props}
              >
                {children}
              </code>
            );
          },
          
          // Custom blockquote styling
          blockquote({ children, ...props }: any) {
            return (
              <blockquote 
                className={`border-l-4 pl-4 py-2 my-6 italic ${
                  isCloudEvolvers
                    ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10 dark:border-emerald-500'
                    : 'border-blue-400 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-500'
                }`}
                {...props}
              >
                {children}
              </blockquote>
            );
          },
          
          // Custom table styling
          table({ children, ...props }: any) {
            return (
              <div className="overflow-x-auto my-6">
                <table 
                  className="min-w-full divide-y divide-border border border-border rounded-lg"
                  {...props}
                >
                  {children}
                </table>
              </div>
            );
          },
          
          thead({ children, ...props }: any) {
            return (
              <thead 
                className={
                  isCloudEvolvers
                    ? 'bg-emerald-50 dark:bg-emerald-900/20'
                    : 'bg-blue-50 dark:bg-blue-900/20'
                }
                {...props}
              >
                {children}
              </thead>
            );
          },
          
          th({ children, ...props }: any) {
            return (
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                {...props}
              >
                {children}
              </th>
            );
          },
          
          td({ children, ...props }: any) {
            return (
              <td 
                className="px-6 py-4 whitespace-nowrap text-sm border-t border-border"
                {...props}
              >
                {children}
              </td>
            );
          },
          
          // Enhanced heading styles
          h1({ children, ...props }: any) {
            return (
              <h1 
                className={`text-4xl font-bold mb-6 mt-8 ${
                  isCloudEvolvers
                    ? 'text-emerald-900 dark:text-emerald-100'
                    : 'text-blue-900 dark:text-blue-100'
                }`}
                {...props}
              >
                {children}
              </h1>
            );
          },
          
          h2({ children, ...props }: any) {
            return (
              <h2 
                className={`text-3xl font-semibold mb-4 mt-8 pb-2 border-b ${
                  isCloudEvolvers
                    ? 'text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800'
                    : 'text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800'
                }`}
                {...props}
              >
                {children}
              </h2>
            );
          },
          
          h3({ children, ...props }: any) {
            return (
              <h3 
                className={`text-2xl font-semibold mb-3 mt-6 ${
                  isCloudEvolvers
                    ? 'text-emerald-700 dark:text-emerald-300'
                    : 'text-blue-700 dark:text-blue-300'
                }`}
                {...props}
              >
                {children}
              </h3>
            );
          },
          
          h4({ children, ...props }: any) {
            return (
              <h4 
                className={`text-xl font-semibold mb-2 mt-4 ${
                  isCloudEvolvers
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-blue-600 dark:text-blue-400'
                }`}
                {...props}
              >
                {children}
              </h4>
            );
          },
          
          // Custom link styling
          a({ href, children, ...props }: any) {
            return (
              <a 
                href={href}
                className={`underline underline-offset-2 transition-colors ${
                  isCloudEvolvers
                    ? 'text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200'
                    : 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
                }`}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
          
          // Custom list styling
          ul({ children, ...props }: any) {
            return (
              <ul className="space-y-2 my-4 ml-6" {...props}>
                {children}
              </ul>
            );
          },
          
          ol({ children, ...props }: any) {
            return (
              <ol className="space-y-2 my-4 ml-6" {...props}>
                {children}
              </ol>
            );
          },
          
          li({ children, ...props }: any) {
            return (
              <li className="leading-relaxed" {...props}>
                {children}
              </li>
            );
          },
          
          // Custom image rendering with Next.js Image
          img({ src, alt, ...props }: any) {
            if (!src) return null;
            
            return (
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={alt || ''}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                {alt && (
                  <div className="px-4 py-2 bg-muted text-sm text-muted-foreground text-center">
                    {alt}
                  </div>
                )}
              </div>
            );
          },
          
          // Enhanced paragraph styling
          p({ children, ...props }: any) {
            return (
              <p className="leading-relaxed mb-4 text-foreground" {...props}>
                {children}
              </p>
            );
          },
          
          // Custom horizontal rule
          hr({ ...props }: any) {
            return (
              <hr 
                className={`my-8 border-0 h-px ${
                  isCloudEvolvers
                    ? 'bg-gradient-to-r from-transparent via-emerald-300 to-transparent dark:via-emerald-700'
                    : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700'
                }`}
                {...props}
              />
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default BlogContent;
