'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      id="quote"
      className="section-canvas relative"
      aria-labelledby="cta-heading"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Atmospheric background - dark with warm accents */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-ink" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[linear-gradient(135deg,#b8735220,#d4977820)] blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[linear-gradient(135deg,#b8735215,#d4977815)] blur-3xl opacity-40" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: '400px 400px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Split Layout - Content Left, Form Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -40, filter: 'blur(8px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:pr-12 text-center lg:text-left"
          >
            <motion.span
              className="caption text-rust mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Begin Your Project
            </motion.span>

            <motion.h2
              id="cta-heading"
              className="display-marker text-white text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              READY TO TRANSFORM<br /><span className="text-rust gradient-text">YOUR SPACE?</span>
            </motion.h2>

            <motion.p
              className="body-text-lg text-cream/60 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Book your free, no-obligation design consultation. Our team will visit your home, measure your space, and create a bespoke 3D visualisation.
            </motion.p>

            {/* Trust signals */}
            <motion.dl
              className="grid grid-cols-3 gap-6 mt-12 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="border-t border-cream/10 pt-6">
                <dt className="font-display text-3xl font-bold text-cream tracking-tight">£0</dt>
                <dd className="caption text-cream/50 mt-1">Design Consultation</dd>
              </div>
              <div className="border-t border-cream/10 pt-6">
                <dt className="font-display text-3xl font-bold text-cream tracking-tight">24h</dt>
                <dd className="caption text-cream/50 mt-1">Response Time</dd>
              </div>
              <div className="border-t border-cream/10 pt-6">
                <dt className="font-display text-3xl font-bold text-cream tracking-tight">10yr</dt>
                <dd className="caption text-cream/50 mt-1">Guarantee</dd>
              </div>
            </motion.dl>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 40, filter: 'blur(8px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="card-panel p-8 lg:p-10">
              <motion.form
                className="space-y-5"
                action="#"
                method="POST"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="input-field w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label htmlFor="postcode" className="sr-only">Postcode</label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    placeholder="Postcode (for area coverage check)"
                    required
                    className="input-field w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full mt-2 group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Free Design Visit
                    <motion.span
                      className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:bg-cream/20"
                      whileHover={{ scale: 1.08, x: 3, y: -2 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </motion.span>
                  </span>
                </button>
                <p className="caption text-cream/40 text-center tracking-body-sm leading-body-sm">
                  We&rsquo;ll contact you within 24 hours to arrange a convenient time.
                </p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}