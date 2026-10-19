import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { JournalPost, KitchenProject, WardrobeProject, Guide } from "@/types/project";

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

export function getProjectBySlug(category: "kitchens" | "wardrobes", slug: string): KitchenProject | WardrobeProject | null {
  const fullPath = path.join(projectsDirectory, category, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  } as KitchenProject | WardrobeProject;
}

export function getAllProjects(category: "kitchens" | "wardrobes"): (KitchenProject | WardrobeProject)[] {
  const slugs = getProjectSlugs(category);
  const projects = slugs
    .map((slug) => getProjectBySlug(category, slug))
    .filter((project): project is KitchenProject | WardrobeProject => project !== null)
    .sort((a, b) => new Date(b.completed).getTime() - new Date(a.completed).getTime());

  return projects;
}

export function getFeaturedProjects(category: "kitchens" | "wardrobes", limit = 6): (KitchenProject | WardrobeProject)[] {
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

export function getJournalBySlug(slug: string): JournalPost | null {
  const fullPath = path.join(journalDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  } as JournalPost;
}

export function getAllJournalPosts(): JournalPost[] {
  const slugs = getJournalSlugs();
  const posts = slugs
    .map((slug) => getJournalBySlug(slug))
    .filter((post): post is JournalPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getGuidesSlugs(): string[] {
  if (!fs.existsSync(guidesDirectory)) return [];
  return fs.readdirSync(guidesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getGuideBySlug(slug: string): Guide | null {
  const fullPath = path.join(guidesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  } as Guide;
}

export function getAllGuides(): Guide[] {
  const slugs = getGuidesSlugs();
  const guides = slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((guide): guide is Guide => guide !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return guides;
}