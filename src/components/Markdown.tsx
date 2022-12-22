import React from "react";
import ReactMarkdown from "react-markdown";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import remarkGfm from "remark-gfm";

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
    >
      {content}
    </ReactMarkdown>
  );
}
