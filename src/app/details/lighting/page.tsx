import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Wardrobe Lighting',
  description: 'Integrated LED lighting for fitted wardrobes — sensor-activated spots, LED strips, illuminated hanging rails, and ambient lighting. Dimmable, colour-tunable options.',
};

const lighting = [
  { name: 'Sensor Spotlights', desc: 'PIR-activated, recessed in ceiling panel, 3000K/4000K, dimmable', image: '/light-spots.jpg' },
  { name: 'LED Strip Lighting', desc: 'Concealed in shelf fronts or side panels, continuous line, IP44 rated', image: '/light-strips.jpg' },
  { name: 'Illuminated Hanging Rails', desc: 'Aluminium rail with integrated LED, lights garments below, 5m max', image: '/light-rail.jpg' },
  { name: 'Ambient Door Lighting', desc: 'Vertical strips in door frames, glow on opening, colour-tunable', image: '/light-ambient.jpg' },
  { name: 'Drawer & Shelf Lights', desc: 'Battery or wired, motion-activated, perfect for deep drawers', image: '/light-drawer.jpg' },
  { name: 'Smart Control', desc: 'App/voice control, scenes, scheduling, integrates with HomeKit/Alexa/Google', image: '/light-smart.jpg' },
];

export default function LightingPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              WARDROBE LIGHTING
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Sensor-activated spots, LED strips, illuminated rails, ambient glow. Dimmable, colour-tunable, smart-home ready.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '60px' }}>
              {lighting.map((item, i) => (
                <article key={i} className="group">
                  <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{item.name}</p>
                  <p className="caption" style={{ color: '#000', opacity: 0.7 }}>{item.desc}</p>
                </article>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px', textAlign: 'center' }}>
                TECHNICAL SPEC
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-medium text-subheading text-ink mb-4" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    Standard Features
                  </h3>
                  <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                    {['24V low-voltage system', 'CRI 90+ for true colour rendering', '50,000hr LED lifespan', 'IP44 rated for wardrobe use', 'Dimmable 0–100%', '3000K / 4000K / Tunable White'].map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 body-text" style={{ color: '#000' }}>
                        <span className="w-2 h-2 rounded-full bg-ink flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-medium text-subheading text-ink mb-4" style={{ fontSize: '22px', lineHeight: '28px' }}>
                    Smart Options
                  </h3>
                  <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                    {['Casambi Bluetooth mesh', 'Apple HomeKit compatible', 'Alexa / Google Home ready', 'Scene setting (Morning / Evening / Off)', 'Scheduling & automation', 'Energy monitoring'].map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 body-text" style={{ color: '#000' }}>
                        <span className="w-2 h-2 rounded-full bg-rust flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}