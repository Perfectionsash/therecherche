import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Showrooms',
  description: 'Visit our showrooms across London and the UK. Experience our bespoke fitted wardrobes, sliding doors, and walk-in wardrobes in person.',
};

const showrooms = [
  { name: 'London Chelsea', address: '123 Kings Road, London SW3 5EB', hours: 'Mon–Sat 9am–6pm, Sun 10am–4pm', image: '/showroom-chelsea.jpg' },
  { name: 'London Hampstead', address: '45 Heath Street, London NW3 6UG', hours: 'Mon–Sat 9am–6pm, Sun 10am–4pm', image: '/showroom-hampstead.jpg' },
  { name: 'Surrey Guildford', address: '78 High Street, Guildford GU1 3AW', hours: 'Mon–Fri 9am–5:30pm, Sat 10am–4pm', image: '/showroom-guildford.jpg' },
  { name: 'Oxford Oxfordshire', address: '12 Broad Street, Oxford OX1 3AZ', hours: 'Mon–Fri 9am–5:30pm, Sat 10am–4pm', image: '/showroom-oxford.jpg' },
  { name: 'Bristol Clifton', address: '34 Clifton Down, Bristol BS8 4DP', hours: 'Mon–Fri 9am–5:30pm, Sat 10am–4pm', image: '/showroom-bristol.jpg' },
  { name: 'Manchester Spinningfields', address: '56 Hardman Square, Manchester M3 3EB', hours: 'Mon–Fri 9am–5:30pm, Sat 10am–4pm', image: '/showroom-manchester.jpg' },
  { name: 'Edinburgh New Town', address: '89 George Street, Edinburgh EH2 3ES', hours: 'Mon–Fri 9am–5:30pm, Sat 10am–4pm', image: '/showroom-edinburgh.jpg' },
];

export default function ShowroomsPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              SHOWROOMS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Experience our bespoke fitted wardrobes, sliding doors, and walk-in wardrobes in person. Book a visit or drop in.
            </p>
          </div>
        </section>

        {/* Showrooms Grid */}
        <section className="section-bone" aria-labelledby="showrooms-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '40px' }}>
              {showrooms.map((showroom, i) => (
                <article key={i} className="group">
                  <div className="photo-frame" style={{ aspectRatio: '4/3', marginBottom: '16px' }}>
                    <img
                      src={showroom.image}
                      alt={showroom.name}
                      loading="lazy"
                    />
                  </div>
                  <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{showroom.name}</p>
                  <p className="caption" style={{ color: '#000', opacity: 0.7, marginBottom: '4px' }}>{showroom.address}</p>
                  <p className="caption" style={{ color: '#000', opacity: 0.7, fontSize: '13px' }}>{showroom.hours}</p>
                </article>
              ))}
            </div>

            {/* International */}
            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '28px' }}>
                INTERNATIONAL ENQUIRIES
              </h2>
              <p className="body-text" style={{ color: '#000', maxWidth: '700px' }}>
                Based outside the UK? Our design team works remotely with clients worldwide. We ship globally and can coordinate installation through our approved partner network.
              </p>
              <a
                href="/contact"
                className="link-plain font-body text-body-sm inline-flex items-center gap-2 mt-6" style={{ display: 'inline-flex', color: '#000' }}
              >
                Discuss Your Project
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-rust" aria-labelledby="cta-heading" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 id="cta-heading" className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              BOOK A SHOWROOM APPOINTMENT
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Get a guided tour, see materials in person, and start your project.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Book Appointment
            </a>
          </div>
        </section>
      </main>
    </>
  );
}