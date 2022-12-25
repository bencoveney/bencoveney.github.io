import React from "react";
import { PropsWithChildren } from "react";
import { css } from "../css.js";
import { styles } from "./Heading.css.js";

const { classes } = css(styles);

export function Heading1({ children }: PropsWithChildren) {
  return <h1 className={classes.heading1}>{children}</h1>;
}

export function Heading2({ children }: PropsWithChildren) {
  return <h2 className={classes.heading2}>{children}</h2>;
}

export function Heading3({ children }: PropsWithChildren) {
  return <h3 className={classes.heading3}>{children}</h3>;
}

export function Heading4({ children }: PropsWithChildren) {
  return <h4 className={classes.heading4}>{children}</h4>;
}

export function Heading5({ children }: PropsWithChildren) {
  return <h5 className={classes.heading5}>{children}</h5>;
}

export function Heading6({ children }: PropsWithChildren) {
  return <h6 className={classes.heading6}>{children}</h6>;
}
