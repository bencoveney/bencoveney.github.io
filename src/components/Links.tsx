import React from "react";

export function WebsiteLink({ website }: { website: string }) {
  return (
    <a href={website}>
      <i className="mdi mdi-web mdi-18px"></i> View website
    </a>
  );
}

export function NpmLink({ npm }: { npm: string }) {
  return (
    <a href={npm}>
      <i className="mdi mdi-npm mdi-18px"></i> View on NPM
    </a>
  );
}

export function GithubLink({ github }: { github: string }) {
  return (
    <a href={github}>
      <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
    </a>
  );
}

export function NugetLink({ nuget }: { nuget: string }) {
  return (
    <a href={nuget}>
      <i className="mdi mdi-package mdi-18px"></i> View on Nuget
    </a>
  );
}

export function ItchLink({ itch }: { itch: string }) {
  return (
    <a href={itch}>
      <i className="mdi mdi-gamepad-variant mdi-18px"></i> Play on Itch
    </a>
  );
}
