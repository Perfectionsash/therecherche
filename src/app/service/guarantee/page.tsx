import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '10-Year Guarantee',
  description: 'Comprehensive 10-year guarantee on all Recherche fitted wardrobes, sliding doors, and walk-in wardrobes. Covers materials, mechanisms, and workmanship.',
};

export default function GuaranteePage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              10-YEAR GUARANTEE
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Comprehensive cover on materials, mechanisms, and workmanship. If it's not right, we make it right.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: '60px' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  WHAT'S COVERED
                </h2>
                <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Cabinet structure and carcass integrity',
                    'Door fronts — warping, delamination, finish defects',
                    'Sliding door runners, tracks, and soft-close mechanisms',
                    'Hinged door hinges, soft-close, and adjustment',
                    'Internal accessories — rails, shelves, drawers, baskets',
                    'Integrated lighting and electrical components',
                    'Installation workmanship and alignment',
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
              <div className="p-8" style={{ border: '1px solid #e8e0d0', backgroundColor: '#faf8f5' }}>
                <h3 className="font-display font-medium text-subheading text-ink mb-4" style={{ fontSize: '22px', lineHeight: '28px' }}>
                  CLAIM PROCESS
                </h3>
                <ol className="space-y-4" role="list">
                  {[
                    'Contact us with photos and a description of the issue',
                    'We assess remotely — most claims resolved with a replacement part sent by post',
                    'If needed, we arrange a service visit (usually within 2 weeks)',
                    'Repair or replacement carried out at no cost to you',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-display font-bold text-ink flex-shrink-0 w-8" style={{ fontSize: '24px', lineHeight: '32px' }}>
                        {i + 1}.
                      </span>
                      <p className="body-text" style={{ color: '#000' }}>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', textAlign: 'center', fontSize: '36px' }}>
                WHAT'S NOT COVERED
              </h2>
              <p className="body-text" style={{ color: '#000', maxWidth: '700px', margin: '0 auto 20px', textAlign: 'center' }}>
                Normal wear and tear, accidental damage, misuse, modifications by third parties, and issues caused by environmental conditions (excessive humidity, temperature extremes).
              </p>
              <p className="body-text" style={{ color: '#000', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                Full terms available on request. Your statutory rights are not affected.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}