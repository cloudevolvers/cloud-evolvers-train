import React from 'react';
import { cn } from '@/lib/utils';

interface LedeProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Lede({ children, className, narrow = false }: LedeProps) {
  return (
    <p
      className={cn(
        'ed-lede',
        narrow ? 'max-w-[520px]' : 'max-w-[680px]',
        className,
      )}
    >
      {children}
    </p>
  );
}
