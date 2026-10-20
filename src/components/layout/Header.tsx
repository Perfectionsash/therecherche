"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Kitchens", href: "/kitchens", hasMegaMenu: true },
  { name: "Wardrobes", href: "/wardrobes", hasMegaMenu: true },
  { name: "Other Joinery", href: "/other-joinery", hasMegaMenu: false },
  { name: "Inspiration", href: "/inspiration", hasMegaMenu: false },
  { name: "About", href: "/about", hasMegaMenu: false },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
        isScrolled ? "bg-paper/95 backdrop-blur-sm border-b border-chalk" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-[1400px] px-6" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="The Recherche - Home"
          >
            <img
              src="/logo.png"
              alt="The Recherche"
              className="h-12 w-auto"
              width="1696"
              height="284"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-10">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setActiveMegaMenu(item.name)}
                onMouseLeave={() => item.hasMegaMenu && setActiveMegaMenu(null)}
              >
                <Link
                  href={item.href}
                  className="font-ui text-xs text-charcoal hover:text-brass transition-colors"
                >
                  {item.name}
                </Link>
                {item.hasMegaMenu && activeMegaMenu === item.name && (
                  <div className="absolute left-0 top-full mt-4 w-[500px] bg-paper border border-steel p-6 shadow-deep animate-fade-in">
                    <div className="grid grid-cols-2 gap-6">
                      {item.name === "Kitchens" && (
                        <>
                          <div>
                            <h4 className="font-ui text-xs text-charcoal mb-3">Portfolio</h4>
                            <ul className="space-y-2">
                              <li><Link href="/kitchens" className="text-sm text-warm-grey hover:text-brass transition-colors">All Kitchens</Link></li>
                              <li><Link href="/kitchens?style=contemporary" className="text-sm text-warm-grey hover:text-brass transition-colors">Contemporary</Link></li>
                              <li><Link href="/kitchens?style=traditional" className="text-sm text-warm-grey hover:text-brass transition-colors">Traditional</Link></li>
                              <li><Link href="/kitchens?style=shaker" className="text-sm text-warm-grey hover:text-brass transition-colors">Shaker</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-ui text-xs text-charcoal mb-3">Design</h4>
                            <ul className="space-y-2">
                              <li><Link href="/kitchens/design-process" className="text-sm text-warm-grey hover:text-brass transition-colors">Our Design Process</Link></li>
                              <li><Link href="/kitchens/materials" className="text-sm text-warm-grey hover:text-brass transition-colors">Materials & Finishes</Link></li>
                              <li><Link href="/kitchens/appliances" className="text-sm text-warm-grey hover:text-brass transition-colors">Appliances</Link></li>
                            </ul>
                          </div>
                        </>
                      )}
                      {item.name === "Wardrobes" && (
                        <>
                          <div>
                            <h4 className="font-ui text-xs text-charcoal mb-3">Portfolio</h4>
                            <ul className="space-y-2">
                              <li><Link href="/wardrobes" className="text-sm text-warm-grey hover:text-brass transition-colors">All Wardrobes</Link></li>
                              <li><Link href="/wardrobes?type=sliding" className="text-sm text-warm-grey hover:text-brass transition-colors">Sliding Door</Link></li>
                              <li><Link href="/wardrobes?type=hinged" className="text-sm text-warm-grey hover:text-brass transition-colors">Hinged Door</Link></li>
                              <li><Link href="/wardrobes?type=walk-in" className="text-sm text-warm-grey hover:text-brass transition-colors">Walk-In</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-ui text-xs text-charcoal mb-3">Design</h4>
                            <ul className="space-y-2">
                              <li><Link href="/wardrobes/design-process" className="text-sm text-warm-grey hover:text-brass transition-colors">Our Design Process</Link></li>
                              <li><Link href="/wardrobes/internal-systems" className="text-sm text-warm-grey hover:text-brass transition-colors">Internal Systems</Link></li>
                              <li><Link href="/wardrobes/door-styles" className="text-sm text-warm-grey hover:text-brass transition-colors">Door Styles & Finishes</Link></li>
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="arrow" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden animate-slide-down border-t border-chalk pt-6 pb-8">
            <nav className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-ui text-sm text-charcoal hover:text-brass transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="arrow" asChild className="mt-4 w-full">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </nav>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 200ms ease-out; }
        .animate-slide-down { animation: slide-down 200ms ease-out; }
      `}</style>
    </header>
  );
}