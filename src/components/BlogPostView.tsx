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
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function parseInlineFormatting(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/-->/g, '\u2192');
}

function RichText({ text, className }: { text: string; className?: string }) {
  const blocks = text.split('\n\n').filter(Boolean);

  return (
    <div className={className}>
      {blocks.map((block, i) => {
        const lines = block.split('\n').filter(Boolean);
        const isListBlock = lines.length > 0 && lines.every(l => l.trimStart().startsWith('- '));

        if (isListBlock) {
          return (
            <ul key={i} className="my-5 space-y-3 pl-5">
              {lines.map((line, li) => (
                <li
                  key={li}
                  className="text-foreground/80 text-[16px] leading-[1.8] list-disc marker:text-brand-400"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(parseInlineFormatting(line.replace(/^-\s*/, ''))),
                  }}
                />
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="text-foreground/80 text-[16.5px] leading-[1.85] mb-5 last:mb-0"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(parseInlineFormatting(block)),
            }}
          />
        );
      })}
    </div>
  );
}

export function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const { language } = useTranslations();

  const getText = (text: string | { en: string; nl: string }): string =>
    typeof text === "string" ? text : text.en;

  const getList = (list: string[] | { en: string[]; nl: string[] } | undefined) => {
    if (!list) return undefined;
    return Array.isArray(list) ? list : list.en;
  };

  const getHeaders = (headers: string[] | { en: string[]; nl: string[] }) =>
    Array.isArray(headers) ? headers : headers.en;

  const getRows = (rows: string[][] | { en: string[][]; nl: string[][] }) =>
    Array.isArray(rows) ? rows : rows.en;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(language === "nl" ? "nl-NL" : "en-US", {
      year: "numeric", month: "long", day: "numeric",
    });

  const conclusionLabel = language === "nl" ? "Conclusie" : "Conclusion";
  const sectionItems = post.content.sections.map((s) => ({
    id: slugify(getText(s.title)),
    title: getText(s.title),
  }));

  return (
    <div className="min-h-screen bg-background pt-28 pb-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

        {/* Back */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          {language === "nl" ? "Alle artikelen" : "All articles"}
        </button>

        {/* Hero image */}
        {post.image && (
          <div className="mb-10 overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt=""
              className="w-full h-[280px] sm:h-[360px] object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">

          {/* Main column */}
          <div className="min-w-0">

            {/* ---- HEADER ---- */}
            <header className="mb-14">
              <p className="text-brand-500 text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
                {getText(post.category)}
              </p>

              <h1 className="text-[clamp(1.85rem,4vw,2.75rem)] font-bold text-foreground leading-[1.15] tracking-[-0.025em]">
                {getText(post.title)}
              </h1>

              <p className="mt-5 text-foreground/65 text-[1.1rem] leading-[1.7] max-w-[640px]">
                {getText(post.excerpt)}
              </p>

              <div className="flex items-center gap-2 mt-6 text-[13px] text-foreground/50">
                <span className="text-foreground/80 font-medium">{post.author}</span>
                <span>/</span>
                <time>{formatDate(post.date)}</time>
                <span>/</span>
                <span>{post.readTime} min</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-brand-600/60 border border-brand-200 bg-brand-50 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="h-px bg-border mt-10" />
            </header>

            {/* ---- BODY ---- */}
            <div className="space-y-0">

              {/* Introduction */}
              <RichText
                text={getText(post.content.introduction)}
                className="mb-16 text-[17px] leading-[1.9] [&_p]:text-foreground/85 [&_p]:text-[17px] [&_p]:leading-[1.9]"
              />

              {/* Sections */}
              {post.content.sections.map((section, index) => {
                const sectionId = slugify(getText(section.title));

                return (
                  <section key={sectionId} id={sectionId} className="mb-16 scroll-mt-28 pt-10 border-t border-border/30 first:border-t-0 first:pt-0">

                    {/* Section heading with number */}
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-brand-400 text-sm font-mono tabular-nums font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-[1.5rem] font-bold text-foreground tracking-[-0.01em] leading-tight">
                        {getText(section.title)}
                      </h2>
                    </div>

                    {/* Section body */}
                    <RichText
                      text={getText(section.content)}
                      className="mb-6"
                    />

                    {/* Callout */}
                    {section.callout && (
                      <div className="my-6">
                        <Callout type={section.callout.type} title={section.callout.title}>
                          <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(section.callout.content),
                          }} />
                        </Callout>
                      </div>
                    )}

                    {/* Code */}
                    {section.code && (
                      <div className="my-6">
                        <CodeBlock
                          code={section.code.code}
                          language={section.code.language}
                          title={section.code.title}
                          collapsed={section.code.collapsed}
                        />
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections?.map((sub, si) => (
                      <div key={si} className="mt-8 mb-6 pl-5 border-l-2 border-brand-200">
                        <h3 className="text-[16px] font-semibold text-foreground/90 mb-3">
                          {getText(sub.title)}
                        </h3>
                        <RichText
                          text={getText(sub.content)}
                          className="[&_p]:text-foreground/75 [&_p]:text-[15.5px]"
                        />
                        {sub.list && (
                          <ul className="mt-3 space-y-2 pl-4">
                            {getList(sub.list)?.map((item, i) => (
                              <li key={i} className="text-foreground/75 text-[15px] leading-[1.75] list-disc marker:text-brand-400">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {sub.table && (
                          <div className="overflow-x-auto mt-4 border border-border/50 rounded-md">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-muted/30">
                                  {getHeaders(sub.table.headers).map((h, i) => (
                                    <th key={i} className="px-3 py-2 text-left font-medium text-foreground/70 border-b border-border/40 text-[13px]">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {getRows(sub.table.rows).map((row, ri) => (
                                  <tr key={ri} className="border-b border-border/30 last:border-0">
                                    {row.map((cell, ci) => (
                                      <td key={ci} className="px-3 py-2 text-foreground/60 text-[13px]">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                  </section>
                );
              })}

              {/* Conclusion */}
              <section id="conclusion" className="scroll-mt-28 pt-10 border-t border-border/30">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-brand-400 text-sm font-mono tabular-nums font-medium">
                    {String(post.content.sections.length + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[1.5rem] font-bold text-foreground tracking-[-0.01em]">
                    {conclusionLabel}
                  </h2>
                </div>
                <RichText text={getText(post.content.conclusion)} />
              </section>
            </div>
          </div>

          {/* Right: TOC */}
          <aside className="hidden lg:block">
            <BlogTOC
              sections={sectionItems}
              conclusionId="conclusion"
              conclusionLabel={conclusionLabel}
            />
          </aside>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-6 border-t border-border/30">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            {language === "nl" ? "Terug naar alle artikelen" : "Back to all articles"}
          </button>
        </div>
      </div>
    </div>
  );
}
