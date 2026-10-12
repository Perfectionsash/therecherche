import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Other Rooms',
  description: 'Bespoke storage solutions for every room — home offices, media units, libraries, boot rooms, utility rooms. Custom designed and UK manufactured.',
};

const rooms = [
  { name: 'Home Office Storage', href: '/home-office-storage', desc: 'Integrated desks, shelving, cable management for productive workspaces.', image: '/room-office.jpg' },
  { name: 'Media & TV Units', href: '/media-tv-units', desc: 'Bespoke TV walls with hidden cables, sound system integration, and display shelving.', image: '/room-media.jpg' },
  { name: 'Home Libraries', href: '/home-libraries', desc: 'Floor-to-ceiling bookcases, reading nooks, ladder systems, and display cabinets.', image: '/room-library.jpg' },
  { name: 'Boot Rooms', href: '/boot-rooms', desc: 'Practical storage for coats, boots, bags, and outdoor gear with bench seating.', image: '/room-boot.jpg' },
  { name: 'Utility Rooms', href: '/utility-rooms', desc: 'Laundry organisation, appliance housing, ironing stations, and cleaning storage.', image: '/room-utility.jpg' },
  { name: 'Bedroom Storage', href: '/bedroom-storage', desc: 'Dressing tables, jewellery cabinets, ottoman storage, and bedside solutions.', image: '/room-bedroom.jpg' },
];

export default function OtherRoomsPage() {
  return (
    <>
      <JsonLd data={[]} />
      <main className="min-h-screen bg-bone">
        {/* Hero Section */}
        <section className="section-bone" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="display-marker" style={{ marginBottom: '20px' }}>
              OTHER ROOMS
            </h1>
            <p className="subheading" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              Bespoke storage solutions for every room — home offices, media units, libraries, boot rooms, utility rooms, and more.
            </p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="section-bone" aria-labelledby="rooms-heading" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginBottom: '40px' }}>
              {rooms.map((room, i) => (
                <article key={i} className="group">
                  <a href={room.href} className="block">
                    <div className="photo-frame" style={{ aspectRatio: '4/3', marginBottom: '16px' }}>
                      <img
                        src={room.image}
                        alt={room.name}
                        loading="lazy"
                      />
                    </div>
                    <p className="body-text font-medium" style={{ color: '#000', marginBottom: '8px' }}>{room.name}</p>
                    <p className="caption" style={{ color: '#000', opacity: 0.7 }}>{room.desc}</p>
                  </a>
                </article>
              ))}
            </div>

            <a
              href="/fitted-wardrobes"
              className="link-plain font-body text-body-sm inline-flex items-center gap-2"
            >
              Back to Fitted Wardrobes
              <span aria-hidden="true">←</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}