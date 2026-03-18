import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";
import { TerminalWindow } from "./TerminalWindow";

export function Hero() {
    const { t } = useTranslations();
    const marketing = t.hero?.marketing;

    return (
        <section className="relative overflow-hidden bg-[#050816] text-white">
            {/* Background image + overlays */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(35,82,67,0.28),transparent_50%),radial-gradient(ellipse_at_80%_60%,rgba(38,79,128,0.18),transparent_50%)]" />
                <img
                    src="/hero-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-[0.07] mix-blend-screen"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.12),rgba(5,8,22,0.72))]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top breathing room — clears the fixed header */}
                <div className="h-36 sm:h-40 lg:h-36" />

                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
                    {/* Copy */}
                    <div className="flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-xs font-medium tracking-wide text-emerald-300">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            {marketing?.eyebrow || "Microsoft training led by Yaïr Knijn"}
                        </div>

                        {/* Subtle divider line between eyebrow and heading */}
                        <div className="mt-8 mb-2 h-px w-16 bg-gradient-to-r from-emerald-400/40 to-transparent" />

                        <h1 className="font-display max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                            {marketing?.headline1 || "Microsoft training for admins, architects, and platform teams."}
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
                            {marketing?.description || "In-company and remote training in Dutch or English, with labs, architecture decisions, and operational lessons drawn from real Microsoft cloud work."}
                        </p>

                        <div className="mt-12 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Link to="/training" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="group h-12 w-full border-none bg-white px-7 text-base font-medium text-slate-950 hover:bg-white/90 sm:w-auto"
                                >
                                    {marketing?.startTraining || "Browse training tracks"}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 w-full border-white/12 bg-white/[0.03] px-7 text-base text-white hover:bg-white/[0.07] sm:w-auto"
                                >
                                    {marketing?.viewPathways || "Plan a team session"}
                                </Button>
                            </Link>
                        </div>

                        <TerminalWindow className="mt-16 w-full max-w-sm" />
                    </div>

                    {/* Photo */}
                    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:mt-6 lg:max-w-none">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                            <img
                                src="/1625557501943.jpg"
                                alt="Yaïr Knijn delivering Azure training"
                                className="aspect-[4/5] w-full object-cover object-[center_18%]"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-6 pb-6 pt-24">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/90">
                                    {marketing?.founderLabel || "Lead trainer"}
                                </p>
                                <h2 className="font-display mt-1.5 text-2xl font-semibold text-white">Yaïr Knijn</h2>
                                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                    {marketing?.founderRole || "Microsoft Certified Trainer, Azure architect, and hands-on consultant."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom breathing room */}
                <div className="h-32 sm:h-36 lg:h-40" />
            </div>
        </section>
    );
}
