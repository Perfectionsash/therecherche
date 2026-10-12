import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Oxford & Cotswolds',
  description: 'Bespoke fitted wardrobes across Oxford, Cotswolds, Buckinghamshire, Berkshire. Free home design visit.',
};

const areas = [
  'Oxford & Oxfordshire',
  'Cotswolds (Cheltenham, Cirencester, Stow)',
  'Buckinghamshire (Aylesbury, High Wycombe)',
  'Berkshire (Reading, Newbury, Windsor)',
  'Swindon & Wiltshire',
  'Surrounding towns & villages',
];

const designers = [
  { name: 'Charlotte Whitaker', location: 'Oxford Studio', coverage: 'Oxfordshire, Cotswolds, Buckinghamshire' },
  { name: 'Henry Villiers', location: 'Cheltenham Studio', coverage: 'Gloucestershire, Worcestershire, Warwickshire' },
  { name: 'Isabel Thornton', location: 'Reading Studio', coverage: 'Berkshire, Hampshire, Surrey borders' },
];

export default function OxfordPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              OXFORD & COTSWOLDS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Local designers covering Oxford, the Cotswolds, Buckinghamshire, Berkshire and surrounding villages.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 className="display-marker" style={{ marginBottom: '40px', fontSize: '36px', textAlign: 'center' }}>
              AREAS WE COVER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
              {areas.map((area, i) => (
                <div key={i} className="p-6 text-center" style={{ border: '1px solid #e8e0d0' }}>
                  <p className="body-text font-medium text-ink" style={{ color: '#000' }}>{area}</p>
                </div>
              ))}
            </div>

            <h2 className="display-marker" style={{ marginBottom: '40px', fontSize: '36px', textAlign: 'center' }}>
              YOUR LOCAL DESIGNERS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designers.map((designer, i) => (
                <div key={i} className="p-6" style={{ border: '1px solid #e8e0d0' }}>
                  <div className="photo-frame" style={{ aspectRatio: '1/1', marginBottom: '20px', width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 20px' }}>
                    <img
                      src={`/designer-${i + 7}.jpg`}
                      alt={designer.name}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display font-medium text-subheading text-ink text-center mb-2" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    {designer.name}
                  </h3>
                  <p className="body-text text-center text-ink font-medium mb-2" style={{ fontSize: '14px', color: '#af6446' }}>
                    {designer.location}
                  </p>
                  <p className="body-text text-center" style={{ color: '#000', fontSize: '14px' }}>
                    {designer.coverage}
                  </p>
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