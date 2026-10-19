import { Metadata } from "next";
import { CustomImage } from "@/components/ui/Image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Other Joinery",
  description: "Bespoke media walls, home offices, utility rooms and boot rooms — cohesive joinery throughout your home, handcrafted in our London workshop.",
};

const joineryCategories = [
  {
    slug: "media-walls",
    title: "Media Walls",
    description: "Integrated TV, audio and storage solutions — designed around your technology and lifestyle.",
    image: "/projects/joinery/media-walls.jpg",
  },
  {
    slug: "home-offices",
    title: "Home Offices",
    description: "Ergonomic workspaces with custom cabinetry, hidden cable management and task lighting.",
    image: "/projects/joinery/home-offices.jpg",
  },
  {
    slug: "utility-rooms",
    title: "Utility Rooms",
    description: "Hardworking spaces with fitted laundry storage, drying rails and appliance integration.",
    image: "/projects/joinery/utility-rooms.jpg",
  },
  {
    slug: "boot-rooms",
    title: "Boot Rooms",
    description: "Mudroom storage with boot racks, coat hanging, bench seating and pet-friendly features.",
    image: "/projects/joinery/boot-rooms.jpg",
  },
];

export default function OtherJoinery() {
  return (
    <>
      {/* Category Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/joinery-hero.jpg"
            alt="Bespoke media wall and home office joinery"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <p className="font-ui text-xs text-brass mb-2">Our Work</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1]">
              Other Joinery
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-xl">
              Cohesive joinery throughout your home — media walls, home offices, utility rooms and boot rooms, all made to the same exacting standard.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Other joinery categories">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="text-center mb-16">
            <p className="font-ui text-xs text-brass mb-2">Beyond Kitchens & Wardrobes</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal max-w-2xl mx-auto">
              Every room deserves considered joinery
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {joineryCategories.map((category) => (
              <article
                key={category.slug}
                className="group relative overflow-hidden bg-charcoal"
                role="listitem"
              >
                <Link href={`/other-joinery/${category.slug}`} className="block">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <CustomImage
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <h3 className="font-display text-xl md:text-2xl font-light text-white mb-3 group-hover:text-brass transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-chalk text-sm md:text-base font-body leading-relaxed mb-6">{category.description}</p>
                    <Button variant="ghost" asChild>
                      <Link href={`/other-joinery/${category.slug}`}>View {category.title} →</Link>
                    </Button>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal" aria-label="Start your project">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-6 max-w-2xl mx-auto">
            Extend the craftsmanship throughout your home
          </h2>
          <p className="text-chalk text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            Whether it's a media wall, home office, or boot room — the same workshop, the same standards, the same made-to-measure approach.
          </p>
          <Button variant="secondary" asChild size="lg">
            <Link href="/contact">Start Your Project →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}