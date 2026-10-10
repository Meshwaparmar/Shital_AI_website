import {
  Code2,
  Brain,
  Workflow,
  Zap,
  Database,
  Gauge,
  Users,
  Link2,
  HelpCircle,
  Bot,
  MessageSquare,
  Sparkles,
  LineChart,
  Eye,
  Plug,
  Hotel,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Rocket,
  Building2,
  Search,
  ClipboardList,
  Hammer,
  TrendingUp,
  Monitor,
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Receipt,
  Server,
  FileText,
  Bell,
  Mail,
  Headphones,
  TableProperties,
  Smartphone,
  Send,
  AtSign,
  Radio,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'AI Services', href: '/ai-services' },
  { label: 'Software Services', href: '/software-services' },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Telyxan',
        href: '/products/telyxan',
        description: 'Omnichannel Communication Platform',
      },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const VALUE_STRIP = [
  { title: 'Custom Solutions', icon: Code2 },
  { title: 'AI-Powered', icon: Brain },
  { title: 'Business Focused', icon: Briefcase },
  { title: 'Scalable Technology', icon: TrendingUp },
] as const;

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export const WHAT_WE_DO: ServiceCard[] = [
  {
    icon: Code2,
    title: 'Business Software',
    description:
      'Custom software solutions designed around unique business workflows and operational needs.',
    href: '/software-services',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description:
      'Practical AI solutions that help businesses automate tasks, analyze information, and make better decisions.',
    href: '/ai-services',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description:
      'Connect processes, reduce repetitive work, and create smarter workflows with automation.',
    href: '/solutions',
  },
];

export interface ProblemItem {
  icon: LucideIcon;
  problem: string;
  solution: string;
}

export const PROBLEMS: ProblemItem[] = [
  {
    icon: Gauge,
    problem: 'Too Much Manual Work',
    solution: 'Automate repetitive processes and reduce unnecessary effort.',
  },
  {
    icon: Database,
    problem: 'Scattered Business Data',
    solution:
      'Bring important information together with centralized systems and dashboards.',
  },
  {
    icon: Zap,
    problem: 'Slow Operations',
    solution:
      'Build workflows that help teams work faster and more efficiently.',
  },
  {
    icon: Users,
    problem: 'Growing Customer Demands',
    solution: 'Use automation and AI to improve customer interactions.',
  },
  {
    icon: Link2,
    problem: 'Disconnected Systems',
    solution: 'Integrate the tools and platforms your business already uses.',
  },
  {
    icon: HelpCircle,
    problem: 'Need a Custom Solution?',
    solution: 'Build software specifically around your business.',
  },
];

export interface SoftwareService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SOFTWARE_SERVICES: SoftwareService[] = [
  {
    icon: Code2,
    title: 'Custom Business Software',
    description:
      'Tailored software built around your specific operational workflows and business logic.',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description:
      'Scalable web applications accessible from any device, built for real business use.',
  },
  {
    icon: LayoutDashboard,
    title: 'Business Management Systems',
    description:
      'Centralized platforms to manage operations, people, and processes in one place.',
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description:
      'Manage customer relationships, pipelines, and interactions with a system built for your sales process.',
  },
  {
    icon: Receipt,
    title: 'POS & Billing Systems',
    description:
      'Point-of-sale and billing systems designed for your transaction and inventory needs.',
  },
  {
    icon: Server,
    title: 'ERP-style Solutions',
    description:
      'Integrated resource planning systems that connect your business departments and data.',
  },
  {
    icon: Hammer,
    title: 'Internal Business Tools',
    description:
      'Custom internal tools that help your team work more efficiently and reduce manual effort.',
  },
  {
    icon: Monitor,
    title: 'Dashboards & Reporting',
    description:
      'Visual dashboards and reports that turn business data into clear, actionable insight.',
  },
  {
    icon: Plug,
    title: 'API Development',
    description:
      'Reliable APIs that connect your systems, services, and external platforms.',
  },
  {
    icon: Link2,
    title: 'System Integration',
    description:
      'Connect the tools and platforms your business already uses into one coherent system.',
  },
  {
    icon: Server,
    title: 'Cloud Applications',
    description:
      'Cloud-native applications designed for scalability, accessibility, and reliability.',
  },
];

