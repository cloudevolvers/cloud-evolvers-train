import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

export function Hero() {
    const { t } = useTranslations();
    const marketing = t.hero?.marketing;

    return (
        <section className="relative overflow-hidden bg-[#050816] pt-20 text-white sm:pt-24 lg:pt-16">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(35,82,67,0.32),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(38,79,128,0.28),transparent_30%),linear-gradient(160deg,#07101f_0%,#050816_48%,#08111f_100%)]" />
                <img
                    src="/hero-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-[0.08] mix-blend-screen"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.18),rgba(5,8,22,0.75))]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
                    <div className="flex flex-col items-start pt-8 text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <span>{marketing?.eyebrow || "Azure training led by Yaïr Knijn"}</span>
                        </div>

                        <h1 className="font-display mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[0.98]">
                            {marketing?.headline1 || "Microsoft training for admins, architects, and platform teams."}
                            <span className="mt-3 block text-slate-300">
                                {marketing?.headline2 || "Azure, Microsoft 365, and real production decisions."}
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                            {marketing?.description || "In-company and remote training in Dutch or English, with labs, architecture decisions, and operational lessons taken from real Azure work."}
                        </p>

                        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                            <Link to="/training" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="group h-12 w-full border-none bg-white px-8 text-base text-slate-950 hover:bg-white/90 sm:w-auto"
                                >
                                    {marketing?.startTraining || "Browse training tracks"}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 w-full border-white/14 bg-white/[0.03] px-8 text-base text-white hover:bg-white/[0.08] sm:w-auto"
                                >
                                    {marketing?.viewPathways || "Plan a team session"}
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 w-full max-w-2xl rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                                {marketing?.proofLabel || "What companies ask for"}
                            </p>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                {[marketing?.proofOne, marketing?.proofTwo].filter(Boolean).map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center lg:justify-end">
                        <div className="w-full max-w-lg">
                            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                                <div className="relative min-h-[520px]">
                                    <img
                                        src="/1625557501943.jpg"
                                        alt="Yaïr Knijn delivering Azure training"
                                        className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.08),rgba(3,7,18,0.2)_36%,rgba(3,7,18,0.86)_100%)]" />

                                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                        <div className="max-w-md rounded-[1.6rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200/90">
                                                {marketing?.founderLabel || "Lead trainer"}
                                            </p>
                                            <h2 className="font-display mt-3 text-3xl font-semibold text-white">Yaïr Knijn</h2>
                                            <p className="mt-3 text-sm leading-6 text-slate-300">
                                                {marketing?.founderRole || "Microsoft Certified Trainer, Azure architect, and hands-on consultant."}
                                            </p>
                                            <div className="mt-5 border-t border-white/10 pt-5">
                                                <p className="text-sm leading-7 text-slate-100">
                                                    “{marketing?.founderQuote || "I don’t teach Azure as a catalogue. I teach the decisions teams need to make when they actually run it."}”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
