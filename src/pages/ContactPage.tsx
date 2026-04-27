import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EnvelopeSimple, Phone, MapPin, WhatsappLogo, Copy, Check } from '@phosphor-icons/react';
import { useLanguage } from '@/hooks/use-language';
import TrainingConsultationForm from '@/components/TrainingConsultationForm';
import { SEO, PAGE_SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import { useTranslations } from '@/hooks/use-translations';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [language] = useLanguage();
  const { isDutch } = useTranslations();
  const [phoneCopied, setPhoneCopied] = useState(false);

  const serviceParam = searchParams.get('service');
  const trainingTitle = serviceParam || (isDutch ? 'Contact Cloud Evolvers' : 'Contact Cloud Evolvers');

  const copyPhone = () => {
    navigator.clipboard.writeText('+31 6 34272027');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO {...PAGE_SEO.contact} />

      <section className="relative pt-20 sm:pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="default" />
        </div>
        <Wrap>
          <div className="relative">
          <Eyebrow accent>{isDutch ? 'Neem contact op' : 'Get in touch'}</Eyebrow>
          <Display as="h1" size="lg" className="mt-5 leading-[1.02] max-w-3xl">
            {isDutch ? (
              <>
                Vertel ons welk team je wilt{' '}
                <span className="ed-display-italic">opleiden.</span>
              </>
            ) : (
              <>
                Tell us which team you want to{' '}
                <span className="ed-display-italic">upskill.</span>
              </>
            )}
          </Display>
          <Lede className="mt-7">
            {isDutch
              ? 'Een intake duurt ongeveer twintig minuten. We bespreken de rollen die je moet opleiden, de tijdlijn, en welke van onze trajecten het beste past. Binnen 24 uur een antwoord.'
              : 'An intake takes about twenty minutes. We walk through the roles you need to upskill, the timeline, and which of our tracks fits best. A response within 24 hours.'}
          </Lede>
          </div>
        </Wrap>
      </section>

      <section className="pb-20 sm:pb-28">
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <aside className="space-y-8">
              <div>
                <Eyebrow>{isDutch ? 'Directe kanalen' : 'Direct channels'}</Eyebrow>
                <ul className="mt-5 divide-y divide-[color:var(--ed-rule)] border-y border-[color:var(--ed-rule)]">
                  <li className="flex items-center gap-4 py-5">
                    <EnvelopeSimple className="w-5 h-5 text-[color:var(--ed-ink-2)]" weight="regular" />
                    <div className="flex-1">
                      <div className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                        {isDutch ? 'E-mail' : 'Email'}
                      </div>
                      <a
                        href="mailto:training@cloudevolvers.com"
                        className="text-[15px] text-[color:var(--ed-ink)] hover:text-[color:var(--ed-accent)]"
                      >
                        training@cloudevolvers.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 py-5">
                    <Phone className="w-5 h-5 text-[color:var(--ed-ink-2)]" weight="regular" />
                    <div className="flex-1">
                      <div className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                        {isDutch ? 'Telefoon' : 'Phone'}
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href="tel:+31634272027"
                          className="text-[15px] text-[color:var(--ed-ink)] hover:text-[color:var(--ed-accent)]"
                        >
                          +31 6 34272027
                        </a>
                        <button
                          type="button"
                          onClick={copyPhone}
                          aria-label="Copy phone number"
                          className="p-1 rounded hover:bg-[color:var(--ed-bg-2)] text-[color:var(--ed-ink-3)] hover:text-[color:var(--ed-ink)]"
                        >
                          {phoneCopied ? (
                            <Check className="w-3.5 h-3.5 text-[color:var(--ed-accent)]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 py-5">
                    <WhatsappLogo className="w-5 h-5 text-[color:var(--ed-ink-2)]" weight="fill" />
                    <div className="flex-1">
                      <div className="ed-eyebrow text-[color:var(--ed-ink-3)]">WhatsApp</div>
                      <a
                        href="https://wa.me/31634272027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-[color:var(--ed-ink)] hover:text-[color:var(--ed-accent)]"
                      >
                        +31 6 34272027
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 py-5">
                    <MapPin className="w-5 h-5 text-[color:var(--ed-ink-2)]" weight="regular" />
                    <div className="flex-1">
                      <div className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                        {isDutch ? 'Bereik' : 'Reach'}
                      </div>
                      <p className="text-[15px] text-[color:var(--ed-ink)]">
                        {isDutch
                          ? 'Nederland, België, Luxemburg, remote wereldwijd'
                          : 'Netherlands, Belgium, Luxembourg, remote worldwide'}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[color:var(--ed-bg-2)] border border-[color:var(--ed-rule)] rounded-[6px] p-6">
                <Eyebrow>{isDutch ? 'Wat gebeurt er daarna' : 'What happens next'}</Eyebrow>
                <ol className="mt-4 space-y-3 text-[14px] text-[color:var(--ed-ink-2)]">
                  <li className="flex gap-3">
                    <span className="font-mono text-[color:var(--ed-ink-3)]">01</span>
                    <span>
                      {isDutch
                        ? 'Je krijgt binnen 24 uur een reactie van Yaïr zelf.'
                        : 'You get a reply from Yaïr himself within 24 hours.'}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[color:var(--ed-ink-3)]">02</span>
                    <span>
                      {isDutch
                        ? 'Korte intake van 20 minuten (video of telefoon).'
                        : 'A short 20-minute intake (video or phone).'}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-[color:var(--ed-ink-3)]">03</span>
                    <span>
                      {isDutch
                        ? 'Voorstel met agenda, data en een vaste prijs.'
                        : 'A proposal with agenda, dates, and a fixed price.'}
                    </span>
                  </li>
                </ol>
              </div>
            </aside>

            <div className="bg-[color:var(--ed-card)] border border-[color:var(--ed-rule)] rounded-[6px] p-6 sm:p-8">
              <Eyebrow>{isDutch ? 'Stuur een bericht' : 'Send a message'}</Eyebrow>
              <p className="mt-3 mb-6 text-[14px] text-[color:var(--ed-ink-2)]">
                {isDutch
                  ? 'Vertel ons wat je team wil leren, of waar de pijn zit. We antwoorden binnen 24 uur.'
                  : 'Tell us what your team wants to learn, or where the pain is. We reply within 24 hours.'}
              </p>
              <TrainingConsultationForm
                language={language || 'en'}
                trainingTitle={trainingTitle}
              />
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
