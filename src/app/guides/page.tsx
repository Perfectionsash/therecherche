import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Guides & Inspiration',
  description: 'Expert guides on fitted wardrobe design, sliding door options, walk-in wardrobe planning, and home office storage solutions.',
};

const guidesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'The Recherche Guides',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Fitted Wardrobe Design Ideas', url: 'https://therecherche.co.uk/guides/fitted-wardrobe-design-ideas' },
    { '@type': 'ListItem', position: 2, name: 'Sliding Door Options Guide', url: 'https://therecherche.co.uk/guides/sliding-door-options' },
    { '@type': 'ListItem', position: 3, name: 'Walk-In Wardrobe Planning', url: 'https://therecherche.co.uk/guides/walk-in-wardrobe-planning' },
    { '@type': 'ListItem', position: 4, name: 'Home Office Storage Solutions', url: 'https://therecherche.co.uk/guides/home-office-storage-solutions' },
    { '@type': 'ListItem', position: 5, name: 'Wardrobe Maintenance & Care', url: 'https://therecherche.co.uk/guides/wardrobe-maintenance-care' },
  ],
};

const guides = [
  {
    title: 'Fitted Wardrobe Design Ideas 2024',
    slug: 'fitted-wardrobe-design-ideas',
    category: 'Fitted Wardrobes',
    readTime: '8 min read',
    desc: 'Discover the latest trends in fitted wardrobe design — from handleless doors to integrated lighting and smart storage solutions.',
    date: '2024-01-15',
  },
  {
    title: 'Sliding Wardrobe Doors: Complete Buying Guide',
    slug: 'sliding-door-options',
    category: 'Sliding Doors',
    readTime: '10 min read',
    desc: 'Everything you need to know about sliding door systems — top-hung vs bottom-rolling, finishes, and space requirements.',
    date: '2024-01-10',
  },
  {
    title: 'How to Plan the Perfect Walk-In Wardrobe',
    slug: 'walk-in-wardrobe-planning',
    category: 'Walk-In Wardrobes',
    readTime: '12 min read',
    desc: 'Step-by-step guide to designing your dream dressing room — layout, lighting, accessories, and budget planning.',
    date: '2024-01-05',
  },
  {
    title: 'Home Office Storage: Maximise Productivity',
    slug: 'home-office-storage-solutions',
    category: 'Home Office',
    readTime: '7 min read',
    desc: 'Create a workspace that works for you. Ergonomic desks, cable management, and storage that adapts to your workflow.',
    date: '2023-12-20',
  },
  {
    title: 'Wardrobe Care: Keep Yours Looking New',
    slug: 'wardrobe-maintenance-care',
    category: 'Maintenance',
    readTime: '5 min read',
    desc: 'Simple maintenance tips to keep your fitted wardrobes, sliding doors, and walk-ins looking pristine for years.',
    date: '2023-12-15',
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={guidesSchema} />
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="page-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Guides & Inspiration
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, design trends, and practical guides for your storage project.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="guides-heading">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {guides.map((guide, i) => (
                <article key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all" role="listitem">
                  <div className="aspect-[16/9] bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                    </div>
                    <span className="absolute top-3 left-3 bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded">{guide.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <time dateTime={guide.date}>{new Date(guide.date).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                      <span>•</span>
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.desc}</p>
                    <a href={`/guides/${guide.slug}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                      Read Guide <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Need Personalised Advice?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Our designers can assess your space and recommend the perfect solution — free of charge.</p>
            <a href="/contact" className="inline-block bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Book Free Consultation</a>
          </div>
        </section>
      </main>
    </>
  );
}