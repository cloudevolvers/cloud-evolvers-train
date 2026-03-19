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

  const renderSection = (section: BlogSectionType, index: number) => (
    <motion.section
      key={index}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">
        {getText(section.title)}
      </h2>
      <p className="text-muted-foreground leading-[1.8] text-[1.05rem]">
        {getText(section.content)}
      </p>

      {section.code && (
        <pre className="mt-4 p-4 bg-muted/50 border border-border rounded-md overflow-x-auto text-sm font-mono">
          <code>{section.code.code}</code>
        </pre>
      )}

      {section.subsections?.map((subsection, subIndex) => (
        <div key={subIndex} className="mt-6 pl-5 border-l-2 border-border">
          <h3 className="text-lg font-medium text-foreground mb-2">
            {getText(subsection.title)}
          </h3>
          <p className="text-muted-foreground leading-[1.8]">
            {getText(subsection.content)}
          </p>

          {subsection.list && (
            <ul className="mt-3 space-y-1.5 list-disc list-outside pl-5">
              {getList(subsection.list)?.map((item, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed">{item}</li>
              ))}
            </ul>
          )}

          {subsection.table && (
            <div className="overflow-x-auto mt-4 border border-border rounded-md">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    {getHeaders(subsection.table.headers).map((header, i) => (
                      <th key={i} className="px-4 py-2.5 text-left font-medium text-foreground border-b border-border">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getRows(subsection.table.rows).map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-border last:border-0">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-2.5 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-[680px] mx-auto px-5">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground -ml-2 gap-1.5"
          >
            <ArrowLeft size={15} />
            {language === 'nl' ? 'Alle artikelen' : 'All articles'}
          </Button>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{post.author}</span>
            <span aria-hidden>&middot;</span>
            <time>{formatDate(post.date)}</time>
            <span aria-hidden>&middot;</span>
            <span>{post.readTime} {language === 'nl' ? 'min lezen' : 'min read'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-[1.2] tracking-tight mb-5">
            {getText(post.title)}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {getText(post.excerpt)}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal px-2.5 py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.header>

        <hr className="border-border mb-10" />

        {/* Article body */}
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Introduction */}
          <p className="text-muted-foreground leading-[1.8] text-[1.05rem] mb-10">
            {getText(post.content.introduction)}
          </p>

          {/* Sections */}
          {post.content.sections.map((section, index) => renderSection(section, index))}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + post.content.sections.length * 0.05 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">
              {language === 'nl' ? 'Conclusie' : 'Conclusion'}
            </h2>
            <p className="text-muted-foreground leading-[1.8] text-[1.05rem]">
              {getText(post.content.conclusion)}
            </p>
          </motion.div>
        </motion.article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground -ml-2 gap-1.5"
          >
            <ArrowLeft size={15} />
            {language === 'nl' ? 'Terug naar alle artikelen' : 'Back to all articles'}
          </Button>
        </div>
      </div>
    </div>
  );
}
