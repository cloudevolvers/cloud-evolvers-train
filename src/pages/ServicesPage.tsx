import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { getAllServices } from '@/data/services';
import { useTranslations } from '@/hooks/use-translations';
import { SEO, PAGE_SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';

export default function ServicesPage() {
  const { isDutch, language } = useTranslations();
  const services = getAllServices(language);
  const navigate = useNavigate();

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO {...PAGE_SEO.services} />

      <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="services" />
        </div>
        <Wrap>
          <div className="relative">
          <Eyebrow accent>{isDutch ? 'Diensten' : 'Services'}</Eyebrow>
          <Display as="h1" size="lg" className="mt-5 leading-[1.02] max-w-3xl">
            {isDutch ? (
              <>
                Naast training beveiligen we ook de{' '}
                <span className="ed-display-italic">Azure en Microsoft 365 omgeving.</span>
              </>
            ) : (
              <>
                Beyond training, we secure the{' '}
                <span className="ed-display-italic">Azure and Microsoft 365 environment too.</span>
              </>
            )}
          </Display>
          <Lede className="mt-7">
            {isDutch
              ? 'Cloud Evolvers wordt aangestuurd door Spot Cloud B.V. Dezelfde mensen die je team opleiden, werken bij andere klanten aan landing zones, Microsoft 365, security, compliance readiness, FinOps en cloud operations. Je krijgt geen theorie. Je krijgt een partner die het zelf ook bouwt.'
              : 'Cloud Evolvers is run by Spot Cloud B.V. The same people who train your team work on landing zones, Microsoft 365, security, compliance readiness, FinOps, and cloud operations for other customers. You are not getting theory. You are getting a partner who ships the same work.'}
          </Lede>
          </div>
        </Wrap>
      </section>

      <section className="pb-20 sm:pb-28">
        <Wrap>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--ed-rule)] border border-[color:var(--ed-rule)] rounded-[6px] overflow-hidden">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group bg-[color:var(--ed-card)] p-7 text-left flex flex-col min-h-[280px] transition-colors hover:bg-[color:var(--ed-bg-2)]"
              >
                <span className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                  {service.features?.[0] || service.id}
                </span>
                <h2 className="mt-5 ed-display text-[24px] text-[color:var(--ed-ink)] leading-tight">
                  {service.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ed-ink-2)] line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-[color:var(--ed-rule)]">
                  <span className="text-[13px] text-[color:var(--ed-ink-2)]">
                    {isDutch ? 'Details' : 'Details'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[color:var(--ed-accent)] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-20 bg-[color:var(--ed-ink)] text-white">
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow accent>{isDutch ? 'Volgende stap' : 'Next step'}</Eyebrow>
              <Display as="h2" size="md" className="mt-4 text-white">
                {isDutch
                  ? 'Vertel ons over je Azure of Microsoft 365 omgeving.'
                  : 'Tell us about your Azure or Microsoft 365 environment.'}
              </Display>
              <p className="mt-6 text-[16px] leading-relaxed text-white/80 max-w-md">
                {isDutch
                  ? 'We beginnen met een korte scan en een helder voorstel. Geen generieke proposal-deck, wel een lijst met wat we zouden aanraden en waarom.'
                  : 'We start with a short scan and a clear proposal. No generic deck, just a list of what we would recommend and why.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                to="/training"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-[14px] text-[15px] text-white border border-white/20 hover:border-white/50 transition"
              >
                {isDutch ? 'Bekijk trainingen' : 'Browse training'}
              </Link>
              <EdButton to="/contact" variant="accent" size="lg">
                {isDutch ? 'Neem contact op' : 'Get in touch'}
                <ArrowRight className="w-4 h-4" />
              </EdButton>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
