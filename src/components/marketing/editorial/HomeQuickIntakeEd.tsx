import { useEffect, useState, type FormEvent } from 'react';
import { EnvelopeSimple } from '@phosphor-icons/react';
import { Wrap, Eyebrow } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';
import { getPortfolioAttribution, trackPortfolioEvent } from '@/lib/portfolio-analytics';

type IntakeTopic = 'compliance' | 'training' | 'security';
type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

const EXPERIMENT_ID = 'exp_cloudevolvers_home_quick_intake_20260510';

const TOPICS: Array<{
  id: IntakeTopic;
  label: { en: string; nl: string };
  training: string;
}> = [
  {
    id: 'compliance',
    label: { en: 'DORA/NIST/CIS route', nl: 'DORA/NIST/CIS route' },
    training: 'Microsoft cloud compliance readiness intake',
  },
  {
    id: 'training',
    label: { en: 'Team training', nl: 'Teamtraining' },
    training: 'Azure and Microsoft 365 team training intake',
  },
  {
    id: 'security',
    label: { en: 'M365 security', nl: 'M365 security' },
    training: 'Microsoft 365 security and Entra readiness intake',
  },
];

export function HomeQuickIntakeEd() {
  const { isDutch, language } = useTranslations();
  const [topic, setTopic] = useState<IntakeTopic>('compliance');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const selectedTopic = TOPICS.find((item) => item.id === topic) ?? TOPICS[0];

  useEffect(() => {
    trackPortfolioEvent('conversion_panel_viewed', {
      experiment: EXPERIMENT_ID,
      source_form: 'home_quick_intake',
      surface: 'homepage',
    });
  }, []);

  function markStarted() {
    if (started) return;
    setStarted(true);
    trackPortfolioEvent('lead_form_started', {
      experiment: EXPERIMENT_ID,
      source_form: 'home_quick_intake',
      surface: 'homepage',
      capture_mode: 'email_first',
    });
  }

  async function submitIntake(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedCompany = company.trim();
    if (!trimmedEmail) {
      setStatus('error');
      setError(isDutch ? 'Werkmail is verplicht.' : 'Work email is required.');
      return;
    }

    setStatus('sending');
    const apiKey = import.meta.env.VITE_FORM_API_KEY as string | undefined;
    const response = await fetch('/api/submit-consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { 'x-api-key': apiKey } : {}),
      },
      body: JSON.stringify({
        name: trimmedCompany || trimmedEmail,
        email: trimmedEmail,
        training: selectedTopic.training,
        message: [
          'HOME QUICK INTAKE',
          `Route: ${selectedTopic.training}`,
          trimmedCompany ? `Company: ${trimmedCompany}` : 'Company: not provided',
          'Requested a first practical route for Azure, Microsoft 365, security, compliance, or team enablement.',
        ].join('\n'),
        language,
        ...getPortfolioAttribution(),
        sourcePath: window.location.pathname,
        sourceUrl: window.location.href,
        portfolioEventName: 'contact_requested',
        portfolioMetadata: {
          experiment: EXPERIMENT_ID,
          source_form: 'home_quick_intake',
          surface: 'homepage',
          topic,
          capture_mode: 'email_first',
          has_company: Boolean(trimmedCompany),
        },
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setStatus('error');
      setError(isDutch ? 'Niet verzonden. Mail ons direct of probeer opnieuw.' : 'Could not send. Email us directly or try again.');
      trackPortfolioEvent('lead_form_failed', {
        experiment: EXPERIMENT_ID,
        source_form: 'home_quick_intake',
        surface: 'homepage',
        topic,
      });
      return;
    }

    setStatus('sent');
    setEmail('');
    setCompany('');
    trackPortfolioEvent('lead_form_submitted', {
      experiment: EXPERIMENT_ID,
      source_form: 'home_quick_intake',
      surface: 'homepage',
      topic,
      capture_mode: 'email_first',
      has_company: Boolean(trimmedCompany),
    });
  }

  return (
    <section className="border-y border-[color:var(--ed-rule)] bg-[color:var(--ed-bg-2)] py-8 sm:py-10">
      <Wrap>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)] lg:items-center">
          <div>
            <Eyebrow accent>{isDutch ? 'Snelle route' : 'Quick route'}</Eyebrow>
            <h2 className="mt-3 ed-display text-[30px] leading-tight text-[color:var(--ed-ink)] sm:text-[36px]">
              {isDutch
                ? 'Stuur een werkmail. Ik koppel jullie vraag aan de eerste Azure of M365 stap.'
                : 'Send a work email. I will map your Azure or M365 question to the first useful step.'}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--ed-ink-2)]">
              {isDutch
                ? 'Voor teams die training, Secure Score, Entra, Purview, DORA, NIST of CIS willen omzetten naar een concrete backlog.'
                : 'For teams that need to turn training, Secure Score, Entra, Purview, DORA, NIST, or CIS into a concrete backlog.'}
            </p>
          </div>

          <form onSubmit={submitIntake} onFocus={markStarted} className="grid gap-3">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {TOPICS.map((item) => {
                const active = topic === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      markStarted();
                      setTopic(item.id);
                    }}
                    className={`flex min-h-12 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.08] text-[color:var(--ed-accent)]'
                      : 'border-black/[0.12] bg-white text-[color:var(--ed-ink-2)] hover:border-black/[0.25]'
                    }`}
                    aria-pressed={active}
                  >
                    <span>{item.label[language]}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)]">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 rounded-lg border border-black/[0.12] bg-white px-3 text-sm text-black outline-none focus:border-[color:var(--ed-accent)]"
                autoComplete="email"
                type="email"
                placeholder={isDutch ? 'Werkmail' : 'Work email'}
                required
              />
              <input
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="h-12 rounded-lg border border-black/[0.12] bg-white px-3 text-sm text-black outline-none focus:border-[color:var(--ed-accent)]"
                autoComplete="organization"
                placeholder={isDutch ? 'Bedrijf optioneel' : 'Company optional'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[color:var(--ed-accent)] px-5 text-sm font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <EnvelopeSimple size={16} weight="bold" />
              {status === 'sent'
                ? isDutch ? 'Route verstuurd' : 'Route sent'
                : status === 'sending'
                  ? isDutch ? 'Versturen...' : 'Sending...'
                  : isDutch ? 'Stuur route' : 'Send route'}
            </button>

            {error ? (
              <p className="text-sm font-medium text-red-700">{error}</p>
            ) : null}
          </form>
        </div>
      </Wrap>
    </section>
  );
}
