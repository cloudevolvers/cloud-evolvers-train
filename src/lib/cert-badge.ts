/**
 * Cert badge mapping for training cards across the site.
 * Microsoft publishes 4 tier badges (fundamentals, associate, expert, specialty)
 * rather than per-exam badges. We pick the right one by reading the
 * certification.name field for the tier keyword.
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

export function examColor(examCode?: string | null): string {
  if (!examCode) return '#78716c';
  const prefix = examCode.split('-')[0];
  return EXAM_COLORS[prefix] || '#78716c';
}

export function examTier(certName?: string | null): Tier | null {
  if (!certName) return null;
  if (/Fundamentals\b/i.test(certName)) return 'fundamentals';
  if (/Specialty\b/i.test(certName)) return 'specialty';
  if (/Expert\b/i.test(certName)) return 'expert';
  if (/Associate\b/i.test(certName)) return 'associate';
  return null;
}

export function badgeSrc(examCode?: string | null, certName?: string | null): string | null {
  if (examCode === 'STACKIT') return '/images/cert-badges/stackit.svg';
  const tier = examTier(certName);
  return tier ? `/images/cert-badges/ms-${tier}.svg` : null;
}

export function isStackit(examCode?: string | null): boolean {
  return examCode === 'STACKIT';
}
