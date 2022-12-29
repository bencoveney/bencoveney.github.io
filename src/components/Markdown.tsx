import React, { createElement, Fragment, PropsWithChildren } from "react";
import remarkGfm from "remark-gfm";
import remarkEmbedder from "@remark-embedder/core";
import oembedTransformer from "@remark-embedder/transformer-oembed";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeVideo from "rehype-video";
import { inspectUrls } from "@jsdevtools/rehype-url-inspector";
import { css } from "../css.js";
import { styles } from "./Markdown.css.js";
import { includeAsset } from "../includeAsset.js";
import { Page } from "../loadPages.js";

const { classes } = css(styles);

export async function markdownToReact(
  outputDir: string,
  page: Page,
  content: string
) {
  const { result } = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkEmbedder.default, {
      transformers: [
        [
          {
            ...oembedTransformer.default,
            shouldTransform: async (url: string) => {
              console.log(url);
              const result = await oembedTransformer.default.shouldTransform(
                url
              );
              console.log(result);
              return result;
            },
          },
          {
            params: {
              theme: "dark",
              dnt: true,
              omit_script: true,
            },
          } as any,
        ],
      ],
    })
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeVideo, { details: false })
    .use(inspectUrls, {
      inspectEach({ node }) {
        if (node.properties?.src) {
          node.properties.src = includeAsset(
            page,
            outputDir,
            node.properties.src as string
          );
        }
      },
      selectors: [
        { tagName: "img", propertyName: "src" },
        { tagName: "video", propertyName: "src" },
      ],
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
    })
    .process(content);
  return result;
}

export function Markdown({ children }: PropsWithChildren<{}>) {
  return <div className={classes.markdown}>{children}</div>;
}
