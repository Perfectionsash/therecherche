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

export function Footer() {
  return (
    <footer className="section-canvas border-t border-ink/5 dark:border-cream/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[linear-gradient(135deg,#b8735210,#d4977810)] blur-3xl opacity-50" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: '400px 400px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Brand & Newsletter */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 py-16 lg:py-20 border-b border-ink/5 dark:border-cream/10">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-medium text-2xl md:text-3xl tracking-tight text-ink dark:text-cream mb-6 block">
              THE RECHERCHE
            </Link>
            <p className="body-text-base text-ink/50 dark:text-cream/50 leading-relaxed max-w-xs mb-8">
              Bespoke fitted wardrobes, sliding doors & whole-home storage. Designed in your home, crafted in our UK workshops since 2013.
            </p>
            <div className="flex items-center gap-3 text-sm font-body text-ink/60 dark:text-cream/60">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rust flex-shrink-0">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Free Design Consultation</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-body text-ink/60 dark:text-cream/60 mt-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rust flex-shrink-0">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>10-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-body text-ink/60 dark:text-cream/60 mt-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rust flex-shrink-0">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>UK Manufactured</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(footerLinks).map(([key, column]) => (
              <div key={key}>
                <h3 className="font-display font-medium text-sm text-ink dark:text-cream mb-5 uppercase tracking-wider">{column.title}</h3>
                <ul className="space-y-3">
                  {column.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="font-body text-sm text-ink/70 dark:text-cream/70 hover:text-rust dark:hover:text-rust hover:translate-x-1 transition-all duration-200"
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

        {/* Trust & Social */}
        <div className="py-12 lg:py-16 border-b border-ink/5 dark:border-cream/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex flex-wrap items-center gap-4 lg:gap-8">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rust" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="font-body text-sm text-ink/70 dark:text-cream/70">Rated Excellent on Trustpilot</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-amber" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="font-body text-sm text-ink/70 dark:text-cream/70">4.9 / 5</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-amber" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="font-body text-sm text-ink/70 dark:text-cream/70">127 Reviews</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://facebook.com/therecherche" className="text-ink/50 dark:text-cream/50 hover:text-rust dark:hover:text-rust transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/therecherche" className="text-ink/50 dark:text-cream/50 hover:text-rust dark:hover:text-rust transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r=".5"/></svg>
              </a>
              <a href="https://pinterest.com/therecherche" className="text-ink/50 dark:text-cream/50 hover:text-rust dark:hover:text-rust transition-colors" aria-label="Pinterest">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://houzz.co.uk/pro/therecherche" className="text-ink/50 dark:text-cream/50 hover:text-rust dark:hover:text-rust transition-colors" aria-label="Houzz">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="py-8">
          <div className="flex flex-wrap gap-6 lg:gap-8 text-sm text-ink/50 dark:text-cream/50 mb-6">
            <Link href="/privacy" className="hover:text-rust dark:hover:text-rust transition-colors">Privacy</Link>
            <Link href="/modern-slavery" className="hover:text-rust dark:hover:text-rust transition-colors">Modern Slavery</Link>
            <Link href="/cookies" className="hover:text-rust dark:hover:text-rust transition-colors">Cookies</Link>
            <Link href="/finance" className="hover:text-rust dark:hover:text-rust transition-colors">Finance</Link>
            <Link href="/sitemap" className="hover:text-rust dark:hover:text-rust transition-colors">Sitemap</Link>
            <Link href="/reviews" className="hover:text-rust dark:hover:text-rust transition-colors">Reviews</Link>
            <Link href="/careers" className="hover:text-rust dark:hover:text-rust transition-colors">Careers</Link>
          </div>
          <p className="caption text-ink/40 dark:text-cream/40">
            © 2026 The Recherche. Company Registration 12345678. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}