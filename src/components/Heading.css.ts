import { config } from "../config.js";

export const styles = {
  heading1: {
    display: "block",
    textAlign: "center",
  },
  heading2: {
    display: "block",
    textAlign: "center",
  },
  heading3: {
    marginTop: config.brand.sizes.verticalPadding,
  },
  heading4: {
    marginTop: config.brand.sizes.verticalPadding,
  },
  heading5: {
    marginTop: config.brand.sizes.verticalPadding,
  },
  heading6: {
    marginTop: config.brand.sizes.verticalPadding,
  },
  "@media screen and (max-width: 768px)": {
    heading1: {
      fontSize: "2.618em",
    },
    heading2: {
      fontSize: "1.618em",
    },
    heading3: {
      fontSize: "1.618em",
    },
    heading4: {
      fontSize: "1.618em",
    },
    heading5: {
      fontSize: "1.618em",
    },
    heading6: {
      fontSize: "1.618em",
    },
  },
  "@media screen and (min-width: 769px)": {
    heading1: {
      fontSize: "4.236em",
    },
    heading2: {
      fontSize: "2.618em",
    },
    heading3: {
      fontSize: "1.618em",
    },
    heading4: {
      fontSize: "1.3em",
    },
    heading5: {
      fontSize: "1.3em",
    },
    heading6: {
      fontSize: "1.3em",
    },
  },
};
