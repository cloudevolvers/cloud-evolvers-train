import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/use-translations';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, getLocalizedBlogPost } from '@/data/blog-posts';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import {
  Calendar,
  Clock,
  Lightning,
  ShieldCheck,
  Terminal,
  Cloud,
  Wrench,
  Network,
  Key,
  Robot,
  HardDrives,
  Lock,
  Cpu,
  Cube,
  Sparkle,
} from "@phosphor-icons/react";

const POSTS_PER_PAGE = 12;

const categoryIcons: Record<string, typeof Lightning> = {
  'AI & Automation': Lightning,
  'AI & Automatisering': Lightning,
  'AI Tools': Sparkle,
  'AI & Machine Learning': Robot,
  'Azure Security': ShieldCheck,
  'Azure Beveiliging': ShieldCheck,
  'Security': ShieldCheck,
  'Security & Compliance': Lock,
  'Security & Identity': Key,
  'Cloud Architecture': Cloud,
  'DevOps': Wrench,
  'DevOps & Automation': Wrench,
  'Infrastructure & Networking': Network,
  'Infrastructuur & Netwerken': Network,
  'Infrastructure': HardDrives,
  'Infrastructure & Operations': HardDrives,
  'Infrastructure as Code': Terminal,
  'Kubernetes & Containers': Cube,
  'Serverless & Functions': Cpu,
  'API Development': Terminal,
  'Identity & Access': Key,
  'Identity': Key,
};

function getCategoryIcon(category: string) {
  return categoryIcons[category] || Cloud;
}

export function BlogPage() {
  const { language } = useTranslations();
  const [visible, setVisible] = useState(POSTS_PER_PAGE);

  const allPosts = getAllBlogPosts();
  const blogPosts = allPosts.map(post => ({
    ...getLocalizedBlogPost(post, language),
    rawId: post.id,
  }));

  const shown = blogPosts.slice(0, visible);
  const hasMore = visible < blogPosts.length;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background pt-36 pb-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none" aria-hidden="true">
        <BackgroundIcons variant="blog" />
      </div>
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Blog
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg">
            {language === 'nl'
              ? 'Artikelen over Azure, cloud infrastructuur en de nieuwste Microsoft-technologie.'
              : 'Articles on Azure, cloud infrastructure, and the latest Microsoft technology.'}
          </p>
        </motion.div>

        {/* Featured post — first one gets a bigger treatment */}
        {shown.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-14"
          >
            <Link to={`/blog/${shown[0].rawId}`} className="group grid md:grid-cols-2 gap-6 items-start">
              {shown[0].image && (
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                  <img
                    src={shown[0].image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="py-1">
                <div className="flex items-center gap-2 mb-3">
                  {(() => { const Icon = getCategoryIcon(shown[0].category); return <Icon size={13} weight="bold" className="text-muted-foreground" />; })()}
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {shown[0].category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-3">
                  {shown[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {shown[0].excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground/70">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{formatDate(shown[0].date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{shown[0].readTime} min</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Rest of posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {shown.slice(1).map((post, index) => {
            const Icon = getCategoryIcon(post.category);

            return (
              <motion.div
                key={post.rawId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
              >
                <Link to={`/blog/${post.rawId}`} className="group block">
                  {post.image && (
                    <div className="aspect-[16/10] mb-3 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={13} weight="bold" className="text-muted-foreground" />
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={11} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={11} />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-14 text-center">
            <Button
              variant="outline"
              onClick={() => setVisible(v => v + POSTS_PER_PAGE)}
            >
              {language === 'nl'
                ? `Meer artikelen laden (${blogPosts.length - visible} resterend)`
                : `Load more articles (${blogPosts.length - visible} remaining)`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
