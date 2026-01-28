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
    language: 'en' | 'nl';
}

export function ServiceHero({ icon: IconComponent, title, description, language }: ServiceHeroProps) {
    const navigate = useNavigate();

    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {/* Icon and Badge Row */}
            <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-2xl border border-blue-500/20">
                    <IconComponent size={36} className="text-blue-600 dark:text-blue-400" weight="duotone" />
                </div>
                <Badge
                    variant="outline"
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400 font-medium"
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
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
