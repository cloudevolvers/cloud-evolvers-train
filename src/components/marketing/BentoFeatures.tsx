import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/use-translations";

interface BentoCardProps {
    description: string;
    exploreLabel: string;
    image: string;
    title: string;
    to: string;
}

const BentoCard = ({ title, description, to, image, exploreLabel }: BentoCardProps) => {
    return (
        <Link
            to={to}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-md"
            )}
        >
            {/* Photo header */}
            {image && (
                <div className="h-32 overflow-hidden">
                    <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="relative z-10 flex flex-col p-5">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-700 transition-transform group-hover:translate-x-1">
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
        <section className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-5xl">
                            {b?.title || "Choose the training track that matches the work in front of you."}
                        </h2>
                        <p className="mt-4 text-lg text-slate-500">
                            {b?.subtitle || "Most teams come to us for one of these routes: Microsoft fundamentals, Azure operations, architecture, or Microsoft 365 administration."}
                        </p>
                    </div>
                    <Link to="/training">
                        <Button variant="ghost" className="text-slate-500 hover:text-slate-900">
                            {b?.viewAllModules || "View all training"} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                    <Link
                        to="/training/azure-administrator"
                        className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50/50 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src="/training-categories/azure-administrator.jpg"
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="relative z-10 flex min-h-[280px] flex-col p-8 lg:p-10">
                            <div className="flex items-center justify-between">
                                <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                                    {b?.featuredLabel || "Most requested by teams"}
                                </div>
                                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </div>

                            <p className="mt-12 text-sm font-medium uppercase tracking-wider text-slate-400">
                                {b?.featuredKicker || "Operations track"}
                            </p>
                            <h3 className="font-display mt-3 max-w-lg text-3xl font-semibold text-slate-900 lg:text-4xl">
                                {b?.featuredTitle || "AZ-104 for admins who need to run Azure well."}
                            </h3>
                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                                {b?.featuredDesc || "Identity, networking, storage, governance, and operational decision-making taught through the kind of environment work teams actually inherit."}
                            </p>

                            <div className="mt-auto pt-12">
                                <span className="inline-flex items-center text-sm font-medium text-slate-700 transition-transform group-hover:translate-x-1">
                                    {b?.featuredCta || "See the administrator track"} <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                            </div>
                        </div>
                    </Link>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <BentoCard
                            title={b?.fundamentalsTitle || "AZ-900 Fundamentals"}
                            description={b?.fundamentalsDesc || "For teams that need a clear baseline before they start operating or designing in Azure."}

                            to="/training/azure-fundamentals"
                            exploreLabel={exploreLabel}
                            image="/images/unsplash/team-collaboration.jpg"
                        />
                        <BentoCard
                            title={b?.architectTitle || "AZ-305 Architecture"}
                            description={b?.architectDesc || "For architects shaping landing zones, governance, resilience, and cloud design decisions."}

                            to="/training/azure-solutions-architect"
                            exploreLabel={exploreLabel}
                            image="/images/unsplash/coding-laptop.jpg"
                        />
                        <BentoCard
                            title={b?.securityTitle || "AZ-500 Security"}
                            description={b?.securityDesc || "For teams working on identity, posture management, and operational controls across Microsoft cloud."}

                            to="/training/azure-security-engineer"
                            exploreLabel={exploreLabel}
                            image="/training-categories/azure-security-engineer.jpg"
                        />
                        <BentoCard
                            title={b?.m365Title || "Microsoft 365 Administration"}
                            description={b?.m365Desc || "For teams responsible for tenant operations, identity, compliance, and day-to-day Microsoft 365 administration."}

                            to="/training/microsoft-365-administrator"
                            exploreLabel={exploreLabel}
                            image="/images/unsplash/network-cables.jpg"
                        />
                        <Link
                            to="/contact"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-sm"
                        >
                            <div className="flex h-full flex-col">
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {b?.teamTitle || "In-company Azure sessions"}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-500">
                                    {b?.teamDesc || "Use the homepage as a route into custom team training: aligned on your roles, your architecture, and the pressure points your teams are dealing with now."}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900 transition-transform group-hover:translate-x-1">
                                    {b?.teamCta || "Plan a team workshop"} <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <Link
                    to="/about"
                    className="group mt-6 block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md sm:p-8"
                >
                    <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                        <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                            <img
                                src="/1625557501943.jpg"
                                alt="Yaïr Knijn"
                                className="h-full min-h-[210px] w-full object-cover object-[center_18%]"
                            />
                        </div>
                        <div>
                            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                {b?.mctTrainer || "Microsoft Certified Trainer"}
                            </div>
                            <h3 className="font-display mt-5 text-3xl font-semibold text-slate-900">
                                {b?.founderTitle || "Yaïr leads the training, not a generic content library."}
                            </h3>
                            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500">
                                {b?.trainerDesc || "More than 15 years of Azure and Microsoft delivery experience, translated into workshops that focus on how teams govern, secure, operate, and scale real environments."}
                            </p>
                            <span className="mt-6 inline-flex items-center text-sm font-medium text-slate-900 transition-transform group-hover:translate-x-1">
                                {b?.founderCta || "Read Yaïr's background"} <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
