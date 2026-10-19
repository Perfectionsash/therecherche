import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomImage } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { getJournalBySlug, getAllJournalPosts } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | The Recherche`,
      description: post.excerpt,
      images: post.image ? [{ url: post.image, alt: post.title }] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllJournalPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllJournalPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : allPosts[allPosts.length - 1];
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : allPosts[0];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src={post.image}
            alt={post.title}
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
            <span className="font-ui text-xs text-brass mb-2 block">{post.category}</span>
            <h1 className="font-display text-4xl md:text-5xl font-light text-white mb-4 leading-[1.1]">
              {post.title}
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-paper" aria-label="Article content">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <article className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="font-ui text-xs text-brass">{post.category}</span>
                <span className="font-ui text-xs text-chalk">{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
              <div className="prose prose-charcoal max-w-none mb-12">
                <MDXRemote source={post.content} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="py-8 border-t border-mid-timber" aria-label="Article navigation">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href={`/inspiration/journal/${prevPost.slug}`}
              className="group p-4 md:p-6 border border-steel hover:border-brass transition-colors text-left"
            >
              <p className="font-ui text-xs text-brass mb-2">Previous Article</p>
              <h3 className="font-display text-lg md:text-xl font-light text-white group-hover:text-brass transition-colors mb-2">
                {prevPost.title}
              </h3>
            </Link>

            <div className="md:col-span-1 flex items-center justify-center">
              <Button variant="secondary" asChild>
                <Link href="/inspiration/journal">Back to All Articles</Link>
              </Button>
            </div>

            <Link
              href={`/inspiration/journal/${nextPost.slug}`}
              className="group p-4 md:p-6 border border-steel hover:border-brass transition-colors text-right md:text-right"
            >
              <p className="font-ui text-xs text-brass mb-2">Next Article</p>
              <h3 className="font-display text-lg md:text-xl font-light text-white group-hover:text-brass transition-colors mb-2">
                {nextPost.title}
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
