import React from 'react';
import * as LucideIcons from 'lucide-react';
import { getTrainingIcon } from '@/utils/training-icons';

interface TrainingIconProps {
  slug?: string;
  iconName?: string;
  className?: string;
  size?: number;
}

export function TrainingIcon({ slug, iconName, className = "h-8 w-8", size }: TrainingIconProps) {
  // Determine which icon to use
  const resolvedIconName = iconName || (slug ? getTrainingIcon(slug) : 'BookOpen');
  
  // Get the icon component from Lucide React
  const IconComponent = LucideIcons[resolvedIconName as keyof typeof LucideIcons] as React.ComponentType<{
    className?: string;
    size?: number;
  }>;
  
  // Fallback to BookOpen if icon not found
  const FallbackIcon = LucideIcons.BookOpen;
  
  // Render the icon
  if (IconComponent) {
    return <IconComponent className={className} size={size} />;
  }
  
  return <FallbackIcon className={className} size={size} />;
}

export default TrainingIcon;
