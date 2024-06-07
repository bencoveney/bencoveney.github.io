import React from "react";
import { styles } from "./PostPage.css.js";
import { Heading1 } from "./Heading.js";
import { createCssHook } from "../contexts/CssContext.js";
import { PostDetails, PostsDetails } from "../loadPosts.js";
import { Markdown } from "./Markdown.js";
import { LinkSet } from "./Links.js";
import { Categories } from "./Categories.js";
import { Wrapper } from "./Wrapper.js";
import { Content } from "./Content.js";
import { GlobalStyles } from "./GlobalStyles.js";
import { Header } from "./Header.js";

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
      <GlobalStyles />
      <Wrapper>
        <Header />
        <div className={classes.title}>
          <Heading1>{post.title}</Heading1>
          {post.published && (
            <span className={classes.published}>
              Published {post.published}
            </span>
          )}
        </div>
        <Content>
          <Markdown>{post.element}</Markdown>
          <LinkSet {...post} />
          <Categories categories={post.categories} />
        </Content>
      </Wrapper>
    </>
  );
}
