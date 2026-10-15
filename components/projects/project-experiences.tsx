import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Building2,
  CheckCircle2,
  CircleAlert,
  Code2,
  FileQuestion,
  GitBranch,
  Hotel,
  Mail,
  MessageSquare,
  Radio,
  Send,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { DigitalContentTablet } from '@/components/projects/digital-content-tablet';
import { ProjectEditorialImage } from '@/components/projects/project-editorial-image';
import { ProjectMotionVisual } from '@/components/projects/project-motion-visual';
import { TELYXAN_BENEFITS, TELYXAN_CHANNELS, type CompanyProject } from '@/lib/content';

interface ProjectExperienceProps {
  project: CompanyProject;
}

function Breadcrumb({ name, light = false }: { name: string; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${light ? 'text-blue-200/80' : 'text-navy-500'}`}>
      <Link href="/projects" className="transition-colors hover:text-blue-500">Projects</Link>
      <ArrowRight className="h-3.5 w-3.5" />
      <span aria-current="page">{name}</span>
    </nav>
  );
}

function ProjectFooterCTA({ title, light = false }: { title: string; light?: boolean }) {
  return (
    <section className={light ? 'border-t border-white/10 bg-navy-950 py-20 text-white' : 'border-t border-border bg-sarvam-cta py-20'}>
      <div className="section-shell text-center">
        <Reveal>
          <h2 className={`display-title mx-auto max-w-3xl text-balance text-4xl sm:text-5xl ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
          <p className={`mx-auto mt-5 max-w-xl text-sm leading-relaxed sm:text-base ${light ? 'text-blue-100/70' : 'text-muted-foreground'}`}>Talk with Shital AI LLP about this project or explore the complete project portfolio.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/projects" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${light ? 'border-white/20 bg-white/[0.05] text-white hover:bg-white/10' : 'border-border bg-white text-navy-900 hover:shadow-lg'}`}><ArrowLeft className="h-4 w-4" /> All Projects</Link>
            <Link href="/contact" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${light ? 'bg-blue-300 text-navy-950 hover:bg-blue-200' : 'bg-navy-900 text-white hover:shadow-xl'}`}>Start a Conversation <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VerificationCard({ title, children, dark = false }: { title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`border-l-2 p-5 ${dark ? 'border-blue-300 bg-white/[0.05]' : 'border-blue-500 bg-blue-50/70'}`}>
      <h3 className={`text-sm font-bold ${dark ? 'text-white' : 'text-navy-900'}`}>{title}</h3>
      <p className={`mt-1 text-sm leading-relaxed ${dark ? 'text-blue-100/65' : 'text-muted-foreground'}`}>{children}</p>
    </div>
  );
}

export function TelyxanExperience({ project }: ProjectExperienceProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-light-mesh pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 bg-fine-grid opacity-35" aria-hidden="true" />
        <div className="absolute -right-40 top-8 h-[32rem] w-[32rem] rounded-full bg-blue-300/25 blur-[110px]" aria-hidden="true" />
        <div className="relative section-shell grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Breadcrumb name={project.name} />
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-700 shadow-sm"><CheckCircle2 className="h-4 w-4" /> Official Shital AI LLP product</span>
            <h1 className="display-title mt-7 text-balance text-5xl leading-[0.96] text-navy-900 sm:text-6xl lg:text-7xl">Business communication, connected.</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Telyxan brings WhatsApp Business API, SMS, email, and Telegram communication into a centralized business platform.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://www.telyxan.com/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl">Visit Telyxan <ArrowUpRight className="h-4 w-4" /></a>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:shadow-lg">Discuss Integration</Link>
            </div>
          </Reveal>
          <Reveal delay={140} direction="scale">
            <div className="relative rounded-2xl border border-white bg-white/80 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-7">
              <div className="mb-4 flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.14em] text-navy-400"><span>Communication network</span><span className="flex items-center gap-1.5 text-blue-700"><i className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse-glow" /> Live product</span></div>
              <ProjectMotionVisual projectName="Telyxan" />
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {TELYXAN_CHANNELS.map((channel) => <div key={channel.name} className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold text-navy-700"><channel.icon className="h-4 w-4 text-blue-600" />{channel.name.replace(' Business API', '')}</div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="section-shell">
          <Reveal><span className="eyebrow">Verified capabilities</span><h2 className="display-title mt-6 max-w-3xl text-balance text-4xl text-navy-900 sm:text-5xl">One platform for business communication channels.</h2></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TELYXAN_BENEFITS.map((benefit, index) => <Reveal key={benefit.title} delay={index * 70} className="h-full"><article className="group h-full rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"><span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-900 text-white transition-colors group-hover:bg-blue-700"><benefit.icon className="h-5 w-5" /></span><h3 className="mt-5 font-bold text-navy-900">{benefit.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-blue-50/60 py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal><span className="eyebrow">Integration model</span><h2 className="display-title mt-6 text-4xl text-navy-900 sm:text-5xl">Communication that connects with software workflows.</h2><p className="mt-5 max-w-xl text-muted-foreground">Telyxan is designed for API-based communication and software integration. Specific account configuration and delivery capabilities depend on the verified Telyxan service setup.</p></Reveal>
          <Reveal delay={100} direction="scale"><div className="rounded-xl border border-border bg-white p-6 shadow-lg"><div className="flex items-center gap-3 rounded-lg bg-navy-900 p-4 text-white"><Building2 className="h-5 w-5" /><span className="text-sm font-semibold">Business software</span></div><div className="mx-auto h-8 w-px bg-blue-300" /><div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4"><Workflow className="h-5 w-5 text-blue-700" /><span className="text-sm font-semibold text-navy-900">Telyxan communication layer</span></div><div className="mx-auto h-8 w-px bg-blue-300" /><div className="grid grid-cols-4 gap-2">{[Smartphone, MessageSquare, Mail, Send].map((Icon, index) => <span key={index} className="grid h-12 place-items-center rounded-lg border border-border bg-white"><Icon className="h-4 w-4 text-blue-700" /></span>)}</div></div></Reveal>
        </div>
      </section>
      <ProjectFooterCTA title="Connect your business communication with Telyxan." />
    </>
  );
}

export function HotelOSExperience({ project }: ProjectExperienceProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f2e9] pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-44">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(180deg,rgba(244,162,76,0.18),transparent)]" aria-hidden="true" />
        <div className="relative section-shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal><Breadcrumb name={project.name} /><p className="mt-9 text-xs font-bold uppercase tracking-[0.18em] text-orange-800">Hospitality technology concept</p><h1 className="display-title mt-5 text-balance text-5xl leading-[0.98] text-navy-900 sm:text-6xl lg:text-7xl">Hotel operations, thoughtfully organized.</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">Hotel OS is identified as a hotel operations and management software project. Detailed modules and production status have not yet been documented in this repository.</p></Reveal>
          <Reveal delay={140} direction="scale"><div className="relative rounded-t-[5rem] border border-orange-200 bg-white/80 p-7 shadow-2xl shadow-orange-900/10"><div className="mb-4 flex items-center justify-between"><span className="flex items-center gap-2 text-sm font-bold text-navy-900"><Hotel className="h-5 w-5 text-orange-700" /> Hotel OS</span><span className="text-[0.6rem] font-bold uppercase tracking-wider text-orange-800">Illustrative motion study</span></div><ProjectMotionVisual projectName="Hotel OS" /><p className="mt-4 text-xs leading-relaxed text-muted-foreground">Decorative visualization—not a product screenshot or representation of unverified modules.</p></div></Reveal>
        </div>
      </section>
      <section className="border-y border-orange-100 bg-[#fffdf9] py-24 lg:py-32">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <Reveal><span className="eyebrow">Verified scope</span><h2 className="display-title mt-6 text-4xl text-navy-900 sm:text-5xl">A hospitality software project at the documentation stage.</h2></Reveal>
            <div className="mt-9 grid gap-4">
              <Reveal delay={70}><VerificationCard title="What is confirmed">Hotel OS is a hotel operations and management software project from Shital AI LLP.</VerificationCard></Reveal>
              <Reveal delay={140}><VerificationCard title="What is not yet confirmed">The repository does not document booking, occupancy, room, billing, housekeeping, or reporting modules, so this page does not claim them.</VerificationCard></Reveal>
              <Reveal delay={210}><VerificationCard title="What is needed next">Verified product documentation, genuine interface captures, technology details, deployment status, and an approved public destination.</VerificationCard></Reveal>
            </div>
          </div>
          <ProjectEditorialImage
            src="/images/projects/hotel-os-hospitality.webp"
            alt="A warm hotel room with seating, a work desk, and soft lighting"
            label="Hospitality context"
            credit="Antonio Araujo"
            creditUrl="https://unsplash.com/photos/a-well-lit-hotel-room-with-seating-and-a-desk-xQbmc2FnK3Y"
            disclosure="Illustrative hospitality photography — not a product screen or customer property."
            objectPosition="center 58%"
            variant="hotel"
            direction="right"
          />
        </div>
      </section>
      <section className="bg-navy-900 py-24 text-white"><div className="section-shell grid items-center gap-12 lg:grid-cols-2"><Reveal><p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Design language</p><h2 className="display-title mt-5 text-4xl text-white sm:text-5xl">Calm, operational, hospitality-led.</h2><p className="mt-5 max-w-xl text-blue-100/65">The visual system uses warm architectural forms and measured motion without presenting speculative dashboard features as real functionality.</p></Reveal><Reveal delay={100}><div className="grid grid-cols-3 gap-3" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <span key={index} className="hotel-detail-window h-20 rounded-lg border border-white/10 bg-white/[0.04]" style={{ animationDelay: `${index * -0.3}s` }} />)}</div></Reveal></div></section>
      <ProjectFooterCTA title="Shape the verified Hotel OS story with us." />
    </>
  );
}

export function NirantarExperience({ project }: ProjectExperienceProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0d14] pb-24 pt-32 text-white sm:pt-36 lg:pb-32 lg:pt-44"><div className="project-terminal-grid absolute inset-0 opacity-30" aria-hidden="true" /><div className="relative section-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]"><Reveal><Breadcrumb name={project.name} light /><span className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300"><Braces className="h-4 w-4" /> Open-source project</span><h1 className="display-title mt-6 text-balance text-6xl text-white sm:text-7xl">Nirantar<span className="text-blue-400">_</span></h1><p className="mt-6 max-w-xl text-base leading-relaxed text-blue-100/65 sm:text-lg">Nirantar is identified as an open-source Shital AI LLP project. Its repository, purpose, stack, license, and current status are not yet verified.</p></Reveal><Reveal delay={140} direction="scale"><div className="overflow-hidden rounded-xl border border-white/10 bg-black/35 shadow-2xl"><div className="flex items-center gap-2 border-b border-white/10 px-4 py-3"><i className="h-2.5 w-2.5 rounded-full bg-orange-400" /><i className="h-2.5 w-2.5 rounded-full bg-blue-400" /><i className="h-2.5 w-2.5 rounded-full bg-white/30" /><span className="ml-2 text-[0.65rem] text-blue-100/45">nirantar / project-manifest</span></div><div className="space-y-3 p-6 font-mono text-sm"><p className="text-blue-300"><span className="text-white/35">01</span> project: <span className="text-white">Nirantar</span></p><p className="text-blue-300"><span className="text-white/35">02</span> visibility: <span className="text-orange-300">open-source</span></p><p className="text-blue-300"><span className="text-white/35">03</span> repository: <span className="text-white/45">awaiting verification</span></p><p className="text-blue-300"><span className="text-white/35">04</span> license: <span className="text-white/45">not documented</span></p><p className="text-blue-300"><span className="text-white/35">05</span> stack: <span className="text-white/45">not documented</span><i className="project-terminal-cursor ml-1 inline-block h-4 w-1.5 bg-blue-300 align-middle" /></p></div></div></Reveal></div></section>
      <section className="bg-[#10131c] py-24 text-white lg:py-32">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <ProjectEditorialImage
            src="/images/projects/nirantar-development.webp"
            alt="A developer working at a multi-monitor programming workstation"
            label="Open-source development"
            credit="Abu Saeid"
            creditUrl="https://unsplash.com/photos/a-man-sitting-in-front-of-three-computer-monitors-fdGTi4IcaJc"
            disclosure="Illustrative developer photography — not the Nirantar team, repository, or interface."
            objectPosition="center 42%"
            variant="nirantar"
            direction="left"
          />
          <div>
            <Reveal><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Open-source transparency</p><h2 className="display-title mt-5 max-w-3xl text-4xl text-white sm:text-5xl">Technical detail belongs here only when it is verifiable.</h2></Reveal>
            <div className="mt-9 grid gap-4">{[{ icon: GitBranch, title: 'Repository', copy: 'No verified public repository URL is available.' },{ icon: Code2, title: 'Technology stack', copy: 'Languages, frameworks, and architecture are not documented.' },{ icon: FileQuestion, title: 'License & contribution', copy: 'License and contribution guidance await project documentation.' }].map((item, index) => <Reveal key={item.title} delay={index * 80}><article className="group h-full rounded-xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.06] focus-within:border-blue-400/40"><div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.05] transition-transform duration-300 group-hover:-translate-y-0.5"><item.icon className="h-5 w-5 text-blue-300" /></span><div><h3 className="font-bold text-white">{item.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-blue-100/55">{item.copy}</p></div></div></article></Reveal>)}</div>
          </div>
        </div>
      </section>
      <ProjectFooterCTA title="Help complete Nirantar’s verified open-source profile." light />
    </>
  );
}

export function VoiceCloningExperience({ project }: ProjectExperienceProps) {
  const wave = [34, 52, 78, 46, 92, 61, 100, 72, 43, 84, 58, 96, 54, 76, 38, 64, 48];
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-32 text-white sm:pt-36 lg:min-h-[760px] lg:pb-32 lg:pt-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(62,91,210,0.3),transparent_38%)]" aria-hidden="true" /><div className="relative section-shell grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]"><Reveal><Breadcrumb name={project.name} light /><p className="mt-9 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Artificial intelligence · voice technology</p><h1 className="display-title mt-6 text-balance text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">Voice, explored through AI.</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-blue-100/65 sm:text-lg">This project is identified as AI-based voice technology. The available materials do not verify its cloning workflow, supported inputs, outputs, languages, latency, or deployment status.</p></Reveal><Reveal delay={140} direction="scale"><div className="voice-detail-visual rounded-full border border-white/10 bg-white/[0.035] p-8 shadow-[0_0_100px_rgba(78,108,242,0.2)]"><div className="flex h-64 items-center justify-center gap-2" aria-hidden="true">{wave.map((height, index) => <span key={`${height}-${index}`} className="voice-detail-bar w-1.5 rounded-full bg-[linear-gradient(to_top,#4866dd,#ffad5b)]" style={{ height: `${height}%`, animationDelay: `${index * -0.1}s` }} />)}</div><p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-blue-200/60">Illustrative waveform · no audio demo</p></div></Reveal></div></section>
      <section className="border-b border-border bg-[#f7f8fc] py-24 lg:py-32">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <Reveal><span className="eyebrow">Verified boundary</span><h2 className="display-title mt-6 text-4xl text-navy-900 sm:text-5xl">An immersive presentation without invented capability.</h2><p className="mt-5 max-w-xl text-muted-foreground">No sample playback, real-time claim, multilingual claim, or commercial-readiness claim is shown because the current repository does not substantiate them.</p></Reveal>
            <div className="mt-9 space-y-4"><Reveal delay={90}><VerificationCard title="Known">The project concerns artificial intelligence and voice technology.</VerificationCard></Reveal><Reveal delay={170}><VerificationCard title="Awaiting verification">Model architecture, recording requirements, output formats, supported languages, quality controls, and current availability.</VerificationCard></Reveal></div>
          </div>
          <ProjectEditorialImage
            src="/images/projects/voice-recording.webp"
            alt="A professional studio microphone prepared for voice recording"
            label="Voice recording context"
            credit="Gabriel Weyand"
            creditUrl="https://unsplash.com/photos/a-professional-microphone-in-a-recording-studio-lwR2vJy1zgs"
            disclosure="Illustrative recording equipment — not a Voice Cloning demo or product interface."
            objectPosition="center 46%"
            variant="voice"
            direction="right"
          />
        </div>
      </section>
      <section className="border-y border-border bg-blue-50/60 py-24"><div className="section-shell grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]"><Reveal><ShieldCheck className="h-9 w-9 text-blue-700" /><h2 className="display-title mt-6 text-4xl text-navy-900">Authorized voices only.</h2></Reveal><Reveal delay={100}><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-xl border border-border bg-white p-6"><h3 className="font-bold text-navy-900">Consent-first use</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Voice technology should use recordings only with clear authorization from the speaker or rights holder.</p></div><div className="rounded-xl border border-border bg-white p-6"><h3 className="font-bold text-navy-900">Transparent deployment</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Any future demonstration should identify synthetic audio and document safeguards before public use.</p></div></div></Reveal></div></section>
      <ProjectFooterCTA title="Explore responsible voice technology with Shital AI LLP." light />
    </>
  );
}

export function EbookGeneratorExperience({ project }: ProjectExperienceProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fbf7ee] pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-44"><div className="absolute inset-y-0 left-1/2 w-px bg-orange-200/60" aria-hidden="true" /><div className="relative section-shell grid items-center gap-16 lg:grid-cols-2"><Reveal><Breadcrumb name={project.name} /><p className="mt-9 font-serif text-lg italic text-orange-800">Generative AI · Content creation</p><h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.96] tracking-[-0.045em] text-navy-900 sm:text-6xl lg:text-7xl">From an idea to a book-shaped experience.</h1><p className="mt-7 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">E-book Generator is identified as an AI-powered e-book creation project. Its supported inputs, generation workflow, editing tools, and export formats are not yet documented.</p></Reveal><Reveal delay={140} direction="scale"><div className="ebook-detail-scene relative mx-auto h-[27rem] max-w-md" aria-hidden="true"><span className="ebook-cover ebook-cover-back">SHITAL AI<span>GENERATOR</span></span><span className="ebook-cover ebook-cover-middle">DRAFT<span>02</span></span><span className="ebook-cover ebook-cover-front"><BookOpen className="h-9 w-9" /><strong>Ideas,<br />structured.</strong><small>Illustrative cover study</small></span><i className="ebook-floating-line ebook-line-one" /><i className="ebook-floating-line ebook-line-two" /><i className="ebook-floating-line ebook-line-three" /></div><p className="text-center text-xs text-muted-foreground">Illustrative motion composition—not a generated sample or product interface.</p></Reveal></div></section>
      <section className="border-b border-orange-100 bg-[#fbf7ee] pb-24">
        <div className="section-shell">
          <DigitalContentTablet />
        </div>
      </section>
      <section className="py-24 lg:py-32"><div className="section-shell"><Reveal><span className="eyebrow">Editorial workflow</span><h2 className="display-title mt-6 max-w-3xl text-balance text-4xl text-navy-900 sm:text-5xl">The project direction is known. The workflow still needs evidence.</h2></Reveal><div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">{[{ number: '01', title: 'Input', copy: 'Supported source formats and prompt structure are awaiting verification.' },{ number: '02', title: 'Generation', copy: 'Generation stages, editing controls, and model behavior are not documented.' },{ number: '03', title: 'Output', copy: 'No PDF, EPUB, DOCX, or other export format is claimed without evidence.' }].map((step, index) => <Reveal key={step.number} delay={index * 80} className="h-full"><article className="h-full bg-white p-7"><span className="font-serif text-4xl italic text-orange-300">{step.number}</span><h3 className="mt-7 text-lg font-bold text-navy-900">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.copy}</p></article></Reveal>)}</div></div></section>
      <section className="bg-navy-900 py-24 text-white"><div className="section-shell grid items-center gap-12 lg:grid-cols-2"><Reveal><Radio className="h-8 w-8 text-orange-300" /><h2 className="display-title mt-6 text-4xl text-white sm:text-5xl">Designed like a publishing experience.</h2><p className="mt-5 max-w-xl text-blue-100/60">Editorial typography, measured page motion, and a restrained paper-inspired palette give this page its own identity without presenting fictional output.</p></Reveal><Reveal delay={100}><div className="rounded-xl border border-white/10 bg-white/[0.04] p-6"><div className="flex items-start gap-4"><CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><div><h3 className="font-bold text-white">Sample required</h3><p className="mt-2 text-sm leading-relaxed text-blue-100/55">A genuine generated book, verified workflow capture, and confirmed export documentation are needed before an interactive demo or sample gallery can be added.</p></div></div></div></Reveal></div></section>
      <ProjectFooterCTA title="Turn the verified E-book Generator workflow into a complete showcase." />
    </>
  );
}
