import { ArrowRight } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, EdButton } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';

export function CTABandEd() {
  const { isDutch } = useTranslations();

  return (
    <section className="bg-[color:var(--ed-bg)] border-t border-[color:var(--ed-rule)] py-20 sm:py-28">
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <Eyebrow accent>{isDutch ? 'Volgende stap' : 'Next step'}</Eyebrow>
            <Display as="h2" size="md" className="mt-4">
              {isDutch
                ? 'Vertel ons welk team je wilt opleiden.'
                : 'Tell us which team you want to upskill.'}
            </Display>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <EdButton to="/training" variant="ghost" size="lg">
              {isDutch ? 'Bekijk trainingen' : 'Browse training'}
            </EdButton>
            <EdButton to="/contact" variant="primary" size="lg">
              {isDutch ? 'Plan een intake' : 'Plan an intake'}
              <ArrowRight className="w-4 h-4" />
            </EdButton>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
