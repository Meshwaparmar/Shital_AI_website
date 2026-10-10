import type { Metadata } from 'next';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { CTAButton } from '@/components/buttons/cta-button';
import { SOFTWARE_SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Software Services — Custom Business Software',
  description:
    'Custom business software, web applications, CRM, POS, ERP, dashboards, internal tools, APIs, system integration, and cloud applications built around your business.',
  alternates: { canonical: '/software-services' },
  openGraph: {
    title: 'Software Services — Shital AI LLP',
    description:
      'Software that works the way your business works — custom built around your operations.',
    url: '/software-services',
  },
};

export default function SoftwareServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Software Services"
        title="Software That Works the Way Your Business Works"
        description="From custom business software to web applications, dashboards, and APIs — every solution is built around your operations and business goals."
      />

      {/* Software services grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SOFTWARE_SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col rounded-xl border border-border/80 bg-white p-6 transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 transition-colors group-hover:bg-blue-600">
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

      {/* Business outcomes */}
      <section className="bg-blue-50/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Business Outcomes"
            title="What Custom Software Delivers"
            description="We focus on business outcomes, not technical jargon. Here's what you get when software is built around your business."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: 'Faster Operations',
                text: 'Workflows that help your team work more efficiently.',
              },
              {
                title: 'Centralized Data',
                text: 'All your business information in one accessible system.',
              },
              {
                title: 'Better Decisions',
                text: 'Dashboards and reports that make data understandable.',
              },
              {
                title: 'Room to Grow',
                text: 'Software designed to scale as your business expands.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex h-full flex-col border-l border-blue-300/70 p-6">
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
              Ready to build software for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us what you need. We&apos;ll help you design and build the
              right solution.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton href="/contact" variant="primary" showArrow>
                Build Your Software
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
