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

export type Page = Links & {
  title: string;
  categories: string[];
  content: string;
  element: ReactElement;
  route: string;
  published?: string;
};

export type Projects = {
  [path: string]: Page;
};

export type Posts = {
  [path: string]: Page;
};

export type Pages = {
  projects: Projects;
  posts: Posts;
};

export async function loadPages(outputDir: string): Promise<Pages> {
  return {
    projects: {
      barrelsby: await loadPage("./pages/projects/barrelsby.md", outputDir),
      "csgo-rankings-graph": await loadPage(
        "./pages/projects/csgo-rankings-graph.md",
        outputDir
      ),
      "database-objects": await loadPage(
        "./pages/projects/database-objects.md",
        outputDir
      ),
      milligrid: await loadPage("./pages/projects/milligrid.md", outputDir),
      quadrilactic: await loadPage(
        "./pages/projects/quadrilactic.md",
        outputDir
      ),
      dots: await loadPage("./pages/projects/dots.md", outputDir),
      tsfluff: await loadPage("./pages/projects/tsfluff.md", outputDir),
      bmprog: await loadPage("./pages/projects/bmprog.md", outputDir),
      bfinterpreter: await loadPage(
        "./pages/projects/bfinterpreter.md",
        outputDir
      ),
      "chromosome-library": await loadPage(
        "./pages/projects/chromosome-library.md",
        outputDir
      ),
      "sn-caldera": await loadPage("./pages/projects/sn-caldera.md", outputDir),
      "10-second-dirt": await loadPage(
        "./pages/projects/10-second-dirt.md",
        outputDir
      ),
      dwitter: await loadPage("./pages/projects/dwitter.md", outputDir),
    },
    posts: {
      "ts-birthday": await loadPage("./pages/posts/ts-birthday.md", outputDir),
    },
  };
}

export async function loadPage(
  pagePath: string,
  outputDir: string
): Promise<Page> {
  const route = dirname(pagePath);
  const { data, content } = grayMatter.read(pagePath);
  const page: Page = {
    ...(data as Page),
    content,
    route,
  };
  page.element = await markdownToReact(outputDir, page, content);
  if (page.download) {
    page.download = includeAsset(page, outputDir, page.download);
  }
  return page;
}
