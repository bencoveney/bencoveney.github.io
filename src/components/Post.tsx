import React from "react";
import ReactMarkdown from "react-markdown";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import { Post } from "../../scripts/loadPages.js";
import { Categories } from "./Categories.js";
import { WebsiteLink } from "./Links.js";

export function Post({
  post,
  transformImage,
}: {
  post: Post;
  transformImage?: TransformImage;
}) {
  return (
    <>
      <h3>{post.title}</h3>
      <ReactMarkdown transformImageUri={transformImage}>
        {post.content}
      </ReactMarkdown>
      <p>
        {post.website && <WebsiteLink website={post.website} />}
      </p>
      <Categories categories={post.categories} />
    </>
  );
}
