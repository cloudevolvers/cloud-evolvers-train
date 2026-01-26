import React from 'react';


interface PageBackgroundProps {
  /** Theme variant for icons - determines which icons to show */
  variant?: 'hero' | 'training' | 'blog' | 'services' | 'default';
  /** Optional className for additional styling */
  className?: string;
}

/**
 * PageBackground - Reusable background component with consistent styling
 * Includes gradient layers, logo background, and floating icons
 * Matches the frontpage hero section design
 */
export function PageBackground({ variant = 'default', className = '' }: PageBackgroundProps) {
  return (
    <>
      {/* Professional subtle background */}
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 bg-background" />
      </div>
    </>
  );
}
