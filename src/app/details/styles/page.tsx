import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Door Styles',
  description: 'Choose from sliding, hinged, bi-fold, and pocket door styles for your bespoke fitted wardrobes. Handleless, shaker, panel, and glass options.',
};

const styles = [
  { name: 'Handleless Sliding', desc: 'Clean lines, recessed grip channel, soft-close standard', image: '/style-handleless-sliding.jpg' },
  { name: 'Shaker Hinged', desc: 'Classic five-piece frame, traditional proportions', image: '/style-shaker.jpg' },
  { name: 'Flush Panel Sliding', desc: 'Flat panel, minimal joints, contemporary', image: '/style-flush-sliding.jpg' },
  { name: 'Glass Sliding', desc: 'Clear, frosted, reeded, or tinted glass in aluminium frame', image: '/style-glass.jpg' },
  { name: 'Bi-Fold', desc: 'Full access opening, ideal for wider apertures', image: '/style-bifold.jpg' },
  { name: 'Pocket Doors', desc: 'Doors slide into wall cavity — completely hidden when open', image: '/style-pocket.jpg' },
  { name: 'Mirrored Sliding', desc: 'Full-height mirror, safety-backed, space-enlarging', image: '/style-mirrored.jpg' },
  { name: 'Frame & Panel Hinged', desc: 'Traditional joinery, suited to period properties', image: '/style-frame-panel.jpg' },
];

export default function StylesPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              DOOR STYLES
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Sliding, hinged, bi-fold, or pocket — handleless, shaker, glass, or mirrored. Every style made to your exact measurements.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginBottom: '60px' }}>
              {styles.map((style, i) => (
                <article key={i} className="group">
                  <a href={`/details/styles/${style.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                    <div className="photo-frame" style={{ aspectRatio: '3/4', marginBottom: '16px' }}>
                      <img
                        src={style.image}
                        alt={style.name}
                        loading="lazy"
                      />
                    </div>
                    <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{style.name}</p>
                    <p className="caption" style={{ color: '#000', opacity: 0.7 }}>{style.desc}</p>
                  </a>
                </article>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px', textAlign: 'center' }}>
                OPENING TYPES COMPARED
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ maxWidth: '900px', margin: '0 auto' }}>
                {[
                  { title: 'Sliding', pros: 'No swing space, full-width access per door, smooth operation', cons: 'Only 50% open at once, track cleaning needed' },
                  { title: 'Hinged', pros: '100% access, classic feel, easy to retrofit', cons: 'Needs swing clearance, hinges visible' },
                  { title: 'Bi-Fold / Pocket', pros: 'Full opening width, modern aesthetic', cons: 'Higher cost, more complex installation' },
                ].map((type, i) => (
                  <div key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                    <h3 className="font-display font-medium text-subheading text-ink mb-4" style={{ fontSize: '22px', lineHeight: '28px' }}>
                      {type.title}
                    </h3>
                    <div className="space-y-3">
                      <p className="body-text font-medium" style={{ color: '#000' }}>Pros: {type.pros}</p>
                      <p className="body-text" style={{ color: '#000', opacity: 0.7 }}>Cons: {type.cons}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}