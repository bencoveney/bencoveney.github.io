import { styles as headingStyles } from "./Heading.css.js";
import { styles as separatorStyles } from "./Separator.css.js";

const pullout = {
  marginLeft: "calc(var(--horizontal-padding) * -1)",
  marginRight: "calc(var(--horizontal-padding) * -1)",
  "--double-margin": `calc(var(--horizontal-padding) * 2)`,
  width: `calc(100% + var(--double-margin))`,
  boxSizing: "border-box",
};

// node_modules/highlight.js/styles/base16/gruvbox-dark-medium.css
const gruvbox = {
  "& .hljs": {
    color: "#d5c4a1",
    background: "#282828",
  },
  "& .hljs ::selection, & .hljs::selection": {
    backgroundColor: "#504945",
    color: "#d5c4a1",
  },
  "& .hljs-comment": {
    color: "#665c54",
  },
  "& .hljs-tag": {
    color: "#bdae93",
  },
  "& .hljs-operator, & .hljs-punctuation, & .hljs-subst": {
    color: "#d5c4a1",
  },
  "& .hljs-operator": {
    opacity: "0.7",
  },
  "& .hljs-bullet, & .hljs-deletion, & .hljs-name, & .hljs-selector-tag, & .hljs-template-variable, & .hljs-variable":
    {
      color: "#fb4934",
    },
  "& .hljs-attr, & .hljs-link, & .hljs-literal, & .hljs-number, & .hljs-symbol, & .hljs-variable.constant_":
    {
      color: "#fe8019",
    },
  "& .hljs-class .hljs-title, & .hljs-title, & .hljs-title.class_": {
    color: "#fabd2f",
  },
  "& .hljs-strong": {
    fontWeight: "700",
    color: "#fabd2f",
  },
  "& .hljs-addition, & .hljs-code, & .hljs-string, & .hljs-title.class_.inherited__":
    {
      color: "#b8bb26",
    },
  "& .hljs-built_in, & .hljs-doctag, & .hljs-keyword.hljs-atrule, & .hljs-quote, & .hljs-regexp":
    { color: "#8ec07c" },
  "& .hljs-attribute, & .hljs-function .hljs-title, & .hljs-section, & .hljs-title.function_, & .ruby .hljs-property":
    { color: "#83a598" },
  "& .diff .hljs-meta, & .hljs-keyword, & .hljs-template-tag, & .hljs-type": {
    color: "#d3869b",
  },
  "& .hljs-emphasis": { color: "#d3869b", fontStyle: "italic" },
  "& .hljs-meta, & .hljs-meta .hljs-keyword, & .hljs-meta .hljs-string": {
    color: "#d65d0e",
  },
  "& .hljs-meta .hljs-keyword, & .hljs-meta-keyword": { fontWeight: "700" },
};

export const styles = {
  markdown: {
    "& p": {
      marginTop: "var(--vertical-padding)",
    },
    "& blockquote": {
      marginTop: "var(--vertical-padding)",
      backgroundColor: "var(--bg-color-alternate)",
      color: "var(--fg-color)",
      padding:
        "0.01em var(--horizontal-padding) var(--vertical-padding) var(--horizontal-padding)",
      fontSize: "1.1em",
      ...pullout,
    },
    "& .image-wrapper": {
      ...pullout,
      marginTop: "var(--vertical-padding)",
      backgroundColor: "var(--pure-black)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "var(--vertical-padding) var(--horizontal-padding)",
      "& img": {
        display: "block",
        maxWidth: "100%",
        maxHeight: "50vh",
      },
      "& .image-title": {
        marginTop: "0.5rem",
        color: "var(--fg-color)",
        textAlign: "center",
      },
    },
    "& pre code.hljs": {
      marginTop: "var(--vertical-padding)",
      display: "block",
      overflowX: "auto",
      padding: "var(--vertical-padding) var(--horizontal-padding)",
      ...pullout,
    },
    "& code.hljs": {
      fontFamily: "var(--font-family-code)",
      padding: "3px 5px",
    },
    "& a:link, & a:hover, & a:visited, & a:active": {
      textDecoration: "underline",
    },
    "& ul": {
      marginTop: "var(--vertical-padding)",
      marginLeft: "25px",
      "& li": {
        marginTop: "0.75rem",
        listStyleType: "disc",
        "&::marker": {
          color: "var(--foreground-color-dark)",
        },
      },
      "& ul": {
        marginTop: 0,
      },
    },
    "& ol": {
      marginTop: "var(--vertical-padding)",
      marginLeft: "25px",
      "& li": {
        marginTop: "0.75rem",
        listStyleType: "decimal",
        "&::marker": {
          color: "var(--foreground-color-medium)",
        },
      },
      "& ol": {
        marginTop: 0,
      },
    },
    "& h1": {
      marginTop: "var(--vertical-padding)",
      ...headingStyles.heading1,
    },
    "& h2": {
      marginTop: "var(--vertical-padding)",
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
      ...separatorStyles.separator,
      margin: "2em auto",
    },
    "& iframe": {
      marginTop: "var(--vertical-padding)",
      // Force width/height to flex
      aspectRatio: "16 / 9",
      height: "100%",
      ...pullout,
    },
    "& video": {
      ...pullout,
      marginTop: "var(--vertical-padding)",
    },
    ...gruvbox,
  },
};
