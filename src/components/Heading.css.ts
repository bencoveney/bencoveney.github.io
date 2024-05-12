export const commonHeadingStyles = {
  fontFamily: "var(--font-family-heading)",
  fontWeight: 100,
  position: "relative",
  lineHeight: "120%",
};

export const styles = {
  heading1: {
    ...commonHeadingStyles,
    display: "block",
    textAlign: "center",
    "@media screen and (max-width: 768px)": {
      fontSize: "2.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "3em",
    },
  },
  heading2: {
    ...commonHeadingStyles,
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
    ...commonHeadingStyles,
    marginTop: "var(--vertical-padding)",
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.618em",
    },
  },
  heading4: {
    ...commonHeadingStyles,
    marginTop: "var(--vertical-padding)",
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.3em",
    },
  },
  heading5: {
    ...commonHeadingStyles,
    marginTop: "var(--vertical-padding)",
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.3em",
    },
  },
  heading6: {
    ...commonHeadingStyles,
    marginTop: "var(--vertical-padding)",
    "@media screen and (max-width: 768px)": {
      fontSize: "1.618em",
    },
    "@media screen and (min-width: 769px)": {
      fontSize: "1.3em",
    },
  },
};
