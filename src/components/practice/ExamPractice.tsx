import { useState } from 'react'
import type { ExamLanguage, ExamSet, ExamUiCopy } from '@/data/exam-questions/types'
import { ArrowRight } from '@phosphor-icons/react'

interface Props {
  exam: ExamSet
  ui: ExamUiCopy
  lang: ExamLanguage
}

const localeFor: Record<ExamLanguage, string> = {
  en: 'en-GB',
  nl: 'nl-NL',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
}

function formatPriceCents(cents: number | null, lang: ExamLanguage): string {
  if (cents == null) return ''
  return new Intl.NumberFormat(localeFor[lang], {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

export default function ExamPractice({ exam, ui, lang }: Props) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [finished, setFinished] = useState(false)

  const total = exam.questions.length
  const q = exam.questions[index]
  const isLast = index === total - 1
  const correct = picked === q.correctId

  function pick(optionId: string) {
    if (picked !== null) return
    setPicked(optionId)
    setAnswers((prev) => ({ ...prev, [q.id]: optionId }))
  }

  function next() {
    if (isLast) {
      setFinished(true)
      return
    }
    setIndex(index + 1)
    setPicked(null)
  }

  function restart() {
    setIndex(0)
    setPicked(null)
    setAnswers({})
    setFinished(false)
  }

  if (finished) {
    const score = exam.questions.reduce(
      (acc, qq) => acc + (answers[qq.id] === qq.correctId ? 1 : 0),
      0,
    )
    const pct = Math.round((score / total) * 100)
    const isAZ305 = exam.examCode === 'AZ-305'
    const priceLabel = formatPriceCents(exam.ceCoursePriceCents, lang)

    return (
      <div className="space-y-6">
        <div className="rounded-2xl border-2 border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-8">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ed-accent)]">
            {ui.resultEyebrow}
          </div>
          <h2
            className="ed-display text-[2rem] leading-[1.05] text-[color:var(--ed-ink)] md:text-[2.5rem]"
          >
            {ui.resultHeading(score, total)}
          </h2>
          <p className="mt-2 text-[15px] text-[color:var(--ed-ink-2)]">
            {ui.resultScoreLine(pct)}{' '}
            {pct >= 70 ? ui.resultPassNote : ui.resultFailNote}
          </p>
        </div>

        <div className="rounded-2xl border-2 border-[color:var(--ed-accent)] bg-[color:var(--ed-accent-soft,#fdf6f0)] p-8">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ed-accent)]">
            {ui.ctaEyebrow}
          </div>
          <h3 className="ed-display text-[1.75rem] leading-tight text-[color:var(--ed-ink)] md:text-[2rem]">
            {ui.ctaHeadingDefault(exam.examCode)}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--ed-ink)]">
            {isAZ305
              ? ui.ctaBodyArchitect(exam.examName)
              : ui.ctaBodyDefault(exam.examName, exam.examCode)}
          </p>

          {priceLabel && (
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[color:var(--ed-ink)]">{priceLabel}</span>
              <span className="text-sm text-[color:var(--ed-ink-3)]">{ui.ctaPriceSuffix}</span>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={exam.ceCourseUrl}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--ed-accent)] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[color:var(--ed-accent-deep)]"
            >
              {ui.ctaButton}
              <ArrowRight size={16} weight="bold" />
            </a>
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center rounded-lg border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] px-5 py-3 text-sm font-semibold text-[color:var(--ed-ink)] transition-colors hover:border-[color:var(--ed-accent)] hover:text-[color:var(--ed-accent)]"
            >
              {ui.ctaRestart}
            </button>
          </div>

          {isAZ305 && (
            <p className="mt-4 text-[13px] text-[color:var(--ed-ink-2)]">
              {ui.ctaArchitectFollowUp}
            </p>
          )}
        </div>

        <details className="rounded-2xl border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-5">
          <summary className="cursor-pointer text-sm font-semibold text-[color:var(--ed-ink)]">
            {ui.perQuestionToggle}
          </summary>
          <ol className="mt-4 space-y-3">
            {exam.questions.map((qq, i) => {
              const a = answers[qq.id]
              const ok = a === qq.correctId
              return (
                <li
                  key={qq.id}
                  className="border-b border-dashed border-[color:var(--ed-rule)] pb-3 last:border-b-0"
                >
                  <div className="flex items-start gap-2">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${
                        ok ? 'bg-emerald-600' : 'bg-rose-500'
                      }`}
                      aria-label={ok ? ui.correctLabel : ui.incorrectLabel}
                    >
                      {ok ? '+' : '-'}
                    </span>
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold text-[color:var(--ed-ink)]">
                        {i + 1}. {qq.question}
                      </div>
                      <div className="mt-1 text-[12.5px] text-[color:var(--ed-ink-2)]">
                        {ui.correctAnswerLine}:{' '}
                        <strong>{qq.correctId.toUpperCase()}</strong>.{' '}
                        {qq.options.find((o) => o.id === qq.correctId)?.text}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </details>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ed-accent)]">
          {ui.questionOf(index + 1, total)}
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--ed-ink-3)]">
          {q.topic}
        </div>
      </div>

      <div className="h-1 w-full overflow-hidden rounded-full bg-[color:var(--ed-rule)]">
        <div
          className="h-full bg-[color:var(--ed-accent)] transition-all duration-300"
          style={{ width: `${((index + (picked ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl border-2 border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-6 md:p-7">
        <h2 className="text-[18px] font-semibold leading-snug text-[color:var(--ed-ink)] md:text-[19px]">
          {q.question}
        </h2>

        <div className="mt-5 space-y-2.5">
          {q.options.map((opt) => {
            const isPicked = picked === opt.id
            const isCorrect = opt.id === q.correctId
            const showState = picked !== null
            let cls =
              'border-[color:var(--ed-rule)] bg-[color:var(--ed-bg)] hover:border-[color:var(--ed-accent)]'
            if (showState) {
              if (isCorrect) {
                cls = 'border-emerald-600 bg-emerald-50'
              } else if (isPicked && !isCorrect) {
                cls = 'border-rose-500 bg-rose-50'
              } else {
                cls = 'border-[color:var(--ed-rule)] bg-[color:var(--ed-bg)] opacity-70'
              }
            }
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => pick(opt.id)}
                disabled={picked !== null}
                className={`flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${cls} ${
                  picked !== null ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold uppercase text-[color:var(--ed-ink-2)]">
                  {opt.id}
                </span>
                <span className="text-[14.5px] leading-relaxed text-[color:var(--ed-ink)]">
                  {opt.text}
                </span>
              </button>
            )
          })}
        </div>

        {picked !== null && (
          <div
            className={`mt-5 rounded-xl border p-4 ${
              correct ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'
            }`}
          >
            <div
              className={`mb-1 text-[11px] font-bold uppercase tracking-wide ${
                correct ? 'text-emerald-700' : 'text-rose-700'
              }`}
            >
              {correct ? ui.correctLabel : ui.incorrectLabel}
            </div>
            <p className="text-[14px] leading-relaxed text-[color:var(--ed-ink)]">
              {q.explanation}
            </p>
          </div>
        )}

        {picked !== null && (
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--ed-ink)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--ed-accent)]"
            >
              {isLast ? ui.seeScore : ui.nextQuestion}
              <ArrowRight size={14} weight="bold" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
