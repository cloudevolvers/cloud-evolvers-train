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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">

          {/* Main column */}
          <div className="min-w-0">

            {/* ---- HEADER ---- */}
            <header className="mb-14">
              <p className="text-foreground/40 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
                {getText(post.category)}
              </p>

              <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-foreground leading-[1.12] tracking-[-0.025em]">
                {getText(post.title)}
              </h1>

              <p className="mt-5 text-foreground/55 text-[1.05rem] leading-[1.7] max-w-[600px]">
                {getText(post.excerpt)}
              </p>

              <div className="flex items-center gap-2 mt-6 text-[13px] text-foreground/40">
                <span className="text-foreground/70 font-medium">{post.author}</span>
                <span>/</span>
                <time>{formatDate(post.date)}</time>
                <span>/</span>
                <span>{post.readTime} min</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-foreground/35 border border-border/60 rounded px-2 py-0.5"
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
              <p className="text-foreground/75 text-[15.5px] leading-[1.78] mb-16">
                {getText(post.content.introduction)}
              </p>

              {/* Sections */}
              {post.content.sections.map((section, index) => {
                const sectionId = slugify(getText(section.title));

                return (
                  <section key={sectionId} id={sectionId} className="mb-16 scroll-mt-28">

                    {/* Section heading with number */}
                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="text-foreground/20 text-sm font-mono tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-[1.3rem] font-semibold text-foreground tracking-[-0.01em] leading-tight">
                        {getText(section.title)}
                      </h2>
                    </div>

                    {/* Section body */}
                    <p className="text-foreground/70 text-[15.5px] leading-[1.78] mb-6">
                      {getText(section.content)}
                    </p>

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
                      <div key={si} className="mt-8 mb-6 pl-5 border-l border-border/40">
                        <h3 className="text-[15px] font-medium text-foreground/85 mb-2">
                          {getText(sub.title)}
                        </h3>
                        <p className="text-foreground/65 text-[15px] leading-[1.75]">
                          {getText(sub.content)}
                        </p>
                        {sub.list && (
                          <ul className="mt-3 space-y-1 pl-4">
                            {getList(sub.list)?.map((item, i) => (
                              <li key={i} className="text-foreground/65 text-[14.5px] leading-[1.7] list-disc">
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
              <section id="conclusion" className="scroll-mt-28 pt-10 border-t border-border/40">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-foreground/20 text-sm font-mono tabular-nums">
                    {String(post.content.sections.length + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[1.3rem] font-semibold text-foreground tracking-[-0.01em]">
                    {conclusionLabel}
                  </h2>
                </div>
                <p className="text-foreground/70 text-[15.5px] leading-[1.78]">
                  {getText(post.content.conclusion)}
                </p>
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
