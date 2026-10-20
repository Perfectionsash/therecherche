"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "Product";
  data?: Record<string, unknown>;
}

export function JsonLd({ type = "Organization", data = {} }: JsonLdProps) {
  const pathname = usePathname();

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "The Recherche",
    url: "https://therecherche.co.uk",
    logo: "https://therecherche.co.uk/og-image.jpg",
    description: "Bespoke kitchens and fitted wardrobes, handcrafted in our London workshop. Made-to-measure joinery for kitchens, bedrooms, and living spaces.",
    telephone: "+44-20-3561-0820",
    email: "info@therecherche.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Craven Terrace",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "W2 3QL",
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5155,
      longitude: -0.1756
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    priceRange: "££££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: "GB-LND",
    ...data
  };

  const localBusinessSchema = {
    ...baseSchema,
    "@type": "LocalBusiness",
    "@id": "https://therecherche.co.uk/#localbusiness",
    hasMap: "https://goo.gl/maps/placeholder",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47"
    }
  };

  const organizationSchema = {
    ...baseSchema,
    "@type": "Organization",
    "@id": "https://therecherche.co.uk/#organization",
    sameAs: [
      "https://www.instagram.com/therecherche",
      "https://www.facebook.com/therecherche",
      "https://www.pinterest.co.uk/therecherche",
      "https://www.houzz.co.uk/pro/therecherche"
    ],
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "James Mitchell"
    }
  };

  const schema = type === "LocalBusiness" ? localBusinessSchema : organizationSchema;

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="lazyOnload"
    />
  );
}

export function ProductJsonLd(productData: Record<string, unknown>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productData.name || "Bespoke Kitchen",
    description: productData.description || "Handcrafted bespoke kitchen",
    brand: {
      "@type": "Brand",
      name: "The Recherche"
    },
    manufacturer: {
      "@type": "Organization",
      name: "The Recherche",
      url: "https://therecherche.co.uk"
    },
    offers: {
      "@type": "Offer",
      url: productData.url || "https://therecherche.co.uk/contact",
      priceCurrency: "GBP",
      price: productData.price || "50000",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "The Recherche"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47"
    },
    ...productData
  };

  return (
    <Script
      id="product-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="lazyOnload"
    />
  );
}