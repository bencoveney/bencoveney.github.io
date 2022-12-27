import { config } from "../config.js";

export const styles = {
  heading1: {
    display: "block",
    textAlign: "center",
    "@media screen and (max-width: 768px)": {
      fontSize: "2.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "4.236em",
    },
  },
  heading2: {
    display: "block",
    textAlign: "center",
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "2.618em",
    },
  },
  heading3: {
    marginTop: config.brand.sizes.verticalPadding,
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.618em",
    },
  },
  heading4: {
    marginTop: config.brand.sizes.verticalPadding,
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.3em",
    },
  },
  heading5: {
    marginTop: config.brand.sizes.verticalPadding,
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.3em",
    },
  },
  heading6: {
    marginTop: config.brand.sizes.verticalPadding,
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.3em",
    },
  },
};
