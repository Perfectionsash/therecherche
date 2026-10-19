import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CustomImage } from "@/components/ui/Image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/home-hero.jpg"
            alt="Bespoke kitchen by The Recherche"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-20 md:py-32">
          <div className="max-w-2xl md:max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-white mb-6 tracking-tight">
              Bespoke Kitchens & Fitted Wardrobes
            </h1>
            <p className="text-lg md:text-xl text-chalk mb-10 font-body leading-relaxed max-w-xl">
              Handcrafted in our London workshop. Made-to-measure joinery for kitchens, bedrooms, and living spaces — designed around how you live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="arrow" asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="secondary" asChild size="lg">
                <Link href="/contact/brochure">Request Brochure</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V4" />
          </svg>
        </div>
      </section>

      {/* Trust Signals / Stats */}
      <section className="bg-dark-oak py-12 md:py-16" aria-label="Key statistics">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="border-r border-mid-timber md:border-r-0 md:border-b md:pb-8 md:mb-8 last:md:border-0">
              <p className="font-display text-4xl md:text-5xl font-light text-brass">342</p>
              <p className="font-ui text-xs text-chalk mt-2">Projects Completed This Year</p>
            </div>
            <div className="border-r border-mid-timber md:border-r-0 md:border-b md:pb-8 md:mb-8 last:md:border-0">
              <p className="font-display text-4xl md:text-5xl font-light text-brass">94%</p>
              <p className="font-ui text-xs text-chalk mt-2">Positive Client Feedback</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-light text-brass">570+</p>
              <p className="font-ui text-xs text-chalk mt-2">Happy Customers Since 2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Our specialties">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="text-center mb-16">
            <p className="font-ui text-xs text-brass mb-2">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal max-w-2xl mx-auto">
              Three disciplines, one standard of craft
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kitchens */}
            <article className="group relative overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <CustomImage
                  src="/heroes/kitchens-category.jpg"
                  alt="Bespoke kitchen interior"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-ui text-xs text-brass mb-1">Kitchens</p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-3">Bespoke Kitchens</h3>
                <p className="text-chalk text-sm md:text-base font-body leading-relaxed max-w-xs">
                  From contemporary minimal to traditional shaker — every kitchen made to measure in our London workshop.
                </p>
                <Button variant="ghost" asChild className="mt-4 group-hover:underline">
                  <Link href="/kitchens">View Kitchen Portfolio →</Link>
                </Button>
              </div>
            </article>

            {/* Wardrobes */}
            <article className="group relative overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <CustomImage
                  src="/heroes/wardrobes-category.jpg"
                  alt="Fitted wardrobe interior"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-ui text-xs text-brass mb-1">Wardrobes</p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-3">Fitted Wardrobes</h3>
                <p className="text-chalk text-sm md:text-base font-body leading-relaxed max-w-xs">
                  Sliding, hinged, or walk-in — maximising every millimetre of your bedroom space with precision joinery.
                </p>
                <Button variant="ghost" asChild className="mt-4 group-hover:underline">
                  <Link href="/wardrobes">View Wardrobe Portfolio →</Link>
                </Button>
              </div>
            </article>

            {/* Other Joinery */}
            <article className="group relative overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <CustomImage
                  src="/heroes/joinery-category.jpg"
                  alt="Media wall and home office joinery"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-ui text-xs text-brass mb-1">Other Joinery</p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-3">Media Walls & Home Offices</h3>
                <p className="text-chalk text-sm md:text-base font-body leading-relaxed max-w-xs">
                  Bespoke media walls, home offices, utility rooms and boot rooms — cohesive joinery throughout your home.
                </p>
                <Button variant="ghost" asChild className="mt-4 group-hover:underline">
                  <Link href="/other-joinery">View All Joinery →</Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Process Preview */}
      <section className="py-16 md:py-24 bg-charcoal" aria-label="Our design process">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="text-center mb-16">
            <p className="font-ui text-xs text-brass mb-2">Our Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white max-w-2xl mx-auto">
              From first visit to final fitting — five steps to your perfect space
            </h2>
          </header>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {[
              { number: "01", title: "Free Design Visit", description: "A designer visits your home to assess the space, discuss your needs and show material samples." },
              { number: "02", title: "Design & Quote", description: "You receive a visual layout with materials, finishes, and complete pricing." },
              { number: "03", title: "Made in London", description: "Your project is crafted to order using premium materials in our local workshop." },
              { number: "04", title: "Made-to-Measure", description: "Fully bespoke, made-to-measure to maximise storage and minimise infills." },
              { number: "05", title: "10 Year Warranty", description: "Post-sales support is here to help with all your questions." },
            ].map((step, index) => (
              <article key={step.number} className="text-center md:text-left">
                <div className="font-display text-5xl md:text-6xl font-light text-brass/20 mb-4">{step.number}</div>
                <h3 className="font-display text-xl md:text-2xl font-light text-white mb-3">{step.title}</h3>
                <p className="text-chalk text-sm md:text-base font-body leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" asChild size="lg">
              <Link href="/kitchens/design-process">See Full Process →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Materials Preview */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Materials and finishes">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="text-center mb-12">
            <p className="font-ui text-xs text-brass mb-2">Materials</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal max-w-2xl mx-auto">
              Materials that age honestly — wood, stone, metal, glass
            </h2>
            <p className="text-warm-grey text-base md:text-lg mt-4 max-w-xl mx-auto font-body leading-relaxed">
              We work with established European suppliers to source timber, stone, lacquer, mirror and glass that not only looks beautiful but lasts for decades.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {["Timber & Veneer", "Painted & Lacquered", "Mirror & Glass", "Stone & Worktops", "Metal & Hardware", "Internal Systems"].map((material, index) => (
              <Link
                key={material}
                href="/kitchens/materials"
                className="group p-6 md:p-8 border border-steel hover:border-brass transition-colors duration-200 text-center"
              >
                <p className="font-ui text-xs text-brass mb-3">{["Wood", "Paint", "Glass", "Stone", "Metal", "Systems"][index]}</p>
                <h3 className="font-display text-xl md:text-2xl font-light text-charcoal mb-2">{material}</h3>
                <p className="text-warm-grey text-sm font-body leading-relaxed">Explore finishes →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-oak" aria-label="Start your project">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 max-w-2xl mx-auto">
            Ready to start your project?
          </h2>
          <p className="text-chalk text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            Book a free design visit and our team will bring ideas, samples, and expertise to your home — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="arrow" asChild size="lg">
              <Link href="/contact">Book Free Design Visit</Link>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <Link href="/contact/brochure">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}