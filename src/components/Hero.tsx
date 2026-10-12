'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroImages = [
  { src: '/hero-main.jpg', alt: 'Bespoke fitted wardrobe with Shaker-style doors', category: 'Fitted Wardrobes' },
  { src: '/hero-walkin.jpg', alt: 'Modern walk-in wardrobe with integrated lighting', category: 'Walk-In Wardrobes' },
  { src: '/hero-dressing.jpg', alt: 'Glass-door dressing room with custom cabinetry', category: 'Dressing Rooms' },
];

const backgroundImages = [
  '/project-wood-library.jpg',
  '/project-fretwork.jpg',
  '/project-light-dressing.jpg',
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(900);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, viewportHeight], [0, 150]);
  const y2 = useTransform(scrollY, [0, viewportHeight], [0, -80]);
  const opacity = useTransform(scrollY, [0, viewportHeight * 0.5], [1, 0.3]);
  const scale = useTransform(scrollY, [0, viewportHeight], [1, 1.05]);

  // Set viewport height on client mount
  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-[100dvh] flex items-center px-6 md:px-12 overflow-hidden section-canvas"
      style={{ backgroundColor: 'var(--surface-canvas)' }}
    >
      {/* Atmospheric background orbs */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -top-1/2 -right-1/4 w-[700px] h-[700px] rounded-full bg-[linear-gradient(135deg,#b873521a,#d497781a)] blur-3xl opacity-40" />
        <div className="absolute -bottom-1/4 -left-1/2 w-[600px] h-[600px] rounded-full bg-[linear-gradient(135deg,#b8735215,#d4977815)] blur-3xl opacity-30" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: '400px 400px'
        }} />
      </div>

      {/* Ambient background images - subtle, behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {backgroundImages.map((img, i) => (
          <motion.div
            key={img}
            className="absolute"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 15}%`,
              width: '300px',
              height: '400px',
              opacity: 0.04,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.04 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover rounded-lg"
              priority={i === 0}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        {/* Editorial Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Massive Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:pr-12"
          >
            {/* Eyebrow Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-panel dark:bg-charcoal-light ring-1 ring-ink/5 dark:ring-cream/10 text-xs font-body font-medium uppercase tracking-[0.2em] text-ink/60 dark:text-cream/60 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-rust" />
              Since 2008 · UK Manufactured · 10-Year Guarantee
            </motion.span>

            {/* Main Headline - Editorial scale */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-[clamp(52px,9vw,104px)] leading-[1.02] tracking-[-0.02em] text-ink/95 dark:text-cream/95 mb-10"
              style={{ fontVariationSettings: '"wght" 500' }}
            >
              Bespoke Fitted
              <br />
              <span className="text-rust gradient-text">Wardrobes & Storage</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[clamp(18px,2.2vw,22px)] leading-[1.7] text-ink/50 dark:text-cream/50 max-w-lg mb-14"
            >
              Exceptionally crafted fitted wardrobes, sliding doors, and whole-home storage solutions. Designed around your life, manufactured in our UK workshops.
            </motion.p>

            {/* Dual CTA - Button-in-Button pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Link
                href="#quote"
                className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-ink dark:bg-cream text-cream dark:text-ink font-body text-[15px] font-medium flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-xl active:scale-[0.98]"
              >
                <span className="relative z-10">Book Free Design Consultation</span>
                <motion.span
                  className="w-12 h-12 rounded-full bg-cream/10 dark:bg-ink/10 flex items-center justify-center relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:bg-cream/20 dark:group-hover:bg-ink/20"
                  whileHover={{ scale: 1.08, x: 3, y: -2 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream dark:text-ink">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </motion.span>
              </Link>

              <Link
                href="#collections"
                className="group relative w-full sm:w-auto px-10 py-5 rounded-full ring-1 ring-ink/10 dark:ring-cream/10 bg-transparent text-ink/70 dark:text-cream/70 font-body text-[15px] font-medium flex items-center justify-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink/5 dark:hover:bg-cream/5 active:scale-[0.98]"
              >
                <span className="relative z-10">Explore Collections</span>
                <motion.span
                  className="w-12 h-12 rounded-full bg-ink/5 dark:bg-cream/5 flex items-center justify-center relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:bg-ink/10 dark:group-hover:bg-cream/10"
                  whileHover={{ scale: 1.08, x: 3, y: -2 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink/50 dark:text-cream/50">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 flex flex-wrap items-center gap-10 text-[13px] font-body text-ink/40 dark:text-cream/40"
            >
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rust">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>Free Design Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rust">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rust">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>10-Year Guarantee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Interactive Horizontal Image Pills */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative"
            style={{
              y: y1,
              opacity: opacity,
            }}
          >
            {/* Scroll indicator */}
            <motion.div
              className="absolute -top-4 left-0 right-0 flex justify-center pointer-events-none"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-px h-20 bg-gradient-to-b from-ink/20 dark:from-cream/20 to-transparent" />
            </motion.div>

            {/* Horizontal scrolling image pills */}
            <div className="relative h-[75vh] lg:h-[90vh] min-h-[550px]">
              {heroImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
                  style={{
                    zIndex: heroImages.length - index,
                    opacity: activeIndex === index ? 1 : 0,
                    pointerEvents: activeIndex === index ? 'auto' : 'none',
                  }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scale: activeIndex === index ? 1 : 0.95,
                    filter: activeIndex === index ? 'blur(0px)' : 'blur(4px)',
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Double-Bezel Image Card */}
                  <div className="relative w-full max-w-[580px] mx-auto">
                    {/* Outer Shell */}
                    <div className="relative rounded-2xl p-2 bg-ink/5 dark:bg-cream/5 ring-1 ring-ink/5 dark:ring-cream/10 backdrop-blur-sm">
                      {/* Inner Core */}
                      <div className="relative rounded-[calc(1.5rem-0.5rem)] overflow-hidden bg-ink/5 dark:bg-cream/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                          style={{
                            transform: `translateY(${y2.get()}px) scale(${scale.get()})`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Category badge */}
                    <motion.div
                      className="absolute -bottom-8 left-0 w-full max-w-[580px] mx-auto px-8 pointer-events-none"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-ink/90 dark:bg-cream/90 backdrop-blur-2xl ring-1 ring-cream/10 text-cream dark:text-ink font-body text-[13px] font-medium shadow-[0_12px_48px_rgba(0,0,0,0.35)]">
                        <span className="w-2 h-2 rounded-full bg-rust" />
                        {img.category}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Pill indicators */}
              <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {heroImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-3 h-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeIndex === index
                        ? 'bg-ink/90 dark:bg-cream/90 w-10'
                        : 'bg-ink/20 dark:bg-cream/20 hover:bg-ink/40 dark:hover:bg-cream/40'
                    }`}
                    aria-label={`View image ${index + 1}`}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
        style={{ opacity: opacity }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-28 bg-gradient-to-b from-ink/20 dark:from-cream/20 to-transparent"
        />
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-ink/40 dark:text-cream/40">Scroll</span>
      </motion.div>
    </motion.section>
  );
}