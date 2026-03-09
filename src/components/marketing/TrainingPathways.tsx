import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const stages = [
    {
        id: "az-900",
        title: "AZ-900",
        subtitle: "Azure Fundamentals",
        description: "Cloud concepts, Azure architecture, and core services.",
        slug: "azure-fundamentals",
        position: "left"
    },
    {
        id: "az-104",
        title: "AZ-104",
        subtitle: "Azure Administrator",
        description: "Manage identities, governance, storage, compute, and virtual networks.",
        slug: "azure-administrator",
        position: "right"
    },
    {
        id: "az-305",
        title: "AZ-305",
        subtitle: "Solutions Architect",
        description: "Design identity, governance, and monitoring solutions at scale.",
        slug: "azure-solutions-architect",
        position: "left"
    }
];

export function TrainingPathways() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem] relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Your Path to Mastery</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A structured learning path from fundamentals to expert-level Azure certifications.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {stages.map((stage) => (
                        <div key={stage.id} className={cn("flex flex-col md:flex-row items-center justify-between mb-24 relative", stage.position === "right" ? "md:flex-row-reverse" : "")}>

                            {/* Connector Point */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-neutral-300 dark:border-white/40 hidden md:block z-20" />

                            {/* Connector Line */}
                            <div className={cn("absolute top-1/2 w-1/2 h-0.5 bg-neutral-200 dark:bg-white/10 hidden md:block", stage.position === "left" ? "right-0" : "left-0")} />

                            {/* Content Card */}
                            <Link
                                to={`/training/${stage.slug}`}
                                className={cn(
                                    "w-full md:w-[45%] rounded-2xl border border-border relative overflow-hidden group hover:border-neutral-400 dark:hover:border-white/20 transition-all"
                                )}
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={`/training-categories/${stage.slug}.jpg`}
                                        alt=""
                                        className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 dark:from-black/80 dark:to-black/40" />
                                </div>
                                <div className="relative z-10 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-white border border-white/10">
                                            {stage.title}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{stage.subtitle}</h3>
                                    <p className="text-sm text-gray-300 mb-6">{stage.description}</p>

                                    <span className="flex items-center text-sm font-medium text-white/80 group-hover:translate-x-1 transition-transform">
                                        View course
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </span>
                                </div>
                            </Link>

                            {/* Empty space for the other side */}
                            <div className="w-full md:w-[45%] hidden md:block" />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
