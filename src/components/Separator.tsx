import React from "react";
import { css } from "../css.js";
import { styles } from "./Separator.css.js";

const { classes } = css(styles);

export function Separator() {
  return <hr className={classes.separator} />;
}
