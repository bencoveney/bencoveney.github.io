import React, { PropsWithChildren } from "react";
import { styles } from "./Wrapper.css.js";
import { createCssHook } from "../contexts/CssContext.js";

const { useCss } = createCssHook(styles);

export function Wrapper({ children }: PropsWithChildren) {
  const { classes } = useCss();
  return <div className={classes.wrapper}>{children}</div>;
}
