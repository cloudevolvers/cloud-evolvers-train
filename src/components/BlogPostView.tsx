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

/**
 * Parses inline markdown-style formatting into HTML.
 * Handles **bold** and --> arrows.
 */
function parseInlineFormatting(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/-->/g, '\u2192');
}

/**
 * Detects if a paragraph starts with a bold phrase (like an exam name or label).
 * These become visually prominent "anchor" paragraphs with the bold part
 * rendered as a mini-heading above the rest of the text.
 */
function splitBoldLead(html: string): { lead: string; rest: string } | null {
  const match = html.match(/^<strong>(.+?)<\/strong>\s*(.*)/s);
  if (!match) return null;
  return { lead: match[1], rest: match[2] };
}

function RichText({ text, className, variant = 'body' }: {
  text: string;
  className?: string;
  variant?: 'body' | 'lead' | 'sub';
}) {
  const blocks = text.split('\n\n').filter(Boolean);

  const textClasses = {
    body: 'text-foreground/75 text-[17px] leading-[1.9]',
    lead: 'text-foreground/80 text-[18px] leading-[1.9]',
    sub: 'text-foreground/70 text-[15.5px] leading-[1.85]',
  }[variant];

  return (
    <div className={className}>
      {blocks.map((block, i) => {
        const lines = block.split('\n').filter(Boolean);
        const isListBlock = lines.length > 0 && lines.every(l => l.trimStart().startsWith('- '));

        if (isListBlock) {
          return (
            <ul key={i} className="my-6 space-y-3 pl-1">
              {lines.map((line, li) => (
                <li
                  key={li}
                  className="text-foreground/75 text-[16px] leading-[1.85] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-400"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(parseInlineFormatting(line.replace(/^-\s*/, ''))),
                  }}
                />
              ))}
            </ul>
          );
        }

        // Parse inline formatting first, then check for bold-lead pattern
        const parsed = parseInlineFormatting(block);
        const boldLead = splitBoldLead(parsed);

        // Bold-lead paragraphs get a distinct visual treatment:
        // the bold phrase becomes a colored mini-heading
        if (boldLead) {
          return (
            <div key={i} className="mb-8 last:mb-0">
              <p className="text-brand-800 font-semibold text-[16px] mb-2">
                {boldLead.lead}
              </p>
              {boldLead.rest && (
                <p
                  className={`${textClasses}`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(boldLead.rest),
                  }}
                />
              )}
            </div>
          );
        }

        return (
          <p
            key={i}
            className={`${textClasses} mb-6 last:mb-0`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(parsed),
            }}
          />
        );
      })}
    </div>
  );
}

export function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const { language } = useTranslations();

  const lang = language as 'en' | 'nl';

  const getText = (text: string | { en: string; nl: string }): string =>
    typeof text === "string" ? text : (text[lang] || text.en);

  const getList = (list: string[] | { en: string[]; nl: string[] } | undefined) => {
    if (!list) return undefined;
    return Array.isArray(list) ? list : (list[lang] || list.en);
  };

  const getHeaders = (headers: string[] | { en: string[]; nl: string[] }) =>
    Array.isArray(headers) ? headers : (headers[lang] || headers.en);

  const getRows = (rows: string[][] | { en: string[][]; nl: string[][] }) =>
    Array.isArray(rows) ? rows : (rows[lang] || rows.en);

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
      <div className="max-w-[1020px] mx-auto px-6 lg:px-10">

        {/* Back */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {language === "nl" ? "Alle artikelen" : "All articles"}
        </button>

        {/* Hero image */}
        {post.image && (
          <div className="mb-10 -mx-6 lg:-mx-10 overflow-hidden rounded-xl lg:rounded-2xl">
            <img
              src={post.image}
              alt=""
              className="w-full h-[220px] sm:h-[320px] lg:h-[380px] object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-20">

          {/* Main column — capped at comfortable reading width */}
          <div className="min-w-0 max-w-[680px]">

            {/* ---- HEADER ---- */}
            <header className="mb-12">
              <p className="text-brand-500 text-[12px] font-semibold uppercase tracking-[0.18em] mb-3">
                {getText(post.category)}
              </p>

              <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-foreground leading-[1.18] tracking-[-0.02em]">
                {getText(post.title)}
              </h1>

              <p className="mt-6 text-foreground/60 text-[17px] leading-[1.75]">
                {getText(post.excerpt)}
              </p>

              <div className="flex items-center gap-3 mt-8 text-[13px] text-foreground/45">
                <span className="text-foreground/75 font-medium">{post.author}</span>
                <span className="text-foreground/20">/</span>
                <time>{formatDate(post.date)}</time>
                <span className="text-foreground/20">/</span>
                <span>{post.readTime} min</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-brand-700/70 bg-brand-50 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* ---- BODY ---- */}
            <div>

              {/* Introduction — slightly larger, higher contrast */}
              <RichText
                text={getText(post.content.introduction)}
                className="mb-14 pb-14 border-b border-border/40"
                variant="lead"
              />

              {/* Sections */}
              {post.content.sections.map((section, index) => {
                const sectionId = slugify(getText(section.title));

                return (
                  <section key={sectionId} id={sectionId} className="mb-16 scroll-mt-28">

                    {/* Section heading */}
                    <div className="mb-6">
                      <span className="text-brand-400/80 text-[13px] font-mono tabular-nums block mb-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-[1.4rem] font-bold text-foreground tracking-[-0.01em] leading-snug">
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
                      <div className="my-8">
                        <Callout type={section.callout.type} title={section.callout.title}>
                          <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(section.callout.content),
                          }} />
                        </Callout>
                      </div>
                    )}

                    {/* Code */}
                    {section.code && (
                      <div className="my-8">
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
                      <div key={si} className="mt-8 mb-6 pl-5 border-l-2 border-brand-200/60">
                        <h3 className="text-[15.5px] font-semibold text-foreground/85 mb-2">
                          {getText(sub.title)}
                        </h3>
                        <RichText
                          text={getText(sub.content)}
                          variant="sub"
                        />
                        {sub.list && (
                          <ul className="mt-4 space-y-2 pl-1">
                            {getList(sub.list)?.map((item, i) => (
                              <li key={i} className="text-foreground/70 text-[15px] leading-[1.8] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-300">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {sub.table && (
                          <div className="overflow-x-auto mt-5 border border-border/40 rounded-lg">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-brand-50/50">
                                  {getHeaders(sub.table.headers).map((h, i) => (
                                    <th key={i} className="px-4 py-2.5 text-left font-semibold text-foreground/70 border-b border-border/40 text-[13px]">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {getRows(sub.table.rows).map((row, ri) => (
                                  <tr key={ri} className="border-b border-border/20 last:border-0">
                                    {row.map((cell, ci) => (
                                      <td key={ci} className="px-4 py-2.5 text-foreground/60 text-[13px]">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Section divider */}
                    {index < post.content.sections.length - 1 && (
                      <div className="mt-16 border-b border-border/30" />
                    )}
                  </section>
                );
              })}

              {/* Conclusion */}
              <section id="conclusion" className="scroll-mt-28 pt-12 border-t border-border/40">
                <div className="mb-6">
                  <span className="text-brand-400/80 text-[13px] font-mono tabular-nums block mb-2">
                    {String(post.content.sections.length + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[1.4rem] font-bold text-foreground tracking-[-0.01em] leading-snug">
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
        <div className="mt-24 pt-8 border-t border-border/30">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-foreground/45 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            {language === "nl" ? "Terug naar alle artikelen" : "Back to all articles"}
          </button>
        </div>
      </div>
    </div>
  );
}
