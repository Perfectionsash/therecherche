import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Internal Accessories',
  description: 'Customise your wardrobe interior with pull-out shoe racks, jewellery drawers, trouser racks, tie/belt organisers, laundry baskets, and safe boxes.',
};

const accessories = [
  { name: 'Pull-Out Shoe Racks', desc: 'Angled shelves, full extension runners, capacity 12–18 pairs', image: '/acc-shoe-rack.jpg' },
  { name: 'Jewellery Drawers', desc: 'Velvet-lined compartments, ring rolls, necklace hooks, lockable option', image: '/acc-jewellery.jpg' },
  { name: 'Trouser Racks', desc: 'Pull-down or pull-out, non-slip bars, 10–20 pairs capacity', image: '/acc-trouser.jpg' },
  { name: 'Tie & Belt Organisers', desc: 'Motorised rotating or static pull-out, 20+ ties, 10+ belts', image: '/acc-tie-belt.jpg' },
  { name: 'Laundry Baskets', desc: 'Removable canvas or wire baskets, pull-out frame, 40–60L capacity', image: '/acc-laundry.jpg' },
  { name: 'Safe Boxes', desc: 'Integrated key or digital lock, fire-rated option, multiple sizes', image: '/acc-safe.jpg' },
  { name: 'Adjustable Shelving', desc: '32mm hole pattern, solid oak or melamine, 5kg per shelf rating', image: '/acc-shelving.jpg' },
  { name: 'Pull-Down Hanging Rail', desc: 'Gas-assisted, brings high rails to reachable height, 15kg capacity', image: '/acc-pulldown.jpg' },
];

export default function AccessoriesPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              INTERNAL ACCESSORIES
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Pull-out shoe racks, jewellery drawers, trouser racks, tie/belt organisers, laundry baskets, safe boxes — every detail considered.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginBottom: '60px' }}>
              {accessories.map((item, i) => (
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
                PLANNING YOUR INTERIOR
              </h2>
              <p className="body-text" style={{ color: '#000', marginBottom: '20px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 30px' }}>
                We create a 3D interior layout during your consultation — you choose exactly what goes where. Adjustable shelving means your storage evolves with you.
              </p>
              <a
                href="/contact"
                className="link-plain font-body text-body-sm inline-flex items-center gap-2 mx-auto block" style={{ textAlign: 'center', color: '#000', width: 'fit-content' }}
              >
                Book a Design Visit
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}