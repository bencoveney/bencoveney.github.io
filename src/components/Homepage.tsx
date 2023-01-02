import React, { Fragment } from "react";
import { PostsDetails } from "../loadPosts.js";
import { Heading2, Heading3 } from "./Heading.js";
import { GlobalStyles } from "./GlobalStyles.js";
import { Wrapper } from "./Wrapper.js";
import { Content } from "./Content.js";
import { Header } from "./Header.js";
import { BigLinks } from "./BigLinks.js";

export function Homepage({ posts }: { posts: PostsDetails }) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content>
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
