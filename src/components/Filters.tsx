import React from "react";
import { config } from "../config.js";
import { Categories } from "./Categories.js";
import { createCssHook } from "../contexts/CssContext.js";
import { styles } from "./Filters.css.js";

const { useCss } = createCssHook(styles);

export function Filters() {
  const { classes } = useCss();
  return (
    <>
      <h2 className={classes.title}>Filters</h2>
      <Categories categories={Object.keys(config.categories)} />
    </>
  );
}
