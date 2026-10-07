'use client';

export function HomeVisit() {
  return (
    <section className="section-bone" aria-labelledby="homevisit-heading">
      <div className="content-container" style={{ paddingTop: '60px', paddingBottom: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div>
          {/* Display marker */}
          <h2 id="homevisit-heading" className="display-marker" style={{ marginBottom: '20px' }}>
            EXPERT GUIDANCE
          </h2>

          <p className="subheading" style={{ marginBottom: '30px' }}>
            Expert Guidance, In Your Home
          </p>

          <p className="body-text" style={{ marginBottom: '20px' }}>
            Our designers visit you — no need to travel. They&rsquo;ll measure your space, discuss
            your storage needs, and create initial 3D designs on the spot.
          </p>

          <p className="body-text" style={{ marginBottom: '30px' }}>
            The visit takes about 90 minutes. There&rsquo;s no obligation, and you&rsquo;ll receive
            a detailed proposal with visualisations and pricing within a week.
          </p>

          <a
            href="#quote"
            className="font-body text-body-sm text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-bone transition-all inline-block"
          >
            Request a Home Appointment
          </a>
        </div>

        <div>
          <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
            <img
              src="/home-visit.jpg"
              alt="Designer consulting with clients in their home"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}