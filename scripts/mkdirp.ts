import path from "path";
import fs from "fs";

export function mkDirP(parentDir: string, childDir: string) {
  const resolvedDir = path.resolve(parentDir, childDir);
  if (!fs.existsSync(resolvedDir)) {
    fs.mkdirSync(resolvedDir, { recursive: true });
  }
  return resolvedDir;
}