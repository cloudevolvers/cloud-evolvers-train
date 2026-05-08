export interface CertPath {
  id: string;
  name: string;
  examCode: string;
  examFeeUsd: number;
  passRateSelfStudy: number;
  passRateCourse: number;
  selfStudyHours: number;
  courseDurationDays: number;
  courseFeeUsd: number;
  studyMaterialsUsd: number;
  renewalYears: number;
}

export const CERT_PATHS: CertPath[] = [
  {
    id: 'az-104',
    name: 'Azure Administrator',
    examCode: 'AZ-104',
    examFeeUsd: 165,
    passRateSelfStudy: 0.45,
    passRateCourse: 0.85,
    selfStudyHours: 100,
    courseDurationDays: 4,
    courseFeeUsd: 1995,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'az-204',
    name: 'Azure Developer Associate',
    examCode: 'AZ-204',
    examFeeUsd: 165,
    passRateSelfStudy: 0.4,
    passRateCourse: 0.8,
    selfStudyHours: 120,
    courseDurationDays: 5,
    courseFeeUsd: 2495,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'az-305',
    name: 'Azure Solutions Architect Expert',
    examCode: 'AZ-305',
    examFeeUsd: 165,
    passRateSelfStudy: 0.35,
    passRateCourse: 0.75,
    selfStudyHours: 140,
    courseDurationDays: 4,
    courseFeeUsd: 2495,
    studyMaterialsUsd: 129,
    renewalYears: 1,
  },
  {
    id: 'az-500',
    name: 'Azure Security Engineer',
    examCode: 'AZ-500',
    examFeeUsd: 165,
    passRateSelfStudy: 0.42,
    passRateCourse: 0.82,
    selfStudyHours: 110,
    courseDurationDays: 4,
    courseFeeUsd: 2295,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'az-700',
    name: 'Azure Network Engineer',
    examCode: 'AZ-700',
    examFeeUsd: 165,
    passRateSelfStudy: 0.4,
    passRateCourse: 0.8,
    selfStudyHours: 110,
    courseDurationDays: 3,
    courseFeeUsd: 1995,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'ms-102',
    name: 'Microsoft 365 Administrator',
    examCode: 'MS-102',
    examFeeUsd: 165,
    passRateSelfStudy: 0.45,
    passRateCourse: 0.85,
    selfStudyHours: 90,
    courseDurationDays: 5,
    courseFeeUsd: 2495,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'ai-102',
    name: 'Azure AI Engineer',
    examCode: 'AI-102',
    examFeeUsd: 165,
    passRateSelfStudy: 0.4,
    passRateCourse: 0.8,
    selfStudyHours: 120,
    courseDurationDays: 4,
    courseFeeUsd: 2295,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'dp-203',
    name: 'Azure Data Engineer',
    examCode: 'DP-203',
    examFeeUsd: 165,
    passRateSelfStudy: 0.38,
    passRateCourse: 0.78,
    selfStudyHours: 130,
    courseDurationDays: 4,
    courseFeeUsd: 2295,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'sc-300',
    name: 'Identity and Access Administrator',
    examCode: 'SC-300',
    examFeeUsd: 165,
    passRateSelfStudy: 0.45,
    passRateCourse: 0.83,
    selfStudyHours: 100,
    courseDurationDays: 4,
    courseFeeUsd: 2095,
    studyMaterialsUsd: 99,
    renewalYears: 1,
  },
  {
    id: 'sc-100',
    name: 'Cybersecurity Architect Expert',
    examCode: 'SC-100',
    examFeeUsd: 165,
    passRateSelfStudy: 0.32,
    passRateCourse: 0.72,
    selfStudyHours: 150,
    courseDurationDays: 4,
    courseFeeUsd: 2495,
    studyMaterialsUsd: 129,
    renewalYears: 1,
  },
];

export const RENEWAL_FEE_USD = 99;
export const COURSE_HOURS_PER_DAY = 8;

export function expectedExamFee(examFeeUsd: number, passRate: number): number {
  const expectedAttempts = 1 + (1 - passRate);
  return examFeeUsd * expectedAttempts;
}

export function renewalsCost(years: number, renewalYears: number): number {
  return Math.floor(years / renewalYears) * RENEWAL_FEE_USD;
}

