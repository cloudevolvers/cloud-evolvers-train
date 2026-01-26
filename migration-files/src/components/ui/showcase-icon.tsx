import { 
  LayoutDashboard, 
  Zap, 
  FileX, 
  CloudCog, 
  Code, 
  Settings,
  LucideIcon
} from 'lucide-react';

// Icon mapping for showcase items
const iconMap: Record<string, LucideIcon> = {
  'dashboard': LayoutDashboard,
  'api': Zap,
  'file-transfer': FileX,
  'cloud-storage': CloudCog,
  'code': Code,
  'settings': Settings,
};

interface ShowcaseIconProps {
  icon?: string;
  className?: string;
  size?: number;
}

export function ShowcaseIcon({ icon, className = '', size = 24 }: ShowcaseIconProps) {
  const IconComponent = icon ? iconMap[icon] : Settings;
  
  if (!IconComponent) {
    return <Settings className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}

export default ShowcaseIcon;
