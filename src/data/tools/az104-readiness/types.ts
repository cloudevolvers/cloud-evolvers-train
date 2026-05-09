export type QuizLang = 'en' | 'nl' | 'de' | 'fr' | 'es';

export const QUIZ_LANGS: QuizLang[] = ['en', 'nl', 'de', 'fr', 'es'];

export type QuizDomain =
  | 'identity-governance'
  | 'storage'
  | 'compute'
  | 'networking'
  | 'monitoring-backup';

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  domain: QuizDomain;
  question: string;
  options: QuizOption[];
  correctId: string;
  explanation: string;
}

export interface QuizUi {
  seoTitle: string;
  seoDescription: string;
  breadcrumbTools: string;
  breadcrumbQuiz: string;
  eyebrow: string;
  title: string;
  lede: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  startButton: string;
  questionOf: string;
  backButton: string;
  nextButton: string;
  seeResults: string;
  resultsEyebrow: string;
  scoreHeading: string;
  byDomain: string;
  examPortion: string;
  answerReview: string;
  correctLabel: string;
  verdictLikelyReady: string;
  verdictClose: string;
  verdictNotYet: string;
  adviceLikelyReady: string;
  adviceClose: string;
  adviceNotYet: string;
  seeCourseCta: string;
  retakeButton: string;
  showInEnglish: string;
  showInLang: string;
  languageSwitcherLabel: string;
  domainLabels: Record<QuizDomain, string>;
}

export interface QuizLangPack {
  lang: QuizLang;
  htmlLang: string;
  ui: QuizUi;
  questions: QuizQuestion[];
}
