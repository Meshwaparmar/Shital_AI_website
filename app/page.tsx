import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { CTAButton } from '@/components/buttons/cta-button';
import { HeroVisual } from '@/components/hero/hero-visual';
import { TelyxanHeroVisual } from '@/components/telyxan/telyxan-hero-visual';
import { SolutionExplorer } from '@/components/solutions/solution-explorer';
import { ContactForm } from '@/components/contact-form/contact-form';
import { OrganizationJsonLd, ServiceJsonLd } from '@/components/seo/structured-data';
import {
  VALUE_STRIP,
  WHAT_WE_DO,
  AUTOMATION_FLOW,
  PROCESS_STEPS,
  WHY_SHITAL,
  INDUSTRIES,
  TELYXAN_CHANNELS,
} from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <ServiceJsonLd />
      <HeroSection />
      <HeroVisualSection />
      <ValueRail />
      <PossibilitySection />
      <SolutionsSection />
      <AutomationSection />
      <TelyxanSection />
      <ProcessSection />
      <IndustriesSection />
      <ProjectInvitation />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero-video-section relative isolate flex min-h-[680px] min-h-[100svh] items-center overflow-hidden border-b border-white/10 bg-navy-950 pb-16 pt-28 sm:min-h-[740px] sm:pt-32 lg:pt-36">
      <div className="hero-video-fallback pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <video
        className="hero-background-video pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] opacity-90 sm:object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/shital-ai-data-flow.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(112deg,rgba(9,12,28,0.88)_0%,rgba(13,19,42,0.68)_50%,rgba(9,12,28,0.82)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_72%_24%,rgba(115,177,255,0.22),transparent_45%)]" aria-hidden="true" />
      <div className="section-shell relative z-10 w-full">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="flex flex-col items-center">
              <span className="eyebrow">Business software · AI · automation</span>
              <h1 className="display-title mt-7 max-w-5xl text-balance text-5xl leading-[0.94] text-white sm:text-7xl lg:text-[6.6rem]">
                Make Your Business <span className="text-blue-200">Work Smarter.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-blue-50/90 sm:text-xl">
                We build intelligent software and AI solutions that help businesses automate operations, simplify workflows, and grow faster.
              </p>
              <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <CTAButton href="/solutions" variant="light" showArrow>Explore Our Solutions</CTAButton>
                <CTAButton href="/contact" variant="light-outline" showArrow>Contact Us</CTAButton>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-blue-50/90">
                {['Built around real workflows', 'AI where it creates value', 'Designed to evolve'].map((item) => (
                  <span key={item} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-blue-300" />{item}</span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function HeroVisualSection() {
  return (
    <section className="border-b border-border/70 bg-light-mesh py-16 sm:py-20 lg:py-24" aria-label="How Shital AI solutions work together">
      <div className="section-shell">
        <Reveal direction="scale"><HeroVisual /></Reveal>
      </div>
    </section>
  );
}

function ValueRail() {
  return (
    <section className="border-b border-border bg-white" aria-label="Core capabilities">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {VALUE_STRIP.map((item, index) => (
          <Reveal key={item.title} delay={index * 60} className={`group flex min-h-24 items-center gap-3 px-2 py-5 sm:px-5 ${index > 0 ? 'border-l border-border/70' : ''}`}>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <item.icon className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-navy-700 sm:text-sm">{item.title}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PossibilitySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeading
            eyebrow="Discover what is possible"
            title="Start with the friction, not the technology."
            description="Choose the challenge that feels familiar. See how software, automation, or AI could turn it into a more useful operating system for your business."
            align="left"
          />
          <Reveal delay={100} direction="left">
            <p className="max-w-lg border-l border-orange-400/60 pl-5 text-sm leading-relaxed text-muted-foreground">
              Every solution begins by understanding the current workflow, the people involved, and what needs to work better.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12" delay={100} direction="scale"><SolutionExplorer /></Reveal>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-white py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Explore our solutions"
              title="Three capabilities. One business-first approach."
              description="Use one capability or combine them into a connected solution designed around the way your operation works."
              align="left"
            />
            <Reveal className="mt-8"><CTAButton href="/solutions" variant="secondary" showArrow>See all solution paths</CTAButton></Reveal>
          </div>

          <div className="border-t border-border">
            {WHAT_WE_DO.map((service, index) => (
              <Reveal key={service.title} delay={index * 90} direction="left">
                <Link href={service.href || '/solutions'} className="group grid gap-5 border-b border-border py-8 transition-all hover:bg-blue-50/60 sm:grid-cols-[52px_0.8fr_1fr_28px] sm:items-center sm:px-5 lg:py-10">
                  <span className="text-xs font-bold tabular-nums text-blue-700">0{index + 1}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white transition-colors duration-300 group-hover:bg-blue-700">
                      <service.icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy-900 sm:text-2xl">{service.title}</h3>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{service.description}</p>
                  <ArrowUpRight className="h-5 w-5 text-blue-700 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomationSection() {
  return (
    <section className="relative overflow-hidden bg-blue-50/55 py-24 lg:py-32">
      <div className="absolute inset-0 bg-fine-grid opacity-30" aria-hidden="true" />
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <SectionHeading
            eyebrow="A smarter operating flow"
            title="Move from repeated effort to connected operations."
            description="Automation works best when it follows the business process—not when the business has to bend around the tool."
            align="left"
          />
          <Reveal delay={120} direction="left">
            <div className="relative rounded-xl border border-border/80 bg-white p-5 soft-shadow sm:p-8">
              <div className="absolute bottom-8 left-[37px] top-8 w-px bg-border sm:bottom-auto sm:left-12 sm:right-12 sm:top-[58px] sm:h-px sm:w-auto" aria-hidden="true">
                <span className="shimmer-line absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              </div>
              <div className="relative grid gap-6 sm:grid-cols-4 sm:gap-4">
                {AUTOMATION_FLOW.map((step, index) => (
                  <div key={step.label} className="group grid grid-cols-[48px_1fr] gap-3 sm:block">
                    <span className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-lg text-xs font-bold shadow-sm transition-transform duration-300 group-hover:-translate-y-1 ${index === AUTOMATION_FLOW.length - 1 ? 'bg-orange-500 text-navy-950' : 'bg-navy-900 text-white'}`}>{index + 1}</span>
                    <div className="sm:mt-6">
                      <h3 className="text-sm font-bold text-navy-900">{step.label}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TelyxanSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-white py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
          <Reveal direction="right">
            <span className="eyebrow">Featured product · Telyxan</span>
            <h2 className="display-title mt-6 text-balance text-4xl leading-[1.01] text-navy-900 sm:text-5xl lg:text-6xl">
              One platform for business conversations across channels.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Telyxan is Shital AI LLP&apos;s omnichannel communication platform for connecting WhatsApp Business API, SMS, Email, and Telegram through one centralized experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {TELYXAN_CHANNELS.map((channel) => (
                <span key={channel.name} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 shadow-sm">
                  <channel.icon className="h-3.5 w-3.5 text-blue-700" />{channel.name}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="https://www.telyxan.com/" variant="primary" showArrow>Explore Telyxan</CTAButton>
              <CTAButton href="/contact" variant="secondary" showArrow>Discuss a communication solution</CTAButton>
            </div>
            <Link href="/products/telyxan" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700 hover:text-blue-600">
              View the Shital AI product page <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={150} direction="left"><TelyxanHeroVisual /></Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="How we work" title="A clear path from requirement to working solution." description="Each stage keeps the business objective visible while the technology takes shape." align="left" />
            <Reveal className="mt-9 border-l-2 border-orange-400 bg-orange-50/70 p-6" delay={100} direction="right">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-navy-950"><Sparkles className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">Technology with a business mindset.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We choose software, automation, and AI based on what the requirement actually needs.</p>
            </Reveal>
          </div>

          <div className="relative border-t border-border">
            <span className="absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-blue-400 via-blue-200 to-transparent sm:left-[35px]" aria-hidden="true" />
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 80} direction="left">
                <div className="group relative grid gap-4 border-b border-border py-7 pl-16 sm:grid-cols-[62px_0.58fr_1fr] sm:items-start sm:pl-0">
                  <span className="absolute left-3 top-7 z-10 grid h-8 w-8 place-items-center rounded-full border border-blue-300 bg-white text-[0.62rem] font-bold tabular-nums text-blue-800 shadow-sm transition-all group-hover:bg-blue-600 group-hover:text-white sm:relative sm:left-auto sm:top-auto">{step.number}</span>
                  <div className="flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-blue-700" strokeWidth={1.7} />
                    <h3 className="text-lg font-semibold text-navy-900">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <SectionHeading eyebrow="Why Shital AI LLP" title="Thoughtful technology, built around real needs." align="left" />
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_SHITAL.map((value, index) => (
              <Reveal key={value.title} delay={index * 60} direction={index % 2 ? 'up' : 'scale'}>
                <div className="group border-l border-border pl-4 transition-colors hover:border-blue-500">
                  <value.icon className="h-5 w-5 text-blue-700 transition-transform group-hover:scale-110" strokeWidth={1.7} />
                  <h3 className="mt-4 text-sm font-bold text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="border-y border-border bg-white py-20 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Built for varied operations" title="Business context changes. Our starting point does not." description="We begin by understanding the workflow, constraints, and people involved." align="left" />
          <CTAButton href="/industries" variant="secondary" showArrow>Explore industries</CTAButton>
        </div>
        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-xl border border-border sm:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 45} className="h-full">
              <div className="group flex min-h-36 h-full flex-col justify-between border-b border-r border-border bg-white p-4 transition-colors hover:bg-blue-50">
                <industry.icon className="h-5 w-5 text-blue-700 transition-transform group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.7} />
                <span className="mt-6 text-xs font-bold text-navy-800">{industry.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectInvitation() {
  return (
    <section className="bg-sarvam-cta py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="grid overflow-hidden rounded-xl border border-border/80 bg-white soft-shadow lg:grid-cols-[1.15fr_0.85fr]" direction="scale">
          <div className="p-7 sm:p-10 lg:p-12">
            <span className="eyebrow">Solution exploration</span>
            <h2 className="display-title mt-6 max-w-2xl text-balance text-4xl leading-tight text-navy-900 sm:text-5xl">Have a process that should work better?</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Tell us what is slow, repetitive, disconnected, or difficult to manage. We&apos;ll explore what kind of software or AI solution could fit.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" variant="primary" showArrow>Discuss the challenge</CTAButton>
              <CTAButton href="/projects" variant="secondary" showArrow>Explore use cases</CTAButton>
            </div>
          </div>
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-navy-900 p-8">
            <div className="absolute inset-0 bg-grid-pattern-light opacity-25" aria-hidden="true" />
            <div className="relative w-full max-w-sm space-y-3">
              {['Understand the friction', 'Map the business flow', 'Shape the right system'].map((item, index) => (
                <div key={item} className="soft-float flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm font-medium text-white" style={{ animationDelay: `${index * -1.4}s` }}>
                  <span className="text-xs text-blue-300">0{index + 1}</span>{item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Start a useful conversation"
              title="What could we build for your business?"
              description="Tell us what you want to improve, automate, or create. Let’s explore the right solution together."
              align="left"
            />
            <Reveal className="mt-8 border-l border-orange-400/70 pl-5 text-sm leading-relaxed text-muted-foreground" direction="right">
              No forced packages. Start with the requirement and the business context.
            </Reveal>
          </div>
          <Reveal delay={100} direction="left"><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
