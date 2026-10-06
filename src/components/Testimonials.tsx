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
      className="py-20 md:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from families across the UK who've
            transformed their homes with The Recherche.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-8" role="list">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              role="listitem"
            >
              <div className="flex gap-1 mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-primary-600 font-medium mt-1">{testimonial.project}</div>
                </cite>
              </footer>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#reviews"
            className="text-primary-600 hover:text-primary-700 font-medium underline"
          >
            View all 127 reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}