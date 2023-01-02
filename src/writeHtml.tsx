import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Homepage } from "../src/components/Homepage.js";
import { config } from "../src/config.js";
import { loadPosts, PostDetails, PostsDetails } from "./loadPosts.js";
import { mkDirP } from "@bencoveney/utils/dist/node.js";
import jss from "jss";
import { CssProvider } from "./contexts/CssContext.js";
import { PostPage } from "./components/PostPage.js";

async function buildSite() {
  const outputDir = mkDirP(process.cwd(), "build");
  const posts = await loadPosts(outputDir);
  await writeHomePage(outputDir, posts);
  await writePostPages(outputDir, posts);
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

async function writeHomePage(outputDir: string, posts: PostsDetails) {
  const registry = new jss.SheetsRegistry();
  const page = (
    <CssProvider value={{ registry }}>
      <Homepage posts={posts} />
    </CssProvider>
  );
  await writeDocumentToFile(
    <Page
      title="Ben Coveney"
      description="Ben Coveney's personal website"
      canonical={config.hostname}
      registry={registry}
    >
      {page}
    </Page>,
    path.resolve(outputDir, "index.html")
  );
}

async function writePostPages(outputDir: string, posts: PostsDetails) {
  await Promise.all(
    Object.entries(posts).map(([key, post]) =>
      writePostPage(outputDir, posts, key, post)
    )
  );
}

async function writePostPage(
  outputDir: string,
  posts: PostsDetails,
  key: string,
  post: PostDetails
) {
  const registry = new jss.SheetsRegistry();
  const page = (
    <CssProvider value={{ registry }}>
      <PostPage key={key} post={post} posts={posts} />
    </CssProvider>
  );
  await writeDocumentToFile(
    <Page
      title="Ben Coveney"
      description="Ben Coveney's personal website"
      canonical={config.hostname}
      registry={registry}
    >
      {page}
    </Page>,
    path.resolve(outputDir, `${key}.html`)
  );
}

async function writeDocumentToFile(
  content: React.ReactElement,
  filePath: string
) {
  const rendered =
    "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(content);
  await fs.promises.writeFile(filePath, rendered);
  console.log(`Wrote ${filePath}`);
}

function Page(props: {
  children: React.ReactElement;
  title: string;
  description: string;
  canonical: string;
  registry: jss.SheetsRegistry;
}) {
  const content = ReactDOMServer.renderToString(props.children);
  const styles = props.registry.toString({ format: false });
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
