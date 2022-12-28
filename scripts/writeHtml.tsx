import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Homepage } from "../src/components/Homepage.js";
import { config } from "../src/config.js";
import { loadPages, Page, Pages } from "./loadPages.js";
import { mkDirP } from "./mkdirp.js";
import jss from "jss";
import { globalStyles } from "../src/css.js";

async function buildSite() {
  const outputDir = mkDirP(process.cwd(), "build");
  const pages = await loadPages(outputDir);
  await writeHomepage(outputDir, pages);
}

const startTime = Date.now();
try {
  await buildSite();
  const deltaTime = Date.now() - startTime;
  console.log(`Build succeeded in ${deltaTime}ms`);
} catch (error: any) {
  console.log(`Build failed: ${error.message || error}`);
  if (error instanceof Error) {
    console.error(error.stack);
  }
  process.exit(1);
}

export async function writeHomepage(outputDir: string, pages: Pages) {
  globalStyles();
  // TODO: Do I need to create the page early? for styles to be run?
  const page = <Homepage pages={pages} />;
  await writePage(
    <Page
      title="Ben Coveney"
      description="Ben Coveney's personal website"
      canonical={config.hostname}
    >
      {page}
    </Page>,
    path.resolve(outputDir, "index.html")
  );
}

export async function writePage(content: React.ReactElement, filePath: string) {
  const rendered =
    "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(content);
  await fs.promises.writeFile(filePath, rendered);
  console.log(`Wrote ${filePath}`);
}

export function Page(props: {
  children: React.ReactElement;
  title: string;
  description: string;
  canonical: string;
}) {
  const content = ReactDOMServer.renderToString(props.children);
  const styles = jss.sheets.toString();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="author" content="Ben Coveney" />
        <link rel="icon" href="/favicon-32.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-180.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="canonical" href={props.canonical} />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <link
          href="https://cdn.materialdesignicons.com/2.2.43/css/materialdesignicons.min.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body dangerouslySetInnerHTML={{ __html: content }} />
    </html>
  );
}
