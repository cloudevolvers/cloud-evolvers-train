import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
    {
        id: "az-900",
        title: "AZ-900",
        subtitle: "Azure Fundamentals",
        description: "Cloud concepts, architecture, and services.",
        status: "completed",
        position: "left"
    },
    {
        id: "az-104",
        title: "AZ-104",
        subtitle: "Azure Administrator",
        description: "Implement, manage, and monitor identity.",
        status: "current",
        position: "right"
    },
    {
        id: "az-305",
        title: "AZ-305",
        subtitle: "Solutions Architect",
        description: "Design identity, governance, and monitoring solutions.",
        status: "locked",
        position: "left"
    }
];

export function TrainingPathways() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden md:block" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem] relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Your Path to Mastery</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A structured journey designed to take you from novice to expert with industry-recognized certifications.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {stages.map((stage, index) => (
                        <div key={stage.id} className={cn("flex flex-col md:flex-row items-center justify-between mb-24 relative", stage.position === "right" ? "md:flex-row-reverse" : "")}>

                            {/* Connector Point */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-blue-500 hidden md:block z-20 shadow-lg shadow-blue-500/50" />

                            {/* Connector Line Horizontal */}
                            <div className={cn("absolute top-1/2 w-1/2 h-0.5 bg-blue-500/20 hidden md:block", stage.position === "left" ? "right-0" : "left-0")} />


                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: stage.position === "left" ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={cn("w-full md:w-[45%] p-6 rounded-2xl border bg-card/5 backdrop-blur-sm relative group hover:border-blue-500/30 transition-all",
                                    stage.status === "current" ? "border-blue-500 shadow-lg shadow-blue-500/10" : "border-white/5",
                                    stage.status === "completed" ? "border-green-500/30" : ""
                                )}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono font-bold text-white border border-white/5">
                                        {stage.title}
                                    </div>
                                    {stage.status === "completed" ? (
                                        <CheckCircle2 className="text-green-500 w-5 h-5" />
                                    ) : stage.status === "current" ? (
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    ) : (
                                        <div className="w-2 h-2 rounded-full bg-gray-700" />
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{stage.subtitle}</h3>
                                <p className="text-sm text-gray-400 mb-6">{stage.description}</p>

                                {stage.status !== "locked" && (
                                    <button className="flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform">
                                        {stage.status === "completed" ? "Review Content" : "Continue Learning"}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </button>
                                )}
                            </motion.div>

                            {/* Empty space for the other side */}
                            <div className="w-full md:w-[45%] hidden md:block" />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
