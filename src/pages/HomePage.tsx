import { SEO, PAGE_SEO } from '@/components/SEO';
import { HeroEd } from '@/components/marketing/editorial/HeroEd';
import { TrustStripEd } from '@/components/marketing/editorial/TrustStripEd';
import { ProgramsPreviewEd } from '@/components/marketing/editorial/ProgramsPreviewEd';
import { EnterprisePanelEd } from '@/components/marketing/editorial/EnterprisePanelEd';
import { WhyEd } from '@/components/marketing/editorial/WhyEd';
import { CTABandEd } from '@/components/marketing/editorial/CTABandEd';

export default function HomePage() {
  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO {...PAGE_SEO.home} />
      <main className="flex flex-col">
        <HeroEd />
        <TrustStripEd />
        <ProgramsPreviewEd />
        <EnterprisePanelEd />
        <WhyEd />
        <CTABandEd />
      </main>
    </div>
  );
}
