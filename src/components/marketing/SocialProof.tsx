import { motion } from "framer-motion";

const companies = [
    "Microsoft",
    "GitHub",
    "Terraform",
    "Docker",
    "Kubernetes",
    "HashiCorp",
    "Vercel",
    "Datadog",
    "Dynatrace",
    "Splunk",
    "Palo Alto Networks",
    "Cisco"
];

export function SocialProof() {
    return (
        <section className="py-12 border-y border-white/5 bg-background/50 backdrop-blur-sm overflow-hidden text-neutral-400">
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16">
                    {companies.map((company, i) => (
                        <span key={i} className="text-xl font-semibold uppercase tracking-widest hover:text-white transition-colors cursor-default">
                            {company}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 pr-16" aria-hidden="true">
                    {companies.map((company, i) => (
                        <span key={i} className="text-xl font-semibold uppercase tracking-widest hover:text-white transition-colors cursor-default">
                            {company}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
