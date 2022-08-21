import grayMatter from "gray-matter";
import { dirname } from "path";

export type Page = {
  title: string;
  categories: string[];
  content: string;
  route: string;
  published?: string;
}

export type Project = Page & {
  npm?: string,
  github?: string,
  website?: string;
  nuget?: string;
  itch?: string;
}

export type Projects = {
  [path:string]: Project;
}

export type Post = Page & {
  website?: string;
}

export type Posts = {
  [path:string]: Project;
}

export type Pages = {
  projects: Projects;
  posts: Posts;
};

export function loadPages(): Pages {
  return {
    projects: {
      "barrelsby": loadPage("./pages/projects/barrelsby.md"),
      "csgo-rankings-graph": loadPage("./pages/projects/csgo-rankings-graph.md"),
      "database-objects": loadPage("./pages/projects/database-objects.md"),
      "milligrid": loadPage("./pages/projects/milligrid.md"),
      "quadrilactic": loadPage("./pages/projects/quadrilactic.md"),
      "dots": loadPage("./pages/projects/dots.md"),
      "tsfluff": loadPage("./pages/projects/tsfluff.md"),
      "bmprog": loadPage("./pages/projects/bmprog.md"),
      "bfinterpreter": loadPage("./pages/projects/bfinterpreter.md"),
      "chromosome-library": loadPage("./pages/projects/chromosome-library.md"),
    },
    posts: {
      "ts-birthday": loadPage("./pages/posts/ts-birthday.md"),
    }
  }
}

export function loadPage(pagePage: string): Page {
  const route = dirname(pagePage);
  const {data, content} = grayMatter.read(pagePage);
  return {
    ...data as Page,
    content,
    route,
  };
}