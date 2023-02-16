const backgroundColorDark = "hsl(238, 6%, 4%)";
const foregroundColorDark = "hsl(238, 6%, 96%)";
const backgroundColorMedium = "hsl(238, 6%, 8%)";
const foregroundColorMedium = "hsl(238, 6%, 92%)";
const backgroundColorLight = "hsl(238, 6%, 14%)";
const foregroundColorLight = "hsl(238, 6%, 86%)";
const pureBlack = "hsl(0, 0%, 0%)";
const highlightColor = "rgb(180, 20, 20)";

export const styles = {
  "@global": {
    ":root": {
      "--font-family-sans-serif":
        "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
      "--font-family-serif":
        "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, serif",
      "--font-family-mono":
        "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
      // Prefer these ones for referencing fonts:
      "--font-family-body": "var(--font-family-sans-serif)",
      "--font-family-heading": "var(--font-family-serif)",
      "--font-family-code": "var(--font-family-mono)",

      "--background-color-dark": backgroundColorDark,
      "--foreground-color-dark": foregroundColorDark,
      "--background-color-medium": backgroundColorMedium,
      "--foreground-color-medium": foregroundColorMedium,
      "--background-color-light": backgroundColorLight,
      "--foreground-color-light": foregroundColorLight,
      "--highlight-color": highlightColor,
      "--pure-black": pureBlack,

      "--fg-color": "var(--foreground-color-light)",
      "--bg-color": "var(--background-color-dark)",
      "--bg-color-alternate": "var(--background-color-light)",
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
      fontFamily: "var(--font-family-body)",
      color: "var(--fg-color)",
      backgroundColor: "var(--bg-color)",
    },

    "a:link, a:visited, a:active, a:hover": {
      color: "var(--fg-color)",
    },
  },
};
