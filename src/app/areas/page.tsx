import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Areas We Cover',
  description: 'The Recherche covers London, Greater London, and the Home Counties. Nationwide for larger projects. Check if we serve your area.',
};

const areas = [
  { name: 'London', href: '/areas/london', desc: 'All 32 boroughs + City of London. Showrooms in Chelsea & Hampstead.', image: '/area-london.jpg', showrooms: ['Chelsea', 'Hampstead'] },
  { name: 'South East', href: '/areas/south-east', desc: 'Surrey, Kent, Essex, Hertfordshire, Buckinghamshire, Berkshire. Showroom in Guildford.', image: '/area-south-east.jpg', showrooms: ['Guildford'] },
  { name: 'South West', href: '/areas/south-west', desc: 'Bristol, Bath, Somerset, Devon, Cornwall, Dorset, Wiltshire. Showroom in Clifton.', image: '/area-south-west.jpg', showrooms: ['Bristol Clifton'] },
  { name: 'Midlands & North', href: '/areas/midlands-north', desc: 'Birmingham, Manchester, Leeds, Liverpool, Nottingham. Showroom in Spinningfields.', image: '/area-midlands.jpg', showrooms: ['Manchester Spinningfields'] },
  { name: 'Scotland', href: '/areas/scotland', desc: 'Edinburgh, Glasgow, Aberdeen. Showroom in Edinburgh New Town.', image: '/area-scotland.jpg', showrooms: ['Edinburgh New Town'] },
  { name: 'Oxford & Thames Valley', href: '/areas/oxford', desc: 'Oxfordshire, Reading, Henley, Marlow. Showroom in Oxford.', image: '/area-oxford.jpg', showrooms: ['Oxford'] },
];

export default function AreasPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              AREAS WE COVER
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              London, Greater London, and the Home Counties. Nationwide for larger projects. Check your area below.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '60px' }}>
              {areas.map((area, i) => (
                <article key={i} className="group">
                  <a href={area.href} className="block">
                    <div className="photo-frame" style={{ aspectRatio: '4/3', marginBottom: '16px' }}>
                      <img
                        src={area.image}
                        alt={area.name}
                        loading="lazy"
                      />
                    </div>
                    <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{area.name}</p>
                    <p className="caption" style={{ color: '#000', opacity: 0.7, marginBottom: '12px' }}>{area.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.showrooms.map((showroom, j) => (
                        <span key={j} className="font-body text-body-sm px-3 py-1" style={{ border: '1px solid #e8e0d0', color: '#000', fontSize: '12px' }}>
                          {showroom}
                        </span>
                      ))}
                    </div>
                  </a>
                </article>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px', textAlign: 'center' }}>
                OUTSIDE THESE AREAS?
              </h2>
              <p className="body-text" style={{ color: '#000', marginBottom: '20px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 20px' }}>
                We take on select projects nationwide. Our design team works remotely with video consultations, and we coordinate installation through our approved partner network.
              </p>
              <p className="body-text" style={{ color: '#000', marginBottom: '30px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 30px' }}>
                International clients welcome — we ship globally and manage projects remotely.
              </p>
              <a
                href="/contact"
                className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}