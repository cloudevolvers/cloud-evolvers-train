/**
 * SEO static page generator
 * Reads src/seo/clusters.ts and writes public/seo/<slug>/index.html for each entry.
 * Run via: bun scripts/generate-seo-pages.ts
 * Vite copies public/ verbatim to dist/ at build time.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { seoClusters } from "../src/seo/clusters";
import { renderPage } from "../src/seo/renderPage";

const publicDir = join(import.meta.dir, "..", "public", "seo");

let generated = 0;

for (const cluster of seoClusters) {
  const dir = join(publicDir, cluster.slug);
  mkdirSync(dir, { recursive: true });
  const html = renderPage(cluster);
  writeFileSync(join(dir, "index.html"), html, "utf-8");
  console.log(`  wrote public/seo/${cluster.slug}/index.html`);
  generated++;
}

console.log(`\nDone: ${generated} pages written to public/seo/`);