/* ----------------------------------------------------------------------------
 * Cert path planner data
 *
 * Used by /tools/microsoft-cert-path-planner. Kept separate from CERT_PATHS
 * (which is consumed by the cost calculator) so that adding fundamentals and
 * additional expert exams here cannot break the calculator's dropdown.
 *
 * Hours come from Microsoft Learn estimates and instructor experience.
 * Fundamentals: ~30 hours. Associate: 90 to 130 hours. Expert: 130 to 160.
 * --------------------------------------------------------------------------*/

export type CertTier = 'fundamental' | 'associate' | 'expert';

export interface PlannerCert {
  examCode: string;
  examName: string;
  prepHours: number;
  tier: CertTier;
}

export type RoleId =
  | 'azure-admin'
  | 'azure-architect'
  | 'azure-security'
  | 'azure-developer'
  | 'm365-admin'
  | 'azure-ai'
  | 'azure-network'
  | 'azure-data';

export interface RoleProfile {
  id: RoleId;
  label: string;
  blurb: string;
  basePath: string[];
  alternative?: { code: string; reason: string };
  expertHint?: string;
}

export const PLANNER_CERTS: Record<string, PlannerCert> = {
  'AZ-900': { examCode: 'AZ-900', examName: 'Microsoft Azure Fundamentals', prepHours: 30, tier: 'fundamental' },
  'MS-900': { examCode: 'MS-900', examName: 'Microsoft 365 Fundamentals', prepHours: 30, tier: 'fundamental' },
  'AI-900': { examCode: 'AI-900', examName: 'Azure AI Fundamentals', prepHours: 25, tier: 'fundamental' },
  'DP-900': { examCode: 'DP-900', examName: 'Azure Data Fundamentals', prepHours: 30, tier: 'fundamental' },
  'AZ-104': { examCode: 'AZ-104', examName: 'Azure Administrator Associate', prepHours: 100, tier: 'associate' },
  'AZ-204': { examCode: 'AZ-204', examName: 'Azure Developer Associate', prepHours: 120, tier: 'associate' },
  'AZ-500': { examCode: 'AZ-500', examName: 'Azure Security Engineer Associate', prepHours: 110, tier: 'associate' },
  'AZ-700': { examCode: 'AZ-700', examName: 'Azure Network Engineer Associate', prepHours: 110, tier: 'associate' },
  'MS-102': { examCode: 'MS-102', examName: 'Microsoft 365 Administrator', prepHours: 90, tier: 'associate' },
  'AI-102': { examCode: 'AI-102', examName: 'Azure AI Engineer Associate', prepHours: 120, tier: 'associate' },
  'DP-203': { examCode: 'DP-203', examName: 'Azure Data Engineer Associate', prepHours: 130, tier: 'associate' },
  'AZ-305': { examCode: 'AZ-305', examName: 'Azure Solutions Architect Expert', prepHours: 140, tier: 'expert' },
  'AZ-400': { examCode: 'AZ-400', examName: 'DevOps Engineer Expert', prepHours: 130, tier: 'expert' },
  'SC-100': { examCode: 'SC-100', examName: 'Cybersecurity Architect Expert', prepHours: 150, tier: 'expert' },
};

