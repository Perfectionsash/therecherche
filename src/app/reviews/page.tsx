import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials',
  description: 'Read genuine reviews from The Recherche clients. 4.9/5 rating across 200+ verified reviews. Trustpilot Excellent.',
};

const reviews = [
  { name: 'Sarah & James M.', location: 'Chelsea, London', project: 'Fitted Wardrobes', rating: 5, text: 'From design visit to installation, everything was seamless. The team understood exactly what we wanted and the fitting team were incredible — clean, precise, and respectful of our home. The finished wardrobes have transformed our bedroom.', date: '2024-01-15' },
  { name: 'David T.', location: 'Guildford, Surrey', project: 'Walk-In Wardrobe', rating: 5, text: 'The quality is exceptional. Every detail — the soft-close drawers, the lighting, the jewellery storage — has been thought through. It\'s been 18 months and everything still works perfectly. Worth every penny.', date: '2024-01-08' },
  { name: 'Emma & Robert K.', location: 'Hampstead, London', project: 'Sliding Wardrobe Doors', rating: 5, text: 'We had an awkward alcove with a sloping ceiling. Other companies said it couldn\'t be done. The Recherche designed a beautiful solution with mirrored sliding doors that maximised every inch. Highly recommended.', date: '2023-12-20' },
  { name: 'Lisa P.', location: 'Bristol, Clifton', project: 'Home Office Storage', rating: 5, text: 'Working from home full-time, I needed a proper office. The integrated desk with cable management and floor-to-ceiling shelving has made such a difference. The design team even suggested monitor arms I hadn\'t thought of.', date: '2023-12-12' },
  { name: 'Michael & Priya S.', location: 'Richmond, London', project: 'Fitted Wardrobes', rating: 5, text: 'Professional from start to finish. Fixed quote after the design visit — no surprises. Installation took 1.5 days and they left the room spotless. The 10-year guarantee gives real peace of mind.', date: '2023-11-28' },
  { name: 'Catherine W.', location: 'Oxford', project: 'Media & TV Unit', rating: 5, text: 'Bespoke TV wall with hidden cables, speaker integration, and display shelves for our art. The team came to our home with samples and 3D visualisations. It\'s the focal point of our living room now.', date: '2023-11-15' },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              REVIEWS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
              4.9/5 from 200+ verified reviews
            </p>
            <div className="flex items-center justify-center gap-4" style={{ marginBottom: '40px' }}>
              <span className="font-body text-body-sm text-ink">Rated Excellent on Trustpilot</span>
              <svg className="w-10 h-10 text-ink" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none"/>
                <text x="50" y="58" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">★</text>
              </svg>
            </div>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '60px' }}>
              {reviews.map((review, i) => (
                <article key={i} className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                  <div className="flex gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-rust" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="body-text" style={{ color: '#000', marginBottom: '16px', fontStyle: 'italic' }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-ink pt-4">
                    <p className="body-text font-medium" style={{ color: '#000', marginBottom: '4px' }}>{review.name}</p>
                    <p className="caption" style={{ color: '#000', opacity: 0.7 }}>
                      {review.location} &bull; {review.project} &bull; {new Date(review.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', textAlign: 'center' }}>
              <a
                href="https://trustpilot.com/review/therecherche.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="link-plain font-body text-body-sm inline-flex items-center gap-2"
              >
                View All Reviews on Trustpilot
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}