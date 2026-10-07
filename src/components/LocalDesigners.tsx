'use client';

const designers = [
  { name: 'Sarah Mitchell', location: 'London & South East', image: '/designer-1.jpg' },
  { name: 'James Carter', location: 'South West (Devon & Cornwall)', image: '/designer-2.jpg' },
  { name: 'Emma Thompson', location: 'Midlands & North', image: '/designer-3.jpg' },
  { name: 'David Chen', location: 'London Central', image: '/designer-4.jpg' },
  { name: 'Lisa Patel', location: 'Home Counties', image: '/designer-5.jpg' },
  { name: 'Robert Wilson', location: 'National Coverage', image: '/designer-6.jpg' },
];

export function LocalDesigners() {
  return (
    <section className="section-rust" aria-labelledby="designers-heading">
      <div className="content-container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        {/* Display marker */}
        <h2 id="designers-heading" className="display-marker" style={{ marginBottom: '40px', color: '#000' }}>
          DESIGNERS IN YOUR COMMUNITY
        </h2>

        {/* Intro text */}
        <p className="body-text" style={{ maxWidth: '700px', marginBottom: '40px', color: '#000' }}>
          Our regional designers bring the showroom experience to your home. They&rsquo;ll measure
          your space, discuss your needs, and create initial designs — all at your kitchen table.
        </p>

        {/* Designer grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: '40px' }}>
          {designers.map((designer, index) => (
            <article key={index} className="group">
              <div className="photo-frame" style={{ aspectRatio: '1', marginBottom: '16px' }}>
                <img
                  src={designer.image}
                  alt={designer.name}
                  loading="lazy"
                />
              </div>
              <p className="body-text font-medium" style={{ color: '#000' }}>{designer.name}</p>
              <p className="caption" style={{ marginTop: '4px', color: '#000', opacity: 0.8 }}>
                {designer.location}
              </p>
            </article>
          ))}
        </div>

        <a
          href="/showrooms"
          className="link-plain font-body text-body-sm inline-flex items-center gap-2"
          style={{ color: '#000' }}
        >
          Meet the Team & Find a Showroom
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}