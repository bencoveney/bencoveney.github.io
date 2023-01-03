import { commonHeadingStyles } from "./Heading.css.js";

export const styles = {
  container: {
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  link: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    ...commonHeadingStyles,
    fontSize: "1.618em",
  },
  home: {
    textAlign: "right",
  },
};
