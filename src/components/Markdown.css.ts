import { config } from "../config.js";
import { styles as headingStyles } from "./Heading.css.js";
import { styles as separatorStyles } from "./Separator.css.js";

export const styles = {
  markdown: {
    "& p": {
      marginTop: config.brand.sizes.verticalPadding,
    },
    "& blockquote": {
      marginTop: config.brand.sizes.verticalPadding,
      backgroundColor: "var(--bg-color-alternate)",
      color: "var(--fg-color)",
      padding: "0.01em 2em 1em 2em",
    },
    "& img": {
      maxWidth: "100%",
      display: "block",
      margin: "0 auto",
      boxShadow: "0 5px 10px 2px rgba(100, 100, 100, 0.2)",
    },
    "& pre": {
      marginTop: config.brand.sizes.verticalPadding,
      fontFamily: "var(--font-family-mono)",
    },
    "& code": {
      fontFamily: "var(--font-family-mono)",
    },
    "& a:link, & a:hover, & a:visited, & a:active": {
      textDecoration: "underline",
    },
    "& ul": {
      marginTop: config.brand.sizes.verticalPadding,
      marginLeft: "25px",
      "& li": {
        listStyleType: "disc",
      },
    },
    "& h1": {
      marginTop: config.brand.sizes.verticalPadding,
      ...headingStyles.heading1,
    },
    "& h2": {
      marginTop: config.brand.sizes.verticalPadding,
      ...headingStyles.heading2,
    },
    "& h3": {
      ...headingStyles.heading3,
    },
    "& h4": {
      ...headingStyles.heading4,
    },
    "& h5": {
      ...headingStyles.heading5,
    },
    "& h6": {
      ...headingStyles.heading6,
    },
    "& hr": {
      marginTop: config.brand.sizes.verticalPadding,
      ...separatorStyles.separator,
    },
    "& iframe": {
      marginTop: config.brand.sizes.verticalPadding,
      // Force width/height to flex
      aspectRatio: "16 / 9",
      height: "100%",
      width: "100%",
    },
    "& video": {
      marginTop: config.brand.sizes.verticalPadding,
      maxWidth: "100%",
    },
  },
};
