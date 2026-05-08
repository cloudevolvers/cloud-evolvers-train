import type { ExamUiCopy } from '../types'

export const ui: ExamUiCopy = {
  practiceLabel: 'Práctica',
  indexTitle: 'Práctica gratuita para exámenes de Azure',
  indexLede:
    'Diez preguntas de escenario por examen, redactadas por un Microsoft Certified Trainer. Elige un examen, completa la serie y revisa tu nivel antes de reservar el examen oficial.',
  indexMetaTitle:
    'Práctica gratuita para exámenes de Azure (AZ-900, AZ-104, AZ-305, AI-900)',
  indexMetaDescription:
    'Preguntas de práctica gratuitas para AZ-900, AZ-104, AZ-305 y AI-900. Basadas en escenarios, escritas por un MCT, con explicación completa por respuesta.',
  examMetaTitle: (examCode, examName) =>
    `${examCode} ${examName} preguntas de práctica`,
  examMetaDescription: (examCode, examName) =>
    `Diez preguntas de escenario para el examen ${examCode} (${examName}). Escritas por un Microsoft Certified Trainer, con explicaciones detalladas.`,

  disclaimerLabel: 'Aviso',
  disclaimer:
    'Estas preguntas de práctica no son oficiales y no están afiliadas a Microsoft. Se basan en el esquema público de habilidades del examen y son solo para fines de práctica. Los exámenes oficiales son administrados por Pearson VUE.',

  questionOf: (current, total) => `Pregunta ${current} de ${total}`,
  correctLabel: 'Correcto',
  incorrectLabel: 'Incorrecto',
  nextQuestion: 'Siguiente pregunta',
  seeScore: 'Ver tu puntuación',
  startExam: 'Empezar la práctica',
  practiceTenQuestions: '10 preguntas de escenario',

  resultEyebrow: 'Listo',
  resultHeading: (score, total) =>
    `Acertaste ${score} de ${total} preguntas.`,
  resultScoreLine: (pct) => `Puntuación: ${pct}%.`,
  resultPassNote:
    'Buen resultado. Para aprobar el examen oficial conviene resolver algunas series más de preguntas de escenario y dedicar tiempo a prácticas en lab.',
  resultFailNote:
    'Todavía por debajo del nivel de aprobado. Una formación estructurada te lleva al nivel del examen más rápido que el estudio en solitario.',
  ctaEyebrow: 'Formación Cloud Evolvers',
  ctaHeadingDefault: (examCode) =>
    `¿Listo para el examen ${examCode} oficial?`,
  ctaBodyDefault: (examName, examCode) =>
    `La formación ${examName} te prepara para el examen ${examCode} con un MCT al frente, labs prácticos y el voucher de examen incluido.`,
  ctaBodyArchitect: (examName) =>
    `La formación ${examName} se imparte en cuatro días y se apoya en casos de arquitectura reales. Para equipos, Cloud Evolvers también ofrece programas in-company con una revisión de la arquitectura de tu propio entorno en el cuarto día.`,
  ctaArchitectFollowUp:
    '¿Formas a un equipo? Solicita un presupuesto in-company en cloudevolvers.com, adaptado a vuestra arquitectura.',
  ctaPriceSuffix: 'voucher de examen incluido',
  ctaButton: 'Ver la formación de Cloud Evolvers',
  ctaRestart: 'Volver a practicar',
  perQuestionToggle: 'Mostrar resumen por pregunta',
  correctAnswerLine: 'Respuesta correcta',

  languageSwitcherLabel: 'Idioma',
  indexExamLabel: 'Examen',
  indexQuestionsLabel: (count) => `${count} preguntas`,
  pickExamHeading: 'Elige un examen',
  switchLanguageHeading: 'Otros idiomas',
  trainerNote:
    'Redactado y revisado por Yaïr Knijn, MCT y arquitecto Azure en Cloud Evolvers.',
}
