import { AudioLines, BookOpen, Code2, Hotel, Send } from 'lucide-react';

interface ProjectMotionVisualProps {
  projectName: string;
}

function TelyxanMotion() {
  return (
    <div className="project-motion-stage project-motion-telyxan">
      <span className="project-motion-orbit project-motion-orbit-one" />
      <span className="project-motion-orbit project-motion-orbit-two" />
      <span className="project-motion-signal project-motion-signal-one" />
      <span className="project-motion-signal project-motion-signal-two" />
      <span className="project-motion-core"><Send className="h-5 w-5" /></span>
      <span className="project-motion-caption">Connected communication</span>
    </div>
  );
}

function HotelMotion() {
  return (
    <div className="project-motion-stage">
      <span className="project-motion-scan" />
      <div className="project-hotel-building">
        <span className="project-hotel-roof"><Hotel className="h-4 w-4" /></span>
        <div className="project-hotel-windows">
          {Array.from({ length: 12 }).map((_, index) => <span key={index} style={{ animationDelay: `${index * -0.18}s` }} />)}
        </div>
      </div>
      <span className="project-motion-caption">Hotel OS</span>
    </div>
  );
}

function NirantarMotion() {
  return (
    <div className="project-motion-stage project-code-stage">
      <Code2 className="absolute right-5 top-5 h-5 w-5 text-blue-500" />
      <div className="project-code-lines">
        <span className="w-[72%]" />
        <span className="w-[48%]" />
        <span className="w-[84%]" />
        <span className="w-[60%]" />
      </div>
      <span className="project-code-cursor" />
      <span className="project-motion-caption">Open source</span>
    </div>
  );
}

function VoiceMotion() {
  const bars = [38, 68, 48, 88, 58, 100, 64, 82, 44, 72, 36];
  return (
    <div className="project-motion-stage">
      <AudioLines className="absolute left-5 top-5 h-5 w-5 text-blue-500" />
      <div className="project-voice-wave">
        {bars.map((height, index) => <span key={`${height}-${index}`} style={{ height: `${height}%`, animationDelay: `${index * -0.12}s` }} />)}
      </div>
      <span className="project-motion-caption">Voice technology</span>
    </div>
  );
}

function EbookMotion() {
  return (
    <div className="project-motion-stage project-book-stage">
      <BookOpen className="absolute right-5 top-5 h-5 w-5 text-orange-500" />
      <div className="project-book">
        <span className="project-book-page project-book-page-back" />
        <span className="project-book-page project-book-page-front"><i /><i /><i /><i /></span>
        <span className="project-book-page project-book-page-turn"><i /><i /><i /></span>
      </div>
      <span className="project-motion-caption">Generative content</span>
    </div>
  );
}

export function ProjectMotionVisual({ projectName }: ProjectMotionVisualProps) {
  if (projectName === 'Telyxan') return <TelyxanMotion />;
  if (projectName === 'Hotel OS') return <HotelMotion />;
  if (projectName === 'Nirantar') return <NirantarMotion />;
  if (projectName === 'Voice Cloning') return <VoiceMotion />;
  return <EbookMotion />;
}
