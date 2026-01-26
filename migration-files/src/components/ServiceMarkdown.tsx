'use client';

import React from 'react';
import { marked } from 'marked';

interface ServiceMarkdownProps {
  content: string;
  className?: string;
}

export default function ServiceMarkdown({ content, className = "" }: ServiceMarkdownProps) {
  if (!content) return null;

  // Process the markdown content to HTML
  const processedContent = () => {
    try {
      // Use marked to parse markdown
      const renderedContent = marked(content);
      return renderedContent;
    } catch (error) {
      console.error('Error parsing markdown:', error);
      return `<p>${content}</p>`;
    }
  };

  return (
    <div 
      className={`prose prose-lg dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent() }}
    />
  );
}
