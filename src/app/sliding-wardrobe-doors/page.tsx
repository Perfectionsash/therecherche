import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Sliding Wardrobe Doors',
  description: 'Custom sliding wardrobe doors in mirrored, glass, wood, and bespoke finishes. Smooth-gliding, space-saving solutions. Free design consultation.',
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Sliding Wardrobe Doors',
  description: 'Smooth-gliding sliding doors in a range of finishes including mirrored, glass, wood, and custom colours.',
  brand: { '@type': 'Brand', name: 'The Recherche' },
  sku: 'TR-SWD-001',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: '800',
    highPrice: '5000',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'The Recherche' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '67' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do sliding doors need a bottom track?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer both top-hung (no bottom track) and bottom-rolling systems. Top-hung gives a cleaner look with no floor obstruction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you match existing doors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can match finishes, colours, and styles to your existing bedroom furniture for a seamless look.',
      },
    },
    {
      '@type': 'Question',
      name: 'What finishes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mirrored, clear/frosted/tinted glass, wood veneers, high-gloss/matt lacquer, and custom RAL colours.',
      },
    },
  ],
};

export default function SlidingDoorsPage() {
  return (
    <>
      <JsonLd data={[productSchema, faqSchema]} />
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="page-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Sliding Wardrobe Doors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Space-saving, smooth-gliding doors in mirrored, glass, wood, and bespoke finishes.
              Perfect for any bedroom, hallway, or awkward space.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="finishes-heading">
          <div className="container mx-auto px-4">
            <h2 id="finishes-heading" className="font-display text-3xl font-bold text-gray-900 text-center mb-12">Finishes & Styles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Mirrored', 'Glass (Clear/Frosted)', 'Wood Veneer', 'High-Gloss Lacquer', 'Matt Lacquer', 'Custom RAL Colour', 'Textured Finish', 'Mixed Materials'].map((finish, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all text-center">
                  <h3 className="font-semibold text-gray-900">{finish}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <h2 id="benefits-heading" className="font-display text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Sliding Doors?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Space Saving', desc: 'No swing clearance needed — ideal for tight spaces and rooms with furniture near the wardrobe.' },
                { title: 'Smooth Operation', desc: 'Premium German-engineered runners with soft-close as standard. 10-year mechanism guarantee.' },
                { title: 'Custom Sizing', desc: 'Made to exact millimetre measurements. Floor-to-ceiling, wall-to-wall, or custom apertures.' },
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="quote" className="py-20 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Design Your Sliding Doors</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Free home consultation with 3D visualisation and fixed quote.</p>
            <a href="/contact" className="inline-block bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Get Your Free Quote</a>
          </div>
        </section>
      </main>
    </>
  );
}