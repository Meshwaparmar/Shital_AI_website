import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/brand/logo';

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const SOLUTION_LINKS = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'AI Services', href: '/ai-services' },
  { label: 'Software Services', href: '/software-services' },
  { label: 'Telyxan', href: '/products/telyxan' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-white to-secondary text-navy-600">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-border pb-12 lg:grid-cols-[1.35fr_0.65fr_0.65fr]">
          <div>
            <Link href="/" className="inline-flex rounded-md"><Logo variant="dark" width={144} height={54} /></Link>
            <h2 className="mt-7 max-w-md text-balance text-2xl font-semibold tracking-[-0.03em] text-navy-900 sm:text-3xl">
              Technology shaped around the way your business works.
            </h2>
            <Link href="/contact" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-700">
              Discuss your requirement
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <FooterColumn title="Explore" links={SOLUTION_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Shital AI LLP. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Business software</span><span>AI solutions</span><span>Automation</span>
            <a href="https://www.telyxan.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-700">
              Visit Telyxan <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-blue-800">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-navy-600 transition-colors hover:text-blue-800">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
