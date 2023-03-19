import { exec } from "node:child_process";
import { promisify } from "node:util";

const addTSConfigFiles = {
  type: "addMany",
  destination: `${process.cwd()}`,
  templateFiles: "src/templates/tsconfigs",
  base: "src/templates/tsconfigs",
  skipIfExists: process.env.CLOUD_SWAG_DEV,
};

const addDeploymentConfiguration = {
  type: "addMany",
  destination: `${process.cwd()}/deployment`,
  templateFiles: "src/templates/deployment",
  base: "src/templates/deployment",
  skipIfExists: process.env.CLOUD_SWAG_DEV,
};

// figure out better naming instead of static
const addStaticFiles = {
  type: "addMany",
  destination: `${process.cwd()}`,
  templateFiles: "src/templates/static",
  base: "src/templates/static",
  skipIfExists: process.env.CLOUD_SWAG_DEV,
};

const installDeps = async () => {
  const promisifiedExec = promisify(exec);
  try {
    console.info("Installing dependencies...");
    const { stdout, stderr } = await promisifiedExec("npm i");

    if (stderr) {
      console.info(stderr);
    } else {
      console.log(stdout);
    }
  } catch (error) {
    console.error(error);
  }
};

export default [
  addTSConfigFiles,
  addDeploymentConfiguration,
  addStaticFiles,
  installDeps,
];
