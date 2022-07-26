import React from "react";

export function Homepage() {
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

        <div className="content">
          <h2>Projects</h2>

          <h3>Barrelsby</h3>
          <p>
            Node.js command line utility to automatically generates index.ts
            files for typescript codebases.
          </p>
          <p>
            <a href="https://www.npmjs.com/package/barrelsby">
              <i className="mdi mdi-package mdi-18px"></i> View on NPM
            </a>
            <a href="https://github.com/bencoveney/barrelsby">
              <i className="mdi mdi-link mdi-18px"></i> View project
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-language-typescript mdi-18px"></i>
              <span className="tag">TypeScript</span>
            </li>
            <li>
              <i className="mdi mdi-server-network mdi-18px"></i>
              <span className="tag">Continuous Integration</span>
            </li>
            <li>
              <i className="mdi mdi-test-tube mdi-18px"></i>
              <span className="tag">Unit Testing</span>
            </li>
            <li>
              <i className="mdi mdi-npm mdi-18px"></i>
              <span className="tag">NPM</span>
            </li>
          </ul>

          <hr />

          <h3>CSGO Rankings Graph</h3>
          <p>
            Charts HLTV rankings of professional teams in the game
            Counter-Strike: Global Offensive.
          </p>
          <p>
            <a href="https://bencoveney.github.io/CsgoRankingsGraph/">
              <i className="mdi mdi-web mdi-18px"></i> View website
            </a>
            <a href="https://github.com/bencoveney/CsgoRankingsGraph">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-language-typescript mdi-18px"></i>
              <span className="tag">TypeScript</span>
            </li>
            <li>
              <i className="mdi mdi-svg mdi-18px"></i>
              <span className="tag">SVG</span>
            </li>
            <li>
              <i className="mdi mdi-chart-line mdi-18px"></i>
              <span className="tag">Data Visualization</span>
            </li>
            <li>
              <i className="mdi mdi-search-web mdi-18px"></i>
              <span className="tag">Website Scraping</span>
            </li>
          </ul>

          <hr />

          <h3>DatabaseObjects</h3>
          <p>
            Library of utilities and classes for inspecting database schemas.
          </p>
          <p>
            <a href="https://www.nuget.org/packages/DatabaseObjects/">
              <i className="mdi mdi-package mdi-18px"></i> View on Nuget
            </a>
            <a href="https://github.com/bencoveney/DatabaseObjects">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-language-csharp mdi-18px"></i>
              <span className="tag">C#</span>
            </li>
            <li>
              <i className="mdi mdi-database mdi-18px"></i>
              <span className="tag">SQL</span>
            </li>
            <li>
              <i className="mdi mdi-package mdi-18px"></i>
              <span className="tag">Nuget</span>
            </li>
            <li>
              <i className="mdi mdi-test-tube mdi-18px"></i>
              <span className="tag">Unit Testing</span>
            </li>
          </ul>

          <hr />

          <h3>Milligrid</h3>
          <p>
            Responsive CSS grid system built using flexbox and based on{" "}
            <a href="https://milligram.github.io/">Milligram</a>.
          </p>
          <p>
            <a href="http://bencoveney.github.io/Milligrid/">
              <i className="mdi mdi-web mdi-18px"></i> View website
            </a>
            <a href="https://www.npmjs.com/package/milligrid">
              <i className="mdi mdi-package mdi-18px"></i> View on NPM
            </a>
            <a href="https://github.com/bencoveney/Milligrid">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-sass mdi-18px"></i>
              <span className="tag">Sass</span>
            </li>
            <li>
              <i className="mdi mdi-language-css3 mdi-18px"></i>
              <span className="tag">CSS</span>
            </li>
            <li>
              <i className="mdi mdi-server-network mdi-18px"></i>
              <span className="tag">Continuous Integration</span>
            </li>
            <li>
              <i className="mdi mdi-npm mdi-18px"></i>
              <span className="tag">NPM</span>
            </li>
          </ul>

          <hr />

          <h3>Quadrilactic</h3>
          <p>
            Browser-based game about a square jumping and bouncing through
            space.
          </p>
          <p>
            <a href="https://bencoveney.itch.io/quadrilactic">
              <i className="mdi mdi-gamepad-variant mdi-18px"></i> Play on
              Itch.io
            </a>
            <a href="https://github.com/bencoveney/Quadrilactic">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-brush mdi-18px"></i>
              <span className="tag">HTML5 Canvas</span>
            </li>
            <li>
              <i className="mdi mdi-language-typescript mdi-18px"></i>
              <span className="tag">TypeScript</span>
            </li>
          </ul>

          <hr />

          <h3>Dots</h3>
          <p>Animated HTML5 canvas effect used on this page.</p>
          <p>
            <a href="https://github.com/bencoveney/dots">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-brush mdi-18px"></i>
              <span className="tag">HTML5 Canvas</span>
            </li>
            <li>
              <i className="mdi mdi-language-javascript mdi-18px"></i>
              <span className="tag">JavaScript</span>
            </li>
          </ul>

          <hr />

          <h3>TSFluff</h3>
          <p>
            Joke TSLint rules that make TypeScript programming a painful
            experience.
          </p>
          <p>
            <a href="https://github.com/bencoveney/TSFluff">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-language-typescript mdi-18px"></i>
              <span className="tag">TypeScript</span>
            </li>
            <li>
              <i className="mdi mdi-desktop-classic mdi-18px"></i>
              <span className="tag">Programming Languages</span>
            </li>
          </ul>

          <hr />

          <h3>BMProg</h3>
          <p>
            Bitmap based programming "language" which uses pixels of images as
            instructions and outputs gif files showing execution.
          </p>
          <p>
            <a href="https://github.com/bencoveney/BMProg">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-language-csharp mdi-18px"></i>
              <span className="tag">C#</span>
            </li>
            <li>
              <i className="mdi mdi-image mdi-18px"></i>
              <span className="tag">Image Processing</span>
            </li>
            <li>
              <i className="mdi mdi-desktop-classic mdi-18px"></i>
              <span className="tag">Programming Languages</span>
            </li>
          </ul>

          <hr />

          <h3>BFInterpreter</h3>
          <p>Interpreter for the Brainf*ck esoteric programming language.</p>
          <p>
            <a href="https://github.com/bencoveney/BFInterpreter">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-language-csharp mdi-18px"></i>
              <span className="tag">C#</span>
            </li>
            <li>
              <i className="mdi mdi-desktop-classic mdi-18px"></i>
              <span className="tag">Programming Languages</span>
            </li>
          </ul>

          <hr />

          <h3>ChromosomeLibrary</h3>
          <p>
            Provides bit-string crossover and mutation functionality for use in
            genetic algorithm projects.
          </p>
          <p>
            <a href="https://github.com/bencoveney/ChromosomeLibrary">
              <i className="mdi mdi-github-circle mdi-18px"></i> View on Github
            </a>
          </p>
          <ul className="technologies">
            <li>
              <i className="mdi mdi-language-csharp mdi-18px"></i>
              <span className="tag">C#</span>
            </li>
            <li>
              <i className="mdi mdi-dna mdi-18px"></i>
              <span className="tag">Genetic Algorithms</span>
            </li>
          </ul>
        </div>
      </div>
      <canvas id="target"></canvas>
    </>
  );
}
