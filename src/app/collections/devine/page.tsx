import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Devine Collection',
  description: 'The Devine Collection — glass and aluminium sliding doors in frosted, reeded, clear, and mirrored finishes. From £4,500.',
};

const features = [
  'Aluminium-framed glass sliding doors',
  'Clear, frosted, reeded, or mirrored glass',
  'Top-hung system — no floor track',
  'Soft-close & anti-derailment standard',
  'Integrated LED lighting option',
  '10-year guarantee',
];

export default function DevinePage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              DEVINE COLLECTION
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
              Glass & aluminium sliding doors — frosted, reeded, clear, mirrored
            </p>
            <p className="body-text font-medium" style={{ color: '#af6446', fontSize: '20px' }}>From £4,500</p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  DESIGN CHARACTER
                </h2>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  The Devine brings light and openness — slim aluminium frames holding glass panels that slide effortlessly. Choose clear for display, frosted for privacy, reeded for texture, or mirrored to expand the space.
                </p>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  Top-hung system means no floor track — completely clear threshold. Frame finishes in matt black, brushed brass, or custom RAL.
                </p>
                <a
                  href="/details/styles"
                  className="link-plain font-body text-body-sm inline-flex items-center gap-2"
                >
                  View Glass Options
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/collection-devine.jpg"
                  alt="Devine collection glass sliding doors"
                  loading="lazy"
                />
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="display-marker" style={{ marginBottom: '40px', fontSize: '36px', textAlign: 'center' }}>
                GLASS OPTIONS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Clear', 'Frosted', 'Reeded', 'Mirrored'].map((glass, i) => (
                  <div key={i} className="p-8 text-center" style={{ border: '1px solid #e8e0d0' }}>
                    <h3 className="font-display font-medium text-subheading text-ink mb-2" style={{ fontSize: '22px', lineHeight: '28px' }}>
                      {glass}
                    </h3>
                    <p className="body-text" style={{ color: '#000', fontSize: '14px' }}>
                      {glass === 'Clear' && 'Full visibility — display storage'}
                      {glass === 'Frosted' && 'Privacy with light transmission'}
                      {glass === 'Reeded' && 'Textured privacy, art deco feel'}
                      {glass === 'Mirrored' && 'Space-expanding, full-length mirror'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              DESIGN YOUR DEVINE WARDROBE
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Free home consultation with 3D visualisation and fixed quote.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Start Your Design
            </a>
          </div>
        </section>
      </main>
    </>
  );
}