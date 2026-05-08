import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Path, ArrowClockwise, Compass, GraduationCap } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { SEO } from '@/components/SEO';
import { CertPathStop } from '@/components/tools/CertPathStop';
import {
  PLANNER_CERTS,
  PLANNER_ROLES,
  ROLE_MATRIX,
  trimPath,
  pacingWeeks,
  rationaleFor,
  pivotHint,
  type RoleId,
  type CurrentLevel,
  type FundamentalsStance,
  type WeeklyHours,
  type FocusDepth,
} from '@/data/tools/microsoft-cert-paths';

/* ----------------------------------------------------------------------------
 * Microsoft cert path planner
 *
 * Flow: visitor answers five questions, then sees an ordered cert sequence
 * with prep hours, pacing, and a rationale. Pure client side, no backend.
 *
 * Questions:
 *   1. target role         -> picks the base path
 *   2. current level       -> trims the front of the path
 *   3. fundamentals stance -> only relevant when level = none
 *   4. weekly hours        -> drives weeks-per-stop calculation
 *   5. focus depth         -> rationale copy only, never changes the cert list
 *
 * Path logic lives in src/data/tools/microsoft-cert-paths.ts so this page
 * stays focused on UI state.
 * --------------------------------------------------------------------------*/

type Phase = 'intro' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'result';

interface Answers {
  role?: RoleId;
  level?: CurrentLevel;
  stance?: FundamentalsStance;
  hours?: WeeklyHours;
  focus?: FocusDepth;
}

const LEVEL_OPTIONS: { id: CurrentLevel; label: string; sub: string }[] = [
  { id: 'none', label: 'None', sub: 'Starting from scratch.' },
  { id: 'fundamentals-only', label: 'Fundamentals only', sub: 'AZ-900, MS-900, AI-900, or DP-900.' },
  { id: 'one-associate', label: 'One associate-level cert', sub: 'AZ-104, AZ-204, AZ-500, MS-102, etc.' },
  { id: 'multi-associate', label: 'Multiple associate certs', sub: 'Two or more at the AZ-1xx, AZ-5xx tier.' },
  { id: 'expert', label: 'Already at expert level', sub: 'AZ-305, AZ-400, or SC-100 done.' },
];

const STANCE_OPTIONS: { id: FundamentalsStance; label: string; sub: string }[] = [
  { id: 'take-first', label: 'Take AZ-900 first', sub: 'Recommended for newcomers, ~30 hours of prep.' },
  { id: 'skip', label: 'Skip fundamentals', sub: 'You already have IT background to lean on.' },
];

const HOURS_OPTIONS: { id: WeeklyHours; label: string; sub: string }[] = [
  { id: 5, label: '5 hours / week', sub: 'Slow lane. Evenings and weekends only.' },
  { id: 10, label: '10 hours / week', sub: 'Steady. The realistic full-time-employed pace.' },
  { id: 20, label: '20+ hours / week', sub: 'Fast lane. Bootcamp or sabbatical pace.' },
];

const FOCUS_OPTIONS: { id: FocusDepth; label: string; sub: string }[] = [
  { id: 'breadth', label: 'Breadth', sub: 'Spread across several certs and domains.' },
  { id: 'depth', label: 'Depth', sub: 'Master one role ladder all the way through.' },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Should I always take AZ-900 first?',
    a: 'No. AZ-900 is the recommended starting point if you have little or no Azure background. If you already work with Azure daily or you come from another cloud, the fundamentals exam is mostly review. Skip it and head straight to the associate exam for your role. The fundamentals certs never expire, but they also do not count toward most job requirements.',
  },
  {
    q: 'Is the cert path the same as the role I need?',
    a: 'A cert path is a study plan, the role is the job. Recruiters care about real work experience first, certs second. Use the path to structure learning and to signal effort. Pair every cert with hands-on lab work in your own subscription so you can answer scenario questions in interviews.',
  },
  {
    q: 'Why do you not show MTA or older certs?',
    a: 'Microsoft retired the MTA program in 2022 and the older MCSA / MCSE tracks before that. The current role-based ladder (Fundamentals, Associate, Expert) is the only one Microsoft is investing in. We only list exams that are live and renewable today.',
  },
  {
    q: 'How do you estimate prep hours?',
    a: 'Hours come from Microsoft Learn time estimates and from observed candidate behavior across courses we run. Fundamentals land around 30 hours. Associate exams sit in the 90 to 130 hour range. Expert exams typically need 130 to 160 hours of focused prep, more if you skip the associate underneath. Your real number depends on prior experience and study quality.',
  },
];

