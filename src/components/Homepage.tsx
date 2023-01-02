import React, { Fragment } from "react";
import { PostsDetails } from "../loadPosts.js";
import { BigLinks } from "./BigLinks.js";
import { styles } from "./Homepage.css.js";
import { Heading1, Heading2, Heading3 } from "./Heading.js";
import { createCssHook } from "../contexts/CssContext.js";
import { GlobalStyles } from "./GlobalStyles.js";
import { Wrapper } from "./Wrapper.js";
import { Content } from "./Content.js";

const { useCss } = createCssHook(styles);

export function Homepage({ posts }: { posts: PostsDetails }) {
  const { classes } = useCss();
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Content>
          <Heading1>Ben Coveney</Heading1>
          <span className={classes.tagline}>Software Developer</span>
          <BigLinks />
        </Content>

        <Content>
          <Heading2>Posts</Heading2>
          {Object.entries(posts)
            .sort((a, b) => +(a[1].title > b[1].title))
            .map(([slug, post]) => (
              <Fragment key={slug}>
                <Heading3>
                  <a href={`./${slug}.html`}>{post.title}</a>
                </Heading3>
              </Fragment>
            ))}
        </Content>
      </Wrapper>
    </>
  );
}
