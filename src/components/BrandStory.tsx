'use client';

export function BrandStory() {
  return (
    <section className="section-bone" aria-labelledby="story-heading">
      <div className="content-container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        {/* Display marker */}
        <h2 id="story-heading" className="display-marker" style={{ marginBottom: '40px' }}>
          ABOUT US
        </h2>

        {/* Main brand paragraph */}
        <p className="subheading" style={{ maxWidth: '700px', marginBottom: '40px' }}>
          It&rsquo;s the feeling that makes a Recherche wardrobe special.
        </p>

        <p className="body-text" style={{ maxWidth: '700px', marginBottom: '30px' }}>
          Since 2008, we&rsquo;ve been designing and manufacturing bespoke fitted wardrobes
          and storage solutions from our workshop in the heart of England. Every piece begins
          with a conversation — understanding how you live, what you store, and how you want
          your space to feel.
        </p>

        <p className="body-text" style={{ maxWidth: '700px', marginBottom: '40px' }}>
          Our designers work with you to create 3D visualisations, selecting from an extensive
          range of finishes, door styles, and internal configurations. Our craftsmen then build
          each wardrobe to exacting standards, and our installation teams fit with precision
          and care — typically in just one to two days.
        </p>

        <a
          href="/about"
          className="link-plain font-body text-body-sm inline-flex items-center gap-2"
        >
          Discover How We Do It
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}