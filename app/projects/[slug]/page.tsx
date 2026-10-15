import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  EbookGeneratorExperience,
  HotelOSExperience,
  NirantarExperience,
  TelyxanExperience,
  VoiceCloningExperience,
} from '@/components/projects/project-experiences';
import { COMPANY_PROJECTS } from '@/lib/content';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COMPANY_PROJECTS.flatMap((project) => project.slug ? [{ slug: project.slug }] : []);
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = COMPANY_PROJECTS.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.name} Project`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.name} — Shital AI LLP`,
      description: project.description,
      url: `/projects/${slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = COMPANY_PROJECTS.find((item) => item.slug === slug);

  if (!project) notFound();

  switch (slug) {
    case 'telyxan':
      return <TelyxanExperience project={project} />;
    case 'hotel-os':
      return <HotelOSExperience project={project} />;
    case 'nirantar':
      return <NirantarExperience project={project} />;
    case 'voice-cloning':
      return <VoiceCloningExperience project={project} />;
    case 'ebook-generator':
      return <EbookGeneratorExperience project={project} />;
    default:
      notFound();
  }
}
