import { commonHeadingStyles } from "./Heading.css.js";

export const styles = {
  container: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "var(--background-color-medium)",
    margin: "0 auto var(--vertical-padding) auto",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderBottom: "3px solid var(--color-blue-400)",
  },
  link: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    ...commonHeadingStyles,
    fontSize: "1.618em",
    padding: "10px var(--horizontal-padding)",
    display: "flex",
    alignItems: "center",
  },
  home: {
    textAlign: "right",
    padding: "10px var(--horizontal-padding)",
    display: "flex",
    alignItems: "stretch",
  },
  icon: {
    color: "var(--foreground-color-dark)",
    position: "relative",
    top: "2px",
    marginLeft: "0.5rem",
  },
};
