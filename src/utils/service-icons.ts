import {
  Cloud,
  Monitor,
  Shield,
  CurrencyDollar,
  Upload,
  Robot,
  Code,
  Wrench,
  Brain,
  Network,
  ChartLine,
  Coin,
  ArrowsDownUp,
  Cpu,
  Globe,
  Graph
} from "@phosphor-icons/react";

export const getServiceIcon = (iconName: string) => {
  const iconMap = {
    'Cloud': Cloud,
    'LineChart': ChartLine,
    'Monitor': Monitor,
    'Shield': Shield,
    'CurrencyDollar': CurrencyDollar,
    'PiggyBank': Coin,
    'Upload': Upload,
    'FileTransfer': ArrowsDownUp,
    'Robot': Robot,
    'Bot': Robot,
    'Code': Code,
    'Wrench': Wrench,
    'Brain': Brain,
    'Cpu': Cpu,
    'Network': Network,
    'Globe': Globe,
    'Graph': Graph
  };

  return iconMap[iconName as keyof typeof iconMap] || Code;
};