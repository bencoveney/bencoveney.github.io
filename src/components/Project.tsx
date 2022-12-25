import React from "react";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import { Project } from "../../scripts/loadPages.js";
import { Categories } from "./Categories.js";
import { Heading3 } from "./Heading.js";
import {
  ItchLink,
  NpmLink,
  NugetLink,
  WebsiteLink,
  GithubLink,
} from "./Links.js";
import { Markdown } from "./Markdown.js";

export function Project({
  project,
  transformImage,
}: {
  project: Project;
  transformImage?: TransformImage;
}) {
  return (
    <>
      <Heading3>{project.title}</Heading3>
      <Markdown content={project.content} transformImage={transformImage} />
      <p>
        {project.itch && <ItchLink itch={project.itch} />}
        {project.npm && <NpmLink npm={project.npm} />}
        {project.nuget && <NugetLink nuget={project.nuget} />}
        {project.website && <WebsiteLink website={project.website} />}
        {project.github && <GithubLink github={project.github} />}
      </p>
      <Categories categories={project.categories} />
    </>
  );
}
