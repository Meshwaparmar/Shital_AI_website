import { TELYXAN_CHANNELS } from '@/lib/content';
import { CheckCheck, Layers, Send } from 'lucide-react';

export function TelyxanHeroVisual() {
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-white shadow-[0_32px_90px_-58px_rgba(20,20,20,0.32)]">
        <div className="sarvam-spectrum absolute inset-y-0 left-0 z-20 w-1" aria-hidden="true" />
        <div className="flex items-center justify-between border-b border-border bg-navy-50/45 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-900 text-white">
              <Layers className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-900">Telyxan</p>
              <p className="text-[0.64rem] uppercase tracking-[0.15em] text-navy-400">Unified communication</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[0.65rem] font-semibold text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse-glow" />
            Connected
          </div>
        </div>

        <div className="grid min-h-[410px] sm:grid-cols-[0.72fr_1.28fr]">
          <div className="relative border-b border-border bg-navy-50/35 p-4 sm:border-b-0 sm:border-r sm:p-5">
            <div className="absolute inset-0 bg-fine-grid opacity-35" aria-hidden="true" />
            <p className="relative px-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-navy-400">Channels</p>
            <div className="relative mt-3 grid grid-cols-2 gap-2 sm:grid-cols-1">
              {TELYXAN_CHANNELS.map((channel, index) => (
                <div key={channel.name} className={`flex items-center gap-2.5 rounded-lg border px-3 py-3 transition-transform duration-300 hover:translate-x-1 ${index === 0 ? 'border-blue-300 bg-white shadow-sm' : 'border-border bg-white/75'}`}>
                  <channel.icon className="h-4 w-4 shrink-0 text-blue-700" strokeWidth={1.8} />
                  <span className="truncate text-xs font-semibold text-navy-700">{channel.name.replace(' Business API', '')}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-5 rounded-xl border border-dashed border-blue-300 bg-blue-50/70 p-3 text-[0.65rem] leading-relaxed text-blue-800">
              Messages follow one connected route into the illustrative workspace.
            </div>
          </div>

          <div className="relative flex flex-col p-5 sm:p-6">
            <div className="absolute inset-0 bg-fine-grid opacity-20" aria-hidden="true" />
            <div className="relative flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-xs font-bold text-navy-900">Customer conversation</p>
                <p className="mt-0.5 text-[0.65rem] text-navy-400">Illustrative platform view</p>
              </div>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[0.62rem] font-semibold text-blue-800">WhatsApp</span>
            </div>

            <div className="relative flex flex-1 flex-col justify-center gap-3 py-5">
              <Message side="left" text="Can you share an update on my request?" time="10:24" delay="-1s" />
              <Message side="right" text="Absolutely — your update is ready." time="10:25" delay="-2.6s" />
              <div className="mx-auto my-1 flex items-center gap-2 text-[0.62rem] text-navy-400">
                <span className="h-px w-8 bg-border" /> routed through one platform <span className="h-px w-8 bg-border" />
              </div>
              <Message side="left" text="Thank you." time="10:26" delay="-4.2s" />
            </div>

            <div className="relative flex items-center gap-2 rounded-xl border border-border bg-navy-50/60 p-2">
              <div className="flex-1 px-2 text-xs text-navy-400">Reply across the active channel…</div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-white">
                <Send className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({ side, text, time, delay }: { side: 'left' | 'right'; text: string; time: string; delay: string }) {
  return (
    <div className={`message-rise max-w-[88%] rounded-xl border px-3 py-2.5 text-xs leading-relaxed ${side === 'right' ? 'ml-auto border-blue-200 bg-blue-50 text-blue-950' : 'border-border bg-white text-navy-700 shadow-sm'}`} style={{ animationDelay: delay }}>
      <p>{text}</p>
      <span className="mt-1 flex items-center justify-end gap-1 text-[0.58rem] text-navy-400">{time}{side === 'right' && <CheckCheck className="h-3 w-3 text-blue-600" />}</span>
    </div>
  );
}
