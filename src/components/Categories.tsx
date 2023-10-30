import React from "react";
import { config } from "../config.js";
import { createCssHook } from "../contexts/CssContext.js";
import { joinClasses } from "../css.js";
import { styles } from "./Categories.css.js";

const { useCss } = createCssHook(styles);

export function Categories({
  categories,
  compact,
}: {
  categories: string[];
  compact?: boolean;
}) {
  const { classes } = useCss();
  return (
    <ul
      className={joinClasses(classes.technologies, compact && classes.compact)}
    >
      {categories.map((categoryId) => {
        const category = config.categories[categoryId];
        return (
          <li
            className={joinClasses(
              classes.technology,
              category.color === "red" ? classes.tagRed : classes.tagGreen
            )}
            key={categoryId}
          >
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
