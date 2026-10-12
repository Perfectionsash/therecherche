import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'London — Areas We Cover',
  description: 'Bespoke fitted wardrobes across all 32 London boroughs and the City. Showrooms in Chelsea and Hampstead. Free design consultation.',
};

const boroughs = [
  'Camden', 'Greenwich', 'Hackney', 'Hammersmith & Fulham', 'Islington',
  'Kensington & Chelsea', 'Lambeth', 'Lewisham', 'Southwark', 'Tower Hamlets',
  'Wandsworth', 'Westminster', 'City of London', 'Barking & Dagenham', 'Barnet',
  'Bexley', 'Brent', 'Bromley', 'Croydon', 'Ealing', 'Enfield', 'Haringey',
  'Harrow', 'Havering', 'Hillingdon', 'Hounslow', 'Kingston upon Thames',
  'Merton', 'Newham', 'Redbridge', 'Richmond upon Thames', 'Sutton', 'Waltham Forest'
];

export default function LondonPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              LONDON
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              We cover all 32 boroughs and the City of London. Two showrooms — Chelsea and Hampstead. Free home design visits across the capital.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start', marginBottom: '60px' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  SHOWROOMS IN LONDON
                </h2>
                <div className="space-y-8">
                  {[
                    { name: 'Chelsea', address: '123 Kings Road, London SW3 5EB', hours: 'Mon–Sat 9am–6pm, Sun 10am–4pm' },
                    { name: 'Hampstead', address: '45 Heath Street, London NW3 6UG', hours: 'Mon–Sat 9am–6pm, Sun 10am–4pm' },
                  ].map((showroom, i) => (
                    <div key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                      <h3 className="font-display font-medium text-subheading text-ink mb-2" style={{ fontSize: '22px', lineHeight: '28px' }}>
                        {showroom.name}
                      </h3>
                      <p className="body-text" style={{ color: '#000', marginBottom: '4px' }}>{showroom.address}</p>
                      <p className="caption" style={{ color: '#000', opacity: 0.7 }}>{showroom.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/area-london.jpg"
                  alt="London fitted wardrobes"
                  loading="lazy"
                />
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px', textAlign: 'center' }}>
                BOROUGHS WE SERVE
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {boroughs.map((borough, i) => (
                  <span key={i} className="font-body text-body-sm px-3 py-1" style={{ border: '1px solid #e8e0d0', color: '#000', fontSize: '13px' }}>
                    {borough}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              BOOK A LONDON DESIGN VISIT
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              We cover all London postcodes. Free consultation, 3D designs, fixed quote.
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