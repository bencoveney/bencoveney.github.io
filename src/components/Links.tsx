import React from "react";
import { Links } from "../loadPosts.js";
import { styles } from "./Links.css.js";
import { createCssHook } from "../contexts/CssContext.js";

const { useCss } = createCssHook(styles);

export function LinkSet({
  itch,
  npm,
  nuget,
  website,
  github,
  download,
}: Links) {
  const { classes } = useCss();
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
  const { classes } = useCss();
  return (
    <a href={website} className={classes.link}>
      <i className={`mdi mdi-web mdi-18px ${classes.icon}`}></i> View website
    </a>
  );
}

export function NpmLink({ npm }: { npm: string }) {
  const { classes } = useCss();
  return (
    <a href={npm} className={classes.link}>
      <i className={`mdi mdi-npm mdi-18px ${classes.icon}`}></i> View on NPM
    </a>
  );
}

export function GithubLink({ github }: { github: string }) {
  const { classes } = useCss();
  return (
    <a href={github} className={classes.link}>
      <i className={`mdi mdi-github-circle mdi-18px ${classes.icon}`}></i> View
      on Github
    </a>
  );
}

export function NugetLink({ nuget }: { nuget: string }) {
  const { classes } = useCss();
  return (
    <a href={nuget} className={classes.link}>
      <i className={`mdi mdi-package mdi-18px ${classes.icon}`}></i> View on
      Nuget
    </a>
  );
}

export function ItchLink({ itch }: { itch: string }) {
  const { classes } = useCss();
  return (
    <a href={itch} className={classes.link}>
      <i className={`mdi mdi-gamepad-variant mdi-18px ${classes.icon}`}></i>{" "}
      Play on Itch
    </a>
  );
}

export function DownloadLink({ download }: { download: string }) {
  const { classes } = useCss();
  return (
    <a href={download} className={classes.link} download>
      <i className={`mdi mdi-download mdi-18px ${classes.icon}`}></i> Download
    </a>
  );
}
