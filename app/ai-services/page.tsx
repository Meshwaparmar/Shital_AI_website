import type { Metadata } from 'next';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { CTAButton } from '@/components/buttons/cta-button';
import { EditorialImage } from '@/components/visuals/editorial-image';
import { AI_SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AI Services — Practical AI for Business',
  description:
    'AI automation, AI chatbots, generative AI, machine learning, computer vision, and AI integration — practical AI solutions that solve real business problems.',
  alternates: { canonical: '/ai-services' },
  openGraph: {
    title: 'AI Services — Shital AI LLP',
    description:
      'Turn AI into a business advantage with practical AI solutions from Shital AI LLP.',
    url: '/ai-services',
  },
};

export default function AIServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Services"
        visual="ai"
        title="Turn AI Into a Business Advantage"
        description="Practical AI solutions that solve real business problems — from automation and chatbots to machine learning and computer vision."
        light
      />

      {/* Detailed AI services */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <EditorialImage
              src="/images/services/ai-infrastructure.webp"
              alt="Server racks inside a modern data center"
              label="AI infrastructure"
              credit="imgix"
              creditUrl="https://unsplash.com/photos/server-racks-in-data-center-klWUhr-wPJ8"
              disclosure="Conceptual infrastructure photography — not Shital AI LLP infrastructure."
            />
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {AI_SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 50}>
                <div className="ai-service-row relative grid grid-cols-1 gap-7 overflow-hidden py-9 sm:px-3 lg:grid-cols-12 lg:gap-12 lg:px-6 lg:py-12">
                  {/* Left: icon + title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900">
                        <service.icon className="h-6 w-6 text-blue-300" strokeWidth={1.8} />
                      </div>
                      <h2 className="text-xl font-semibold tracking-[-0.02em] text-navy-800">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Right: problem → solution → value */}
                  <div className="flex flex-col gap-4 lg:col-span-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Problem
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600">
                        {service.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Solution
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600">
                        {service.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Business Value
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600">
                        {service.value}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-blue-50/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="AI That Makes Business Sense"
            description="We don't apply AI for the sake of it. We use it where it creates measurable, practical value for your business."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Identify the Problem',
                text: 'We start with your business problem, not the technology.',
              },
              {
                step: '02',
                title: 'Evaluate AI Fit',
                text: 'We assess whether AI is the right solution or if simpler technology works better.',
              },
              {
                step: '03',
                title: 'Build & Integrate',
                text: 'We build the AI solution and integrate it into your existing workflows.',
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="flex h-full flex-col border-l border-blue-300/70 bg-transparent p-6">
                  <span className="text-sm font-semibold text-blue-700">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-navy-700">
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
              Want to explore AI for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us what you want to achieve. We&apos;ll help you understand
              where AI can create real value.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton href="/contact" variant="primary" showArrow>
                Start a Conversation
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
