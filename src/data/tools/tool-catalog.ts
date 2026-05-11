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
  {
    slug: 'microsoft-cloud-compliance-readiness',
    title: 'Microsoft cloud compliance readiness scanner',
    description:
      'Check DORA, NIS2, NIST, CIS, Azure, and Microsoft 365 readiness and get the first remediation backlog.',
    href: '/tools/microsoft-cloud-compliance-readiness',
  },
  {
    slug: 'microsoft-cloud-evidence-pack-generator',
    title: 'Microsoft cloud evidence pack generator',
    description:
      'Generate a DORA, NIST, CIS, Azure, and Microsoft 365 evidence pack outline for a review or workshop.',
    href: '/tools/microsoft-cloud-evidence-pack-generator',
  },
];

export function relatedTools(currentSlug: string): ToolCatalogEntry[] {
  return TOOL_CATALOG.filter((t) => t.slug !== currentSlug);
}
