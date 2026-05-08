import { type PlannerCert } from '@/data/tools/microsoft-cert-paths';

interface CertPathStopProps {
  index: number;
  total: number;
  cert: PlannerCert;
  weeks: number;
  hoursPerWeek: number;
  reason: string;
}

const TIER_BADGE: Record<PlannerCert['tier'], { label: string; tone: string }> = {
  fundamental: { label: 'Fundamentals', tone: 'bg-emerald-100 text-emerald-800' },
  associate: { label: 'Associate', tone: 'bg-blue-100 text-blue-800' },
  expert: { label: 'Expert', tone: 'bg-amber-100 text-amber-800' },
};

export function CertPathStop({ index, total, cert, weeks, hoursPerWeek, reason }: CertPathStopProps) {
  const isLast = index === total - 1;
  const badge = TIER_BADGE[cert.tier];

  return (
    <li className="relative pl-12 pb-6 last:pb-0">
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-[15px] top-9 bottom-0 w-px bg-[color:var(--ed-accent)]/30"
        />
      )}
      <span
        aria-hidden
        className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--ed-accent)] text-white font-mono text-xs font-bold"
      >
        {index + 1}
      </span>

      <div className="rounded-xl border border-black/[0.08] bg-white p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-base font-semibold text-[color:var(--ed-ink)]">
                {cert.examCode}
              </span>
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${badge.tone}`}>
                {badge.label}
              </span>
            </div>
            <p className="text-sm text-black/80 font-medium">{cert.examName}</p>
          </div>
          <div className="shrink-0 text-right text-xs text-black/60">
            <div className="font-mono">{cert.prepHours}h prep</div>
            <div className="font-mono">~{weeks} {weeks === 1 ? 'week' : 'weeks'} at {hoursPerWeek}h/wk</div>
          </div>
        </div>
        <p className="text-sm text-black/65 leading-relaxed">{reason}</p>
      </div>
    </li>
  );
}

export default CertPathStop;
