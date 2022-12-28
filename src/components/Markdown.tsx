import React, { createElement, Fragment, PropsWithChildren } from "react";
import remarkGfm from "remark-gfm";
import remarkEmbedder from "@remark-embedder/core";
import oembedTransformer from "@remark-embedder/transformer-oembed";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { inspectUrls } from "@jsdevtools/rehype-url-inspector";
import { css } from "../css.js";
import { styles } from "./Markdown.css.js";
import { writeDownload } from "../../scripts/writeImages.js";
import { Page } from "../../scripts/loadPages.js";

const { classes } = css(styles);

export function getConverter(outputDir: string, page: Page) {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkEmbedder.default, {
      transformers: [
        oembedTransformer.default,
        {
          params: {
            theme: "dark",
            dnt: true,
            omit_script: true,
          },
        } as any,
      ],
    })
    .use(remarkRehype)
    .use(inspectUrls, {
      inspectEach({ node }) {
        if (node.properties?.src) {
          node.properties.src = writeDownload(
            page,
            outputDir,
            node.properties.src as string
          );
        }
      },
      selectors: ["img[src]"],
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        h1: (props: any) => <h3 {...props} />,
        h2: (props: any) => <h4 {...props} />,
        h3: (props: any) => <h5 {...props} />,
        h4: (props: any) => <h6 {...props} />,
        h5: (props: any) => <h6 {...props} />,
        h6: (props: any) => <h6 {...props} />,
      },
    });
}

export function Markdown({ children }: PropsWithChildren<{}>) {
  return <div className={classes.markdown}>{children}</div>;
}
