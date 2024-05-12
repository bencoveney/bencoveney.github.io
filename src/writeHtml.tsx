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
import { getRss } from "./rss.js";

async function buildSite() {
  const outputDir = mkDirP(process.cwd(), "build");
  const posts = await loadPosts(outputDir);
  await writeHomePage(outputDir, posts);
  await writePostPages(outputDir, posts);
  await writeRssFeed(outputDir, posts);
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
    if (error.cause && error.cause instanceof Error) {
      console.error(`Cause: ${error.cause}`);
      console.error(error.cause.stack);
    }
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
      title={config.sitename}
      description="Ben Coveney's personal website"
      image={posts["about"].preview}
      canonical={config.hostname + "index.html"}
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
      title={`${post.title} - ${config.sitename}`}
      description={post.summary}
      image={post.preview}
      canonical={config.hostname + `posts/${key}.html`}
      registry={registry}
    >
      {page}
    </Page>,
    path.resolve(outputDir, `posts/${key}.html`)
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
  image: string | undefined;
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#10141a" />
        <meta name="msapplication-TileColor" content="#10141a" />
        <meta name="theme-color" content="#10141a" />
        <link rel="canonical" href={props.canonical} />
        <link
          href="https://cdn.materialdesignicons.com/2.2.43/css/materialdesignicons.min.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title={config.sitename}
          href="/feed.xml"
        />
        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="article" />
        {props.image && <meta property="og:image" content={props.image} />}
        <meta property="og:url" content={props.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content={props.description} />
        <meta property="og:site_name" content={config.sitename} />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body dangerouslySetInnerHTML={{ __html: content }} />
    </html>
  );
}

async function writeRssFeed(outputDir: string, posts: PostsDetails) {
  const content = getRss(posts);
  await fs.promises.writeFile(path.resolve(outputDir, "feed.xml"), content);
}
