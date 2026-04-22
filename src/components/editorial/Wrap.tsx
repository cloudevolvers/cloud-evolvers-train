import React from 'react';
import { cn } from '@/lib/utils';

interface WrapProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Wrap({ children, className, narrow = false }: WrapProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 sm:px-10',
        narrow ? 'max-w-[980px]' : 'max-w-[1280px]',
        className,
      )}
    >
      {children}
    </div>
  );
}
