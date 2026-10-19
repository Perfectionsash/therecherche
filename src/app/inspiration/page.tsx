import { Metadata } from "next";
import { CustomImage } from "@/components/ui/Image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Inspiration",
  description: "Real homes, design guides, and journal entries — explore our latest projects, read about design trends, and find practical advice for your project.",
};

const realHomes = [
  {
    slug: "hampstead-renovation",
    title: "Hampstead Victorian Renovation",
    location: "Hampstead, NW3",
    image: "/projects/real-homes/hampstead-renovation.jpg",
    type: "Kitchen & Wardrobes",
  },
  {
    slug: "kensington-townhouse",
    title: "Kensington Townhouse",
    location: "Kensington, SW7",
    image: "/projects/real-homes/kensington-townhouse.jpg",
    type: "Full House Joinery",
  },
  {
    slug: "chelsea-apartment",
    title: "Chelsea Apartment Transformation",
    location: "Chelsea, SW3",
    image: "/projects/real-homes/chelsea-apartment.jpg",
    type: "Kitchen & Media Wall",
  },
];

const journalPosts = [
  {
    slug: "choosing-kitchen-worktops",
    title: "Choosing the Right Kitchen Worktop",
    excerpt: "From marble to quartz, porcelain to timber — a guide to selecting the perfect worktop for how you cook and live.",
    date: "October 2026",
    category: "Guides",
    image: "/journal/choosing-worktops.jpg",
  },
  {
    slug: "wardrobe-internal-systems",
    title: "Making the Most of Wardrobe Internals",
    excerpt: "Pull-out shoe racks, tie organisers, jewellery drawers — the details that turn storage into daily pleasure.",
    date: "September 2026",
    category: "Wardrobes",
    image: "/journal/wardrobe-internals.jpg",
  },
  {
    slug: "kitchen-lighting-guide",
    title: "Kitchen Lighting: Beyond the Pendant",
    excerpt: "Task lighting, ambient glow, accent illumination — layering light for a kitchen that works at every hour.",
    date: "August 2026",
    category: "Kitchens",
    image: "/journal/kitchen-lighting.jpg",
  },
];

export default function Inspiration() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/inspiration-hero.jpg"
            alt="Inspiration and real homes"
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
            <p className="font-ui text-xs text-brass mb-2">Inspiration</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1]">
              Inspiration
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-xl">
              Real homes, practical guides, and design thinking — explore projects, read our journal, and find the details that make a house feel like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Real Homes */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Real homes case studies">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="font-ui text-xs text-brass mb-2">Real Homes</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal max-w-2xl">
                Projects we've brought to life
              </h2>
            </div>
            <Button variant="secondary" asChild size="sm">
              <Link href="/inspiration/real-homes">View All Real Homes →</Link>
            </Button>
          </header>

          <div className="grid md:grid-cols-3 gap-8" role="list">
            {realHomes.map((home) => (
              <article key={home.slug} className="group relative overflow-hidden bg-charcoal" role="listitem">
                <Link href={`/inspiration/real-homes/${home.slug}`} className="block">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <CustomImage
                      src={home.image}
                      alt={`${home.title} - ${home.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="font-ui text-xs text-brass mb-2">{home.type}</p>
                    <h3 className="font-display text-xl md:text-2xl font-light text-white mb-2 group-hover:text-brass transition-colors">
                      {home.title}
                    </h3>
                    <p className="text-chalk text-sm font-body">{home.location}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="py-16 md:py-24 bg-charcoal" aria-label="Journal articles">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="font-ui text-xs text-brass mb-2">Journal</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-white max-w-2xl">
                Design thinking & practical guides
              </h2>
            </div>
            <Button variant="secondary" asChild size="sm">
              <Link href="/inspiration/journal">Read All Articles →</Link>
            </Button>
          </header>

          <div className="grid md:grid-cols-3 gap-8" role="list">
            {journalPosts.map((post) => (
              <article key={post.slug} className="group" role="listitem">
                <Link href={`/inspiration/journal/${post.slug}`} className="block">
                  <div className="aspect-[4/3] relative overflow-hidden mb-4">
                    <CustomImage
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-3 mb-2">
                      <span className="font-ui text-xs text-brass">{post.category}</span>
                      <span className="font-ui text-xs text-chalk">{post.date}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-light text-white mb-3 group-hover:text-brass transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-chalk text-sm md:text-base font-body leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <p className="text-brass text-sm font-ui mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read article →</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guides CTA */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Design guides">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal mb-6 max-w-2xl mx-auto">
            Need practical guidance?
          </h2>
          <p className="text-warm-grey text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            Our design guides cover everything from choosing worktops to planning wardrobe internals — written by the makers who build them.
          </p>
          <Button variant="secondary" asChild size="lg">
            <Link href="/inspiration/guides">Browse Design Guides →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}