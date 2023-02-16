export const styles = {
  relative: {
    display: "inline",
    position: "absolute",
    left: "-3rem",
    width: "3rem",
    textAlign: "center",
    fontSize: "0.7em",
    bottom: "0",
  },
  permalink: {
    "&:link, &:active, &:focus, &:visited, &:focus-visible": {
      outline: "none",
      color: "var(--bg-color-alternate)",
    },
    "&:hover": {
      outline: "none",
      color: "var(--fg-color)",
    },
  },
  target: {
    position: "absolute",
    top: `-4rem`,
    display: "block",
  },
};
