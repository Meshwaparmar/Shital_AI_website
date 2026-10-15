import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  const content = (
    <div
      className={cn(
        'section-story-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white p-6 transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-navy-900/5 sm:p-7',
        className
      )}
    >
      {/* Icon */}
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-blue-400 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
      <div className="relative mb-7 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 transition-colors duration-300 group-hover:bg-blue-700">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
        <span className="card-icon-orbit" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy-900">{title}</h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Arrow */}
      {href && (
        <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-700">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}
