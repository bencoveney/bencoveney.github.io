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
    color: "var(--fg-color)",
    margin: "0 5px",
  },
  tag: {
    backgroundColor: "var(--bg-color-alternate)",
    padding: "5px",
    borderRadius: "5px",
  },
};
