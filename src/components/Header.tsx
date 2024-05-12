import React from "react";
import { createCssHook } from "../contexts/CssContext.js";
import { styles } from "./Header.css.js";

const { useCss } = createCssHook(styles);
export function Header() {
  const { classes } = useCss();
  return (
    <div className={classes.container}>
      <header className={classes.name}>
        <a href="/" className={classes.link}>
          Ben Coveney
        </a>
      </header>
      <nav className={classes.home}>
        <a href="/" className={classes.link}>
          <div>Home</div>
          <i className={`mdi mdi-home mdi-18px ${classes.icon}`} />
        </a>
      </nav>
    </div>
  );
}
