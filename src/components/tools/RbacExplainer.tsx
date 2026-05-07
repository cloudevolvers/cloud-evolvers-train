import { ShieldCheck } from '@phosphor-icons/react';
import { RBAC_ROLES, RBAC_TASKS } from '@/data/tools/azure-rbac-roles';

const TIER_GUIDE: Array<{ tier: string; tone: string; copy: string }> = [
  {
    tier: 'Minimal',
    tone: 'bg-emerald-100 text-emerald-800',
    copy: 'Smallest blast radius. Use these whenever the task list fits inside one of them.',
  },
  {
    tier: 'Narrow',
    tone: 'bg-blue-100 text-blue-800',
    copy: 'Single-service contributors. Fine for engineers owning one resource type.',
  },
  {
    tier: 'Broad',
    tone: 'bg-amber-100 text-amber-800',
    copy: 'Cross-service. Fast to assign but covers far more than most workflows need.',
  },
  {
    tier: 'Admin',
    tone: 'bg-red-100 text-red-800',
    copy: 'Includes role assignment or vault purge. Reserve for break-glass identities.',
  },
];

export function RbacExplainer() {
  return (
    <>
      <section className="mb-10 rounded-2xl border border-black/[0.08] bg-white p-6">
        <h2 className="text-lg font-semibold mb-4">How to read these tiers</h2>
        <ul className="space-y-3 text-sm text-black/80">
          {TIER_GUIDE.map((g) => (
            <li key={g.tier} className="flex items-start gap-3">
              <span className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${g.tone}`}>
                {g.tier}
              </span>
              <span>{g.copy}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-2xl border border-black/[0.08] bg-white p-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <ShieldCheck size={20} weight="duotone" className="text-[color:var(--ed-accent)]" />
          Why least-privilege matters in 2026
        </h2>
        <ul className="space-y-2.5 text-sm text-black/80">
          <li className="flex items-start gap-2">
            <span className="text-[color:var(--ed-accent)] mt-1">·</span>
            Defense in depth. A compromised identity can only do what its roles allow. Owner on the subscription means an attacker owns the subscription too.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[color:var(--ed-accent)] mt-1">·</span>
            Audit trails read cleanly when role assignments mirror job functions. Reviewing access for SOC 2 or ISO 27001 stops being a guessing game.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[color:var(--ed-accent)] mt-1">·</span>
            Blast radius shrinks. A misconfigured automation script with Storage Blob Data Reader cannot rotate tenant secrets or delete VMs.
          </li>
        </ul>
        <p className="mt-4 text-xs text-black/50">
          Catalogue covers {RBAC_ROLES.length} common built-in roles across {RBAC_TASKS.length} task scenarios. Microsoft publishes more than 200 built-in roles in total; pick the closest match here, then verify in the Azure portal before assigning in production.
        </p>
      </section>
    </>
  );
}

export default RbacExplainer;
