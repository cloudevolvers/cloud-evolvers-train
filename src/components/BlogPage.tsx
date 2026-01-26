import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/use-translations';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, getLocalizedBlogPost, getBlogPost } from '@/data/blog-posts';
import { BlogPostView } from '@/components/BlogPostView';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Brain,
  Shield,
  Code,
  Cloud,
  Gear
} from "@phosphor-icons/react";

export function BlogPage() {
  const { language } = useTranslations();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const allPosts = getAllBlogPosts();
  const blogPosts = allPosts.map(post => getLocalizedBlogPost(post, language));

  const rawSelectedPost = selectedPostId ? getBlogPost(selectedPostId) : null;
  const selectedPost = rawSelectedPost ? getLocalizedBlogPost(rawSelectedPost, language) : null;

  if (selectedPost) {
    return (
      <BlogPostView
        post={selectedPost}
        onBack={() => setSelectedPostId(null)}
      />
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      'AI Tools': Brain,
      'Azure Security': Shield,
      'Azure Development': Code,
      'Cloud Architecture': Cloud,
      'DevOps': Gear,
      'Azure Beveiliging': Shield,
      'Default': BookOpen
    };
    return iconMap[category as keyof typeof iconMap] || iconMap.Default;
  };

  return (
    <div className="min-h-screen bg-background pt-40 pb-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-primary/10 border border-primary/20 text-primary inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <BookOpen size={16} weight="duotone" />
              <span className="font-semibold">{language === 'nl' ? 'Azure Kennis Hub' : 'Azure Knowledge Hub'}</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {language === 'nl' ? 'Blog & Inzichten' : 'Blog & Insights'}
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {language === 'nl'
                ? 'Ontdek onze expert artikelen over Azure, cloud technologieën en best practices voor Microsoft certifications.'
                : 'Discover our expert articles on Azure, cloud technologies, and best practices for Microsoft certifications.'}
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {blogPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card border-border h-full backdrop-blur-sm transition-all duration-300 cursor-pointer group hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Post Image */}
                      {post.image && (
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Category & Icon */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent size={20} className="text-primary" weight="duotone" />
                        </div>
                        <Badge variant="secondary" className="text-xs font-medium">
                          {post.category}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow text-sm">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="text-muted-foreground border-t border-border flex flex-wrap items-center gap-4 mb-4 pt-4 text-xs font-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} weight="duotone" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} weight="duotone" />
                          <span>{post.readTime} {language === 'nl' ? 'min' : 'min'}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User size={14} weight="duotone" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary mt-auto self-start p-0 h-auto font-semibold hover:bg-transparent hover:text-primary/80"
                        onClick={() => setSelectedPostId(post.id)}
                      >
                        {language === 'nl' ? 'Lees Artikel' : 'Read Article'}
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
