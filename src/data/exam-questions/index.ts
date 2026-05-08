import type { ExamLanguage, ExamLanguagePack, ExamSet, ExamSlug } from './types'
import { EXAM_LANGUAGES, EXAM_SLUGS } from './types'

import { ui as enUi } from './en/ui'
import { az900 as enAz900 } from './en/az-900'
import { az104 as enAz104 } from './en/az-104'
import { az305 as enAz305 } from './en/az-305'
import { ai900 as enAi900 } from './en/ai-900'

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
    exams: { 'az-900': enAz900, 'az-104': enAz104, 'az-305': enAz305, 'ai-900': enAi900 },
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

export function getExamSet(lang: ExamLanguage, slug: ExamSlug): ExamSet {
  return packs[lang].exams[slug]
}

export { EXAM_LANGUAGES, EXAM_SLUGS }
export type { ExamLanguage, ExamSlug, ExamSet, ExamLanguagePack } from './types'
