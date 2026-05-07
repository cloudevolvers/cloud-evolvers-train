import type { ReactNode } from 'react';

export interface CostBreakdown {
  label: string;
  examFees: number;
  retakeRisk: number;
  timeCost: number;
  materialsOrCourse: number;
  renewals: number;
  total: number;
  hours: number;
}

function fmtUsd(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}

interface CostResultCardProps {
  breakdown: CostBreakdown;
  passRate: number;
  highlight?: boolean;
  icon: ReactNode;
  materialsLabel: string;
  yearsLabel: string;
}

export function CostResultCard({
  breakdown,
  passRate,
  highlight,
  icon,
  materialsLabel,
  yearsLabel,
}: CostResultCardProps) {
  const cardClass = highlight
    ? 'rounded-2xl border-2 border-[color:var(--ed-accent)] bg-white p-6 shadow-md'
    : 'rounded-2xl border border-black/[0.1] bg-white p-6';
  return (
    <div className={cardClass}>
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-xl bg-[color:var(--ed-accent)]/10 p-2.5 text-[color:var(--ed-accent)]">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-tight">{breakdown.label}</h3>
          <p className="text-xs text-black/60">First-attempt pass rate {Math.round(passRate * 100)}%</p>
        </div>
      </div>
      <p className="font-mono text-3xl sm:text-4xl font-semibold mb-1">{fmtUsd(breakdown.total)}</p>
      <p className="text-xs text-black/60 mb-5">{yearsLabel} total cost</p>

      <dl className="space-y-2 text-sm border-t border-black/[0.08] pt-4">
        <div className="flex justify-between">
          <dt className="text-black/70">Exam fee</dt>
          <dd className="font-mono">{fmtUsd(breakdown.examFees)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-black/70">Retake risk</dt>
          <dd className="font-mono">{fmtUsd(breakdown.retakeRisk)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-black/70">{materialsLabel}</dt>
          <dd className="font-mono">{fmtUsd(breakdown.materialsOrCourse)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-black/70">Time cost ({breakdown.hours}h)</dt>
          <dd className="font-mono">{fmtUsd(breakdown.timeCost)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-black/70">Renewals</dt>
          <dd className="font-mono">{fmtUsd(breakdown.renewals)}</dd>
        </div>
      </dl>
    </div>
  );
}

export default CostResultCard;
