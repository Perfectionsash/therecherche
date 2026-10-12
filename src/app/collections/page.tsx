import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Explore our wardrobe collections — Hartford, Kavanagh, Butler, Devine, Harrington, Summerville. Each with distinct character, finishes, and price points.',
};

const collections = [
  { name: 'Hartford', desc: 'Clean lines, handleless, contemporary. Matt lacquer & wood veneer.', price: 'From £3,500', image: '/collection-hartford.jpg' },
  { name: 'Kavanagh', desc: 'Shaker-inspired, traditional proportions. Painted finishes, classic hardware.', price: 'From £4,000', image: '/collection-kavanagh.jpg' },
  { name: 'Butler', desc: 'Minimal flush panel, integrated grip. High-gloss & matt lacquer.', price: 'From £3,800', image: '/collection-butler.jpg' },
  { name: 'Devine', desc: 'Glass & aluminium sliding doors. Frosted, reeded, clear, mirrored.', price: 'From £4,500', image: '/collection-devine.jpg' },
  { name: 'Harrington', desc: 'Frame & panel hinged doors. Period detailing, hand-painted finishes.', price: 'From £5,000', image: '/collection-harrington.jpg' },
  { name: 'Summerville', desc: 'Walk-in focused. Centre islands, smart lighting, accessory walls.', price: 'From £8,000', image: '/collection-summerville.jpg' },
];

export default function CollectionsPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              OUR COLLECTIONS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Six distinct ranges — from contemporary handleless to traditional shaker. Every collection fully customisable.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '60px' }}>
              {collections.map((collection, i) => (
                <article key={i} className="group">
                  <a href={`/collections/${collection.name.toLowerCase()}`} className="block">
                    <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px' }}>
                      <img
                        src={collection.image}
                        alt={`${collection.name} collection`}
                        loading="lazy"
                      />
                    </div>
                    <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{collection.name}</p>
                    <p className="caption" style={{ color: '#000', opacity: 0.7, marginBottom: '12px' }}>{collection.desc}</p>
                    <p className="body-text font-medium" style={{ color: '#af6446' }}>{collection.price}</p>
                  </a>
                </article>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', textAlign: 'center' }}>
              <a
                href="/fitted-wardrobes"
                className="link-plain font-body text-body-sm inline-flex items-center gap-2"
              >
                View All Wardrobe Options
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}