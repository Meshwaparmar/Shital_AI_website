import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CircleAlert, FileCheck2 } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { CTAButton } from '@/components/buttons/cta-button';
import { ProjectMotionVisual } from '@/components/projects/project-motion-visual';
import { COMPANY_PROJECTS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects & Products',
  description:
    'Explore products and software projects from Shital AI LLP, including Telyxan.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects & Products — Shital AI LLP',
    description: 'Explore products and software projects from Shital AI LLP.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & products"
        visual="projects"
        title="Products and Projects Built for Better Business Systems"
        description="Explore the Shital AI LLP product portfolio and technology projects. Details are presented only where they are verified."
      />

      <section className="py-24 lg:py-32">
        <div className="section-shell">
          <Reveal direction="scale">
            <div className="flex flex-col gap-4 border-l-2 border-blue-500 bg-blue-50/70 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-900 text-white"><FileCheck2 className="h-5 w-5" /></span>
                <div>
                  <h2 className="text-base font-bold text-navy-900">Verified project information</h2>
                  <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">Only confirmed capabilities and public destinations are shown. Projects without a verified public link remain available to view here without a fabricated destination.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:gap-6">
            {COMPANY_PROJECTS.map((project, index) => (
              <Reveal key={project.name} delay={(index % 2) * 90} className="h-full" direction={index % 2 ? 'up' : 'scale'}>
                <article className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10 ${project.featured ? 'border-blue-300 shadow-lg shadow-blue-900/5' : 'border-border hover:border-blue-400/50'}`}>
                  {project.featured && <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#3b82f6,#f59e0b)]" aria-hidden="true" />}
                  <div className="flex items-start justify-between gap-4">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white transition-colors ${project.featured ? 'bg-blue-700 group-hover:bg-navy-900' : 'bg-navy-900 group-hover:bg-blue-700'}`}>
                      <project.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-right text-[0.65rem] font-bold uppercase tracking-[0.12em] ${project.featured ? 'bg-blue-100 text-blue-800' : 'bg-secondary text-navy-600'}`}>{project.status}</span>
                  </div>
                  <ProjectMotionVisual projectName={project.name} />
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">{project.category}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-navy-900">{project.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  {project.tags.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.65rem] font-semibold text-navy-600">{tag}</span>)}</div>}
                  {project.href && project.cta ? (
                    project.href.startsWith('http') ? (
                      <a href={project.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                        {project.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <Link href={project.href} className="mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                        {project.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    )
                  ) : (
                    <p className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"><CircleAlert className="h-4 w-4 shrink-0" />Public link coming after verification</p>
                  )}
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
            <h2 className="display-title text-balance text-4xl text-navy-900 sm:text-5xl">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">Tell us what you want to build, improve, or make possible next.</p>
            <div className="mt-7 flex justify-center"><CTAButton href="/contact" variant="primary" showArrow>Start a Conversation</CTAButton></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
