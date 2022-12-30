import React from "react";
import { styles } from "./Separator.css.js";
import { createCssHook } from "../contexts/CssContext.js";

const { useCss } = createCssHook(styles);

export function Separator() {
  const { classes } = useCss();
  return <hr className={classes.separator} />;
}
