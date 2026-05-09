import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, ArrowClockwise } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { SEO } from '@/components/SEO';
import { RelatedTools } from '@/components/tools/RelatedTools';
import {
  isQuizLang,
  getQuizPack,
  QUIZ_LANGS,
  LANG_DISPLAY,
  enPack,
} from '@/data/tools/az104-readiness';
import type { QuizDomain, QuizLang, QuizQuestion } from '@/data/tools/az104-readiness';

type Phase = 'intro' | 'quiz' | 'results';
type Answers = Record<string, string>;

interface DomainScore {
  domain: QuizDomain;
  correct: number;
  total: number;
  weight: string;
}

const DOMAIN_WEIGHTS: Record<QuizDomain, string> = {
  'identity-governance': '15-20%',
  storage: '15-20%',
  compute: '20-25%',
  networking: '20-25%',
  'monitoring-backup': '10-15%',
};

function calculateDomainScores(answers: Answers, questions: QuizQuestion[]): DomainScore[] {
  const buckets: Record<QuizDomain, { correct: number; total: number }> = {
    'identity-governance': { correct: 0, total: 0 },
    storage: { correct: 0, total: 0 },
    compute: { correct: 0, total: 0 },
    networking: { correct: 0, total: 0 },
    'monitoring-backup': { correct: 0, total: 0 },
  };
  for (const q of questions) {
    buckets[q.domain].total += 1;
    if (answers[q.id] === q.correctId) buckets[q.domain].correct += 1;
  }
  return (Object.keys(buckets) as QuizDomain[]).map((domain) => ({
    domain,
    correct: buckets[domain].correct,
    total: buckets[domain].total,
    weight: DOMAIN_WEIGHTS[domain],
  }));
}

function getVerdictTone(percent: number): 'ok' | 'warn' | 'bad' {
  if (percent >= 80) return 'ok';
  if (percent >= 60) return 'warn';
  return 'bad';
}

export function Az104ReadinessQuizPage() {
  const { lang } = useParams<{ lang: string }>();

  if (!isQuizLang(lang)) {
    return <Navigate to="/tools/az-104-readiness-quiz/en" replace />;
  }

  return <QuizPageInner lang={lang} />;
}

