'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as 'div';
  const hiddenTransform = {
    up: 'translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    scale: 'scale-[0.97]',
  }[direction];

  return (
    <Tag
      ref={ref}
      className={cn(
        'reveal-item transition-all duration-700 will-change-transform',
        visible
          ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
          : `opacity-0 ${hiddenTransform}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
