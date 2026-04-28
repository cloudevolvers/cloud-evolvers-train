/**
 * Cert badge mapping for training cards across the site.
 * Microsoft publishes 4 tier badges (fundamentals, associate, expert, specialty)
 * rather than per-exam badges. We pick the right one by reading the
 * certification.name field for the tier keyword. Non-Microsoft tracks
 * (STACKIT) and non-cert workshops use their own badges.
 */

export type Tier = 'fundamentals' | 'associate' | 'expert' | 'specialty';

const EXAM_COLORS: Record<string, string> = {
  AZ: '#0078D4',
  AI: '#8b5cf6',
  SC: '#ef4444',
  MS: '#0ea5e9',
  PL: '#059669',
  AB: '#6366f1',
  STACKIT: '#00a8b5',
};

const CATEGORY_COLORS: Record<string, string> = {
  Azure: '#0078D4',
  'AI & Machine Learning': '#8b5cf6',
  'Microsoft 365': '#0ea5e9',
  'Power Platform': '#059669',
  'Security & Compliance': '#ef4444',
  Windows: '#3b82f6',
  STACKIT: '#00a8b5',
};

const CATEGORY_CODES: Record<string, string> = {
  Azure: 'AZURE',
  'AI & Machine Learning': 'AI/ML',
  'Microsoft 365': 'M365',
  'Power Platform': 'POWER',
  'Security & Compliance': 'SECURITY',
  Windows: 'WINDOWS',
  STACKIT: 'STACKIT',
};

export function examColor(examCode?: string | null, category?: string | null): string {
  if (examCode) {
    const prefix = examCode.split('-')[0];
    if (EXAM_COLORS[prefix]) return EXAM_COLORS[prefix];
  }
  if (category && CATEGORY_COLORS[category]) return CATEGORY_COLORS[category];
  return '#475569';
}

export function categoryCode(category?: string | null): string {
  if (!category) return 'WORKSHOP';
  return CATEGORY_CODES[category] || category.toUpperCase();
}

export function examTier(
  certName?: string | null,
  title?: string | null,
  examCode?: string | null
): Tier | null {
  const haystack = [certName, title].filter(Boolean).join(' ');
  if (haystack) {
    if (/Fundamentals\b/i.test(haystack)) return 'fundamentals';
    if (/Specialty\b/i.test(haystack)) return 'specialty';
    if (/Expert\b/i.test(haystack)) return 'expert';
    if (/Associate\b/i.test(haystack)) return 'associate';
    if (/\b(Architect|Leader)\b/i.test(haystack)) return 'expert';
    if (/Professional\b/i.test(haystack)) return 'associate';
  }
  if (examCode) {
    const prefix = examCode.split('-')[0];
    if (prefix === 'AB') return 'specialty';
  }
  return null;
}

export function badgeSrc(
  examCode?: string | null,
  certName?: string | null,
  title?: string | null
): string {
  if (examCode === 'STACKIT') return '/images/cert-badges/stackit.svg';
  const tier = examTier(certName, title, examCode);
  if (tier) return `/images/cert-badges/ms-${tier}.svg`;
  return '/images/cert-badges/workshop.svg';
}

export function isStackit(examCode?: string | null): boolean {
  return examCode === 'STACKIT';
}

export function isWorkshopBadge(src: string): boolean {
  return src === '/images/cert-badges/workshop.svg';
}
