import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, FileCheck2 } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { CTAButton } from '@/components/buttons/cta-button';
import { SOLUTION_CATEGORIES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects & Illustrative Use Cases',
  description:
    'Explore clearly labelled illustrative business use cases and future verified project case studies from Shital AI LLP.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects & Use Cases — Shital AI LLP',
    description: 'Explore the kinds of business problems Shital AI LLP can help address.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & use cases"
        title="See What a Better Business System Could Look Like"
        description="Verified project stories will appear here when approved. Until then, these clearly labelled illustrative use cases show the kinds of business problems we can explore with you."
      />

      <section className="py-24 lg:py-32">
        <div className="section-shell">
          <Reveal direction="scale">
            <div className="flex flex-col gap-4 border-l-2 border-orange-400 bg-orange-50/70 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-500 text-navy-900"><FileCheck2 className="h-5 w-5" /></span>
                <div>
                  <h2 className="text-base font-bold text-navy-900">Illustrative use cases—not client claims</h2>
                  <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">No fictional clients, results, testimonials, or performance figures are presented below. Each example is a starting point for a requirements conversation.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_CATEGORIES.map((useCase, index) => (
              <Reveal key={useCase.title} delay={(index % 3) * 80} className="h-full" direction={index % 2 ? 'up' : 'scale'}>
                <article className="group flex h-full flex-col bg-white p-7 transition-colors hover:bg-blue-50/70">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-900 text-white transition-colors group-hover:bg-blue-700">
                      <useCase.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="text-xs font-bold tabular-nums text-navy-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-navy-900">{useCase.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.65rem] font-semibold text-navy-600">{tag}</span>)}
                  </div>
                  <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                    Discuss a similar challenge <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-sarvam-cta py-20 lg:py-24">
        <div className="absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="display-title text-balance text-4xl text-navy-900 sm:text-5xl">Have a use case of your own?</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">Tell us what is slowing the business down or what you want to make possible next.</p>
            <div className="mt-7 flex justify-center"><CTAButton href="/contact" variant="primary" showArrow>Start a Conversation</CTAButton></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
