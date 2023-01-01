import React from "react";
import { styles } from "./PostPage.css.js";
import { Heading1 } from "./Heading.js";
import { createCssHook } from "../contexts/CssContext.js";
import { PostDetails, PostsDetails } from "../loadPosts.js";
import { Markdown } from "./Markdown.js";
import { LinkSet } from "./Links.js";
import { Categories } from "./Categories.js";

const { useCss } = createCssHook(styles);

export function PostPage({
  post,
}: {
  posts: PostsDetails;
  key: string;
  post: PostDetails;
}) {
  const { classes } = useCss();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Heading1>{post.title}</Heading1>
          {post.published && (
            <span className={classes.published}>
              Published {post.published}
            </span>
          )}
          <Markdown>{post.element}</Markdown>
          <LinkSet {...post} />
          <Categories categories={post.categories} />
        </div>
      </div>
    </>
  );
}
