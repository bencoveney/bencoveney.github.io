import React, { PropsWithChildren } from "react";
import { styles } from "./Content.css.js";
import { createCssHook } from "../contexts/CssContext.js";

const { useCss } = createCssHook(styles);

export function Content({ children }: PropsWithChildren) {
  const { classes } = useCss();
  return <div className={classes.content}>{children}</div>;
}
