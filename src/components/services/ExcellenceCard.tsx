import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { Icon } from "@phosphor-icons/react";

interface ExcellenceItem {
    icon: Icon;
    text: string;
}

interface ExcellenceCardProps {
    icon: Icon;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    items: ExcellenceItem[];
    itemColor: string;
    index: number;
}

export function ExcellenceCard({
    icon: IconComponent,
    iconBg,
    iconColor,
    title,
    description,
    items,
    itemColor,
    index
}: ExcellenceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
        >
            <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${iconBg} shrink-0`}>
                            <IconComponent className={`h-6 w-6 ${iconColor}`} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground leading-tight pt-1">
                            {title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                    </p>

                    {/* Checklist */}
                    <div className="space-y-3 pt-2">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <item.icon className={`h-4 w-4 ${itemColor} shrink-0`} weight="fill" />
                                <span className="text-sm text-muted-foreground">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
