import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View our bespoke fitted wardrobes, sliding doors, walk-in wardrobes, and home office projects across London and the UK.',
};

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'The Recherche Portfolio',
  description: 'Completed fitted wardrobe and storage projects',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Fitted Wardrobes', url: 'https://therecherche.co.uk/portfolio/fitted-wardrobes' },
    { '@type': 'ListItem', position: 2, name: 'Sliding Doors', url: 'https://therecherche.co.uk/portfolio/sliding-doors' },
    { '@type': 'ListItem', position: 3, name: 'Walk-In Wardrobes', url: 'https://therecherche.co.uk/portfolio/walk-in-wardrobes' },
    { '@type': 'ListItem', position: 4, name: 'Home Offices', url: 'https://therecherche.co.uk/portfolio/home-offices' },
  ],
};

const projects = [
  { category: 'Fitted Wardrobes', location: 'Surrey', desc: 'Floor-to-ceiling mirrored doors with integrated lighting', img: '/portfolio/1.jpg' },
  { category: 'Walk-In Wardrobe', location: 'London', desc: 'Luxury dressing room with centre island and jewellery storage', img: '/portfolio/2.jpg' },
  { category: 'Sliding Doors', location: 'Kent', desc: 'Custom glass sliding doors in frosted finish', img: '/portfolio/3.jpg' },
  { category: 'Home Office', location: 'Essex', desc: 'Integrated desk with cable management and shelving', img: '/portfolio/4.jpg' },
  { category: 'Fitted Wardrobes', location: 'Hertfordshire', desc: 'Angled ceiling solution with sliding doors', img: '/portfolio/5.jpg' },
  { category: 'Media Unit', location: 'London', desc: 'Bespoke TV wall with hidden cables and sound system', img: '/portfolio/6.jpg' },
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              OUR WORK
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              500+ projects completed across London and the Home Counties. Every project tells a story of transformed space.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-bone" aria-labelledby="projects-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 id="projects-heading" className="sr-only">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel">
              {projects.map((project, i) => (
                <article key={i} className="group">
                  <div className="photo-frame" style={{ aspectRatio: '4/3', marginBottom: '16px' }}>
                    <img
                      src={project.img}
                      alt={`${project.desc} - ${project.location}`}
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 font-body text-body-sm text-ink bg-bone/90 px-3 py-1" style={{ border: '1px solid #e8e0d0' }}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{project.desc}</h3>
                  <p className="caption" style={{ color: '#000', opacity: 0.7 }}>
                    {project.location}
                  </p>
                </article>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <a
                href="/portfolio/all"
                className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-rust" aria-labelledby="cta-heading" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 id="cta-heading" className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              YOUR PROJECT COULD BE NEXT
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              Book a free design visit and see what we can create for your space.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
    </>
  );
}