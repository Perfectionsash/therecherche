'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: 'The team transformed our spare room into a stunning home office with floor-to-ceiling storage. The design process was collaborative and the installation flawless.',
    author: 'Sarah & James Mitchell',
    location: 'Surrey',
    project: 'Home Office & Wardrobe',
    image: '/project-white-wardrobe.jpg',
    rating: 5,
  },
  {
    quote: 'Our walk-in wardrobe is the highlight of our bedroom renovation. The quality of materials and attention to detail is exceptional. Highly recommend.',
    author: 'Emma Thompson',
    location: 'London',
    project: 'Walk-In Wardrobe',
    image: '/project-walkin.jpg',
    rating: 5,
  },
  {
    quote: 'From the initial design visit to installation, everything was professional and stress-free. Our sliding door wardrobes look amazing and glide perfectly.',
    author: 'David & Lisa Chen',
    location: 'Manchester',
    project: 'Sliding Wardrobe Doors',
    image: '/project-shaker.jpg',
    rating: 5,
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      className="section-canvas relative"
      aria-labelledby="testimonials-heading"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[linear-gradient(135deg,#b8735215,#d4977815)] blur-3xl opacity-40" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: '400px 400px'
        }} />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span
              className="caption text-rust mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Client Stories
            </motion.span>
            <motion.h2
              id="testimonials-heading"
              className="display-marker text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              WHAT OUR CLIENTS SAY
            </motion.h2>
            <motion.p
              className="body-text-lg text-ink/50 dark:text-cream/50 mt-4 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Don&rsquo;t just take our word for it. Hear from families across the UK who&rsquo;ve transformed their homes with The Recherche.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:ml-auto"
          >
            <a
              href="#reviews"
              className="link-plain font-body text-base"
            >
              View All 127 Reviews
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        {/* Testimonial Cards - Editorial Layout with Project Images */}
        <div className="grid md:grid-cols-3 gap-6 stagger">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              className="group card-panel h-full flex flex-col"
              custom={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              {/* Project Image Preview */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.author}'s ${testimonial.project}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Quote */}
              <motion.blockquote
                className="flex-1 font-serif text-lg leading-relaxed text-ink/70 dark:text-cream/70 italic mb-6 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
              >
                <span className="text-rust font-display text-4xl leading-none block mb-3">&#8220;</span>
                {testimonial.quote}
              </motion.blockquote>

              {/* Author Info */}
              <motion.footer
                className="border-t border-ink/10 dark:border-cream/10 pt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-rust"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <cite className="not-italic">
                  <div className="font-display text-base font-medium text-ink dark:text-cream">
                    {testimonial.author}
                  </div>
                  <div className="caption text-ink/50 dark:text-cream/50 mt-0.5">
                    {testimonial.location}
                  </div>
                  <div className="caption text-rust font-medium mt-1">
                    {testimonial.project}
                  </div>
                </cite>
              </motion.footer>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}