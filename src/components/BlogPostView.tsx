import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogPost, BlogSection as BlogSectionType } from "@/types/blog";
import { LocalizedBlogPost } from "@/data/blog-posts";
import { ArrowLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";

interface BlogPostViewProps {
  post: BlogPost | LocalizedBlogPost;
  onBack: () => void;
}

export function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const { language } = useTranslations();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getText = (text: string | { en: string; nl: string }): string => {
    return typeof text === 'string' ? text : text.en;
  };

  const getList = (list: string[] | { en: string[]; nl: string[] } | undefined): string[] | undefined => {
    if (!list) return undefined;
    return Array.isArray(list) ? list : list.en;
  };

  const getHeaders = (headers: string[] | { en: string[]; nl: string[] }): string[] => {
    return Array.isArray(headers) ? headers : headers.en;
  };

  const getRows = (rows: string[][] | { en: string[][]; nl: string[][] }): string[][] => {
    return Array.isArray(rows) ? rows : rows.en;
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="max-w-[44rem] mx-auto px-6">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground -ml-3 gap-1.5"
          >
            <ArrowLeft size={15} />
            {language === 'nl' ? 'Alle artikelen' : 'All articles'}
          </Button>
        </motion.div>

        {/* Byline */}
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground mb-6">
            <span className="font-medium text-foreground">{post.author}</span>
            <span>&middot;</span>
            <time>{formatDate(post.date)}</time>
            <span>&middot;</span>
            <span>{post.readTime} min</span>
          </div>

          <h1 className="text-[2rem] sm:text-[2.4rem] font-bold text-foreground leading-[1.15] tracking-tight">
            {getText(post.title)}
          </h1>

          <p className="mt-5 text-[1.1rem] leading-relaxed text-muted-foreground">
            {getText(post.excerpt)}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          <hr className="mt-10 mb-0 border-border" />
        </motion.header>

        {/* Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="prose prose-neutral dark:prose-invert prose-lg max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h2:text-[1.35rem] prose-h2:mt-14 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-p:leading-[1.8] prose-p:text-foreground/85 prose-p:mb-6
            prose-li:text-foreground/80 prose-li:leading-[1.7]
            prose-strong:text-foreground
            prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-muted/60 prose-pre:border prose-pre:border-border
            prose-table:text-sm
            prose-th:text-left prose-th:font-medium prose-th:bg-muted/50
            prose-td:border-border prose-th:border-border
          "
        >
          {/* Introduction */}
          <p>{getText(post.content.introduction)}</p>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <section key={index}>
              <h2>{getText(section.title)}</h2>
              <p>{getText(section.content)}</p>

              {section.code && (
                <pre><code className={`language-${section.code.language}`}>{section.code.code}</code></pre>
              )}

              {section.subsections?.map((sub, si) => (
                <div key={si} className="pl-5 border-l-2 border-border/50 mt-6 mb-8">
                  <h3>{getText(sub.title)}</h3>
                  <p>{getText(sub.content)}</p>
                  {sub.list && (
                    <ul>
                      {getList(sub.list)?.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  {sub.table && (
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            {getHeaders(sub.table.headers).map((h, i) => <th key={i}>{h}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {getRows(sub.table.rows).map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* Conclusion */}
          <hr />
          <h2>{language === 'nl' ? 'Conclusie' : 'Conclusion'}</h2>
          <p>{getText(post.content.conclusion)}</p>
        </motion.article>

        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground -ml-3 gap-1.5"
          >
            <ArrowLeft size={15} />
            {language === 'nl' ? 'Terug naar alle artikelen' : 'Back to all articles'}
          </Button>
        </div>
      </div>
    </div>
  );
}
