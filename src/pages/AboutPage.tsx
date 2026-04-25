import { useTranslations } from '@/hooks/use-translations';
import { SEO, PAGE_SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { ArrowRight } from '@phosphor-icons/react';
import { BackgroundIcons } from '@/components/BackgroundIcons';

export function AboutPage() {
  const { isDutch } = useTranslations();

  const bio = isDutch
    ? [
        'Yaïr werkt al sinds de Windows Server 2003-tijd met Microsoft-infrastructuur. Hij stapte vroeg over op Azure, draaide grote tenant-migraties en ontwerpt vandaag Azure landing zones, identity-architecturen en governance-modellen.',
        'Als MCT staat hij zelf voor elke Cloud Evolvers-training. Geen onderaannemers, geen content uit een bibliotheek. Workshops die gebouwd zijn rond projecten die hij net heeft opgeleverd.',
      ]
    : [
        'Yaïr has been working with Microsoft infrastructure since the Windows Server 2003 days. He moved to Azure early, ran large-scale tenant migrations, and today designs Azure landing zones, identity architectures, and governance models for production environments.',
        'As an MCT, he personally delivers every Cloud Evolvers training session. No subcontractors, no content library slides. Workshops are built around the projects he has just shipped.',
      ];

  const howItems = isDutch
    ? [
        {
          title: 'Training start bij operations.',
          body:
            'Elke training is gevormd door echte Azure- en Microsoft 365-projecten: tenant-migraties, landing zones, security-hardening, cost-reviews. We behandelen de beslissingen die teams na go-live nemen, niet alleen de examenobjectives.',
        },
        {
          title: 'Kleine groepen, echte labs.',
          body:
            'Maximaal 10 deelnemers per sessie. Labs draaien in live Azure-omgevingen, niet in sandboxed simulators. Je verlaat de zaal met spiergeheugen, niet alleen met aantekeningen.',
        },
        {
          title: 'Eén trainer, één gezicht.',
          body:
            'Je weet wie er voor de klas staat voordat je boekt. Yaïr Knijn, MCT, Azure-architect en active consultant bij Spot Cloud B.V.',
        },
      ]
    : [
        {
          title: 'Training that starts from operations.',
          body:
            'Every course we run is shaped by actual Azure and Microsoft 365 work: tenant migrations, landing zone builds, security hardening, cost reviews. We teach the decisions teams face when they inherit or scale environments, not just the exam objectives.',
        },
        {
          title: 'Small groups, real labs.',
          body:
            'We cap sessions at 10 participants so everyone gets hands-on time. Labs run in live Azure environments, not sandboxed simulators. Participants walk out with muscle memory, not just notes.',
        },
        {
          title: 'One trainer, one face.',
          body:
            'You know who is teaching before you book. Yaïr Knijn, MCT, Azure architect, and active consultant at Spot Cloud B.V.',
        },
      ];

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO {...PAGE_SEO.about} />

      <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="default" />
        </div>
        <Wrap>
          <div className="relative">
          <Eyebrow accent>{isDutch ? 'Over Cloud Evolvers' : 'About Cloud Evolvers'}</Eyebrow>
          <Display as="h1" size="lg" className="mt-5 leading-[1.02] max-w-3xl">
            {isDutch ? (
              <>
                Training door{' '}
                <span className="ed-display-italic">iemand die Azure draait.</span>
              </>
            ) : (
              <>
                Training by someone who still <span className="ed-display-italic">runs Azure.</span>
              </>
            )}
          </Display>
          <Lede className="mt-7">
            {isDutch
              ? 'Cloud Evolvers is de trainingspoot van Spot Cloud B.V., een Microsoft Solutions Partner die Azure-omgevingen bouwt en beheert. We leren teams wat er écht telt in productie: identity, netwerken, governance en cost control.'
              : 'Cloud Evolvers is the training arm of Spot Cloud B.V., a Microsoft Solutions Partner that builds and runs Azure environments. We teach teams the things that actually matter in production: identity, networking, governance, and cost control.'}
          </Lede>
          </div>
        </Wrap>
      </section>

      <section className="py-12 sm:py-20 bg-[color:var(--ed-bg-2)] border-y border-[color:var(--ed-rule)]">
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <figure className="relative">
              <div className="overflow-hidden rounded-[6px] border border-[color:var(--ed-rule)]">
                <img
                  src="/1625557501943.jpg"
                  alt="Yaïr Knijn"
                  className="w-full aspect-[4/5] object-cover object-[center_18%]"
                />
              </div>
            </figure>
            <div>
              <Eyebrow>{isDutch ? 'Lead trainer' : 'Lead trainer'}</Eyebrow>
              <Display as="h2" size="md" className="mt-3">Yaïr Knijn</Display>
              <p className="mt-3 ed-eyebrow text-[color:var(--ed-ink-3)]">
                {isDutch
                  ? 'MCT · Azure Solutions Architect Expert · 15+ jaar Microsoft'
                  : 'MCT · Azure Solutions Architect Expert · 15+ years Microsoft'}
              </p>
              <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-[color:var(--ed-ink-2)] max-w-xl">
                {bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="py-20 sm:py-28">
        <Wrap>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-12">
            <div className="md:col-span-5">
              <Eyebrow>{isDutch ? 'Hoe we werken' : 'How we work'}</Eyebrow>
              <Display as="h2" size="md" className="mt-4">
                {isDutch ? 'Geen content-fabriek.' : 'Not a content warehouse.'}
              </Display>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Lede>
                {isDutch
                  ? 'De meeste trainingsaanbieders zijn content-bibliotheken. Wij zijn één MCT die consulting doet en training geeft naast de klus.'
                  : 'Most training companies are content libraries. We are one MCT who consults and teaches alongside the work.'}
              </Lede>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--ed-rule)] border border-[color:var(--ed-rule)] rounded-[6px] overflow-hidden">
            {howItems.map((item) => (
              <article
                key={item.title}
                className="bg-[color:var(--ed-card)] p-8 min-h-[220px]"
              >
                <h3 className="ed-display text-[22px] text-[color:var(--ed-ink)] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ed-ink-2)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-20 bg-[color:var(--ed-bg-2)] border-y border-[color:var(--ed-rule)]">
        <Wrap>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <Eyebrow>{isDutch ? 'Spot Cloud B.V.' : 'Spot Cloud B.V.'}</Eyebrow>
              <Display as="h2" size="md" className="mt-4">
                {isDutch ? 'Waarom Spot Cloud?' : 'Why Spot Cloud?'}
              </Display>
            </div>
            <div className="md:col-span-7 text-[16px] leading-relaxed text-[color:var(--ed-ink-2)] space-y-5">
              <p>
                {isDutch
                  ? 'Cloud Evolvers is het merk van Spot Cloud B.V., opgericht door Yaïr in 2023. Spot Cloud doet ook consulting en implementatie: Azure landing zones, Microsoft 365 tenant-architectuur, automatisering met Bicep en Terraform.'
                  : 'Cloud Evolvers is the brand of Spot Cloud B.V., founded by Yaïr in 2023. Spot Cloud also does consulting and implementation work: Azure landing zones, Microsoft 365 tenant architecture, automation with Bicep and Terraform.'}
              </p>
              <p>
                {isDutch
                  ? 'De naam komt van onze Dalmatiër. Geen twee tenants zien er hetzelfde uit, dus geen twee trainingsprogramma\u2019s zouden dat ook moeten zijn.'
                  : 'The name comes from our Dalmatian. No two tenants look the same, so no two training programs should either.'}
              </p>
              <p className="font-mono text-[12px] text-[color:var(--ed-ink-3)]">
                KvK 89708873 · {isDutch ? 'Gevestigd in Nederland' : 'Based in the Netherlands'}
              </p>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="py-20 sm:py-28">
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow accent>{isDutch ? 'Volgende stap' : 'Next step'}</Eyebrow>
              <Display as="h2" size="md" className="mt-4">
                {isDutch ? 'Praten over training?' : 'Want to talk training?'}
              </Display>
              <Lede className="mt-5">
                {isDutch
                  ? 'Vertel ons waar je team mee bezig is, dan stellen we een traject en een formaat voor dat past.'
                  : 'Tell us what your team is working on and we will suggest the tracks and format that fit.'}
              </Lede>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <EdButton to="/training" variant="ghost" size="lg">
                {isDutch ? 'Bekijk trainingen' : 'Browse training'}
              </EdButton>
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
