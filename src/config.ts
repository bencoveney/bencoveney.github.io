export const config = {
  categories: {
    ts: { name: "TypeScript", icon: "mdi-language-typescript", color: "red" },
    ci: {
      name: "Continuous Integration",
      icon: "mdi-server-network",
      color: "red",
    },
    "unit-test": { name: "Unit Testing", icon: "mdi-test-tube", color: "red" },
    npm: { name: "NPM", icon: "mdi-npm", color: "red" },
    svg: { name: "SVG", icon: "mdi-svg", color: "red" },
    dataviz: { name: "Data Viz", icon: "mdi-chart-line", color: "red" },
    webscraping: { name: "Web Scraping", icon: "mdi-search-web", color: "red" },
    "c-sharp": { name: "C#", icon: "mdi-language-csharp", color: "red" },
    sql: { name: "SQL", icon: "mdi-database", color: "red" },
    nuget: { name: "Nuget", icon: "mdi-package", color: "red" },
    sass: { name: "Sass", icon: "mdi-sass", color: "red" },
    css: { name: "CSS", icon: "mdi-language-css3", color: "red" },
    canvas: { name: "HTML5 Canvas", icon: "mdi-brush", color: "red" },
    js: { name: "JavaScript", icon: "mdi-language-javascript", color: "red" },
    "prog-lang": {
      name: "Programming Languages",
      icon: "mdi-desktop-classic",
      color: "red",
    },
    image: { name: "Image Processing", icon: "mdi-image", color: "red" },
    "genetic-algorithms": {
      name: "Genetic Algorithms",
      icon: "mdi-dna",
      color: "red",
    },
    gaming: { name: "Gaming", icon: "mdi-gamepad-variant", color: "red" },
    me: { name: "About Me", icon: "mdi-human", color: "red" },
    react: { name: "React", icon: "mdi-react", color: "red" },
    music: { name: "Music", icon: "mdi-music", color: "red" },
    assembly: { name: "Assembly", icon: "mdi-chip", color: "red" },
    writing: { name: "Writing", icon: "mdi-lead-pencil", color: "green" },
    project: { name: "Project", icon: "mdi-cube", color: "green" },
  } as {
    [alias: string]: { name: string; icon: string; color: "red" | "green" };
  },
  links: [
    {
      name: "RSS Feed",
      href: "/feed.xml",
      icon: "mdi-rss",
    },
    {
      name: "Github",
      href: "https://github.com/bencoveney",
      icon: "mdi-github-circle",
    },
    {
      name: "LinkedIn",
      href: "https://uk.linkedin.com/in/ben-coveney-34115486",
      icon: "mdi-linkedin",
    },
    {
      name: "Steam",
      href: "https://steamcommunity.com/id/bencoveney",
      icon: "mdi-steam",
    },
  ] as { name: string; href: string; icon: string }[],
  sitename: "Ben Coveney's Blog",
  hostname: "https://bencoveney.com/",
};

export type Config = typeof config;
