import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Handles & Hardware',
  description: 'Browse our collection of handles, knobs, and hardware for fitted wardrobes. Minimal recessed grips, statement pulls, push-to-open, and integrated lighting profiles.',
};

const hardware = [
  { name: 'Recessed Grip Channel', desc: 'Integrated aluminium channel, handleless aesthetic, multiple finishes', image: '/hw-grip-channel.jpg' },
  { name: 'Slim Bar Pull', desc: 'Minimal round bar, 160mm–1200mm lengths, brushed or polished', image: '/hw-bar-pull.jpg' },
  { name: 'T-Bar Handle', desc: 'Architectural T-profile, substantial grip, horizontal or vertical', image: '/hw-t-bar.jpg' },
  { name: 'Discrete Knob', desc: 'Small round or square knob, subtle accent, ideal for shaker doors', image: '/hw-knob.jpg' },
  { name: 'Push-to-Open', desc: 'Touch-latch mechanism, completely handleless, soft-close compatible', image: '/hw-push-open.jpg' },
  { name: 'Integrated LED Profile', desc: 'Aluminium channel with concealed LED, lights interior on opening', image: '/hw-led-profile.jpg' },
];

export default function HandlesPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              HANDLES & HARDWARE
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Minimal recessed grips, statement pulls, push-to-open, and integrated lighting profiles. All premium brands — Blum, Hettich, Häfele.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '60px' }}>
              {hardware.map((item, i) => (
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
                FINISHES AVAILABLE
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                {['Matt Black', 'Brushed Brass', 'Polished Chrome', 'Brushed Nickel', 'Matt White', 'Antique Bronze', 'Gunmetal', 'Custom RAL'].map((finish, i) => (
                  <span key={i} className="font-body text-body-sm px-4 py-2" style={{ border: '1px solid #e8e0d0', color: '#000' }}>
                    {finish}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}