'use client';

import Image from 'next/image';
import { FileText, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function DigitalContentTablet() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(media);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="group overflow-hidden rounded-2xl border border-border/80 bg-white shadow-xl shadow-navy-900/10">
      <div
        ref={mediaRef}
        className={`digital-tablet-media relative aspect-[16/10] overflow-hidden bg-navy-100${isVisible ? ' is-visible' : ''}`}
      >
        <div className="digital-tablet-entrance absolute inset-0">
          <div className="digital-tablet-float absolute inset-0">
            <Image
              src="/images/projects/ebook-reading.webp"
              alt="Hands holding a blank digital tablet with a stylus"
              fill
              sizes="(min-width: 1280px) 1152px, (min-width: 768px) 90vw, 100vw"
              className="digital-tablet-image object-cover motion-safe:group-hover:scale-[1.025]"
            />

            <div className="digital-tablet-screen" aria-hidden="true">
              <div className="digital-screen-header">
                <span><Sparkles /> AI content flow</span>
                <i />
              </div>
              <div className="digital-screen-copy">
                <span className="digital-screen-title" />
                <span className="digital-screen-line digital-screen-line-one" />
                <span className="digital-screen-line digital-screen-line-two" />
                <span className="digital-screen-line digital-screen-line-three" />
                <span className="digital-screen-line digital-screen-line-four" />
              </div>
              <div className="digital-screen-pages">
                <span><i /><i /><i /></span>
                <span><i /><i /><i /></span>
                <span><i /><i /><i /></span>
              </div>
              <span className="digital-screen-light" />
            </div>
          </div>
        </div>

        <div className="digital-content-orbit" aria-hidden="true">
          <div className="digital-doc-card digital-doc-card-left">
            <div className="digital-doc-card-body">
              <FileText />
              <span><strong>Outline</strong><i /><i /></span>
            </div>
          </div>
          <div className="digital-doc-card digital-doc-card-right">
            <div className="digital-doc-card-body">
              <Sparkles />
              <span><strong>Drafting</strong><i /><i /></span>
            </div>
          </div>
          <div className="digital-doc-card digital-doc-card-bottom">
            <div className="digital-doc-card-body">
              <FileText />
              <span><strong>Page preview</strong><i /><i /></span>
            </div>
          </div>

          <span className="digital-flow-line digital-flow-line-left"><i /></span>
          <span className="digital-flow-line digital-flow-line-right"><i /></span>
          <span className="digital-page-stream digital-page-stream-one"><i /><i /></span>
          <span className="digital-page-stream digital-page-stream-two"><i /><i /></span>
          <span className="digital-page-stream digital-page-stream-three"><i /><i /></span>
        </div>

        <span className="absolute left-4 top-4 z-30 rounded-full border border-white/20 bg-navy-950/70 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-md">
          Digital content context
        </span>
        <span
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <figcaption className="flex flex-col gap-1 border-t border-border/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <span>Illustrative blank tablet — not generated output or an E-book Generator interface.</span>
        <a
          href="https://unsplash.com/photos/hands-holding-a-blank-tablet-with-a-stylus-s2t9mzD88Go"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 font-semibold text-blue-700 underline-offset-4 transition-colors hover:text-blue-900 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Photo: Lorin Both / Unsplash
        </a>
      </figcaption>
    </figure>
  );
}
