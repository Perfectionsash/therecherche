import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Free Design Consultation',
  description: 'Free home design consultation for bespoke fitted wardrobes. We visit you, measure your space, create 3D visualisations, and provide a fixed quote.',
};

export default function FreeDesignPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              FREE DESIGN CONSULTATION
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              We visit your home — no need to travel. We'll measure your space, discuss your storage needs, and create initial 3D designs on the spot.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  WHAT HAPPENS
                </h2>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  The visit takes about 90 minutes. There's no obligation, and you'll receive a detailed proposal with visualisations and pricing within a week.
                </p>
                <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'We measure your space precisely',
                    'Discuss your storage needs and style preferences',
                    'Show material samples and finish options',
                    'Create initial 3D designs on a tablet',
                    'Provide a fixed, no-obligation quote',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4" style={{ paddingBottom: '16px', borderBottom: '1px solid #e8e0d0' }}>
                      <span className="flex-shrink-0 w-6 h-6 text-ink" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      <span className="body-text" style={{ color: '#000' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/service-design.jpg"
                  alt="Designer consulting with clients"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              BOOK YOUR FREE VISIT
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              No obligation. No pressure. Just expert advice for your space.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Request a Home Appointment
            </a>
          </div>
        </section>
      </main>
    </>
  );
}