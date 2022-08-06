import grayMatter from "gray-matter";

export type Page = {
  title: string;
  categories: string[];
  content: string;
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

export type Pages = {
  projects: Projects;
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
    }
  }
}

export function loadPage(pagePage: string): Page {
  const {data, content} = grayMatter.read(pagePage);
  return {
    ...data as Page,
    content,
  };
}