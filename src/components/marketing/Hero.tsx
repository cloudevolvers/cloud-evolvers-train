import { motion } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/ui/dot-pattern";
import { TerminalWindow } from "./TerminalWindow";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-background dark:via-background dark:to-background">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <DotPattern
                    className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] text-slate-300 dark:text-blue-500/20"
                    opacity={0.4}
                />

                {/* Gradient Spotlights - Light mode optimized */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/50 dark:from-blue-500/5 to-transparent rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Typography & CTAs */}
                    <div className="order-2 lg:order-1 flex flex-col items-start text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20 px-4 py-1.5 text-sm mb-6 rounded-full"
                            >
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                                </span>
                                v2.0 Platform Live
                            </Badge>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                                Master the Cloud. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
                                    Engineering First.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-muted-foreground leading-relaxed max-w-xl mb-8">
                                The enterprise-grade training platform designed for modern cloud engineers.
                                Hands-on labs, real-world simulations, and a direct path to Microsoft Azure mastery.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link to="/training">
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20 h-12 px-8 text-base group w-full sm:w-auto"
                                    >
                                        Start Training Now
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link to="/training">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-900 dark:text-white h-12 px-8 text-base w-full sm:w-auto"
                                    >
                                        View Pathways
                                    </Button>
                                </Link>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-slate-500 dark:text-gray-400 w-full pt-8 border-t border-slate-200 dark:border-white/5">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                                    <span className="text-slate-700 dark:text-slate-300">Microsoft Partner</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-700 dark:text-slate-300">Instant Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TerminalIcon className="w-5 h-5 text-emerald-600 dark:text-green-500" />
                                    <span className="text-slate-700 dark:text-slate-300">CLI-First Approach</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Terminal */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <TerminalWindow className="w-full shadow-2xl shadow-slate-900/10 dark:shadow-[0_0_50px_-10px_rgba(59,130,246,0.2)]" />
                        </motion.div>

                        {/* Decorative floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-10 -right-10 bg-white dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 p-4 rounded-xl shadow-lg dark:shadow-xl hidden xl:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-emerald-100 dark:bg-green-500/20 p-2 rounded-lg">
                                    <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-green-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 dark:text-gray-400">Certification</div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">AZ-104 Admin</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-1/2 -right-16 bg-white dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 p-4 rounded-xl shadow-lg dark:shadow-xl hidden xl:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-lg">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 dark:text-gray-400">Certification</div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">AZ-305 Expert</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute -bottom-8 -left-8 bg-white dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 p-4 rounded-xl shadow-lg dark:shadow-xl hidden xl:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-amber-100 dark:bg-amber-500/20 p-2 rounded-lg">
                                    <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 dark:text-gray-400">Certification</div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">AZ-500 Security</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-slate-300 dark:border-white/10 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-400 dark:bg-white/30 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
