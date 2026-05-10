/**
 * Sitemap generator
 * Reads blog posts, training catalogue, and SEO clusters, then writes
 * public/sitemap.xml. Run via: bun scripts/generate-sitemap.ts
 *
 * Wired into the build via package.json so the sitemap stays current
 * every time the site is built. No manual editing.
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { blogPosts } from "../src/data/blog/index";
import { seoClusters } from "../src/seo/clusters";

const SITE = "https://cloudevolvers.com";
const today = new Date().toISOString().slice(0, 10);

interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: number;
  alternates?: { hreflang: string; href: string }[];
}

const urls: UrlEntry[] = [];

const marketing: UrlEntry[] = [
  { loc: `${SITE}/`, lastmod: today, changefreq: "weekly", priority: 1.0 },
  { loc: `${SITE}/about`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/contact`, lastmod: today, changefreq: "monthly", priority: 0.6 },
  { loc: `${SITE}/services`, lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: `${SITE}/services/cloud-management`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/azure-monitoring`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/security-compliance`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/cost-optimization`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/microsoft-365-copilot`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/cloud-engineering`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/infrastructure-as-code`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/ai-engineering`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/services/network-engineering`, lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/training`, lastmod: today, changefreq: "weekly", priority: 0.9 },
  { loc: `${SITE}/blog`, lastmod: today, changefreq: "weekly", priority: 0.9 },
  { loc: `${SITE}/tools`, lastmod: today, changefreq: "weekly", priority: 0.9 },
  { loc: `${SITE}/tools/az-104-readiness-quiz`, lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: `${SITE}/tools/microsoft-exam-cost-calculator`, lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: `${SITE}/tools/microsoft-cert-path-planner`, lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: `${SITE}/tools/azure-rbac-role-chooser`, lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: `${SITE}/tools/microsoft-cloud-compliance-readiness`, lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: `${SITE}/help/`, lastmod: today, changefreq: "monthly", priority: 0.5 },
  { loc: `${SITE}/trust/`, lastmod: today, changefreq: "monthly", priority: 0.5 },
  { loc: `${SITE}/security-questionnaire/`, lastmod: today, changefreq: "monthly", priority: 0.5 },
  { loc: `${SITE}/status/`, lastmod: today, changefreq: "monthly", priority: 0.5 },
  { loc: `${SITE}/brand/`, lastmod: today, changefreq: "yearly", priority: 0.3 },
  { loc: `${SITE}/privacy/`, lastmod: today, changefreq: "yearly", priority: 0.3 },
  { loc: `${SITE}/terms/`, lastmod: today, changefreq: "yearly", priority: 0.3 },
  { loc: `${SITE}/privacy-policy`, lastmod: today, changefreq: "yearly", priority: 0.3 },
  { loc: `${SITE}/terms-of-service`, lastmod: today, changefreq: "yearly", priority: 0.3 },
  { loc: `${SITE}/cookie-policy`, lastmod: today, changefreq: "yearly", priority: 0.3 },
];
urls.push(...marketing);

const trainingDir = join(import.meta.dir, "..", "src", "data", "training-json");
const trainingFiles = readdirSync(trainingDir).filter(
  (f) => f.endsWith(".json") && !f.endsWith("-nl.json"),
);

let trainingCount = 0;
for (const file of trainingFiles) {
  try {
    const json = JSON.parse(readFileSync(join(trainingDir, file), "utf-8"));
    if (!json.slug) continue;
    const nlFile = file.replace(".json", "-nl.json");
    const nlExists = readdirSync(trainingDir).includes(nlFile);
    const entry: UrlEntry = {
      loc: `${SITE}/training/${json.slug}`,
      lastmod: today,
      changefreq: "monthly",
      priority: 0.8,
    };
    if (nlExists) {
      entry.alternates = [
        { hreflang: "en", href: `${SITE}/training/${json.slug}` },
        { hreflang: "nl", href: `${SITE}/training/${json.slug}?lang=nl` },
      ];
    }
    urls.push(entry);
    trainingCount++;
  } catch (err) {
    console.error(`Skipping ${file}:`, err);
  }
}

let blogCount = 0;
for (const post of blogPosts) {
  if (!post.id) continue;
  urls.push({
    loc: `${SITE}/blog/${post.id}`,
    lastmod: post.date || today,
    changefreq: "monthly",
    priority: 0.7,
    alternates: [
      { hreflang: "en", href: `${SITE}/blog/${post.id}` },
      { hreflang: "nl", href: `${SITE}/blog/${post.id}?lang=nl` },
    ],
  });
  blogCount++;
}

let clusterCount = 0;
for (const cluster of seoClusters) {
  if (!cluster.slug) continue;
  urls.push({
    loc: `${SITE}/seo/${cluster.slug}/`,
    lastmod: today,
    changefreq: "monthly",
    priority: 0.6,
  });
  clusterCount++;
}

const xmlEntries = urls
  .map((u) => {
    const alt = u.alternates
      ? u.alternates
          .map(
            (a) =>
              `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`,
          )
          .join("\n")
      : "";
    return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>${alt ? "\n" + alt : ""}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlEntries}
</urlset>
`;

const out = join(import.meta.dir, "..", "public", "sitemap.xml");
writeFileSync(out, xml, "utf-8");

console.log(`Sitemap written: ${out}`);
console.log(
  `Totals: marketing=${marketing.length} training=${trainingCount} blog=${blogCount} clusters=${clusterCount} total=${urls.length}`,
);
