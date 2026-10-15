import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp/floating-whatsapp';
import { SITE_URL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Shital AI LLP | Business Software & AI Solutions',
    template: '%s | Shital AI LLP',
  },
  description:
    'Shital AI LLP builds custom business software, AI solutions, and automation systems that help companies work smarter, operate efficiently, and grow.',
  keywords: [
    'business software',
    'AI solutions',
    'business automation',
    'custom software development',
    'AI services',
    'digital technology solutions',
    'machine learning',
    'software development company',
  ],
  authors: [{ name: 'Shital AI LLP' }],
  creator: 'Shital AI LLP',
  icons: {
    icon: '/images/brand/Company_logo_transparent.png',
    shortcut: '/images/brand/Company_logo_transparent.png',
    apple: '/images/brand/Company_logo_transparent.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Shital AI LLP',
    title: 'Shital AI LLP | Business Software & AI Solutions',
    description:
      'Shital AI LLP builds custom business software, AI solutions, and automation systems that help companies work smarter, operate efficiently, and grow.',
    images: [
      {
        url: '/images/brand/company_new_logo.jpeg',
        width: 1600,
        height: 900,
        alt: 'Shital AI LLP official logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shital AI LLP | Business Software & AI Solutions',
    description:
      'Shital AI LLP builds custom business software, AI solutions, and automation systems that help companies work smarter, operate efficiently, and grow.',
    images: ['/images/brand/company_new_logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fcfcfc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:rounded-lg focus:bg-navy-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
