import React from "react";
import ReactMarkdown from "react-markdown";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import { Project } from "../../scripts/loadPages.js";
import { Categories } from "./Categories.js";
import {
  ItchLink,
  NpmLink,
  NugetLink,
  WebsiteLink,
  GithubLink,
} from "./Links.js";

export function Project({
  project,
  transformImage,
}: {
  project: Project;
  transformImage?: TransformImage;
}) {
  return (
    <>
      <h3>{project.title}</h3>
      <ReactMarkdown transformImageUri={transformImage}>
        {project.content}
      </ReactMarkdown>
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
