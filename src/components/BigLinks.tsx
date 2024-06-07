import React from "react";
import { config, Config } from "../config.js";
import { createCssHook } from "../contexts/CssContext.js";
import { styles } from "./BigLinks.css.js";

const { useCss } = createCssHook(styles);

export function BigLinks() {
  const { classes } = useCss();
  return (
    <div className={classes.links}>
      {config.links.map((link, index) => (
        <BigLink key={index} {...link} />
      ))}
    </div>
  );
}

function BigLink({ name, href, icon }: Config["links"][0]) {
  const { classes } = useCss();
  return (
    <a href={href} className={classes.button}>
      <i className={`mdi ${icon} mdi-24px ${classes.icon}`}></i>
      <span className={classes.name}>{name}</span>
    </a>
  );
}
