#!/usr/bin/env node
import minimist from "minimist";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Plop, run } from "plop";

import isFileExists from "./src/utils/isFileExists.js";

const isPackageJsonExists = await isFileExists("package.json");
const isCloudSwagInitialized = await isFileExists(".cloudswag");

if (!isCloudSwagInitialized && isPackageJsonExists) {
  console.info("The project repository is not clear!");
} else {
  const args = process.argv.slice(2);
  const argv = minimist(args);
  const __dirname = dirname(fileURLToPath(import.meta.url));

  Plop.prepare(
    {
      cwd: argv.cwd,
      configPath: join(__dirname, "plopfile.js"),
      preload: argv.preload || [],
      completion: argv.completion,
    },
    (env) =>
      Plop.execute(env, (env) => {
        const options = {
          ...env,
          dest: process.cwd(), // this will make the destination path to be based on the cwd when calling the wrapper
        };
        return run(options, undefined, true);
      })
  );
}
