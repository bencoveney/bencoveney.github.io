import React, { PropsWithChildren } from "react";
import { styles } from "./Content.css.js";
import { createCssHook } from "../contexts/CssContext.js";

const { useCss } = createCssHook(styles);

export function Content({
  children,
  compact,
}: PropsWithChildren<{ compact?: boolean }>) {
  const { classes } = useCss();
  let className = classes.content;
  if (!!compact) {
    className += ` ${classes.compact}`;
  }
  return <div className={className}>{children}</div>;
}