export interface AIService {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  value: string;
}

export const AI_SERVICES: AIService[] = [
  {
    icon: Bot,
    title: 'AI Automation',
    problem:
      'Teams spend valuable hours on repetitive, manual tasks that slow down operations.',
    solution:
      'Automate repetitive and time-consuming business tasks with AI-driven workflows.',
    value:
      'Free your team to focus on work that actually grows the business while AI handles the routine.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    problem:
      'Customer and employee questions pile up, creating bottlenecks in response times.',
    solution:
      'Build intelligent customer and employee assistants that handle queries automatically.',
    value:
      'Provide instant, accurate responses around the clock without increasing headcount.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    problem:
      'Creating content, documents, and knowledge materials takes significant time and effort.',
    solution:
      'Use modern AI models for content, documents, knowledge systems, and workflows.',
    value:
      'Produce high-quality materials faster and build internal knowledge systems that work for your team.',
  },
  {
    icon: LineChart,
    title: 'Machine Learning',
    problem:
      'Business data holds valuable patterns, but they are hard to see and harder to act on.',
    solution:
      'Develop predictive and intelligent systems using your business data.',
    value:
      'Make better-informed decisions with predictions and insights grounded in your own data.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    problem:
      'Visual information from images and video is hard to process at scale manually.',
    solution:
      'Build AI systems that understand and analyze images and video.',
    value:
      'Automate visual inspection, monitoring, and analysis tasks that would be impractical to do by hand.',
  },
  {
    icon: Plug,
    title: 'AI Integration',
    problem:
      'Existing software works, but it does not leverage modern AI capabilities.',
    solution:
      'Bring AI capabilities into existing software and business workflows.',
    value:
      'Enhance the systems you already use with AI without starting over from scratch.',
  },
];

export interface AutomationExample {
  icon: LucideIcon;
  label: string;
}

export const AUTOMATION_EXAMPLES: AutomationExample[] = [
  { icon: FileText, label: 'Form Automation' },
  { icon: FileText, label: 'Document Processing' },
  { icon: Mail, label: 'Email Automation' },
  { icon: Headphones, label: 'Customer Support Automation' },
  { icon: TableProperties, label: 'Data Processing' },
  { icon: Monitor, label: 'Reporting' },
  { icon: Bell, label: 'Notifications' },
  { icon: Workflow, label: 'Internal Workflows' },
  { icon: Bot, label: 'AI-Assisted Operations' },
];

export const AUTOMATION_FLOW = [
  { label: 'Manual Process', description: 'Repetitive, time-consuming, error-prone' },
  { label: 'Automation', description: 'Streamlined and connected workflows' },
  { label: 'Intelligent Workflow', description: 'AI-enhanced decision-making' },
  { label: 'Better Business Operations', description: 'Faster, smarter, scalable' },
];

