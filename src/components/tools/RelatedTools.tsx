import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { relatedTools } from '@/data/tools/tool-catalog';

interface RelatedToolsProps {
  currentSlug: string;
}

export function RelatedTools({ currentSlug }: RelatedToolsProps) {
  const items = relatedTools(currentSlug);
  if (items.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-1">Related free tools</h2>
      <p className="text-sm text-black/60 mb-5">
        More from the cloudevolvers tools shelf, no signup required.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((t) => (
          <Link
            key={t.slug}
            to={t.href}
            className="group flex items-start justify-between gap-3 rounded-xl border border-black/[0.08] bg-white p-4 transition-colors hover:border-[color:var(--ed-accent)]"
          >
            <div>
              <p className="text-sm font-semibold text-black group-hover:text-[color:var(--ed-accent)]">
                {t.title}
              </p>
              <p className="mt-1 text-xs text-black/60 leading-relaxed">{t.description}</p>
            </div>
            <ArrowRight size={14} weight="bold" className="mt-0.5 text-black/40 group-hover:text-[color:var(--ed-accent)]" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedTools;
