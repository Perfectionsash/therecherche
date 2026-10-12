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
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              FITTED WARDROBES
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Custom-designed floor-to-ceiling wardrobes that maximise every inch of your space. From awkward corners to sloping ceilings, we create storage that fits perfectly.
            </p>
            <a
              href="#quote"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Start Your Design
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-bone" aria-labelledby="features-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="features-heading" className="sr-only">Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h3 className="font-display font-medium text-subheading text-ink mb-6" style={{ fontSize: '36px', lineHeight: '44px' }}>
                  Designed Around You
                </h3>
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  Every wardrobe is unique. Our designers create 3D visualisations showing exactly how your wardrobe will look in your space.
                </p>
                <p className="body-text" style={{ marginBottom: '30px' }}>
                  Choose from hundreds of door styles, finishes, and internal configurations including hanging rails, shelves, drawers, shoe racks, and accessory storage.
                </p>
                <a
                  href="#quote"
                  className="link-plain font-body text-body-sm inline-flex items-center gap-2"
                >
                  Start Your Design
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/project-fitted-wardrobe.jpg"
                  alt="Bespoke fitted wardrobe installation"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features List */}
        <section className="section-bone border-t border-ink" aria-labelledby="key-features-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="key-features-heading" className="display-marker" style={{ marginBottom: '40px' }}>
              KEY FEATURES
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Floor-to-ceiling design',
                'Sliding or hinged doors',
                'Mirrored, glass, or wood finishes',
                'Integrated lighting options',
                'Soft-close mechanisms',
                '10-year guarantee',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4" style={{ paddingBottom: '16px', borderBottom: '1px solid #e8e0d0' }}>
                  <span className="font-body text-body-sm text-ink flex-shrink-0" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <span className="body-text" style={{ color: '#000' }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="section-rust" aria-labelledby="cta-heading" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 id="cta-heading" className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              READY FOR YOUR PERFECT WARDROBE?
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Book a free design visit. We&rsquo;ll measure, design, and quote with no obligation.
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