import path from "path";
import fs from "fs";
import React from "react";
import { StaticRouter } from "react-router-dom/server.js";
import ReactDOMServer from "react-dom/server";
import { Homepage } from "../src/components/Homepage.js";
import { config } from "../src/config.js";
import { loadPages, Page } from "./loadPages.js";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";

const pages = loadPages();

function mkDirP(parentDir: string, childDir: string) {
  const resolvedDir = path.resolve(parentDir, childDir);
  if (!fs.existsSync(resolvedDir)) {
    fs.mkdirSync(resolvedDir, { recursive: true });
  }
  return resolvedDir;
}

async function buildSite() {
  const outputDir = mkDirP(process.cwd(), "build");
  await writeHomepage(outputDir);
}

const startTime = Date.now();
try {
  await buildSite();
  const deltaTime = Date.now() - startTime;
  console.log(`Build succeeded in ${deltaTime}ms`);
} catch (error: any) {
  console.log(`Build failed: ${error.message || error}`);
  process.exit(1);
}

export async function writeHomepage(outputDir: string) {
  function transformImage(page: Page): TransformImage {
    return (src: string, alt: string, title: string | null): string => {
      mkDirP(outputDir, page.route);
      const from = path.join(process.cwd(), page.route, src);
      const to = path.join(outputDir, page.route, src);
      const web = path.posix.join(page.route, src);
      console.log("copying", from, to, web);
      fs.copyFileSync(from, to)
      return web;
    };
  }

  await writePage(
    <Page
      title="Ben Coveney"
      description="Ben Coveney's personal website"
      canonical={config.hostname}
    >
      <StaticRouter location={{ pathname: `/` }}>
        <Homepage pages={pages} transformImage={transformImage} />
      </StaticRouter>
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
        <link rel="stylesheet" href="index.css" />
        <link
          href="https://cdn.materialdesignicons.com/2.2.43/css/materialdesignicons.min.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <div
          id="react-root"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `\nwindow.pages = JSON.parse(\`${JSON.stringify(
              pages,
              null,
              2
            ).replaceAll("\\", "\\\\")}\`);\r\n`,
          }}
        />
        <script type="module" src="./index.js"></script>
      </body>
    </html>
  );
}
