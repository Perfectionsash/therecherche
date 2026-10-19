import { Metadata } from "next";
import { CustomImage } from "@/components/ui/Image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "The Recherche — bespoke kitchens and fitted wardrobes handcrafted in our London workshop. Learn about our story, craftsmanship, and commitment to sustainability.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/about-hero.jpg"
            alt="The Recherche workshop"
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
            <p className="font-ui text-xs text-brass mb-2">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1]">
              The Recherche
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-xl">
              Bespoke kitchens and fitted wardrobes, handcrafted in our London workshop since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Our story">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="font-ui text-xs text-brass mb-2">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal mb-6 max-w-xl">
                Made in London, for London homes
              </h2>
              <div className="space-y-6 font-body leading-relaxed text-warm-grey">
                <p>
                  The Recherche began with a simple observation: London homeowners deserved joinery that matched the quality of the homes they live in. Not flat-pack compromises. Not "bespoke" that arrives on a lorry from overseas. Real craftsmanship, made here, for here.
                </p>
                <p>
                  Our workshop in North London is where every project takes shape. Timber is selected, cut, joined and finished by the same hands that will install it in your home. No middlemen. No handoffs. The designer who visits your home is the designer who briefs the workshop. The cabinetmaker who builds your kitchen is the one who fits it.
                </p>
                <p>
                  Since 2018 we've completed over 570 projects across Central, North and West London. Each one different. Each one made to measure. Each one built to last decades, not years.
                </p>
              </div>
              <Button variant="secondary" asChild size="lg" className="mt-8">
                <Link href="/contact">Start a Conversation →</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3]">
              <CustomImage
                src="/team/workshop.jpg"
                alt="The Recherche workshop interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                priority
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Craftsmanship */}
      <section className="py-16 md:py-24 bg-charcoal" aria-label="Our values">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="text-center mb-16">
            <p className="font-ui text-xs text-brass mb-2">Our Approach</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white max-w-2xl mx-auto">
              The principles that guide every project
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Workshop to Home",
                description: "No outsourcing. No subcontractors. Every joint cut, every hinge fitted by our team in our London workshop.",
                icon: "hammer",
              },
              {
                title: "Materials That Age Honestly",
                description: "Solid timber, natural stone, unlacquered brass, real leather — materials that develop character, not wear.",
                icon: "tree-pine",
              },
              {
                title: "Made to Measure, Not Made to Fit",
                description: "Every millimetre considered. No standard carcasses trimmed on site. Your space dictates the design, not our catalogue.",
                icon: "ruler",
              },
            ].map((value, index) => (
              <article key={index} className="text-center md:text-left p-6 md:p-8 border border-steel hover:border-brass transition-colors">
                <div className="font-display text-4xl md:text-5xl font-light text-brass/30 mb-4">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-display text-xl md:text-2xl font-light text-white mb-4">{value.title}</h3>
                <p className="text-chalk font-body leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Workshop */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Our team">
        <div className="mx-auto max-w-[1400px] px-6">
          <header className="text-center mb-16">
            <p className="font-ui text-xs text-brass mb-2">The Team</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal max-w-2xl mx-auto">
              The hands behind the work
            </h2>
            <p className="text-warm-grey text-base md:text-lg mt-4 max-w-xl mx-auto font-body leading-relaxed">
              A small team of designers, cabinetmakers and installers who take pride in every joint, every finish, every project.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Nadel", role: "Founder & Designer", image: "/team/alex.jpg" },
              { name: "Nina Cits", role: "Senior Designer", image: "/team/nina.jpg" },
              { name: "Andrey Kalinchuk", role: "Workshop Manager", image: "/team/andrey.jpg" },
            ].map((member) => (
              <article key={member.name} className="text-center">
                <div className="aspect-square relative overflow-hidden rounded-none mb-6">
                  <CustomImage
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                </div>
                <h3 className="font-display text-lg md:text-xl font-light text-charcoal mb-1">{member.name}</h3>
                <p className="font-ui text-xs text-warm-grey">{member.role}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" asChild size="lg">
              <Link href="/about/team">Meet the Full Team →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-dark-oak" aria-label="Start your project">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-6 max-w-2xl mx-auto">
            Let's talk about your project
          </h2>
          <p className="text-chalk text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            Book a free design visit and we'll bring samples, ideas, and honest advice to your home.
          </p>
          <Button variant="arrow" asChild size="lg">
            <Link href="/contact">Book Free Design Visit</Link>
          </Button>
        </div>
      </section>
    </>
  );
}