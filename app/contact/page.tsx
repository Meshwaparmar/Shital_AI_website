import type { Metadata } from 'next';
import { Mail, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { PageHero } from '@/components/hero/page-hero';
import { ContactForm } from '@/components/contact-form/contact-form';

export const metadata: Metadata = {
  title: 'Contact — Start a Business Conversation',
  description:
    'Get in touch with Shital AI LLP. Tell us about your business and what you need — software, AI, automation, or custom development.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Shital AI LLP',
    description: 'Start a conversation about your business technology needs.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        visual="contact"
        title="What Could We Build for Your Business?"
        description="Tell us what you want to improve, automate, or create. Let’s explore the right solution together."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left: info */}
            <Reveal className="lg:col-span-5">
              <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy-800">
                    Start with the requirement.
                  </h2>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Tell us what is slowing your business down. We&apos;ll help
                    you explore the right software, automation, or AI solution.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <InfoCard
                    icon={MessageSquare}
                    title="Business Enquiry"
                    text="Use the form to tell us about your business needs. The more detail you share, the better we can help."
                  />
                  <InfoCard
                    icon={Clock}
                    title="Response Time"
                    text="We review every enquiry carefully and respond as soon as possible."
                  />
                  <InfoCard
                    icon={Mail}
                    title="What Happens Next"
                    text="We'll discuss your business, understand your challenges, and propose the right technology approach."
                  />
                </div>

                <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
                  <p className="text-sm font-semibold text-orange-900">
                    What to include in your message
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5 text-sm text-orange-950/80">
                    {[
                      'Your industry and business type',
                      'The problem you want to solve',
                      'What you are looking to achieve',
                      'Any current systems you use',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal className="lg:col-span-7" delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Mail;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 border-l border-border bg-transparent p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
        <Icon className="h-5 w-5 text-blue-700" strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="text-sm font-bold text-navy-700">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  );
}
