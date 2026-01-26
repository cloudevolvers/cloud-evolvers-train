import { motion } from 'framer-motion';
import {
  GraduationCap,
  Certificate,
  BookOpen,
  Brain,
  PuzzlePiece,
  Cloud,
  Gear,
  Lightning,
  Code,
  Globe,
  Trophy,
  Target,
  Rocket,
  Star,
  TrendUp,
  Lightbulb
} from '@phosphor-icons/react';

export function TrainingFloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Education Theme Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, delay: 0.8 }}
        className="absolute top-24 left-32 4xl:top-32 4xl:left-44 text-accent/25"
      >
        <GraduationCap size={32} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -40 }}
        animate={{ opacity: 0.35, scale: 1, y: 0 }}
        transition={{ duration: 2.2, delay: 1.3 }}
        className="absolute top-40 right-40 4xl:top-48 4xl:right-56 text-secondary/30"
      >
        <Certificate size={28} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{ opacity: 0.25, scale: 1, x: 0 }}
        transition={{ duration: 2.8, delay: 1.8 }}
        className="absolute top-16 left-1/2 4xl:top-20 text-accent/30"
      >
        <BookOpen size={26} />
      </motion.div>
      
      {/* Additional Education Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 0.22, scale: 1, rotate: 0 }}
        transition={{ duration: 3.1, delay: 3.2 }}
        className="absolute top-8 left-80 4xl:top-12 4xl:left-[26rem] text-secondary/20"
      >
        <Brain size={22} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -25 }}
        animate={{ opacity: 0.28, scale: 1, y: 0 }}
        transition={{ duration: 2.9, delay: 3.5 }}
        className="absolute top-56 right-16 4xl:top-72 4xl:right-24 text-accent/25"
      >
        <PuzzlePiece size={24} />
      </motion.div>

      {/* Technology Theme Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 90 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
        transition={{ duration: 2.6, delay: 1.1 }}
        className="absolute bottom-40 left-28 4xl:bottom-48 4xl:left-40 text-secondary/35"
      >
        <Cloud size={30} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 40 }}
        animate={{ opacity: 0.25, scale: 1, x: 0 }}
        transition={{ duration: 2.4, delay: 1.6 }}
        className="absolute bottom-24 right-24 4xl:bottom-32 4xl:right-36 text-accent/25"
      >
        <Gear size={24} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 30 }}
        animate={{ opacity: 0.3, scale: 1, y: 0 }}
        transition={{ duration: 2.1, delay: 2.1 }}
        className="absolute top-3/4 left-1/4 4xl:left-1/3 text-secondary/30"
      >
        <Lightning size={22} />
      </motion.div>
      
      {/* Additional Technology Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 30 }}
        animate={{ opacity: 0.26, scale: 1, rotate: 0 }}
        transition={{ duration: 3.3, delay: 3.8 }}
        className="text-green-400/25 absolute bottom-8 left-72"
      >
        <Code size={20} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -35 }}
        animate={{ opacity: 0.24, scale: 1, x: 0 }}
        transition={{ duration: 2.7, delay: 4.1 }}
        className="text-green-400/25 absolute bottom-56 right-64"
      >
        <Globe size={18} />
      </motion.div>

      {/* Success Theme Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 3, delay: 2.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 4 }}
        className="text-green-400/25 absolute top-1/3 right-1/3"
      >
        <Trophy size={36} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2.7, delay: 2.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
        className="text-green-400/25 absolute bottom-1/3 left-1/3"
      >
        <Target size={28} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 3.2, delay: 3.1 }}
        className="text-green-400/20 absolute top-1/2 left-16"
      >
        <Rocket size={32} />
      </motion.div>
      
      {/* Additional Success Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -60 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, delay: 4.3 }}
        className="text-green-400/30 absolute top-2/3 right-16"
      >
        <Star size={26} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 35 }}
        animate={{ opacity: 0.27, scale: 1, y: 0 }}
        transition={{ duration: 3.4, delay: 4.6 }}
        className="text-green-400/28 absolute top-1/4 right-80"
      >
        <TrendUp size={22} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 45 }}
        animate={{ opacity: 0.23, scale: 1, x: 0 }}
        transition={{ duration: 2.8, delay: 4.9 }}
        className="text-green-400/25 absolute bottom-1/4 left-96"
      >
        <Lightbulb size={20} />
      </motion.div>
    </div>
  );
}
