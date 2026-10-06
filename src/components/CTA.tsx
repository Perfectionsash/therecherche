'use client';

export function CTA() {
  return (
    <section
      id="quote"
      className="py-[80px] bg-ink text-white"
      aria-labelledby="cta-heading"
    >
      <div className="section text-center">
        <h2
          id="cta-heading"
          className="font-display font-semibold text-heading-lg text-white tracking-heading-lg leading-heading-lg"
        >
          Ready to Transform Your Space?
        </h2>
        <p className="font-text text-body text-ink-muted mt-4 max-w-2xl mx-auto leading-body tracking-body">
          Book your free, no-obligation design consultation. Our expert designers will
          visit your home, measure your space, and create a bespoke 3D visualisation.
        </p>
        <form
          className="max-w-md mx-auto space-y-4 mt-12"
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
                className="w-full px-4 py-4 rounded-button bg-surface-elevated border border-border text-white placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent font-text text-body"
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
                className="w-full px-4 py-4 rounded-button bg-surface-elevated border border-border text-white placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent font-text text-body"
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
              className="w-full px-4 py-4 rounded-button bg-surface-elevated border border-border text-white placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent font-text text-body"
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
              className="w-full px-4 py-4 rounded-button bg-surface-elevated border border-border text-white placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent font-text text-body"
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
              className="w-full px-4 py-4 rounded-button bg-surface-elevated border border-border text-white placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent font-text text-body"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full mt-2"
          >
            Book Free Design Visit
          </button>
          <p className="font-text text-body-sm text-ink-muted text-center tracking-body-sm leading-body-sm">
            We'll contact you within 24 hours to arrange a convenient time.
          </p>
        </form>
      </div>
    </section>
  );
}