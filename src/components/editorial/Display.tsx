import React from 'react';
import { cn } from '@/lib/utils';

type DisplaySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizes: Record<DisplaySize, string> = {
  xs: 'text-[28px] sm:text-[32px]',
  sm: 'text-[36px] sm:text-[44px]',
  md: 'text-[44px] sm:text-[56px]',
  lg: 'text-[56px] sm:text-[72px]',
  xl: 'text-[60px] sm:text-[80px] lg:text-[96px]',
};

interface DisplayProps {
  as?: 'h1' | 'h2' | 'h3' | 'div';
  size?: DisplaySize;
  italic?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Display({
  as: Tag = 'h2',
  size = 'md',
  italic = false,
  className,
  children,
}: DisplayProps) {
  return (
    <Tag
      className={cn(
        italic ? 'ed-display-italic' : 'ed-display',
        sizes[size],
        'text-[color:var(--ed-ink)]',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
