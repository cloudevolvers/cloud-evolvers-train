import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "@/hooks/use-translations";
import { BackgroundIcons } from "@/components/BackgroundIcons";

const deliveryPoints = [
    {
        title: "Built around your team",
        description: "Sessions are scoped to your stack, your roles, and your current Azure maturity — not a generic curriculum everyone gets."
    },
    {
        title: "Labs with operational context",
        description: "Exercises cover identity, networking, security, and platform decisions using realistic environments — not sanitized toy demos."
    },
    {
        title: "Exam prep without the fluff",
        description: "Teams prepare for Microsoft certification while learning how to actually design and run the environments they are responsible for."
    }
];

const trustStats = [
    { value: "Dutch + English", label: "Delivery languages" },
    { value: "Remote + in-company", label: "Session formats" },
    { value: "Azure + M365", label: "Core focus" }
];

export function HomeProofSection() {
    const { t } = useTranslations();
    const marketing = t.hero?.marketing;

    return (
        <section className="relative overflow-hidden border-t border-slate-100 bg-white py-24 sm:py-28">
            <BackgroundIcons variant="services" />
            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm sm:p-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                            {marketing?.proofLabel || "Why teams book training with us"}
                        </p>

                        <h2 className="font-display mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            {marketing?.proofHeading || "What your team gets from a session."}
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
                            {marketing?.proofDescription || "Your trainer still does Azure consulting work. That means sessions are shaped by what actually breaks in production, what auditors ask about, and what teams struggle with after go-live — not just what is on the exam."}
                        </p>

                        <div className="mt-8 grid gap-4">
                            {deliveryPoints.map(({ title, description }) => (
                                <div
                                    key={title}
                                    className="rounded-xl border border-slate-200 bg-white p-5"
                                >
                                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="overflow-hidden rounded-2xl border border-slate-900 bg-slate-900 text-white shadow-lg">
                            <div className="border-b border-white/10 px-8 py-6 sm:px-9">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    {marketing?.expectLabel || "What you can expect"}
                                </p>
                                <h3 className="font-display mt-3 text-2xl font-semibold leading-tight sm:text-[2rem]">
                                    {marketing?.expectHeading || "Microsoft training led by a practitioner, not a content warehouse."}
                                </h3>
                                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                                    {marketing?.expectDescription || "All courses are delivered by Yair Knijn — MCT, Azure architect, and active consultant. Sessions combine certification prep with the platform, governance, and operations decisions your team actually faces."}
                                </p>
                            </div>

                            <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                                {trustStats.map(({ value, label }) => (
                                    <div key={label} className="bg-slate-900 px-6 py-5">
                                        <div className="text-base font-semibold text-white">{value}</div>
                                        <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-4 px-8 py-7 sm:px-9">
                                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                        {marketing?.teamFitLabel || "Team fit"}
                                    </p>
                                    <h4 className="mt-3 text-lg font-semibold text-white">
                                        {marketing?.teamFitHeading || "For teams that run Azure day-to-day and need to get sharper."}
                                    </h4>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">
                                        {marketing?.teamFitDescription || "Most teams that book are admin groups preparing for AZ-104, architects working toward AZ-305, or security leads tackling AZ-500. If your team manages Azure or Microsoft 365 in production, this is built for you."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md sm:p-7"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                        {marketing?.nextStepLabel || "Next step"}
                                    </p>
                                    <h3 className="font-display mt-3 text-2xl font-semibold text-slate-900">
                                        {marketing?.nextStepHeading || "Plan the right route for your team."}
                                    </h3>
                                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                                        {marketing?.nextStepDescription || "Tell us the roles and skill gaps — we will match you to the right track and format."}
                                    </p>
                                </div>
                                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-900 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
