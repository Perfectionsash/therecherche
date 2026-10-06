import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Walk-In Wardrobes',
  description: 'Luxury bespoke walk-in wardrobes with islands, lighting, and accessory storage. Designed around your lifestyle. Free 3D design consultation.',
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Walk-In Wardrobes',
  description: 'Luxury walk-in wardrobes designed around your lifestyle. Islands, lighting, accessories storage, and more.',
  brand: { '@type': 'Brand', name: 'The Recherche' },
  sku: 'TR-WIW-001',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: '5000',
    highPrice: '30000',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'The Recherche' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '34' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much space do I need for a walk-in wardrobe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimum 1.5m x 2m for a functional walk-in. We can work with awkward shapes, sloping ceilings, and small spaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'What accessories can you include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pull-out shoe racks, jewellery drawers, tie/belt racks, trouser racks, laundry baskets, safe boxes, and integrated dressing tables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you include lighting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — LED strip lighting, sensor-activated spots, illuminated hanging rails, and ambient lighting are all available.',
      },
    },
  ],
};

export default function WalkInWardrobesPage() {
  return (
    <>
      <JsonLd data={[productSchema, faqSchema]} />
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="page-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Walk-In Wardrobes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury dressing rooms designed around your lifestyle. Islands, lighting, accessories storage, and more.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <h2 id="features-heading" className="font-display text-3xl font-bold text-gray-900 text-center mb-12">Features & Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Centre Islands', desc: 'Storage drawers, jewellery trays, glass tops, integrated seating' },
                { title: 'Smart Lighting', desc: 'Motion sensors, LED strips, colour temperature control, dimmable' },
                { title: 'Shoe Storage', desc: 'Angled shelves, pull-out racks, boot storage, display lighting' },
                { title: 'Accessory Storage', desc: 'Watch winders, tie/belt racks, scarf organisers, safe boxes' },
                { title: 'Seating', desc: 'Upholstered ottomans, built-in benches, vanity stools' },
                { title: 'Mirrors', desc: 'Full-length, illuminated, anti-fog, tri-fold, sliding panels' },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <h2 id="process-heading" className="font-display text-3xl font-bold text-gray-900 text-center mb-12">Our Design Process</h2>
            <ol className="max-w-4xl mx-auto space-y-8" role="list">
              {[
                { step: '01', title: 'Consultation', desc: 'We visit your home, discuss your needs, and measure the space.' },
                { step: '02', title: '3D Design', desc: 'Our designers create photorealistic 3D visualisations of your walk-in.' },
                { step: '03', title: 'Specification', desc: 'You choose finishes, accessories, lighting, and layout details.' },
                { step: '04', title: 'Manufacturing', desc: 'Hand-crafted in our UK workshop using premium materials (3–4 weeks).' },
                { step: '05', title: 'Installation', desc: 'Professional fitting by our experienced team (typically 2–3 days).' },
              ].map((item, i) => (
                <li key={i} className="flex gap-6">
                  <span className="font-display text-3xl font-bold text-primary-200 flex-shrink-0 w-16">{item.step}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="quote" className="py-20 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Create Your Dream Dressing Room</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Book a free design visit. We'll bring samples, create 3D designs, and quote on the spot.</p>
            <a href="/contact" className="inline-block bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Get Your Free Quote</a>
          </div>
        </section>
      </main>
    </>
  );
}