function QuizPageInner({ lang }: { lang: QuizLang }) {
  const pack = getQuizPack(lang);
  const { ui, questions } = pack;

  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showEnglish, setShowEnglish] = useState<Record<string, boolean>>({});

  const question = questions[currentIndex];
  const enQuestion = enPack.questions[currentIndex];

  const totalCorrect = useMemo(
    () => questions.filter((q) => answers[q.id] === q.correctId).length,
    [answers, questions],
  );
  const percent = Math.round((totalCorrect / questions.length) * 100);
  const domainScores = useMemo(() => calculateDomainScores(answers, questions), [answers, questions]);
  const verdictTone = getVerdictTone(percent);

  const verdictLabel =
    verdictTone === 'ok' ? ui.verdictLikelyReady
    : verdictTone === 'warn' ? ui.verdictClose
    : ui.verdictNotYet;

  const verdictAdvice =
    verdictTone === 'ok' ? ui.adviceLikelyReady
    : verdictTone === 'warn' ? ui.adviceClose
    : ui.adviceNotYet;

  function handleSelect(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function handleNext() {
    if (currentIndex === questions.length - 1) {
      setPhase('results');
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }

  function handleRestart() {
    setAnswers({});
    setCurrentIndex(0);
    setShowEnglish({});
    setPhase('intro');
  }

  function toggleEnglish(id: string) {
    setShowEnglish((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const isEnglish = lang === 'en';
  const displayQ = showEnglish[question?.id] ? enQuestion : question;
  const displayEn = (q: QuizQuestion, idx: number) =>
    showEnglish[q.id] ? enPack.questions[idx] : q;

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title={ui.seoTitle}
        description={ui.seoDescription}
        canonical={`/tools/az-104-readiness-quiz/${lang}`}
      />

      <Wrap narrow>
        <section className="pt-20 sm:pt-28 pb-12">
          <nav className="text-sm text-black/60 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-black">{ui.breadcrumbTools}</Link>
            <span className="mx-2">/</span>
            <span className="text-black">{ui.breadcrumbQuiz}</span>
          </nav>

          {phase === 'intro' && (
            <>
              <Eyebrow>{ui.eyebrow}</Eyebrow>
              <Display as="h1" size="md" className="mt-3 mb-4">
                {ui.title}
              </Display>
              <Lede className="mb-8">{ui.lede}</Lede>

              <ul className="space-y-2 mb-8 text-black/80">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5" />
                  {ui.bullet1}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5" />
                  {ui.bullet2}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5" />
                  {ui.bullet3}
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <EdButton onClick={() => setPhase('quiz')}>
                  {ui.startButton}
                  <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>

                <div className="flex items-center gap-2 text-sm text-black/60">
                  <span>{ui.languageSwitcherLabel}:</span>
                  {QUIZ_LANGS.map((l) => (
                    <Link
                      key={l}
                      to={`/tools/az-104-readiness-quiz/${l}`}
                      className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                        l === lang
                          ? 'bg-[color:var(--ed-accent)] text-white'
                          : 'bg-black/[0.06] hover:bg-black/[0.12]'
                      }`}
                    >
                      {LANG_DISPLAY[l].nativeName}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {phase === 'quiz' && question && displayQ && (
            <>
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-black/60 mb-2">
                  <span>
                    {ui.questionOf
                      .replace('{current}', String(currentIndex + 1))
                      .replace('{total}', String(questions.length))}
                  </span>
                  <span>{ui.domainLabels[question.domain]}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-black/[0.08] overflow-hidden">
                  <div
                    className="h-full bg-[color:var(--ed-accent)] transition-all"
                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                  {displayQ.question}
                </h2>
                {!isEnglish && (
                  <button
                    type="button"
                    onClick={() => toggleEnglish(question.id)}
                    className="shrink-0 text-[11px] font-medium text-[color:var(--ed-accent)] hover:underline mt-1"
                  >
                    {showEnglish[question.id] ? LANG_DISPLAY[lang].nativeName : 'EN'}
                  </button>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {displayQ.options.map((opt) => {
                  const selected = answers[question.id] === opt.id;
                  return (
                    <li key={opt.id}>
                      <button
                        type="button"
                        onClick={() => handleSelect(opt.id)}
                        className={`w-full text-left rounded-xl border p-4 transition-colors ${
                          selected
                            ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.06]'
                            : 'border-black/[0.1] bg-white hover:border-black/[0.25]'
                        }`}
                      >
                        <span className="font-mono text-xs text-black/60 mr-2">{opt.id.toUpperCase()}.</span>
                        <span className="text-sm sm:text-base">{opt.text}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                  className="inline-flex items-center gap-1.5 text-sm text-black/70 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={14} weight="bold" />
                  {ui.backButton}
                </button>
                <EdButton onClick={handleNext} disabled={!answers[question.id]}>
                  {currentIndex === questions.length - 1 ? ui.seeResults : ui.nextButton}
                  <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>
              </div>
            </>
          )}

          {phase === 'results' && (
            <>
              <Eyebrow>{ui.resultsEyebrow}</Eyebrow>
              <Display as="h1" size="md" className="mt-3 mb-2">
                {ui.scoreHeading
                  .replace('{correct}', String(totalCorrect))
                  .replace('{total}', String(questions.length))}
              </Display>
              <p className={`text-lg font-medium mb-2 ${
                verdictTone === 'ok' ? 'text-emerald-700'
                  : verdictTone === 'warn' ? 'text-amber-700'
                  : 'text-red-700'
              }`}>
                {verdictLabel} · {percent}%
              </p>
              <p className="text-black/70 mb-10 leading-relaxed">{verdictAdvice}</p>

              <h2 className="text-lg font-semibold mb-4">{ui.byDomain}</h2>
              <ul className="space-y-3 mb-10">
                {domainScores.map((score) => {
                  const pct = Math.round((score.correct / score.total) * 100);
                  const barTone = pct >= 67 ? 'bg-emerald-500' : pct >= 34 ? 'bg-amber-500' : 'bg-red-500';
                  return (
                    <li key={score.domain} className="rounded-xl border border-black/[0.08] bg-white p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-medium">{ui.domainLabels[score.domain]}</span>
                          <span className="ml-2 text-xs text-black/50 font-mono">{score.weight} {ui.examPortion}</span>
                        </div>
                        <span className="font-mono text-sm">{score.correct}/{score.total}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                        <div className={`h-full ${barTone}`} style={{ width: `${pct}%` }} />
                      </div>
                    </li>
                  );
                })}
              </ul>

              <h2 className="text-lg font-semibold mb-4">{ui.answerReview}</h2>
              <ol className="space-y-4 mb-10">
                {questions.map((q, idx) => {
                  const userAnswer = answers[q.id];
                  const correct = userAnswer === q.correctId;
                  const dq = displayEn(q, idx);
                  return (
                    <li key={q.id} className="rounded-xl border border-black/[0.08] bg-white p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-start gap-2">
                          {correct ? (
                            <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
                          ) : (
                            <XCircle size={20} weight="duotone" className="text-red-600 mt-0.5 shrink-0" />
                          )}
                          <span className="text-sm font-medium">{idx + 1}. {dq.question}</span>
                        </div>
                        {!isEnglish && (
                          <button
                            type="button"
                            onClick={() => toggleEnglish(q.id)}
                            className="shrink-0 text-[11px] font-medium text-[color:var(--ed-accent)] hover:underline"
                          >
                            {showEnglish[q.id] ? LANG_DISPLAY[lang].nativeName : 'EN'}
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-black/70 ml-7">
                        <span className="font-mono text-xs">{ui.correctLabel}</span>{' '}
                        {dq.options.find((o) => o.id === dq.correctId)?.text}
                      </p>
                      <p className="text-sm text-black/60 ml-7 mt-1 italic">{dq.explanation}</p>
                    </li>
                  );
                })}
              </ol>

              <RelatedTools currentSlug="az-104-readiness-quiz" />

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/training/azure-administrator"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
                >
                  {ui.seeCourseCta}
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
                >
                  <ArrowClockwise size={14} weight="bold" />
                  {ui.retakeButton}
                </button>
              </div>
            </>
          )}
        </section>
      </Wrap>
    </div>
  );
}

export default Az104ReadinessQuizPage;
