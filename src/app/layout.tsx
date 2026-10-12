// Force Vercel rebuild: 2026-10-09
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk as SpaceGrotesk, DM_Sans as DMSans, Playfair_Display as PlayfairDisplay } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

const dmSans = DMSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
});

const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
  preload: true,
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://therecherche.co.uk'),
  title: {
    default: 'The Recherche | Bespoke Fitted Wardrobes, Kitchens & Storage Solutions',
    template: '%s | The Recherche',
  },
  description: 'The Recherche creates bespoke fitted wardrobes, kitchens, sliding doors, and home storage solutions. Expert design, premium materials, and professional installation across the UK.',
  keywords: [
    'bespoke fitted wardrobes',
    'bespoke kitchens',
    'sliding wardrobe doors',
    'home storage solutions',
    'custom wardrobes UK',
    'walk-in wardrobes',
    'bedroom furniture',
    'kitchen design',
  ],
  authors: [{ name: 'The Recherche' }],
  creator: 'The Recherche',
  publisher: 'The Recherche',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://therecherche.co.uk',
    siteName: 'The Recherche',
    title: 'The Recherche | Bespoke Fitted Wardrobes, Kitchens & Storage Solutions',
    description: 'The Recherche creates bespoke fitted wardrobes, kitchens, sliding doors, and home storage solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Recherche - Bespoke Fitted Wardrobes & Kitchens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Recherche | Bespoke Fitted Wardrobes & Kitchens',
    description: 'Expert design, premium materials, and professional installation across the UK.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/favicon-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2edde' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1612' },
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
    <html lang="en-GB" className={`${spaceGrotesk.variable} ${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero-main.jpg" />
        <link rel="preload" as="image" href="/og-image.jpg" />
      </head>
      <body className="font-body antialiased bg-canvas text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}