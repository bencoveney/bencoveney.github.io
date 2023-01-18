import { config } from "../config.js";
import { commonHeadingStyles } from "./Heading.css.js";

export const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "rgb(250, 250, 250)",
    flex: "0 0 auto",
    margin: `0 auto ${config.brand.sizes.verticalPadding} auto`,
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "800px",
  },
  previewWrapper: {
    position: "relative",
    maxWidth: "100%",
    backgroundColor: "black",
    overflow: "hidden",
    borderBottom: "1px solid black",
  },
  preview: {
    display: "flex",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  previewBackground: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    filter: "blur(10px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  previewImage: {
    flex: "0 0 auto",
    maxWidth: "100%",
    maxHeight: "450px",
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
