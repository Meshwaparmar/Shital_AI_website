import type { Metadata } from 'next';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { CTAButton } from '@/components/buttons/cta-button';
import { IndustryCard } from '@/components/cards/industry-card';
import { EditorialImage } from '@/components/visuals/editorial-image';
import { INDUSTRIES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Industries — Solutions for Modern Businesses',
  description:
    'Technology solutions for hospitality, retail, education, healthcare, professional services, startups, SMBs, and enterprises.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries — Shital AI LLP',
    description: 'Solutions for modern businesses across industries.',
    url: '/industries',
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        visual="industries"
        title="Solutions for Modern Businesses"
        description="We build technology solutions that fit the way different industries operate — from hospitality and retail to healthcare and enterprises."
      />

      {/* Industry cards */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <EditorialImage
              src="/images/industries/operations-automation.webp"
              alt="Organized shelving and material-flow equipment in a warehouse"
              label="Operational systems"
              credit="lim woojung"
              creditUrl="https://unsplash.com/photos/empty-green-shelves-in-a-warehouse-with-signs-l3tPD02-thk"
              disclosure="Illustrative operational environment — not a Shital AI LLP customer site."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry.name} delay={(i % 4) * 80}>
                <IndustryCard {...industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Common solutions across industries */}
      <section className="bg-blue-50/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cross-Industry Solutions"
            title="Common Technology Needs Across Industries"
            description="While every industry is different, many business technology challenges are universal."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              {
                title: 'Operational Efficiency',
                text: 'Streamline day-to-day operations with software built around your workflows.',
              },
              {
                title: 'Customer Experience',
                text: 'Improve how customers interact with your business through better digital tools.',
              },
              {
                title: 'Data Organization',
                text: 'Bring scattered business data into centralized, accessible systems.',
              },
              {
                title: 'Automation',
                text: 'Reduce manual work with automated processes and AI-assisted operations.',
              },
              {
                title: 'System Integration',
                text: 'Connect the tools and platforms your business already uses.',
              },
              {
                title: 'Scalable Growth',
                text: 'Technology that grows with your business, not against it.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="flex h-full flex-col border-l border-blue-300/70 p-6 transition-colors hover:border-blue-600">
                  <h3 className="text-base font-bold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-sarvam-cta py-20 lg:py-24">
        <div className="absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="display-title text-balance text-4xl text-navy-900 sm:text-5xl">
              Looking for a solution for your industry?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us about your business and industry. We&apos;ll help you find
              the right technology approach.
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
