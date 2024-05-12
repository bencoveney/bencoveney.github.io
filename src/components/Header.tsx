import React from "react";
import { createCssHook } from "../contexts/CssContext.js";
import { Content } from "./Content.js";
import { styles } from "./Header.css.js";

const { useCss } = createCssHook(styles);
export function Header() {
  const { classes } = useCss();
  return (
    <div className={classes.container}>
      <Content compact bottomBorder>
        <a href="/" className={classes.link}>
          <header className={classes.name}>Ben Coveney</header>
          <nav className={classes.home}>
            Home <i className={`mdi mdi-home`} />
          </nav>
        </a>
      </Content>
    </div>
  );
}
