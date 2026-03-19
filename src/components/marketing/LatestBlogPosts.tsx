import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { getAllBlogPosts, getLocalizedBlogPost } from "@/data/blog-posts";

export function LatestBlogPosts() {
  const { language } = useTranslations();
  const latest = getAllBlogPosts()
    .slice(0, 3)
    .map(post => getLocalizedBlogPost(post, language));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {language === 'nl' ? 'Laatste artikelen' : 'Latest articles'}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {language === 'nl'
                ? 'Recente inzichten over Azure, AI en cloud-infrastructuur.'
                : 'Recent insights on Azure, AI, and cloud infrastructure.'}
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {language === 'nl' ? 'Alle artikelen' : 'All articles'}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {latest.map((post) => (
            <Link key={post.id} to="/blog" className="group">
              {post.image && (
                <div className="relative aspect-[16/10] mb-4 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {post.category}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground/70">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(post.date)}</span>
                <span className="mx-1">&middot;</span>
                <span>{post.readTime} min</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/blog"
          className="sm:hidden mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {language === 'nl' ? 'Alle artikelen' : 'All articles'}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
