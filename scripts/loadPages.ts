import grayMatter from "gray-matter";
import { dirname } from "path";
import { ReactElement } from "react";
import { getConverter } from "../src/components/Markdown.js";
import { writeDownload } from "./writeImages.js";

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
  const converter = getConverter(outputDir, page);
  page.element = (await converter.process(content)).result;
  if (page.download) {
    page.download = writeDownload(page, outputDir, page.download);
  }
  return page;
}
