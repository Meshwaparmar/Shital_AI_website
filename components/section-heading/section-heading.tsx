import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animations/reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span className={cn('eyebrow', light && 'eyebrow-light')}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'display-title max-w-4xl text-balance text-4xl leading-[1.02] sm:text-5xl lg:text-[3.45rem]',
          light ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty text-base leading-relaxed sm:text-lg',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl',
            light ? 'text-navy-200' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
