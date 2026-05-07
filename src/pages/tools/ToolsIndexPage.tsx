import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calculator, Shield, ChartLine } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede } from '@/components/editorial';
import { SEO } from '@/components/SEO';

interface Tool {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' }>;
  available: boolean;
}

const tools: Tool[] = [
  {
    href: '/tools/az-104-readiness-quiz',
    title: 'AZ-104 readiness quiz',
    description:
      'Twelve real-style questions across the five exam domains. Tells you which areas you have nailed and which still need lab time before you book the exam.',
    icon: CheckCircle,
    available: true,
  },
  {
    href: '/tools/microsoft-exam-cost-calculator',
    title: 'Microsoft exam cost calculator',
    description:
      'Total spend per certification path including exam vouchers, retake risk, training, and renewal cycle.',
    icon: Calculator,
    available: true,
  },
  {
    href: '#',
    title: 'MCT renewal tracker',
    description:
      'Plug in your MCT enrolment date and get reminders for the credential renewal window and required CE points.',
    icon: ChartLine,
    available: false,
  },
  {
    href: '#',
    title: 'Azure RBAC role chooser',
    description:
      'Describe what someone needs to do and we map it to the least-privilege built-in role.',
    icon: Shield,
    available: false,
  },
];

export function ToolsIndexPage() {
  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="Free Azure Tools and Calculators"
        description="Free tools for Azure professionals: AZ-104 readiness quiz, exam cost calculator, MCT renewal tracker, and RBAC role chooser. Built by a working MCT."
        canonical="/tools"
      />

      <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-16">
        <Wrap>
          <Eyebrow>Free tools</Eyebrow>
          <Display as="h1" size="md" className="mt-3 mb-4">
            Tools we wish existed when we were studying
          </Display>
          <Lede className="max-w-2xl">
            Free, no signup, no email gate. Built by a working Microsoft Certified Trainer who got tired of guessing.
          </Lede>
        </Wrap>
      </section>

      <section className="pb-24">
        <Wrap>
          <ul className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const cardClass = `group relative rounded-2xl border border-black/[0.08] bg-white p-6 transition-all ${
                tool.available
                  ? 'hover:border-[color:var(--ed-accent)]/40 hover:shadow-md hover:-translate-y-0.5'
                  : 'opacity-60'
              }`;
              const inner = (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-xl bg-[color:var(--ed-accent)]/10 p-3 text-[color:var(--ed-accent)]">
                      <Icon size={24} weight="duotone" />
                    </div>
                    {!tool.available && (
                      <span className="inline-flex items-center rounded-full bg-black/[0.06] px-2.5 py-0.5 text-xs font-medium text-black/60">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-[color:var(--ed-accent)] transition-colors">
                    {tool.title}
                  </h2>
                  <p className="text-sm text-black/70 leading-relaxed mb-4">{tool.description}</p>
                  {tool.available && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--ed-accent)]">
                      Open tool
                      <ArrowRight size={14} weight="bold" />
                    </span>
                  )}
                </>
              );
              return (
                <li key={tool.title}>
                  {tool.available ? (
                    <Link to={tool.href} className={cardClass}>
                      {inner}
                    </Link>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Wrap>
      </section>
    </div>
  );
}

export default ToolsIndexPage;
