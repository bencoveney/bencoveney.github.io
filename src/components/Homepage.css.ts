import { config } from "../config.js";

export const styles = {
  wrapper: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "3px double rgba(100, 100, 100, 0.9)",
    boxShadow: "0 5px 10px 2px rgba(100, 100, 100, 0.2)",
    flex: "0 0 auto",
    margin: "0 auto 10px auto",
  },
  "@media screen and (max-width: 768px)": {
    wrapper: {
      padding: "10%",
    },
    content: {
      padding: "40px",
    },
  },
  "@media screen and (min-width: 769px)": {
    wrapper: {
      padding: "5%",
    },
    content: {
      boxSizing: "border-box",
      width: "70%",
      maxWidth: "800px",
      padding: "75px",
    },
  },
  tagline: {
    display: "block",
    textAlign: "center",
  },
  about: {
    marginLeft: "25px",
    marginTop: config.brand.sizes.verticalPadding,
    "& li": {
      listStyleType: "disc",
    },
  },
};
