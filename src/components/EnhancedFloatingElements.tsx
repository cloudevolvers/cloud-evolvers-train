import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Cloud, 
  Certificate, 
  Gear, 
  Shield, 
  Code, 
  Brain, 
  Users, 
  ChartLine,
  Lightning,
  Star,
  Rocket,
  Globe,
  Database,
  Lock,
  Trophy,
  Target,
  Sparkle,
  Lightbulb,
  PuzzlePiece,
  Compass,
  BookOpen,
  Wrench,
  Eye,
  Heart
} from '@phosphor-icons/react';

interface FloatingElementProps {
  icon: React.ComponentType<any>;
  className?: string;
  delay?: number;
  size?: number;
  tiltOptions?: any;
}

function FloatingElement({ icon: Icon, className = "", delay = 0, size = 24, tiltOptions = {} }: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0.7, 1],
        scale: [0, 1.2, 0.9, 1],
        y: [0, -20, 0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
        {...tiltOptions}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-primary/10 via-accent/8 to-secondary/10 rounded-2xl backdrop-blur-md border border-primary/15 shadow-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer"
          whileHover={{ 
            scale: 1.1,
            rotateY: 15,
            rotateX: 15,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 2
            }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay
            }}
          />
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            }}
          >
            <Icon size={size} className="text-primary/60 group-hover:text-primary transition-colors duration-300 relative z-10" />
          </motion.div>
          
          {/* Corner accent */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-accent/40 rounded-full group-hover:bg-accent/60 transition-colors" />
        </motion.div>
      </Tilt>
    </motion.div>
  );
}

export function EnhancedFloatingElements() {
  const elements = [
    // Original elements
    { icon: Cloud, className: "top-20 right-1/4", delay: 0, size: 28 },
    { icon: Certificate, className: "bottom-32 left-1/4", delay: 1.5, size: 24 },
    { icon: Gear, className: "top-1/2 right-1/3", delay: 3, size: 20 },
    { icon: Shield, className: "top-16 left-1/3", delay: 4.5, size: 26 },
    { icon: Code, className: "bottom-20 right-1/2", delay: 6, size: 22 },
    { icon: Brain, className: "top-1/3 left-1/5", delay: 7.5, size: 24 },
    { icon: Users, className: "bottom-1/3 right-1/5", delay: 9, size: 26 },
    { icon: ChartLine, className: "top-2/3 left-2/3", delay: 10.5, size: 20 },
    
    // Additional floating elements for more dynamic background
    { icon: Lightning, className: "top-10 left-1/6", delay: 2, size: 22 },
    { icon: Star, className: "bottom-10 right-1/6", delay: 3.5, size: 18 },
    { icon: Rocket, className: "top-1/4 right-1/6", delay: 5, size: 24 },
    { icon: Globe, className: "bottom-1/2 left-1/6", delay: 6.5, size: 20 },
    { icon: Database, className: "top-3/4 right-2/3", delay: 8, size: 22 },
    { icon: Lock, className: "top-40 left-2/3", delay: 9.5, size: 18 },
    { icon: Trophy, className: "bottom-40 right-3/4", delay: 11, size: 24 },
    { icon: Target, className: "top-1/6 left-1/2", delay: 12.5, size: 20 },
    { icon: Sparkle, className: "bottom-1/6 left-3/4", delay: 14, size: 16 },
    { icon: Lightbulb, className: "top-2/3 right-1/4", delay: 15.5, size: 22 },
    { icon: PuzzlePiece, className: "bottom-2/3 left-1/2", delay: 17, size: 20 },
    { icon: Compass, className: "top-1/5 right-1/2", delay: 18.5, size: 18 },
    { icon: BookOpen, className: "bottom-1/5 right-1/3", delay: 20, size: 24 },
    { icon: Wrench, className: "top-3/5 left-1/4", delay: 21.5, size: 19 },
    { icon: Eye, className: "bottom-3/5 right-1/6", delay: 23, size: 21 },
    { icon: Heart, className: "top-1/8 right-1/8", delay: 24.5, size: 17 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          icon={element.icon}
          className={element.className}
          delay={element.delay}
          size={element.size}
          tiltOptions={{
            tiltMaxAngleX: 10 + Math.random() * 10,
            tiltMaxAngleY: 10 + Math.random() * 10,
            scale: 1.02,
            glareMaxOpacity: 0.1 + Math.random() * 0.1
          }}
        />
      ))}
      
      {/* Additional magical sparkles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute w-1 h-1 bg-accent/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8
          }}
        />
      ))}
      
      {/* Larger glowing orbs */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-2 h-2 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-sm"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.3, 0.8, 0.3],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 6
          }}
        />
      ))}
    </div>
  );
}