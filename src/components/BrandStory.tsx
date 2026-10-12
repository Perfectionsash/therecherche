'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      className="section-canvas relative"
      aria-labelledby="story-heading"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[linear-gradient(135deg,#b8735215,#d4977815)] blur-3xl opacity-40" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: '400px 400px'
        }} />
      </div>

      <div className="container">
        {/* Split Layout - Content Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -40, filter: 'blur(8px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:pr-12"
          >
            <motion.span
              className="caption text-rust mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              id="story-heading"
              className="display-marker text-balance mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              IT&rsquo;S THE FEELING<br />THAT MAKES A<br /><span className="text-rust gradient-text">RECHERCHE WARDROBE</span><br />SPECIAL
            </motion.h2>

            <motion.div
              className="space-y-6 text-ink/60 dark:text-cream/60"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.p
                className="body-text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Since 2008, we&rsquo;ve been designing and manufacturing bespoke fitted wardrobes and storage solutions from our workshop in the heart of England. Every piece begins with a conversation — understanding how you live, what you store, and how you want your space to feel.
              </motion.p>
              <motion.p
                className="body-text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Our team works with you to create 3D visualisations, selecting from an extensive range of finishes, door styles, and internal configurations. Our craftsmen then build each wardrobe to exacting standards, and our installation teams fit with precision and care — typically in just one to two days.
              </motion.p>
            </motion.div>

            {/* Key stats */}
            <motion.dl
              className="grid grid-cols-2 gap-6 lg:gap-10 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="border-t border-ink/10 dark:border-cream/10 pt-6">
                <dt className="font-display text-4xl font-bold text-ink dark:text-cream tracking-tight">2013</dt>
                <dd className="caption text-ink/50 dark:text-cream/50 mt-1">Established</dd>
              </div>
              <div className="border-t border-ink/10 dark:border-cream/10 pt-6">
                <dt className="font-display text-4xl font-bold text-ink dark:text-cream tracking-tight">10yr</dt>
                <dd className="caption text-ink/50 dark:text-cream/50 mt-1">Guarantee</dd>
              </div>
              <div className="border-t border-ink/10 dark:border-cream/10 pt-6">
                <dt className="font-display text-4xl font-bold text-ink dark:text-cream tracking-tight">UK</dt>
                <dd className="caption text-ink/50 dark:text-cream/50 mt-1">Manufactured</dd>
              </div>
              <div className="border-t border-ink/10 dark:border-cream/10 pt-6">
                <dt className="font-display text-4xl font-bold text-ink dark:text-cream tracking-tight">1-2</dt>
                <dd className="caption text-ink/50 dark:text-cream/50 mt-1">Days Installation</dd>
              </div>
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/about"
                className="link-plain font-body text-base inline-flex items-center gap-2"
              >
                Discover How We Do It
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: Imagery - Workshop/Process imagery */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 40, filter: 'blur(8px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main workshop image */}
              <div className="relative photo-frame aspect-[4/3]">
                <div className="relative rounded-2xl p-2 bg-ink/5 dark:bg-cream/5 ring-1 ring-ink/5 dark:ring-cream/10 backdrop-blur-sm">
                  <div className="relative rounded-[calc(1.5rem-0.5rem)] overflow-hidden bg-ink/5 dark:bg-cream/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    <Image
                      src="/project-wood-veneer.jpg"
                      alt="Craftsman working in workshop on bespoke wardrobe"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Floating process cards */}
              <motion.div
                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-72 lg:w-80 p-6 bg-panel dark:bg-charcoal ring-1 ring-ink/5 dark:ring-cream/10 shadow-xl"
                initial={{ opacity: 0, y: 20, rotate: 3 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 20, rotate: 3 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="caption text-rust font-medium mb-3">Our Process</p>
                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Consult & Design', desc: 'Home visit, 3D visuals, material selection' },
                    { num: '02', title: 'Craft & Build', desc: 'UK workshop, precision joinery, hand-finished' },
                    { num: '03', title: 'Install & Enjoy', desc: 'Expert fitting, 1-2 days, 10-year guarantee' },
                  ].map((step, i) => (
                    <motion.div
                      key={step.num}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    >
                      <span className="font-mono text-ink/30 dark:text-cream/30 text-sm font-medium mt-1">{step.num}</span>
                      <div>
                        <p className="font-body text-sm font-medium text-ink dark:text-cream">{step.title}</p>
                        <p className="body-text-xs text-ink/50 dark:text-cream/50">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}