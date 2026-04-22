import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export function LogoMark({ className, size = 26 }: LogoMarkProps) {
  return (
    <span
      className={cn('relative inline-block shrink-0', className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 rounded-full bg-[color:var(--ed-ink)]"
        style={{ clipPath: 'polygon(0 40%, 100% 40%, 100% 100%, 0 100%)' }}
      />
      <span
        className="absolute inset-0 rounded-full bg-[color:var(--ed-accent)]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 60%)',
          mixBlendMode: 'multiply',
        }}
      />
    </span>
  );
}
