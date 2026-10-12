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
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              WALK-IN WARDROBES
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Luxury dressing rooms designed around your lifestyle. Islands, lighting, accessories storage, and more.
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
            <h2 id="features-heading" className="display-marker" style={{ marginBottom: '40px', textAlign: 'center' }}>
              FEATURES & OPTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Centre Islands', desc: 'Storage drawers, jewellery trays, glass tops, integrated seating' },
                { title: 'Smart Lighting', desc: 'Motion sensors, LED strips, colour temperature control, dimmable' },
                { title: 'Shoe Storage', desc: 'Angled shelves, pull-out racks, boot storage, display lighting' },
                { title: 'Accessory Storage', desc: 'Watch winders, tie/belt racks, scarf organisers, safe boxes' },
                { title: 'Seating', desc: 'Upholstered ottomans, built-in benches, vanity stools' },
                { title: 'Mirrors', desc: 'Full-length, illuminated, anti-fog, tri-fold, sliding panels' },
              ].map((feature, i) => (
                <article key={i} className="group">
                  <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px' }}>
                    <img
                      src="/feature-placeholder.jpg"
                      alt={`${feature.title} example`}
                      loading="lazy"
                    />
                  </div>
                  <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{feature.title}</p>
                  <p className="caption" style={{ color: '#000', opacity: 0.7 }}>{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-bone border-t border-ink" aria-labelledby="process-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="process-heading" className="display-marker" style={{ marginBottom: '40px', textAlign: 'center' }}>
              OUR DESIGN PROCESS
            </h2>
            <ol className="space-y-8" role="list" style={{ maxWidth: '900px', margin: '0 auto' }}>
              {[
                { step: '01', title: 'Consultation', desc: 'We visit your home, discuss your needs, and measure the space.' },
                { step: '02', title: '3D Design', desc: 'Our designers create photorealistic 3D visualisations of your walk-in.' },
                { step: '03', title: 'Specification', desc: 'You choose finishes, accessories, lighting, and layout details.' },
                { step: '04', title: 'Manufacturing', desc: 'Hand-crafted in our UK workshop using premium materials (3–4 weeks).' },
                { step: '05', title: 'Installation', desc: 'Professional fitting by our experienced team (typically 2–3 days).' },
              ].map((item, i) => (
                <li key={i} className="flex gap-6" style={{ paddingBottom: '24px', borderBottom: '1px solid #e8e0d0' }}>
                  <span className="font-display font-bold text-ink flex-shrink-0 w-16" style={{ fontSize: '36px', lineHeight: '44px' }}>
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display font-medium text-subheading text-ink" style={{ fontSize: '22px', lineHeight: '28px', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p className="body-text" style={{ color: '#000' }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="section-rust" aria-labelledby="cta-heading" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 id="cta-heading" className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              CREATE YOUR DREAM DRESSING ROOM
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Book a free design visit. We&rsquo;ll bring samples, create 3D designs, and quote on the spot.
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