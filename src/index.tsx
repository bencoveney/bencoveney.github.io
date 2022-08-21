import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Homepage } from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTitle } from "./hooks/usePageTitle";

const reactRoot = document.getElementById("react-root");
if (!reactRoot) {
  throw new Error("Could not find react root");
}

function HomepageWrapper() {
  useTitle("Ben Coveney");
  return <Homepage pages={(window as any).pages} />;
}

ReactDOM.hydrateRoot(
  reactRoot,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomepageWrapper />} />
    </Routes>
  </BrowserRouter>
);

const getLineColor = (opacity: number) => `rgba(100,100,100,${opacity})`;

const createLine = (
  context: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opacity: number
) => {
  context.strokeStyle = getLineColor(opacity);
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
};

const dotRadius = 3;

const createDot = (context: CanvasRenderingContext2D, dot: Dot) => {
  context.fillStyle = getLineColor(1);
  context.beginPath();
  context.arc(dot.x, dot.y, dotRadius, 0, 2 * Math.PI, false);
  context.fill();
};

const numberOfDots = 100;
const dotSpeed = 0.1;
const getDotSpeed = () => Math.random() * dotSpeed * 2 - dotSpeed;

type Point = {
  x: number,
  y: number,
}

type Link = {
  dot1: Dot,
  dot2: Dot,
  weight: number,
};

type Dot = Point & {
  xSpeed: number,
  ySpeed: number,
  links: Link[],
};

export const create = (selector: string) => {
  const canvas = document.querySelector<HTMLCanvasElement>(selector)!;

  // Get dimensions and keep them up to date.
  let width: number;
  let height: number;
  const getDimensions = () => {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.setAttribute("width", width.toString());
    canvas.setAttribute("height", height.toString());
  };
  getDimensions();
  window.onresize = getDimensions;

  // Create dots.
  const dots = Array(numberOfDots)
    .fill(undefined)
    .map<Dot>(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      xSpeed: getDotSpeed(),
      ySpeed: getDotSpeed(),
      links: [],
    }));

  // Create links between all elements.
  dots.forEach((current, index, all) => {
    all
      .slice(index + 1)
      .map<Link>((other) => ({
        dot1: current,
        dot2: other,
        weight: 0,
      }))
      .forEach((link) => {
        link.dot1.links.push(link);
        link.dot2.links.push(link);
      });
  });

  const context = canvas.getContext("2d")!;

  const tick = (oldTime: number) => {
    window.requestAnimationFrame(() => {
      context.clearRect(0, 0, width, height);
      const newTime = Date.now();
      const deltaTime = newTime - oldTime;
      updateDots(dots, width, height, deltaTime, context);
      updateLinks(dots, width, height, deltaTime, context);
      tick(newTime);
    });
  };
  tick(Date.now());
};

const updateCoordinate = (current: number, delta: number, max: number) => {
  return (current + delta + max) % max;
};
const updateDots = (dots: Dot[], width: number, height: number, deltaTime: number, context: CanvasRenderingContext2D) => {
  dots.forEach((dot) => {
    dot.x = updateCoordinate(dot.x, dot.xSpeed * deltaTime, width);
    dot.y = updateCoordinate(dot.y, dot.ySpeed * deltaTime, height);
    createDot(context, dot);
  });
};

const getDifference = (a: number, b: number) => Math.min(Math.abs(a - b), Math.abs(b - a));

const getTorusDistance = (a: number, b: number, wrap: number) => {
  const distance = Math.abs(a - b);
  return distance > wrap / 2 ? wrap - distance : distance;
};

const getDistance = (a: Point, b: Point, width: number, height: number) => {
  const distanceX = getTorusDistance(a.x, b.x, width);
  const distanceY = getTorusDistance(a.y, b.y, height);
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
};

const decay = 0.001;
const linksPerDot = 2;

const updateLinks = (dots: Dot[], width: number, height: number, deltaTime: number, context: CanvasRenderingContext2D) => {
  const closeLinks = dots.reduce<Link[]>((previous, dot) => {
    const sorted = dot.links.sort((a, b) => {
      const distanceA = getDistance(
        dot,
        a.dot1 === dot ? a.dot2 : a.dot1,
        width,
        height
      );
      const distanceB = getDistance(
        dot,
        b.dot1 === dot ? b.dot2 : b.dot1,
        width,
        height
      );
      return distanceA - distanceB;
    });
    return previous.concat(sorted.slice(0, linksPerDot));
  }, []);

  const deltaDecay = decay * deltaTime;
  dots.forEach((dot) => {
    dot.links
      .filter((link) => link.dot1 === dot)
      .forEach((link, index, all) => {
        if (closeLinks.indexOf(link) > 0) {
          link.weight = Math.min(1, link.weight + deltaDecay);
        } else {
          link.weight = Math.max(0, link.weight - deltaDecay);
        }

        if (link.weight > 0) {
          const spansWidth =
            getDifference(link.dot1.x, link.dot2.x) > width / 2;
          const spansHeight =
            getDifference(link.dot1.y, link.dot2.y) > height / 2;

          if (!spansWidth && !spansHeight) {
            createLine(
              context,
              link.dot1.x,
              link.dot1.y,
              link.dot2.x,
              link.dot2.y,
              link.weight
            );
          } else {
            const is1Left = link.dot1.x < link.dot2.x;
            const is1Above = link.dot1.y < link.dot2.y;
            const overlapX = spansWidth ? width : 0;
            const overlapY = spansHeight ? height : 0;
            createLine(
              context,
              link.dot1.x,
              link.dot1.y,
              link.dot2.x + (is1Left ? -overlapX : overlapX),
              link.dot2.y + (is1Above ? -overlapY : overlapY),
              link.weight
            );
            createLine(
              context,
              link.dot1.x + (is1Left ? overlapX : -overlapX),
              link.dot1.y + (is1Above ? overlapY : -overlapY),
              link.dot2.x,
              link.dot2.y,
              link.weight
            );
          }
        }
      });
  });
};

window.onload = () => create("#target");