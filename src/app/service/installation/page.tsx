import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Professional Installation',
  description: 'Expert installation of bespoke fitted wardrobes, sliding doors, and walk-in wardrobes by our experienced fitting teams. Typically completed in 1-2 days.',
};

export default function InstallationPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              PROFESSIONAL INSTALLATION
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Our experienced fitting teams install your bespoke storage with precision and care. Most projects completed in 1-2 days.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: '40px' }}>
              {[
                { title: 'Own Teams', desc: 'We never subcontract. Every fitter is a Recherche employee, trained to our exacting standards.' },
                { title: 'Precision Fitting', desc: 'Laser-level accuracy, scribed to walls, perfect alignment — even on uneven floors and ceilings.' },
                { title: 'Clean & Respectful', desc: 'Dust sheets, shoe covers, daily cleanup. We treat your home like our own.' },
              ].map((item, i) => (
                <div key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                  <h3 className="font-display font-medium text-subheading text-ink mb-3" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    {item.title}
                  </h3>
                  <p className="body-text" style={{ color: '#000' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  THE PROCESS
                </h2>
                <ol className="space-y-6" role="list">
                  {[
                    'Wardrobe components arrive pre-assembled where possible',
                    'Frames positioned, levelled, and fixed to walls',
                    'Doors fitted, aligned, and soft-close mechanisms calibrated',
                    'Internal accessories installed — rails, shelves, drawers, lighting',
                    'Final quality check and demonstration',
                    'Handover with care guide and guarantee documentation',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-display font-bold text-ink flex-shrink-0 w-12" style={{ fontSize: '28px', lineHeight: '36px' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="body-text" style={{ color: '#000' }}>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/service-installation.jpg"
                  alt="Professional installation team"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}