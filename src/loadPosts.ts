import grayMatter from "gray-matter";
import { dirname } from "path";
import { ReactElement } from "react";
import { markdownToReact } from "./components/Markdown.js";
import { includeAsset } from "./includeAsset.js";
import path from "path";

export type Links = {
  npm?: string;
  github?: string;
  website?: string;
  nuget?: string;
  itch?: string;
  download?: string;
};

export type PostDetails = Links & {
  title: string;
  categories: string[];
  content: string;
  summary: string;
  element: ReactElement;
  route: string;
  preview?: string;
  published?: string;
};

export type PostsDetails = {
  [path: string]: PostDetails;
};

export async function loadPosts(outputDir: string): Promise<PostsDetails> {
  return {
    about: await loadPost("./posts/about.md", outputDir),
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
    esolangs: await loadPost("./posts/esolangs.md", outputDir),
    "chromosome-library": await loadPost(
      "./posts/chromosome-library.md",
      outputDir
    ),
    "sn-caldera": await loadPost("./posts/sn-caldera.md", outputDir),
    "10-second-dirt": await loadPost("./posts/10-second-dirt.md", outputDir),
    "15-second-dirt": await loadPost("./posts/15-second-dirt.md", outputDir),
    dwitter: await loadPost("./posts/dwitter.md", outputDir),
    "ts-birthday": await loadPost("./posts/ts-birthday.md", outputDir),
    "light-switch-sim": await loadPost(
      "./posts/light-switch-sim.md",
      outputDir
    ),
    "tier-list": await loadPost("./posts/tier-list.md", outputDir),
  };
}

export async function loadPost(
  pagePath: string,
  outputDir: string
): Promise<PostDetails> {
  const route = dirname(pagePath);
  let data: PostDetails;
  let content: string;
  try {
    const frontmatter = grayMatter.read(pagePath);
    data = frontmatter.data as PostDetails;
    content = frontmatter.content;
  } catch (err) {
    throw new Error(`Error reading frontmatter for ${pagePath}`, {
      cause: err,
    });
  }
  const page: PostDetails = {
    ...data,
    content,
    route,
  };
  page.element = await markdownToReact(outputDir, page, content);
  if (page.preview) {
    page.preview = includeAsset(page, outputDir, page.preview);
  }
  if (page.download) {
    page.download = includeAsset(page, outputDir, page.download);
  }
  return page;
}
