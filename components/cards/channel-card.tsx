import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChannelCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  className?: string;
}

export function ChannelCard({
  icon: Icon,
  name,
  description,
  className,
}: ChannelCardProps) {
  return (
    <div
      className={cn(
        'section-story-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white p-6 transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-navy-900/5',
        className
      )}
    >
      <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 transition-colors group-hover:bg-blue-700">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
        <span className="card-icon-orbit" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-navy-900">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
