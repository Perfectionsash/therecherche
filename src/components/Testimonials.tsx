'use client';

const testimonials = [
  {
    quote: 'The team transformed our spare room into a stunning home office with floor-to-ceiling storage. The design process was collaborative and the installation flawless.',
    author: 'Sarah & James Mitchell',
    location: 'Surrey',
    project: 'Home Office & Wardrobe',
    rating: 5,
  },
  {
    quote: 'Our walk-in wardrobe is the highlight of our bedroom renovation. The quality of materials and attention to detail is exceptional. Highly recommend.',
    author: 'Emma Thompson',
    location: 'London',
    project: 'Walk-In Wardrobe',
    rating: 5,
  },
  {
    quote: 'From the initial design visit to installation, everything was professional and stress-free. Our sliding door wardrobes look amazing and glide perfectly.',
    author: 'David & Lisa Chen',
    location: 'Manchester',
    project: 'Sliding Wardrobe Doors',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-[80px] bg-canvas"
      aria-labelledby="testimonials-heading"
    >
      <div className="section">
        <header className="section-header text-center" id="testimonials-heading">
          <h2 className="font-display font-semibold text-heading-lg text-ink tracking-heading-lg leading-heading-lg">
            What Our Clients Say
          </h2>
          <p className="font-text text-body text-ink-muted mt-4 max-w-2xl mx-auto leading-body tracking-body">
            Don't just take our word for it. Hear from families across the UK who've
            transformed their homes with The Recherche.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-6" role="list">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="card-white"
              role="listitem"
            >
              <div className="flex gap-1 mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-ember"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-text text-body text-ink-muted mb-6 leading-body tracking-body italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <div className="font-display font-semibold text-heading-sm text-ink tracking-heading-sm leading-heading-sm">
                    {testimonial.author}
                  </div>
                  <div className="font-text text-body-sm text-ink-muted mt-1 tracking-body-sm leading-body-sm">
                    {testimonial.location}
                  </div>
                  <div className="font-text text-body-sm text-accent font-medium mt-2 tracking-body-sm leading-body-sm">
                    {testimonial.project}
                  </div>
                </cite>
              </footer>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#reviews"
            className="link-inline"
          >
            View all 127 reviews ›
          </a>
        </div>
      </div>
    </section>
  );
}