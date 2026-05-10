import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ClipboardText,
  EnvelopeSimple,
  Gauge,
  LockKey,
  ShieldCheck,
  WarningCircle,
} from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { SEO } from '@/components/SEO';
import { RelatedTools } from '@/components/tools/RelatedTools';
import { getPortfolioAttribution, trackPortfolioEvent } from '@/lib/portfolio-analytics';

const EXPERIMENT_ID = 'exp_cloudevolvers_compliance_scan_20260510';
const TOOL_SLUG = 'microsoft-cloud-compliance-readiness';

type AnswerValue = 'yes' | 'partial' | 'no';
type Pillar = 'Identity' | 'Cloud' | 'Data' | 'Operations';

interface Checkpoint {
  id: string;
  pillar: Pillar;
  label: string;
  detail: string;
  frameworks: string[];
  fix: string;
}

const CHECKPOINTS: Checkpoint[] = [
  {
    id: 'entra-mfa',
    pillar: 'Identity',
    label: 'MFA and Conditional Access are enforced for admins and risky sign-ins.',
    detail: 'Maps to NIST PR.AA, CIS Control 6, and DORA access control expectations.',
    frameworks: ['NIST', 'CIS', 'DORA'],
    fix: 'Tighten Entra Conditional Access, break-glass accounts, and admin sign-in monitoring.',
  },
  {
    id: 'privileged-access',
    pillar: 'Identity',
    label: 'Privileged roles use PIM, approval, expiration, and review cycles.',
    detail: 'Important for Entra ID, Azure RBAC, Microsoft 365 admin roles, and audit evidence.',
    frameworks: ['NIST', 'CIS', 'DORA'],
    fix: 'Enable PIM for high-impact roles and schedule monthly access reviews.',
  },
  {
    id: 'secure-score',
    pillar: 'Cloud',
    label: 'Microsoft Secure Score and Defender for Cloud recommendations are triaged.',
    detail: 'Good first signal for Azure and Microsoft 365 hardening work.',
    frameworks: ['CIS', 'NIST'],
    fix: 'Pick the top ten Secure Score and Defender recommendations by blast radius.',
  },
  {
    id: 'benchmarks',
    pillar: 'Cloud',
    label: 'Azure subscriptions are checked against CIS benchmark-style controls.',
    detail: 'Covers identity, logging, encryption, network exposure, and resource hygiene.',
    frameworks: ['CIS', 'NIST'],
    fix: 'Run an Azure posture review and turn the findings into one sprint backlog.',
  },
  {
    id: 'purview',
    pillar: 'Data',
    label: 'Purview labels, retention, DLP, and sensitive data locations are known.',
    detail: 'Needed when compliance owners ask where critical data lives and who can share it.',
    frameworks: ['NIST', 'DORA'],
    fix: 'Map the top data classes, then implement labels, retention, and DLP for those flows.',
  },
  {
    id: 'backups',
    pillar: 'Data',
    label: 'Backups, recovery points, and restore tests exist for critical systems.',
    detail: 'DORA operational resilience depends on tested recovery and recorded backup evidence.',
    frameworks: ['DORA', 'NIST'],
    fix: 'Run restore tests for the top systems and record evidence for each test.',
  },
  {
    id: 'sentinel',
    pillar: 'Operations',
    label: 'Security logs land in Sentinel or Log Analytics with useful alert rules.',
    detail: 'Evidence requires identity, endpoint, cloud, and audit logs to be retained and searchable.',
    frameworks: ['NIST', 'CIS', 'DORA'],
    fix: 'Connect Entra, Defender, Azure Activity, and Microsoft 365 audit logs first.',
  },
  {
    id: 'incident-process',
    pillar: 'Operations',
    label: 'Incident response roles, escalation paths, and timelines are written down.',
    detail: 'DORA and NIS2 style readiness needs operational proof alongside technical controls.',
    frameworks: ['DORA', 'NIS2', 'NIST'],
    fix: 'Write the escalation path and run a short tabletop exercise with the IT owner.',
  },
  {
    id: 'third-parties',
    pillar: 'Operations',
    label: 'Critical ICT suppliers and SaaS dependencies are inventoried.',
    detail: 'Useful for DORA ICT third-party risk and Microsoft cloud dependency discussions.',
    frameworks: ['DORA', 'NIS2'],
    fix: 'Create a supplier register with owner, contract, data type, and fallback path.',
  },
];

