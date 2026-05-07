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
