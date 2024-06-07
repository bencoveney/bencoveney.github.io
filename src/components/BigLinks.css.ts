export const styles = {
  links: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    backgroundColor: "var(--background-color-medium)",
    flex: "0 0 auto",
    margin: "0 auto var(--vertical-padding) auto",
    width: "100%",
    maxWidth: "800px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "var(--vertical-padding) 1rem",
    "&:hover": {
      backgroundColor: "var(--background-color-light)",
    },
  },
  name: {
    display: "block",
  },
  icon: {
    lineHeight: "1",
    marginRight: "1rem",
    color: "var(--foreground-color-dark)",
  },
};
