import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, GraduationCap, Sparkle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import type { Icon } from "@phosphor-icons/react";

interface ServiceHeroProps {
    icon: Icon;
    title: string;
    description: string;
    image: string;
    imageCredit?: string;
    language: 'en' | 'nl';
}

export function ServiceHero({ icon: IconComponent, title, description, image, imageCredit, language }: ServiceHeroProps) {
    const navigate = useNavigate();

    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {imageCredit && (
                    <span className="absolute bottom-2 right-3 text-[10px] text-white/60">
                        {imageCredit}
                    </span>
                )}
            </div>

            {/* Icon and Badge Row */}
            <div className="flex items-center gap-4">
                <div className="p-4 bg-neutral-500/10 dark:bg-white/10 rounded-2xl border border-border">
                    <IconComponent size={36} className="text-foreground/70" weight="regular" />
                </div>
                <Badge
                    variant="outline"
                    className="px-3 py-1.5 bg-neutral-500/5 dark:bg-white/5 border-border text-muted-foreground font-medium"
                >
                    <Sparkle size={12} className="mr-1.5" weight="fill" />
                    {language === 'nl' ? 'Premium Service' : 'Premium Service'}
                </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold leading-tight">
                {title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                    size="lg"
                    className="bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black shadow-lg"
                    onClick={() => navigate('/contact')}
                >
                    <Phone size={18} className="mr-2" />
                    {language === 'nl' ? 'Contact opnemen' : 'Contact Us'}
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-muted/50"
                    onClick={() => navigate('/training')}
                >
                    <GraduationCap size={18} className="mr-2" />
                    {language === 'nl' ? 'Gerelateerde training' : 'Related Training'}
                </Button>
            </div>
        </motion.div>
    );
}
