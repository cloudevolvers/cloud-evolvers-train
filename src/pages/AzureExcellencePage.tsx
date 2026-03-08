import { AzureExcellence } from "@/components/Sections/AzureExcellence";
import { SEO, PAGE_SEO } from "@/components/SEO";
import { useTranslations } from "@/hooks/use-translations";

export function AzureExcellencePage() {
  const { t } = useTranslations();
  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-background">
      <SEO {...PAGE_SEO.azureExcellence} />

      <section className="py-12 xl:py-16 2xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto">
            <AzureExcellence />
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t.azureExcellence?.whyChooseTitle || 'Why Choose Our Azure Excellence Program?'}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.azureExcellence?.whyChooseDesc || "Our comprehensive Azure and Microsoft Stack Excellence program is designed to elevate your technical expertise and career prospects. With hands-on labs, real-world case studies, and guidance from Microsoft Certified Trainers, you'll gain the skills needed to excel in today's cloud-first world."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
