import React from "react";
import { config, Config } from "../config.js";
import { createCssHook } from "../contexts/CssContext.js";
import { styles } from "./BigLinks.css.js";

const { useCss } = createCssHook(styles);

export function BigLinks() {
  const { classes } = useCss();
  return (
    <ul className={classes.links}>
      {config.links.map((link, index) => (
        <BigLink key={index} {...link} />
      ))}
    </ul>
  );
}

function BigLink({ name, href, icon }: Config["links"][0]) {
  const { classes } = useCss();
  return (
    <li className={classes.link}>
      <a href={href}>
        <i className={`mdi ${icon} mdi-48px ${classes.icon}`}></i>
        <span className={classes.name}>{name}</span>
      </a>
    </li>
  );
}
