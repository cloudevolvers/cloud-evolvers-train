import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/use-translations";

interface PathwayStage {
    description: string;
    id: string;
    position: "left" | "right";
    slug: string;
    subtitle: string;
    title: string;
}

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
            subtitle: "Design with confidence",
            description: "Use the architecture route for landing zones, resilience, governance choices, and cloud design tradeoffs across environments.",
            slug: "azure-solutions-architect",
            position: "left"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-white py-32">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent md:block" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="font-display mb-4 text-3xl font-semibold text-slate-900 md:text-5xl">
                        {pathways?.title || "How teams usually train with us"}
                    </h2>
                    <p className="mx-auto max-w-2xl text-slate-500">
                        {pathways?.subtitle || "We usually help companies align first, build operational depth second, and then move into architecture or security specialisation."}
                    </p>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    {stages.map((stage: PathwayStage) => (
                        <div
                            key={stage.id}
                            className={cn(
                                "relative mb-24 flex flex-col items-center justify-between md:flex-row",
                                stage.position === "right" ? "md:flex-row-reverse" : ""
                            )}
                        >
                            <div className="absolute left-1/2 top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-200 bg-white md:block" />
                            <div
                                className={cn(
                                    "absolute top-1/2 hidden h-0.5 w-1/2 bg-slate-100 md:block",
                                    stage.position === "left" ? "right-0" : "left-0"
                                )}
                            />

                            <Link
                                to={`/training/${stage.slug}`}
                                className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-md md:w-[45%]"
                            >
                                <div className="h-36 overflow-hidden">
                                    <img
                                        src={`/training-categories/${stage.slug}.jpg`}
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex justify-between items-center">
                                        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono font-bold text-slate-600">
                                            {stage.title}
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-slate-500" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-slate-900">{stage.subtitle}</h3>
                                    <p className="text-sm leading-relaxed text-slate-500">{stage.description}</p>
                                    <span className="mt-5 flex items-center text-sm font-medium text-slate-700 transition-transform group-hover:translate-x-1">
                                        {pathways?.cta || "View course"}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </span>
                                </div>
                            </Link>

                            <div className="hidden w-full md:block md:w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
