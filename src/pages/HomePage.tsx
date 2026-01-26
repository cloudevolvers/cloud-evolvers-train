import { Hero } from "@/components/marketing/Hero";
import { BentoFeatures } from "@/components/marketing/BentoFeatures";
import { TrainingPathways } from "@/components/marketing/TrainingPathways";

import { SEO, PAGE_SEO } from "@/components/SEO";

export default function HomePage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-blue-500/30">
            <SEO {...PAGE_SEO.home} />

            <main className="flex flex-col">
                {/* 1. Hero Section: Command Center */}
                <Hero />

                {/* 2. Social Proof: Marquee */}


                {/* 3. Features: Bento Grid */}
                <BentoFeatures />

                {/* 4. Training Pathways: Interactive Map */}
                <TrainingPathways />

            </main>
        </div>
    );
}
