import React from "react";
import { createCssHook } from "../contexts/CssContext.js";
import { PostDetails } from "../loadPosts.js";
import { Categories } from "./Categories.js";
import { styles } from "./Preview.css.js";
import { joinClasses } from "../css.js";

const { useCss } = createCssHook(styles);

export function Preview({
  post,
  postKey,
  lazy,
}: {
  post: PostDetails;
  postKey: string;
  lazy: boolean;
}) {
  const { classes } = useCss();
  return (
    <div className={classes.wrapper}>
      <a className={classes.link} href={`posts/${postKey}.html`}>
        {post.preview ? (
          <div className={classes.previewWrapper}>
            <div
              style={{ backgroundImage: `url(${post.preview})` }}
              className={classes.previewBackground}
            />
            <div className={classes.preview}>
              <img
                src={post.preview}
                className={classes.previewImage}
                loading={lazy ? "lazy" : "eager"}
                alt={`Preview image for the post ${post.title}`}
              />
            </div>
            <h2 className={classes.title}>{post.title}</h2>
          </div>
        ) : (
          <h2 className={joinClasses(classes.title, classes.noPreview)}>
            {post.title}
          </h2>
        )}
        <div className={classes.content}>
          <p className={classes.blurb}>
            {post.summary || "A wonderful surprise..."}
          </p>
          <Categories compact {...post} />
        </div>
      </a>
    </div>
  );
}
