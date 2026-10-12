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
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              SLIDING WARDROBE DOORS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Space-saving, smooth-gliding doors in mirrored, glass, wood, and bespoke finishes. Perfect for any bedroom, hallway, or awkward space.
            </p>
            <a
              href="#quote"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Explore Finishes
            </a>
          </div>
        </section>

        {/* Finishes Section */}
        <section className="section-bone" aria-labelledby="finishes-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="finishes-heading" className="display-marker" style={{ marginBottom: '40px', textAlign: 'center' }}>
              FINISHES & STYLES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Mirrored',
                'Glass (Clear/Frosted)',
                'Wood Veneer',
                'High-Gloss Lacquer',
                'Matt Lacquer',
                'Custom RAL Colour',
                'Textured Finish',
                'Mixed Materials',
              ].map((finish, i) => (
                <article key={i} className="group">
                  <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px' }}>
                    <img
                      src="/finish-placeholder.jpg"
                      alt={`${finish} finish example`}
                      loading="lazy"
                    />
                  </div>
                  <p className="body-text font-medium" style={{ color: '#000' }}>{finish}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-bone border-t border-ink" aria-labelledby="benefits-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="benefits-heading" className="display-marker" style={{ marginBottom: '40px', textAlign: 'center' }}>
              WHY CHOOSE SLIDING DOORS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Space Saving', desc: 'No swing clearance needed — ideal for tight spaces and rooms with furniture near the wardrobe.' },
                { title: 'Smooth Operation', desc: 'Premium German-engineered runners with soft-close as standard. 10-year mechanism guarantee.' },
                { title: 'Custom Sizing', desc: 'Made to exact millimetre measurements. Floor-to-ceiling, wall-to-wall, or custom apertures.' },
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
              DESIGN YOUR SLIDING DOORS
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Free home consultation with 3D visualisation and fixed quote.
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