import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/use-translations";
import { BackgroundIcons } from "@/components/BackgroundIcons";

interface PathwayStage {
    description: string;
    id: string;
    position: "left" | "right";
    slug: string;
    subtitle: string;
    title: string;
}

const pathwayImages: Record<string, string> = {
    "az-900": "/images/unsplash/modern-office.jpg",
    "az-104": "/images/unsplash/cloud-server-room.jpg",
    "az-305": "/images/unsplash/whiteboard-planning.jpg",
};

export function TrainingPathways() {
    const { t } = useTranslations();
    const pathways = t.pathways;
    const stages = pathways?.stages || [
        {
            id: "az-900",
            title: "AZ-900",
            subtitle: "Start with shared Azure language",
            description: "Use this track when a broader team needs to understand cloud concepts, Azure basics, and how the platform fits together.",
            slug: "azure-fundamentals",
            position: "left"
        },
        {
            id: "az-104",
            title: "AZ-104",
            subtitle: "Build operational depth",
            description: "Move into identity, governance, networking, compute, and storage when the team is responsible for running Azure day to day.",
            slug: "azure-administrator",
            position: "right"
        },
        {
            id: "az-305",
            title: "AZ-305",
            subtitle: "Design for production",
            description: "Use the architecture route for landing zones, resilience, governance choices, and cloud design tradeoffs across environments.",
            slug: "azure-solutions-architect",
            position: "left"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-white py-32 border-t border-brand-100">
            <BackgroundIcons variant="training" />
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-200 to-transparent md:block" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="font-display mb-4 text-3xl font-semibold text-brand-900 md:text-5xl">
                        {pathways?.title || "How teams usually train with us"}
                    </h2>
                    <p className="mx-auto max-w-2xl text-brand-600">
                        {pathways?.subtitle || "We usually help companies align first, build operational depth second, and then move into architecture or security specialisation."}
                    </p>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    {stages.map((stage: PathwayStage, index: number) => (
                        <motion.div
                            key={stage.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className={cn(
                                "relative mb-24 flex flex-col items-center justify-between md:flex-row",
                                stage.position === "right" ? "md:flex-row-reverse" : ""
                            )}
                        >
                            <div className="absolute left-1/2 top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-brand-200 bg-white md:block" />
                            <div
                                className={cn(
                                    "absolute top-1/2 hidden h-0.5 w-1/2 bg-brand-100 md:block",
                                    stage.position === "left" ? "right-0" : "left-0"
                                )}
                            />

                            <Link
                                to={`/training/${stage.slug}`}
                                className="group relative w-full overflow-hidden rounded-2xl border border-brand-200 bg-white transition-all hover:border-brand-300 hover:shadow-md md:w-[45%]"
                            >
                                <div className="h-36 overflow-hidden">
                                    <img
                                        src={pathwayImages[stage.id] || `/training-categories/${stage.slug}.jpg`}
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex justify-between items-center">
                                        <div className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-mono font-bold text-brand-700">
                                            {stage.title}
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-brand-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-brand-900">{stage.subtitle}</h3>
                                    <p className="text-sm leading-relaxed text-brand-600">{stage.description}</p>
                                    <span className="mt-5 flex items-center text-sm font-medium text-brand-700 transition-transform group-hover:translate-x-1">
                                        {pathways?.cta || "View course"}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </span>
                                </div>
                            </Link>

                            <div className="hidden w-full md:block md:w-[45%]" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-16 text-center"
                >
                    <Link to="/contact">
                        <Button size="lg">
                            {pathways?.bottomCta || "Plan your team's training route"} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
