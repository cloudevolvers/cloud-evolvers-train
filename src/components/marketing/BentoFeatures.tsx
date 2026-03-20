import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    Building2,
    Cloud,
    Cog,
    Shield,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/use-translations";

interface BentoCardProps {
    description: string;
    exploreLabel: string;
    icon: ComponentType<{ className?: string }>;
    image: string;
    title: string;
    to: string;
}

const BentoCard = ({ title, description, icon: Icon, to, image, exploreLabel }: BentoCardProps) => {
    return (
        <Link
            to={to}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:border-neutral-400"
            )}
        >
            {image && (
                <>
                    <img
                        src={image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-top opacity-20 transition-opacity group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </>
            )}

            <div className="relative z-10 flex h-full flex-col">
                <div className="w-fit rounded-xl bg-black/5 p-3 text-foreground/70 transition-colors group-hover:text-foreground">
                    <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">
                    {exploreLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </div>
        </Link>
    );
};

export function BentoFeatures() {
    const { t } = useTranslations();
    const b = t.bento;
    const exploreLabel = b?.explore || "Explore";

    return (
        <section className="relative z-10 border-t border-border/40 bg-background py-28 sm:py-32 lg:py-36">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">
                            {b?.title || "Choose the training track that matches the work in front of you."}
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {b?.subtitle || "Most teams come to us for one of these routes: Microsoft fundamentals, Azure operations, architecture, or Microsoft 365 administration."}
                        </p>
                    </div>
                    <Link to="/training">
                        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                            {b?.viewAllModules || "View all training"} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                    <Link
                        to="/training/azure-administrator"
                        className="group relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 transition-colors hover:border-neutral-400"
                    >
                        <div className="absolute inset-0">
                            <img
                                src="/training-categories/azure-administrator.jpg"
                                alt=""
                                className="h-full w-full object-cover opacity-45 transition-opacity group-hover:opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/65 to-sky-950/60" />
                        </div>

                        <div className="relative z-10 flex min-h-[360px] flex-col p-8 lg:p-10">
                            <div className="flex items-center justify-between">
                                <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                                    {b?.featuredLabel || "Most requested by teams"}
                                </div>
                                <ArrowUpRight className="h-5 w-5 text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </div>

                            <div className="mt-12 w-fit rounded-xl bg-white/10 p-3 text-white/70">
                                <Cog className="h-6 w-6" />
                            </div>
                            <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-sky-200/80">
                                {b?.featuredKicker || "Operations track"}
                            </p>
                            <h3 className="font-display mt-3 max-w-lg text-3xl font-semibold text-white lg:text-4xl">
                                {b?.featuredTitle || "AZ-104 for admins who need to run Azure well."}
                            </h3>
                            <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
                                {b?.featuredDesc || "Identity, networking, storage, governance, and operational decision-making taught through the kind of environment work teams actually inherit."}
                            </p>

                            <div className="mt-auto pt-12">
                                <span className="inline-flex items-center text-sm font-medium text-white/80 transition-transform group-hover:translate-x-1">
                                    {b?.featuredCta || "See the administrator track"} <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                            </div>
                        </div>
                    </Link>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <BentoCard
                            title={b?.fundamentalsTitle || "AZ-900 Fundamentals"}
                            description={b?.fundamentalsDesc || "For teams that need a clear baseline before they start operating or designing in Azure."}
                            icon={Cloud}
                            to="/training/azure-fundamentals"
                            exploreLabel={exploreLabel}
                            image="/training-categories/azure-fundamentals.jpg"
                        />
                        <BentoCard
                            title={b?.architectTitle || "AZ-305 Architecture"}
                            description={b?.architectDesc || "For architects shaping landing zones, governance, resilience, and cloud design decisions."}
                            icon={BriefcaseBusiness}
                            to="/training/azure-solutions-architect"
                            exploreLabel={exploreLabel}
                            image="/training-categories/azure-solutions-architect.jpg"
                        />
                        <BentoCard
                            title={b?.securityTitle || "AZ-500 Security"}
                            description={b?.securityDesc || "For teams working on identity, posture management, and operational controls across Microsoft cloud."}
                            icon={Shield}
                            to="/training/azure-security-engineer"
                            exploreLabel={exploreLabel}
                            image="/training-categories/azure-security-engineer.jpg"
                        />
                        <BentoCard
                            title={b?.m365Title || "Microsoft 365 Administration"}
                            description={b?.m365Desc || "For teams responsible for tenant operations, identity, compliance, and day-to-day Microsoft 365 administration."}
                            icon={Building2}
                            to="/training/microsoft-365-administrator"
                            exploreLabel={exploreLabel}
                            image="/training-categories/microsoft-365-administrator.jpg"
                        />
                        <Link
                            to="/contact"
                            className="group rounded-[2rem] border border-border bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(244,246,250,0.95))] p-6 transition-colors hover:border-neutral-400"
                        >
                            <div className="flex h-full flex-col">
                                <div className="w-fit rounded-xl bg-emerald-500/10 p-3 text-emerald-700">
                                    <BriefcaseBusiness className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">
                                    {b?.teamTitle || "In-company Azure sessions"}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                    {b?.teamDesc || "Use the homepage as a route into custom team training: aligned on your roles, your architecture, and the pressure points your teams are dealing with now."}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">
                                    {b?.teamCta || "Plan a team workshop"} <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <Link
                    to="/about"
                    className="group mt-6 block rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm transition-colors hover:border-neutral-400 sm:p-8"
                >
                    <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                        <div className="overflow-hidden rounded-[1.5rem] bg-neutral-950">
                            <img
                                src="/1625557501943.jpg"
                                alt="Yaïr Knijn"
                                className="h-full min-h-[210px] w-full object-cover object-[center_18%]"
                            />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                <ShieldCheck className="h-3.5 w-3.5" />
                                <span>{b?.mctTrainer || "Microsoft Certified Trainer"}</span>
                            </div>
                            <h3 className="font-display mt-5 text-3xl font-semibold text-foreground">
                                {b?.founderTitle || "Yaïr leads the training, not a generic content library."}
                            </h3>
                            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                                {b?.trainerDesc || "More than 15 years of Azure and Microsoft delivery experience, translated into workshops that focus on how teams govern, secure, operate, and scale real environments."}
                            </p>
                            <span className="mt-6 inline-flex items-center text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">
                                {b?.founderCta || "Read Yaïr's background"} <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
