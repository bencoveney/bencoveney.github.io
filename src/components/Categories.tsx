import React from "react";
import { config } from "../config.js";

export function Categories({ categories }: { categories: string[] }) {
  return (
    <ul className="technologies">
      {categories.map((categoryId) => {
        const category = config.categories[categoryId];
        return (
          <li key={categoryId}>
            <i className={`mdi ${category.icon} mdi-18px`}></i>
            <span className="tag">{category.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
