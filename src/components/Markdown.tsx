import React from "react";
import ReactMarkdown from "react-markdown";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import remarkGfm from "remark-gfm";
import { Heading3, Heading4, Heading5, Heading6 } from "./Heading.js";
import { Separator } from "./Separator.js";

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
      components={{
        hr: Separator,
        h1: Heading3,
        h2: Heading4,
        h3: Heading5,
        h4: Heading6,
        h5: Heading6,
        h6: Heading6,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
