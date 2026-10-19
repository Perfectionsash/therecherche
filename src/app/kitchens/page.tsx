import { Metadata } from "next";
import { CustomImage } from "@/components/ui/Image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kitchen Portfolio",
  description: "Explore our bespoke kitchen projects — contemporary, traditional, and shaker styles handcrafted in our London workshop.",
};

const kitchenProjects = [
  {
    id: 1,
    slug: "hampstead-shaker-kitchen",
    title: "Hampstead Shaker Kitchen",
    location: "Hampstead, NW3",
    style: "Traditional Shaker",
    image: "/projects/kitchens/hampstead-shaker.jpg",
    description: "Hand-painted in Farrow & Ball 'Railings' with brass hardware and marble worktops.",
  },
  {
    id: 2,
    slug: "kensington-contemporary-kitchen",
    title: "Kensington Contemporary Kitchen",
    location: "Kensington, SW7",
    style: "Contemporary",
    image: "/projects/kitchens/kensington-contemporary.jpg",
    description: "Handleless cabinets in matte lacquer with quartz worktops and integrated appliances.",
  },
  {
    id: 3,
    slug: "chelsea-painted-kitchen",
    title: "Chelsea Painted Kitchen",
    location: "Chelsea, SW3",
    style: "Painted Traditional",
    image: "/projects/kitchens/chelsea-painted.jpg",
    description: "Soft green hand-painted finish with walnut accents and Belfast sink.",
  },
  {
    id: 4,
    slug: "notting-hill-modern-kitchen",
    title: "Notting Hill Modern Kitchen",
    location: "Notting Hill, W11",
    style: "Modern Minimal",
    image: "/projects/kitchens/notting-hill-modern.jpg",
    description: "Walnut veneer with black steel accents and porcelain worktops.",
  },
  {
    id: 5,
    slug: "primrose-hill-shaker",
    title: "Primrose Hill Shaker Kitchen",
    location: "Primrose Hill, NW1",
    style: "Traditional Shaker",
    image: "/projects/kitchens/primrose-hill-shaker.jpg",
    description: "Classic shaker in off-white with brass hardware and honed marble.",
  },
  {
    id: 6,
    slug: "st-johns-wood-kitchen",
    title: "St John's Wood Kitchen",
    location: "St John's Wood, NW8",
    style: "Contemporary",
    image: "/projects/kitchens/st-johns-wood.jpg",
    description: "Gloss lacquer finish with integrated wine storage and feature island.",
  },
];

export default function KitchenPortfolio() {
  return (
    <>
      {/* Category Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/kitchens-hero.jpg"
            alt="Bespoke kitchen portfolio"
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
              Kitchen Portfolio
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-xl">
              Every kitchen tells a story. Explore projects across London — from Victorian terraces to modern apartments — each made to measure in our workshop.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="bg-paper py-8 border-y border-chalk" aria-label="Project filters">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm" className="rounded-none">All</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Contemporary</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Traditional</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Shaker</Button>
            <Button variant="secondary" size="sm" className="rounded-none">Painted</Button>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Kitchen projects">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {kitchenProjects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden bg-charcoal"
                role="listitem"
              >
                <Link href={`/kitchens/${project.slug}`} className="block">
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
                    <p className="font-ui text-xs text-brass mb-2">{project.style}</p>
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
              <Link href="/kitchens">View All Kitchen Projects →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-16 md:py-24 bg-charcoal" aria-label="Design process">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-6 max-w-2xl mx-auto">
            See how we bring a kitchen to life
          </h2>
          <p className="text-chalk text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            From first sketch to final fitting — our five-step process ensures every detail is considered.
          </p>
          <Button variant="secondary" asChild size="lg">
            <Link href="/kitchens/design-process">View Design Process →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}