function Progress({ step }: { step: number }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-sm text-black/60 mb-2">
        <span>Question {step} of 5</span>
        <span className="font-mono">{Math.round((step / 5) * 100)}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-black/[0.08] overflow-hidden">
        <div
          className="h-full bg-[color:var(--ed-accent)] transition-all"
          style={{ width: `${(step / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

interface ChoiceListProps<T extends string | number> {
  options: { id: T; label: string; sub: string }[];
  value: T | undefined;
  onChange: (v: T) => void;
  name: string;
}

function ChoiceList<T extends string | number>({ options, value, onChange, name }: ChoiceListProps<T>) {
  return (
    <ul className="space-y-2.5">
      {options.map((opt) => {
        const selected = value === opt.id;
        return (
          <li key={String(opt.id)}>
            <label
              className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${
                selected
                  ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.06]'
                  : 'border-black/[0.1] bg-white hover:border-black/[0.25]'
              }`}
            >
              <input
                type="radio"
                name={name}
                value={String(opt.id)}
                checked={selected}
                onChange={() => onChange(opt.id)}
                className="mt-1 accent-[color:var(--ed-accent)]"
              />
              <div>
                <div className="text-sm font-medium">{opt.label}</div>
                <div className="text-xs text-black/60 mt-0.5">{opt.sub}</div>
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export function MicrosoftCertPathPlannerPage() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [answers, setAnswers] = useState<Answers>({});

  const role = useMemo(
    () => (answers.role ? PLANNER_ROLES.find((r) => r.id === answers.role) : undefined),
    [answers.role],
  );

  const trimmed = useMemo(() => {
    if (!role || !answers.level) return [];
    const stance: FundamentalsStance = answers.stance ?? 'take-first';
    return trimPath(role.basePath, answers.level, stance);
  }, [role, answers.level, answers.stance]);

  const totals = useMemo(() => {
    const hours = trimmed.reduce((acc, code) => acc + (PLANNER_CERTS[code]?.prepHours ?? 0), 0);
    const weeks = answers.hours ? pacingWeeks(hours, answers.hours) : 0;
    return { hours, weeks };
  }, [trimmed, answers.hours]);

  function set<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setAnswers({});
    setPhase('intro');
  }

  function nextFromQ2() {
    if (answers.level === 'none') {
      setPhase('q3');
      return;
    }
    setPhase('q4');
  }

  function backFromQ4() {
    if (answers.level === 'none') {
      setPhase('q3');
      return;
    }
    setPhase('q2');
  }

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="Microsoft cert path planner - find your role-based study sequence"
        description="Free decision tree for Microsoft Azure and Microsoft 365 certs. Answer five questions and get an ordered cert path with realistic prep hours and pacing."
        canonical="/tools/microsoft-cert-path-planner"
      />

      <Wrap narrow>
        <section className="pt-20 sm:pt-28 pb-12">
          <nav className="text-sm text-black/60 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-black">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-black">Microsoft cert path planner</span>
          </nav>

          {phase === 'intro' && (
            <>
              <Eyebrow>Free tool · 5 questions · ~2 minutes</Eyebrow>
              <Display as="h1" size="md" className="mt-3 mb-4">
                Microsoft cert path planner
              </Display>
              <Lede className="mb-8">
                Pick a target role, answer five short questions, and get an ordered Microsoft cert path with realistic prep hours and weeks at your chosen study pace. Built for Azure and Microsoft 365 candidates who want a study plan, not a marketing brochure.
              </Lede>

              <ul className="space-y-2 mb-8 text-black/80">
                <li className="flex items-start gap-2">
                  <Compass size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5 shrink-0" />
                  Eight role tracks: Admin, Architect, Security, Developer / DevOps, M365 Admin, AI, Network, Data.
                </li>
                <li className="flex items-start gap-2">
                  <Path size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5 shrink-0" />
                  Trims the front of the path based on certs you already hold, so you do not see exams you already passed.
                </li>
                <li className="flex items-start gap-2">
                  <GraduationCap size={20} weight="duotone" className="text-[color:var(--ed-accent)] mt-0.5 shrink-0" />
                  Prep hours from Microsoft Learn estimates, weeks calculated against your real weekly time budget.
                </li>
              </ul>

              <EdButton onClick={() => setPhase('q1')}>
                Start planner
                <ArrowRight size={16} weight="bold" className="ml-1" />
              </EdButton>
            </>
          )}

          {phase === 'q1' && (
            <>
              <Progress step={1} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Where do you want to land?</h2>
              <p className="text-sm text-black/60 mb-6">Pick the role you are aiming for. The path is built backward from this seat.</p>
              <ul className="space-y-2.5 mb-8">
                {PLANNER_ROLES.map((r) => {
                  const selected = answers.role === r.id;
                  return (
                    <li key={r.id}>
                      <label
                        className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${
                          selected
                            ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.06]'
                            : 'border-black/[0.1] bg-white hover:border-black/[0.25]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={r.id}
                          checked={selected}
                          onChange={() => set('role', r.id)}
                          className="mt-1 accent-[color:var(--ed-accent)]"
                        />
                        <div>
                          <div className="text-sm font-medium">{r.label}</div>
                          <div className="text-xs text-black/60 mt-0.5">{r.blurb}</div>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between">
                <button type="button" onClick={() => setPhase('intro')} className="text-sm text-black/70 hover:text-black">
                  Back
                </button>
                <EdButton onClick={() => setPhase('q2')} disabled={!answers.role}>
                  Next <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>
              </div>
            </>
          )}

          {phase === 'q2' && (
            <>
              <Progress step={2} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">What is your current Microsoft cert level?</h2>
              <p className="text-sm text-black/60 mb-6">Be honest. We trim the front of the path based on this answer.</p>
              <div className="mb-8">
                <ChoiceList options={LEVEL_OPTIONS} value={answers.level} onChange={(v) => set('level', v)} name="level" />
              </div>
              <div className="flex items-center justify-between">
                <button type="button" onClick={() => setPhase('q1')} className="text-sm text-black/70 hover:text-black">
                  Back
                </button>
                <EdButton onClick={nextFromQ2} disabled={!answers.level}>
                  Next <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>
              </div>
            </>
          )}

          {phase === 'q3' && (
            <>
              <Progress step={3} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Fundamentals stance</h2>
              <p className="text-sm text-black/60 mb-6">Only asked when you have no certs yet. Fundamentals are optional but they help.</p>
              <div className="mb-8">
                <ChoiceList options={STANCE_OPTIONS} value={answers.stance} onChange={(v) => set('stance', v)} name="stance" />
              </div>
              <div className="flex items-center justify-between">
                <button type="button" onClick={() => setPhase('q2')} className="text-sm text-black/70 hover:text-black">
                  Back
                </button>
                <EdButton onClick={() => setPhase('q4')} disabled={!answers.stance}>
                  Next <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>
              </div>
            </>
          )}

          {phase === 'q4' && (
            <>
              <Progress step={4} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Time budget per week</h2>
              <p className="text-sm text-black/60 mb-6">Realistic study hours, not aspirational ones. We use this to calculate weeks per cert.</p>
              <div className="mb-8">
                <ChoiceList options={HOURS_OPTIONS} value={answers.hours} onChange={(v) => set('hours', v)} name="hours" />
              </div>
              <div className="flex items-center justify-between">
                <button type="button" onClick={backFromQ4} className="text-sm text-black/70 hover:text-black">
                  Back
                </button>
                <EdButton onClick={() => setPhase('q5')} disabled={!answers.hours}>
                  Next <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>
              </div>
            </>
          )}

          {phase === 'q5' && (
            <>
              <Progress step={5} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Focus depth</h2>
              <p className="text-sm text-black/60 mb-6">Same cert list either way. We just adjust the rationale on the result page.</p>
              <div className="mb-8">
                <ChoiceList options={FOCUS_OPTIONS} value={answers.focus} onChange={(v) => set('focus', v)} name="focus" />
              </div>
              <div className="flex items-center justify-between">
                <button type="button" onClick={() => setPhase('q4')} className="text-sm text-black/70 hover:text-black">
                  Back
                </button>
                <EdButton onClick={() => setPhase('result')} disabled={!answers.focus}>
                  See path <ArrowRight size={16} weight="bold" className="ml-1" />
                </EdButton>
              </div>
            </>
          )}

          {phase === 'result' && role && answers.level && answers.hours && answers.focus && (
            <>
              <Eyebrow>Your path</Eyebrow>
              <Display as="h1" size="md" className="mt-3 mb-4">
                {role.label}
              </Display>

              <div className="rounded-2xl border-2 border-[color:var(--ed-accent)] bg-white p-6 mb-8">
                {trimmed.length > 0 ? (
                  <>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                      {trimmed.map((code, i) => (
                        <span key={code} className="flex items-center gap-2">
                          <span className="rounded-md bg-[color:var(--ed-accent)]/10 px-2.5 py-1 font-mono text-sm font-semibold text-[color:var(--ed-accent)]">
                            {code}
                          </span>
                          {i < trimmed.length - 1 && (
                            <ArrowRight size={14} weight="bold" className="text-black/40" />
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="rounded-lg bg-black/[0.03] p-3">
                        <div className="text-xs text-black/60 mb-1">Total prep</div>
                        <div className="font-mono text-lg font-semibold">{totals.hours} hours</div>
                      </div>
                      <div className="rounded-lg bg-black/[0.03] p-3">
                        <div className="text-xs text-black/60 mb-1">At {answers.hours}h / week</div>
                        <div className="font-mono text-lg font-semibold">~{totals.weeks} {totals.weeks === 1 ? 'week' : 'weeks'}</div>
                      </div>
                    </div>

                    <p className="text-sm text-black/75 leading-relaxed mb-1">
                      {rationaleFor(role, trimmed, answers.level, answers.focus)}
                    </p>
                    {answers.level === 'one-associate' && (
                      <p className="text-xs text-black/55 italic mt-2">
                        We assumed your existing associate is the entry-level one for this role. If it is from a different role, treat the path above as additive.
                      </p>
                    )}
                    {role.alternative && (
                      <p className="text-xs text-black/55 mt-2">
                        Alternative: <span className="font-mono">{role.alternative.code}</span>. {role.alternative.reason}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-black/75 leading-relaxed">
                    Path complete for this role. {role.expertHint ?? 'Consider an adjacent expert track or a specialty exam.'}
                  </p>
                )}
              </div>

              {trimmed.length > 0 && (
                <>
                  <h2 className="text-lg font-semibold mb-4">Stops on the path</h2>
                  <ol className="mb-8">
                    {trimmed.map((code, i) => {
                      const cert = PLANNER_CERTS[code];
                      const weeks = pacingWeeks(cert.prepHours, answers.hours!);
                      const reason = stopReason(code, i, trimmed.length, role.id);
                      return (
                        <CertPathStop
                          key={code}
                          index={i}
                          total={trimmed.length}
                          cert={cert}
                          weeks={weeks}
                          hoursPerWeek={answers.hours!}
                          reason={reason}
                        />
                      );
                    })}
                  </ol>

                  {pivotHint(role, trimmed) && (
                    <div className="mb-10 rounded-xl border border-black/[0.08] bg-black/[0.02] p-4 text-sm text-black/75">
                      <span className="font-medium text-black/85">Switch lane: </span>
                      {pivotHint(role, trimmed)}
                    </div>
                  )}
                </>
              )}

              <RoleMatrix />

              <FaqSection />

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/training"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
                >
                  See our training catalogue
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
                >
                  <ArrowClockwise size={14} weight="bold" />
                  Start over
                </button>
                <Link
                  to="/tools"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
                >
                  More tools
                </Link>
              </div>
            </>
          )}
        </section>
      </Wrap>
    </div>
  );
}

function stopReason(code: string, index: number, total: number, roleId: RoleId): string {
  const cert = PLANNER_CERTS[code];
  if (cert.tier === 'fundamental') {
    return 'Sets the vocabulary. Not required for the next exam, but it makes the associate material land faster.';
  }
  if (cert.tier === 'expert') {
    return 'Expert-tier seat. Assumes you already operate the platform at associate level.';
  }
  // associate
  const isFirstAssoc = index === 0 || (index === 1 && total > 1);
  if (roleId === 'azure-architect' && code === 'AZ-104') {
    return 'AZ-305 is design heavy. Without AZ-104 muscle memory the architecture scenarios feel abstract.';
  }
  if (roleId === 'azure-security' && code === 'AZ-104') {
    return 'Security work assumes you can already operate the platform. AZ-104 first, AZ-500 after.';
  }
  if (roleId === 'azure-network' && code === 'AZ-104') {
    return 'Networking sits on top of identity, compute, and storage. AZ-104 covers that base.';
  }
  if (code === 'AZ-104') return 'The Azure operations baseline. Everything else builds on this.';
  if (code === 'AZ-204') return 'Cloud-native development on Azure. Required base for AZ-400.';
  if (code === 'AZ-500') return 'Azure security operations: identity, platform, data, threat protection.';
  if (code === 'AZ-700') return 'Hybrid networking, ExpressRoute, VPN, and Azure Firewall design.';
  if (code === 'MS-102') return 'Microsoft 365 tenant administration end to end.';
  if (code === 'AI-102') return 'Building AI solutions with Azure OpenAI, Cognitive Services, AI Foundry.';
  if (code === 'DP-203') return 'Data engineering on Azure. Verify Fabric replacement on Microsoft Learn.';
  if (isFirstAssoc) return 'First associate-tier stop. Plan on lab time, not just reading.';
  return 'Builds on the previous stop and rounds out the role profile.';
}

function RoleMatrix() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-2">Role to cert matrix</h2>
      <p className="text-sm text-black/60 mb-4">
        Quick lookup across all eight role tracks. Useful when comparing paths or planning a team-wide cert push.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-black/[0.08] bg-white">
        <table className="w-full text-sm">
          <thead className="bg-black/[0.03] text-xs uppercase tracking-wide text-black/60">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Target role</th>
              <th className="text-left px-4 py-3 font-medium">Recommended start</th>
              <th className="text-left px-4 py-3 font-medium">Core associate</th>
              <th className="text-left px-4 py-3 font-medium">Expert / specialty</th>
              <th className="text-left px-4 py-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {ROLE_MATRIX.map((row) => (
              <tr key={row.role} className="border-t border-black/[0.06] align-top">
                <td className="px-4 py-3 font-medium text-black/85">{row.role}</td>
                <td className="px-4 py-3 font-mono text-xs text-black/75">{row.start}</td>
                <td className="px-4 py-3 font-mono text-xs text-black/75">{row.associate}</td>
                <td className="px-4 py-3 font-mono text-xs text-black/75">{row.expert}</td>
                <td className="px-4 py-3 text-black/70">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-4">FAQ</h2>
      <ul className="space-y-3">
        {FAQ.map((item) => (
          <li key={item.q} className="rounded-xl border border-black/[0.08] bg-white p-5">
            <h3 className="text-base font-semibold mb-2">{item.q}</h3>
            <p className="text-sm text-black/75 leading-relaxed">{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MicrosoftCertPathPlannerPage;
