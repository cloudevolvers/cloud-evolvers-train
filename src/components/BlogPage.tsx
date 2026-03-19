import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/use-translations';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts, getLocalizedBlogPost } from '@/data/blog-posts';
import {
  Calendar,
  Clock,
  Lightning,
  ShieldCheck,
  Terminal,
  Cloud,
  Wrench,
  Network,
  Database,
  Key,
  Robot,
  HardDrives,
  Lock,
  Cpu,
  Cube,
  Sparkle,
} from "@phosphor-icons/react";

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

  const allPosts = getAllBlogPosts();
  const blogPosts = allPosts.map(post => ({
    ...getLocalizedBlogPost(post, language),
    rawId: post.id,
  }));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background pt-36 pb-20">
      <motion.div
        className="max-w-6xl mx-auto px-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-3">
            {language === 'nl' ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            {language === 'nl'
              ? 'Artikelen over Azure, cloud infrastructuur en de nieuwste Microsoft-technologie.'
              : 'Articles on Azure, cloud infrastructure, and the latest Microsoft technology.'}
          </p>
        </div>

        {/* Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {blogPosts.map((post, index) => {
            const Icon = getCategoryIcon(post.category);

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
              >
                <Link to={`/blog/${post.rawId}`} className="group block">
                  {/* Image */}
                  {post.image && (
                    <div className="relative aspect-[16/10] mb-4 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Category */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <Icon size={14} weight="bold" className="text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground/70">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} weight="regular" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} weight="regular" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
