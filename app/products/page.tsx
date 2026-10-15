import type { Metadata } from 'next';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { ProductCard } from '@/components/cards/product-card';
import { CTAButton } from '@/components/buttons/cta-button';
import { PRODUCTS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Products | Shital AI LLP',
  description:
    'Explore software products developed by Shital AI LLP for modern business and technology needs.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products | Shital AI LLP',
    description:
      'Technology products built for business by Shital AI LLP.',
    url: '/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        visual="products"
        title="Technology Products Built for Business"
        description="Shital AI LLP develops software products designed to solve practical business and technology challenges."
      />

      {/* Products grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.name} delay={i * 100}>
                <ProductCard {...product} />
              </Reveal>
            ))}

            {/* Future product placeholder */}
            <Reveal delay={200}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/30 p-7 text-center">
                <p className="text-sm font-semibold text-muted-foreground">
                  More products coming soon
                </p>
                <p className="mt-2 max-w-xs text-xs text-muted-foreground">
                  We&apos;re continuously developing new technology products to
                  solve business challenges.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-sarvam-cta py-20 lg:py-24">
        <div className="absolute inset-0 bg-fine-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="display-title text-balance text-4xl text-navy-900 sm:text-5xl">
              Need a custom technology product?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              We build custom software products tailored to specific business
              needs. Tell us what you&apos;re looking for.
            </p>
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
