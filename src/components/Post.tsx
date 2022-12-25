import React from "react";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import { Post } from "../../scripts/loadPages.js";
import { css } from "../css.js";
import { Categories } from "./Categories.js";
import { Heading3 } from "./Heading.js";
import { WebsiteLink } from "./Links.js";
import { Markdown } from "./Markdown.js";
import { styles } from "./Post.css.js";

const { classes } = css(styles);

export function Post({
  post,
  transformImage,
}: {
  post: Post;
  transformImage?: TransformImage;
}) {
  return (
    <>
      <Heading3>{post.title}</Heading3>
      <span className={classes.published}>
        {post.published ? `Published ${post.published}` : "Draft"}
      </span>
      <Markdown content={post.content} transformImage={transformImage} />
      <p>{post.website && <WebsiteLink website={post.website} />}</p>
      <Categories categories={post.categories} />
    </>
  );
}
