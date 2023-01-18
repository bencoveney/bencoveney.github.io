export const config = {
  categories: {
    ts: { name: "TypeScript", icon: "mdi-language-typescript" },
    ci: { name: "Continuous Integration", icon: "mdi-server-network" },
    "unit-test": { name: "Unit Testing", icon: "mdi-test-tube" },
    npm: { name: "NPM", icon: "mdi-npm" },
    svg: { name: "SVG", icon: "mdi-svg" },
    dataviz: { name: "Data Viz", icon: "mdi-chart-line" },
    webscraping: { name: "Web Scraping", icon: "mdi-search-web" },
    "c-sharp": { name: "C#", icon: "mdi-language-csharp" },
    sql: { name: "SQL", icon: "mdi-database" },
    nuget: { name: "Nuget", icon: "mdi-package" },
    sass: { name: "Sass", icon: "mdi-sass" },
    css: { name: "CSS", icon: "mdi-language-css3" },
    canvas: { name: "HTML5 Canvas", icon: "mdi-brush" },
    js: { name: "JavaScript", icon: "mdi-language-javascript" },
    "prog-lang": { name: "Programming Langs", icon: "mdi-desktop-classic" },
    image: { name: "Image Processing", icon: "mdi-image" },
    "genetic-algorithms": { name: "Genetic Algorithms", icon: "mdi-dna" },
    gaming: { name: "Gaming", icon: "mdi-gamepad-variant" },
  } as { [alias: string]: { name: string; icon: string } },
  links: [
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
      name: "Blog",
      href: "https://www.bencoveney.com",
      icon: "mdi-book-open-page-variant",
    },
    {
      name: "Steam",
      href: "https://steamcommunity.com/id/bencoveney",
      icon: "mdi-steam",
    },
  ] as { name: string; href: string; icon: string }[],
  hostname: "https://bencoveney.github.io/",
  brand: {
    sizes: {
      verticalPadding: "1.5rem",
      horizontalPadding: "3rem",
    },
  },
};

export type Config = typeof config;
