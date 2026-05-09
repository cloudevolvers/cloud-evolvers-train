import type { ExamUiCopy } from '../types'

export const ui: ExamUiCopy = {
  practiceLabel: 'Oefenen',
  indexTitle: 'Gratis Azure-examen oefenen',
  indexLede:
    'Tien scenariovragen per examen, geschreven door een Microsoft-gecertificeerde trainer. Kies een examen, werk de set door en zie waar je staat voordat je het echte examen boekt.',
  indexMetaTitle:
    'Gratis Azure-examen oefenen (AZ-900, AZ-104, AZ-305, AI-900)',
  indexMetaDescription:
    'Gratis oefenvragen voor AZ-900, AZ-104, AZ-305 en AI-900. Scenariogericht, geschreven door een MCT, met volledige uitleg per antwoord.',
  examMetaTitle: (examCode, examName) =>
    `${examCode} ${examName} oefenvragen`,
  examMetaDescription: (examCode, examName) =>
    `Tien scenario-oefenvragen voor ${examCode} (${examName}). Geschreven door een Microsoft-gecertificeerde trainer, met volledige toelichting.`,

  disclaimerLabel: 'Disclaimer',
  disclaimer:
    'Deze oefenvragen zijn niet officieel en niet gelieerd aan Microsoft. Ze zijn samengesteld op basis van de openbare exam skills outline en dienen alleen ter oefening. De officiele examens worden afgenomen door Pearson VUE.',

  questionOf: (current, total) => `Vraag ${current} van ${total}`,
  correctLabel: 'Goed',
  incorrectLabel: 'Fout',
  nextQuestion: 'Volgende vraag',
  seeScore: 'Bekijk je score',
  startExam: 'Start de oefening',
  practiceQuestionsLabel: (count) => `${count} scenariovragen`,

  resultEyebrow: 'Klaar',
  resultHeading: (score, total) => `Je had ${score} van de ${total} goed.`,
  resultScoreLine: (pct) => `Score: ${pct}%.`,
  resultPassNote:
    'Goed bezig. Voor het echte examen wil je nog wel een paar extra sets scenariovragen oefenen en wat lab-tijd inplannen.',
  resultFailNote:
    'Nog niet op slagingsniveau. Een gestructureerde training haalt je sneller naar het examenniveau dan zelf doorploegen.',
  ctaEyebrow: 'Cloud Evolvers training',
  ctaHeadingDefault: (examCode) =>
    `Klaar voor het echte ${examCode} examen?`,
  ctaBodyDefault: (examName, examCode) =>
    `De ${examName} training van Cloud Evolvers bereidt je gericht voor op het ${examCode} examen. Microsoft-gecertificeerde trainers, hands-on labs en de examenvoucher inbegrepen.`,
  ctaBodyArchitect: (examName) =>
    `De ${examName} training duurt vier dagen en draait om architectuur-cases uit de praktijk. Voor teams biedt Cloud Evolvers ook incompany-trajecten met een eigen architecture review op dag vier.`,
  ctaArchitectFollowUp:
    'Werk je voor een team? Vraag een incompany-offerte aan op cloudevolvers.com voor maatwerk op jullie architectuur.',
  ctaPriceSuffix: 'incl. examenvoucher',
  ctaButton: 'Naar de Cloud Evolvers training',
  ctaRestart: 'Opnieuw oefenen',
  perQuestionToggle: 'Toon overzicht per vraag',
  correctAnswerLine: 'Juist antwoord',

  languageSwitcherLabel: 'Taal',
  indexExamLabel: 'Examen',
  indexQuestionsLabel: (count) => `${count} vragen`,
  pickExamHeading: 'Kies een examen',
  switchLanguageHeading: 'Andere talen',
  trainerNote:
    'Samengesteld en gereviewd door Yaïr Knijn, MCT en Azure-architect bij Cloud Evolvers.',
}
