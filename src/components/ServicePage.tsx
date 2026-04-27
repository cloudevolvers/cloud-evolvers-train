import { useTranslations } from '@/hooks/use-translations';
import { ArrowLeft, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { allServices } from '@/data/services';
import type { Service, ServiceSection as ServiceSectionType } from '@/types/services';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';

interface ServicePageProps {
  serviceId?: string;
}

function SectionBlock({ section }: { section: ServiceSectionType }) {
  return (
    <div className="pb-10 mb-10 border-b border-[color:var(--ed-rule)] last:border-b-0 last:pb-0 last:mb-0">
      <Display as="h2" size="sm" className="mb-4">
        {section.title}
      </Display>
      {section.description ? (
        <p className="text-[16px] leading-relaxed text-[color:var(--ed-ink-2)] mb-6 max-w-2xl">
          {section.description}
        </p>
      ) : null}
      {section.items && section.items.length > 0 ? (
        <ul className="space-y-4 max-w-2xl">
          {section.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <CheckCircle
                size={18}
                weight="regular"
                className="mt-[3px] shrink-0 text-[color:var(--ed-accent)]"
              />
              <p className="text-[15px] leading-relaxed text-[color:var(--ed-ink-2)]">
                <span className="text-[color:var(--ed-ink)] font-medium">{item.title}.</span>{' '}
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function ServicePage({ serviceId: propServiceId }: ServicePageProps) {
  const { serviceId: paramServiceId } = useParams<{ serviceId: string }>();
  const serviceId = propServiceId || paramServiceId;
  const { language, isDutch } = useTranslations();
  const navigate = useNavigate();

  if (!serviceId || !allServices[serviceId as keyof typeof allServices]) {
    return (
      <div className="bg-[color:var(--ed-bg)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Display as="h1" size="sm" className="mb-4">
            {isDutch ? 'Dienst niet gevonden' : 'Service not found'}
          </Display>
          <EdButton to="/services" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4" />
            {isDutch ? 'Terug naar diensten' : 'Back to services'}
          </EdButton>
        </div>
      </div>
    );
  }

  const service: Service = allServices[serviceId as keyof typeof allServices][language];

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <section className="relative pt-20 sm:pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="services" />
        </div>
        <Wrap>
          <div className="relative">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-1.5 text-[13px] text-[color:var(--ed-ink-3)] hover:text-[color:var(--ed-ink)] mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {isDutch ? 'Terug naar diensten' : 'Back to services'}
          </button>
          <Eyebrow accent>{isDutch ? 'Dienst' : 'Service'}</Eyebrow>
          <Display as="h1" size="lg" className="mt-5 leading-[1.02] max-w-3xl">
            {service.title}
          </Display>
          <Lede className="mt-7">{service.description}</Lede>

          {service.features?.length ? (
            <ul className="mt-10 flex flex-wrap gap-2 max-w-3xl">
              {service.features.map((f, i) => (
                <li
                  key={i}
                  className="ed-eyebrow px-3 py-1.5 rounded-full border border-[color:var(--ed-rule)] bg-[color:var(--ed-bg-2)] text-[color:var(--ed-ink-2)]"
                >
                  {f}
                </li>
              ))}
            </ul>
          ) : null}
          </div>
        </Wrap>
      </section>

      {service.image ? (
        <section className="pb-12">
          <Wrap>
            <figure className="overflow-hidden rounded-[6px] border border-[color:var(--ed-rule)]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-[16/7] object-cover"
                loading="lazy"
              />
            </figure>
            {service.imageCredit ? (
              <figcaption className="mt-2 text-[11px] font-mono text-[color:var(--ed-ink-3)]">
                {service.imageCredit}
              </figcaption>
            ) : null}
          </Wrap>
        </section>
      ) : null}

      <section className="pb-20 sm:pb-28">
        <Wrap>
          <div className="max-w-3xl">
            {service.sections.map((section, i) => (
              <SectionBlock key={i} section={section} />
            ))}

            {service.benefits?.length ? (
              <div className="pt-10 mt-10 border-t border-[color:var(--ed-rule)]">
                <Display as="h2" size="sm" className="mb-6">
                  {isDutch ? 'Voordelen' : 'Benefits'}
                </Display>
                <ul className="space-y-4">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="mt-[3px] shrink-0 text-[color:var(--ed-accent)]"
                      />
                      <p className="text-[15px] leading-relaxed text-[color:var(--ed-ink-2)]">
                        <span className="text-[color:var(--ed-ink)] font-medium">{b.title}.</span>{' '}
                        {b.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {service.closingText ? (
              <p className="mt-12 text-[16px] leading-relaxed text-[color:var(--ed-ink-2)] border-l border-[color:var(--ed-accent)] pl-5">
                {service.closingText}
              </p>
            ) : null}
          </div>
        </Wrap>
      </section>

      <section className="py-16 bg-[color:var(--ed-bg-2)] border-y border-[color:var(--ed-rule)]">
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Eyebrow>{isDutch ? 'Volgende stap' : 'Next step'}</Eyebrow>
              <Display as="h2" size="sm" className="mt-3">
                {isDutch ? 'Wil je hier samen aan werken?' : 'Want to work on this together?'}
              </Display>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-[14px] text-[15px] border border-[color:var(--ed-rule)] text-[color:var(--ed-ink)] hover:border-[color:var(--ed-ink)] transition"
              >
                {isDutch ? 'Alle diensten' : 'All services'}
              </Link>
              <EdButton to="/contact" variant="primary" size="lg">
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
