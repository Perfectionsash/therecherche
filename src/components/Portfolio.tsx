'use client';

const projects = [
  {
    title: 'The Kitchen That Looks After You',
    subtitle: 'Indoor-outdoor family kitchen in North Bristol',
    image: '/project-1.jpg',
    href: '/portfolio/project-1',
    category: 'Fitted Wardrobes',
  },
  {
    title: 'Contemporary Walk-In Wardrobe',
    subtitle: 'Luxury dressing room with island unit, Surrey',
    image: '/project-2.jpg',
    href: '/portfolio/project-2',
    category: 'Walk-In Wardrobes',
  },
  {
    title: 'Home Office Transformation',
    subtitle: 'Floor-to-ceiling storage in Manchester loft',
    image: '/project-3.jpg',
    href: '/portfolio/project-3',
    category: 'Home Office Storage',
  },
  {
    title: 'Sliding Door Wardrobe System',
    subtitle: 'Mirrored doors maximising light in Chelsea flat',
    image: '/project-4.jpg',
    href: '/portfolio/project-4',
    category: 'Sliding Wardrobe Doors',
  },
  {
    title: 'Boot Room & Utility Storage',
    subtitle: 'Hardworking storage for country house, Oxfordshire',
    image: '/project-5.jpg',
    href: '/portfolio/project-5',
    category: 'Other Rooms',
  },
  {
    title: 'Media Wall & Living Storage',
    subtitle: 'Integrated AV and display shelving, Hampshire',
    image: '/project-6.jpg',
    href: '/portfolio/project-6',
    category: 'Media & TV Units',
  },
];

export function Portfolio() {
  return (
    <section className="section-bone" aria-labelledby="portfolio-heading">
      {/* Display marker */}
      <div className="content-container" style={{ paddingBottom: '20px' }}>
        <h2 id="portfolio-heading" className="display-marker">
          RECENT PROJECTS
        </h2>
      </div>

      {/* Project grid - 3 columns */}
      <div className="image-row" role="list" aria-label="Recent wardrobe projects">
        {projects.map((project, index) => (
          <article key={index} className="image-row-item" role="listitem">
            <a href={project.href} className="block">
              <div className="photo-frame" style={{ minHeight: '50vh' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <p className="caption photo-caption" style={{ marginTop: '10px', fontWeight: 500 }}>
                {project.category}
              </p>
              <p className="caption photo-caption" style={{ marginTop: '4px' }}>
                {project.title}
              </p>
              <p className="caption photo-caption" style={{ marginTop: '4px', opacity: 0.7 }}>
                {project.subtitle}
              </p>
            </a>
          </article>
        ))}
      </div>

      {/* View all link */}
      <div className="content-container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <a
          href="/portfolio"
          className="link-plain font-body text-body-sm inline-flex items-center gap-2"
        >
          View All Projects
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}