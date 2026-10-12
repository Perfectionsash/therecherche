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
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              HOME OFFICE STORAGE
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Bespoke desks, shelving, and cable management for productive workspaces. Designed for how you work.
            </p>
            <a
              href="#quote"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Start Your Design
            </a>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section-bone" aria-labelledby="solutions-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="solutions-heading" className="display-marker" style={{ marginBottom: '40px', textAlign: 'center' }}>
              OFFICE SOLUTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <article key={i} className="group">
                  <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px' }}>
                    <img
                      src="/office-solution-placeholder.jpg"
                      alt={`${solution} example`}
                      loading="lazy"
                    />
                  </div>
                  <p className="body-text font-medium" style={{ color: '#000' }}>{solution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-bone border-t border-ink" aria-labelledby="benefits-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="benefits-heading" className="display-marker" style={{ marginBottom: '40px', textAlign: 'center' }}>
              WHY BESPOKE?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Perfect Ergonomics', desc: 'Desk height, monitor position, and keyboard tray all tailored to you.' },
                { title: 'Zero Cable Clutter', desc: 'Every wire routed through hidden channels with accessible service points.' },
                { title: 'Future-Proof', desc: 'Modular components adapt as your tech and work style evolve.' },
              ].map((benefit, i) => (
                <div key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                  <h3 className="font-display font-medium text-subheading text-ink mb-3" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    {benefit.title}
                  </h3>
                  <p className="body-text" style={{ color: '#000' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="section-rust" aria-labelledby="cta-heading" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 id="cta-heading" className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              DESIGN YOUR IDEAL WORKSPACE
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Free consultation with 3D design and fixed quote.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Get Your Free Quote
            </a>
          </div>
        </section>
      </main>
    </>
  );
}