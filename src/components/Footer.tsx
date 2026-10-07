'use client';

import Link from 'next/link';

const footerLinks = {
  wardrobes: {
    title: 'Fitted Wardrobes',
    items: [
      { label: 'Hartford', href: '/collections/hartford' },
      { label: 'Kavanagh', href: '/collections/kavanagh' },
      { label: 'Butler', href: '/collections/butler' },
      { label: 'Devine', href: '/collections/devine' },
      { label: 'Harrington', href: '/collections/harrington' },
      { label: 'Summerville', href: '/collections/summerville' },
      { label: 'View All', href: '/collections' },
    ],
  },
  otherRooms: {
    title: 'Other Rooms',
    items: [
      { label: 'Home Office Storage', href: '/home-office-storage' },
      { label: 'Media & TV Units', href: '/media-tv-units' },
      { label: 'Home Libraries', href: '/home-libraries' },
      { label: 'Boot Rooms', href: '/boot-rooms' },
      { label: 'Utility Rooms', href: '/utility-rooms' },
      { label: 'View All', href: '/other-rooms' },
    ],
  },
  details: {
    title: 'Details & Finishes',
    items: [
      { label: 'Paint Colours', href: '/details/colours' },
      { label: 'Door Styles', href: '/details/styles' },
      { label: 'Handles & Hardware', href: '/details/handles' },
      { label: 'Internal Accessories', href: '/details/accessories' },
      { label: 'Lighting', href: '/details/lighting' },
      { label: 'View All Details', href: '/details' },
    ],
  },
  about: {
    title: 'About Us',
    items: [
      { label: 'Request a Free Brochure', href: '/brochure' },
      { label: 'Book Design Visit', href: '#quote' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Aftercare & Support', href: '/aftercare' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
  },
};

const showrooms = [
  'London Chelsea',
  'London Hampstead',
  'Surrey Guildford',
  'Oxford Oxfordshire',
  'Bristol Clifton',
  'Manchester Spinningfields',
  'Edinburgh New Town',
  'International Enquiries',
];

export function Footer() {
  return (
    <footer className="section-bone border-t border-ink" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Quick links - 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12" style={{ paddingTop: '60px', paddingBottom: '40px', maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        {Object.entries(footerLinks).map(([key, column]) => (
          <div key={key}>
            <h3 className="font-display font-medium text-subheading text-ink mb-6">{column.title}</h3>
            <ul className="space-y-3">
              {column.items.map((item, index) => (
                <li key={index}>
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

      {/* Showroom finder */}
      <div className="border-t border-ink" style={{ paddingTop: '40px', paddingBottom: '40px', maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h3 className="font-display font-medium text-subheading text-ink mb-8">FIND A SHOWROOM</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {showrooms.map((showroom, index) => (
            <Link
              key={index}
              href="/showrooms"
              className="font-body text-body-sm text-ink hover:opacity-60 transition-opacity"
            >
              {showroom}
            </Link>
          ))}
        </div>
      </div>

      {/* Trust badge & Social */}
      <div className="border-t border-ink flex flex-col md:flex-row justify-between items-center gap-8" style={{ paddingTop: '30px', paddingBottom: '30px', maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <div className="flex items-center gap-4">
          <span className="font-body text-body-sm text-ink">Rated Excellent on Trustpilot</span>
          <svg className="w-10 h-10 text-ink" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none"/>
            <text x="50" y="58" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">★</text>
          </svg>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://facebook.com/therecherche" className="text-ink hover:opacity-60" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://instagram.com/therecherche" className="text-ink hover:opacity-60" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r=".5"/></svg>
          </a>
          <a href="https://pinterest.com/therecherche" className="text-ink hover:opacity-60" aria-label="Pinterest">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-ink" style={{ paddingTop: '20px', paddingBottom: '20px', maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <div className="flex flex-wrap gap-6 text-body-sm">
          <Link href="/privacy" className="text-ink hover:opacity-60">Privacy</Link>
          <Link href="/modern-slavery" className="text-ink hover:opacity-60">Modern Slavery</Link>
          <Link href="/cookies" className="text-ink hover:opacity-60">Cookies</Link>
          <Link href="/finance" className="text-ink hover:opacity-60">Finance</Link>
          <Link href="/sitemap" className="text-ink hover:opacity-60">Sitemap</Link>
          <Link href="/reviews" className="text-ink hover:opacity-60">Reviews</Link>
          <Link href="/careers" className="text-ink hover:opacity-60">Careers</Link>
        </div>
        <p className="caption" style={{ marginTop: '12px' }}>
          © 2026 The Recherche. Company Registration 12345678. All rights reserved.
        </p>
      </div>
    </footer>
  );
}