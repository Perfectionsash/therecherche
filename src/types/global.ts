import "gray-matter";

declare module "gray-matter" {
  interface GrayMatterFile<FrontMatter = any> {
    data: FrontMatter;
    content: string;
  }
}