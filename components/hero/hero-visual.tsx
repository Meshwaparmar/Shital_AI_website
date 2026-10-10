'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleDot,
  Database,
  MessageSquareText,
  Network,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CanvasMode {
  label: string;
  kicker: string;
  prompt: string;
  summary: string;
  icon: LucideIcon;
  steps: { label: string; detail: string; icon: LucideIcon }[];
}

const MODES: CanvasMode[] = [
  {
    label: 'Operations',
    kicker: 'Workflow design',
    prompt: 'Reduce repeated order updates across the team',
    summary: 'A connected workflow that keeps the process visible and reduces repeated hand-offs.',
    icon: Workflow,
    steps: [
      { label: 'Capture the request', detail: 'One structured starting point', icon: CircleDot },
      { label: 'Connect the workflow', detail: 'Route information to the right step', icon: Network },
      { label: 'Keep progress visible', detail: 'A clear view for the team', icon: BarChart3 },
    ],
  },
  {
    label: 'Customer flow',
    kicker: 'Communication design',
    prompt: 'Create a clearer path for customer enquiries',
    summary: 'A practical customer journey that connects conversations with the work behind them.',
    icon: MessageSquareText,
    steps: [
      { label: 'Receive the enquiry', detail: 'Bring the request into one flow', icon: MessageSquareText },
      { label: 'Route the next action', detail: 'Connect people and process', icon: Network },
      { label: 'Close the loop', detail: 'Keep the customer informed', icon: Check },
    ],
  },
  {
    label: 'Business data',
    kicker: 'Decision support',
    prompt: 'Bring weekly business information into one useful view',
    summary: 'A focused reporting workspace that makes important information easier to understand and use.',
    icon: Database,
    steps: [
      { label: 'Bring data together', detail: 'Connect the useful sources', icon: Database },
      { label: 'Structure the view', detail: 'Organise what the team needs', icon: Network },
      { label: 'Support the decision', detail: 'Surface a clear operating picture', icon: BarChart3 },
    ],
  },
];

export function HeroVisual() {
  const [active, setActive] = useState(0);
  const mode = MODES[active];

  return (
    <div className="relative mx-auto w-full max-w-[1180px]" role="group" aria-label="Interactive Shital AI solution canvas">
      <div className="absolute -inset-x-8 bottom-0 top-20 -z-10 bg-blue-100/55 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.25rem] border border-navy-900/15 bg-white shadow-[0_36px_100px_-60px_rgba(20,20,20,0.34)]">
        <div className="sarvam-spectrum absolute inset-y-0 left-0 z-20 w-1" aria-hidden="true" />
        <div className="flex min-h-16 flex-col gap-4 border-b border-border bg-navy-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[-0.02em] text-navy-900">Shital AI solution canvas</p>
              <p className="text-[0.64rem] uppercase tracking-[0.16em] text-navy-400">Illustrative business workflow</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[0.68rem] font-medium text-navy-500">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse-glow" />
            Explore a solution path
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr]">
          <div className="border-b border-border bg-navy-50 p-3 lg:border-b-0 lg:border-r lg:p-4">
            <p className="px-3 pb-3 pt-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-navy-400">Business area</p>
            <div className="grid grid-cols-3 gap-1 lg:grid-cols-1">
              {MODES.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={cn(
                    'group flex min-h-14 items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors duration-300',
                    active === index ? 'bg-primary text-white' : 'text-navy-600 hover:bg-white hover:text-navy-900'
                  )}
                >
                  <item.icon className={cn('h-4 w-4 shrink-0', active === index ? 'text-blue-300' : 'text-blue-700')} strokeWidth={1.8} />
                  <span className="hidden text-sm font-semibold sm:inline lg:inline">{item.label}</span>
                  <span className="text-[0.68rem] font-semibold sm:hidden">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="mx-3 mt-5 hidden border-t border-border pt-5 lg:block">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Start with the business friction. Shape the technology around it.
              </p>
            </div>
          </div>

          <div key={mode.label} className="grid min-h-[470px] animate-fade-in lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <span className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-blue-700">{mode.kicker}</span>
              <h3 className="mt-5 max-w-md text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] text-navy-900 sm:text-3xl">
                What should work better?
              </h3>
              <div className="mt-7 rounded-xl border border-border bg-navy-50 p-4 sm:p-5">
                <p className="text-sm leading-relaxed text-navy-700">{mode.prompt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-[0.64rem] uppercase tracking-[0.16em] text-navy-400">Business requirement</span>
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-900 text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <p className="mt-auto pt-8 text-xs leading-relaxed text-muted-foreground">
                This interactive view illustrates how a requirement can become a practical software, automation, or AI solution.
              </p>
            </div>

            <div className="relative overflow-hidden bg-navy-50/45 p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-fine-grid opacity-30" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-navy-400">Suggested system</p>
                    <p className="mt-1 text-sm font-semibold text-navy-900">A connected working flow</p>
                  </div>
                  <span className="rounded-md border border-blue-200 bg-white px-2.5 py-1 text-[0.62rem] font-semibold text-blue-800">Illustrative</span>
                </div>

                <div className="relative mt-8 space-y-3">
                  <span className="absolute bottom-7 left-[21px] top-7 w-px bg-blue-200" aria-hidden="true" />
                  {mode.steps.map((step, index) => (
                    <div key={step.label} className="group relative flex items-center gap-4 border border-border bg-white p-4 transition-transform duration-300 hover:translate-x-1">
                      <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700">
                        <step.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-navy-900">{step.label}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{step.detail}</p>
                      </div>
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-700">0{index + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-l-2 border-orange-400 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-900">
                    <Check className="h-4 w-4 text-blue-700" />
                    Business outcome
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{mode.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
