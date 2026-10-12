import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Paint Colours',
  description: 'Explore our curated palette of paint colours for bespoke fitted wardrobes. From warm neutrals to bold statements — all hand-matched in our UK workshop.',
};

const colours = [
  { name: 'Bone', hex: '#f2edde', desc: 'Our signature warm neutral' },
  { name: 'Pale Oak', hex: '#e8dfd0', desc: 'Soft grey-beige with green undertones' },
  { name: 'Stone', hex: '#d4cfc4', desc: 'Mid-tone greige for contemporary spaces' },
  { name: 'Charcoal', hex: '#3d3d3d', desc: 'Deep grey, almost black — dramatic and modern' },
  { name: 'Ink', hex: '#000000', desc: 'True black for high-contrast interiors' },
  { name: 'White', hex: '#ffffff', desc: 'Clean, crisp, timeless' },
  { name: 'Clay', hex: '#c49a7a', desc: 'Warm terracotta for earthy schemes' },
  { name: 'Sage', hex: '#8a9a8c', desc: 'Muted green-grey, calming and sophisticated' },
  { name: 'Navy', hex: '#1a2d3a', desc: 'Deep blue for bold, library-style wardrobes' },
  { name: 'Blush', hex: '#d4b8b0', desc: 'Soft pink-beige for gentle warmth' },
  { name: 'Rust', hex: '#af6446', desc: 'Rich orange-brown — our accent signature' },
  { name: 'Custom RAL', hex: '#cccccc', desc: 'Any RAL Classic colour matched to order' },
];

export default function ColoursPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              PAINT COLOURS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Our curated palette — from warm neutrals to bold statements. All hand-matched in our UK workshop. Custom RAL matching available.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{ marginBottom: '60px' }}>
              {colours.map((colour, i) => (
                <article key={i} className="group text-center">
                  <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px', backgroundColor: colour.hex }}>
                    <img
                      src="/colour-swatch.jpg"
                      alt={`${colour.name} paint swatch`}
                      loading="lazy"
                    />
                  </div>
                  <p className="body-text font-medium" style={{ color: '#000', marginBottom: '4px' }}>{colour.name}</p>
                  <p className="caption" style={{ color: '#000', opacity: 0.7, fontSize: '13px' }}>{colour.desc}</p>
                </article>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px', textAlign: 'center' }}>
                FINISH OPTIONS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Matt', desc: 'Zero sheen. Contemporary, tactile, hides fingerprints.' },
                  { title: 'Eggshell', desc: 'Subtle 10% sheen. Durable, wipeable, classic.' },
                  { title: 'Satin', desc: 'Soft 30% sheen. Light-reflective, elegant.' },
                ].map((finish, i) => (
                  <div key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                    <h3 className="font-display font-medium text-subheading text-ink mb-3" style={{ fontSize: '22px', lineHeight: '28px' }}>
                      {finish.title}
                    </h3>
                    <p className="body-text" style={{ color: '#000' }}>{finish.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              ORDER FREE COLOUR SWATCHES
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              See the true colours in your light. We'll post you a set of hand-painted samples.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Request Swatches
            </a>
          </div>
        </section>
      </main>
    </>
  );
}