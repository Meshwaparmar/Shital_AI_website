import { Reveal } from '@/components/animations/reveal';
import { PageHeroVisual, type PageVisualVariant } from '@/components/visuals/page-hero-visual';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
  visual?: PageVisualVariant;
}

export function PageHero({ eyebrow, title, description, visual = 'solutions' }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/70 bg-light-mesh pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-blue-200/35 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          <Reveal>
            <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display-title mt-7 max-w-4xl text-balance text-5xl leading-[0.96] text-navy-900 sm:text-6xl lg:text-[4.65rem]">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl border-l border-orange-400/70 pl-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
            </div>
          </Reveal>
          <Reveal delay={140} direction="scale"><PageHeroVisual variant={visual} /></Reveal>
        </div>
      </div>
    </section>
  );
}
