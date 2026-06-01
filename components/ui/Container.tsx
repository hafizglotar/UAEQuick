import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-5', className)}>{children}</div>;
}

export function Section({
  children,
  className,
  muted,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-14 md:py-20', muted && 'bg-slate-50', className)}>
      {children}
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  as = 'h2',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: 'h1' | 'h2';
}) {
  const Heading = as;
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>
      )}
      <Heading className="text-balance text-3xl font-bold text-brand md:text-4xl">{title}</Heading>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>}
    </div>
  );
}
