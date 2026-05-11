import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardText, EnvelopeSimple, ShieldCheck } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede } from '@/components/editorial';
import { SEO } from '@/components/SEO';
import { RelatedTools } from '@/components/tools/RelatedTools';
import { getPortfolioAttribution, trackPortfolioEvent } from '@/lib/portfolio-analytics';

const TOOL = 'microsoft-cloud-evidence-pack-generator';
const controls = [
  ['identity', 'Entra ID sign-in, MFA, PIM, and access review evidence'],
  ['secure-score', 'Microsoft Secure Score and Defender for Cloud recommendations'],
  ['sentinel', 'Sentinel or Log Analytics tables for identity, endpoint, and Azure activity'],
  ['purview', 'Purview labels, DLP, retention, and sensitive data locations'],
  ['backup', 'Backup policy, restore test, RTO/RPO, and recovery owner evidence'],
  ['devices', 'Intune compliance, endpoint protection, and privileged device controls'],
  ['suppliers', 'Critical SaaS, Microsoft cloud dependencies, contracts, and exit notes'],
  ['incident', 'Incident roles, escalation timeline, notification decision, and lessons learned'],
] as const;

export default function MicrosoftCloudEvidencePackGeneratorPage() {
  const [selected, setSelected] = useState<string[]>(['identity', 'secure-score', 'sentinel']);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const report = useMemo(() => buildReport(selected, company), [selected, company]);
  const score = Math.round((selected.length / controls.length) * 100);

  useEffect(() => {
    trackPortfolioEvent('tool_viewed', { tool: TOOL, asset: 'evidence_pack' });
  }, []);

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  async function copyReport() {
    await navigator.clipboard.writeText(report);
    trackPortfolioEvent('tool_report_requested', { tool: TOOL, action: 'copy', score });
  }

  async function requestReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const response = await fetch('/api/submit-consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': import.meta.env.VITE_FORM_API_KEY },
      body: JSON.stringify({
        name: company.trim() || email.trim(),
        email: email.trim(),
        training: 'Microsoft cloud evidence pack review',
        message: report,
        language: 'en',
        ...getPortfolioAttribution(),
        sourcePath: window.location.pathname,
        sourceUrl: window.location.href,
        portfolioEventName: 'tool_report_requested',
        portfolioMetadata: { tool: TOOL, source_form: 'evidence_pack_review', score, has_company: Boolean(company.trim()) },
      }),
    }).catch(() => null);
    if (!response?.ok) {
      setStatus('error');
      trackPortfolioEvent('lead_form_failed', { tool: TOOL, score });
      return;
    }
    setStatus('sent');
    trackPortfolioEvent('lead_form_submitted', { tool: TOOL, lead_type: 'cloud_evidence_review', score });
  }

  return (
    <div className="min-h-screen bg-[color:var(--ed-bg)] text-[color:var(--ed-ink)]">
      <SEO
        title="Microsoft Cloud Evidence Pack Generator"
        description="Generate a practical DORA, NIST, CIS, Azure, and Microsoft 365 evidence pack outline for a compliance review or remediation workshop."
        canonical="/tools/microsoft-cloud-evidence-pack-generator"
      />
      <Wrap narrow>
        <section className="pt-20 sm:pt-28 pb-10">
          <nav className="mb-6 text-sm text-black/60">
            <Link to="/" className="hover:text-black">Home</Link><span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-black">Tools</Link><span className="mx-2">/</span>
            <span className="text-black">Evidence pack generator</span>
          </nav>
          <Eyebrow>DORA, NIST, CIS, Azure, Microsoft 365</Eyebrow>
          <Display as="h1" size="md" className="mt-3 mb-4">
            Generate a Microsoft cloud evidence pack outline.
          </Display>
          <Lede className="mb-8">
            Pick what evidence you already have. The generator turns it into a review-ready outline for Entra ID, Defender, Sentinel, Purview, backup, devices, suppliers, and incident evidence.
          </Lede>
        </section>

        <section className="grid gap-6 pb-10 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">Evidence sources</h2>
              <div className="rounded-full bg-black/[0.04] px-3 py-1 text-sm font-mono">{score}% ready</div>
            </div>
            <div className="grid gap-3">
              {controls.map(([id, label]) => (
                <label key={id} className="flex gap-3 rounded-xl border border-black/[0.08] bg-[color:var(--ed-bg)] p-4 text-sm">
                  <input type="checkbox" checked={selected.includes(id)} onChange={() => toggle(id)} className="mt-1" />
                  <span>
                    <span className="font-semibold">{label}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-black/60">Include this evidence source in the generated pack.</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6">
            <ShieldCheck size={28} weight="duotone" className="mb-4 text-[color:var(--ed-accent)]" />
            <h2 className="text-lg font-semibold">Turn it into a workshop</h2>
            <p className="mt-2 text-sm leading-relaxed text-black/70">
              Send the outline and we will reply with the first evidence route for your Azure and Microsoft 365 tenant.
            </p>
            <form onSubmit={requestReview} className="mt-5 grid gap-2">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Work email" className="rounded-lg border border-black/[0.12] px-3 py-2.5 text-sm" />
              <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company (optional)" className="rounded-lg border border-black/[0.12] px-3 py-2.5 text-sm" />
              <button disabled={status === 'sending' || status === 'sent'} className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">
                <EnvelopeSimple size={16} weight="bold" /> {status === 'sent' ? 'Sent' : status === 'sending' ? 'Sending...' : 'Request review'}
              </button>
              {status === 'error' ? <p className="text-sm font-medium text-red-700">Could not send. Copy the report and email yair@cloudevolvers.com.</p> : null}
            </form>
          </aside>
        </section>

        <section className="pb-10">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Generated evidence pack</h2>
            <button onClick={copyReport} className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-4 py-2 text-sm font-medium">
              <ClipboardText size={16} weight="bold" /> Copy report
            </button>
          </div>
          <textarea readOnly value={report} rows={16} className="w-full rounded-2xl border border-black/[0.08] bg-white p-4 font-mono text-xs leading-5" />
        </section>

        <RelatedTools currentSlug={TOOL} />
        <section className="pb-20">
          <Link to="/services/security-compliance" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ed-accent)]">
            See security and compliance services <ArrowRight size={14} weight="bold" />
          </Link>
        </section>
      </Wrap>
    </div>
  );
}

function buildReport(selected: string[], company: string) {
  const present = controls.filter(([id]) => selected.includes(id));
  const missing = controls.filter(([id]) => !selected.includes(id));
  return [
    '# Microsoft cloud evidence pack',
    '',
    `Company: ${company.trim() || 'not provided'}`,
    `Evidence readiness: ${Math.round((selected.length / controls.length) * 100)}%`,
    '',
    '## Evidence already available',
    ...(present.length ? present.map(([, label]) => `- ${label}`) : ['- none selected']),
    '',
    '## Evidence gaps to collect',
    ...(missing.length ? missing.map(([, label]) => `- ${label}`) : ['- no gaps selected']),
    '',
    '## First review path',
    '1. Pick one regulated workload or Microsoft 365 process.',
    '2. Export Entra, Defender, Sentinel, Purview, backup, endpoint, supplier, and incident evidence where relevant.',
    '3. Map gaps to a DORA, NIST CSF, CIS Controls, and Azure/Microsoft 365 remediation backlog.',
  ].join('\n');
}
