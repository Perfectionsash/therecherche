import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'UK Manufacturing',
  description: 'All Recherche fitted wardrobes, sliding doors, and walk-ins are manufactured in our UK workshop. British craftsmanship, FSC-certified timber, low-VOC finishes.',
};

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              UK MANUFACTURING
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Every piece is hand-crafted in our British workshop. No imports, no flat-pack — just skilled cabinet makers and premium materials.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  OUR WORKSHOP
                </h2>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  Based in the UK, our workshop combines traditional cabinet-making with modern CNC precision. Each wardrobe is made to order — cut, edged, drilled, and assembled by our team of skilled craftspeople.
                </p>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  We control every step: sourcing FSC-certified timber, applying low-VOC finishes in our spray booths, and quality-checking every component before it leaves for installation.
                </p>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  This means shorter lead times (3-4 weeks), full customisation, and the ability to fix any issue before it reaches your home.
                </p>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/service-manufacturing.jpg"
                  alt="UK workshop manufacturing"
                  loading="lazy"
                />
              </div>
            </div>

            <h2 className="display-marker" style={{ marginBottom: '40px', textAlign: 'center' }}>
              MATERIALS & STANDARDS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'FSC-Certified Timber', desc: 'Responsibly sourced board and solid wood. Chain-of-custody certified.' },
                { title: 'Low-VOC Finishes', desc: 'Water-based lacquers and paints. Healthier for your home and our craftspeople.' },
                { title: 'Premium Hardware', desc: 'Blum, Hettich, Häfele — German-engineered runners, hinges, and soft-close systems.' },
                { title: 'Quality Control', desc: 'Every piece checked at three stages: CNC, assembly, pre-dispatch.' },
              ].map((item, i) => (
                <div key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                  <h3 className="font-display font-medium text-subheading text-ink mb-3" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    {item.title}
                  </h3>
                  <p className="body-text" style={{ color: '#000' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}