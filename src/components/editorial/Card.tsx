import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'paper' | 'ink';
}

export function EdCard({ children, className, tone = 'paper' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[14px] border',
        tone === 'paper'
          ? 'bg-[color:var(--ed-card)] border-[color:var(--ed-rule)] shadow-[var(--ed-shadow)]'
          : 'bg-[color:var(--ed-accent-deep)] border-white/5 text-white',
        className,
      )}
    >
      {children}
    </div>
  );
}
