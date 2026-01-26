import { motion } from "framer-motion";
import { 
  CloudArrowUp, 
  Shield, 
  Code, 
  Users, 
  Gear,
  GraduationCap,
  Certificate,
  Trophy,
  BookOpen,
  Star,
  ChartLineUp,
  Database,
  Brain,
  Lightning,
  ShieldCheck,
  Rocket,
  GitBranch,
  Terminal
} from "@phosphor-icons/react";

interface BackgroundIconsProps {
  /** Theme variant - determines which icons to show */
  variant?: 'hero' | 'training' | 'blog' | 'services' | 'default';
}

/**
 * BackgroundIcons - Centralized floating background icons component
 * 
 * Features:
 * - Consistent animations across all sections
 * - Theme-aware (works in light and dark mode)
 * - Customizable icon sets per variant
 * - Easy to maintain and update globally
 */
export function BackgroundIcons({ variant = 'default' }: BackgroundIconsProps) {
  // Icon configurations for different sections
  const iconSets = {
    hero: [
      { Icon: CloudArrowUp, size: 52, position: 'top-20 right-[15%]', color: 'text-blue-500/30 dark:text-blue-400/25', duration: 10, delay: 0 },
      { Icon: Shield, size: 44, position: 'bottom-28 left-[12%]', color: 'text-purple-500/30 dark:text-purple-400/25', duration: 14, delay: 2 },
      { Icon: GraduationCap, size: 40, position: 'top-1/2 left-[5%]', color: 'text-emerald-500/25 dark:text-emerald-400/22', duration: 16, delay: 4 },
      { Icon: Code, size: 36, position: 'top-32 right-[5%]', color: 'text-cyan-500/25 dark:text-cyan-400/22', duration: 19, delay: 6 },
      { Icon: Gear, size: 30, position: 'bottom-36 right-[25%]', color: 'text-yellow-500/25 dark:text-yellow-400/22', duration: 22, delay: 8 },
      { Icon: Users, size: 26, position: 'top-2/3 right-[35%]', color: 'text-indigo-500/25 dark:text-indigo-400/22', duration: 25, delay: 10 },
      { Icon: Trophy, size: 34, position: 'bottom-16 left-[30%]', color: 'text-orange-500/25 dark:text-orange-400/22', duration: 18, delay: 3 },
      { Icon: Database, size: 38, position: 'top-48 left-[20%]', color: 'text-pink-500/25 dark:text-pink-400/22', duration: 20, delay: 5 },
      { Icon: Lightning, size: 32, position: 'bottom-1/3 right-[18%]', color: 'text-amber-500/25 dark:text-amber-400/22', duration: 17, delay: 7 },
      { Icon: Brain, size: 36, position: 'top-1/3 right-[8%]', color: 'text-violet-500/25 dark:text-violet-400/22', duration: 21, delay: 9 },
    ],
    training: [
      { Icon: GraduationCap, size: 48, position: 'top-20 right-[20%]', color: 'text-blue-500/30 dark:text-blue-400/25', duration: 8, delay: 0 },
      { Icon: Certificate, size: 40, position: 'bottom-32 left-[15%]', color: 'text-purple-500/30 dark:text-purple-400/25', duration: 12, delay: 2 },
      { Icon: BookOpen, size: 36, position: 'top-1/2 left-[8%]', color: 'text-emerald-500/25 dark:text-emerald-400/22', duration: 15, delay: 4 },
      { Icon: Trophy, size: 32, position: 'top-40 right-[8%]', color: 'text-cyan-500/25 dark:text-cyan-400/22', duration: 18, delay: 6 },
      { Icon: Star, size: 28, position: 'bottom-40 left-[25%]', color: 'text-yellow-500/25 dark:text-yellow-400/22', duration: 20, delay: 8 },
      { Icon: ChartLineUp, size: 34, position: 'top-1/3 right-[12%]', color: 'text-green-500/25 dark:text-green-400/22', duration: 16, delay: 3 },
      { Icon: Lightning, size: 30, position: 'bottom-1/4 right-[30%]', color: 'text-amber-500/25 dark:text-amber-400/22', duration: 19, delay: 7 },
      { Icon: Rocket, size: 38, position: 'top-52 left-[18%]', color: 'text-orange-500/25 dark:text-orange-400/22', duration: 14, delay: 5 },
    ],
    blog: [
      { Icon: Brain, size: 46, position: 'top-24 right-[18%]', color: 'text-blue-500/30 dark:text-blue-400/25', duration: 9, delay: 0 },
      { Icon: Shield, size: 38, position: 'bottom-28 left-[14%]', color: 'text-purple-500/30 dark:text-purple-400/25', duration: 13, delay: 2 },
      { Icon: Code, size: 34, position: 'top-1/2 left-[7%]', color: 'text-emerald-500/25 dark:text-emerald-400/22', duration: 16, delay: 4 },
      { Icon: CloudArrowUp, size: 40, position: 'top-36 right-[9%]', color: 'text-cyan-500/25 dark:text-cyan-400/22', duration: 19, delay: 6 },
      { Icon: Gear, size: 30, position: 'bottom-36 left-[28%]', color: 'text-yellow-500/25 dark:text-yellow-400/22', duration: 21, delay: 8 },
      { Icon: BookOpen, size: 36, position: 'top-2/3 right-[25%]', color: 'text-indigo-500/25 dark:text-indigo-400/22', duration: 17, delay: 5 },
      { Icon: Terminal, size: 32, position: 'bottom-20 right-[15%]', color: 'text-green-500/25 dark:text-green-400/22', duration: 15, delay: 3 },
      { Icon: Database, size: 34, position: 'top-44 left-[22%]', color: 'text-pink-500/25 dark:text-pink-400/22', duration: 20, delay: 7 },
    ],
    services: [
      { Icon: CloudArrowUp, size: 48, position: 'top-20 right-[20%]', color: 'text-blue-500/30 dark:text-blue-400/25', duration: 8, delay: 0 },
      { Icon: ShieldCheck, size: 40, position: 'bottom-32 left-[15%]', color: 'text-purple-500/30 dark:text-purple-400/25', duration: 12, delay: 2 },
      { Icon: Gear, size: 36, position: 'top-1/2 left-[8%]', color: 'text-emerald-500/25 dark:text-emerald-400/22', duration: 15, delay: 4 },
      { Icon: Code, size: 32, position: 'top-40 right-[8%]', color: 'text-cyan-500/25 dark:text-cyan-400/22', duration: 18, delay: 6 },
      { Icon: Users, size: 28, position: 'bottom-40 left-[25%]', color: 'text-yellow-500/25 dark:text-yellow-400/22', duration: 20, delay: 8 },
      { Icon: Database, size: 38, position: 'top-1/3 right-[14%]', color: 'text-violet-500/25 dark:text-violet-400/22', duration: 16, delay: 3 },
      { Icon: ChartLineUp, size: 34, position: 'bottom-1/4 right-[28%]', color: 'text-orange-500/25 dark:text-orange-400/22', duration: 19, delay: 7 },
      { Icon: GitBranch, size: 30, position: 'top-56 left-[20%]', color: 'text-teal-500/25 dark:text-teal-400/22', duration: 17, delay: 5 },
    ],
    default: [
      { Icon: CloudArrowUp, size: 48, position: 'top-20 right-[20%]', color: 'text-blue-500/30 dark:text-blue-400/25', duration: 8, delay: 0 },
      { Icon: Shield, size: 40, position: 'bottom-32 left-[15%]', color: 'text-purple-500/30 dark:text-purple-400/25', duration: 12, delay: 2 },
      { Icon: Code, size: 36, position: 'top-1/2 left-[8%]', color: 'text-emerald-500/25 dark:text-emerald-400/22', duration: 15, delay: 4 },
      { Icon: Gear, size: 32, position: 'top-40 right-[8%]', color: 'text-cyan-500/25 dark:text-cyan-400/22', duration: 18, delay: 6 },
      { Icon: Users, size: 28, position: 'bottom-40 left-[25%]', color: 'text-yellow-500/25 dark:text-yellow-400/22', duration: 20, delay: 8 },
    ],
  };

  const icons = iconSets[variant] || iconSets.default;

  return (
    <>
      {icons.map((config, index) => {
        const { Icon, size, position, color, duration, delay } = config;
        
        return (
          <motion.div
            key={`${variant}-icon-${index}`}
            className={`absolute ${position} ${color} pointer-events-none`}
            animate={{ 
              y: index % 2 === 0 ? [-10, 10, -10] : [15, -15, 15],
              x: index % 3 === 0 ? [-5, 5, -5] : index % 3 === 1 ? [8, -8, 8] : [0, 0, 0],
              rotate: index % 2 === 0 ? [0, 5, 0] : [0, -8, 0],
              scale: [1, 1.1 + (index % 3) * 0.05, 1]
            }}
            transition={{ 
              duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay 
            }}
          >
            <Icon size={size} weight="duotone" />
          </motion.div>
        );
      })}
    </>
  );
}
