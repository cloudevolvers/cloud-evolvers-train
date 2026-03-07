import { Link } from "react-router-dom";
import {
    Cloud,
    Shield,
    Server,
    Database,
    Terminal,
    Zap,
    ArrowRight,
    BarChart,
    Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

const BentoCard = ({ title, description, icon: Icon, className, to, exploreLabel = "Explore", image }: any) => {
    return (
        <Link
            to={to}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6 flex flex-col justify-between",
                className
            )}
        >
            {image && (
                <>
                    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
                </>
            )}
            <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Icon className="w-5 h-5" />
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
            </div>

            <div className="relative z-10 mt-auto">
                <span className="inline-flex items-center text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    {exploreLabel} <ArrowRight className="w-3 h-3 ml-1" />
                </span>
            </div>
        </Link>
    );
};

export function BentoFeatures() {
    const { t } = useTranslations();
    const b = t.bento;
    const exploreLabel = b?.explore || "Explore";
    return (
        <section className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            {b?.title || 'Enterprise-Grade Training'}
                        </h2>
                        <p className="text-lg text-gray-400">
                            {b?.subtitle || 'A comprehensive ecosystem of cloud learning modules designed for scale and complexity.'}
                        </p>
                    </div>
                    <Link to="/training">
                        <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                            {b?.viewAllModules || 'View All Modules'} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">

                    {/* Large Hero Card - Azure Solutions Architect */}
                    <Link
                        to="/training/azure-solutions-architect"
                        className="col-span-1 md:col-span-2 xl:col-span-2 row-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-black relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="absolute inset-0">
                            <img
                                src="/training-categories/azure-solutions-architect.jpg"
                                alt=""
                                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col p-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 text-blue-400">
                                <Cloud className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{b?.azureSolutionsArchitect || 'Azure Solutions Architect Expert'}</h3>
                            <p className="text-gray-400 mb-8 max-w-md">
                                {b?.azureSolutionsDesc || 'Master the art of designing scalable, secure, and reliable cloud infrastructure on Microsoft Azure.'}
                            </p>
                            <div className="mt-auto">
                                <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform">
                                    View course <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Standard Cards */}
                    <BentoCard
                        title={b?.devOps || "DevOps Engineering"}
                        description={b?.devOpsDesc || "CI/CD pipelines, Docker, Kubernetes, and IaC with Terraform."}
                        icon={Terminal}
                        to="/training/azure-devops-engineer"
                        className="xl:col-span-1"
                        exploreLabel={exploreLabel}
                        image="/training-categories/azure-devops-engineer.jpg"
                    />
                    <BentoCard
                        title={b?.security || "Security Engineering"}
                        description={b?.securityDesc || "Identity management, threat protection, and security operations."}
                        icon={Shield}
                        to="/training/azure-security-engineer"
                        className="xl:col-span-1"
                        exploreLabel={exploreLabel}
                        image="/training-categories/azure-security-engineer.jpg"
                    />
                    <BentoCard
                        title={b?.dataEng || "Data Engineering"}
                        description={b?.dataEngDesc || "Big data analytics, data warehousing, and ETL pipelines."}
                        icon={Database}
                        to="/training/azure-ai-engineer"
                        className="xl:col-span-1"
                        exploreLabel={exploreLabel}
                        image="/training-categories/azure-ai-engineer.jpg"
                    />

                    {/* Wide Card - Network */}
                    <Link
                        to="/training/azure-network-engineer"
                        className="col-span-1 md:col-span-2 xl:col-span-2 rounded-2xl border border-white/5 relative overflow-hidden hover:border-blue-500/20 transition-colors group"
                    >
                        <div className="absolute inset-0">
                            <img
                                src="/training-categories/azure-network-engineer.jpg"
                                alt=""
                                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                        </div>
                        <div className="relative z-10 p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{b?.globalInfra || 'Global Infrastructure'}</h3>
                                    <p className="text-sm text-gray-400">{b?.globalInfraDesc || 'Multi-region deployment strategies.'}</p>
                                </div>
                                <Globe className="w-6 h-6 text-indigo-400 group-hover:rotate-12 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    <BentoCard
                        title={b?.aiSolutions || "AI Solutions"}
                        description={b?.aiSolutionsDesc || "Implement Generative AI and ML models."}
                        icon={Zap}
                        to="/training/azure-ai-fundamentals"
                        className="xl:col-span-1"
                        exploreLabel={exploreLabel}
                        image="/training-categories/azure-ai-fundamentals.jpg"
                    />

                    <BentoCard
                        title={b?.networkAdvanced || "Network Advanced"}
                        description={b?.networkAdvancedDesc || "Hybrid networking and connectivity."}
                        icon={Server}
                        to="/training/azure-network-engineer"
                        className="xl:col-span-1"
                        exploreLabel={exploreLabel}
                        image="/training-categories/azure-network-engineer.jpg"
                    />

                    <BentoCard
                        title={b?.finOps || "FinOps"}
                        description={b?.finOpsDesc || "Cost optimization and governance."}
                        icon={BarChart}
                        to="/training/azure-administrator"
                        className="xl:col-span-1"
                        exploreLabel={exploreLabel}
                        image="/training-categories/azure-administrator.jpg"
                    />

                    {/* MCT Trainer Card with Founder Photo */}
                    <div className="col-span-1 md:col-span-2 xl:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-blue-900/20 p-6 relative overflow-hidden group hover:border-blue-500/30 transition-all">
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
                                    <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">{b?.mctTrainer || 'Microsoft Certified Trainer'}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Yaïr Knijn</h3>
                                <p className="text-sm text-gray-400 mb-3">{b?.trainerDesc || '15+ years of Microsoft & Azure expertise, delivering hands-on training with real-world project experience.'}</p>
                                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                    <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Azure Expert</span>
                                    <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Cloud Architect</span>
                                    <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">Trainer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
