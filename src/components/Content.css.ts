import { config } from "../config.js";

export const styles = {
  content: {
    backgroundColor: "var(--background-color-medium)",
    flex: "0 0 auto",
    margin: `0 auto ${config.brand.sizes.verticalPadding} auto`,
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "800px",
    padding: `${config.brand.sizes.verticalPadding} ${config.brand.sizes.horizontalPadding}`,
  },
  compact: {
    padding: `10px ${config.brand.sizes.horizontalPadding}`,
    margin: `0 auto`,
  },
};
