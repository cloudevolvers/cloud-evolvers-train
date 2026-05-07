import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Warning } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede } from '@/components/editorial';
import { SEO } from '@/components/SEO';
import { RbacRoleCard } from '@/components/tools/RbacRoleCard';
import { RbacExplainer } from '@/components/tools/RbacExplainer';
import {
  RBAC_TASKS,
  SCOPE_LABELS,
  matchRoles,
  type RbacScope,
} from '@/data/tools/azure-rbac-roles';

const SCOPES: RbacScope[] = [
  'subscription',
  'resource-group',
  'storage-account',
  'key-vault',
  'vm',
  'sql',
  'app-service',
];

export function AzureRbacRoleChooserPage() {
  const [scope, setScope] = useState<RbacScope>('storage-account');
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const visibleTasks = useMemo(
    () => RBAC_TASKS.filter((t) => t.scope === scope),
    [scope],
  );

  const matches = useMemo(
    () => matchRoles(scope, Array.from(selected)),
    [scope, selected],
  );

  const fullCoverage = matches.filter((m) => m.coversAll);
  const best = fullCoverage[0];
  const alternatives = fullCoverage.slice(1, 3);
  const partial = matches.filter((m) => !m.coversAll).slice(0, 2);

  function toggleTask(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleScopeChange(next: RbacScope) {
    setScope(next);
    setSelected(new Set());
  }

  function clearSelections() {
    setSelected(new Set());
  }

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="Azure RBAC role chooser - find the least-privilege built-in role"
        description="Free tool that maps the tasks someone needs to do onto the smallest built-in Azure RBAC role that covers them. Useful study aid for AZ-104, AZ-500, and SC-300."
        canonical="/tools/azure-rbac-role-chooser"
      />

      <Wrap narrow>
        <section className="pt-20 sm:pt-28 pb-12">
          <nav className="text-sm text-black/60 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-black">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-black">Azure RBAC role chooser</span>
          </nav>

          <Eyebrow>Free tool · Least-privilege picker</Eyebrow>
          <Display as="h1" size="md" className="mt-3 mb-4">
            Azure RBAC role chooser
          </Display>
          <Lede className="mb-10">
            Pick a scope, tick the tasks someone needs to do, and we surface the smallest built-in role that covers them. Built as a study aid for AZ-104, AZ-500, and SC-300 candidates who are tired of defaulting to Owner.
          </Lede>

          <section className="rounded-2xl border border-black/[0.08] bg-white p-6 mb-10">
            <h2 className="text-lg font-semibold mb-5">1. Choose the scope</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {SCOPES.map((s) => (
                <label
                  key={s}
                  className={`cursor-pointer rounded-lg border px-3 py-2 text-center text-sm font-medium transition-colors ${
                    scope === s
                      ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.08] text-[color:var(--ed-accent)]'
                      : 'border-black/[0.15] bg-white text-black/70 hover:border-black/[0.3]'
                  }`}
                >
                  <input
                    type="radio"
                    name="scope"
                    value={s}
                    checked={scope === s}
                    onChange={() => handleScopeChange(s)}
                    className="sr-only"
                  />
                  {SCOPE_LABELS[s]}
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">2. Pick the tasks</h2>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-black/60">{selected.size} selected</span>
                <button
                  type="button"
                  onClick={clearSelections}
                  disabled={selected.size === 0}
                  className="text-[color:var(--ed-accent)] hover:underline disabled:opacity-30 disabled:no-underline disabled:cursor-not-allowed"
                >
                  Clear
                </button>
              </div>
            </div>

            <ul className="space-y-2">
              {visibleTasks.map((task) => {
                const checked = selected.has(task.id);
                return (
                  <li key={task.id}>
                    <label
                      className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                        checked
                          ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.06]'
                          : 'border-black/[0.1] bg-white hover:border-black/[0.25]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleTask(task.id)}
                        className="mt-1 accent-[color:var(--ed-accent)]"
                      />
                      <span className="text-sm">{task.label}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>

          {selected.size > 0 && (
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-1">Recommended role</h2>
              <p className="text-sm text-black/70 mb-5">
                {best
                  ? `Of ${matches.length} eligible built-in roles at the ${SCOPE_LABELS[scope].toLowerCase()} scope, this is the smallest one that grants every selected task.`
                  : 'No single built-in role covers every task you selected at this scope.'}
              </p>

              {best && (
                <RbacRoleCard
                  match={best}
                  tasks={RBAC_TASKS}
                  highlight
                />
              )}

              {!best && partial.length > 0 && (
                <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 mb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <Warning size={20} weight="duotone" className="text-amber-700 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-amber-900 mb-1">No single role covers all tasks</h3>
                      <p className="text-sm text-amber-900/90">
                        Either split the work into two role assignments, or escalate to a broader role and accept the wider blast radius. The closest partial matches are below.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {(alternatives.length > 0 || (!best && partial.length > 0)) && (
                <>
                  <h3 className="text-base font-semibold mt-8 mb-3">
                    {best ? 'Broader alternatives' : 'Closest partial matches'}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {(best ? alternatives : partial).map((m) => (
                      <RbacRoleCard key={m.role.id} match={m} tasks={RBAC_TASKS} />
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          <RbacExplainer />

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/training"
              className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Learn this in our AZ-104 / AZ-500 courses
              <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
            >
              More tools
            </Link>
          </div>
        </section>
      </Wrap>
    </div>
  );
}

export default AzureRbacRoleChooserPage;
