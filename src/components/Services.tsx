'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Fitted Wardrobes',
    description: 'Custom-designed fitted wardrobes that maximise every inch of your space. From floor-to-ceiling designs to awkward corners.',
    image: '/project-wardrobe.jpg',
    href: '/fitted-wardrobes',
    featured: true,
  },
  {
    title: 'Sliding Wardrobe Doors',
    description: 'Smooth-gliding sliding doors in a range of finishes including mirrored, glass, wood, and custom colours.',
    image: '/project-shaker.jpg',
    href: '/sliding-wardrobe-doors',
    featured: false,
  },
  {
    title: 'Walk-In Wardrobes',
    description: 'Luxury walk-in wardrobes designed around your lifestyle. Islands, lighting, accessories storage, and more.',
    image: '/project-walkin.jpg',
    href: '/walk-in-wardrobes',
    featured: true,
  },
  {
    title: 'Home Office Storage',
    description: 'Bespoke home office solutions with integrated desks, shelving, and cable management for the modern workspace.',
    image: '/project-white-wardrobe.jpg',
    href: '/home-office-storage',
    featured: false,
  },
  {
    title: 'Media & TV Units',
    description: 'Custom media walls and TV units with hidden cable management, sound system integration, and display shelving.',
    image: '/project-fireplace.jpg',
    href: '/media-tv-units',
    featured: false,
  },
  {
    title: 'Home Libraries',
    description: 'Floor-to-ceiling bookcases and library systems with integrated lighting, rolling ladders, and display cabinets.',
    image: '/project-wood-library.jpg',
    href: '/home-libraries',
    featured: true,
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      className="section-canvas"
      aria-labelledby="services-heading"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Section Header */}
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span
              className="caption text-rust mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              What We Create
            </motion.span>
            <motion.h2
              id="services-heading"
              className="display-marker text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              OUR STORAGE SOLUTIONS
            </motion.h2>
            <motion.p
              className="body-text-lg text-ink/50 dark:text-cream/50 mt-4 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Every home is unique. Our bespoke storage solutions are designed around your space, style, and storage needs.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Service Cards - Editorial Image-Led Grid */}
      <div className="container px-0">
        <div className="grid lg:grid-cols-12 gap-6 stagger">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className={`group relative ${service.featured ? 'lg:col-span-7' : 'lg:col-span-5'} lg:col-start-${service.featured ? (index === 0 ? '1' : index === 2 ? '6' : '1') : (index === 1 ? '1' : index === 3 ? '6' : index === 4 ? '11' : '1')}`}
              custom={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              <Link href={service.href} className="block card-interactive h-full">
                <div className="photo-frame aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
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
                    Service
                  </motion.span>
                  <motion.h3
                    className="font-display text-2xl lg:text-3xl font-medium leading-tight text-white mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="body-text-base text-cream/80 max-w-lg lg:max-w-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                  >
                    {service.description}
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
        </div>

        {/* Mobile masonry fallback */}
        <div className="image-grid-masonry stagger mt-16 lg:hidden">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="image-grid-item"
              custom={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <Link href={service.href} className="block card-interactive">
                <div className="photo-frame group aspect-square">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="overlay" />
                  <div className="content-overlay">
                    <span className="badge badge-accent mb-3">Service</span>
                    <h3 className="font-display text-xl font-medium leading-tight mb-2 text-white">
                      {service.title}
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