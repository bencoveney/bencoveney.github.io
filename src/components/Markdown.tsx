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
import { styles } from "./Markdown.css.js";
import { includeAsset } from "../includeAsset.js";
import { PostDetails } from "../loadPosts.js";
import { createCssHook } from "../contexts/CssContext.js";

export async function markdownToReact(
  outputDir: string,
  post: PostDetails,
  content: string
) {
  const { result } = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkEmbedder.default, {
      transformers: [
        [
          oembedTransformer.default,
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
            post,
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
        // h1: ({ children }: PropsWithChildren) => {
        //   return (
        //     <h1>
        //       <PermaLink>{children}</PermaLink>
        //     </h1>
        //   );
        // },
        // h2: ({ children }: PropsWithChildren) => {
        //   return (
        //     <h2>
        //       <PermaLink>{children}</PermaLink>
        //     </h2>
        //   );
        // },
        // h3: ({ children }: PropsWithChildren) => {
        //   return (
        //     <h3>
        //       <PermaLink>{children}</PermaLink>
        //     </h3>
        //   );
        // },
        // h4: ({ children }: PropsWithChildren) => {
        //   return (
        //     <h4>
        //       <PermaLink>{children}</PermaLink>
        //     </h4>
        //   );
        // },
        // h5: ({ children }: PropsWithChildren) => {
        //   return (
        //     <h5>
        //       <PermaLink>{children}</PermaLink>
        //     </h5>
        //   );
        // },
        // h6: ({ children }: PropsWithChildren) => {
        //   return (
        //     <h6>
        //       <PermaLink>{children}</PermaLink>
        //     </h6>
        //   );
        // },
        img: (props: any) => {
          return (
            <figure className="image-wrapper">
              <img {...props} />
              <figcaption className="image-title">{props.title}</figcaption>
            </figure>
          );
        },
        p: (props: any) => {
          if (!props || !props.children || props.children.length == 0) {
            console.log("emp", props);
          }
          return <p {...props} />;
        },
      },
    })
    .process(content);
  return result;
}

const { useCss } = createCssHook(styles);

export function Markdown({ children }: PropsWithChildren<{}>) {
  const { classes } = useCss();
  return <div className={classes.markdown}>{children}</div>;
}
