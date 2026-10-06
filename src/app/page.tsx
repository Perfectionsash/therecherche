import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Bespoke Fitted Wardrobes & Storage Solutions',
  description: 'The Recherche creates bespoke fitted wardrobes, sliding doors, and home storage solutions. Expert design, premium materials, and professional installation across the UK.',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Recherche',
  url: 'https://therecherche.co.uk',
  logo: 'https://therecherche.co.uk/logo.png',
  sameAs: [
    'https://www.facebook.com/therecherche',
    'https://www.instagram.com/therecherche',
    'https://www.linkedin.com/company/therecherche',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-XXX-XXXXXX',
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: 'GB',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Recherche',
  image: 'https://therecherche.co.uk/logo.png',
  '@id': 'https://therecherche.co.uk',
  url: 'https://therecherche.co.uk',
  telephone: '+44-XXX-XXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Design Street',
    addressLocality: 'London',
    addressRegion: 'England',
    postalCode: 'SW1A 1AA',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5074,
    longitude: -0.1278,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '£££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: 'GB',
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bespoke Fitted Wardrobes',
  description: 'Custom-designed fitted wardrobes tailored to your space and style.',
  brand: {
    '@type': 'Brand',
    name: 'The Recherche',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: '1500',
    highPrice: '15000',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'The Recherche',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema, localBusinessSchema, productSchema]} />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}