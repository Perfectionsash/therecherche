import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Scotland',
  description: 'Bespoke fitted wardrobes across Scotland — Edinburgh, Glasgow, Aberdeen, Dundee, Inverness, Stirling. Free home design visit.',
};

const areas = [
  'Edinburgh & Lothians',
  'Glasgow & Strathclyde',
  'Aberdeen & Grampian',
  'Dundee & Tayside',
  'Inverness & Highlands',
  'Stirling & Central',
  'Perth & Kinross',
  'Surrounding towns & villages',
];

const designers = [
  { name: 'Fiona MacLeod', location: 'Edinburgh Studio', coverage: 'Edinburgh, Lothians, Fife, Borders' },
  { name: 'Callum Fraser', location: 'Glasgow Studio', coverage: 'Glasgow, Strathclyde, Ayrshire, Argyll' },
  { name: 'Morag Campbell', location: 'Aberdeen Studio', coverage: 'Aberdeenshire, Highlands, Moray, Orkney' },
];

export default function ScotlandPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              SCOTLAND
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Local designers covering Edinburgh, Glasgow, Aberdeen, Dundee, Inverness, Stirling and surrounding areas.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 className="display-marker" style={{ marginBottom: '40px', fontSize: '36px', textAlign: 'center' }}>
              AREAS WE COVER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
              {areas.map((area, i) => (
                <div key={i} className="p-6 text-center" style={{ border: '1px solid #e8e0d0' }}>
                  <p className="body-text font-medium text-ink" style={{ color: '#000' }}>{area}</p>
                </div>
              ))}
            </div>

            <h2 className="display-marker" style={{ marginBottom: '40px', fontSize: '36px', textAlign: 'center' }}>
              YOUR LOCAL DESIGNERS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designers.map((designer, i) => (
                <div key={i} className="p-6" style={{ border: '1px solid #e8e0d0' }}>
                  <div className="photo-frame" style={{ aspectRatio: '1/1', marginBottom: '20px', width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 20px' }}>
                    <img
                      src={`/designer-${i + 4}.jpg`}
                      alt={designer.name}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display font-medium text-subheading text-ink text-center mb-2" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    {designer.name}
                  </h3>
                  <p className="body-text text-center text-ink font-medium mb-2" style={{ fontSize: '14px', color: '#af6446' }}>
                    {designer.location}
                  </p>
                  <p className="body-text text-center" style={{ color: '#000', fontSize: '14px' }}>
                    {designer.coverage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rust" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              BOOK A DESIGN VISIT
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