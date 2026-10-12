'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'The Kitchen That Looks After You',
    subtitle: 'Indoor-outdoor family kitchen in North Bristol',
    image: '/project-wardrobe.jpg',
    category: 'Fitted Wardrobes',
    href: '/portfolio/project-1',
    span: 2,
    tall: true,
  },
  {
    title: 'Contemporary Walk-In Wardrobe',
    subtitle: 'Luxury dressing room with island unit, Surrey',
    image: '/project-spray-painted.jpg',
    category: 'Walk-In Wardrobes',
    href: '/portfolio/project-2',
    span: 1,
    tall: false,
  },
  {
    title: 'Home Office Transformation',
    subtitle: 'Floor-to-ceiling storage in Manchester loft',
    image: '/project-white-wardrobe.jpg',
    category: 'Home Office Storage',
    href: '/portfolio/project-3',
    span: 1,
    tall: false,
  },
  {
    title: 'Sliding Door Wardrobe System',
    subtitle: 'Mirrored doors maximising light in Chelsea flat',
    image: '/project-shaker.jpg',
    category: 'Sliding Wardrobe Doors',
    href: '/portfolio/project-4',
    span: 2,
    tall: true,
  },
  {
    title: 'Boot Room & Utility Storage',
    subtitle: 'Hardworking storage for country house, Oxfordshire',
    image: '/project-modern-walkin.jpg',
    category: 'Other Rooms',
    href: '/portfolio/project-5',
    span: 1,
    tall: false,
  },
  {
    title: 'Media Wall & Living Storage',
    subtitle: 'Integrated AV and display shelving, Hampshire',
    image: '/project-hallway.jpg',
    category: 'Media & TV Units',
    href: '/portfolio/project-6',
    span: 1,
    tall: false,
  },
  {
    title: 'Wood Veneer Library',
    subtitle: 'Bespoke fitted library with glass doors, London',
    image: '/project-wood-library.jpg',
    category: 'Home Libraries',
    href: '/portfolio/project-7',
    span: 1,
    tall: true,
  },
  {
    title: 'Light-Filled Dressing Room',
    subtitle: 'Painted dressing room with custom island, Surrey',
    image: '/project-light-dressing.jpg',
    category: 'Dressing Rooms',
    href: '/portfolio/project-8',
    span: 2,
    tall: false,
  },
  {
    title: 'Fretwork Detailed Wardrobe',
    subtitle: 'Custom fretwork panels in Mayfair residence',
    image: '/project-fretwork.jpg',
    category: 'Fitted Wardrobes',
    href: '/portfolio/project-9',
    span: 1,
    tall: false,
  },
  {
    title: 'Mirror Sliding Doors with TV Niche',
    subtitle: 'Mirrored sliding doors with integrated media, Knightsbridge',
    image: '/project-mirror-sliding.jpg',
    category: 'Sliding Wardrobe Doors',
    href: '/portfolio/project-10',
    span: 1,
    tall: false,
  },
  {
    title: 'Living Room with Fireplace Storage',
    subtitle: 'Bespoke shelving around fireplace, Hampstead',
    image: '/project-fireplace.jpg',
    category: 'Media & TV Units',
    href: '/portfolio/project-11',
    span: 2,
    tall: true,
  },
  {
    title: 'Glass Walk-In Wardrobe',
    subtitle: 'Floor-to-ceiling glass doors, St Johns Wood',
    image: '/project-glass-walkin.jpg',
    category: 'Walk-In Wardrobes',
    href: '/portfolio/project-12',
    span: 1,
    tall: false,
  },
  {
    title: 'Wood Veneer Fitted Library',
    subtitle: 'Custom wood veneer library, Kensington',
    image: '/project-wood-veneer.jpg',
    category: 'Home Libraries',
    href: '/portfolio/project-13',
    span: 1,
    tall: false,
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={sectionRef}
      className="section-canvas"
      aria-labelledby="portfolio-heading"
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
              Our Work
            </motion.span>
            <motion.h2
              id="portfolio-heading"
              className="display-marker text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              RECENT PROJECTS
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:ml-auto"
          >
            <Link
              href="/portfolio"
              className="link-plain font-body text-base"
            >
              View All Projects
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container px-0">
        <div className="image-grid-masonry stagger">
          {projects.map((project, index) => (
            <motion.article
              key={project.href}
              className={`image-grid-item ${project.span === 2 ? 'span-2 lg:span-2' : ''} ${project.tall ? 'tall lg:tall' : ''}`}
              custom={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ transitionDelay: `${index * 60}ms` }}
              whileInView={{ scale: [1, 1.01, 1] }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <Link href={project.href} className="block card-interactive">
                <div className="photo-frame group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="overlay" />
                  {/* Content overlay */}
                  <div className="content-overlay">
                    <span className="badge badge-accent mb-3">{project.category}</span>
                    <h3 className="font-display text-2xl font-medium leading-tight mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="body-text-sm text-cream/80 max-w-md">
                      {project.subtitle}
                    </p>
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