export const PLANNER_ROLES: RoleProfile[] = [
  {
    id: 'azure-admin',
    label: 'Azure Administrator (cloud ops)',
    blurb: 'Day-to-day Azure operations: identity, compute, storage, networking, monitoring.',
    basePath: ['AZ-900', 'AZ-104'],
    expertHint: 'AZ-305 (architect) is the natural next step if you want to design rather than operate.',
  },
  {
    id: 'azure-architect',
    label: 'Azure Solutions Architect',
    blurb: 'Design end-to-end Azure solutions across identity, networking, data, and compute.',
    basePath: ['AZ-900', 'AZ-104', 'AZ-305'],
    expertHint: 'SC-100 cybersecurity architect pairs well if you want to lead security architecture too.',
  },
  {
    id: 'azure-security',
    label: 'Azure Security Engineer',
    blurb: 'Identity, threat protection, platform security, and data security on Azure.',
    basePath: ['AZ-900', 'AZ-104', 'AZ-500'],
    alternative: {
      code: 'SC-100',
      reason: 'If you already operate at architect level, SC-100 covers the cybersecurity architecture path instead of AZ-500.',
    },
    expertHint: 'SC-100 is the expert step beyond AZ-500 for a security architecture seat.',
  },
  {
    id: 'azure-developer',
    label: 'Azure Developer / DevOps',
    blurb: 'Build and ship cloud-native apps on Azure, then automate the pipeline around them.',
    basePath: ['AZ-900', 'AZ-204', 'AZ-400'],
    expertHint: 'AZ-400 is already the expert step. AZ-305 sideways into architecture is the common pivot.',
  },
  {
    id: 'm365-admin',
    label: 'Microsoft 365 Administrator',
    blurb: 'Manage Microsoft 365 tenants: identity, Exchange Online, Teams, Intune, compliance.',
    basePath: ['MS-900', 'MS-102'],
    alternative: {
      code: 'SC-300',
      reason: 'SC-300 (identity admin) and SC-400 (information protection) are common adjacent specialties.',
    },
    expertHint: 'No expert tier sits directly above MS-102. SC-100 covers the security architecture angle.',
  },
  {
    id: 'azure-ai',
    label: 'Azure AI Engineer',
    blurb: 'Build AI solutions with Azure OpenAI, Cognitive Services, and AI Foundry.',
    basePath: ['AI-900', 'AI-102'],
    expertHint: 'No AI expert exam yet. AZ-305 architect is the most common pivot for senior AI roles.',
  },
  {
    id: 'azure-network',
    label: 'Azure Network Engineer',
    blurb: 'Design and operate hybrid networking, ExpressRoute, VPN, and Azure Firewall.',
    basePath: ['AZ-900', 'AZ-104', 'AZ-700'],
    expertHint: 'AZ-305 architect is the typical expert step for network specialists who want to design.',
  },
  {
    id: 'azure-data',
    label: 'Azure Data Engineer',
    blurb: 'Ingest, transform, and serve data on Azure with Synapse, Fabric, Databricks.',
    basePath: ['DP-900', 'DP-203'],
    expertHint: 'DP-203 is the current associate. Microsoft is shifting to Fabric-based exams; check Learn before booking.',
  },
];

export const PLANNER_FUNDAMENTAL_CODES = new Set(['AZ-900', 'MS-900', 'AI-900', 'DP-900']);

export type CurrentLevel =
  | 'none'
  | 'fundamentals-only'
  | 'one-associate'
  | 'multi-associate'
  | 'expert';

export type FundamentalsStance = 'take-first' | 'skip';

export type WeeklyHours = 5 | 10 | 20;

export type FocusDepth = 'breadth' | 'depth';

/**
 * Trim a base path against the visitor's current level and fundamentals stance.
 *
 * Rules:
 *  - none + take-first      -> full path
 *  - none + skip            -> drop fundamentals prefix
 *  - fundamentals-only      -> drop fundamentals (they have it)
 *  - one-associate          -> drop fundamentals AND drop the first associate
 *  - multi-associate        -> drop everything before the expert tier
 *  - expert                 -> empty path (already done)
 */
export function trimPath(
  basePath: string[],
  level: CurrentLevel,
  stance: FundamentalsStance,
): string[] {
  if (level === 'expert') return [];

  const path = [...basePath];

  if (level === 'none') {
    if (stance === 'skip') {
      return path.filter((c) => !PLANNER_FUNDAMENTAL_CODES.has(c));
    }
    return path;
  }

  if (level === 'fundamentals-only') {
    return path.filter((c) => !PLANNER_FUNDAMENTAL_CODES.has(c));
  }

  if (level === 'one-associate') {
    const noFund = path.filter((c) => !PLANNER_FUNDAMENTAL_CODES.has(c));
    const firstAssocIdx = noFund.findIndex((c) => PLANNER_CERTS[c]?.tier === 'associate');
    if (firstAssocIdx === -1) return noFund;
    return noFund.filter((_, i) => i !== firstAssocIdx);
  }

  if (level === 'multi-associate') {
    return path.filter((c) => PLANNER_CERTS[c]?.tier === 'expert');
  }

  return path;
}

export function pacingWeeks(prepHours: number, hoursPerWeek: WeeklyHours): number {
  return Math.ceil(prepHours / hoursPerWeek);
}

