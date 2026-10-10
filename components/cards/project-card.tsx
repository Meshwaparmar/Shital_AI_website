import { cn } from '@/lib/utils';

interface ProjectCardProps {
  name: string;
  industry: string;
  problem: string;
  solution: string;
  features: string[];
  technology: string[];
  isPlaceholder?: boolean;
  className?: string;
}

export function ProjectCard({
  name,
  industry,
  problem,
  solution,
  features,
  technology,
  isPlaceholder = false,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-navy-900/5',
        className
      )}
    >
      {/* Header band */}
      <div className="relative flex items-center justify-between bg-navy-900 px-5 py-4">
        <div>
          <h3 className="text-base font-bold text-white">{name}</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
            {industry}
          </p>
        </div>
        {isPlaceholder && (
          <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            Placeholder
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Business Problem
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-navy-600">{problem}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Solution
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-navy-600">{solution}</p>
        </div>

        {features.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Key Features
            </h4>
            <ul className="mt-1.5 flex flex-wrap gap-1.5">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-navy-600"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {technology.length > 0 && (
          <div className="mt-auto">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Technology
            </h4>
            <ul className="mt-1.5 flex flex-wrap gap-1.5">
              {technology.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border px-2 py-1 text-xs font-medium text-navy-600"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
