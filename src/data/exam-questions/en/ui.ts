import type { ExamUiCopy } from '../types'

export const ui: ExamUiCopy = {
  practiceLabel: 'Practice',
  indexTitle: 'Free Azure exam practice',
  indexLede:
    'Scenario questions per exam, written by a Microsoft Certified Trainer. Pick an exam, work through it, and see where you stand before you book the real test.',
  indexMetaTitle: 'Free Microsoft Exam Practice (AZ-900, AZ-104, AZ-305, AI-900, AI-102, AZ-204, AZ-500, SC-900, MS-900, PL-300)',
  indexMetaDescription:
    'Free practice questions for ten Microsoft certification exams across Azure, AI, security, Microsoft 365, and Power BI. Scenario-based, MCT-written, with answer explanations.',
  examMetaTitle: (examCode, examName) =>
    `${examCode} ${examName} practice questions`,
  examMetaDescription: (examCode, examName) =>
    `Scenario practice questions for ${examCode} (${examName}). Written by a Microsoft Certified Trainer, with full explanations.`,

  disclaimerLabel: 'Disclaimer',
  disclaimer:
    'These practice questions are unofficial and not affiliated with Microsoft. They are based on the publicly available exam skills outline and are for practice purposes only. The official exams are administered by Pearson VUE.',

  questionOf: (current, total) => `Question ${current} of ${total}`,
  correctLabel: 'Correct',
  incorrectLabel: 'Incorrect',
  nextQuestion: 'Next question',
  seeScore: 'See your score',
  startExam: 'Start practice',
  practiceQuestionsLabel: (count) => `${count} scenario questions`,

  resultEyebrow: 'Done',
  resultHeading: (score, total) => `You got ${score} out of ${total}.`,
  resultScoreLine: (pct) => `Score: ${pct}%.`,
  resultPassNote:
    'Solid run. To clear the real exam, you want a few more sets of scenario questions and some hands-on lab time.',
  resultFailNote:
    'Not at passing level yet. A structured course will get you to exam level faster than self-study alone.',
  ctaEyebrow: 'Cloud Evolvers training',
  ctaHeadingDefault: (examCode) => `Ready for the real ${examCode} exam?`,
  ctaBodyDefault: (examName, examCode) =>
    `Our ${examName} course prepares you for the ${examCode} exam with MCT-led delivery, hands-on labs, and the exam voucher included.`,
  ctaBodyArchitect: (examName) =>
    `The ${examName} course runs over four days with architecture cases from real production work. For teams, Cloud Evolvers also runs in-company programmes with your own architecture review on day four.`,
  ctaArchitectFollowUp:
    'Working with a team? Request an in-company quote at cloudevolvers.com for a programme tailored to your architecture.',
  ctaPriceSuffix: 'incl. exam voucher',
  ctaButton: 'See the Cloud Evolvers course',
  ctaRestart: 'Practice again',
  perQuestionToggle: 'Show per-question summary',
  correctAnswerLine: 'Correct answer',

  languageSwitcherLabel: 'Language',
  indexExamLabel: 'Exam',
  indexQuestionsLabel: (count) => `${count} questions`,
  pickExamHeading: 'Pick an exam',
  switchLanguageHeading: 'Other languages',
  trainerNote:
    'Written and reviewed by Yaïr Knijn, MCT, Azure architect at Cloud Evolvers.',
}
