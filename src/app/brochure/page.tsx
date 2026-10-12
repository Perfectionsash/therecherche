import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Request a Free Brochure',
  description: 'Get our complete inspiration brochure with project photography, finishes guide, colour swatches, and hardware samples. Free UK delivery.',
};

export default function BrochurePage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              REQUEST A BROCHURE
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Our complete inspiration guide — project photography, finishes, colour swatches, hardware samples, and pricing guidance. Free UK delivery.
            </p>
          </div>
        </section>

        <section className="section-bone" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
              <div>
                <h2 className="display-marker" style={{ marginBottom: '20px', fontSize: '36px' }}>
                  WHAT'S INSIDE
                </h2>
                <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    '50+ project photographs across all collections',
                    'Complete paint colour palette with physical swatches',
                    'Door style guide — sliding, hinged, bi-fold, pocket',
                    'Handle & hardware collection with finish samples',
                    'Internal accessories catalogue',
                    'Lighting options and smart home integration',
                    'Pricing guidance and typical project budgets',
                    'Design process timeline and what to expect',
                    '10-year guarantee terms and aftercare guide',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4" style={{ paddingBottom: '16px', borderBottom: '1px solid #e8e0d0' }}>
                      <span className="flex-shrink-0 w-6 h-6 text-ink" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      <span className="body-text" style={{ color: '#000' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="photo-frame" style={{ aspectRatio: '3/4' }}>
                <img
                  src="/brochure-cover.jpg"
                  alt="The Recherche brochure cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d0', paddingTop: '40px', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="display-marker" style={{ marginBottom: '30px', fontSize: '36px', textAlign: 'center' }}>
                REQUEST YOUR FREE COPY
              </h2>
              <form className="space-y-6" action="#" method="POST">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label htmlFor="firstName" className="font-body text-body-sm text-ink block mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                      style={{ borderRadius: '0' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-body text-body-sm text-ink block mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                      style={{ borderRadius: '0' }}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label htmlFor="email" className="font-body text-body-sm text-ink block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                      style={{ borderRadius: '0' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-body text-body-sm text-ink block mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                      style={{ borderRadius: '0' }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="font-body text-body-sm text-ink block mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                    style={{ borderRadius: '0' }}
                    placeholder="Street address"
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label htmlFor="city" className="font-body text-body-sm text-ink block mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                      style={{ borderRadius: '0' }}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="postcode" className="font-body text-body-sm text-ink block mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      required
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                      style={{ borderRadius: '0' }}
                      placeholder="Postcode"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="project" className="font-body text-body-sm text-ink block mb-2">
                    Interested In
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink focus:outline-none focus:border-ink transition-colors"
                    style={{ borderRadius: '0' }}
                  >
                    <option value="">Select a service</option>
                    <option value="fitted-wardrobes">Fitted Wardrobes</option>
                    <option value="sliding-doors">Sliding Wardrobe Doors</option>
                    <option value="walk-in">Walk-In Wardrobes</option>
                    <option value="home-office">Home Office Storage</option>
                    <option value="other-rooms">Other Rooms</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all"
                  style={{ borderRadius: '0' }}
                >
                  Request Free Brochure
                </button>
                <p className="caption text-center" style={{ color: '#000', opacity: 0.6, fontSize: '12px' }}>
                  UK delivery only. We'll never share your details. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}