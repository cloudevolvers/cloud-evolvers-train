import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "@phosphor-icons/react";

interface Training {
    code: string;
    name: string;
}

interface PopularTrainingsProps {
    trainings: Training[];
    title: string;
    subtitle: string;
}

export function PopularTrainings({ trainings, title, subtitle }: PopularTrainingsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="text-center mb-8">
                <Badge variant="outline" className="px-4 py-1.5 mb-4 border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/5">
                    <Star className="h-3.5 w-3.5 mr-1.5" weight="fill" />
                    {title}
                </Badge>
                <p className="text-muted-foreground text-sm">{subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {trainings.map((training, idx) => (
                    <motion.div
                        key={training.code}
                        className="group relative overflow-hidden"
                        whileHover={{ y: -4 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                    >
                        <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer">
                            <CardContent className="p-5 text-center">
                                <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 text-sm font-bold px-3 py-1">
                                    {training.code}
                                </Badge>
                                <p className="text-xs text-muted-foreground leading-tight font-medium">
                                    {training.name}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
