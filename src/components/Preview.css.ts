import { config } from "../config.js";
import { commonHeadingStyles } from "./Heading.css.js";

export const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flex: "0 0 auto",
    margin: `0 auto ${config.brand.sizes.verticalPadding} auto`,
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "800px",
  },
  previewWrapper: {
    position: "relative",
    maxWidth: "100%",
    backgroundColor: "var(--background-color-light)",
    overflow: "hidden",
    borderTop: "1px solid black",
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
    maxHeight: "min(450px, 60vh)",
    display: "block",
  },
  content: {
    flex: "1 1 auto",
    padding: `${config.brand.sizes.verticalPadding} ${config.brand.sizes.horizontalPadding}`,
    paddingTop: 0,
  },
  blurb: {
    marginTop: "1rem",
    marginBottom: "1rem",
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
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    padding: `${config.brand.sizes.verticalPadding} ${config.brand.sizes.horizontalPadding}`,
    backgroundColor: "var(--background-color-medium)",
    paddingBottom: 0,
    "@media screen and (max-width: 768px)": {
      position: "relative",
    },
  },
  noPreview: {
    position: "relative",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
    position: "relative",
    margin: 0,
    backgroundColor: "var(--background-color-medium)",
    "&:hover": {
      "--background-color-medium": "var(--background-color-light)",
      backgroundColor: "var(--background-color-light)",
    },
  },
};
