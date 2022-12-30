import React from "react";
import { config } from "../config.js";
import { createCssHook } from "../contexts/CssContext.js";
import { joinClasses } from "../css.js";
import { styles } from "./Categories.css.js";

const { useCss } = createCssHook(styles);

export function Categories({ categories }: { categories: string[] }) {
  const { classes } = useCss();
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