export interface IndustryCard {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const INDUSTRIES: IndustryCard[] = [
  {
    icon: Hotel,
    name: 'Hospitality',
    description:
      'Technology solutions for reservations, guest management, and operational efficiency.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description:
      'Point-of-sale, inventory, customer engagement, and e-commerce solutions.',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description:
      'Learning platforms, administration systems, and student engagement tools.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description:
      'Patient management, scheduling, and data organization solutions.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description:
      'Client management, project tracking, and operational software for service businesses.',
  },
  {
    icon: Rocket,
    name: 'Startups',
    description:
      'From MVP to scale — custom software and AI built for rapid growth.',
  },
  {
    icon: Building2,
    name: 'Small & Medium Businesses',
    description:
      'Practical technology that simplifies operations and supports growth.',
  },
  {
    icon: Building2,
    name: 'Enterprises',
    description:
      'Scalable systems, integrations, and AI for complex organizational needs.',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We understand your business, workflow and challenges.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We define the right technology, features and solution architecture.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We develop, integrate and test your solution.',
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Grow',
    description:
      'We help improve, maintain and scale the solution as your business grows.',
    icon: TrendingUp,
  },
];

export interface ValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_SHITAL: ValueCard[] = [
  {
    icon: Briefcase,
    title: 'Business First',
    description:
      'We focus on solving the actual business problem, not just building technology.',
  },
  {
    icon: Code2,
    title: 'Custom Solutions',
    description: 'Your business is unique. Your software should be too.',
  },
  {
    icon: Brain,
    title: 'AI Where It Makes Sense',
    description:
      'We use AI where it creates practical business value.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Technology',
    description: 'Solutions are designed with future growth in mind.',
  },
  {
    icon: Workflow,
    title: 'End-to-End Development',
    description:
      'From idea and architecture to development, deployment and improvement.',
  },
];

export interface SolutionCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    icon: Gauge,
    title: 'Improve Operations',
    description: 'Software + workflow automation to streamline how your business runs day to day.',
    tags: ['Business Software', 'Workflow Automation'],
  },
  {
    icon: Bot,
    title: 'Automate Repetitive Work',
    description: 'Automation + AI to reduce manual effort and free your team for higher-value work.',
    tags: ['AI Automation', 'Business Automation'],
  },
  {
    icon: Users,
    title: 'Improve Customer Experience',
    description: 'Web applications, chatbots, and AI assistants that make every interaction smoother.',
    tags: ['Web Applications', 'AI Chatbots', 'AI Assistants'],
  },
  {
    icon: LineChart,
    title: 'Understand Business Data',
    description: 'Dashboards, analytics, and AI that turn scattered data into clear decisions.',
    tags: ['Dashboards', 'Analytics', 'AI'],
  },
  {
    icon: Rocket,
    title: 'Build New Digital Products',
    description: 'Custom software and web applications to launch new digital offerings.',
    tags: ['Custom Software', 'Web Applications'],
  },
  {
    icon: Plug,
    title: 'Integrate Existing Systems',
    description: 'APIs and system integration to connect the tools your business already uses.',
    tags: ['APIs', 'System Integration'],
  },
];

export const INTERESTED_IN_OPTIONS = [
  'Business Software',
  'AI Solutions',
  'Business Automation',
  'Website / Web Application',
  'Custom Development',
  'API / Integration',
  'Other',
] as const;

export const BUSINESS_TYPES = [
  'Startup',
  'Small Business',
  'Medium Business',
  'Enterprise',
  'Other',
] as const;

export interface ChannelCard {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const TELYXAN_CHANNELS: ChannelCard[] = [
  {
    icon: Smartphone,
    name: 'WhatsApp Business API',
    description: 'Business communication through WhatsApp.',
  },
  {
    icon: MessageSquare,
    name: 'SMS',
    description: 'Reach customers through direct SMS communication.',
  },
  {
    icon: Mail,
    name: 'Email',
    description:
      'Professional email communication for business interactions and notifications.',
  },
  {
    icon: Send,
    name: 'Telegram',
    description: 'Extend business communication to Telegram.',
  },
];

export interface UseCase {
  icon: LucideIcon;
  label: string;
}

export const TELYXAN_USE_CASES: UseCase[] = [
  { icon: Bell, label: 'Customer notifications' },
  { icon: TrendingUp, label: 'Business updates' },
  { icon: FileText, label: 'Transactional communication' },
  { icon: Users, label: 'Customer engagement' },
  { icon: Radio, label: 'Marketing communication' },
  { icon: Bot, label: 'Automated business messages' },
  { icon: Link2, label: 'Multi-channel communication' },
  { icon: Code2, label: 'Software/API-based communication' },
];

export interface TelyxanBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TELYXAN_BENEFITS: TelyxanBenefit[] = [
  {
    icon: LayoutDashboard,
    title: 'Centralized Communication',
    description:
      'Keep multiple communication channels accessible through one platform.',
  },
  {
    icon: Radio,
    title: 'Multiple Channels',
    description:
      'Reach customers through the channels relevant to your business.',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'Connect communication with business workflows.',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description:
      'Designed to work with software systems and API-based workflows.',
  },
];

export interface ProductSummary {
  name: string;
  tagline: string;
  description: string;
  href: string;
  channels: string[];
  icon: LucideIcon;
}

export const PRODUCTS: ProductSummary[] = [
  {
    name: 'Telyxan',
    tagline: 'Omnichannel Communication Platform',
    description:
      'Connect WhatsApp Business API, SMS, Email and Telegram through a centralized communication platform.',
    href: '/products/telyxan',
    channels: ['WhatsApp', 'SMS', 'Email', 'Telegram'],
    icon: Send,
  },
];
