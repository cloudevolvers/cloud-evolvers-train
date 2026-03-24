import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "@/hooks/use-translations";
import { PageHeroBg } from "@/components/PageHeroBg";
import { SEO, PAGE_SEO } from "@/components/SEO";

export function AboutPage() {
  const { t } = useTranslations();

  return (
    <section className="relative overflow-hidden bg-background pt-28 md:pt-32 pb-16 md:pb-24">
      <SEO {...PAGE_SEO.about} />
      <PageHeroBg />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        {/* Page header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold tracking-tight">
            {t.about?.title || "About Cloud Evolvers"}
          </h1>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.about?.subtitle || "Cloud Evolvers is the training arm of Spot Cloud — a company built on 15+ years of hands-on Microsoft infrastructure work. We train the people who run Azure and Microsoft 365 in production."}
          </p>
        </motion.div>

        {/* Yaïr — full-width hero card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <Card className="overflow-hidden border border-border shadow-lg">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Photo */}
                <div className="lg:col-span-2 relative h-72 sm:h-80 lg:h-auto lg:min-h-[440px]">
                  <img
                    src="/1625557501943.jpg"
                    alt="Yaïr Knijn"
                    className="w-full h-full object-cover object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                </div>

                {/* Bio */}
                <div className="lg:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                    {t.about?.team?.founder?.role || "Founder & lead trainer"}
                  </p>
                  <h2 className="font-display mt-2 text-2xl md:text-3xl text-foreground font-semibold">
                    Yaïr Knijn
                  </h2>
                  <div className="mt-5 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      {t.about?.team?.founder?.description || "Yaïr has been working with Microsoft infrastructure since the Windows Server 2003 days. He moved into Azure early, ran large-scale tenant migrations, and now spends most of his time helping teams understand the decisions that actually matter in production — identity, networking, governance, and cost control."}
                    </p>
                    <p>
                      As an MCT (Microsoft Certified Trainer), he delivers all Cloud Evolvers training personally. No subcontractors, no slideshows from a content library — just practical workshops backed by real project experience.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      Microsoft Certified Trainer
                    </span>
                    <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground">
                      Azure Solutions Architect Expert
                    </span>
                    <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground">
                      15+ years Microsoft
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* How we work — two columns */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold mb-8">
            {t.about?.ourStory?.title || "How we work"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t.about?.ourMission?.title || "Training that starts from operations"}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.about?.ourMission?.content || "Every course we run is shaped by actual Azure and Microsoft 365 work — tenant migrations, landing zone builds, security hardening, cost reviews. We teach the decisions teams face when they inherit or scale environments, not just the exam objectives."}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t.about?.ourMission?.vision || "Small groups, real labs"}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.about?.ourMission?.visionContent || "We cap sessions at 10 participants so everyone gets hands-on time. Labs run in live Azure environments, not sandboxed simulators. Participants walk out with muscle memory, not just notes."}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Spot Cloud origin story — compact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <h2 className="font-display text-xl md:text-2xl text-foreground font-semibold mb-4">
              {t.about?.ourStory?.whySpotCloud || "Why Spot Cloud?"}
            </h2>
            <div className="max-w-3xl space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground">
              <p>
                {t.about?.ourStory?.content1 || "Cloud Evolvers is the training brand of Spot Cloud, the company Yaïr founded in 2023. Spot Cloud also does consulting and implementation work — Azure landing zones, Microsoft 365 tenant architecture, automation with Bicep and Terraform."}
              </p>
              <p>
                {t.about?.ourStory?.spotCloudExplanation || "The name? It comes from our Dalmatian. Spots are unique, and so is every cloud environment we work with. No two tenants look the same, so no two training programs should either."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
            <h2 className="font-display text-xl md:text-2xl text-foreground font-semibold mb-3">
              {t.about?.contact?.title || "Want to talk training?"}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t.about?.contact?.description || "Tell us what your team is working on and we'll suggest the tracks and format that fit."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/training"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Browse training
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
