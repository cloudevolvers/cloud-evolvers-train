export type ExamLanguage = 'en' | 'nl' | 'de' | 'fr' | 'es'
export type ExamSlug =
  | 'az-900'
  | 'az-104'
  | 'az-305'
  | 'ai-900'
  | 'ai-102'
  | 'az-204'
  | 'az-500'
  | 'sc-900'
  | 'ms-900'
  | 'pl-300'

export const EXAM_LANGUAGES: ExamLanguage[] = ['en', 'nl', 'de', 'fr', 'es']
export const EXAM_SLUGS: ExamSlug[] = [
  'az-900',
  'az-104',
  'az-305',
  'ai-900',
  'ai-102',
  'az-204',
  'az-500',
  'sc-900',
  'ms-900',
  'pl-300',
]

export interface ExamOption {
  id: 'a' | 'b' | 'c' | 'd'
  text: string
}

export interface ExamQuestion {
  id: string
  topic: string
  question: string
  options: ExamOption[]
  correctId: 'a' | 'b' | 'c' | 'd'
  explanation: string
}

export interface ExamSet {
  examCode: string
  examName: string
  description: string
  ceCourseSlug: string
  ceCourseUrl: string
  ceCoursePriceCents: number | null
  questions: ExamQuestion[]
}

export interface ExamUiCopy {
  // Page-level
  practiceLabel: string
  indexTitle: string
  indexLede: string
  indexMetaTitle: string
  indexMetaDescription: string
  examMetaTitle: (examCode: string, examName: string) => string
  examMetaDescription: (examCode: string, examName: string) => string

  // Disclaimer
  disclaimer: string
  disclaimerLabel: string

  // Quiz interaction
  questionOf: (current: number, total: number) => string
  correctLabel: string
  incorrectLabel: string
  nextQuestion: string
  seeScore: string
  startExam: string
  practiceQuestionsLabel: (count: number) => string

  // Result screen
  resultEyebrow: string
  resultHeading: (score: number, total: number) => string
  resultScoreLine: (pct: number) => string
  resultPassNote: string
  resultFailNote: string
  ctaEyebrow: string
  ctaHeadingDefault: (examCode: string) => string
  ctaBodyDefault: (examName: string, examCode: string) => string
  ctaBodyArchitect: (examName: string) => string
  ctaArchitectFollowUp: string
  ctaPriceSuffix: string
  ctaButton: string
  ctaRestart: string
  perQuestionToggle: string
  correctAnswerLine: string

  // Language switcher
  languageSwitcherLabel: string

  // Index cards
  indexExamLabel: string
  indexQuestionsLabel: (count: number) => string
  pickExamHeading: string
  switchLanguageHeading: string
  trainerNote: string
}

export interface ExamLanguagePack {
  language: ExamLanguage
  htmlLang: string
  ui: ExamUiCopy
  exams: Partial<Record<ExamSlug, ExamSet>>
}
