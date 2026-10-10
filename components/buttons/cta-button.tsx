import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light' | 'light-outline';
  className?: string;
  showArrow?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  showArrow = false,
}: CTAButtonProps) {
  const classes = cn(
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variant === 'primary' && 'bg-[linear-gradient(to_bottom,#3a3f5c_0%,#1e2033_100%)] text-white hover:brightness-110 hover:shadow-xl hover:shadow-black/10 focus-visible:ring-blue-800 hover:-translate-y-0.5',
    variant === 'secondary' && 'border border-border bg-secondary text-navy-900 shadow-[inset_0_2px_0_rgba(200,200,200,0.1),inset_0_-1px_0_rgba(0,0,0,0.05)] hover:bg-white hover:shadow-lg focus-visible:ring-blue-800 hover:-translate-y-0.5',
    variant === 'light' && 'bg-blue-400 text-navy-950 hover:bg-blue-300 hover:shadow-xl hover:shadow-blue-400/15 focus-visible:ring-blue-300 hover:-translate-y-0.5',
    variant === 'light-outline' && 'border border-white/25 bg-white/[0.03] text-white hover:border-blue-300/60 hover:bg-blue-400/10 focus-visible:ring-blue-300 hover:-translate-y-0.5',
    className
  );
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (/^https?:\/\//.test(href)) {
    return <a href={href} className={classes} target="_blank" rel="noreferrer">{content}</a>;
  }

  return <Link href={href} className={classes}>{content}</Link>;
}
