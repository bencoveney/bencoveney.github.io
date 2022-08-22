import React from "react";
import { config, Config } from "../config.js";

export function BigLinks() {
  return (
    <ul className="links">
      {config.links.map((link, index) => (
        <BigLink key={index} {...link} />
      ))}
    </ul>
  );
}

function BigLink({ name, href, icon }: Config["links"][0]) {
  return (
    <li>
      <a href={href}>
        <i className={`mdi ${icon} mdi-48px`}></i>
        <span className="name">{name}</span>
      </a>
    </li>
  );
}
