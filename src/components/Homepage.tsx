import React, { Fragment } from "react";
import { Posts } from "../loadPosts.js";
import { BigLinks } from "./BigLinks.js";
import { Post } from "./Post.js";
import { styles } from "./Homepage.css.js";
import { css } from "../css.js";
import { Separator } from "./Separator.js";
import { Heading1, Heading2, Heading3 } from "./Heading.js";

const { classes } = css(styles);

export function Homepage({ posts }: { posts: Posts }) {
  return (
    <>
      <div className={classes.wrapper}>
        <aside>
          <header></header>
          <nav></nav>
        </aside>

        <div className={classes.content}>
          <Heading1>Ben Coveney</Heading1>
          <span className={classes.tagline}>Software Developer</span>
          <BigLinks />
        </div>

        <div className={classes.content}>
          <Heading2>About</Heading2>

          <Heading3>Work Experience</Heading3>
          <ul className={classes.about}>
            <li>
              Software Developer at Lighthouse Systems. Responsibilities include
              working on HTML5 UI overhaul project and serving as Scrum Master.
            </li>
          </ul>

          <Heading3>Education</Heading3>
          <ul className={classes.about}>
            <li>
              BSC with first-class honours from the University of Hull.
              Dissertation based on using genetic algorithms to optimize finite
              state machines for video game artificial intelligence.
            </li>
            <li>
              A Levels in Maths, Physics and Applied ICT, AS Level in Further
              Maths.
            </li>
          </ul>

          <Heading3>Interests</Heading3>
          <ul className={classes.about}>
            <li>
              Software development, open source and new web technologies. Loves
              working with C#, TypeScript and CSS, and working on documentation,
              code quality and data visualization projects.
            </li>
            <li>
              Video games including clan server hosting and traveling to
              spectate at tournaments abroad.
            </li>
          </ul>
        </div>

        <div className={classes.content}>
          <Heading2>Posts</Heading2>
          {Object.entries(posts).map(([slug, post]) => (
            <Fragment key={slug}>
              <Post post={post} />
              <Separator />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
