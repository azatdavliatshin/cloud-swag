import { exec } from "node:child_process";
import { promisify } from "node:util";

const addTSConfigFiles = {
  type: "addMany",
  destination: `${process.cwd()}`,
  templateFiles: "src/aws/templates/tsconfigs",
  base: "src/aws/templates/tsconfigs",
};

const addDeploymentConfiguration = {
  type: "addMany",
  destination: `${process.cwd()}/deployment`,
  templateFiles: "src/aws/templates/deployment",
  base: "src/aws/templates/deployment",
};

// figure out better naming instead of static
const addStaticFiles = {
  type: "addMany",
  destination: `${process.cwd()}`,
  templateFiles: "src/aws/templates/static",
  base: "src/aws/templates/static",
};

const initInfrastructureFiles = {
  type: "addMany",
  destination: `${process.cwd()}/src/infrastructure`,
  templateFiles: "src/aws/templates/infrastructure",
  base: "src/aws/templates/infrastructure",
};

const addFunctionsFolder = {
  type: "add",
  path: `${process.cwd()}/src/functions/index.ts`,
  template: "// module with functions",
};

const addInversifyConfigFile = {
  type: "add",
  path: `${process.cwd()}/src/inversify.config.ts`,
  templateFile: "src/aws/templates/inversify.config.ts.hbs",
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
  initInfrastructureFiles,
  addFunctionsFolder,
  addInversifyConfigFile,
  installDeps,
];
