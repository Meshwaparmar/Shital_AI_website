import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://shitalai.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#fcfcfc',
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
        url: '/images/brand/Company_logo_transparent.png',
        width: 981,
        height: 202,
        alt: 'Shital AI LLP official logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shital AI LLP | Business Software & AI Solutions',
    description:
      'Shital AI LLP builds custom business software, AI solutions, and automation systems that help companies work smarter, operate efficiently, and grow.',
    images: ['/images/brand/Company_logo_transparent.png'],
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
      </body>
    </html>
  );
}
