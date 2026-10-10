'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Database, Gauge, Link2, Users, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExplorerItem {
  signal: string;
  title: string;
  description: string;
  outcome: string;
  capabilities: string[];
  href: string;
  icon: LucideIcon;
}

const ITEMS: ExplorerItem[] = [
  {
    signal: 'Manual work',
    title: 'Turn repetitive work into a connected workflow.',
    description: 'Map the steps your team repeats, connect the information involved, and build a practical automation around the real process.',
    outcome: 'A workflow designed for the way your team already operates.',
    capabilities: ['Business automation', 'Internal tools', 'AI-assisted operations'],
    href: '/solutions',
    icon: Gauge,
  },
  {
    signal: 'Scattered data',
    title: 'Bring important information into one useful view.',
    description: 'Create dashboards, reporting tools, or central business systems that make operational information easier to understand and act on.',
    outcome: 'Clearer access to the information that drives daily decisions.',
    capabilities: ['Dashboards', 'Reporting', 'Business systems'],
    href: '/software-services',
    icon: Database,
  },
  {
    signal: 'Disconnected systems',
    title: 'Help your software work together instead of apart.',
    description: 'Use APIs and system integrations to connect existing tools, reduce duplicate work, and create a more coherent operating flow.',
    outcome: 'Connected systems with fewer handoffs and repeated steps.',
    capabilities: ['API development', 'System integration', 'Cloud applications'],
    href: '/software-services',
    icon: Link2,
  },
  {
    signal: 'Growing conversations',
    title: 'Build more useful ways to communicate at scale.',
    description: 'Explore AI assistants, customer workflows, and omnichannel communication through Telyxan when they fit the requirement.',
    outcome: 'Communication designed around the customer and the business process.',
    capabilities: ['AI chatbots', 'Customer workflows', 'Telyxan'],
    href: '/products/telyxan',
    icon: Users,
  },
];

export function SolutionExplorer() {
  const [active, setActive] = useState(0);
  const item = ITEMS[active];
  const Icon = item.icon;

  return (
    <div className="grid overflow-hidden rounded-xl border border-border/80 bg-white soft-shadow lg:grid-cols-[0.8fr_1.2fr]">
      <div className="border-b border-border bg-navy-50 p-3 lg:border-b-0 lg:border-r lg:p-4" role="group" aria-label="Business challenge explorer">
        {ITEMS.map((entry, index) => (
          <button
            key={entry.signal}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className={cn(
              'group flex min-h-14 w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-all duration-300',
              active === index ? 'bg-primary text-white' : 'text-navy-600 hover:bg-white hover:text-navy-900'
            )}
          >
            <span className="flex items-center gap-3">
              <span className={cn('text-[0.64rem] font-semibold tabular-nums', active === index ? 'text-blue-300' : 'text-navy-400')}>0{index + 1}</span>
              <span className="text-sm font-semibold">{entry.signal}</span>
            </span>
            <ArrowUpRight className={cn('h-4 w-4 transition-opacity', active === index ? 'text-blue-300 opacity-100' : 'opacity-0 group-hover:opacity-50')} />
          </button>
        ))}
      </div>

      <div className="relative min-h-[410px] overflow-hidden bg-white p-7 text-navy-900 sm:p-10 lg:p-12" aria-live="polite">
        <div className="absolute inset-0 bg-fine-grid opacity-40" aria-hidden="true" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" aria-hidden="true" />
        <div key={item.signal} className="relative flex h-full flex-col animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Icon className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-blue-700">From challenge to system</span>
          </div>
          <h3 className="mt-8 max-w-xl text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">{item.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {item.capabilities.map((capability) => (
              <span key={capability} className="rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-blue-800">{capability}</span>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm font-medium text-navy-700">{item.outcome}</p>
            <Link href={item.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-600">
              Explore the approach <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
