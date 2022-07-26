import esbuild from "esbuild";
import process from "process";
import { networkInterfaces } from "os";

try {
  let server = await esbuild.serve(
    {
      servedir: "build",
      onRequest: ({ remoteAddress, method, path, status, timeInMS }) => {
        const host = remoteAddress.split(":")[0];
        console.log(
          `${method} ${status} ${timeInMS}ms http://${host}:${server.port}${path}`
        );
      },
    },
    {
      entryPoints: ["./src/index.tsx"],
      entryNames: "[name]",
      bundle: true,
      outdir: "./build",
      sourcemap: true,
      define: {
        DEBUG: JSON.stringify(true),
        CI: process.env.CI || JSON.stringify(false),
      },
    }
  );

  console.log("Server Started At:");
  Object.entries(networkInterfaces())
    .filter(([_, info]) => {
      const ipv4 = info!.find((ip) => ip.family === "IPv4");
      return !!ipv4;
    })
    .forEach(([name, info]) => {
      const ipv4 = info!.find((ip) => ip.family === "IPv4");
      const alias = ipv4!.internal ? "Local" : name;
      console.log(`${alias}: http://${ipv4!.address}:${server.port}`);
    });
  console.log("-------------");
} catch (e) {
  console.log(e);
  process.exit(1);
}