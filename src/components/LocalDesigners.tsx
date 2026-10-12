'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const designers = [
  {
    name: 'Sarah Mitchell',
    location: 'London & South East',
    image: '/designer-1.jpg',
    bio: 'Specialises in period property restorations and classic Shaker designs. 15 years crafting bespoke fitted furniture.',
  },
  {
    name: 'James Carter',
    location: 'South West (Devon & Cornwall)',
    image: '/designer-2.jpg',
    bio: 'Expert in coastal homes and light-filled spaces. Known for contemporary painted finishes and clever storage solutions.',
  },
  {
    name: 'Emma Thompson',
    location: 'Midlands & North',
    image: '/designer-1.jpg',
    bio: 'Focuses on family homes and practical luxury. Blends traditional joinery with modern organisational systems.',
  },
  {
    name: 'David Chen',
    location: 'London Central',
    image: '/designer-2.jpg',
    bio: 'Architectural background informs precise, minimal designs. Specialises in high-spec city apartments and penthouses.',
  },
  {
    name: 'Lisa Patel',
    location: 'Home Counties',
    image: '/designer-1.jpg',
    bio: 'Colour consultant turned designer. Creates warm, characterful interiors with bespoke painted cabinetry.',
  },
  {
    name: 'Robert Wilson',
    location: 'National Coverage',
    image: '/designer-2.jpg',
    bio: 'Senior designer for complex whole-home projects. Coordinates multi-room schemes from concept to installation.',
  },
];

export function LocalDesigners() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      className="section-canvas"
      aria-labelledby="designers-heading"
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
              Your Local Expert
            </motion.span>
            <motion.h2
              id="designers-heading"
              className="display-marker text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              DESIGNERS IN YOUR COMMUNITY
            </motion.h2>
            <motion.p
              className="body-text-lg text-ink/50 dark:text-cream/50 mt-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Our regional designers bring the showroom experience to your home. They&rsquo;ll measure your space, discuss your needs, and create initial designs — all at your kitchen table.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:ml-auto"
          >
            <Link
              href="/showrooms"
              className="link-plain font-body text-base"
            >
              Meet the Team & Find a Showroom
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Designer Cards - Editorial Portrait Grid */}
      <div className="container px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {designers.map((designer, index) => (
            <motion.article
              key={designer.name}
              className="group"
              custom={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              <div className="card-panel h-full">
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-xl">
                  <Image
                    src={designer.image}
                    alt={designer.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Designer Info */}
                <div className="space-y-2">
                  <motion.h3
                    className="font-display text-xl font-medium leading-tight text-ink dark:text-cream"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                  >
                    {designer.name}
                  </motion.h3>
                  <motion.p
                    className="caption text-rust font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.25 + index * 0.08, duration: 0.4 }}
                  >
                    {designer.location}
                  </motion.p>
                  <motion.p
                    className="body-text-sm text-ink/50 dark:text-cream/50 mt-2 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                  >
                    {designer.bio}
                  </motion.p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}