const ANSWER_POINTS: Record<AnswerValue, number> = {
  yes: 2,
  partial: 1,
  no: 0,
};

const ANSWER_LABELS: Record<AnswerValue, string> = {
  yes: 'Yes',
  partial: 'Partly',
  no: 'Not yet',
};

const PILLARS: Pillar[] = ['Identity', 'Cloud', 'Data', 'Operations'];

type Answers = Record<string, AnswerValue>;
type ReviewLeadForm = {
  name: string;
  email: string;
  company: string;
};

type QuickLeadForm = {
  email: string;
  company: string;
};

function initialAnswers(): Answers {
  return CHECKPOINTS.reduce<Answers>((acc, item) => {
    acc[item.id] = 'partial';
    return acc;
  }, {});
}

function scoreAnswers(answers: Answers) {
  const possible = CHECKPOINTS.length * 2;
  const points = CHECKPOINTS.reduce((sum, item) => sum + ANSWER_POINTS[answers[item.id]], 0);
  const percent = Math.round((points / possible) * 100);
  return { points, possible, percent };
}

function getBand(percent: number) {
  if (percent >= 78) {
    return {
      label: 'Ready for evidence work',
      tone: 'text-emerald-700',
      summary:
        'The basics look strong. The next useful move is collecting evidence, closing exceptions, and deciding what must be proved for auditors or management.',
    };
  }
  if (percent >= 50) {
    return {
      label: 'Good base, uneven proof',
      tone: 'text-amber-700',
      summary:
        'You probably have several controls in place, but the story is not yet tight enough for DORA, NIS2, NIST, or CIS discussions.',
    };
  }
  return {
    label: 'High-priority remediation',
    tone: 'text-red-700',
    summary:
      'Start with identity, logging, backups, and the critical supplier list. Those basics unblock the rest of the readiness work.',
  };
}

function topFixes(answers: Answers) {
  return CHECKPOINTS
    .filter((item) => answers[item.id] !== 'yes')
    .sort((a, b) => ANSWER_POINTS[answers[a.id]] - ANSWER_POINTS[answers[b.id]])
    .slice(0, 4);
}

