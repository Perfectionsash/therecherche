'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Fitted Wardrobes', href: '/fitted-wardrobes' },
  { label: 'Sliding Wardrobe Doors', href: '/sliding-wardrobe-doors' },
  { label: 'Walk-In Wardrobes', href: '/walk-in-wardrobes' },
  { label: 'Home Office Storage', href: '/home-office-storage' },
  { label: 'Other Rooms', href: '/other-rooms' },
  { label: 'About Us', href: '/about' },
  { label: 'Showrooms', href: '/showrooms' },
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
      { label: 'South East', href: '/areas/south-east' },
      { label: 'South West', href: '/areas/south-west' },
      { label: 'National Coverage', href: '/areas' },
    ],
  },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="relative z-50 border-b border-ink bg-bone/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between px-20 py-4">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="The Recherche - Home">
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
        <nav className="hidden md:flex items-center gap-12" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-body text-body-sm text-ink hover:opacity-60 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/details"
            className="font-body text-body-sm text-ink underline underline-offset-2 hover:opacity-60"
          >
            Details
          </Link>
          <Link
            href="/areas"
            className="font-body text-body-sm text-ink underline underline-offset-2 hover:opacity-60"
          >
            Areas
          </Link>
          <Link
            href="#quote"
            className="font-body text-body-sm text-ink border border-ink px-6 py-3 hover:bg-ink hover:text-bone transition-all"
          >
            Book Design Visit
          </Link>
          <Link
            href="/brochure"
            className="font-body text-body-sm text-ink border border-ink px-6 py-3 hover:bg-ink hover:text-bone transition-all"
          >
            Request Brochure
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden font-body text-body-sm text-ink"
          aria-label="Open menu"
        >
          MENU
        </button>
      </div>

      {/* Dropdown menus - desktop */}
      <div className="hidden md:block border-t border-ink bg-bone">
        <div className="max-w-full mx-auto px-20 py-10 grid grid-cols-3 gap-20">
          {dropdowns.map((dropdown, index) => (
            <div key={index} className="dropdown-column">
              <h3 className="font-display font-medium text-subheading text-ink mb-6">
                {dropdown.label}
              </h3>
              <ul className="space-y-3">
                {dropdown.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="font-body text-body-sm text-ink hover:opacity-60 transition-opacity"
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
    </header>
  );
}
