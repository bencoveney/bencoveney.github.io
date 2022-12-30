import grayMatter from "gray-matter";
import { dirname } from "path";
import { ReactElement } from "react";
import { markdownToReact } from "./components/Markdown.js";
import { includeAsset } from "./includeAsset.js";

export type Links = {
  npm?: string;
  github?: string;
  website?: string;
  nuget?: string;
  itch?: string;
  download?: string;
};

export type Post = Links & {
  title: string;
  categories: string[];
  content: string;
  element: ReactElement;
  route: string;
  published?: string;
};

export type Posts = {
  [path: string]: Post;
};

export async function loadPosts(outputDir: string): Promise<Posts> {
  return {
    barrelsby: await loadPost("./posts/barrelsby.md", outputDir),
    "csgo-rankings-graph": await loadPost(
      "./posts/csgo-rankings-graph.md",
      outputDir
    ),
    "database-objects": await loadPost(
      "./posts/database-objects.md",
      outputDir
    ),
    milligrid: await loadPost("./posts/milligrid.md", outputDir),
    quadrilactic: await loadPost("./posts/quadrilactic.md", outputDir),
    dots: await loadPost("./posts/dots.md", outputDir),
    tsfluff: await loadPost("./posts/tsfluff.md", outputDir),
    bmprog: await loadPost("./posts/bmprog.md", outputDir),
    bfinterpreter: await loadPost("./posts/bfinterpreter.md", outputDir),
    "chromosome-library": await loadPost(
      "./posts/chromosome-library.md",
      outputDir
    ),
    "sn-caldera": await loadPost("./posts/sn-caldera.md", outputDir),
    "10-second-dirt": await loadPost("./posts/10-second-dirt.md", outputDir),
    dwitter: await loadPost("./posts/dwitter.md", outputDir),
    "ts-birthday": await loadPost("./posts/ts-birthday.md", outputDir),
  };
}

export async function loadPost(
  pagePath: string,
  outputDir: string
): Promise<Post> {
  const route = dirname(pagePath);
  const { data, content } = grayMatter.read(pagePath);
  const page: Post = {
    ...(data as Post),
    content,
    route,
  };
  page.element = await markdownToReact(outputDir, page, content);
  if (page.download) {
    page.download = includeAsset(page, outputDir, page.download);
  }
  return page;
}
