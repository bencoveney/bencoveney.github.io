import React from "react";
import { Post } from "../loadPosts.js";
import { Categories } from "./Categories.js";
import { Heading3 } from "./Heading.js";
import { LinkSet } from "./Links.js";
import { Markdown } from "./Markdown.js";
import { styles } from "./Post.css.js";
import { createCssHook } from "../contexts/CssContext.js";

const { useCss } = createCssHook(styles);

export function Post({ post }: { post: Post }) {
  const { classes } = useCss();
  return (
    <>
      <Heading3>{post.title}</Heading3>
      {post.published && (
        <span className={classes.published}>Published {post.published}</span>
      )}
      <Markdown>{post.element}</Markdown>
      <LinkSet {...post} />
      <Categories categories={post.categories} />
    </>
  );
}
