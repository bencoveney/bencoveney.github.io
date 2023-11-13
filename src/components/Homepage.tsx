import React from "react";
import { PostsDetails } from "../loadPosts.js";
import { GlobalStyles } from "./GlobalStyles.js";
import { Wrapper } from "./Wrapper.js";
import { Content } from "./Content.js";
import { Header } from "./Header.js";
import { BigLinks } from "./BigLinks.js";
import { Preview } from "./Preview.js";
import { Filters } from "./Filters.js";

export function Homepage({ posts }: { posts: PostsDetails }) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content>
          <BigLinks />
        </Content>
        {Object.entries(posts)
          .sort((a, b) => +(a[1].title > b[1].title))
          .map(([postKey, post]) => (
            <Preview post={post} postKey={postKey} key={postKey} />
          ))}
        <Content>
          <Filters />
        </Content>
      </Wrapper>
    </>
  );
}
