import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, CheckCircle } from "@phosphor-icons/react";

interface ServiceFeatureCardProps {
    features: string[];
    title: string;
}

export function ServiceFeatureCard({ features, title }: ServiceFeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                        <Star size={18} className="text-amber-500" weight="fill" />
                        <span className="text-foreground">{title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                            >
                                <CheckCircle
                                    size={18}
                                    className="text-emerald-500 mt-0.5 shrink-0"
                                    weight="fill"
                                />
                                <span className="text-muted-foreground text-sm leading-relaxed">
                                    {feature}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
    );
}
