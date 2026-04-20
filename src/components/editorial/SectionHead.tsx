import React from 'react';
import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';
import { Display } from './Display';

interface SectionHeadProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  italic?: string;
  body?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SectionHead({
  eyebrow,
  title,
  italic,
  body,
  size = 'md',
  className,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        'grid gap-8 md:gap-12 md:grid-cols-[1fr_2fr] items-baseline mb-14',
        className,
      )}
    >
      <div className="space-y-3">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Display as="h2" size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}>
          {title}
          {italic && (
            <>
              {' '}
              <span className="ed-display-italic text-[color:var(--ed-accent)]">
                {italic}
              </span>
            </>
          )}
        </Display>
      </div>
      {body && (
        <p className="ed-lede max-w-[560px] pt-2 md:pt-3">{body}</p>
      )}
    </div>
  );
}
