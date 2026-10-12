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
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              GUIDES & INSPIRATION
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Expert advice, design trends, and practical guides for your storage project.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="section-bone" aria-labelledby="guides-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {guides.map((guide, i) => (
                <article key={i} className="group" role="listitem">
                  <div className="photo-frame" style={{ aspectRatio: '16/9', marginBottom: '16px' }}>
                    <img
                      src="/guide-placeholder.jpg"
                      alt={`${guide.title} featured image`}
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 font-body text-body-sm text-ink bg-bone/90 px-3 py-1" style={{ border: '1px solid #e8e0d0' }}>
                      {guide.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-body-sm" style={{ color: '#000', opacity: 0.6 }}>
                      <time dateTime={guide.date}>{new Date(guide.date).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                      <span>•</span>
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className="font-display font-medium text-subheading text-ink" style={{ fontSize: '22px', lineHeight: '28px' }}>{guide.title}</h3>
                    <p className="body-text" style={{ color: '#000' }}>{guide.desc}</p>
                    <a href={`/guides/${guide.slug}`} className="link-plain font-body text-body-sm inline-flex items-center gap-2" style={{ color: '#000' }}>
                      Read Guide
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-rust" aria-labelledby="cta-heading" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 id="cta-heading" className="display-marker" style={{ marginBottom: '20px', color: '#000' }}>
              NEED PERSONALISED ADVICE?
            </h2>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#000' }}>
              We can assess your space and recommend the perfect solution — free of charge.
            </p>
            <a
              href="/contact"
              className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
            >
              Book Free Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}