'use client';

import Image from 'next/image';
import { AudioLines, Code2, Hotel } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ProjectImageVariant = 'hotel' | 'nirantar' | 'voice';

interface ProjectEditorialImageProps {
  src: string;
  alt: string;
  label: string;
  credit: string;
  creditUrl: string;
  disclosure: string;
  variant: ProjectImageVariant;
  objectPosition?: string;
  direction?: 'left' | 'right';
}

const icons = {
  hotel: Hotel,
  nirantar: Code2,
  voice: AudioLines,
};

export function ProjectEditorialImage({
  src,
  alt,
  label,
  credit,
  creditUrl,
  disclosure,
  variant,
  objectPosition = 'center',
  direction = 'left',
}: ProjectEditorialImageProps) {
  const figureRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = icons[variant];

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;

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

    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={figureRef}
      className={`project-editorial-image project-editorial-${variant} project-editorial-from-${direction}${isVisible ? ' is-visible' : ''}`}
    >
      <div className="project-editorial-media">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 80vw, 100vw"
          className="project-editorial-photo"
          style={{ objectPosition }}
        />
        <span className="project-editorial-wash" aria-hidden="true" />
        <span className="project-editorial-scan" aria-hidden="true" />
        <span className="project-editorial-corner" aria-hidden="true" />

        {variant === 'voice' && (
          <span className="project-editorial-wave" aria-hidden="true">
            {[32, 56, 78, 46, 88, 64, 38, 72, 48].map((height, index) => (
              <i key={`${height}-${index}`} style={{ height: `${height}%`, animationDelay: `${index * -0.14}s` }} />
            ))}
          </span>
        )}

        <span className="project-editorial-label">
          <Icon />
          {label}
        </span>
      </div>
      <figcaption className="project-editorial-caption">
        <span>{disclosure}</span>
        <a href={creditUrl} target="_blank" rel="noreferrer">
          Photo: {credit} / Unsplash
        </a>
      </figcaption>
    </figure>
  );
}
