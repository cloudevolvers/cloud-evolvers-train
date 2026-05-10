/**
 * Pure-function page renderer.
 * Takes a SeoCluster and returns a complete HTML string.
 * No React, no DOM, runs in Bun at build time.
 */

import type { SeoCluster } from "./clusters";

const SITE_URL = "https://cloudevolvers.com";
const SITE_NAME = "Cloud Evolvers";
const DEFAULT_OG_IMAGE = `${SITE_URL}/cloudevolvers-social-card.png`;
const TRAINING_URL = `${SITE_URL}/training`;
const COMPLIANCE_SCANNER_URL = `${SITE_URL}/tools/microsoft-cloud-compliance-readiness`;

// -----------------------------------------------------------------------
// Schema generators
// -----------------------------------------------------------------------

function articleSchema(c: SeoCluster): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.h1,
    description: c.metaDescription,
    url: `${SITE_URL}/seo/${c.slug}/`,
    datePublished: c.publishedDate,
    dateModified: c.modifiedDate,
    author: {
      "@type": "Person",
      name: "Yaïr Knijn",
      jobTitle: "Microsoft Certified Trainer",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/cloudevolvers-logo-mountain.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/seo/${c.slug}/`,
    },
  });
}

function courseSchema(c: SeoCluster): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.title,
    description: c.metaDescription,
    url: `${SITE_URL}/seo/${c.slug}/`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: c.publishedDate,
  });
}

function itemListSchema(c: SeoCluster): string {
  // Extract list items from FAQ as a simple list or use internal links
  const items = c.internalLinks.map((link, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: link.label,
    url: `${SITE_URL}/seo/${link.slug}/`,
  }));
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.h1,
    description: c.metaDescription,
    url: `${SITE_URL}/seo/${c.slug}/`,
    numberOfItems: items.length,
    itemListElement: items,
  });
}

function faqSchema(c: SeoCluster): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  });
}

function primarySchema(c: SeoCluster): string {
  switch (c.schemaType) {
    case "Course":
      return courseSchema(c);
    case "ItemList":
      return itemListSchema(c);
    default:
      return articleSchema(c);
  }
}

// -----------------------------------------------------------------------
// HTML sections
// -----------------------------------------------------------------------

function renderNav(internalLinks: SeoCluster["internalLinks"]): string {
  const links = internalLinks
    .map(
      (l) =>
        `<a href="${SITE_URL}/seo/${l.slug}/" class="related-link">${l.label}</a>`
    )
    .join("\n      ");
  return `
    <aside class="related-pages">
      <h2>Related guides</h2>
      ${links}
    </aside>`;
}

function renderFaq(faq: SeoCluster["faq"]): string {
  if (!faq.length) return "";
  const items = faq
    .map(
      (f) => `
      <div class="faq-item">
        <h3 class="faq-question">${escapeHtml(f.q)}</h3>
        <p class="faq-answer">${escapeHtml(f.a)}</p>
      </div>`
    )
    .join("");
  return `
    <section class="faq-section" aria-label="Frequently asked questions">
      <h2>Frequently asked questions</h2>
${items}
    </section>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// -----------------------------------------------------------------------
// Full page render
// -----------------------------------------------------------------------

export function renderPage(c: SeoCluster): string {
  const canonicalUrl = `${SITE_URL}/seo/${c.slug}/`;
  const cta = ctaFor(c);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(c.title)}</title>
  <meta name="description" content="${escapeHtml(c.metaDescription)}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${escapeHtml(c.title)}" />
  <meta property="og:description" content="${escapeHtml(c.metaDescription)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="${SITE_NAME}" />

  <!-- Twitter card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(c.title)}" />
  <meta name="twitter:description" content="${escapeHtml(c.metaDescription)}" />
  <meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />

  <!-- Primary schema -->
  <script type="application/ld+json">${primarySchema(c)}</script>

  <!-- FAQ schema (always present when FAQ array is non-empty) -->
  ${c.faq.length ? `<script type="application/ld+json">${faqSchema(c)}</script>` : ""}

  <!-- Minimal styles: readable without the SPA bundle -->
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: Inter, system-ui, -apple-system, sans-serif;
      background: #fff;
      color: #111;
      line-height: 1.65;
      padding: 0;
    }
    .site-header {
      border-bottom: 1px solid #e5e7eb;
      padding: 0.875rem 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .site-header a { text-decoration: none; color: inherit; font-weight: 600; }
    .site-header nav { margin-left: auto; display: flex; gap: 1.5rem; }
    .site-header nav a { font-size: 0.9rem; color: #374151; }
    main { max-width: 780px; margin: 0 auto; padding: 2.5rem 1.5rem 4rem; }
    h1 { font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 700; line-height: 1.2; margin-bottom: 1.25rem; }
    h2 { font-size: 1.35rem; font-weight: 600; margin: 2.25rem 0 0.75rem; }
    h3 { font-size: 1.1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; }
    p { margin-bottom: 1rem; }
    ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
    li { margin-bottom: 0.35rem; }
    a { color: #16a34a; }
    a:hover { text-decoration: underline; }
    pre {
      background: #f3f4f6;
      border-radius: 6px;
      padding: 1rem 1.25rem;
      overflow-x: auto;
      margin: 1.25rem 0;
      font-size: 0.85rem;
      line-height: 1.5;
    }
    code { font-family: 'Fira Code', 'Cascadia Code', monospace; font-size: 0.875em; }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1.25rem 0;
      font-size: 0.9rem;
    }
    th, td { border: 1px solid #e5e7eb; padding: 0.6rem 0.875rem; text-align: left; }
    th { background: #f9fafb; font-weight: 600; }
    .meta { font-size: 0.85rem; color: #6b7280; margin-bottom: 1.75rem; }
    .cta-band {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      padding: 1.5rem;
      margin: 2.5rem 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;
    }
    .cta-band p { margin: 0; font-weight: 500; }
    .cta-button {
      display: inline-block;
      background: #16a34a;
      color: #fff;
      padding: 0.6rem 1.25rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      white-space: nowrap;
    }
    .cta-button:hover { background: #15803d; text-decoration: none; }
    .related-pages {
      border-top: 1px solid #e5e7eb;
      padding-top: 1.5rem;
      margin-top: 2.5rem;
    }
    .related-pages h2 { margin-top: 0; font-size: 1rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }
    .related-link {
      display: block;
      padding: 0.4rem 0;
      color: #16a34a;
      text-decoration: none;
      font-size: 0.95rem;
    }
    .related-link:hover { text-decoration: underline; }
    .faq-section { margin-top: 2.5rem; border-top: 1px solid #e5e7eb; padding-top: 1.5rem; }
    .faq-item { margin-bottom: 1.5rem; }
    .faq-question { font-size: 1rem; font-weight: 600; margin-bottom: 0.4rem; }
    .faq-answer { color: #374151; }
    .site-footer {
      border-top: 1px solid #e5e7eb;
      padding: 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: #9ca3af;
    }
    .site-footer a { color: #6b7280; }
    @media (max-width: 600px) {
      main { padding: 1.5rem 1rem 3rem; }
      .site-header nav { display: none; }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <a href="${SITE_URL}/">Cloud Evolvers</a>
    <nav>
      <a href="${SITE_URL}/training">Training</a>
      <a href="${SITE_URL}/blog">Blog</a>
      <a href="${SITE_URL}/contact">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h1>${escapeHtml(c.h1)}</h1>
      <p class="meta">
        By <a href="${SITE_URL}/about">Yaïr Knijn</a>, Microsoft Certified Trainer &mdash;
        Updated ${new Date(c.modifiedDate).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div class="article-content">
        ${c.content.trim()}
      </div>

      <div class="cta-band">
        <p>${escapeHtml(cta.text)}</p>
        <a href="${cta.href}" class="cta-button">${escapeHtml(cta.button)}</a>
      </div>

${renderFaq(c.faq)}
${renderNav(c.internalLinks)}
    </article>
  </main>

  <footer class="site-footer">
    <p>
      &copy; ${new Date().getFullYear()} Cloud Evolvers &mdash; Spot Cloud B.V. &mdash;
      <a href="${SITE_URL}/privacy-policy">Privacy</a> &middot;
      <a href="${SITE_URL}/training">Training catalog</a> &middot;
      <a href="${SITE_URL}/contact">Contact</a>
    </p>
  </footer>
</body>
</html>`;
}

function ctaFor(c: SeoCluster) {
  const complianceIntent = /(dora|nis2|nist|cis|secure score|defender|purview|compliance|security)/i.test(
    `${c.slug} ${c.title} ${c.targetKeyword}`,
  );

  if (complianceIntent) {
    return {
      text: "Need a first Microsoft cloud compliance backlog? Run the free readiness scanner.",
      href: COMPLIANCE_SCANNER_URL,
      button: "Run the readiness scanner",
    };
  }

  return {
    text: "Want MCT-led preparation? Browse the course catalog.",
    href: TRAINING_URL,
    button: "Browse the course catalog",
  };
}
