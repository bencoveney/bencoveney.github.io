import path from "path";
import fs from "fs";
import { PostDetails } from "./loadPosts.js";
import { mkDirP } from "@bencoveney/utils/dist/node.js";

export function includeAsset(
  post: PostDetails,
  outputDir: string,
  src: string
) {
  mkDirP(outputDir, post.route);
  const from = path.join(process.cwd(), post.route, src);
  const to = path.join(outputDir, post.route, src);
  const web = path.posix.join(post.route, src);
  if (fs.existsSync(to)) {
    console.log("Using cached file for:", web);
    return web;
  }
  console.log("Copying:", web);
  fs.copyFileSync(from, to);
  return web;
}
