import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Midlands & North',
  description: 'Bespoke fitted wardrobes across the Midlands and North — Birmingham, Manchester, Leeds, Sheffield, Nottingham, Liverpool. Free home design visit.',
};

const areas = [
  'Birmingham & West Midlands',
  'Manchester & Greater Manchester',
  'Leeds & West Yorkshire',
  'Sheffield & South Yorkshire',
  'Nottingham & East Midlands',
  'Liverpool & Merseyside',
  'Newcastle & North East',
  'Surrounding towns & villages',
];

export default function MidlandsNorthPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              MIDLANDS & NORTH
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              We cover Birmingham, Manchester, Leeds, Sheffield, Nottingham, Liverpool, Newcastle and surrounding areas.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 className="display-marker" style={{ marginBottom: '40px', fontSize: '36px', textAlign: 'center' }}>
              AREAS WE COVER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
              {areas.map((area, i) => (
                <div key={i} className="p-6 text-center" style={{ border: '1px solid #e8e0d0' }}>
                  <p className="body-text font-medium text-ink" style={{ color: '#000' }}>{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              BOOK A DESIGN VISIT
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