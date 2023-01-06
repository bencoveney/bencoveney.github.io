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
      lineHeight: "150%",
    },

    "html, body": {
      width: "100%",
      height: "100%",
      fontFamily: "var(--font-family)",
      color: "var(--fg-color)",
      backgroundColor: "#eee",
    },

    "a:link, a:visited, a:active, a:hover": {
      color: "var(--fg-color)",
    },
  },
};
