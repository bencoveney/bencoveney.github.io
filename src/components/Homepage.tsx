import React, { Fragment } from "react";
import { TransformImage } from "react-markdown/lib/ast-to-react.js";
import { Page, Pages } from "../../scripts/loadPages.js";
import { Post } from "./Post.js";
import { Project } from "./Project.js";

export function Homepage({pages, transformImage}: {pages: Pages, transformImage?: (page: Page) => TransformImage}) {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <h1>Ben Coveney</h1>
          <span className="tagline">Software Developer</span>
          <ul className="links">
            <li>
              <a href="https://github.com/bencoveney">
                <i className="mdi mdi-github-circle mdi-48px"></i>
                <span className="name">Github</span>
              </a>
            </li>
            <li>
              <a href="https://uk.linkedin.com/in/ben-coveney-34115486">
                <i className="mdi mdi-linkedin mdi-48px"></i>
                <span className="name">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.bencoveney.com">
                <i className="mdi mdi-book-open-page-variant mdi-48px"></i>
                <span className="name">Blog</span>
              </a>
            </li>
            <li>
              <a href="https://steamcommunity.com/id/bencoveney">
                <i className="mdi mdi-steam mdi-48px"></i>
                <span className="name">Steam</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="content">
          <h2>About</h2>

          <h3>Work Experience</h3>
          <ul className="about">
            <li>
              Software Developer at Lighthouse Systems. Responsibilities include
              working on HTML5 UI overhaul project and serving as Scrum Master.
            </li>
          </ul>

          <h3>Education</h3>
          <ul className="about">
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

          <h3>Interests</h3>
          <ul className="about">
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

        <div className="content projects">
          <h2>Projects</h2>
          {
            Object
              .entries(pages.projects)
              .map(([slug, project]) => <Fragment key={slug}>
                <Project project={project} transformImage={transformImage?.(project)} />
                <hr />
              </Fragment>)
          }
        </div>

        <div className="content posts">
          <h2>Posts</h2>
          {
            Object
              .entries(pages.posts)
              .map(([slug, post]) => <Fragment key={slug}>
                <Post post={post} transformImage={transformImage?.(post)} />
                <hr />
              </Fragment>)
          }
        </div>
      </div>
      <canvas id="target"></canvas>
    </>
  );
}
