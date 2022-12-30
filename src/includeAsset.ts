import path from "path";
import fs from "fs";
import { Post } from "./loadPosts.js";
import { mkDirP } from "@bencoveney/utils/dist/node.js";

export function includeAsset(post: Post, outputDir: string, src: string) {
  mkDirP(outputDir, post.route);
  const from = path.join(process.cwd(), post.route, src);
  const to = path.join(outputDir, post.route, src);
  const web = path.posix.join(post.route, src);
  console.log("Copying:", web);
  fs.copyFileSync(from, to);
  return web;
}
