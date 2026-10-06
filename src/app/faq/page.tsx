import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about bespoke fitted wardrobes, sliding doors, walk-in wardrobes, pricing, process, and guarantees.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do fitted wardrobes cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our fitted wardrobes typically range from £1,500 to £15,000+ depending on size, materials, and internal configuration. We provide a fixed price after your free design consultation.' },
    },
    {
      '@type': 'Question',
      name: 'How long does the whole process take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Design consultation to installation typically takes 4-6 weeks: 1 week for design/quote, 3-4 weeks manufacturing, 1-2 days installation.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a guarantee?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, all our fitted furniture comes with a comprehensive 10-year guarantee on materials, mechanisms, and workmanship.' },
    },
    {
      '@type': 'Question',
      name: 'What areas do you cover?',
      acceptedAnswer: { '@type': 'Answer', text: 'We cover London, Greater London, and the Home Counties (Surrey, Kent, Essex, Hertfordshire, Buckinghamshire, Berkshire). Nationwide for larger projects.' },
    },
    {
      '@type': 'Question',
      name: 'Can you work with sloping ceilings?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We specialise in awkward spaces — sloping ceilings, chimney breasts, alcoves, and unusual shapes are our expertise.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to prepare anything for the design visit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Just have an idea of what you want to store and any inspiration photos. We handle measurements, design, and samples.' },
    },
    {
      '@type': 'Question',
      name: 'What payment options do you offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Deposit on order (typically 30%), balance on installation. We accept bank transfer, card, and finance options (subject to status).' },
    },
    {
      '@type': 'Question',
      name: 'Are your materials sustainable?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — FSC-certified timber, low-VOC finishes, and UK manufacturing to reduce carbon footprint. We recycle all packaging.' },
    },
  ],
};

const faqs = [
  {
    q: 'How much do fitted wardrobes cost?',
    a: 'Our fitted wardrobes typically range from £1,500 to £15,000+ depending on size, materials, and internal configuration. We provide a fixed price after your free design consultation.',
  },
  {
    q: 'How long does the whole process take?',
    a: 'Design consultation to installation typically takes 4–6 weeks: 1 week for design/quote, 3–4 weeks manufacturing in our UK workshop, 1–2 days installation.',
  },
  {
    q: 'Do you offer a guarantee?',
    a: 'Yes, all our fitted furniture comes with a comprehensive 10-year guarantee on materials, mechanisms, and workmanship.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover London, Greater London, and the Home Counties (Surrey, Kent, Essex, Hertfordshire, Buckinghamshire, Berkshire). Nationwide for larger projects.',
  },
  {
    q: 'Can you work with sloping ceilings?',
    a: 'Absolutely. We specialise in awkward spaces — sloping ceilings, chimney breasts, alcoves, and unusual shapes are our expertise.',
  },
  {
    q: 'Do I need to prepare anything for the design visit?',
    a: 'Just have an idea of what you want to store and any inspiration photos. We handle measurements, design, and bring material samples.',
  },
  {
    q: 'What payment options do you offer?',
    a: 'Deposit on order (typically 30%), balance on installation. We accept bank transfer, card, and finance options (subject to status).',
  },
  {
    q: 'Are your materials sustainable?',
    a: 'Yes — FSC-certified timber, low-VOC finishes, and UK manufacturing to reduce carbon footprint. We recycle all packaging.',
  },
  {
    q: 'Can you match existing furniture?',
    a: 'Yes, we can match finishes, colours, and styles to your existing bedroom furniture for a seamless look.',
  },
  {
    q: 'What happens if something breaks after installation?',
    a: 'Contact us and we\'ll arrange a service visit. Our 10-year guarantee covers manufacturing defects and mechanism issues.',
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="min-h-screen">
        <section className="py-20 bg-primary-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="page-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our bespoke storage solutions.
            </p>
          </div>
        </section>
        <section className="py-20" aria-labelledby="faqs-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4" role="list">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden" role="listitem">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Didn't find your answer?</p>
                <a href="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Ask Us Directly</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}