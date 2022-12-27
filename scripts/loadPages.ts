import grayMatter from "gray-matter";
import { dirname } from "path";
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

export function loadPages(outputDir: string): Pages {
  return {
    projects: {
      barrelsby: loadPage("./pages/projects/barrelsby.md", outputDir),
      "csgo-rankings-graph": loadPage(
        "./pages/projects/csgo-rankings-graph.md",
        outputDir
      ),
      "database-objects": loadPage(
        "./pages/projects/database-objects.md",
        outputDir
      ),
      milligrid: loadPage("./pages/projects/milligrid.md", outputDir),
      quadrilactic: loadPage("./pages/projects/quadrilactic.md", outputDir),
      dots: loadPage("./pages/projects/dots.md", outputDir),
      tsfluff: loadPage("./pages/projects/tsfluff.md", outputDir),
      bmprog: loadPage("./pages/projects/bmprog.md", outputDir),
      bfinterpreter: loadPage("./pages/projects/bfinterpreter.md", outputDir),
      "chromosome-library": loadPage(
        "./pages/projects/chromosome-library.md",
        outputDir
      ),
      "sn-caldera": loadPage("./pages/projects/sn-caldera.md", outputDir),
    },
    posts: {
      "ts-birthday": loadPage("./pages/posts/ts-birthday.md", outputDir),
    },
  };
}

export function loadPage(pagePath: string, outputDir: string): Page {
  const route = dirname(pagePath);
  const { data, content } = grayMatter.read(pagePath);
  const page = {
    ...(data as Page),
    content,
    route,
  };
  if (page.download) {
    page.download = writeDownload(page, outputDir, page.download);
  }
  return page;
}
