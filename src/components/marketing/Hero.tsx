import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";
import { TerminalWindow } from "./TerminalWindow";

export function Hero() {
    const { t } = useTranslations();
    const marketing = t.hero?.marketing;

    return (
        <section className="relative overflow-hidden bg-[#fafafa]">
            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top breathing room — clears the fixed header */}
                <div className="h-36 sm:h-40 lg:h-36" />

                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
                    {/* Copy */}
                    <div className="flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-medium tracking-wide text-slate-600">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            {marketing?.eyebrow || "Microsoft training led by Yaïr Knijn"}
                        </div>

                        <div className="mt-8 mb-2 h-px w-16 bg-slate-200" />

                        <h1 className="font-display max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                            {marketing?.headline1 || "Microsoft training for admins, architects, and platform teams."}
                        </h1>

                        <p className="mt-10 max-w-lg text-lg leading-relaxed text-slate-500">
                            {marketing?.description || "In-company and remote training in Dutch or English, with labs, architecture decisions, and operational lessons drawn from real Microsoft cloud work."}
                        </p>

                        <div className="mt-12 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Link to="/training" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="group h-12 w-full border-none bg-slate-900 px-7 text-base font-medium text-white hover:bg-slate-800 sm:w-auto"
                                >
                                    {marketing?.startTraining || "Browse training tracks"}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 w-full border-slate-300 bg-transparent px-7 text-base text-slate-700 hover:bg-slate-50 sm:w-auto"
                                >
                                    {marketing?.viewPathways || "Plan a team session"}
                                </Button>
                            </Link>
                        </div>

                        <TerminalWindow className="mt-16 w-full max-w-sm" />
                    </div>

                    {/* Photo + caption */}
                    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:mt-6 lg:max-w-none">
                        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                            <img
                                src="/1625557501943.jpg"
                                alt="Yaïr Knijn delivering Azure training"
                                className="aspect-[4/5] w-full object-cover object-[center_18%]"
                            />
                        </div>
                        <div className="mt-5 px-1">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                                {marketing?.founderLabel || "Lead trainer"}
                            </p>
                            <h2 className="font-display mt-1.5 text-2xl font-semibold text-slate-900">
                                Yaïr Knijn
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                {marketing?.founderRole || "Microsoft Certified Trainer, Azure architect, and hands-on consultant."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom breathing room */}
                <div className="h-32 sm:h-36 lg:h-40" />
            </div>
        </section>
    );
}
