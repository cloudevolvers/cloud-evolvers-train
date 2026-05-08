import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, ArrowClockwise } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { SEO } from '@/components/SEO';
import { RelatedTools } from '@/components/tools/RelatedTools';
import {
  AZ_104_QUESTIONS,
  DOMAIN_LABELS,
  DOMAIN_WEIGHTS,
  type Az104Domain,
  type Az104Question,
} from '@/data/tools/az104-questions';

type Phase = 'intro' | 'quiz' | 'results';
type Answers = Record<string, string>;

interface DomainScore {
  domain: Az104Domain;
  correct: number;
  total: number;
  weight: string;
}

function calculateDomainScores(answers: Answers, questions: Az104Question[]): DomainScore[] {
  const buckets: Record<Az104Domain, { correct: number; total: number }> = {
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
  return (Object.keys(buckets) as Az104Domain[]).map((domain) => ({
    domain,
    correct: buckets[domain].correct,
    total: buckets[domain].total,
    weight: DOMAIN_WEIGHTS[domain],
  }));
}

function readinessVerdict(percent: number): { label: string; tone: 'ok' | 'warn' | 'bad'; advice: string } {
  if (percent >= 80)
    return {
      label: 'Likely ready',
      tone: 'ok',
      advice: 'Score this high in our pretest typically passes the real exam. Book a date and finish weak domains in lab.',
    };
  if (percent >= 60)
    return {
      label: 'Close, but exposed',
      tone: 'warn',
      advice: 'Knowledge is solid but some domains will hurt you. Spend a week per weak domain in hands-on labs before booking.',
    };
  return {
    label: 'Not yet',
    tone: 'bad',
    advice: 'Booking now risks a failed first attempt. A structured AZ-104 course with labs gets you here in 2 to 4 weeks.',
  };
}

export function Az104ReadinessQuizPage() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const question = AZ_104_QUESTIONS[currentIndex];
  const totalCorrect = useMemo(
    () => AZ_104_QUESTIONS.filter((q) => answers[q.id] === q.correctId).length,
    [answers],
  );
  const percent = Math.round((totalCorrect / AZ_104_QUESTIONS.length) * 100);
  const domainScores = useMemo(() => calculateDomainScores(answers, AZ_104_QUESTIONS), [answers]);
  const verdict = readinessVerdict(percent);

  function handleSelect(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function handleNext() {
    if (currentIndex === AZ_104_QUESTIONS.length - 1) {
      setPhase('results');
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }

  function handleRestart() {
    setAnswers({});
    setCurrentIndex(0);
    setPhase('intro');
  }

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="AZ-104 Readiness Quiz - Free Azure Administrator Self-Assessment"
        description="Free 12-question AZ-104 readiness quiz covering all five Microsoft Azure Administrator exam domains. Get domain-level feedback on whether you are ready to book."
        canonical="/tools/az-104-readiness-quiz"
      />

      <Wrap narrow>
        <section className="pt-20 sm:pt-28 pb-12">
          <nav className="text-sm text-black/60 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-black">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-black">AZ-104 readiness quiz</span>
          </nav>

          {phase === 'intro' && (
            <>
              <Eyebrow>Free quiz · 12 questions · ~6 minutes</Eyebrow>
              <Display as="h1" size="md" className="mt-3 mb-4">
                AZ-104 readiness quiz
              </Display>
              <Lede className="mb-8">
                Twelve scenario-style questions across the five Azure Administrator exam domains. We score per domain so you can see exactly where to spend study time before booking the real exam.
              </Lede>

              <ul className="space-y-2 mb-8 text-black/80">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5" />
                  Three questions per major domain, weighted to match the real exam blueprint.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5" />
                  Explanations for every answer at the end, not just a score.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5" />
                  No login, no email capture. Runs entirely in your browser.
                </li>
              </ul>

              <EdButton onClick={() => setPhase('quiz')}>
                Start quiz
                <ArrowRight size={16} weight="bold" className="ml-1" />
              </EdButton>
            </>
          )}

          {phase === 'quiz' && question && (
            <>
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-black/60 mb-2">
                  <span>
                    Question {currentIndex + 1} of {AZ_104_QUESTIONS.length}
                  </span>
                  <span>{DOMAIN_LABELS[question.domain]}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-black/[0.08] overflow-hidden">
                  <div
                    className="h-full bg-[color:var(--ed-accent)] transition-all"
                    style={{ width: `${((currentIndex + 1) / AZ_104_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold mb-6 leading-snug">
                {question.question}
              </h2>

              <ul className="space-y-3 mb-8">
                {question.options.map((opt) => {
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
                  Back
                </button>
                <EdButton onClick={handleNext} disabled={!answers[question.id]}>
                  {currentIndex === AZ_104_QUESTIONS.length - 1 ? 'See results' : 'Next'}
                  <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>
              </div>
            </>
          )}

          {phase === 'results' && (
            <>
              <Eyebrow>Results</Eyebrow>
              <Display as="h1" size="md" className="mt-3 mb-2">
                You scored {totalCorrect} of {AZ_104_QUESTIONS.length}
              </Display>
              <p className={`text-lg font-medium mb-2 ${
                verdict.tone === 'ok' ? 'text-emerald-700'
                  : verdict.tone === 'warn' ? 'text-amber-700'
                  : 'text-red-700'
              }`}>
                {verdict.label} · {percent}%
              </p>
              <p className="text-black/70 mb-10 leading-relaxed">{verdict.advice}</p>

              <h2 className="text-lg font-semibold mb-4">By domain</h2>
              <ul className="space-y-3 mb-10">
                {domainScores.map((score) => {
                  const pct = Math.round((score.correct / score.total) * 100);
                  const barTone = pct >= 67 ? 'bg-emerald-500' : pct >= 34 ? 'bg-amber-500' : 'bg-red-500';
                  return (
                    <li key={score.domain} className="rounded-xl border border-black/[0.08] bg-white p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-medium">{DOMAIN_LABELS[score.domain]}</span>
                          <span className="ml-2 text-xs text-black/50 font-mono">{score.weight} of exam</span>
                        </div>
                        <span className="font-mono text-sm">
                          {score.correct}/{score.total}
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                        <div className={`h-full ${barTone}`} style={{ width: `${pct}%` }} />
                      </div>
                    </li>
                  );
                })}
              </ul>

              <h2 className="text-lg font-semibold mb-4">Answer review</h2>
              <ol className="space-y-4 mb-10">
                {AZ_104_QUESTIONS.map((q, idx) => {
                  const userAnswer = answers[q.id];
                  const correct = userAnswer === q.correctId;
                  return (
                    <li key={q.id} className="rounded-xl border border-black/[0.08] bg-white p-4">
                      <div className="flex items-start gap-2 mb-2">
                        {correct ? (
                          <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
                        ) : (
                          <XCircle size={20} weight="duotone" className="text-red-600 mt-0.5 shrink-0" />
                        )}
                        <span className="text-sm font-medium">
                          {idx + 1}. {q.question}
                        </span>
                      </div>
                      <p className="text-sm text-black/70 ml-7">
                        <span className="font-mono text-xs">Correct:</span> {q.options.find((o) => o.id === q.correctId)?.text}
                      </p>
                      <p className="text-sm text-black/60 ml-7 mt-1 italic">{q.explanation}</p>
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
                  See AZ-104 course
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
                >
                  <ArrowClockwise size={14} weight="bold" />
                  Retake
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
