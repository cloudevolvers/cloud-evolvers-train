import { Wrap, Eyebrow, Display, Lede } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';

export function WhyEd() {
  const { isDutch } = useTranslations();

  const columns = isDutch
    ? [
        {
          title: 'Door een practitioner.',
          body:
            'Je trainer werkt nog steeds aan echte Azure-implementaties. De voorbeelden in de les zijn geen slides, het zijn dingen die vorige week in productie zijn gebeurd.',
        },
        {
          title: 'Geen content-fabriek.',
          body:
            'Eén MCT, één gezicht, één verantwoordelijkheid. Je weet precies wie er voor de klas staat voordat je boekt.',
        },
        {
          title: 'NL of EN, waar het handig is.',
          body:
            'Remote-cohorts voor individuen, in-company voor hele teams. De trainer komt naar jullie kantoor in de Benelux als dat beter werkt.',
        },
      ]
    : [
        {
          title: 'Taught by a practitioner.',
          body:
            'Your trainer still ships Azure work. The examples you see in class are not slides, they are things that happened in production last week.',
        },
        {
          title: 'Not a content warehouse.',
          body:
            'One MCT, one face, one person accountable for the outcome. You know exactly who is teaching before you book.',
        },
        {
          title: 'NL or EN, wherever it fits.',
          body:
            'Remote cohorts for individuals, in-company for whole teams. The trainer travels to your office across the Benelux when that works better.',
        },
      ];

  return (
    <section className="bg-[color:var(--ed-bg-2)] py-20 sm:py-28">
      <Wrap>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end mb-14">
          <div className="md:col-span-5">
            <Eyebrow>{isDutch ? 'Waarom Cloud Evolvers' : 'Why Cloud Evolvers'}</Eyebrow>
            <Display as="h2" size="md" className="mt-4">
              {isDutch ? 'Training die blijft plakken.' : 'Training that actually sticks.'}
            </Display>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Lede>
              {isDutch
                ? 'De meeste teams boeken ons omdat ze geen cursus willen. Ze willen dat de vrijdag-na-training iemand bij hen op de werkvloer snapt wat hij doet in Azure. Dat is waar we de lessen omheen bouwen.'
                : 'Most teams book us because they don\u2019t want a course. They want the Friday after training, someone on their floor knows what they are doing in Azure. That is the thing we design around.'}
            </Lede>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--ed-rule)] border border-[color:var(--ed-rule)] rounded-[6px] overflow-hidden">
          {columns.map((col) => (
            <article key={col.title} className="bg-[color:var(--ed-card)] p-8 min-h-[220px]">
              <h3 className="ed-display text-[22px] text-[color:var(--ed-ink)] leading-snug">
                {col.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ed-ink-2)]">
                {col.body}
              </p>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
