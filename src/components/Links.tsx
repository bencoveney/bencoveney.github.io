import React from "react";
import { Links } from "../loadPosts.js";
import { css } from "../css.js";
import { styles } from "./Links.css.js";

const { classes } = css(styles);

export function LinkSet({
  itch,
  npm,
  nuget,
  website,
  github,
  download,
}: Links) {
  return (
    <div className={classes.linkSet}>
      {itch && <ItchLink itch={itch} />}
      {npm && <NpmLink npm={npm} />}
      {nuget && <NugetLink nuget={nuget} />}
      {website && <WebsiteLink website={website} />}
      {github && <GithubLink github={github} />}
      {download && <DownloadLink download={download} />}
    </div>
  );
}

export function WebsiteLink({ website }: { website: string }) {
  return (
    <a href={website} className={classes.link}>
      <i className="mdi mdi-web mdi-18px"></i> View website
    </a>
  );
}

export function NpmLink({ npm }: { npm: string }) {
  return (
    <a href={npm} className={classes.link}>
      <i className="mdi mdi-npm mdi-18px"></i> View on NPM
    </a>
  );
}

export function GithubLink({ github }: { github: string }) {
  return (
    <a href={github} className={classes.link}>
      <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
    </a>
  );
}

export function NugetLink({ nuget }: { nuget: string }) {
  return (
    <a href={nuget} className={classes.link}>
      <i className="mdi mdi-package mdi-18px"></i> View on Nuget
    </a>
  );
}

export function ItchLink({ itch }: { itch: string }) {
  return (
    <a href={itch} className={classes.link}>
      <i className="mdi mdi-gamepad-variant mdi-18px"></i> Play on Itch
    </a>
  );
}

export function DownloadLink({ download }: { download: string }) {
  return (
    <a href={download} className={classes.link} download>
      <i className="mdi mdi-download mdi-18px"></i> Download
    </a>
  );
}
