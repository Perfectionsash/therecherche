'use client';

const services = [
  {
    title: 'Fitted Wardrobes',
    description: 'Custom-designed fitted wardrobes that maximise every inch of your space. From floor-to-ceiling designs to awkward corners.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: '/fitted-wardrobes',
  },
  {
    title: 'Sliding Wardrobe Doors',
    description: 'Smooth-gliding sliding doors in a range of finishes including mirrored, glass, wood, and custom colours.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5v14M16 5v14" />
      </svg>
    ),
    href: '/sliding-wardrobe-doors',
  },
  {
    title: 'Walk-In Wardrobes',
    description: 'Luxury walk-in wardrobes designed around your lifestyle. Islands, lighting, accessories storage, and more.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3v3m2 0v3m4-3v3m2 0v3m-8 3h10M4 15h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    href: '/walk-in-wardrobes',
  },
  {
    title: 'Home Office Storage',
    description: 'Bespoke home office solutions with integrated desks, shelving, and cable management for the modern workspace.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    href: '/home-office-storage',
  },
  {
    title: 'Media & TV Units',
    description: 'Custom media walls and TV units with hidden cable management, sound system integration, and display shelving.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Home Libraries',
    description: 'Floor-to-ceiling bookcases and library systems with integrated lighting, rolling ladders, and display cabinets.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-[80px] bg-canvas"
      aria-labelledby="services-heading"
    >
      <div className="section">
        <header className="section-header text-center" id="services-heading">
          <h2 className="font-display font-semibold text-heading-lg text-ink tracking-heading-lg leading-heading-lg">
            Our Storage Solutions
          </h2>
          <p className="font-text text-body text-ink-muted mt-4 max-w-2xl mx-auto leading-body tracking-body">
            Every home is unique. Our bespoke storage solutions are designed around your
            space, style, and storage needs.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => (
            <article
              key={index}
              className="card-white group hover:bg-surface-elevated"
              role="listitem"
            >
              <a href={service.href} className="block">
                <div className="text-accent mb-6 group-hover:text-accent-hover transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display font-semibold text-heading-sm text-ink mb-3 tracking-heading-sm leading-heading-sm">
                  {service.title}
                </h3>
                <p className="font-text text-body text-ink-muted leading-body tracking-body">
                  {service.description}
                </p>
                <span className="btn-text mt-6 inline-flex">Learn more</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}