import { config } from "../config.js";

export const styles = {
  "@global": {
    ":root": {
      "--font-family":
        "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
      "--font-family-serif":
        "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, serif",
      "--font-family-mono":
        "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
      "--fg-color": `rgb(50, 50, 50)`,
      "--highlight-color": "rgb(180, 20, 20)",
      "--bg-color-alternate": `rgba(220, 220, 220, 0.9)`,
    },

    /* Reset */
    "*": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
      textDecoration: "none",
    },

    "html, body": {
      width: "100%",
      height: "100%",
      fontFamily: "var(--font-family)",
      color: "var(--fg-color)",
    },

    "a:link, a:visited, a:active, a:hover": {
      color: "var(--fg-color)",
    },
  },
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
    boxShadow: "0 5px 10px 2px rgba(100, 100, 100, 0.2)",
    flex: "0 0 auto",
    margin: "0 auto 10px auto",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "800px",
    "@media screen and (max-width: 768px)": {
      padding: "40px",
    },
    "@media screen and (min-width: 769px)": {
      padding: "75px",
    },
  },
  published: {
    marginTop: config.brand.sizes.verticalPadding,
    fontStyle: "italic",
    fontSize: "0.707em",
  },
};
