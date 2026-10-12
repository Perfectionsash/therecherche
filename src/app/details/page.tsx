import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Details & Finishes',
  description: 'Explore all details and finishes for bespoke fitted wardrobes — paint colours, door styles, handles, internal accessories, and lighting options.',
};

const categories = [
  { name: 'Paint Colours', href: '/details/colours', desc: '12 curated neutrals & accents + custom RAL matching', image: '/cat-colours.jpg' },
  { name: 'Door Styles', href: '/details/styles', desc: 'Sliding, hinged, bi-fold, pocket — handleless to shaker', image: '/cat-styles.jpg' },
  { name: 'Handles & Hardware', href: '/details/handles', desc: 'Recessed grips, bar pulls, push-to-open, integrated LED', image: '/cat-handles.jpg' },
  { name: 'Internal Accessories', href: '/details/accessories', desc: 'Shoe racks, jewellery drawers, trouser racks, safes', image: '/cat-accessories.jpg' },
  { name: 'Lighting', href: '/details/lighting', desc: 'Sensor spots, LED strips, illuminated rails, smart control', image: '/cat-lighting.jpg' },
];

export default function DetailsPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              DETAILS & FINISHES
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Every element considered — from the paint on the doors to the lighting inside. Explore our complete range of finishes and accessories.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '60px' }}>
              {categories.map((cat, i) => (
                <article key={i} className="group">
                  <Link href={cat.href} className="block">
                    <div className="photo-frame" style={{ aspectRatio: '4/3', marginBottom: '16px' }}>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        loading="lazy"
                      />
                    </div>
                    <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{cat.name}</p>
                    <p className="caption" style={{ color: '#000', opacity: 0.7 }}>{cat.desc}</p>
                  </Link>
                </article>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                ORDER A FINISHES BROCHURE
              </h2>
              <p className="body-text" style={{ color: '#000', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
                Get our complete finishes guide with physical colour swatches, hardware samples, and lighting specs posted to your door.
              </p>
              <a
                href="/brochure"
                className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
              >
                Request Brochure
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}