'use client';

export function CTA() {
  return (
    <section
      id="quote"
      className="py-20 md:py-28 bg-primary-900 text-white"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          id="cta-heading"
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Book your free, no-obligation design consultation. Our expert designers will
          visit your home, measure your space, and create a bespoke 3D visualisation.
        </p>
        <form
          className="max-w-md mx-auto space-y-4"
          action="#"
          method="POST"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div>
            <label htmlFor="postcode" className="sr-only">Postcode</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              placeholder="Postcode (for area coverage check)"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Book Free Design Visit
          </button>
          <p className="text-sm text-primary-300 text-center">
            We'll contact you within 24 hours to arrange a convenient time.
          </p>
        </form>
      </div>
    </section>
  );
}