'use client';

import React from 'react';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import { BlogPost } from '@/types/blog';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return <BlogPostLayout post={post} />;
}
