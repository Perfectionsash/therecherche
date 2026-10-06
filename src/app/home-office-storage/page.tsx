import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Home Office Storage',
  description: 'Bespoke home office solutions with integrated desks, shelving, and cable management. Custom designs for productive workspaces.',
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Home Office Storage',
  description: 'Bespoke home office solutions with integrated desks, shelving, and cable management for the modern workspace.',
  brand: { '@type': 'Brand', name: 'The Recherche' },
  sku: 'TR-HOS-001',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: '2000',
    highPrice: '10000',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'The Recherche' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '23' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you integrate existing furniture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can design around your existing desk, chair, or equipment for a seamless look.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle cables?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Integrated cable channels, pop-up sockets, wireless charging pads, and hidden trunking keep everything tidy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do corner desks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — corner, L-shape, U-shape, floating, and wall-mounted desks all custom-sized to your space.',
      },
    },
  ],
};

export default function HomeOfficePage() {
  return (
    <>
      <JsonLd data={[productSchema, faqSchema]} />
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="page-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Home Office Storage
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bespoke desks, shelving, and cable management for productive workspaces.
              Designed for how you work.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="solutions-heading">
          <div className="container mx-auto px-4">
            <h2 id="solutions-heading" className="font-display text-3xl font-bold text-gray-900 text-center mb-12">Office Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Integrated Desks',
                'Floor-to-Ceiling Shelving',
                'Cable Management Systems',
                'Monitor Arms & Mounts',
                'Printer Cabinets',
                'Filing & Drawer Units',
                'Acoustic Panels',
                'Lighting Integration',
              ].map((solution, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all text-center">
                  <h3 className="font-semibold text-gray-900">{solution}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <h2 id="benefits-heading" className="font-display text-3xl font-bold text-gray-900 text-center mb-12">Why Bespoke?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Perfect Ergonomics', desc: 'Desk height, monitor position, and keyboard tray all tailored to you.' },
                { title: 'Zero Cable Clutter', desc: 'Every wire routed through hidden channels with accessible service points.' },
                { title: 'Future-Proof', desc: 'Modular components adapt as your tech and work style evolve.' },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Design Your Ideal Workspace</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Free consultation with 3D design and fixed quote.</p>
            <a href="/contact" className="inline-block bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Get Your Free Quote</a>
          </div>
        </section>
      </main>
    </>
  );
}