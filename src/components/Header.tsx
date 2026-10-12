'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Fitted Wardrobes', href: '/fitted-wardrobes' },
  { label: 'Sliding Wardrobe Doors', href: '/sliding-wardrobe-doors' },
  { label: 'Walk-In Wardrobes', href: '/walk-in-wardrobes' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Home Office Storage', href: '/home-office-storage' },
  { label: 'Other Rooms', href: '/other-rooms' },
  { label: 'About Us', href: '/about' },
  { label: 'Inspiration', href: '/guides' },
];

const dropdowns = [
  {
    label: 'Our Service',
    items: [
      { label: 'Free Design Consultation', href: '/service/design' },
      { label: 'Professional Installation', href: '/service/installation' },
      { label: 'UK Manufacturing', href: '/service/manufacturing' },
      { label: '10-Year Guarantee', href: '/service/guarantee' },
    ],
  },
  {
    label: 'Details & Finishes',
    items: [
      { label: 'Paint Colours', href: '/details/colours' },
      { label: 'Door Styles', href: '/details/styles' },
      { label: 'Handles & Hardware', href: '/details/handles' },
      { label: 'Internal Accessories', href: '/details/accessories' },
      { label: 'Lighting', href: '/details/lighting' },
      { label: 'View All Details', href: '/details' },
    ],
  },
  {
    label: 'Areas We Cover',
    items: [
      { label: 'London', href: '/areas/london' },
      { label: 'All Areas', href: '/areas' },
    ],
  },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`relative z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-ink/5 dark:border-cream/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity z-10"
            aria-label="The Recherche - Home"
          >
            <Image
              src="/logo.png"
              alt="The Recherche"
              width={180}
              height={29}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 lg:gap-8" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-body text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-200 relative"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-rust scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Dropdown Triggers & CTAs */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6">
            {/* Dropdown Triggers */}
            {dropdowns.map((dropdown, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="font-body text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-200 flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-ink/5 dark:hover:bg-cream/5"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === index}
                >
                  {dropdown.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:rotate-180">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scaleY: 0.95 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 lg:w-72 bg-panel dark:bg-charcoal ring-1 ring-ink/5 dark:ring-cream/10 rounded-2xl shadow-xl p-4 z-50"
                      role="menu"
                    >
                      <ul className="space-y-1">
                        {dropdown.items.map((item, i) => (
                          <li key={i} role="none">
                            <Link
                              href={item.href}
                              className="block font-body text-sm text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream hover:bg-ink/5 dark:hover:bg-cream/5 px-3 py-2.5 rounded-xl transition-all duration-200"
                              role="menuitem"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTAs */}
            <div className="flex items-center gap-3 ml-4 border-l border-ink/10 dark:border-cream/10 pl-4">
              <Link
                href="#quote"
                className="btn-primary text-sm px-6 py-2.5 hidden sm:inline-flex"
              >
                Book Design Visit
              </Link>
              <Link
                href="/brochure"
                className="btn-secondary text-sm px-6 py-2.5 hidden sm:inline-flex"
              >
                Request Brochure
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden font-body text-sm font-medium text-ink dark:text-cream p-2 rounded-xl hover:bg-ink/5 dark:hover:bg-cream/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ zIndex: 100 }}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-ink/5 dark:border-cream/10 bg-canvas/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-6 space-y-6">
              {/* Mobile Nav */}
              <nav className="space-y-1" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block font-body text-base font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream px-4 py-3 rounded-xl hover:bg-ink/5 dark:hover:bg-cream/5 transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Dropdowns */}
              <div className="space-y-4 pt-4 border-t border-ink/5 dark:border-cream/10">
                {dropdowns.map((dropdown, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-display text-sm font-medium text-ink/50 dark:text-cream/50 uppercase tracking-wider px-4">
                      {dropdown.label}
                    </h3>
                    <ul className="space-y-1">
                      {dropdown.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            className="block font-body text-sm text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream px-4 py-2.5 rounded-xl hover:bg-ink/5 dark:hover:bg-cream/5 transition-all duration-200"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-3 pt-4 border-t border-ink/5 dark:border-cream/10">
                <Link
                  href="#quote"
                  className="btn-primary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Design Visit
                </Link>
                <Link
                  href="/brochure"
                  className="btn-secondary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Brochure
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Dropdown Panels */}
      <AnimatePresence>
        {openDropdown !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block border-t border-ink/5 dark:border-cream/10 bg-canvas/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 md:px-12 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {dropdowns.map((dropdown, index) => (
                  <div key={index} className="dropdown-column">
                    <h3 className="font-display font-medium text-base text-ink dark:text-cream mb-5">
                      {dropdown.label}
                    </h3>
                    <ul className="space-y-2.5">
                      {dropdown.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            className="block font-body text-sm text-ink/70 dark:text-cream/70 hover:text-rust dark:hover:text-rust hover:translate-x-1 transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}