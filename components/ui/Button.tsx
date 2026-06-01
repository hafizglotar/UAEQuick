import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'green' | 'white' | 'outline';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-accent',
  green: 'bg-whatsapp text-white hover:bg-whatsapp-dark',
  white: 'bg-white text-brand hover:bg-brand hover:text-white',
  outline: 'border border-brand text-brand hover:bg-brand hover:text-white',
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-7 py-4 text-base',
};

interface Props {
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className,
  children,
  external,
  ariaLabel,
  disabled,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel} rel="noopener" target="_blank">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} disabled={disabled}>
      {children}
    </button>
  );
}
