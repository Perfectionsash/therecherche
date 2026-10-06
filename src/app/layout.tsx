import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://therecherche.co.uk'),
  title: {
    default: 'The Recherche | Bespoke Fitted Wardrobes & Storage Solutions',
    template: '%s | The Recherche',
  },
  description: 'The Recherche creates bespoke fitted wardrobes, sliding doors, and home storage solutions. Expert design, premium materials, and professional installation across the UK.',
  keywords: [
    'bespoke fitted wardrobes',
    'sliding wardrobe doors',
    'home storage solutions',
    'custom wardrobes UK',
    'walk-in wardrobes',
    'bedroom furniture',
  ],
  authors: [{ name: 'The Recherche' }],
  creator: 'The Recherche',
  publisher: 'The Recherche',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://therecherche.co.uk',
    siteName: 'The Recherche',
    title: 'The Recherche | Bespoke Fitted Wardrobes & Storage Solutions',
    description: 'The Recherche creates bespoke fitted wardrobes, sliding doors, and home storage solutions. Expert design, premium materials, and professional installation across the UK.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Recherche - Bespoke Fitted Wardrobes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Recherche | Bespoke Fitted Wardrobes',
    description: 'Expert design, premium materials, and professional installation across the UK.',
    images: ['/og-image.jpg'],
    creator: '@therecherche',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1d1d1f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="font-text antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}