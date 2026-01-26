import React from 'react';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

/**
 * Spinner component for loading states.
 * @param {SpinnerProps} props - Props for the Spinner component.
 * @returns {JSX.Element} The Spinner component.
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'h-4 w-4 border-2',
    medium: 'h-6 w-6 border-2',
    large: 'h-8 w-8 border-4',
  };

  return (
    <div
      className={`rounded-full border-t-blue-500 border-blue-500/20 animate-spin ${sizeClasses[size]} ${className}`}
    />
  );
};
