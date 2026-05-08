import type { ExamUiCopy } from '../types'

export const ui: ExamUiCopy = {
  practiceLabel: 'Üben',
  indexTitle: 'Kostenlose Azure-Prüfungsfragen',
  indexLede:
    'Zehn Szenariofragen je Prüfung, formuliert von einem Microsoft Certified Trainer. Wählen Sie eine Prüfung, arbeiten Sie sich durch und prüfen Sie Ihren Stand, bevor Sie den echten Termin buchen.',
  indexMetaTitle:
    'Kostenlose Azure-Prüfungsfragen (AZ-900, AZ-104, AZ-305, AI-900)',
  indexMetaDescription:
    'Kostenlose Übungsfragen für AZ-900, AZ-104, AZ-305 und AI-900. Szenariobasiert, von einem MCT verfasst, mit ausführlicher Begründung je Antwort.',
  examMetaTitle: (examCode, examName) =>
    `${examCode} ${examName} Übungsfragen`,
  examMetaDescription: (examCode, examName) =>
    `Zehn Szenariofragen zur Prüfung ${examCode} (${examName}). Geschrieben von einem Microsoft Certified Trainer, mit vollständiger Erläuterung.`,

  disclaimerLabel: 'Hinweis',
  disclaimer:
    'Diese Übungsfragen sind inoffiziell und stehen in keiner Verbindung zu Microsoft. Sie basieren auf der öffentlich verfügbaren Exam Skills Outline und dienen nur zu Übungszwecken. Die offiziellen Prüfungen werden von Pearson VUE durchgeführt.',

  questionOf: (current, total) => `Frage ${current} von ${total}`,
  correctLabel: 'Richtig',
  incorrectLabel: 'Falsch',
  nextQuestion: 'Nächste Frage',
  seeScore: 'Ergebnis ansehen',
  startExam: 'Übung starten',
  practiceQuestionsLabel: (count) => `${count} Szenariofragen`,

  resultEyebrow: 'Fertig',
  resultHeading: (score, total) => `${score} von ${total} richtig beantwortet.`,
  resultScoreLine: (pct) => `Punktzahl: ${pct}%.`,
  resultPassNote:
    'Solides Ergebnis. Für die echte Prüfung sollten Sie noch ein paar weitere Sätze Szenariofragen lösen und Zeit im Lab einplanen.',
  resultFailNote:
    'Noch nicht auf Prüfungsniveau. Eine strukturierte Schulung bringt Sie schneller auf das geforderte Niveau als reines Selbststudium.',
  ctaEyebrow: 'Cloud Evolvers Training',
  ctaHeadingDefault: (examCode) =>
    `Bereit für die echte ${examCode}-Prüfung?`,
  ctaBodyDefault: (examName, examCode) =>
    `Unsere ${examName}-Schulung bereitet Sie gezielt auf die ${examCode}-Prüfung vor. MCT-geführt, mit Hands-on-Labs und enthaltenem Prüfungs-Voucher.`,
  ctaBodyArchitect: (examName) =>
    `Die ${examName}-Schulung läuft über vier Tage und arbeitet mit Architektur-Cases aus echten Projekten. Für Teams bietet Cloud Evolvers auch Inhouse-Programme mit einer Architekturüberprüfung Ihrer eigenen Umgebung am vierten Tag.`,
  ctaArchitectFollowUp:
    'Sie planen für ein Team? Fordern Sie auf cloudevolvers.com ein Inhouse-Angebot an, zugeschnitten auf Ihre Architektur.',
  ctaPriceSuffix: 'inkl. Prüfungs-Voucher',
  ctaButton: 'Zur Cloud Evolvers-Schulung',
  ctaRestart: 'Erneut üben',
  perQuestionToggle: 'Übersicht pro Frage anzeigen',
  correctAnswerLine: 'Richtige Antwort',

  languageSwitcherLabel: 'Sprache',
  indexExamLabel: 'Prüfung',
  indexQuestionsLabel: (count) => `${count} Fragen`,
  pickExamHeading: 'Prüfung wählen',
  switchLanguageHeading: 'Weitere Sprachen',
  trainerNote:
    'Verfasst und geprüft von Yaïr Knijn, MCT und Azure-Architekt bei Cloud Evolvers.',
}
