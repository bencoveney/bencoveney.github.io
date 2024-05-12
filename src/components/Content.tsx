import React, { PropsWithChildren } from "react";
import { styles } from "./Content.css.js";
import { createCssHook } from "../contexts/CssContext.js";

const { useCss } = createCssHook(styles);

export function Content({ children }: PropsWithChildren) {
  const { classes } = useCss();
  let className = classes.content;
  return <div className={className}>{children}</div>;
}
