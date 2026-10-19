import { Metadata } from "next";
import { CustomImage } from "@/components/ui/Image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getAllJournalPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal",
  description: "Design thinking, practical guides, and journal entries from The Recherche workshop — kitchens, wardrobes, and bespoke joinery insights.",
};

export default function JournalList() {
  const posts = getAllJournalPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/journal-hero.jpg"
            alt="Design journal and guides"
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
            <p className="font-ui text-xs text-brass mb-2">Journal</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1]">
              Design Thinking
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-xl">
              Practical guides, material insights, and project stories from our London workshop — written by the makers who build them.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Journal articles">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid md:grid-cols-3 gap-8" role="list">
            {posts.map((post) => (
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
                      <span className="font-ui text-xs text-chalk">{new Date(post.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-light text-white mb-3 group-hover:text-brass transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-chalk text-sm md:text-base font-body leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <p className="text-brass text-sm font-ui mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read article →
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
