import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/solutions',
    '/ai-services',
    '/software-services',
    '/products',
    '/products/telyxan',
    '/industries',
    '/projects',
    '/projects/telyxan',
    '/projects/hotel-os',
    '/projects/nirantar',
    '/projects/voice-cloning',
    '/projects/ebook-generator',
    '/about',
    '/contact',
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1.0 : page === '/products/telyxan' ? 0.9 : 0.8,
  }));
}
