import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types/blog";
import { LocalizedBlogPost } from "@/data/blog-posts";
import { ArrowLeft } from "@phosphor-icons/react";
import { useTranslations } from "@/hooks/use-translations";
import BlogTOC from "@/components/blog/BlogTOC";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { Callout } from "@/components/blog/Callout";
import DOMPurify from "dompurify";

interface BlogPostViewProps {
  post: BlogPost | LocalizedBlogPost;
  onBack: () => void;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const { language } = useTranslations();

  const getText = (text: string | { en: string; nl: string }): string => {
    return typeof text === "string" ? text : text.en;
  };

  const getList = (
    list: string[] | { en: string[]; nl: string[] } | undefined,
  ): string[] | undefined => {
    if (!list) return undefined;
    return Array.isArray(list) ? list : list.en;
  };

  const getHeaders = (
    headers: string[] | { en: string[]; nl: string[] },
  ): string[] => {
    return Array.isArray(headers) ? headers : headers.en;
  };

  const getRows = (
    rows: string[][] | { en: string[][]; nl: string[][] },
  ): string[][] => {
    return Array.isArray(rows) ? rows : rows.en;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "nl" ? "nl-NL" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const conclusionLabel = language === "nl" ? "Conclusie" : "Conclusion";

  const sectionItems = post.content.sections.map((s) => ({
    id: slugify(getText(s.title)),
    title: getText(s.title),
  }));

  const sections = post.content.sections;

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground -ml-3 gap-1.5"
        >
          <ArrowLeft size={15} />
          {language === "nl" ? "Alle artikelen" : "All articles"}
        </Button>

        {/* 2-column grid: TOC + Article */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 mt-8">
          {/* Left: TOC (hidden on mobile) */}
          <div className="hidden lg:block">
            <BlogTOC
              sections={sectionItems}
              conclusionId="conclusion"
              conclusionLabel={conclusionLabel}
            />
          </div>

          {/* Right: Article content */}
          <article
            className="max-w-[680px] prose prose-neutral dark:prose-invert prose-lg
              prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-[1.35rem] prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-[1.85] prose-p:text-foreground/85 prose-p:mb-6
              prose-li:text-foreground/80 prose-li:leading-[1.7]
              prose-strong:text-foreground
              prose-hr:border-border"
          >
            {/* Category label */}
            <span className="not-prose text-muted-foreground text-[11px] uppercase tracking-[1.5px] font-medium">
              {getText(post.category)}
            </span>

            {/* Byline */}
            <div className="not-prose flex items-center gap-2.5 text-sm text-muted-foreground mt-3 mb-5">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>&middot;</span>
              <time>{formatDate(post.date)}</time>
              <span>&middot;</span>
              <span>{post.readTime} min</span>
            </div>

            {/* Title */}
            <h1 className="not-prose text-[2rem] sm:text-[2.4rem] font-bold text-foreground leading-[1.15] tracking-tight">
              {getText(post.title)}
            </h1>

            {/* Excerpt */}
            <p className="not-prose text-lg text-muted-foreground leading-relaxed mt-5">
              {getText(post.excerpt)}
            </p>

            {/* Tags */}
            <div className="not-prose flex flex-wrap gap-1.5 mt-5">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <hr className="not-prose border-border mt-8 mb-10" />

            {/* Introduction */}
            <p>{getText(post.content.introduction)}</p>

            {/* Sections */}
            {sections.map((section, index) => {
              const sectionId = slugify(getText(section.title));
              const isLast = index === sections.length - 1;

              return (
                <section key={sectionId} id={sectionId}>
                  <h2>{getText(section.title)}</h2>
                  <p>{getText(section.content)}</p>

                  {section.callout && (
                    <div className="not-prose my-6">
                      <Callout
                        type={section.callout.type}
                        title={section.callout.title}
                      >
                        <p
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              section.callout.content,
                            ),
                          }}
                        />
                      </Callout>
                    </div>
                  )}

                  {section.code && (
                    <div className="not-prose my-6">
                      <CodeBlock
                        code={section.code.code}
                        language={section.code.language}
                        title={section.code.title}
                        collapsed={section.code.collapsed}
                      />
                    </div>
                  )}

                  {section.subsections?.map((sub, si) => (
                    <div
                      key={si}
                      className="pl-5 border-l-2 border-border/50 mt-6 mb-8"
                    >
                      <h3>{getText(sub.title)}</h3>
                      <p>{getText(sub.content)}</p>
                      {sub.list && (
                        <ul>
                          {getList(sub.list)?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {sub.table && (
                        <div className="overflow-x-auto">
                          <table>
                            <thead>
                              <tr>
                                {getHeaders(sub.table.headers).map((h, i) => (
                                  <th key={i}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {getRows(sub.table.rows).map((row, ri) => (
                                <tr key={ri}>
                                  {row.map((cell, ci) => (
                                    <td key={ci}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}

                  {!isLast && <hr className="border-border my-10" />}
                </section>
              );
            })}

            {/* Conclusion */}
            <section id="conclusion">
              <h2>{conclusionLabel}</h2>
              <p>{getText(post.content.conclusion)}</p>
            </section>
          </article>
        </div>

        {/* Footer back button */}
        <div className="mt-20 pt-8 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground -ml-3 gap-1.5"
          >
            <ArrowLeft size={15} />
            {language === "nl"
              ? "Terug naar alle artikelen"
              : "Back to all articles"}
          </Button>
        </div>
      </div>
    </div>
  );
}
