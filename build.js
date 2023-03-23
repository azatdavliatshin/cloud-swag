import * as esbuild from "esbuild";
import copyStaticFiles from "esbuild-copy-static-files";
import { clean } from "esbuild-plugin-clean";

await esbuild.build({
  entryPoints: ["plopfile.ts", "index.ts"],
  bundle: true,
  platform: "node",
  outdir: "dist",
  format: "esm",
  packages: "external",
  minify: true,
  plugins: [
    clean({
      patterns: ["./dist/*"],
    }),
    copyStaticFiles({
      src: "./src/aws/templates",
      dest: "./dist/templates/aws",
      dereference: true,
      errorOnExist: false,
      preserveTimestamps: true,
      recursive: true,
    }),
  ],
});
