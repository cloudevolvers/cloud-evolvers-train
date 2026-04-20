import React from 'react';
import { cn } from '@/lib/utils';

interface PlaceholderProps {
  label: string;
  className?: string;
  height?: number | string;
}

/** Striped imagery placeholder — labels spots where real photography drops in. */
export function Placeholder({ label, className, height = 260 }: PlaceholderProps) {
  return (
    <div
      className={cn(
        'relative rounded-[6px] border border-[color:var(--ed-rule)] overflow-hidden flex items-center justify-center',
        className,
      )}
      style={{
        height,
        background:
          'repeating-linear-gradient(45deg, var(--ed-bg-2) 0 10px, var(--ed-bg-3) 10px 20px)',
      }}
    >
      <span className="ed-eyebrow bg-[color:var(--ed-bg)] px-2.5 py-1 rounded border border-[color:var(--ed-rule)]">
        {label}
      </span>
    </div>
  );
}
