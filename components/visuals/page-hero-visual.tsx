import {
  Blocks,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  Code2,
  Compass,
  Database,
  GitBranch,
  Layers3,
  MessageSquareText,
  Network,
  PackageOpen,
  Send,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type PageVisualVariant =
  | 'about'
  | 'ai'
  | 'software'
  | 'solutions'
  | 'industries'
  | 'products'
  | 'projects'
  | 'contact';

interface VisualDefinition {
  label: string;
  title: string;
  center: LucideIcon;
  nodes: { label: string; icon: LucideIcon }[];
  footer: string;
}

const VISUALS: Record<PageVisualVariant, VisualDefinition> = {
  about: {
    label: 'Company system',
    title: 'Business needs at the centre',
    center: Compass,
    nodes: [
      { label: 'Software', icon: Code2 },
      { label: 'AI', icon: BrainCircuit },
      { label: 'Automation', icon: Workflow },
    ],
    footer: 'Practical technology · designed around the work',
  },
  ai: {
    label: 'AI opportunity map',
    title: 'From signal to useful action',
    center: BrainCircuit,
    nodes: [
      { label: 'Understand', icon: Database },
      { label: 'Assist', icon: Bot },
      { label: 'Improve', icon: Sparkles },
    ],
    footer: 'Problem · fit · integration',
  },
  software: {
    label: 'Software architecture',
    title: 'One connected operating flow',
    center: Layers3,
    nodes: [
      { label: 'Interface', icon: Blocks },
      { label: 'Logic', icon: Code2 },
      { label: 'Data', icon: Database },
    ],
    footer: 'Workflow · system · visibility',
  },
  solutions: {
    label: 'Solution pathway',
    title: 'Challenge in. Better system out.',
    center: Workflow,
    nodes: [
      { label: 'Discover', icon: Compass },
      { label: 'Connect', icon: Network },
      { label: 'Deliver', icon: Sparkles },
    ],
    footer: 'Need · design · working solution',
  },
  industries: {
    label: 'Industry context',
    title: 'Different operations, shared foundations',
    center: Building2,
    nodes: [
      { label: 'People', icon: MessageSquareText },
      { label: 'Process', icon: Workflow },
      { label: 'Systems', icon: Boxes },
    ],
    footer: 'Context shapes every solution',
  },
  products: {
    label: 'Product studio',
    title: 'Built to become part of the work',
    center: PackageOpen,
    nodes: [
      { label: 'Product', icon: Blocks },
      { label: 'Connect', icon: Network },
      { label: 'Evolve', icon: GitBranch },
    ],
    footer: 'Focused products · practical use',
  },
  projects: {
    label: 'Project portfolio',
    title: 'Five directions. One practical focus.',
    center: Boxes,
    nodes: [
      { label: 'Business', icon: Building2 },
      { label: 'Open source', icon: GitBranch },
      { label: 'AI', icon: BrainCircuit },
    ],
    footer: 'Verified information only',
  },
  contact: {
    label: 'Conversation flow',
    title: 'A useful project starts with context',
    center: MessageSquareText,
    nodes: [
      { label: 'Requirement', icon: Compass },
      { label: 'Discussion', icon: Send },
      { label: 'Next step', icon: Workflow },
    ],
    footer: 'Your context · a considered response',
  },
};

const nodePositions = [
  'left-[7%] top-[18%]',
  'right-[6%] top-[23%]',
  'bottom-[12%] left-[16%]',
];

export function PageHeroVisual({ variant }: { variant: PageVisualVariant }) {
  const visual = VISUALS[variant];
  const CenterIcon = visual.center;

  return (
    <div className={`page-hero-visual page-hero-visual--${variant}`} aria-label={`${visual.label}: ${visual.title}`} role="img">
      <div className="page-hero-visual__grid" aria-hidden="true" />
      <div className="relative z-10 flex items-center justify-between border-b border-navy-900/10 px-4 py-3 sm:px-5">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-navy-500">{visual.label}</span>
        <span className="flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-blue-700">
          <i className="page-hero-visual__live h-1.5 w-1.5 rounded-full bg-blue-600" />Visual map
        </span>
      </div>

      <div className="relative z-10 min-h-[255px] overflow-hidden sm:min-h-[285px]">
        <div className="page-hero-visual__orbit" aria-hidden="true" />
        <div className="page-hero-visual__orbit page-hero-visual__orbit--inner" aria-hidden="true" />
        <div className="page-hero-visual__core">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-white shadow-xl shadow-navy-900/20">
            <CenterIcon className="h-5 w-5" strokeWidth={1.7} />
          </span>
          <strong className="mt-3 max-w-[11rem] text-center text-sm leading-tight text-navy-900">{visual.title}</strong>
        </div>

        {visual.nodes.map((node, index) => (
          <div key={node.label} className={`page-hero-visual__node ${nodePositions[index]}`} style={{ animationDelay: `${index * -1.1}s` }}>
            <node.icon className="h-3.5 w-3.5 text-blue-700" strokeWidth={1.8} />
            <span>{node.label}</span>
          </div>
        ))}

        <span className="page-hero-visual__signal page-hero-visual__signal--one" aria-hidden="true" />
        <span className="page-hero-visual__signal page-hero-visual__signal--two" aria-hidden="true" />
        <span className="page-hero-visual__signal page-hero-visual__signal--three" aria-hidden="true" />
      </div>

      <div className="relative z-10 border-t border-navy-900/10 bg-white/55 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-navy-500 backdrop-blur-sm sm:px-5">
        {visual.footer}
      </div>
    </div>
  );
}
