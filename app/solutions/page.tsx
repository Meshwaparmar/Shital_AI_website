import type { Metadata } from 'next';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { CTAButton } from '@/components/buttons/cta-button';
import { SOLUTION_CATEGORIES, WHAT_WE_DO, AUTOMATION_EXAMPLES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Solutions — Business Technology Solutions',
  description:
    'Explore Shital AI LLP solutions organized by business needs: improve operations, automate work, enhance customer experience, understand data, build digital products, and integrate systems.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions — Shital AI LLP',
    description:
      'Business technology solutions organized by what your business needs to achieve.',
    url: '/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions for Every Business Need"
        description="Whether you want to improve operations, automate repetitive work, or build something entirely new — we have a solution that fits."
      />

      {/* Solution categories */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {SOLUTION_CATEGORIES.map((category, i) => (
              <Reveal key={category.title} delay={(i % 2) * 100}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white p-7 transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-navy-900/10 hover:-translate-y-1">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-blue-400 transition-transform group-hover:scale-x-100" aria-hidden="true" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 transition-colors group-hover:bg-blue-100">
                    <category.icon className="h-6 w-6 text-blue-600" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-700">
                    {category.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-navy-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do recap */}
      <section className="bg-blue-50/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Three Ways We Help Your Business"
            description="Every solution we build combines these three core capabilities in different ways."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {WHAT_WE_DO.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className="flex h-full flex-col border-l border-blue-300/70 p-6 transition-colors hover:border-blue-600">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900">
                    <service.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-navy-700">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Automation examples */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Automation Examples"
            title="What Can Be Automated?"
            description="Almost any repetitive business process can be streamlined or fully automated."
          />
          <Reveal className="mt-10" delay={100}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {AUTOMATION_EXAMPLES.map((example) => (
                <div
                  key={example.label}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-secondary/50 px-4 py-3"
                >
                  <example.icon className="h-4 w-4 shrink-0 text-blue-600" strokeWidth={1.8} />
                  <span className="text-sm font-medium text-navy-600">
                    {example.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-sarvam-cta py-20 lg:py-24">
        <div className="absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="display-title text-balance text-4xl text-navy-900 sm:text-5xl">
              Not sure which solution fits your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us about your operations and challenges. We&apos;ll help you
              identify the right approach.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton href="/contact" variant="primary" showArrow>
                Get a Business Solution
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
