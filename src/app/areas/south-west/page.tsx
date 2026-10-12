import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'South West — Areas We Cover',
  description: 'Bespoke fitted wardrobes across Bristol, Bath, Somerset, Devon, Cornwall, Dorset, Wiltshire. Showroom in Bristol Clifton. Free design consultation.',
};

const counties = [
  'Bristol', 'Bath & North East Somerset', 'Somerset', 'Devon', 'Cornwall', 'Dorset', 'Wiltshire'
];

const towns = [
  'Bristol', 'Bath', 'Weston-super-Mare', 'Taunton', 'Yeovil', 'Exeter', 'Plymouth',
  'Truro', 'St Ives', 'Bournemouth', 'Poole', 'Salisbury', 'Swindon', 'Chippenham'
];

export default function SouthWestPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              SOUTH WEST
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Covering Bristol, Bath, Somerset, Devon, Cornwall, Dorset, and Wiltshire. Showroom in Bristol Clifton. Free home design visits across the region.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start', marginBottom: '60px' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  SHOWROOM
                </h2>
                <div className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                  <h3 className="font-display font-medium text-subheading text-ink mb-2" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    Bristol Clifton
                  </h3>
                  <p className="body-text" style={{ color: '#000', marginBottom: '4px' }}>34 Clifton Down, Bristol BS8 4DP</p>
                  <p className="caption" style={{ color: '#000', opacity: 0.7 }}>Mon–Fri 9am–5:30pm, Sat 10am–4pm</p>
                </div>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/area-south-west.jpg"
                  alt="South West fitted wardrobes"
                  loading="lazy"
                />
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px', textAlign: 'center' }}>
                COUNTIES & KEY TOWNS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: '900px', margin: '0 auto 30px' }}>
                <div>
                  <h3 className="font-display font-medium text-subheading text-ink mb-4" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    Counties
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {counties.map((county, i) => (
                      <span key={i} className="font-body text-body-sm px-3 py-1" style={{ border: '1px solid #e8e0d0', color: '#000', fontSize: '13px' }}>
                        {county}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-medium text-subheading text-ink mb-4" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    Towns
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {towns.map((town, i) => (
                      <span key={i} className="font-body text-body-sm px-3 py-1" style={{ border: '1px solid #e8e0d0', color: '#000', fontSize: '13px' }}>
                        {town}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              BOOK A SOUTH WEST DESIGN VISIT
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Our designers cover the entire South West region. Free consultation, 3D designs, fixed quote.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Request Appointment
            </a>
          </div>
        </section>
      </main>
    </>
  );
}