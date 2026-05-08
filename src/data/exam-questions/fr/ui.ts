import type { ExamUiCopy } from '../types'

export const ui: ExamUiCopy = {
  practiceLabel: 'Entraînement',
  indexTitle: "Questions d'entraînement Azure gratuites",
  indexLede:
    "Dix questions de scénario par examen, rédigées par un Microsoft Certified Trainer. Choisissez un examen, parcourez la série et voyez où vous en êtes avant de réserver l'examen officiel.",
  indexMetaTitle:
    "Questions d'entraînement Azure gratuites (AZ-900, AZ-104, AZ-305, AI-900)",
  indexMetaDescription:
    "Questions d'entraînement gratuites pour AZ-900, AZ-104, AZ-305 et AI-900. Basées sur des scénarios, rédigées par un MCT, avec explication complète.",
  examMetaTitle: (examCode, examName) =>
    `${examCode} ${examName} questions d'entraînement`,
  examMetaDescription: (examCode, examName) =>
    `Dix questions de scénario pour l'examen ${examCode} (${examName}). Rédigées par un Microsoft Certified Trainer, avec explications détaillées.`,

  disclaimerLabel: 'Avertissement',
  disclaimer:
    "Ces questions d'entraînement ne sont pas officielles et ne sont pas affiliées à Microsoft. Elles sont basées sur le plan des compétences d'examen accessible au public et sont destinées uniquement à l'entraînement. Les examens officiels sont administrés par Pearson VUE.",

  questionOf: (current, total) => `Question ${current} sur ${total}`,
  correctLabel: 'Correct',
  incorrectLabel: 'Incorrect',
  nextQuestion: 'Question suivante',
  seeScore: 'Voir votre score',
  startExam: "Commencer l'entraînement",
  practiceQuestionsLabel: (count) => `${count} questions de scénario`,

  resultEyebrow: 'Terminé',
  resultHeading: (score, total) =>
    `Vous avez obtenu ${score} bonnes réponses sur ${total}.`,
  resultScoreLine: (pct) => `Score : ${pct}%.`,
  resultPassNote:
    "Bon résultat. Pour décrocher l'examen officiel, prévoyez encore quelques séries de questions de scénario et du temps en lab.",
  resultFailNote:
    "Pas encore au niveau de réussite. Une formation structurée vous y mène plus vite qu'une révision en solo.",
  ctaEyebrow: 'Formation Cloud Evolvers',
  ctaHeadingDefault: (examCode) =>
    `Prêt pour l'examen ${examCode} officiel ?`,
  ctaBodyDefault: (examName, examCode) =>
    `La formation ${examName} prépare directement à l'examen ${examCode}. Animée par un MCT, avec des labs pratiques et le voucher d'examen inclus.`,
  ctaBodyArchitect: (examName) =>
    `La formation ${examName} se déroule sur quatre jours et s'appuie sur des cas d'architecture issus de projets réels. Pour les équipes, Cloud Evolvers propose aussi des sessions intra-entreprise avec une revue d'architecture de votre propre environnement le quatrième jour.`,
  ctaArchitectFollowUp:
    'Vous formez une équipe ? Demandez un devis intra-entreprise sur cloudevolvers.com, adapté à votre architecture.',
  ctaPriceSuffix: "voucher d'examen inclus",
  ctaButton: 'Voir la formation Cloud Evolvers',
  ctaRestart: 'Recommencer',
  perQuestionToggle: 'Afficher le détail par question',
  correctAnswerLine: 'Bonne réponse',

  languageSwitcherLabel: 'Langue',
  indexExamLabel: 'Examen',
  indexQuestionsLabel: (count) => `${count} questions`,
  pickExamHeading: 'Choisir un examen',
  switchLanguageHeading: 'Autres langues',
  trainerNote:
    'Rédigé et relu par Yaïr Knijn, MCT et architecte Azure chez Cloud Evolvers.',
}
