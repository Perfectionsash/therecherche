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
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4 text-center">
            <h1 id="contact-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your space? Book a free design visit or ask us anything.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="form-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 id="form-heading" className="font-display text-3xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
                <p className="text-gray-600 mb-8">Fill in your details and we'll contact you within 24 hours to arrange a convenient design visit.</p>
                <form className="space-y-6" action="#" method="POST">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode *</label>
                    <input type="text" id="postcode" name="postcode" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                    <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                    Submit Enquiry
                  </button>
                </form>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="font-semibold text-gray-900">Phone</dt>
                    <dd className="text-gray-600 mt-1"><a href="tel:+44XXXXXXXXXX" className="hover:text-primary-600">+44 XXX XXXXXXX</a></dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Email</dt>
                    <dd className="text-gray-600 mt-1"><a href="mailto:info@therecherche.co.uk" className="hover:text-primary-600">info@therecherche.co.uk</a></dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Showroom</dt>
                    <dd className="text-gray-600 mt-1">123 Design Street, London SW1A 1AA</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Opening Hours</dt>
                    <dd className="text-gray-600 mt-1 space-y-1">
                      <div>Mon–Fri: 9am – 6pm</div>
                      <div>Sat: 10am – 4pm</div>
                      <div>Sun: Closed</div>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Free Design Visit</h4>
                  <p className="text-gray-600 text-sm">We'll come to you, measure your space, show 3D designs, and provide a fixed quote — all with no obligation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}