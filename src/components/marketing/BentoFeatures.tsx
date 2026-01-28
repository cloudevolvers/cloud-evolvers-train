import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
    Cloud,
    Shield,
    Server,
    Database,
    Terminal,
    Cpu,
    Zap,
    ArrowRight,
    BarChart,
    Code2,
    Lock,
    Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoCard = ({ title, description, icon: Icon, className, delay, to, dense = false }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.05, duration: 0.4 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6 flex flex-col justify-between",
                className
            )}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Icon className="w-5 h-5" />
                </div>
                {dense && (
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
            </div>

            <div className="mt-auto">
                <Link to={to} className="inline-flex items-center text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Explore <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
            </div>
        </motion.div>
    );
};

export function BentoFeatures() {
    return (
        <section className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Enterprise-Grade Training
                        </h2>
                        <p className="text-lg text-gray-400">
                            A comprehensive ecosystem of cloud learning modules designed for scale and complexity.
                        </p>
                    </div>
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                        View All Modules <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">

                    {/* Large Hero Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 xl:col-span-2 row-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-black p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 text-blue-400">
                                <Cloud className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Azure Solutions Architect Expert</h3>
                            <p className="text-gray-400 mb-8 max-w-md">
                                Master the art of designing scalable, secure, and reliable cloud infrastructure on Microsoft Azure.
                            </p>

                            {/* Mini Visualization */}
                            <div className="mt-auto rounded-lg bg-black/40 border border-white/5 p-4 backdrop-blur-sm">
                                <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
                                    <span>PROGRESS</span>
                                    <span>84%</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[84%] bg-gradient-to-r from-blue-500 to-indigo-500" />
                                </div>
                                <div className="mt-4 flex gap-4 text-xs font-mono text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>42 Labs</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                        <span>5 Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Standard Cards */}
                    <BentoCard
                        title="DevOps Engineering"
                        description="CI/CD pipelines, Docker, Kubernetes, and IaC with Terraform."
                        icon={Terminal}
                        to="/services/infrastructure-as-code"
                        delay={1}
                        className="xl:col-span-1"
                    />
                    <BentoCard
                        title="Security Engineering"
                        description="Identity management, threat protection, and security operations."
                        icon={Shield}
                        to="/services/security-compliance"
                        delay={2}
                        className="xl:col-span-1"
                    />
                    <BentoCard
                        title="Data Engineering"
                        description="Big data analytics, data warehousing, and ETL pipelines."
                        icon={Database}
                        to="/services/ai-engineering"
                        delay={3}
                        className="xl:col-span-1"
                    />

                    {/* Wide Card */}
                    <div className="col-span-1 md:col-span-2 xl:col-span-2 rounded-2xl border border-white/5 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-blue-500/20 transition-colors group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Global Infrastructure</h3>
                                <p className="text-sm text-gray-400">Multi-region deployment strategies.</p>
                            </div>
                            <Globe className="w-6 h-6 text-indigo-400 group-hover:rotate-12 transition-transform" />
                        </div>
                        <div className="mt-6 flex gap-2">
                            <div className="h-24 flex-1 rounded-lg bg-white/5 border border-white/5 flex items-end p-2 group-hover:bg-indigo-500/10 transition-colors">
                                <div className="w-full bg-indigo-500/50 h-[40%] rounded-sm" />
                            </div>
                            <div className="h-24 flex-1 rounded-lg bg-white/5 border border-white/5 flex items-end p-2 group-hover:bg-indigo-500/10 transition-colors">
                                <div className="w-full bg-indigo-500/50 h-[70%] rounded-sm" />
                            </div>
                            <div className="h-24 flex-1 rounded-lg bg-white/5 border border-white/5 flex items-end p-2 group-hover:bg-indigo-500/10 transition-colors">
                                <div className="w-full bg-indigo-500/50 h-[50%] rounded-sm" />
                            </div>
                        </div>
                    </div>

                    <BentoCard
                        title="AI Solutions"
                        description="Implement Generative AI and ML models."
                        icon={Zap}
                        to="/services/ai-engineering"
                        delay={5}
                        className="xl:col-span-1"
                    />

                    <BentoCard
                        title="Network Advanced"
                        description="Hybrid networking and connectivity."
                        icon={Server}
                        to="/services/network-engineering"
                        delay={6}
                        className="xl:col-span-1"
                    />

                    <BentoCard
                        title="FinOps"
                        description="Cost optimization and governance."
                        icon={BarChart}
                        to="/services/cost-optimization"
                        delay={7}
                        className="xl:col-span-1"
                    />

                    {/* MCT Trainer Card with Founder Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 md:col-span-2 xl:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-blue-900/20 p-6 relative overflow-hidden group hover:border-blue-500/30 transition-all"
                    >
                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                            <div className="relative">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10">
                                    <img
                                        src="/1625557501943.jpg"
                                        alt="Yaïr Knijn - Microsoft Certified Trainer"
                                        className="w-full h-full object-cover object-[center_20%]"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                                    MCT
                                </div>
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                    <Shield className="w-4 h-4 text-blue-400" />
                                    <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">Microsoft Certified Trainer</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Yaïr Knijn</h3>
                                <p className="text-sm text-gray-400 mb-3">15+ years of Microsoft & Azure expertise, delivering hands-on training with real-world project experience.</p>
                                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                    <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Azure Expert</span>
                                    <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Cloud Architect</span>
                                    <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">Trainer</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
