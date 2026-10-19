import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const journalDirectory = path.join(process.cwd(), "content/journal");
const guidesDirectory = path.join(process.cwd(), "content/guides");

export function getProjectSlugs(category: "kitchens" | "wardrobes"): string[] {
  const categoryDir = path.join(projectsDirectory, category);
  if (!fs.existsSync(categoryDir)) return [];
  return fs.readdirSync(categoryDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(category: "kitchens" | "wardrobes", slug: string) {
  const fullPath = path.join(projectsDirectory, category, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

export function getAllProjects(category: "kitchens" | "wardrobes") {
  const slugs = getProjectSlugs(category);
  const projects = slugs
    .map((slug) => getProjectBySlug(category, slug))
    .filter((project): project is NonNullable<typeof project> => project !== null)
    .sort((a, b) => new Date(b.completed).getTime() - new Date(a.completed).getTime());

  return projects;
}

export function getFeaturedProjects(category: "kitchens" | "wardrobes", limit = 6) {
  return getAllProjects(category)
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getJournalSlugs(): string[] {
  if (!fs.existsSync(journalDirectory)) return [];
  return fs.readdirSync(journalDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getJournalBySlug(slug: string) {
  const fullPath = path.join(journalDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

export function getAllJournalPosts() {
  const slugs = getJournalSlugs();
  const posts = slugs
    .map((slug) => getJournalBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getGuidesSlugs(): string[] {
  if (!fs.existsSync(guidesDirectory)) return [];
  return fs.readdirSync(guidesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getGuideBySlug(slug: string) {
  const fullPath = path.join(guidesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

export function getAllGuides() {
  const slugs = getGuidesSlugs();
  const guides = slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((guide): guide is NonNullable<typeof guide> => guide !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return guides;
}