import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "variable",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://therecherche.co.uk"),
  title: {
    default: "The Recherche | Bespoke Kitchens & Fitted Wardrobes London",
    template: "%s | The Recherche",
  },
  description: "Bespoke kitchens and fitted wardrobes, handcrafted in our London workshop. Made-to-measure joinery for kitchens, bedrooms, and living spaces. Free design visit.",
  keywords: ["bespoke kitchens", "fitted wardrobes", "made to measure", "London joinery", "custom wardrobes", "kitchen design"],
  authors: [{ name: "The Recherche" }],
  creator: "The Recherche",
  publisher: "The Recherche",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://therecherche.co.uk",
    siteName: "The Recherche",
    title: "The Recherche | Bespoke Kitchens & Fitted Wardrobes London",
    description: "Bespoke kitchens and fitted wardrobes, handcrafted in our London workshop. Made-to-measure joinery for kitchens, bedrooms, and living spaces.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "The Recherche - Bespoke Kitchens & Fitted Wardrobes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Recherche | Bespoke Kitchens & Fitted Wardrobes London",
    description: "Bespoke kitchens and fitted wardrobes, handcrafted in our London workshop.",
    images: ["/og-image.svg"],
  },
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col font-body text-charcoal bg-paper">
        <JsonLd type="Organization" />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}