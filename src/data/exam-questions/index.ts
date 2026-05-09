import type { ExamLanguage, ExamLanguagePack, ExamSet, ExamSlug } from './types'
import { EXAM_LANGUAGES, EXAM_SLUGS } from './types'

import { ui as enUi } from './en/ui'
import { az900 as enAz900 } from './en/az-900'
import { az104 as enAz104 } from './en/az-104'
import { az305 as enAz305 } from './en/az-305'
import { ai900 as enAi900 } from './en/ai-900'
import { ai102 as enAi102 } from './en/ai-102'
import { az204 as enAz204 } from './en/az-204'
import { az500 as enAz500 } from './en/az-500'
import { sc900 as enSc900 } from './en/sc-900'
import { ms900 as enMs900 } from './en/ms-900'
import { pl300 as enPl300 } from './en/pl-300'
import { dp900 as enDp900 } from './en/dp-900'
import { pl900 as enPl900 } from './en/pl-900'

import { ui as nlUi } from './nl/ui'
import { az900 as nlAz900 } from './nl/az-900'
import { az104 as nlAz104 } from './nl/az-104'
import { az305 as nlAz305 } from './nl/az-305'
import { ai900 as nlAi900 } from './nl/ai-900'

import { ui as deUi } from './de/ui'
import { az900 as deAz900 } from './de/az-900'
import { az104 as deAz104 } from './de/az-104'
import { az305 as deAz305 } from './de/az-305'
import { ai900 as deAi900 } from './de/ai-900'

import { ui as frUi } from './fr/ui'
import { az900 as frAz900 } from './fr/az-900'
import { az104 as frAz104 } from './fr/az-104'
import { az305 as frAz305 } from './fr/az-305'
import { ai900 as frAi900 } from './fr/ai-900'

import { ui as esUi } from './es/ui'
import { az900 as esAz900 } from './es/az-900'
import { az104 as esAz104 } from './es/az-104'
import { az305 as esAz305 } from './es/az-305'
import { ai900 as esAi900 } from './es/ai-900'

const packs: Record<ExamLanguage, ExamLanguagePack> = {
  en: {
    language: 'en',
    htmlLang: 'en',
    ui: enUi,
    exams: {
      'az-900': enAz900,
      'az-104': enAz104,
      'az-305': enAz305,
      'ai-900': enAi900,
      'ai-102': enAi102,
      'az-204': enAz204,
      'az-500': enAz500,
      'sc-900': enSc900,
      'ms-900': enMs900,
      'pl-300': enPl300,
      'dp-900': enDp900,
      'pl-900': enPl900,
    },
  },
  nl: {
    language: 'nl',
    htmlLang: 'nl',
    ui: nlUi,
    exams: { 'az-900': nlAz900, 'az-104': nlAz104, 'az-305': nlAz305, 'ai-900': nlAi900 },
  },
  de: {
    language: 'de',
    htmlLang: 'de',
    ui: deUi,
    exams: { 'az-900': deAz900, 'az-104': deAz104, 'az-305': deAz305, 'ai-900': deAi900 },
  },
  fr: {
    language: 'fr',
    htmlLang: 'fr',
    ui: frUi,
    exams: { 'az-900': frAz900, 'az-104': frAz104, 'az-305': frAz305, 'ai-900': frAi900 },
  },
  es: {
    language: 'es',
    htmlLang: 'es',
    ui: esUi,
    exams: { 'az-900': esAz900, 'az-104': esAz104, 'az-305': esAz305, 'ai-900': esAi900 },
  },
}

export const LANGUAGE_DISPLAY: Record<ExamLanguage, { label: string; nativeName: string; countryCode: string }> = {
  en: { label: 'English', nativeName: 'English', countryCode: 'GB' },
  nl: { label: 'Dutch', nativeName: 'Nederlands', countryCode: 'NL' },
  de: { label: 'German', nativeName: 'Deutsch', countryCode: 'DE' },
  fr: { label: 'French', nativeName: 'Français', countryCode: 'FR' },
  es: { label: 'Spanish', nativeName: 'Español', countryCode: 'ES' },
}

export function isExamLanguage(value: string | undefined): value is ExamLanguage {
  return !!value && (EXAM_LANGUAGES as string[]).includes(value)
}

export function isExamSlug(value: string | undefined): value is ExamSlug {
  return !!value && (EXAM_SLUGS as string[]).includes(value)
}

export function getLanguagePack(lang: ExamLanguage): ExamLanguagePack {
  return packs[lang]
}

export function getExamSet(lang: ExamLanguage, slug: ExamSlug): ExamSet | undefined {
  return packs[lang].exams[slug]
}

export function getAvailableSlugs(lang: ExamLanguage): ExamSlug[] {
  const pack = packs[lang]
  return EXAM_SLUGS.filter((slug) => pack.exams[slug] !== undefined)
}

export function getLanguagesWithSlug(slug: ExamSlug): ExamLanguage[] {
  return EXAM_LANGUAGES.filter((lang) => packs[lang].exams[slug] !== undefined)
}

export { EXAM_LANGUAGES, EXAM_SLUGS }
export type { ExamLanguage, ExamSlug, ExamSet, ExamLanguagePack } from './types'
