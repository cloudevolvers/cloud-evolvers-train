export interface ToolCatalogEntry {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const TOOL_CATALOG: ToolCatalogEntry[] = [
  {
    slug: 'az-104-readiness-quiz',
    title: 'AZ-104 readiness quiz',
    description:
      'Twelve real-style questions across the AZ-104 domains. Tells you which areas need lab time before you book the exam.',
    href: '/tools/az-104-readiness-quiz',
  },
  {
    slug: 'microsoft-exam-cost-calculator',
    title: 'Microsoft exam cost calculator',
    description:
      'Total spend per certification path including exam vouchers, retake risk, training, and renewal cycle.',
    href: '/tools/microsoft-exam-cost-calculator',
  },
  {
    slug: 'azure-rbac-role-chooser',
    title: 'Azure RBAC role chooser',
    description:
      'Describe what someone needs to do, get the least-privilege built-in role that covers it.',
    href: '/tools/azure-rbac-role-chooser',
  },
  {
    slug: 'microsoft-cert-path-planner',
    title: 'Microsoft cert path planner',
    description:
      'Pick a target role, answer five questions, get an ordered cert sequence with realistic time estimates.',
    href: '/tools/microsoft-cert-path-planner',
  },
];

export function relatedTools(currentSlug: string): ToolCatalogEntry[] {
  return TOOL_CATALOG.filter((t) => t.slug !== currentSlug);
}
