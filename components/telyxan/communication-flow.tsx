import { Reveal } from '@/components/animations/reveal';
import { TELYXAN_CHANNELS } from '@/lib/content';
import { ArrowDown, Layers, ArrowRight } from 'lucide-react';

export function CommunicationFlow() {
  return (
    <Reveal className="w-full">
      <div className="rounded-xl border border-border/80 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8 lg:p-10">
        {/* Channels row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {TELYXAN_CHANNELS.map((channel) => (
            <div
              key={channel.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-border/80 bg-navy-50/60 px-3 py-5 text-center transition-colors hover:border-blue-400/50 hover:bg-blue-50/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <channel.icon className="h-5 w-5 text-blue-600" strokeWidth={1.8} />
              </div>
              <span className="text-xs font-bold text-navy-700 sm:text-sm">
                {channel.name}
              </span>
            </div>
          ))}
        </div>

        {/* Arrow down */}
        <div className="flex items-center justify-center py-4" aria-hidden="true">
          <ArrowDown className="h-6 w-6 text-blue-500" />
        </div>

        {/* Telyxan center */}
        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-xl bg-navy-900 px-6 py-5 text-center shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400 shadow-lg shadow-blue-400/20">
              <Layers className="h-6 w-6 text-navy-950" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Telyxan</p>
              <p className="text-xs text-navy-300">
                Unified Communication Platform
              </p>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex items-center justify-center py-4" aria-hidden="true">
          <ArrowDown className="h-6 w-6 text-blue-500" />
        </div>

        {/* Result */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2.5 rounded-xl border-2 border-blue-500 bg-blue-50 px-6 py-4">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 sm:text-base">
              Better Business Communication
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
