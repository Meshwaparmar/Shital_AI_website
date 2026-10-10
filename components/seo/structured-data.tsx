import { SITE_URL } from '@/lib/site';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shital AI LLP',
    description:
      'Shital AI LLP builds custom business software, AI solutions, and automation systems that help companies work smarter, operate efficiently, and grow.',
    url: SITE_URL,
    areaServed: 'Global',
    knowsAbout: [
      'Business Software',
      'AI Solutions',
      'Business Automation',
      'Custom Software Development',
      'Machine Learning',
      'Digital Technology Solutions',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Technology Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Shital AI LLP',
      url: SITE_URL,
    },
    description:
      'Custom business software, AI solutions, and business automation systems.',
    areaServed: 'Global',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
