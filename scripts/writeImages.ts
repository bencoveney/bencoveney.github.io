import path from "path";
import fs from "fs";
import { Page } from "./loadPages.js";
import { mkDirP } from "./mkdirp.js";

export function writeDownload(page: Page, outputDir: string, src: string) {
  mkDirP(outputDir, page.route);
  const from = path.join(process.cwd(), page.route, src);
  const to = path.join(outputDir, page.route, src);
  const web = path.posix.join(page.route, src);
  console.log("Copying:", web);
  fs.copyFileSync(from, to);
  return web;
}
