import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { CTAButton } from '@/components/buttons/cta-button';
import {
  Briefcase,
  Target,
  Compass,
  Eye,
  Flag,
  Code2,
  Brain,
  Workflow,
  Send,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Technology That Moves Businesses Forward',
  description:
    'Shital AI LLP is a technology company focused on practical software, AI, and automation solutions for businesses. Learn about who we are, what we believe, and our approach.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Shital AI LLP',
    description:
      'Technology that moves businesses forward through practical software, AI, and automation.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Technology That Moves Businesses Forward"
        description="Shital AI LLP is a technology company focused on practical software, AI, and automation solutions that help businesses operate better and grow with confidence."
      />

      {/* Who We Are */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  <span className="h-px w-6 bg-blue-600" />
                  Who We Are
                </span>
                <h2 className="text-balance text-2xl font-bold tracking-tight text-navy-700 sm:text-3xl">
                  A Business Technology Partner
                </h2>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Shital AI LLP builds intelligent software and AI solutions
                  that help businesses automate operations, work smarter, and
                  grow faster. We are not a generic AI agency — we are a
                  technology partner focused on solving real business problems.
                </p>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Our approach combines software development, artificial
                  intelligence, and business automation to create practical
                  technology solutions built around the way your business
                  actually works.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code2, label: 'Business Software', text: 'Custom systems built around your workflows' },
                  { icon: Brain, label: 'AI Solutions', text: 'Practical AI that creates business value' },
                  { icon: Workflow, label: 'Automation', text: 'Smarter workflows, less manual work' },
                  { icon: Briefcase, label: 'Business Focus', text: 'Technology that serves your business goals' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col border-l border-border bg-transparent p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50">
                      <item.icon className="h-5 w-5 text-navy-600" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-sm font-bold text-navy-700">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technology Products */}
      <section className="bg-blue-50/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <Reveal>
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  <span className="h-px w-6 bg-blue-600" />
                  Technology Products
                </span>
                <h2 className="text-balance text-2xl font-bold tracking-tight text-navy-700 sm:text-3xl">
                  Building Products, Not Just Projects
                </h2>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Beyond custom client work, Shital AI LLP develops its own
                  technology products designed to solve practical business
                  challenges at scale.
                </p>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Telyxan is one of the technology products developed by Shital
                  AI LLP — an omnichannel communication platform that brings
                  WhatsApp Business API, SMS, Email, and Telegram together
                  through a centralized experience.
                </p>
                <div className="mt-2">
                  <Link
                    href="/products/telyxan"
                    className="group inline-flex items-center gap-1.5 text-sm font-bold text-blue-600"
                  >
                    Explore Telyxan
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <Link
                href="/products/telyxan"
                className="group flex flex-col gap-4 rounded-xl border border-border/80 bg-white p-7 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  A Product by Shital AI LLP
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400 shadow-lg shadow-blue-400/20">
                    <Send className="h-6 w-6 text-navy-950" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-700">Telyxan</h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
                      Omnichannel Communication Platform
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Connect WhatsApp Business API, SMS, Email and Telegram through
                  a centralized communication platform.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['WhatsApp', 'SMS', 'Email', 'Telegram'].map((ch) => (
                    <span
                      key={ch}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-navy-600"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Explore Telyxan
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Believe"
            title="Principles That Guide Our Work"
            description="Our beliefs shape every solution we build and every relationship we form."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {[
              {
                title: 'Business Comes First',
                text: 'Technology should serve the business, not the other way around. We start with the problem, not the technology.',
              },
              {
                title: 'AI Where It Makes Sense',
                text: 'AI is powerful, but it is not always the answer. We use it where it creates genuine, practical business value.',
              },
              {
                title: 'Custom Over Generic',
                text: 'Every business is unique. Off-the-shelf software rarely fits. Custom solutions deliver better outcomes.',
              },
              {
                title: 'Build for Growth',
                text: 'Solutions should scale with your business. We design technology that grows alongside your ambitions.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100}>
                <div className="flex h-full gap-4 border-l border-border p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Target className="h-5 w-5 text-blue-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-700">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-blue-50/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Build Solutions"
            description="A clear process that keeps your business goals at the center of everything we do."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              { icon: Compass, step: '01', title: 'Understand', text: 'We understand your business, workflow, and challenges.' },
              { icon: Target, step: '02', title: 'Plan', text: 'We define the right technology, features, and architecture.' },
              { icon: Code2, step: '03', title: 'Build', text: 'We develop, integrate, and test your solution.' },
              { icon: Flag, step: '04', title: 'Grow', text: 'We improve, maintain, and scale as your business grows.' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div className="flex h-full flex-col rounded-xl border border-border/80 bg-white p-6 transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                      <item.icon className="h-5 w-5 text-blue-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-2xl font-bold text-navy-100">
                      {item.step}
                    </span>
                  </div>
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

      {/* Vision & Mission */}
      <section className="relative border-y border-border bg-blue-50/60 py-24 lg:py-32">
        <div className="absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="flex h-full flex-col rounded-xl border border-border bg-white p-8 soft-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900">
                  <Eye className="h-6 w-6 text-white" strokeWidth={1.8} />
                </div>
                <h2 className="text-xl font-bold text-navy-900">Our Vision</h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  To be a trusted technology partner that helps businesses of
                  all sizes leverage software, AI, and automation to operate
                  more efficiently, make better decisions, and grow with
                  confidence in an increasingly digital world.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-white p-8 soft-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                  <Flag className="h-6 w-6 text-navy-950" strokeWidth={1.8} />
                </div>
                <h2 className="text-xl font-bold text-navy-900">Our Mission</h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  To build practical, custom technology solutions that solve
                  real business problems — combining software development,
                  artificial intelligence, and automation to help companies work
                  smarter, reduce manual effort, and achieve sustainable growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-balance text-2xl font-bold text-navy-700 sm:text-3xl">
              Let&apos;s build something that moves your business forward.
            </h2>
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
