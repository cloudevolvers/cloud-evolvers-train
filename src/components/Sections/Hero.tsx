import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
    ArrowRight,
    Terminal as TerminalIcon,
    Command,
    ChevronRight,
    ShieldCheck,
    Zap,
    Cpu,
    Globe,
    Award,
    Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, Link } from "react-router-dom";
import { popularTrainingBadges } from "./Hero/heroData";

const TerminalWindow = () => {
    const [lines, setLines] = useState<string[]>([
        "Initializing certification path...",
    ]);

    useEffect(() => {
        const sequence = [
            { text: "Loading AZ-900 Fundamentals module...", delay: 800 },
            { text: "accessing MS-900 course materials...", delay: 1600 },
            { text: "simulating enterprise lab environment...", delay: 2400 },
            { text: "verifying AZ-104 prerequisites... CHECK", delay: 3200 },
            { text: "instructor_led_session: CONFIRMED", delay: 4000 },
            { text: "exam_readiness: 100%", delay: 4800 },
            { text: "certification_status: PENDING...", delay: 5600 },
        ];

        let timeoutIds: NodeJS.Timeout[] = [];

        sequence.forEach(({ text, delay }) => {
            const id = setTimeout(() => {
                setLines((prev) => [...prev, text]);
            }, delay);
            timeoutIds.push(id);
        });

        return () => timeoutIds.forEach(clearTimeout);
    }, []);

    return (
        <div className="rounded-xl border border-border bg-card/90 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-sm relative z-20 w-full max-w-2xl mx-auto lg:mr-0 h-full min-h-[400px] flex flex-col">
            {/* Search/Header Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 text-xs text-muted-foreground flex items-center gap-1">
                    <TerminalIcon className="w-3 h-3" />
                    <span>student@cloud-evolvers:~</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 text-muted-foreground space-y-3 font-mono text-sm flex-1 overflow-auto">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-3"
                    >
                        <span className="text-blue-500 select-none shrink-0">$</span>
                        <span className={cn(
                            "break-all",
                            i === lines.length - 1 ? "text-green-500 font-bold" : ""
                        )}>{line}</span>
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2.5 h-5 bg-blue-500 inline-block align-middle ml-1"
                />
            </div>

            {/* Footer Status */}
            <div className="px-4 py-2 border-t border-border bg-muted/30 flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
                <div className="flex gap-4">
                    <span>Course: Azure Administrator</span>
                    <span>Lab: Active</span>
                </div>
                <span className="text-green-500 font-bold">Instructor Online</span>
            </div>
        </div>
    );
};

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Smooth dampening could be added here
        requestAnimationFrame(() => {
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        });
        setIsHovering(true);
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[95vh] flex items-center overflow-hidden bg-background text-foreground pt-24 pb-12"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <DotPattern className="opacity-15 text-primary/20" />
                {/* Spotlight Effect */}
                <div
                    className="pointer-events-none absolute -inset-px transition duration-300 z-10"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-0" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
            </div>

            <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Typography */}
                    <motion.div
                        style={{ y: y1 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        <div className="inline-flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono tracking-wide">
                            <div className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 flex items-center gap-2">
                                <ShieldCheck className="w-3 h-3" />
                                MCT CERTIFIED TRAINING
                            </div>
                            <div className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                NEXT BATCH: ENROLLING
                            </div>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] max-w-4xl text-foreground">
                            Training for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-green-500 animate-gradient-x">
                                Technology Professionals.
                            </span>
                        </h1>

                        <div className="space-y-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
                            <p>
                                Designed for <strong className="text-foreground">everyone in technology</strong> who wants to focus on getting <strong className="text-foreground">Microsoft Certified</strong>.
                                From <strong className="text-foreground">AZ-900 Fundamentals</strong> to <strong className="text-foreground">Expert Solutions Architect</strong>, we provide the path to validate your skills.
                            </p>
                            <p className="text-base text-muted-foreground/80">
                                Join our Microsoft Certified Trainers (MCTs) to master the complete Microsoft Cloud ecosystem,
                                including Azure, Microsoft 365, and Security.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 mt-2">
                            <Button
                                size="lg"
                                onClick={() => navigate('/training')}
                                className="bg-blue-600 hover:bg-blue-700 text-white border-none rounded-lg px-8 py-7 text-lg font-medium shadow-xl shadow-blue-500/20 transition-all hover:scale-105"
                            >
                                <TerminalIcon className="w-5 h-5 mr-2.5" />
                                Browse Courses
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => navigate('/services')}
                                className="border-border hover:bg-accent hover:text-accent-foreground text-muted-foreground rounded-lg px-8 py-7 text-lg font-medium transition-all hover:scale-105 bg-card/50 backdrop-blur"
                            >
                                For Enterprises
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>

                        {/* Popular Badges Section - Premium Glassmorphism */}
                        <div className="pt-8 w-full">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Award className="w-4 h-4" /> Popular Certifications
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {popularTrainingBadges.map((badge, i) => {
                                    const Icon = badge.icon;
                                    return (
                                        <motion.div
                                            key={badge.code}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                        >
                                            <Link
                                                to={`/training/${badge.slug}`}
                                                className={cn(
                                                    "group flex items-center gap-3 px-4 py-2.5",
                                                    "rounded-xl border border-white/10 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none",
                                                    "hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                                                )}
                                            >
                                                <div className={cn("p-1.5 rounded-lg text-white", badge.color.split(' ')[0].replace('bg-', 'bg-').replace('100', '500/20').replace('50', '500/20'))}>
                                                    <Icon className="w-4 h-4 text-foreground" style={{ color: 'inherit' }} />
                                                </div>
                                                <span className="font-mono font-bold text-foreground group-hover:text-blue-500 transition-colors">
                                                    {badge.code}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border/60 grid grid-cols-3 gap-8 max-w-2xl">
                            <div className="space-y-1">
                                <h4 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                    AZ-900 <Award className="w-4 h-4 text-blue-500" />
                                </h4>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">To Expert Level</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                    Live <Users className="w-4 h-4 text-green-500" />
                                </h4>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">Instructor Led</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                    100% <ShieldCheck className="w-4 h-4 text-yellow-500" />
                                </h4>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">MCT Certified</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Terminal Visual */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 relative h-full flex items-center"
                    >
                        {/* Abstract Decorative Elements behind Terminal */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />

                        <div className="w-full relative z-10 transform lg:translate-x-12 xl:translate-x-0">
                            <TerminalWindow />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -top-12 hidden xl:flex items-center gap-3 bg-card border border-border p-4 rounded-xl shadow-2xl z-30 backdrop-blur-md"
                        >
                            <div className="bg-blue-500/20 p-2.5 rounded-lg">
                                <Award className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground font-mono">Official Microsoft</div>
                                <div className="text-sm font-bold text-foreground font-mono">Certification Path</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-12 bottom-20 hidden xl:flex items-center gap-3 bg-card border border-border p-4 rounded-xl shadow-2xl z-30 backdrop-blur-md"
                        >
                            <div className="bg-green-500/20 p-2.5 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground font-mono">Exam Prep</div>
                                <div className="text-base font-bold text-foreground font-mono">INTENSIVE</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
