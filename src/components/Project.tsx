import React from "react";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import { Page } from "../../scripts/loadPages.js";
import { Categories } from "./Categories.js";
import { Heading3 } from "./Heading.js";
import { LinkSet } from "./Links.js";
import { Markdown } from "./Markdown.js";

export function Project({
  project,
  transformImage,
}: {
  project: Page;
  transformImage?: TransformImage;
}) {
  return (
    <>
      <Heading3>{project.title}</Heading3>
      <Markdown content={project.content} transformImage={transformImage} />
      <LinkSet {...project} />
      <Categories categories={project.categories} />
    </>
  );
}
