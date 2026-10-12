'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const collections = [
  {
    name: 'Hartford',
    image: '/collection-hartford.jpg',
    description: 'Classic Shaker simplicity with modern precision. Timeless proportions, hand-finished details.',
    href: '/collections/hartford',
    featured: true,
  },
  {
    name: 'Kavanagh',
    image: '/collection-kavanagh.jpg',
    description: 'Contemporary minimalism in painted finishes. Clean lines, integrated hardware, pure function.',
    href: '/collections/kavanagh',
    featured: false,
  },
  {
    name: 'Butler',
    image: '/collection-butler.jpg',
    description: 'Warm traditional styling with panelled doors. Rich wood tones, heritage craftsmanship.',
    href: '/collections/butler',
    featured: false,
  },
  {
    name: 'Devine',
    image: '/collection-devine.jpg',
    description: 'Bold architectural presence. Fluted textures, geometric hardware, statement interiors.',
    href: '/collections/devine',
    featured: false,
  },
  {
    name: 'Harrington',
    image: '/collection-harrington.jpg',
    description: 'Elegant transitional design. Beaded inset doors, muted palettes, understated luxury.',
    href: '/collections/harrington',
    featured: false,
  },
  {
    name: 'Summerville',
    image: '/collection-summerville.jpg',
    description: 'Light-filled modern classic. Glass-fronted display, open shelving, curated living.',
    href: '/collections/summerville',
    featured: true,
  },
];

export function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      className="section-canvas"
      aria-labelledby="collections-heading"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Section Header */}
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.span
              className="caption text-rust mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Curated Ranges
            </motion.span>
            <motion.h2
              id="collections-heading"
              className="display-marker text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              OUR COLLECTIONS
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:ml-auto"
          >
            <Link
              href="/collections"
              className="link-plain font-body text-base"
            >
              View All Collections
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Editorial Grid - Asymmetric Layout */}
      <div className="container px-0">
        <div className="grid lg:grid-cols-12 gap-6 stagger">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.name}
              className={`group relative ${collection.featured ? 'lg:col-span-7' : 'lg:col-span-5'} lg:col-start-${collection.featured ? (index === 0 ? '1' : '6') : (index === 1 ? '1' : index === 2 ? '6' : index === 3 ? '11' : index === 4 ? '1' : '6')}`}
              custom={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              <Link href={collection.href} className="block card-interactive h-full">
                <div className="photo-frame aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="overlay" />
                </div>

                {/* Content overlay - bottom aligned */}
                <div className="absolute bottom-0 left-0 right-0 p-8 pb-6">
                  <motion.span
                    className="badge badge-accent mb-3 inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                  >
                    Collection
                  </motion.span>
                  <motion.h3
                    className="font-display text-3xl lg:text-4xl font-medium leading-tight text-white mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                  >
                    {collection.name}
                  </motion.h3>
                  <motion.p
                    className="body-text-lg text-cream/80 max-w-xl lg:max-w-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                  >
                    {collection.description}
                  </motion.p>
                  <motion.div
                    className="flex items-center gap-2 text-cream/60 font-body text-sm mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
                  >
                    <span>Explore</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </motion.div>
                </div>
              </Link>
            </motion.article>
          ))}

          {/* Secondary smaller cards for non-featured collections - alternative layout */}
          {/* We'll use a different approach - let's do a masonry-style grid instead */}
        </div>

        {/* Alternative: Masonry Grid Layout */}
        <div className="image-grid-masonry stagger mt-16 lg:hidden">
          {collections.slice(2).map((collection, index) => (
            <motion.article
              key={collection.name}
              className="image-grid-item"
              custom={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <Link href={collection.href} className="block card-interactive">
                <div className="photo-frame group aspect-square">
                  <Image
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="overlay" />
                  <div className="content-overlay">
                    <span className="badge badge-accent mb-3">Collection</span>
                    <h3 className="font-display text-xl font-medium leading-tight mb-2 text-white">
                      {collection.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}