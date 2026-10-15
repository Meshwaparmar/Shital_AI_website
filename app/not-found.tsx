import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { PageHeroVisual } from '@/components/visuals/page-hero-visual';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden border-b border-border bg-light-mesh px-4 pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="text-center lg:text-left">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-700 shadow-xl shadow-navy-900/15 lg:mx-0">
          <span className="text-2xl font-bold text-white">404</span>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-pretty text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-600 hover:shadow-lg"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition-all hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
        </div>
        <PageHeroVisual variant="solutions" />
      </div>
    </section>
  );
}