export function rationaleFor(
  role: RoleProfile,
  trimmedPath: string[],
  level: CurrentLevel,
  focus: FocusDepth,
): string {
  if (level === 'expert') {
    return `You are already at expert level for the ${role.label.toLowerCase()} track. ${role.expertHint ?? 'Pivot to an adjacent expert track or take a specialty exam.'}`;
  }
  if (trimmedPath.length === 0) {
    return `Nothing to add. You have covered the standard path for the ${role.label.toLowerCase()} track.`;
  }
  const last = PLANNER_CERTS[trimmedPath[trimmedPath.length - 1]];
  const focusCopy = focus === 'depth'
    ? `Focus on lab depth at each stop. Recruiters value working knowledge over a longer cert list.`
    : `Once you finish ${last.examCode} you have a solid base to spread sideways into adjacent specialties.`;
  return `${role.blurb} The path ends at ${last.examCode} (${last.examName}). ${focusCopy}`;
}

export function pivotHint(role: RoleProfile, trimmedPath: string[]): string | null {
  if (trimmedPath.length < 2) return null;
  if (role.id === 'azure-admin') {
    return 'If you decide to specialise in security or networking later, you can pivot at AZ-104 into AZ-500 or AZ-700 instead of going to AZ-305.';
  }
  if (role.id === 'azure-architect') {
    return 'If pure architecture feels abstract, AZ-104 is the pivot point into a hands-on operations role.';
  }
  if (role.id === 'azure-security') {
    return 'AZ-104 is the pivot into general operations if security feels too narrow.';
  }
  if (role.id === 'azure-developer') {
    return 'AZ-204 is the pivot into AZ-400 (DevOps) or sideways into AZ-305 (architect).';
  }
  if (role.id === 'azure-network') {
    return 'AZ-104 lets you pivot into AZ-500 (security) or AZ-305 (architect) instead of network depth.';
  }
  return null;
}

export interface RoleMatrixRow {
  role: string;
  start: string;
  associate: string;
  expert: string;
  notes: string;
}

export const ROLE_MATRIX: RoleMatrixRow[] = [
  {
    role: 'Azure Administrator',
    start: 'AZ-900',
    associate: 'AZ-104',
    expert: 'AZ-305 (architect pivot)',
    notes: 'The default starter ladder. Most operations roles list AZ-104 as the baseline.',
  },
  {
    role: 'Azure Solutions Architect',
    start: 'AZ-900',
    associate: 'AZ-104',
    expert: 'AZ-305',
    notes: 'AZ-305 needs the AZ-104 muscle memory. Skipping AZ-104 is possible but usually painful.',
  },
  {
    role: 'Azure Security Engineer',
    start: 'AZ-900',
    associate: 'AZ-104, then AZ-500',
    expert: 'SC-100',
    notes: 'AZ-104 first because security work assumes you can already operate the platform.',
  },
  {
    role: 'Azure Developer / DevOps',
    start: 'AZ-900',
    associate: 'AZ-204',
    expert: 'AZ-400',
    notes: 'AZ-400 is the only DevOps Expert. It assumes either AZ-104 or AZ-204 at associate level.',
  },
  {
    role: 'Microsoft 365 Administrator',
    start: 'MS-900',
    associate: 'MS-102',
    expert: 'SC-100 (security architect)',
    notes: 'No M365 expert tier. SC-300 / SC-400 are common adjacent specialties for identity and compliance.',
  },
  {
    role: 'Azure AI Engineer',
    start: 'AI-900',
    associate: 'AI-102',
    expert: '(none yet)',
    notes: 'Microsoft has not published an AI-tier expert. AZ-305 is the closest sideways move for senior AI roles.',
  },
  {
    role: 'Azure Network Engineer',
    start: 'AZ-900',
    associate: 'AZ-104, then AZ-700',
    expert: 'AZ-305 (architect pivot)',
    notes: 'AZ-700 is associate-tier. There is no dedicated network expert exam.',
  },
  {
    role: 'Azure Data Engineer',
    start: 'DP-900',
    associate: 'DP-203',
    expert: '(in transition)',
    notes: 'DP-203 is current. Microsoft Fabric exams are replacing the older data ladder; verify on Learn before booking.',
  },
];
