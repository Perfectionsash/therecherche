import { Metadata } from "next";
import { CustomImage } from "@/components/ui/Image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Wardrobe Portfolio",
  description: "Explore our fitted wardrobe projects — sliding door, hinged door, and walk-in wardrobes handcrafted in our London workshop.",
};

const wardrobeProjects = [
  {
    id: 1,
    slug: "hampstead-walk-in-wardrobe",
    title: "Hampstead Walk-In Wardrobe",
    location: "Hampstead, NW3",
    type: "Walk-In",
    image: "/projects/wardrobes/hampstead-walk-in.jpg",
    description: "Floor-to-ceiling fitted wardrobe with island unit, integrated lighting, and leather-lined drawers.",
  },
  {
    id: 2,
    slug: "kensington-sliding-wardrobe",
    title: "Kensington Sliding Door Wardrobe",
    location: "Kensington, SW7",
    type: "Sliding Door",
    image: "/projects/wardrobes/kensington-sliding.jpg",
    description: "Mirror and painted glass sliding doors with soft-close mechanism and custom interior layout.",
  },
  {
    id: 3,
    slug: "chelsea-hinged-wardrobe",
    title: "Chelsea Hinged Door Wardrobe",
    location: "Chelsea, SW3",
    type: "Hinged Door",
    image: "/projects/wardrobes/chelsea-hinged.jpg",
    description: "Traditional painted hinged doors with brass hardware and custom shoe storage.",
  },
  {
    id: 4,
    slug: "notting-hill-walk-in",
    title: "Notting Hill Walk-In Wardrobe",
    location: "Notting Hill, W11",
    type: "Walk-In",
    image: "/projects/wardrobes/notting-hill-walk-in.jpg",
    description: "Spacious dressing room with central island, velvet-lined jewellery drawers, and hanging rails.",
  },
  {
    id: 5,
    slug: "primrose-hill-sliding",
    title: "Primrose Hill Sliding Wardrobe",
    location: "Primrose Hill, NW1",
    type: "Sliding Door",
    image: "/projects/wardrobes/primrose-hill-sliding.jpg",
    description: "Floor-to-ceiling sliding doors in bronze mirror with integrated LED lighting.",
  },
  {
    id: 6,
    slug: "st-johns-wood-wardrobe",
    title: "St John's Wood Fitted Wardrobe",
    location: "St John's Wood, NW8",
    type: "Hinged Door",
    image: "/projects/wardrobes/st-johns-wood.jpg",
    description: "Shaker-style hinged doors in hand-painted finish with custom internal configuration.",
  },
];

export default function WardrobePortfolio() {
  return (
    <>
      {/* Category Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/wardrobes-hero.jpg"
            alt="Fitted wardrobe portfolio"
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
              Wardrobe Portfolio
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-xl">
              From compact sliding doors to expansive walk-in dressing rooms — every wardrobe maximises your space with precision joinery.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="bg-paper py-8 border-y border-chalk" aria-label="Project filters">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm" className="rounded-none">All</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Walk-In</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Sliding Door</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Hinged Door</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Children's</Button>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Wardrobe projects">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {wardrobeProjects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden bg-charcoal"
                role="listitem"
              >
                <Link href={`/wardrobes/${project.slug}`} className="block">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <CustomImage
                      src={project.image}
                      alt={`${project.title} - ${project.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="font-ui text-xs text-brass mb-2">{project.type}</p>
                    <h3 className="font-display text-xl md:text-2xl font-light text-white mb-2 group-hover:text-brass transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-chalk text-sm font-body">{project.location}</p>
                    <p className="text-white/60 text-sm mt-2 font-body line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load More / CTA */}
          <div className="text-center mt-16">
            <Button variant="secondary" asChild size="lg">
              <Link href="/wardrobes">View All Wardrobe Projects →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-16 md:py-24 bg-charcoal" aria-label="Design process">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-6 max-w-2xl mx-auto">
            See how we bring a wardrobe to life
          </h2>
          <p className="text-chalk text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            From first visit to final fitting — our five-step process ensures every detail is considered.
          </p>
          <Button variant="secondary" asChild size="lg">
            <Link href="/wardrobes/design-process">View Design Process →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}