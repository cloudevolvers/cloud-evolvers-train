import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { Icon } from "@phosphor-icons/react";

interface StatCardProps {
    icon: Icon;
    value: string;
    label: string;
    colorClass: string;
    bgClass: string;
    borderClass: string;
    index: number;
}

export function StatCard({
    icon: IconComponent,
    value,
    label,
    colorClass,
    bgClass,
    borderClass,
    index
}: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.03 }}
        >
            <Card className={`p-6 text-center bg-card/80 backdrop-blur-sm border ${borderClass} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-0 space-y-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${bgClass}`}>
                        <IconComponent className={`h-7 w-7 ${colorClass}`} weight="duotone" />
                    </div>
                    <div className="space-y-1">
                        <div className={`text-3xl font-bold ${colorClass}`}>{value}</div>
                        <div className="text-sm text-muted-foreground font-medium">{label}</div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
