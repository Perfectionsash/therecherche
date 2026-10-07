'use client';

export function Hero() {
  return (
    <section className="relative" aria-labelledby="hero-heading">
      {/* 3-column full-height image row - contact sheet style */}
      <div className="image-row" role="list" aria-label="Featured wardrobe projects">
        <article className="image-row-item" role="listitem">
          <div className="photo-frame" style={{ minHeight: '85vh' }}>
            <img
              src="/hero-wardrobe-1.jpg"
              alt="Bespoke fitted wardrobe with sliding doors in modern bedroom"
              loading="eager"
            />
          </div>
          <p className="caption photo-caption">Fitted Wardrobe — London Residence</p>
        </article>
        <article className="image-row-item" role="listitem">
          <div className="photo-frame" style={{ minHeight: '85vh' }}>
            <img
              src="/hero-wardrobe-2.jpg"
              alt="Walk-in wardrobe with integrated lighting and island unit"
              loading="eager"
            />
          </div>
          <p className="caption photo-caption">Walk-In Wardrobe — Surrey Home</p>
        </article>
        <article className="image-row-item" role="listitem">
          <div className="photo-frame" style={{ minHeight: '85vh' }}>
            <img
              src="/hero-wardrobe-3.jpg"
              alt="Home office storage with floor-to-ceiling cabinetry"
              loading="eager"
            />
          </div>
          <p className="caption photo-caption">Home Office Storage — Manchester</p>
        </article>
      </div>

      {/* Display word marker - wayfinding */}
      <div className="section-wayfinding" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
        <h1 id="hero-heading" className="display-marker">
          THE RECHERCHE
        </h1>
      </div>

      {/* Intro paragraph */}
      <div className="content-container" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <p className="subheading">
          Bespoke fitted wardrobes, sliding doors, and home storage solutions.
          Expert design, premium materials, and professional installation across the UK.
        </p>
      </div>

      {/* CTA row */}
      <div className="content-container flex flex-wrap gap-6" style={{ paddingBottom: '60px' }}>
        <a
          href="#quote"
          className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all"
        >
          Book Free Design Visit
        </a>
        <a
          href="/brochure"
          className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all"
        >
          Request Brochure
        </a>
      </div>
    </section>
  );
}