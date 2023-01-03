import React, { PropsWithChildren, ReactNode } from "react";
import { createCssHook } from "../contexts/CssContext.js";
import { styles } from "./Permalink.css.js";

const { useCss } = createCssHook(styles);

const collapseChildren = (children: ReactNode | undefined): string[] => {
  const result = ([] as any[])
    .concat(children)
    .filter((child) => !!child)
    .map((child) => {
      if (typeof child === "object") {
        return collapseChildren(child?.props?.children);
      } else {
        return child;
      }
    })
    .flat();
  return result;
};

export function PermaLink({ children }: PropsWithChildren) {
  const { classes } = useCss();
  const stringChildren = collapseChildren(children).filter(
    (child): child is string => typeof child === "string"
  );
  if (stringChildren.length === 0) {
    console.log(children);
    throw new Error("No string children for permalink");
  }
  const formatName = stringChildren
    .join("-")
    .replaceAll(" ", "-")
    .toLocaleLowerCase();

  return (
    <>
      <div className={classes.relative}>
        <a href={`#${formatName}`} className={classes.permalink}>
          <i className={`mdi mdi-link-variant mdi-24px`}></i>
        </a>
        <a id={formatName} className={classes.target} />
      </div>
      {children}
    </>
  );
}
