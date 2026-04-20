import React from 'react';
import { cn } from '@/lib/utils';

interface StatBlockProps {
  value: string;
  suffix?: string;
  label: string;
  className?: string;
}

export function StatBlock({ value, suffix, label, className }: StatBlockProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1 border-l border-[color:var(--ed-rule)] pl-4',
        className,
      )}
    >
      <span className="ed-num text-[28px] text-[color:var(--ed-ink)]">
        {value}
        {suffix && (
          <span className="text-[16px] text-[color:var(--ed-ink-3)] ml-0.5">
            {suffix}
          </span>
        )}
      </span>
      <span className="ed-eyebrow">{label}</span>
    </div>
  );
}
