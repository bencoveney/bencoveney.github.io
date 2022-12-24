import React from "react";
import { config, Config } from "../config.js";
import { css } from "../css.js";
import { styles } from "./BigLinks.css.js";

const { classes } = css(styles);

export function BigLinks() {
  return (
    <ul className={classes.links}>
      {config.links.map((link, index) => (
        <BigLink key={index} {...link} />
      ))}
    </ul>
  );
}

function BigLink({ name, href, icon }: Config["links"][0]) {
  return (
    <li className={classes.link}>
      <a href={href}>
        <i className={`mdi ${icon} mdi-48px`}></i>
        <span className={classes.name}>{name}</span>
      </a>
    </li>
  );
}
