import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'accent';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-[color:var(--ed-ink)] text-white hover:bg-[color:var(--ed-accent-deep)]',
  ghost:
    'bg-[color:var(--ed-card)] text-[color:var(--ed-ink)] border border-[color:var(--ed-rule)] hover:border-[color:var(--ed-ink)]',
  accent:
    'bg-[color:var(--ed-accent)] text-white hover:bg-[color:var(--ed-accent-deep)]',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-[12px]',
  md: 'px-[18px] py-[10px] text-[14px]',
  lg: 'px-6 py-[14px] text-[15px]',
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
  target?: string;
  rel?: string;
}

interface ButtonProps extends BaseProps {
  to?: never;
  href?: never;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

type Props = LinkProps | AnchorProps | ButtonProps;

const base =
  'inline-flex items-center gap-2 rounded-lg font-medium transition-[transform,background,color,border-color] duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

export function EdButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={cls}>
        {children}
      </Link>
    );
  }
  if ('href' in rest && rest.href) {
    const { href, target, rel } = rest as AnchorProps;
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    );
  }
  const { onClick, type, disabled } = rest as ButtonProps;
  return (
    <button type={type ?? 'button'} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
