import { ArrowRight } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, EdButton } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';

export function EnterprisePanelEd() {
  const { isDutch } = useTranslations();

  const points = isDutch
    ? [
        {
          label: 'In-company cohorts',
          body: 'Eén trainer, jullie team, jullie tempo. Remote of op locatie bij jullie op kantoor.',
        },
        {
          label: 'Track op maat',
          body: 'We passen de agenda aan op jullie Azure-omgeving, governance en de rollen die jullie echt moeten opleiden.',
        },
        {
          label: 'Certificering inbegrepen',
          body: 'Voucher voor het Microsoft-examen plus een hertest als dat nodig is.',
        },
      ]
    : [
        {
          label: 'In-company cohorts',
          body: 'One trainer, your team, your pace. Remote or delivered on-site at your office.',
        },
        {
          label: 'Custom track',
          body: 'We shape the agenda around your Azure environment, governance, and the roles you need to train.',
        },
        {
          label: 'Certification included',
          body: 'Microsoft exam voucher plus a retake where it makes sense for the track.',
        },
      ];

  return (
    <section className="bg-[color:var(--ed-ink)] text-white py-20 sm:py-28">
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow accent>{isDutch ? 'Voor L&D en teamleads' : 'For L&D and team leads'}</Eyebrow>
            <Display as="h2" size="md" className="mt-5 text-white">
              {isDutch
                ? 'Train het hele team in één eigen cohort.'
                : 'Train your full team in one private cohort.'}
            </Display>
            <p className="mt-6 text-[17px] leading-relaxed text-white/80 max-w-md">
              {isDutch
                ? 'Cloud Evolvers wordt aangestuurd door Spot Cloud B.V., een Microsoft Solutions Partner die Azure-omgevingen bouwt en beheert. Onze training is ontworpen rondom de vragen die teams na go-live krijgen.'
                : 'Cloud Evolvers is run by Spot Cloud B.V., a Microsoft Solutions Partner that builds and runs Azure environments. Our training is shaped around the questions teams face after go-live.'}
            </p>
            <div className="mt-9">
              <EdButton to="/contact" variant="accent" size="lg">
                {isDutch ? 'Plan een intake' : 'Plan an intake'}
                <ArrowRight className="w-4 h-4" />
              </EdButton>
            </div>
          </div>

          <dl className="lg:col-span-7 grid grid-cols-1 gap-px bg-white/10 rounded-[6px] overflow-hidden">
            {points.map((p) => (
              <div key={p.label} className="bg-[color:var(--ed-ink)] p-6 sm:p-7">
                <dt className="ed-eyebrow text-white/60">{p.label}</dt>
                <dd className="mt-2 text-[16px] leading-snug text-white">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Wrap>
    </section>
  );
}
