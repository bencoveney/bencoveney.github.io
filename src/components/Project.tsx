import React from "react";
import { Page } from "../../scripts/loadPages.js";
import { Categories } from "./Categories.js";
import { Heading3 } from "./Heading.js";
import { LinkSet } from "./Links.js";
import { Markdown } from "./Markdown.js";

export function Project({ project }: { project: Page }) {
  return (
    <>
      <Heading3>{project.title}</Heading3>
      <Markdown>{project.element}</Markdown>
      <LinkSet {...project} />
      <Categories categories={project.categories} />
    </>
  );
}
