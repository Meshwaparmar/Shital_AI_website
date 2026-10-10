import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  href: string;
  channels: string[];
  icon: LucideIcon;
  className?: string;
}

export function ProductCard({
  name,
  tagline,
  description,
  href,
  channels,
  icon: Icon,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white p-7 transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-navy-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        className
      )}
    >
      {/* Badge */}
      <span className="mb-6 inline-flex w-fit items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-700">
        A Product by Shital AI LLP
      </span>

      {/* Icon + Name */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 shadow-lg shadow-navy-900/15 transition-colors group-hover:bg-blue-700">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-navy-900">{name}</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
            {tagline}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Channels */}
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Supported Channels
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {channels.map((channel) => (
            <span
              key={channel}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-navy-600"
            >
              {channel}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
        Explore {name}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
