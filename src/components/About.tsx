'use client';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10yr', label: 'Guarantee' },
];

const features = [
  {
    title: 'Free Design Consultation',
    description: 'Our expert designers visit your home to measure, advise, and create 3D visualisations of your new storage.',
  },
  {
    title: 'UK Manufactured',
    description: 'All our wardrobes are designed and manufactured in our UK workshop using sustainably sourced materials.',
  },
  {
    title: 'Professional Installation',
    description: 'Our experienced fitting teams install your wardrobes with precision and care, typically in 1-2 days.',
  },
  {
    title: '10-Year Guarantee',
    description: 'Peace of mind with our comprehensive 10-year guarantee on all fitted furniture and mechanisms.',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-[80px] bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-[80px] items-center">
          <div>
            <h2
              id="about-heading"
              className="font-display font-semibold text-heading-lg text-ink tracking-heading-lg leading-heading-lg"
            >
              Why Choose The Recherche?
            </h2>
            <p className="font-text text-body text-ink-muted mt-6 leading-body tracking-body">
              With over 15 years of experience creating bespoke storage solutions, we combine
              traditional craftsmanship with modern design innovation. Every project begins with
              understanding your lifestyle and ends with storage that transforms your daily life.
            </p>
            <p className="font-text text-body text-ink-muted mt-6 leading-body tracking-body">
              From initial consultation to final installation, our dedicated team manages every
              detail. We use only premium materials, precision engineering, and time-honoured
              joinery techniques to create fitted furniture that stands the test of time.
            </p>
            <ul className="space-y-6 mt-10" role="list">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-nav-pill flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-heading-sm text-ink tracking-heading-sm leading-heading-sm">
                      {feature.title}
                    </h4>
                    <p className="font-text text-body text-ink-muted mt-2 leading-body tracking-body">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-white text-center"
              >
                <div className="font-display font-semibold text-heading text-ink mb-2 tracking-heading leading-heading">
                  {stat.value}
                </div>
                <div className="font-text text-body-sm text-ink-muted tracking-body-sm leading-body-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}