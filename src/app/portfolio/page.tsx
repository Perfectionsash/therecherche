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
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="page-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              500+ projects completed across London and the Home Counties.
              Every project tells a story of transformed space.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="projects-heading">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist" aria-label="Filter projects">
              {['All', 'Fitted Wardrobes', 'Sliding Doors', 'Walk-In Wardrobes', 'Home Offices', 'Media Units'].map((filter, i) => (
                <button key={i} role="tab" aria-selected={i === 0} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {filter}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel">
              {projects.map((project, i) => (
                <article key={i} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all">
                  <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">{project.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">{project.desc}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {project.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold transition-colors">View All Projects</button>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Project Could Be Next</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Book a free design visit and see what we can create for your space.</p>
            <a href="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Start Your Project</a>
          </div>
        </section>
      </main>
    </>
  );
}