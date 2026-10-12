import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Boot Rooms',
  description: 'Bespoke boot rooms with bench seating, coat storage, shoe racks, umbrella stands, and drying zones. Mudroom functionality meets refined design. Custom designed and UK manufactured.',
};

const features = [
  'Bench seating with hidden shoe storage',
  'Coat & bag hooks at adult & child heights',
  'Slatted boot trays for drainage & airflow',
  'Umbrella stand & key drop integration',
  'Drying zone with heated rail option',
  'Match to hallway or utility room joinery',
];

export default function BootRoomsPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              BOOT ROOMS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Bench seating, coat storage, boot trays, and drying zones. Where outdoor gear meets order.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  MUDROOM MADE MEASURE
                </h2>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  Designed for the daily flow — wet coats, muddy boots, school bags, dog leads. Everything has a place, and the place is built for it.
                </p>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  Slatted trays drain to a hidden channel. Heated rails dry gloves overnight. Bench lifts for seasonal storage. Finishes match your hallway or utility room.
                </p>
                <a
                  href="/details/accessories"
                  className="link-plain font-body text-body-sm inline-flex items-center gap-2"
                >
                  View Boot Room Accessories
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/room-boot.jpg"
                  alt="Bespoke boot room"
                  loading="lazy"
                />
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="display-marker" style={{ marginBottom: '40px', fontSize: '36px', textAlign: 'center' }}>
                FEATURES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4" style={{ border: '1px solid #e8e0d0' }}>
                    <span className="flex-shrink-0 w-6 h-6 text-ink" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <p className="body-text" style={{ color: '#000' }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              DESIGN YOUR BOOT ROOM
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