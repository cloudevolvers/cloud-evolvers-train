import { AzureExcellence } from "@/components/Sections/AzureExcellence";
import { SEO, PAGE_SEO } from "@/components/SEO";
import { PageHeroBg } from "@/components/PageHeroBg";

export function AzureExcellencePage() {
  return (
    <div className="relative min-h-screen pt-28 md:pt-32 bg-background">
      <SEO {...PAGE_SEO.azureExcellence} />
      <PageHeroBg />
      <section className="relative z-10 py-12 xl:py-16 2xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto">
            <AzureExcellence />
          </div>
        </div>
      </section>
    </div>
  );
}
