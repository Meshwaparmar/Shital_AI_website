import type { Metadata } from 'next';
import { Reveal } from '@/components/animations/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { CTAButton } from '@/components/buttons/cta-button';
import { ChannelCard } from '@/components/cards/channel-card';
import { CommunicationFlow } from '@/components/telyxan/communication-flow';
import { TelyxanHeroVisual } from '@/components/telyxan/telyxan-hero-visual';
import {
  TELYXAN_CHANNELS,
  TELYXAN_USE_CASES,
  TELYXAN_BENEFITS,
} from '@/lib/content';
import {
  Send,
  ArrowDown,
  Building2,
  Plug,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Telyxan | Omnichannel Communication Platform | Shital AI LLP',
  description:
    'Telyxan by Shital AI LLP brings WhatsApp Business API, SMS, Email and Telegram communication together through an omnichannel business communication platform.',
  alternates: { canonical: '/products/telyxan' },
  openGraph: {
    title: 'Telyxan | Omnichannel Communication Platform',
    description:
      'Bring your business communication channels together and connect with customers through a centralized omnichannel platform.',
    url: '/products/telyxan',
  },
};

export default function TelyxanPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/70 bg-light-mesh pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 bg-fine-grid opacity-35" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/8 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy */}
            <Reveal>
              <div className="flex flex-col gap-6">
                <span className="eyebrow">
                  A Product by Shital AI LLP
                </span>

                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 shadow-xl shadow-navy-900/15">
                    <Send className="h-7 w-7 text-white" strokeWidth={1.8} />
                  </div>
                  <span className="text-2xl font-semibold tracking-[-0.03em] text-navy-900 sm:text-3xl">
                    Telyxan
                  </span>
                </div>

                <h1 className="display-title text-balance text-5xl leading-[0.98] text-navy-900 sm:text-6xl lg:text-7xl">
                  Telyxan — Smarter Business Communication
                </h1>

                <p className="text-pretty max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Bring your business communication channels together and connect
                  with customers through a centralized omnichannel platform.
                </p>

                {/* Channel pills */}
                <div className="flex flex-wrap gap-2">
                  {TELYXAN_CHANNELS.map((channel) => (
                    <span
                      key={channel.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-navy-700 shadow-sm"
                    >
                      <channel.icon className="h-4 w-4 text-blue-700" strokeWidth={1.8} />
                      {channel.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <CTAButton href="https://www.telyxan.com/" variant="primary" showArrow>
                    Explore Telyxan
                  </CTAButton>
                  <CTAButton href="/contact" variant="secondary" showArrow>
                    Discuss a Solution
                  </CTAButton>
                </div>
              </div>
            </Reveal>

            {/* Right: visual */}
            <Reveal delay={200} className="lg:pl-8">
              <TelyxanHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Connect Across Channels */}
      <section id="channels" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Communication Channels"
            title="Connect Across Channels"
            description="Telyxan supports the communication channels your business and customers actually use."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {TELYXAN_CHANNELS.map((channel, i) => (
              <Reveal key={channel.name} delay={(i % 4) * 80}>
                <ChannelCard {...channel} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Communication */}
      <section className="bg-blue-50/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Unified Platform"
            title="One Communication Experience"
            description="Telyxan brings multiple customer communication channels into a centralized platform, helping businesses manage communication more efficiently."
          />

          <div className="mt-12">
            <CommunicationFlow />
          </div>
        </div>
      </section>

      {/* Business Use Cases */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Use Cases"
            title="Built for Business Communication"
            description="Practical communication use cases that help businesses stay connected with customers."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {TELYXAN_USE_CASES.map((useCase, i) => (
              <Reveal key={useCase.label} delay={(i % 4) * 80}>
                <div className="flex h-full items-center gap-2.5 border-l border-border bg-transparent p-4 transition-colors duration-300 hover:border-blue-500">
                  <useCase.icon className="h-5 w-5 shrink-0 text-blue-600" strokeWidth={1.8} />
                  <span className="text-sm font-medium text-navy-600">
                    {useCase.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* API / Integration */}
      <section className="relative border-y border-border bg-blue-50/60 py-24 lg:py-32">
        <div className="absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="API & Integration"
            title="Connect Telyxan With Your Business Software"
            description="Integrate communication capabilities into your existing business applications and workflows through APIs and software integrations."
          />

          <Reveal className="mt-12" delay={100}>
            <div className="mx-auto max-w-3xl rounded-xl border border-border bg-white p-6 soft-shadow sm:p-8">
              {/* Flow */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-border bg-navy-50/50 px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <Building2 className="h-5 w-5 text-navy-900" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900">
                      Business Software
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your existing systems
                    </p>
                  </div>
                </div>

                <ArrowDown className="h-5 w-5 text-blue-400" />

                <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <Plug className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900">Telyxan API</p>
                    <p className="text-xs text-muted-foreground">
                      Communication integration layer
                    </p>
                  </div>
                </div>

                <ArrowDown className="h-5 w-5 text-blue-400" />

                <div className="grid w-full max-w-md grid-cols-2 gap-2 sm:grid-cols-4">
                  {TELYXAN_CHANNELS.map((channel) => (
                    <div
                      key={channel.name}
                      className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-white px-2 py-3 text-center"
                    >
                      <channel.icon className="h-4 w-4 text-blue-700" strokeWidth={1.8} />
                      <span className="text-[10px] font-medium text-navy-700 sm:text-xs">
                        {channel.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Telyxan */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Telyxan"
            title="Why Businesses Choose an Omnichannel Approach"
            description="Managing communication across channels doesn't have to mean managing separate tools."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {TELYXAN_BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={(i % 4) * 100}>
                <div className="group flex h-full flex-col rounded-xl border border-border/80 bg-white p-6 transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 transition-colors group-hover:bg-blue-600">
                    <benefit.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-navy-700">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-sarvam-cta py-24 lg:py-32">
        <div className="absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="eyebrow">
              Ready to Connect?
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="display-title mt-6 text-balance text-4xl text-navy-900 sm:text-5xl lg:leading-[1.02]">
              Build Better Customer Communication With Telyxan
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Talk to Shital AI LLP about bringing omnichannel communication
              into your business.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <CTAButton href="https://www.telyxan.com/" variant="primary" showArrow>
                Visit Telyxan
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" showArrow>
                Discuss Your Requirement
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
