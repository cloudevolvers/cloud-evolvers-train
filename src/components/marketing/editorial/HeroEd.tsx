import { ArrowRight } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';
import { BackgroundIcons } from '@/components/BackgroundIcons';

export function HeroEd() {
  const { isDutch } = useTranslations();

  const eyebrow = isDutch
    ? 'Microsoft Certified Trainer. 15+ jaar Azure. Nu ook STACKIT.'
    : 'Microsoft Certified Trainer. 15+ years of Azure. Now also STACKIT.';

  const headline = isDutch
    ? 'Azure-training door iemand die Azure draait.'
    : 'Azure training, taught by someone who still runs Azure.';

  const lede = isDutch
    ? 'Praktijkgerichte Microsoft-training voor IT-teams. Echte labs, architectuurkeuzes en operationele kennis, in het Nederlands of Engels, remote of bij jullie op kantoor. Staat soevereiniteit op de agenda, dan draaien we nu ook een aparte STACKIT-track voor Europese cloud.'
    : 'Practitioner-led Microsoft training for IT teams. Real labs, architecture decisions, and operational know-how, in Dutch or English, remote or at your office. Sovereignty on the agenda? We now also run a dedicated STACKIT track for European cloud.';

  return (
    <section className="relative bg-[color:var(--ed-bg)] pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <BackgroundIcons variant="hero" />
      </div>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow accent>{eyebrow}</Eyebrow>

            <Display as="h1" size="lg" className="mt-6 leading-[0.98]">
              {headline.split(' ').slice(0, -3).join(' ')}{' '}
              <span className="ed-display-italic">
                {headline.split(' ').slice(-3).join(' ')}
              </span>
            </Display>

            <Lede className="mt-7">{lede}</Lede>

            <div className="mt-10 flex flex-wrap gap-3">
              <EdButton to="/training" variant="primary" size="lg">
                {isDutch ? 'Bekijk trainingen' : 'View courses'}
                <ArrowRight className="w-4 h-4" />
              </EdButton>
              <EdButton to="/contact" variant="ghost" size="lg">
                {isDutch ? 'Plan een teamsessie' : 'Plan a team session'}
              </EdButton>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <dt className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                  {isDutch ? 'Talen' : 'Languages'}
                </dt>
                <dd className="mt-1.5 ed-display text-[20px] text-[color:var(--ed-ink)]">
                  NL · EN
                </dd>
              </div>
              <div>
                <dt className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                  {isDutch ? 'Formats' : 'Formats'}
                </dt>
                <dd className="mt-1.5 ed-display text-[20px] text-[color:var(--ed-ink)]">
                  {isDutch ? 'Remote · On-site' : 'Remote · On-site'}
                </dd>
              </div>
              <div>
                <dt className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                  {isDutch ? 'Sinds' : 'Since'}
                </dt>
                <dd className="mt-1.5 ed-display text-[20px] text-[color:var(--ed-ink)]">
                  2019
                </dd>
              </div>
            </dl>
          </div>

          <figure className="relative lg:pt-8 max-w-[280px] lg:ml-auto">
            <div className="relative overflow-hidden rounded-[6px] border border-[color:var(--ed-rule)]">
              <img
                src="/1625557501943.jpg"
                alt="Yaïr Knijn, Microsoft Certified Trainer"
                className="w-full aspect-[4/5] object-cover object-[center_18%]"
              />
            </div>
            <figcaption className="mt-5 pl-4 border-l border-[color:var(--ed-rule)]">
              <div className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                {isDutch ? 'Lead trainer' : 'Lead trainer'}
              </div>
              <div className="mt-1.5 ed-display text-[22px] text-[color:var(--ed-ink)]">
                Yaïr Knijn
              </div>
              <p className="mt-1 text-[14px] text-[color:var(--ed-ink-2)] leading-snug">
                {isDutch
                  ? 'MCT, Azure-architect en actief consultant bij Spot Cloud B.V.'
                  : 'MCT, Azure architect, and active consultant at Spot Cloud B.V.'}
              </p>
            </figcaption>
          </figure>
        </div>
      </Wrap>
    </section>
  );
}
