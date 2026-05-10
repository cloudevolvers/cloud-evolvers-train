/**
 * Writes route-specific HTML shells for React routes that do not already have
 * static HTML in public/. This gives crawlers OpenGraph/Twitter/canonical tags
 * before the SPA hydrates while preserving existing static SEO pages.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { blogPosts } from "../src/data/blog";

const SITE = "https://cloudevolvers.com";
const DIST_DIR = join(import.meta.dir, "..", "dist");
const PUBLIC_DIR = join(import.meta.dir, "..", "public");
const TRAINING_DIR = join(import.meta.dir, "..", "src", "data", "training-json");
const TEMPLATE_PATH = join(DIST_DIR, "index.html");
const SITEMAP_PATH = join(PUBLIC_DIR, "sitemap.xml");
const DEFAULT_IMAGE = `${SITE}/cloudevolvers-social-card.png`;
const DEFAULT_TITLE = "Azure Training Netherlands - MCT-Led Courses | Cloud Evolvers";
const DEFAULT_DESCRIPTION =
  "Hands-on Azure certification training led by Microsoft Certified Trainer Yair Knijn. AZ-900, AZ-104, AZ-305, AZ-500 courses in Dutch and English.";

type RouteMeta = {
  title: string;
  description: string;
  image?: string;
  robots?: string;
};

const routeMeta = new Map<string, RouteMeta>([
  [
    "/about",
    {
      title: "About Cloud Evolvers - MCT Certified Trainers | Cloud Evolvers",
      description:
        "Meet Cloud Evolvers, the Microsoft cloud training and readiness practice led by MCT-certified Azure and Microsoft 365 specialists.",
    },
  ],
  [
    "/blog",
    {
      title: "Azure and Microsoft Cloud Blog | Cloud Evolvers",
      description:
        "Practical Azure, Microsoft 365, security, AI, and certification articles from working Microsoft cloud engineers and trainers.",
    },
  ],
  [
    "/contact",
    {
      title: "Contact Cloud Evolvers | Cloud Evolvers",
      description:
        "Request Azure training, Microsoft 365 workshops, compliance readiness scans, or a scoped Microsoft cloud consulting session.",
    },
  ],
  [
    "/services",
    {
      title: "Microsoft Cloud Consulting and Training Services | Cloud Evolvers",
      description:
        "Azure, Microsoft 365, security, DevOps, AI, and FinOps training and implementation support for teams in the Netherlands.",
    },
  ],
  [
    "/services/cloud-management",
    {
      title: "Azure Cloud Management Services | Cloud Evolvers",
      description:
        "Improve Azure governance, operations, cost control, monitoring, and day-to-day cloud management with Cloud Evolvers.",
    },
  ],
  [
    "/services/azure-monitoring",
    {
      title: "Azure Monitoring and Observability Services | Cloud Evolvers",
      description:
        "Build Azure Monitor, Application Insights, alerting, and operational dashboards that teams can actually use.",
    },
  ],
  [
    "/services/security-compliance",
    {
      title: "Microsoft Cloud Security and Compliance Readiness | Cloud Evolvers",
      description:
        "Review Microsoft Secure Score, Defender for Cloud, Purview, Entra ID, Sentinel, DORA, NIST, CIS, and first remediation priorities.",
    },
  ],
  [
    "/services/cost-optimization",
    {
      title: "Azure Cost Optimization and FinOps Services | Cloud Evolvers",
      description:
        "Find waste, rightsize workloads, improve tagging, and build Azure FinOps habits that lower Microsoft cloud spend.",
    },
  ],
  [
    "/services/microsoft-365-copilot",
    {
      title: "Microsoft 365 Copilot Readiness Services | Cloud Evolvers",
      description:
        "Prepare Microsoft 365 tenants, governance, adoption plans, and user enablement for Copilot and agent workflows.",
    },
  ],
  [
    "/services/cloud-engineering",
    {
      title: "Cloud Engineering Services | Cloud Evolvers",
      description:
        "Design and implement Azure landing zones, infrastructure automation, platform operations, and cloud engineering practices.",
    },
  ],
  [
    "/services/infrastructure-as-code",
    {
      title: "Infrastructure as Code Services | Cloud Evolvers",
      description:
        "Use Bicep, Terraform, GitHub Actions, and Azure DevOps to make Microsoft cloud environments repeatable and reviewable.",
    },
  ],
  [
    "/services/ai-engineering",
    {
      title: "Azure AI Engineering Services | Cloud Evolvers",
      description:
        "Design Azure AI, Foundry, search, agent, and automation workloads with secure identity, data, and operational patterns.",
    },
  ],
  [
    "/services/network-engineering",
    {
      title: "Azure Network Engineering Services | Cloud Evolvers",
      description:
        "Plan and troubleshoot Azure networking, private connectivity, firewalls, routing, DNS, and hybrid network designs.",
    },
  ],
  [
    "/training",
    {
      title: "Azure and Microsoft Training Courses | Cloud Evolvers",
      description:
        "Browse MCT-led Azure, Microsoft 365, security, AI, DevOps, networking, and Power Platform courses for teams.",
    },
  ],
  [
    "/tools",
    {
      title: "Free Microsoft Cloud Tools | Cloud Evolvers",
      description:
        "Use free Azure and Microsoft certification tools, RBAC helpers, exam calculators, readiness quizzes, and compliance scanners.",
    },
  ],
  [
    "/tools/az-104-readiness-quiz",
    {
      title: "AZ-104 Readiness Quiz | Cloud Evolvers",
      description:
        "Check whether you are ready for the AZ-104 Azure Administrator exam and find the gaps to study next.",
    },
  ],
  [
    "/tools/microsoft-exam-cost-calculator",
    {
      title: "Microsoft Exam Cost Calculator | Cloud Evolvers",
      description:
        "Estimate Microsoft certification exam costs, retake budgets, and team training spend before booking exams.",
    },
  ],
  [
    "/tools/microsoft-cert-path-planner",
    {
      title: "Microsoft Certification Path Planner | Cloud Evolvers",
      description:
        "Plan Azure, Microsoft 365, security, AI, and Power Platform certification paths based on role and skill level.",
    },
  ],
  [
    "/tools/azure-rbac-role-chooser",
    {
      title: "Azure RBAC Role Chooser | Cloud Evolvers",
      description:
        "Find least-privilege Azure RBAC roles for common administrator, developer, security, and operations scenarios.",
    },
  ],
  [
    "/tools/microsoft-cloud-compliance-readiness",
    {
      title: "Microsoft Cloud Compliance Readiness Scanner | Cloud Evolvers",
      description:
        "Run a directional Azure and Microsoft 365 readiness scan across Secure Score, Defender, Purview, DORA, NIST, and CIS signals.",
    },
  ],
  [
    "/privacy-policy",
    {
      title: "Privacy Policy | Cloud Evolvers",
      description:
        "Review how Cloud Evolvers handles training requests, consultation data, analytics, and Microsoft cloud readiness scan inputs.",
    },
  ],
  [
    "/terms-of-service",
    {
      title: "Terms of Service | Cloud Evolvers",
      description:
        "Review terms for Cloud Evolvers training, consulting, readiness scans, free tools, and related Microsoft cloud services.",
    },
  ],
  [
    "/cookie-policy",
    {
      title: "Cookie Policy | Cloud Evolvers",
      description:
        "Review Cloud Evolvers cookie, analytics, and tracking practices for the training website and free tools.",
    },
  ],
  [
    "/admin",
    {
      title: "Cloud Evolvers Admin | Cloud Evolvers",
      description: "Internal Cloud Evolvers administration route.",
      robots: "noindex, nofollow",
    },
  ],
  [
    "/admin/pricing",
    {
      title: "Cloud Evolvers Pricing Admin | Cloud Evolvers",
      description: "Internal Cloud Evolvers pricing administration route.",
      robots: "noindex, nofollow",
    },
  ],
  [
    "/admin/images",
    {
      title: "Cloud Evolvers Image Admin | Cloud Evolvers",
      description: "Internal Cloud Evolvers image administration route.",
      robots: "noindex, nofollow",
    },
  ],
  [
    "/admin/bookings",
    {
      title: "Cloud Evolvers Booking Admin | Cloud Evolvers",
      description: "Internal Cloud Evolvers booking administration route.",
      robots: "noindex, nofollow",
    },
  ],
]);

function localized(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object" && value && "en" in value) {
    return String((value as { en?: string }).en ?? "");
  }
  return "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function trimDescription(value: string): string {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= 155) return clean;
  return `${clean.slice(0, 152).trim()}...`;
}

function outputPathFor(path: string): string {
  if (path === "/") return join(DIST_DIR, "index.html");
  return join(DIST_DIR, path.replace(/^\/+/, "").replace(/\/$/, ""), "index.html");
}

function canonicalFor(path: string): string {
  if (path === "/") return `${SITE}/`;
  return `${SITE}${path}`;
}

function upsert(html: string, pattern: RegExp, replacement: string): string {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `    ${replacement}\n</head>`);
}

function render(template: string, path: string, meta: RouteMeta): string {
  const title = escapeHtml(meta.title || DEFAULT_TITLE);
  const description = escapeHtml(trimDescription(meta.description || DEFAULT_DESCRIPTION));
  const canonical = escapeHtml(canonicalFor(path));
  const image = escapeHtml(meta.image || DEFAULT_IMAGE);
  const robots = escapeHtml(meta.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}">`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}">`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${image}">`)
    .replace(/<meta name="twitter:url" content="[^"]*"\s*\/?>/, `<meta name="twitter:url" content="${canonical}">`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}">`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${image}">`);

  html = html
    .replace(/<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?>/, `<link rel="alternate" hreflang="en" href="${canonical}">`)
    .replace(/<link rel="alternate" hreflang="nl" href="[^"]*"\s*\/?>/, `<link rel="alternate" hreflang="nl" href="${canonical}?lang=nl">`)
    .replace(/<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/, `<link rel="alternate" hreflang="x-default" href="${canonical}">`);

  html = upsert(html, /<meta name="robots" content="[^"]*"\s*\/?>/, `<meta name="robots" content="${robots}">`);
  return html;
}

function addTrainingRoutes() {
  const files = readdirSync(TRAINING_DIR).filter((file) => file.endsWith(".json") && !file.endsWith("-nl.json"));
  for (const file of files) {
    const raw = readFileSync(join(TRAINING_DIR, file), "utf8");
    const course = JSON.parse(raw) as {
      slug?: string;
      title?: string;
      description?: string;
      certification?: { examCode?: string; name?: string };
    };
    if (!course.slug || !course.title) continue;
    const exam = course.certification?.examCode && !course.title.includes(course.certification.examCode)
      ? `${course.certification.examCode} `
      : "";
    routeMeta.set(`/training/${course.slug}`, {
      title: `${exam}${course.title} Training | Cloud Evolvers`,
      description: trimDescription(
        `${course.description || course.title}. MCT-led Microsoft cloud training for teams with hands-on labs and practical implementation context.`,
      ),
    });
  }
}

function addBlogRoutes() {
  for (const post of blogPosts) {
    routeMeta.set(`/blog/${post.id}`, {
      title: `${localized(post.title)} | Cloud Evolvers`,
      description: trimDescription(localized(post.description) || localized(post.excerpt)),
      image: post.image?.startsWith("http") ? post.image : `${SITE}${post.image || "/cloudevolvers-social-card.png"}`,
    });
  }
}

function readSitemapPaths(): string[] {
  const xml = readFileSync(SITEMAP_PATH, "utf8");
  return Array.from(xml.matchAll(/<loc>https:\/\/cloudevolvers\.com([^<]*)<\/loc>/g))
    .map((match) => match[1] || "/")
    .map((path) => path.replace(/\/$/, "") || "/");
}

function fallbackMeta(path: string): RouteMeta {
  const label = path
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) || "Cloud Evolvers";
  return {
    title: `${label} | Cloud Evolvers`,
    description: `${label} from Cloud Evolvers, covering Microsoft cloud training, Azure readiness, security, compliance, and practical implementation support.`,
  };
}

addTrainingRoutes();
addBlogRoutes();

const template = readFileSync(TEMPLATE_PATH, "utf8");
const sitemapPaths = readSitemapPaths();
const extraPaths = ["/admin", "/admin/pricing", "/admin/images", "/admin/bookings"];
let generated = 0;
let skipped = 0;

for (const path of [...new Set([...sitemapPaths, ...extraPaths])]) {
  if (path === "/" || path.startsWith("/seo/")) {
    skipped++;
    continue;
  }

  const outputPath = outputPathFor(path);
  if (existsSync(outputPath)) {
    skipped++;
    continue;
  }

  const meta = routeMeta.get(path) || fallbackMeta(path);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, render(template, path, meta), "utf8");
  generated++;
}

console.log(`Generated route metadata HTML: ${generated} written, ${skipped} existing/static skipped.`);
