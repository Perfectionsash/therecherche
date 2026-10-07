'use client';

const collections = [
  { name: 'Hartford', image: '/collection-hartford.jpg', href: '/collections/hartford' },
  { name: 'Kavanagh', image: '/collection-kavanagh.jpg', href: '/collections/kavanagh' },
  { name: 'Butler', image: '/collection-butler.jpg', href: '/collections/butler' },
  { name: 'Devine', image: '/collection-devine.jpg', href: '/collections/devine' },
  { name: 'Harrington', image: '/collection-harrington.jpg', href: '/collections/harrington' },
  { name: 'Summerville', image: '/collection-summerville.jpg', href: '/collections/summerville' },
];

export function Collections() {
  return (
    <section className="section-bone" aria-labelledby="collections-heading">
      <div className="content-container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        {/* Display marker */}
        <h2 id="collections-heading" className="display-marker" style={{ marginBottom: '40px' }}>
          OUR COLLECTIONS
        </h2>

        {/* Collection grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: '40px' }}>
          {collections.map((collection, index) => (
            <article key={index} className="group">
              <a href={collection.href} className="block">
                <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px' }}>
                  <img
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    loading="lazy"
                  />
                </div>
                <p className="body-text font-medium">{collection.name}</p>
                <p className="caption" style={{ marginTop: '4px', opacity: 0.7 }}>
                  Browse {collection.name} Collection
                </p>
              </a>
            </article>
          ))}
        </div>

        <a
          href="/collections"
          className="link-plain font-body text-body-sm inline-flex items-center gap-2"
        >
          View All Collections
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}