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
                "group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-colors p-6 flex flex-col justify-between",
                className
            )}
        >
            {image && (
                <>
                    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-25 group-hover:opacity-35 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </>
            )}
            <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-foreground/70 group-hover:text-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
            </div>

            <div className="relative z-10 mt-auto">
                <span className="inline-flex items-center text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
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
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                            {b?.title || 'Enterprise-Grade Training'}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {b?.subtitle || 'A comprehensive ecosystem of cloud learning modules designed for scale and complexity.'}
                        </p>
                    </div>
                    <Link to="/training">
                        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                            {b?.viewAllModules || 'View All Modules'} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">

                    {/* Large Hero Card - Azure Solutions Architect */}
                    <Link
                        to="/training/azure-solutions-architect"
                        className="col-span-1 md:col-span-2 xl:col-span-2 row-span-2 rounded-3xl border border-neutral-200 dark:border-white/10 bg-black relative overflow-hidden group hover:border-neutral-400 dark:hover:border-white/20 transition-colors"
                    >
                        <div className="absolute inset-0">
                            <img
                                src="/training-categories/azure-solutions-architect.jpg"
                                alt=""
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col p-8">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white/70">
                                <Cloud className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{b?.azureSolutionsArchitect || 'Azure Solutions Architect Expert'}</h3>
                            <p className="text-gray-400 mb-8 max-w-md">
                                {b?.azureSolutionsDesc || 'Master the art of designing scalable, secure, and reliable cloud infrastructure on Microsoft Azure.'}
                            </p>
                            <div className="mt-auto">
                                <span className="inline-flex items-center text-sm font-medium text-white/70 group-hover:translate-x-1 transition-transform">
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
                        className="col-span-1 md:col-span-2 xl:col-span-2 rounded-2xl border border-neutral-200 dark:border-white/5 relative overflow-hidden hover:border-neutral-400 dark:hover:border-white/15 transition-colors group"
                    >
                        <div className="absolute inset-0">
                            <img
                                src="/training-categories/azure-network-engineer.jpg"
                                alt=""
                                className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-40 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
                        </div>
                        <div className="relative z-10 p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{b?.globalInfra || 'Global Infrastructure'}</h3>
                                    <p className="text-sm text-gray-400">{b?.globalInfraDesc || 'Multi-region deployment strategies.'}</p>
                                </div>
                                <Globe className="w-6 h-6 text-white/50 group-hover:rotate-12 transition-transform" />
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

                    {/* MCT Trainer Card - Your Instructor */}
                    <Link
                        to="/about"
                        className="col-span-1 md:col-span-2 xl:col-span-2 rounded-3xl border border-neutral-200 dark:border-white/10 bg-neutral-950 relative overflow-hidden group hover:border-neutral-400 dark:hover:border-white/20 transition-all"
                    >
                        <div className="flex flex-col sm:flex-row">
                            {/* Photo side */}
                            <div className="relative w-full sm:w-48 md:w-56 shrink-0 h-48 sm:h-auto">
                                <img
                                    src="/1625557501943.jpg"
                                    alt="Yaïr Knijn - Microsoft Certified Trainer"
                                    className="w-full h-full object-cover object-[center_20%]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent to-neutral-950/80 sm:to-neutral-950" />
                            </div>
                            {/* Content side */}
                            <div className="relative z-10 flex-1 flex flex-col justify-center p-6 sm:p-8">
                                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit">
                                    <Shield className="w-3.5 h-3.5 text-white/70" />
                                    <span className="text-[11px] text-white/70 font-semibold uppercase tracking-wider">{b?.mctTrainer || 'Microsoft Certified Trainer'}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Yaïr Knijn</h3>
                                <p className="text-sm text-gray-300 mb-4 max-w-sm leading-relaxed">{b?.trainerDesc || '15+ years of Microsoft & Azure expertise, delivering hands-on training with real-world project experience.'}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">Azure Expert</span>
                                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">Cloud Architect</span>
                                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">MCT Trainer</span>
                                </div>
                                <span className="inline-flex items-center text-sm font-medium text-white/70 group-hover:translate-x-1 transition-transform">
                                    Meet your trainer <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </div>
                        </div>
                    </Link>

                    <BentoCard
                        title={b?.finOps || "FinOps"}
                        description={b?.finOpsDesc || "Cost optimization and governance."}
                        icon={BarChart}
                        to="/training/azure-administrator"
                        className="xl:col-span-1"
                        exploreLabel={exploreLabel}
                        image="/training-categories/azure-administrator.jpg"
                    />

                </div>
            </div>
        </section>
    );
}
