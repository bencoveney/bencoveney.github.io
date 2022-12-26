import React from "react";
import ReactMarkdown from "react-markdown";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import remarkGfm from "remark-gfm";
import { css } from "../css.js";
import { Heading3, Heading4, Heading5, Heading6 } from "./Heading.js";
import { styles } from "./Markdown.css.js";

const { classes } = css(styles);

export function Markdown({
  content,
  transformImage,
}: {
  content: string;
  transformImage?: TransformImage;
}) {
  return (
    <ReactMarkdown
      transformImageUri={transformImage}
      remarkPlugins={[remarkGfm]}
      className={classes.markdown}
      components={{
        h1: ({ node, ...props }) => <h3 {...props} />,
        h2: ({ node, ...props }) => <h4 {...props} />,
        h3: ({ node, ...props }) => <h5 {...props} />,
        h4: ({ node, ...props }) => <h6 {...props} />,
        h5: ({ node, ...props }) => <h6 {...props} />,
        h6: ({ node, ...props }) => <h6 {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
