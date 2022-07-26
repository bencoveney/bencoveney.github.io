import esbuild from "esbuild";
import process from "process";

esbuild
  .build({
    entryPoints: ["./src/index.tsx", "./styles/index.css"],
    entryNames: "[name]",
    bundle: true,
    outdir: "./build",
    sourcemap: true,
    minify: true,
    define: {
      DEBUG: JSON.stringify(false),
      CI: process.env.CI || JSON.stringify(false),
    },
  })
  .catch(() => process.exit(1));
