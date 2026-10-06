'use client';

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-canvas"
      aria-labelledby="hero-heading"
    >
      <div className="section py-[160px] px-4 md:px-8 text-center">
        <h1
          id="hero-heading"
          className="font-display font-semibold text-display text-ink
                     tracking-display leading-display text-balance mx-auto max-w-4xl"
        >
          Bespoke Fitted Wardrobes
          <br />
          <span className="text-accent">Designed for You</span>
        </h1>
        <p className="font-text text-body text-ink-muted mt-10 max-w-2xl mx-auto text-balance leading-body tracking-body">
          Transform your space with custom-designed fitted wardrobes, sliding doors, and
          innovative storage solutions. Expert craftsmanship, premium materials, and
          professional installation across the UK.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <a
            href="#quote"
            className="btn-primary"
          >
            Get Your Free Design Quote
          </a>
          <a
            href="#portfolio"
            className="btn-text"
          >
            View Our Work
          </a>
        </div>
        <div className="mt-20 flex flex-wrap justify-center gap-8 text-body-sm text-ink-muted">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Home Design Visit</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>10-Year Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>UK Manufactured</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}