import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

export function Hero() {
    const { t } = useTranslations();
    const marketing = t.hero?.marketing;

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="h-36 sm:h-40 lg:h-36" />

                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
                    {/* Copy */}
                    <div className="flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium tracking-wide text-slate-500">
                            {marketing?.eyebrow || "Microsoft Certified Trainer — 15+ years Azure delivery"}
                        </div>

                        <h1 className="font-display mt-8 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                            {marketing?.headline1 || "Your team runs Azure. Make sure they know how."}
                        </h1>

                        <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-500">
                            {marketing?.description || "Practitioner-led training for IT teams in the Netherlands. Real labs, architecture decisions, and operational know-how — delivered in Dutch or English, remote or at your office."}
                        </p>

                        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Link to="/training" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="group h-12 w-full border-none bg-slate-900 px-7 text-base font-medium text-white hover:bg-slate-800 sm:w-auto"
                                >
                                    {marketing?.startTraining || "View courses"}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 w-full border-slate-200 bg-transparent px-7 text-base text-slate-600 hover:bg-slate-50 sm:w-auto"
                                >
                                    {marketing?.viewPathways || "Plan a team session"}
                                </Button>
                            </Link>
                        </div>

                        {/* Trust signals instead of terminal */}
                        <div className="mt-14 flex items-center gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                Dutch & English
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                In-company & remote
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                Hands-on labs
                            </div>
                        </div>
                    </div>

                    {/* Photo + caption */}
                    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:mt-6 lg:max-w-none">
                        <div className="overflow-hidden rounded-2xl shadow-lg shadow-slate-200/50">
                            <img
                                src="/1625557501943.jpg"
                                alt="Yaïr Knijn delivering Azure training"
                                className="aspect-[4/5] w-full object-cover object-[center_18%]"
                            />
                        </div>
                        <div className="mt-5 px-1">
                            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                                {marketing?.founderLabel || "Lead trainer"}
                            </p>
                            <h2 className="font-display mt-1.5 text-2xl font-semibold text-slate-900">
                                Yaïr Knijn
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                {marketing?.founderRole || "MCT, Azure architect, and hands-on consultant at Spot Cloud B.V."}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-16 sm:h-20 lg:h-24" />
            </div>
        </section>
    );
}
