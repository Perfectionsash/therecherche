'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function HomeVisit() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      className="section-canvas relative"
      aria-labelledby="homevisit-heading"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[linear-gradient(135deg,#b8735215,#d4977815)] blur-3xl opacity-50" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: '400px 400px'
        }} />
      </div>

      <div className="container">
        {/* Split Layout - Image Left, Content Right on Desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -40, filter: 'blur(8px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Main image with double-bezel frame */}
            <div className="relative photo-frame aspect-[4/3] max-w-lg mx-auto lg:mx-0">
              <div className="relative rounded-2xl p-2 bg-ink/5 dark:bg-cream/5 ring-1 ring-ink/5 dark:ring-cream/10 backdrop-blur-sm">
                <div className="relative rounded-[calc(1.5rem-0.5rem)] overflow-hidden bg-ink/5 dark:bg-cream/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                  <Image
                    src="/home-visit.jpg"
                    alt="Designer consulting with clients in their home"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-72 lg:w-80 p-6 bg-panel dark:bg-charcoal ring-1 ring-ink/5 dark:ring-cream/10 shadow-xl"
                initial={{ opacity: 0, y: 20, rotate: -3 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 20, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-rust/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rust">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="caption text-rust font-medium">Complimentary Service</p>
                    <p className="font-display text-sm font-medium text-ink dark:text-cream">No-obligation design visit</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rust/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rust">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="caption text-rust font-medium">~90 Minutes</p>
                    <p className="font-display text-sm font-medium text-ink dark:text-cream">In your home, at your convenience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 40, filter: 'blur(8px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:pl-12"
          >
            <motion.span
              className="caption text-rust mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Expert Guidance
            </motion.span>

            <motion.h2
              id="homevisit-heading"
              className="display-marker text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              EXPERT GUIDANCE,<br />IN YOUR HOME
            </motion.h2>

            <motion.p
              className="body-text-lg text-ink/50 dark:text-cream/50 leading-relaxed mb-6 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Our designers visit you — no need to travel. They&rsquo;ll measure your space, discuss your storage needs, and create initial 3D designs on the spot.
            </motion.p>

            <motion.p
              className="body-text-lg text-ink/50 dark:text-cream/50 leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              The visit takes about 90 minutes. There&rsquo;s no obligation, and you&rsquo;ll receive a detailed proposal with visualisations and pricing within a week.
            </motion.p>

            {/* Benefits list */}
            <motion.dl
              className="space-y-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rust/10 flex items-center justify-center mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-rust">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <dt className="font-display text-base font-medium text-ink dark:text-cream">Professional space planning</dt>
                  <dd className="body-text-sm text-ink/50 dark:text-cream/50 mt-1">Precise measurements and 3D visualisations</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rust/10 flex items-center justify-center mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-rust">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <dt className="font-display text-base font-medium text-ink dark:text-cream">Material & finish samples</dt>
                  <dd className="body-text-sm text-ink/50 dark:text-cream/50 mt-1">See and feel every option in your own light</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rust/10 flex items-center justify-center mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-rust">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <dt className="font-display text-base font-medium text-ink dark:text-cream">Clear, fixed pricing</dt>
                  <dd className="body-text-sm text-ink/50 dark:text-cream/50 mt-1">Detailed proposal within a week, no hidden costs</dd>
                </div>
              </div>
            </motion.dl>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Link
                href="#quote"
                className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-ink dark:bg-cream text-cream dark:text-ink font-body text-[15px] font-medium flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-xl active:scale-[0.98]"
              >
                <span className="relative z-10">Book Your Free Home Visit</span>
                <motion.span
                  className="w-12 h-12 rounded-full bg-cream/10 dark:bg-ink/10 flex items-center justify-center relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:bg-cream/20 dark:group-hover:bg-ink/20"
                  whileHover={{ scale: 1.08, x: 3, y: -2 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream dark:text-ink">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </motion.span>
              </Link>

              <Link
                href="/showrooms"
                className="group relative w-full sm:w-auto px-10 py-5 rounded-full ring-1 ring-ink/10 dark:ring-cream/10 bg-transparent text-ink/70 dark:text-cream/70 font-body text-[15px] font-medium flex items-center justify-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink/5 dark:hover:bg-cream/5 active:scale-[0.98]"
              >
                <span className="relative z-10">Visit a Showroom Instead</span>
                <motion.span
                  className="w-12 h-12 rounded-full bg-ink/5 dark:bg-cream/5 flex items-center justify-center relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:bg-ink/10 dark:group-hover:bg-cream/10"
                  whileHover={{ scale: 1.08, x: 3, y: -2 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink/50 dark:text-cream/50">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}