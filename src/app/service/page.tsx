import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Our Service',
  description: 'The Recherché service — free home design visit, 3D visualisation, UK manufacturing, professional installation, and 10-year guarantee. Bespoke fitted wardrobes and storage.',
};

const serviceSteps = [
  {
    number: '01',
    title: 'HOME DESIGN VISIT',
    description: 'We visit, measure, discuss needs, and photograph the space. Free, no obligation.',
  },
  {
    number: '02',
    title: '3D VISUALISATION & QUOTE',
    description: 'We create photorealistic 3D renders and a fixed, itemised quote. Revisions included.',
  },
  {
    number: '03',
    title: 'TECHNICAL SURVEY',
    description: 'Pre-production check — walls, ceilings, electrics, plumbing. We flag any issues early.',
  },
  {
    number: '04',
    title: 'UK MANUFACTURING',
    description: 'Built in our workshop using FSC-certified timber, precision CNC, hand-finishing.',
  },
  {
    number: '05',
    title: 'PROFESSIONAL INSTALLATION',
    description: 'Our fitted furniture team installs in 1–3 days. Clean, respectful, fully insured.',
  },
  {
    number: '06',
    title: '10-YEAR GUARANTEE',
    description: 'Every piece guaranteed for 10 years. UK-based aftercare team for life.',
  },
];

const serviceAreas = [
  'Free home design consultation',
  '3D photorealistic visualisation',
  'Fixed, itemised quotation',
  'Technical pre-install survey',
  'UK workshop manufacturing',
  'Professional installation team',
  '10-year guarantee',
  'Lifetime aftercare support',
];

export default function ServicePage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              OUR SERVICE
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              From first sketch to final fitting — and the decade after. Six steps, one team, zero subcontractors.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 className="display-marker" style={{ marginBottom: '60px', fontSize: '36px', textAlign: 'center' }}>
              THE PROCESS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceSteps.map((step, i) => (
                <div key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                  <p className="font-display font-medium text-ink mb-4" style={{ fontSize: '14px', letterSpacing: '0.1em', color: '#af6446' }}>
                    STEP {step.number}
                  </p>
                  <h3 className="font-display font-medium text-subheading text-ink mb-3" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    {step.title}
                  </h3>
                  <p className="body-text" style={{ color: '#000' }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  WHAT'S INCLUDED
                </h2>
                <p className="body-text" style={{ marginBottom: '20px', color: '#000' }}>
                  No hidden extras. Every project includes:
                </p>
                <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                  {serviceAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 text-ink" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4px' }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      <p className="body-text" style={{ color: '#000' }}>{area}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/service-process.jpg"
                  alt="The Recherché service process"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              START YOUR PROJECT
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Free home consultation with 3D visualisation and fixed quote.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Book Design Visit
            </a>
          </div>
        </section>
      </main>
    </>
  );
}