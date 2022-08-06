import React from "react";
import ReactMarkdown from "react-markdown";
import { Project } from "../../scripts/loadPages.js";
import { config } from "../config.js";

export function Project({ project }: { project: Project }) {
  return (
    <>
      <h3>{project.title}</h3>
      <ReactMarkdown>{project.content}</ReactMarkdown>
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

function WebsiteLink({ website }: { website: string }) {
  return (
    <a href={website}>
      <i className="mdi mdi-web mdi-18px"></i> View website
    </a>
  );
}

function NpmLink({ npm }: { npm: string }) {
  return (
    <a href={npm}>
      <i className="mdi mdi-npm mdi-18px"></i> View on NPM
    </a>
  );
}

function GithubLink({ github }: { github: string }) {
  return (
    <a href={github}>
      <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
    </a>
  );
}

function NugetLink({ nuget }: { nuget: string }) {
  return (
    <a href={nuget}>
      <i className="mdi mdi-package mdi-18px"></i> View on Nuget
    </a>
  );
}

function ItchLink({ itch }: { itch: string }) {
  return (
    <a href={itch}>
      <i className="mdi mdi-gamepad-variant mdi-18px"></i> Play on Itch
    </a>
  );
}

function Categories({ categories }: { categories: string[] }) {
  return (
    <ul className="technologies">
      {categories.map((categoryId) => {
        const category = config.categories[categoryId];
        return (
          <li key={categoryId}>
            <i className={`mdi ${category.icon} mdi-18px`}></i>
            <span className="tag">{category.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
