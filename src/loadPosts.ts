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
    rm4scc: await loadPost("./posts/rm4scc.md", outputDir),
    "utils-lib": await loadPost("./posts/utils-lib.md", outputDir),
    "colour-palette": await loadPost("./posts/colour-palette.md", outputDir),
    "rudiment-wiki": await loadPost("./posts/rudiment-wiki.md", outputDir),
    "dotnet-container": await loadPost(
      "./posts/dotnet-container.md",
      outputDir
    ),
    "react-false": await loadPost("./posts/react-false.md", outputDir),
    "react-context": await loadPost("./posts/react-context.md", outputDir),
    "15-second-dirt": await loadPost("./posts/15-second-dirt.md", outputDir),
    "10-second-dirt": await loadPost("./posts/10-second-dirt.md", outputDir),
    "super-auto-pets": await loadPost("./posts/super-auto-pets.md", outputDir),
    "tier-list": await loadPost("./posts/tier-list.md", outputDir),
    "ts-birthday": await loadPost("./posts/ts-birthday.md", outputDir),
    voxels: await loadPost("./posts/voxels.md", outputDir),
    barrelsby: await loadPost("./posts/barrelsby.md", outputDir),
    dwitter: await loadPost("./posts/dwitter.md", outputDir),
    milligrid: await loadPost("./posts/milligrid.md", outputDir),
    quadrilactic: await loadPost("./posts/quadrilactic.md", outputDir),
    esolangs: await loadPost("./posts/esolangs.md", outputDir),
    "light-switch-sim": await loadPost(
      "./posts/light-switch-sim.md",
      outputDir
    ),
    tsfluff: await loadPost("./posts/tsfluff.md", outputDir),
    dots: await loadPost("./posts/dots.md", outputDir),
    "csgo-rankings-graph": await loadPost(
      "./posts/csgo-rankings-graph.md",
      outputDir
    ),
    // Need work:
    "sn-caldera": await loadPost("./posts/sn-caldera.md", outputDir),
    "database-objects": await loadPost(
      "./posts/database-objects.md",
      outputDir
    ),
    "chromosome-library": await loadPost(
      "./posts/chromosome-library.md",
      outputDir
    ),
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
