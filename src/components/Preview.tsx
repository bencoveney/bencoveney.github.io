import React from "react";
import { createCssHook } from "../contexts/CssContext.js";
import { PostDetails } from "../loadPosts.js";
import { Categories } from "./Categories.js";
import { styles } from "./Preview.css.js";

const { useCss } = createCssHook(styles);

export function Preview({
  post,
  postKey,
}: {
  post: PostDetails;
  postKey: string;
}) {
  const { classes } = useCss();
  return (
    <div className={classes.wrapper}>
      <a className={classes.link} href={`./${postKey}.html`}>
        <div className={classes.content}>
          <h2 className={classes.title}>{post.title}</h2>
          <p className={classes.blurb}>
            {post.summary || "A wonderful surprise..."}
          </p>
          <Categories compact {...post} />
        </div>
        {post.preview && (
          <div className={classes.previewWrapper}>
            <div
              style={{ backgroundImage: `url(${post.preview})` }}
              className={classes.previewBackground}
            />
            <div className={classes.preview}>
              <img
                src={post.preview}
                className={classes.previewImage}
                loading="lazy"
              />
            </div>
          </div>
        )}
      </a>
    </div>
  );
}
