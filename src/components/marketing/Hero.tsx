import { ArrowRight, CheckCircle2, Languages, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

export function Hero() {
    const { t } = useTranslations();
    const marketing = t.hero?.marketing;

    return (
        <section className="relative overflow-hidden bg-background pt-20 sm:pt-24 lg:pt-16">
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
                    <div className="flex flex-col items-start pt-8 text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <span>{marketing?.eyebrow || "Azure training led by Yaïr Knijn"}</span>
                        </div>

                        <h1 className="font-display mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.02]">
                            {marketing?.headline1 || "Microsoft training for admins, architects, and platform teams."}
                            <span className="mt-3 block text-slate-500 dark:text-slate-400">
                                {marketing?.headline2 || "Azure, Microsoft 365, and real production decisions."}
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                            {marketing?.description || "In-company and remote training in Dutch or English, with labs, architecture decisions, and operational lessons taken from real Azure work."}
                        </p>

                        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                            <Link to="/training" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="group h-12 w-full border-none bg-black px-8 text-base text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 sm:w-auto"
                                >
                                    {marketing?.startTraining || "Browse training tracks"}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 w-full border-border px-8 text-base text-foreground hover:bg-accent sm:w-auto"
                                >
                                    {marketing?.viewPathways || "Plan a team session"}
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 grid w-full gap-4 border-t border-border pt-8 sm:grid-cols-3">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                <div>
                                    <div className="text-sm font-medium text-foreground">{marketing?.mct || "Microsoft Certified Trainer"}</div>
                                    <div className="text-sm text-muted-foreground">{marketing?.mctDetail || "Training grounded in real Azure architecture and operations."}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Languages className="mt-0.5 h-5 w-5 text-sky-600 dark:text-sky-400" />
                                <div>
                                    <div className="text-sm font-medium text-foreground">{marketing?.delivery || "Dutch or English delivery"}</div>
                                    <div className="text-sm text-muted-foreground">{marketing?.deliveryDetail || "Remote, on-site, and in-company formats for teams across the Netherlands."}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-400" />
                                <div>
                                    <div className="text-sm font-medium text-foreground">{marketing?.realWorld || "Real production examples"}</div>
                                    <div className="text-sm text-muted-foreground">{marketing?.realWorldDetail || "Landing zones, governance, security, and operations woven into the coursework."}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center lg:justify-end">
                        <div className="w-full max-w-xl">
                            <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-2xl shadow-black/10">
                                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                                    <div className="relative min-h-[360px] bg-neutral-950">
                                        <img
                                            src="/1625557501943.jpg"
                                            alt="Yaïr Knijn delivering Azure training"
                                            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                                                {marketing?.founderLabel || "Lead trainer"}
                                            </p>
                                            <h2 className="font-display mt-2 text-3xl font-semibold">Yaïr Knijn</h2>
                                            <p className="mt-2 text-sm text-white/75">
                                                {marketing?.founderRole || "Microsoft Certified Trainer, Azure architect, and hands-on consultant."}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between bg-[linear-gradient(160deg,rgba(255,255,255,0.98),rgba(244,246,250,0.94))] p-6 dark:bg-[linear-gradient(160deg,rgba(17,24,39,0.96),rgba(11,18,32,0.96))]">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                                {marketing?.proofLabel || "What companies ask for"}
                                            </p>
                                            <ul className="mt-5 space-y-4">
                                                {[marketing?.proofOne, marketing?.proofTwo].filter(Boolean).map((item) => (
                                                    <li key={item} className="flex items-start gap-3">
                                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                                        <span className="text-sm leading-6 text-foreground">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-8 rounded-2xl border border-border/70 bg-background/80 p-5 dark:bg-white/[0.03]">
                                            <p className="text-sm leading-7 text-foreground/90">
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
        </section>
    );
}
