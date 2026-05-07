import { CheckCircle, Warning } from '@phosphor-icons/react';
import {
  type RbacMatch,
  type RbacTask,
  TIER_LABELS,
  TIER_TONE,
} from '@/data/tools/azure-rbac-roles';

interface RbacRoleCardProps {
  match: RbacMatch;
  tasks: RbacTask[];
  highlight?: boolean;
}

export function RbacRoleCard({ match, tasks, highlight = false }: RbacRoleCardProps) {
  const { role, covered, missing } = match;
  const tone = TIER_TONE[role.tier];
  const taskById = new Map(tasks.map((t) => [t.id, t]));

  const containerClass = highlight
    ? 'rounded-2xl border-2 border-[color:var(--ed-accent)] bg-white p-6 shadow-sm'
    : 'rounded-xl border border-black/[0.08] bg-white p-5';

  return (
    <div className={containerClass}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {highlight && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[color:var(--ed-accent)] mb-1">
              Best match
            </span>
          )}
          <h3 className={highlight ? 'text-2xl font-semibold leading-tight' : 'text-lg font-semibold leading-tight'}>
            {role.name}
          </h3>
        </div>
        <span className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tone.badge}`}>
          {TIER_LABELS[role.tier]}
        </span>
      </div>

      <p className="text-sm text-black/70 leading-relaxed mb-4">{role.description}</p>

      {role.warning && (
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-900">
          <Warning size={16} weight="duotone" className="mt-0.5 shrink-0" />
          <span>{role.warning}</span>
        </div>
      )}

      <div className="space-y-2">
        {covered.map((taskId) => {
          const task = taskById.get(taskId);
          if (!task) return null;
          return (
            <div key={taskId} className="flex items-start gap-2 text-sm">
              <CheckCircle size={16} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-black/80">{task.label}</span>
            </div>
          );
        })}
        {missing.map((taskId) => {
          const task = taskById.get(taskId);
          if (!task) return null;
          return (
            <div key={taskId} className="flex items-start gap-2 text-sm">
              <Warning size={16} weight="duotone" className="text-red-600 mt-0.5 shrink-0" />
              <span className="text-black/60">
                <span className="font-medium text-red-700">Not covered: </span>
                {task.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RbacRoleCard;