export function MicrosoftCloudComplianceReadinessPage() {
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers());
  const [hasScored, setHasScored] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reviewLead, setReviewLead] = useState<ReviewLeadForm>({
    name: '',
    email: '',
    company: '',
  });
  const [reviewStatus, setReviewStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [quickLead, setQuickLead] = useState<QuickLeadForm>({
    email: '',
    company: '',
  });
  const [quickStatus, setQuickStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [quickError, setQuickError] = useState<string | null>(null);
  const [quickStarted, setQuickStarted] = useState(false);
  const score = useMemo(() => scoreAnswers(answers), [answers]);
  const band = getBand(score.percent);
  const fixes = topFixes(answers);

  useEffect(() => {
    trackPortfolioEvent('tool_viewed', {
      tool: TOOL_SLUG,
      experiment: EXPERIMENT_ID,
      scanner: 'dora_nist_cis_m365_azure',
    });
  }, []);

  function updateAnswer(id: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function runScan() {
    setHasScored(true);
    trackPortfolioEvent('tool_run', {
      tool: TOOL_SLUG,
      experiment: EXPERIMENT_ID,
      score_percent: score.percent,
      score_points: score.points,
      readiness_band: band.label,
      missing_controls: fixes.length,
    });
  }

  async function copyReport() {
    const report = buildReport(score.percent, band.label, fixes, answers);
    await navigator.clipboard.writeText(report);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
    trackPortfolioEvent('tool_report_requested', {
      tool: TOOL_SLUG,
      experiment: EXPERIMENT_ID,
      report_action: 'copy',
      score_percent: score.percent,
      readiness_band: band.label,
    });
  }

  function trackContact(action: string) {
    trackPortfolioEvent('contact_requested', {
      tool: TOOL_SLUG,
      experiment: EXPERIMENT_ID,
      contact_action: action,
      score_percent: score.percent,
      readiness_band: band.label,
    });
  }

  function markQuickStarted() {
    if (quickStarted) return;
    setQuickStarted(true);
    trackPortfolioEvent('lead_form_started', {
      tool: TOOL_SLUG,
      experiment: EXPERIMENT_ID,
      source_form: 'compliance_readiness_quick_start',
      capture_mode: 'email_only',
    });
  }

  async function requestQuickStart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuickError(null);

    if (!quickLead.email.trim()) {
      setQuickStatus('error');
      setQuickError('Work email is required.');
      return;
    }

    setQuickStatus('sending');
    const company = quickLead.company.trim();
    const response = await fetch('/api/submit-consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_FORM_API_KEY,
      },
      body: JSON.stringify({
        name: company || quickLead.email.trim(),
        email: quickLead.email.trim(),
        training: 'Microsoft cloud compliance readiness quick start',
        message: [
          'QUICK START REQUEST',
          company ? `Company: ${company}` : 'Company: not provided',
          'Requested first evidence route for Azure, Microsoft 365, DORA, NIS2, NIST, and CIS.',
        ].join('\n'),
        language: 'en',
        ...getPortfolioAttribution(),
        sourcePath: window.location.pathname,
        sourceUrl: window.location.href,
        portfolioEventName: 'tool_report_requested',
        portfolioMetadata: {
          tool: TOOL_SLUG,
          experiment: EXPERIMENT_ID,
          source_form: 'compliance_readiness_quick_start',
          capture_mode: 'email_only',
          has_company: Boolean(company),
        },
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setQuickStatus('error');
      setQuickError('Could not send the quick path. Use the mail button or try again.');
      trackPortfolioEvent('lead_form_failed', {
        tool: TOOL_SLUG,
        experiment: EXPERIMENT_ID,
        source_form: 'compliance_readiness_quick_start',
        capture_mode: 'email_only',
      });
      return;
    }

    setQuickStatus('sent');
    setQuickLead({ email: '', company: '' });
    trackPortfolioEvent('lead_form_submitted', {
      tool: TOOL_SLUG,
      experiment: EXPERIMENT_ID,
      source_form: 'compliance_readiness_quick_start',
      lead_type: 'compliance_readiness',
      capture_mode: 'email_only',
      has_company: Boolean(company),
    });
  }

  async function requestReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReviewError(null);

    if (!reviewLead.name.trim() || !reviewLead.email.trim()) {
      setReviewStatus('error');
      setReviewError('Name and work email are required.');
      return;
    }

    const report = buildReport(score.percent, band.label, fixes, answers);
    const companyLine = reviewLead.company.trim()
      ? `Company: ${reviewLead.company.trim()}\n\n`
      : '';

    setReviewStatus('sending');
    const response = await fetch('/api/submit-consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_FORM_API_KEY,
      },
      body: JSON.stringify({
        name: reviewLead.name.trim(),
        email: reviewLead.email.trim(),
        training: 'Microsoft cloud compliance readiness scan',
        message: `${companyLine}${report}`,
        language: 'en',
        ...getPortfolioAttribution(),
        sourcePath: window.location.pathname,
        sourceUrl: window.location.href,
        portfolioEventName: 'tool_report_requested',
        portfolioMetadata: {
          tool: TOOL_SLUG,
          experiment: EXPERIMENT_ID,
          source_form: 'compliance_readiness_review',
          capture_mode: 'scored_report',
          score_percent: score.percent,
          readiness_band: band.label,
          has_company: Boolean(reviewLead.company.trim()),
        },
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setReviewStatus('error');
      setReviewError('Could not send the review request. Use the mail button or try again.');
      trackPortfolioEvent('lead_form_failed', {
        tool: TOOL_SLUG,
        experiment: EXPERIMENT_ID,
        source_form: 'compliance_readiness_review',
        score_percent: score.percent,
        readiness_band: band.label,
      });
      return;
    }

    setReviewStatus('sent');
    trackPortfolioEvent('lead_form_submitted', {
      tool: TOOL_SLUG,
      experiment: EXPERIMENT_ID,
      source_form: 'compliance_readiness_review',
      lead_type: 'compliance_readiness',
      score_percent: score.percent,
      readiness_band: band.label,
      has_company: Boolean(reviewLead.company.trim()),
    });
  }

  const mailtoBody = encodeURIComponent(buildReport(score.percent, band.label, fixes, answers));

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="Microsoft Cloud Compliance Readiness Scanner"
        description="Free DORA, NIS2, NIST, CIS, Azure, and Microsoft 365 readiness scanner for IT teams that need a practical first compliance backlog."
        canonical="/tools/microsoft-cloud-compliance-readiness"
      />

      <Wrap narrow>
        <section className="pt-20 sm:pt-28 pb-12">
          <nav className="text-sm text-black/60 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-black">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-black">Microsoft cloud compliance readiness</span>
          </nav>

          <Eyebrow>DORA · NIS2 · NIST · CIS · Microsoft cloud</Eyebrow>
          <Display as="h1" size="md" className="mt-3 mb-4">
            Microsoft cloud compliance readiness scanner
          </Display>
          <Lede className="mb-8">
            Answer nine practical questions about Entra ID, Azure, Microsoft 365, logging, recovery, and supplier risk. You get a first backlog for the controls worth fixing before a deeper readiness review.
          </Lede>

          <section className="grid gap-4 sm:grid-cols-3 mb-8">
            <div className="rounded-xl border border-black/[0.08] bg-white p-4">
              <Gauge size={22} weight="duotone" className="mb-3 text-[color:var(--ed-accent)]" />
              <p className="text-sm font-semibold">3 minute scan</p>
              <p className="mt-1 text-xs leading-relaxed text-black/60">No login, no tenant access, no sensitive data.</p>
            </div>
            <div className="rounded-xl border border-black/[0.08] bg-white p-4">
              <ShieldCheck size={22} weight="duotone" className="mb-3 text-[color:var(--ed-accent)]" />
              <p className="text-sm font-semibold">Framework mapped</p>
              <p className="mt-1 text-xs leading-relaxed text-black/60">DORA, NIS2, NIST CSF, CIS Controls, Azure, and M365.</p>
            </div>
            <div className="rounded-xl border border-black/[0.08] bg-white p-4">
              <ClipboardText size={22} weight="duotone" className="mb-3 text-[color:var(--ed-accent)]" />
              <p className="text-sm font-semibold">Actionable output</p>
              <p className="mt-1 text-xs leading-relaxed text-black/60">Copy the report or send it for a scoped review.</p>
            </div>
          </section>

          <section className="mb-8 rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
              <div>
                <h2 className="text-lg font-semibold">Get a first Microsoft cloud review path</h2>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  Send a work email and we will map the first Azure and Microsoft 365 evidence route before you run a deeper scan.
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-black/70 sm:grid-cols-3">
                  <li className="rounded-xl bg-[color:var(--ed-bg)] px-3 py-2">Secure Score and Defender</li>
                  <li className="rounded-xl bg-[color:var(--ed-bg)] px-3 py-2">Purview and evidence</li>
                  <li className="rounded-xl bg-[color:var(--ed-bg)] px-3 py-2">DORA, NIST, CIS backlog</li>
                </ul>
              </div>
              <form onSubmit={requestQuickStart} onFocus={markQuickStarted} className="grid gap-2">
                <input
                  value={quickLead.email}
                  onChange={(event) => setQuickLead((prev) => ({ ...prev, email: event.target.value }))}
                  className="rounded-lg border border-black/[0.12] bg-white px-3 py-2.5 text-sm text-black outline-none focus:border-[color:var(--ed-accent)]"
                  autoComplete="email"
                  type="email"
                  placeholder="Work email"
                  required
                />
                <input
                  value={quickLead.company}
                  onChange={(event) => setQuickLead((prev) => ({ ...prev, company: event.target.value }))}
                  className="rounded-lg border border-black/[0.12] bg-white px-3 py-2.5 text-sm text-black outline-none focus:border-[color:var(--ed-accent)]"
                  autoComplete="organization"
                  placeholder="Company (optional)"
                />
                <button
                  type="submit"
                  disabled={quickStatus === 'sending' || quickStatus === 'sent'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <EnvelopeSimple size={16} weight="bold" />
                  {quickStatus === 'sent'
                    ? 'Quick path sent'
                    : quickStatus === 'sending'
                      ? 'Sending...'
                      : 'Send quick path'}
                </button>
                {quickError ? (
                  <p className="text-sm font-medium text-red-700">{quickError}</p>
                ) : null}
              </form>
            </div>
          </section>

          <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6 mb-10">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Readiness checkpoints</h2>
                <p className="mt-1 text-sm text-black/60">
                  Choose the answer closest to your current production environment.
                </p>
              </div>
              <div className="rounded-full bg-black/[0.04] px-4 py-2 text-sm font-mono text-black/70">
                {score.points}/{score.possible} points
              </div>
            </div>

            <div className="space-y-4">
              {PILLARS.map((pillar) => (
                <section key={pillar} className="border-t border-black/[0.08] pt-4 first:border-t-0 first:pt-0">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-black/50">{pillar}</h3>
                  <div className="space-y-3">
                    {CHECKPOINTS.filter((item) => item.pillar === pillar).map((item) => (
                      <fieldset key={item.id} className="rounded-xl border border-black/[0.08] bg-[color:var(--ed-bg)] p-4">
                        <legend className="sr-only">{item.label}</legend>
                        <div className="grid gap-4 lg:grid-cols-[1fr_260px] lg:items-start">
                          <div>
                            <p className="text-sm font-semibold leading-relaxed">{item.label}</p>
                            <p className="mt-1 text-xs leading-relaxed text-black/60">{item.detail}</p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {item.frameworks.map((framework) => (
                                <span
                                  key={framework}
                                  className="rounded-full border border-black/[0.08] bg-white px-2.5 py-1 text-[11px] font-medium text-black/60"
                                >
                                  {framework}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            {(['yes', 'partial', 'no'] as AnswerValue[]).map((value) => {
                              const active = answers[item.id] === value;
                              return (
                                <label
                                  key={value}
                                  className={`cursor-pointer rounded-lg border px-3 py-2 text-center text-xs font-medium transition-colors ${
                                    active
                                      ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.08] text-[color:var(--ed-accent)]'
                                      : 'border-black/[0.12] bg-white text-black/60 hover:border-black/[0.3]'
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name={item.id}
                                    value={value}
                                    checked={active}
                                    onChange={() => updateAnswer(item.id, value)}
                                    className="sr-only"
                                  />
                                  {ANSWER_LABELS[value]}
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      </fieldset>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <EdButton onClick={runScan}>
                Score readiness
                <ArrowRight size={16} weight="bold" />
              </EdButton>
              <button
                type="button"
                onClick={() => {
                  setAnswers(initialAnswers());
                  setHasScored(false);
                }}
                className="rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
              >
                Reset
              </button>
            </div>
          </section>

          {hasScored && (
            <section className="mb-10 rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <div className="rounded-xl bg-[color:var(--ed-bg)] p-5 text-center">
                  <p className="text-sm font-medium text-black/50">Readiness score</p>
                  <p className="mt-2 text-5xl font-semibold">{score.percent}%</p>
                  <p className={`mt-3 text-sm font-semibold ${band.tone}`}>{band.label}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">First backlog</h2>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">{band.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {fixes.map((item) => (
                      <li key={item.id} className="flex gap-3 rounded-xl border border-black/[0.08] bg-[color:var(--ed-bg)] p-4">
                        <WarningCircle size={20} weight="duotone" className="mt-0.5 shrink-0 text-amber-700" />
                        <div>
                          <p className="text-sm font-semibold">{item.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-black/60">{item.fix}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={copyReport}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ed-ink)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[color:var(--ed-accent-deep)]"
                    >
                      <ClipboardText size={16} weight="bold" />
                      {copied ? 'Report copied' : 'Copy report'}
                    </button>
                    <a
                      href={`mailto:training@cloudevolvers.com?subject=Microsoft cloud readiness scan&body=${mailtoBody}`}
                      onClick={() => trackContact('mailto_report')}
                      className="inline-flex items-center gap-2 rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
                    >
                      <EnvelopeSimple size={16} weight="bold" />
                      Send for review
                    </a>
                    <Link
                      to="/contact?service=Microsoft%20cloud%20compliance%20readiness%20scan"
                      onClick={() => trackContact('contact_page')}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
                    >
                      Scope a sprint
                      <ArrowRight size={16} weight="bold" />
                    </Link>
                  </div>

                  <form
                    onSubmit={requestReview}
                    className="mt-6 rounded-xl border border-black/[0.08] bg-[color:var(--ed-bg)] p-4"
                  >
                    <div className="grid gap-3 sm:grid-cols-3">
                      <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-black/50">
                        Name
                        <input
                          value={reviewLead.name}
                          onChange={(event) => setReviewLead((prev) => ({ ...prev, name: event.target.value }))}
                          className="rounded-lg border border-black/[0.12] bg-white px-3 py-2 text-sm normal-case tracking-normal text-black outline-none focus:border-[color:var(--ed-accent)]"
                          autoComplete="name"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-black/50">
                        Work email
                        <input
                          value={reviewLead.email}
                          onChange={(event) => setReviewLead((prev) => ({ ...prev, email: event.target.value }))}
                          className="rounded-lg border border-black/[0.12] bg-white px-3 py-2 text-sm normal-case tracking-normal text-black outline-none focus:border-[color:var(--ed-accent)]"
                          autoComplete="email"
                          type="email"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-black/50">
                        Company
                        <input
                          value={reviewLead.company}
                          onChange={(event) => setReviewLead((prev) => ({ ...prev, company: event.target.value }))}
                          className="rounded-lg border border-black/[0.12] bg-white px-3 py-2 text-sm normal-case tracking-normal text-black outline-none focus:border-[color:var(--ed-accent)]"
                          autoComplete="organization"
                        />
                      </label>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        disabled={reviewStatus === 'sending' || reviewStatus === 'sent'}
                        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <EnvelopeSimple size={16} weight="bold" />
                        {reviewStatus === 'sent'
                          ? 'Review request sent'
                          : reviewStatus === 'sending'
                            ? 'Sending...'
                            : 'Email me the review path'}
                      </button>
                      <p className="text-xs leading-relaxed text-black/50">
                        Sends the score and first backlog to Cloud Evolvers for a scoped follow-up.
                      </p>
                    </div>
                    {reviewError ? (
                      <p className="mt-3 text-sm font-medium text-red-700">{reviewError}</p>
                    ) : null}
                  </form>
                </div>
              </div>
            </section>
          )}

          <section className="mb-10 rounded-2xl border border-black/[0.08] bg-[color:var(--ed-bg-2)] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <LockKey size={22} weight="duotone" className="mt-1 shrink-0 text-[color:var(--ed-accent)]" />
              <div>
                <h2 className="text-base font-semibold">What this is and is not</h2>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  This is a directional readiness scan for Microsoft cloud teams. It does not certify compliance, replace legal advice, or connect to your tenant. The value is turning scattered DORA, NIS2, NIST, CIS, Azure, and Microsoft 365 concerns into the first practical backlog.
                </p>
              </div>
            </div>
          </section>

          <RelatedTools currentSlug={TOOL_SLUG} />
        </section>
      </Wrap>
    </div>
  );
}

function buildReport(percent: number, band: string, fixes: Checkpoint[], answers: Answers) {
  const lines = [
    'Microsoft cloud compliance readiness scan',
    `Score: ${percent}%`,
    `Band: ${band}`,
    '',
    'Top fixes:',
    ...fixes.map((item, index) => `${index + 1}. ${item.fix}`),
    '',
    'Answers:',
    ...CHECKPOINTS.map((item) => `- ${item.label} ${ANSWER_LABELS[answers[item.id]]}`),
  ];
  return lines.join('\n');
}

export default MicrosoftCloudComplianceReadinessPage;
