import { ArrowRight, ShieldCheck, Zap, Terminal as TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "./TerminalWindow";
import { Link } from "react-router-dom";
import { useTranslations } from "@/hooks/use-translations";

export function Hero() {
    const { t } = useTranslations();
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 sm:pt-24 lg:pt-0">
            {/* Background Photo */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
            </div>
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Typography & CTAs */}
                    <div className="order-1 lg:order-1 flex flex-col items-start text-left space-y-8">
                        <div className="w-full">
                            <img
                                src="/cloudevolvers-hero-logo.png"
                                alt="Cloud Evolvers"
                                className="hidden sm:block w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl"
                            />
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                                {t.hero?.marketing?.headline1 || 'Master the Cloud.'} <br />
                                <span className="text-white/60">
                                    {t.hero?.marketing?.headline2 || 'Every Discipline.'}
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
                                {t.hero?.marketing?.description || 'The enterprise-grade training platform for cloud security, architecture, engineering, and administration. Hands-on labs, real-world simulations, and a direct path to Microsoft Azure mastery.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link to="/training">
                                    <Button
                                        size="lg"
                                        className="bg-white hover:bg-white/90 text-black border-none h-12 px-8 text-base group w-full sm:w-auto"
                                    >
                                        {t.hero?.marketing?.startTraining || 'Explore Trainings'}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/10 hover:bg-white/5 text-white h-12 px-8 text-base w-full sm:w-auto"
                                    >
                                        {t.hero?.marketing?.viewPathways || 'Contact Us'}
                                    </Button>
                                </Link>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-8 text-sm w-full pt-8 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-white/50" />
                                    <span className="text-white/50">{t.hero?.marketing?.mct || 'Microsoft Certified Trainer'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-white/50" />
                                    <span className="text-white/50">{t.hero?.marketing?.instantAccess || 'Instant Access'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TerminalIcon className="w-5 h-5 text-white/50" />
                                    <span className="text-white/50">{t.hero?.marketing?.realWorld || 'Real World Application First'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Terminal */}
                    <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
                        <TerminalWindow className="w-full shadow-2xl shadow-black/20" />
                    </div>

                </div>
            </div>
        </section>
    );
}
