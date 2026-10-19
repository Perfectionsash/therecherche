import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomImage, Lightbox } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug("wardrobes", slug);

  if (!project) {
    return { title: "Wardrobe Not Found" };
  }

  return {
    title: project.title,
    description: `${project.title} in ${project.location} — ${project.type} wardrobe by The Recherche.`,
    openGraph: {
      title: `${project.title} | The Recherche`,
      description: `${project.type} wardrobe in ${project.location}`,
      images: project.images[0] ? [{ url: project.images[0].src, alt: project.images[0].alt }] : [],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects("wardrobes");
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WardrobeProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug("wardrobes", slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects("wardrobes");
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const lightboxImages = project.images.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src={project.images[0]?.src || "/heroes/wardrobe-project-hero.jpg"}
            alt={project.images[0]?.alt || project.title}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="font-ui text-xs text-brass px-3 py-1 border border-brass">{project.type}</span>
              <span className="font-ui text-xs text-chalk px-3 py-1 border border-steel">{project.location}</span>
              <span className="font-ui text-xs text-chalk px-3 py-1 border border-steel">{project.duration}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-2xl">
              {project.images[0]?.caption || `A ${project.type.toLowerCase()} wardrobe in ${project.location}`}
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Project gallery">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {project.images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden group">
                <CustomImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  priority={index === 0}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/90 to-transparent text-white text-sm font-body">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>

          {project.images.length > 2 && (
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {project.images.slice(2).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden group cursor-zoom-in" onClick={() => {}}>
                  <CustomImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/90 to-transparent text-white text-xs font-body">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Lightbox */}
          <Lightbox
            isOpen={false}
            onClose={() => {}}
            images={lightboxImages}
          />
        </div>
      </section>

      {/* Project Details & Specs */}
      <section className="py-16 md:py-24 bg-charcoal" aria-label="Project specifications">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Specs */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl md:text-3xl font-light text-white mb-8">Specifications</h2>

              <dl className="space-y-6">
                <div className="border-b border-mid-timber pb-6">
                  <dt className="font-ui text-xs text-brass mb-1">Type</dt>
                  <dd className="text-white font-body">{project.type}</dd>
                </div>
                <div className="border-b border-mid-timber pb-6">
                  <dt className="font-ui text-xs text-brass mb-1">Location</dt>
                  <dd className="text-white font-body">{project.location}</dd>
                </div>
                <div className="border-b border-mid-timber pb-6">
                  <dt className="font-ui text-xs text-brass mb-1">Finish</dt>
                  <dd className="text-white font-body">{project.finish}</dd>
                </div>
                <div className="border-b border-mid-timber pb-6">
                  <dt className="font-ui text-xs text-brass mb-1">Internal System</dt>
                  <dd className="text-white font-body">{project.internalSystem}</dd>
                </div>
                <div className="border-b border-mid-timber pb-6">
                  <dt className="font-ui text-xs text-brass mb-1">Hardware</dt>
                  <dd className="text-white font-body">{project.hardware}</dd>
                </div>
                <div className="border-b border-mid-timber pb-6">
                  <dt className="font-ui text-xs text-brass mb-1">Lighting</dt>
                  <dd className="text-white font-body">{project.lighting}</dd>
                </div>
                <div className="border-b border-mid-timber pb-6">
                  <dt className="font-ui text-xs text-brass mb-1">Duration</dt>
                  <dd className="text-white font-body">{project.duration}</dd>
                </div>
                <div>
                  <dt className="font-ui text-xs text-brass mb-1">Budget Range</dt>
                  <dd className="text-white font-body">{project.budgetRange}</dd>
                </div>
              </dl>
            </div>

            {/* Description & Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-charcoal max-w-none">
                <MDXRemote source={project.content} />
              </div>

              {/* Client Testimonial */}
              {project.content.includes("Client Feedback") && (
                <blockquote className="border-l-2 border-brass pl-6 my-8">
                  <p className="font-body text-lg text-chalk italic leading-relaxed">
                    {project.content.split("Client Feedback")[1]?.split(">")[1]?.split("<")[0]?.trim() || "The team understood exactly what we wanted — a wardrobe that feels like it's always been part of the house, but works brilliantly for how we actually live."}
                  </p>
                  <footer className="font-ui text-xs text-brass mt-3 not-italic">
                    — Client, {project.location.split(",")[0]}
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-dark-oak" aria-label="Start your project">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-6 max-w-2xl mx-auto">
            Inspired to start your own project?
          </h2>
          <p className="text-chalk text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            Book a free design visit and we'll bring samples, ideas, and honest advice to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="arrow" asChild size="lg">
              <Link href="/contact">Book Free Design Visit</Link>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <Link href="/wardrobes">View All Wardrobes →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="py-8 border-t border-mid-timber" aria-label="Project navigation">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href={`/wardrobes/${prevProject.slug}`}
              className="group p-4 md:p-6 border border-steel hover:border-brass transition-colors text-left"
            >
              <p className="font-ui text-xs text-brass mb-2">Previous Project</p>
              <h3 className="font-display text-lg md:text-xl font-light text-white group-hover:text-brass transition-colors mb-2">
                {prevProject.title}
              </h3>
              <p className="text-chalk font-body">{prevProject.location} • {prevProject.type}</p>
            </Link>

            <div className="md:col-span-1 flex items-center justify-center">
              <Button variant="secondary" asChild>
                <Link href="/wardrobes">Back to All Wardrobes</Link>
              </Button>
            </div>

            <Link
              href={`/wardrobes/${nextProject.slug}`}
              className="group p-4 md:p-6 border border-steel hover:border-brass transition-colors text-right md:text-right"
            >
              <p className="font-ui text-xs text-brass mb-2">Next Project</p>
              <h3 className="font-display text-lg md:text-xl font-light text-white group-hover:text-brass transition-colors mb-2">
                {nextProject.title}
              </h3>
              <p className="text-chalk font-body">{nextProject.location} • {nextProject.type}</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
