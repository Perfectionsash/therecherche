'use client';

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary-50 via-white to-white"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <h1
          id="hero-heading"
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance"
        >
          Bespoke Fitted Wardrobes
          <br />
          <span className="text-primary-600">Designed for You</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance">
          Transform your space with custom-designed fitted wardrobes, sliding doors, and
          innovative storage solutions. Expert craftsmanship, premium materials, and
          professional installation across the UK.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quote"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Get Your Free Design Quote
          </a>
          <a
            href="#portfolio"
            className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            View Our Work
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Home Design Visit</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>10-Year Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>UK Manufactured</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}