import { config } from "../config.js";
import { commonHeadingStyles } from "./Heading.css.js";

export const styles = {
  wrapper: {
    display: "flex",
    backgroundColor: "rgb(250, 250, 250)",
    flex: "0 0 auto",
    margin: `0 auto ${config.brand.sizes.verticalPadding} auto`,
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "800px",
  },
  preview: {
    flex: "0 0 auto",
    maxWidth: "200px",
    backgroundColor: "black",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  previewImage: {
    aspectRatio: "1 / 1",
    maxWidth: "200px",
    maxHeight: "200px",
    display: "block",
  },
  content: {
    flex: "1 1 auto",
    padding: `${config.brand.sizes.verticalPadding} ${config.brand.sizes.horizontalPadding}`,
  },
  blurb: {
    marginTop: "10px",
    display: "inline-block",
    "@media screen and (min-width: 769px)": {
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
  title: {
    ...commonHeadingStyles,
    display: "block",
    fontSize: "1.618em",
  },
};
