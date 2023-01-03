import { config } from "../config.js";

export const styles = {
  content: {
    backgroundColor: "rgb(250, 250, 250)",
    boxShadow: "0 5px 10px 2px rgba(100, 100, 100, 0.2)",
    flex: "0 0 auto",
    margin: `0 auto ${config.brand.sizes.verticalPadding} auto`,
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "800px",
    padding: config.brand.sizes.horizontalPadding,
  },
  compact: {
    padding: `10px ${config.brand.sizes.horizontalPadding}`,
    margin: `0 auto`,
  },
};
