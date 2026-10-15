import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IndustryCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  className?: string;
}

export function IndustryCard({
  icon: Icon,
  name,
  description,
  className,
}: IndustryCardProps) {
  return (
    <div
      className={cn(
        'industry-story-card group relative flex h-full flex-col overflow-hidden border-l border-border/80 bg-transparent px-5 py-3 transition-colors duration-300 hover:border-blue-500',
        className
      )}
    >
      <div className="relative mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
        <Icon className="h-5 w-5 text-blue-600" strokeWidth={1.8} />
        <span className="industry-card-pulse" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-navy-800">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
