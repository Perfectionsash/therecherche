import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Bespoke Fitted Wardrobes',
  description: 'Custom-designed fitted wardrobes tailored to your space. Floor-to-ceiling storage, sliding doors, and premium finishes. Free design consultation.',
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bespoke Fitted Wardrobes',
  description: 'Custom-designed fitted wardrobes tailored to your space and style. Floor-to-ceiling storage maximising every inch.',
  brand: { '@type': 'Brand', name: 'The Recherche' },
  sku: 'TR-FW-001',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: '1500',
    highPrice: '15000',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'The Recherche' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '89' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do fitted wardrobes cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our fitted wardrobes typically range from £1,500 to £15,000+ depending on size, materials, and internal configuration. We provide a fixed price after your free design consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most fitted wardrobe installations are completed in 1-2 days by our professional fitting teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a guarantee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our fitted wardrobes come with a comprehensive 10-year guarantee on furniture and mechanisms.',
      },
    },
  ],
};

export default function FittedWardrobesPage() {
  return (
    <>
      <JsonLd data={[productSchema, faqSchema]} />
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="page-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Bespoke Fitted Wardrobes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-designed floor-to-ceiling wardrobes that maximise every inch of your space.
              From awkward corners to sloping ceilings, we create storage that fits perfectly.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <h2 id="features-heading" className="sr-only">Features</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">Designed Around You</h3>
                <p className="text-gray-600 mb-4">Every wardrobe is unique. Our designers create 3D visualisations showing exactly how your wardrobe will look in your space.</p>
                <p className="text-gray-600 mb-6">Choose from hundreds of door styles, finishes, and internal configurations including hanging rails, shelves, drawers, shoe racks, and accessory storage.</p>
                <a href="#quote" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                  Start Your Design <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <ul className="space-y-4" role="list">
                  {['Floor-to-ceiling design', 'Sliding or hinged doors', 'Mirrored, glass, or wood finishes', 'Integrated lighting options', 'Soft-close mechanisms', '10-year guarantee'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="quote" className="py-20 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Perfect Wardrobe?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Book a free design visit. We'll measure, design, and quote with no obligation.</p>
            <a href="/contact" className="inline-block bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Get Your Free Quote</a>
          </div>
        </section>
      </main>
    </>
  );
}