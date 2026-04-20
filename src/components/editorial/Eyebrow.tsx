import React from 'react';
import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export function Eyebrow({ children, className, accent = false }: EyebrowProps) {
  return (
    <span
      className={cn(
        'ed-eyebrow',
        accent && 'text-[color:var(--ed-accent)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
