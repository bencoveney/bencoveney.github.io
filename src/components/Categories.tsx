import React from "react";
import { config } from "../config.js";
import { css, joinClasses } from "../css.js";
import { styles } from "./Categories.css.js";

const { classes } = css(styles);

export function Categories({ categories }: { categories: string[] }) {
  return (
    <ul className={classes.technologies}>
      {categories.map((categoryId) => {
        const category = config.categories[categoryId];
        return (
          <li className={classes.technology} key={categoryId}>
            <i
              className={joinClasses(
                classes.icon,
                "mdi",
                category.icon,
                "mdi-18px"
              )}
            ></i>
            <span className={classes.tag}>{category.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
