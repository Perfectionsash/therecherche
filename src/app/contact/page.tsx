import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Recherche for a free design consultation. Bespoke fitted wardrobes, sliding doors, and storage solutions across the UK.',
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact The Recherche',
  description: 'Contact us for bespoke fitted wardrobes and storage solutions.',
  mainEntity: {
    '@type': 'Organization',
    name: 'The Recherche',
    url: 'https://therecherche.co.uk',
    telephone: '+44-XXX-XXXXXX',
    email: 'info@therecherche.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Design Street',
      addressLocality: 'London',
      addressRegion: 'England',
      postalCode: 'SW1A 1AA',
      addressCountry: 'GB',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              GET IN TOUCH
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Ready to transform your space? Book a free design visit or ask us anything.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-bone" aria-labelledby="form-heading" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              <div>
                <h2 id="form-heading" className="font-display font-medium text-subheading text-ink mb-6" style={{ fontSize: '36px', lineHeight: '44px' }}>
                  Request a Free Quote
                </h2>
                <p className="body-text" style={{ marginBottom: '40px', color: '#000' }}>
                  Fill in your details and we&rsquo;ll contact you within 24 hours to arrange a convenient design visit.
                </p>
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
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="font-body text-body-sm text-ink block mb-2">
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink focus:outline-none focus:border-ink transition-colors"
                      style={{ borderRadius: '0' }}
                    >
                      <option value="">Select a service</option>
                      <option value="fitted-wardrobes">Fitted Wardrobes</option>
                      <option value="sliding-doors">Sliding Wardrobe Doors</option>
                      <option value="walk-in">Walk-In Wardrobes</option>
                      <option value="home-office">Home Office Storage</option>
                      <option value="media-units">Media & TV Units</option>
                      <option value="libraries">Home Libraries</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="font-body text-body-sm text-ink block mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-ink bg-transparent font-body text-body-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors resize-none"
                      style={{ borderRadius: '0' }}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all"
                    style={{ borderRadius: '0' }}
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
              <div className="p-8" style={{ border: '1px solid #e8e0d0' }}>
                <h3 className="font-display font-medium text-subheading text-ink mb-6" style={{ fontSize: '28px', lineHeight: '36px' }}>
                  Other Ways to Reach Us
                </h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="font-body text-body-sm font-medium text-ink">Phone</dt>
                    <dd className="body-text mt-1" style={{ color: '#000' }}>
                      <a href="tel:+44XXXXXXXXXX" className="link-plain hover:opacity-60">+44 XXX XXXXXXX</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-body-sm font-medium text-ink">Email</dt>
                    <dd className="body-text mt-1" style={{ color: '#000' }}>
                      <a href="mailto:info@therecherche.co.uk" className="link-plain hover:opacity-60">info@therecherche.co.uk</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-body-sm font-medium text-ink">Showroom</dt>
                    <dd className="body-text mt-1" style={{ color: '#000' }}>123 Design Street, London SW1A 1AA</dd>
                  </div>
                  <div>
                    <dt className="font-body text-body-sm font-medium text-ink">Opening Hours</dt>
                    <dd className="body-text mt-1 space-y-1" style={{ color: '#000' }}>
                      <div>Mon–Fri: 9am – 6pm</div>
                      <div>Sat: 10am – 4pm</div>
                      <div>Sun: Closed</div>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 p-6" style={{ border: '1px solid #e8e0d0' }}>
                  <h4 className="font-body text-body-sm font-medium text-ink mb-2">Free Design Visit</h4>
                  <p className="body-text" style={{ color: '#000', fontSize: '14px' }}>
                    We&rsquo;ll come to you, measure your space, show 3D designs, and provide a fixed quote — all with no obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}