import { Reveal } from '@/components/animations/reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/70 bg-light-mesh pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid items-end gap-9 lg:grid-cols-[1.12fr_0.68fr] lg:gap-20">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display-title mt-7 max-w-4xl text-balance text-5xl leading-[0.96] text-navy-900 sm:text-6xl lg:text-[5.25rem]">
              {title}
            </h1>
          </div>
          <div className="border-t border-navy-900/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
