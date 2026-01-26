import React from 'react';
import {
  Cloud,
  Gear,
  Buildings,
  Shield,
  Code,
  Lightning,
  Desktop,
  Brain,
  MicrosoftWordLogo,
  WindowsLogo,
  Database,
  Network,
  Lock,
  ChatCircle,
  DeviceMobile,
  Globe,
  Cpu,
  Wrench,
} from '@phosphor-icons/react';

// Enhanced category icons mapping with proper colors
export const categoryIcons: Record<string, { icon: React.ComponentType<{ size?: number; className?: string }>, color: string, bgColor: string }> = {
  'Azure': { icon: Cloud, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
  'Cloud Fundamentals': { icon: Cloud, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
  'Azure Administration': { icon: Gear, color: 'text-sky-600', bgColor: 'bg-sky-100 dark:bg-sky-900/30' },
  'Azure Architecture': { icon: Buildings, color: 'text-indigo-600', bgColor: 'bg-indigo-100 dark:bg-indigo-900/30' },
  'Security & Compliance': { icon: Shield, color: 'text-red-600', bgColor: 'bg-red-100 dark:bg-red-900/30' },
  'Developer Tools': { icon: Code, color: 'text-orange-600', bgColor: 'bg-orange-100 dark:bg-orange-900/30' },
  'Microsoft 365': { icon: MicrosoftWordLogo, color: 'text-indigo-600', bgColor: 'bg-indigo-100 dark:bg-indigo-900/30' },
  'Power Platform': { icon: Lightning, color: 'text-yellow-600', bgColor: 'bg-yellow-100 dark:bg-yellow-900/30' },
  'Infrastructure': { icon: Desktop, color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-gray-900/30' },
  'AI & Machine Learning': { icon: Brain, color: 'text-pink-600', bgColor: 'bg-pink-100 dark:bg-pink-900/30' },
  'IoT': { icon: Cpu, color: 'text-cyan-600', bgColor: 'bg-cyan-100 dark:bg-cyan-900/30' },
  'DevOps': { icon: Wrench, color: 'text-purple-600', bgColor: 'bg-purple-100 dark:bg-purple-900/30' },
  'Networking': { icon: Network, color: 'text-cyan-600', bgColor: 'bg-cyan-100 dark:bg-cyan-900/30' },
  'Virtual Desktop': { icon: Desktop, color: 'text-violet-600', bgColor: 'bg-violet-100 dark:bg-violet-900/30' },
  'Database': { icon: Database, color: 'text-amber-600', bgColor: 'bg-amber-100 dark:bg-amber-900/30' },
  'Identity & Access': { icon: Lock, color: 'text-rose-600', bgColor: 'bg-rose-100 dark:bg-rose-900/30' },
  'Teams': { icon: ChatCircle, color: 'text-sky-600', bgColor: 'bg-sky-100 dark:bg-sky-900/30' },
  'Windows Server': { icon: WindowsLogo, color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-slate-900/30' },
  'Mobile': { icon: DeviceMobile, color: 'text-lime-600', bgColor: 'bg-lime-100 dark:bg-lime-900/30' },
  'Web': { icon: Globe, color: 'text-fuchsia-600', bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-900/30' },
};

// Enhanced level color mapping with better contrast and readability
export const levelColors: Record<string, string> = {
  'Beginner': 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700 font-medium',
  'Intermediate': 'bg-blue-100 text-blue-900 dark:bg-blue-900/50 dark:text-blue-200 border-blue-300 dark:border-blue-700 font-medium',
  'Advanced': 'bg-orange-100 text-orange-900 dark:bg-orange-900/50 dark:text-orange-200 border-orange-300 dark:border-orange-700 font-medium',
  'Expert': 'bg-red-100 text-red-900 dark:bg-red-900/50 dark:text-red-200 border-red-300 dark:border-red-700 font-medium',
};
