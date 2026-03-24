import { Hero } from "@/components/marketing/Hero";
import { HomeProofSection } from "@/components/marketing/HomeProofSection";
import { BentoFeatures } from "@/components/marketing/BentoFeatures";
import { TrainingPathways } from "@/components/marketing/TrainingPathways";

import { SEO, PAGE_SEO } from "@/components/SEO";

export default function HomePage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-neutral-500/30 relative overflow-hidden">
            <SEO {...PAGE_SEO.home} />

            <main className="relative z-10 flex flex-col">
                <Hero />
                <HomeProofSection />
                <BentoFeatures />
                <TrainingPathways />
            </main>
        </div>
    );
}
