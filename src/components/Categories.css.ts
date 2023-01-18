import { config } from "../config.js";

export const styles = {
  technologies: {
    clear: "both",
    marginTop: config.brand.sizes.verticalPadding,
  },
  compact: {
    marginTop: 0,
  },
  technology: {
    float: "left",
    backgroundColor: "var(--highlight-color)",
    borderRadius: "5px",
    fontSize: "0.707em",
    margin: "5px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  icon: {
    color: "rgb(255, 255, 255)",
    margin: "0 5px",
  },
  tag: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "var(--fg-color)",
    padding: "5px",
    borderRadius: "5px",
  },
};
