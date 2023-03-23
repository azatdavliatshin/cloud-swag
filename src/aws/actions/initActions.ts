import { exec } from "node:child_process";
import { promisify } from "node:util";
import { ActionType, AddActionConfig, AddManyActionConfig } from "plop";

const addTSConfigFiles: AddManyActionConfig = {
  type: "addMany",
  destination: `${process.cwd()}`,
  templateFiles: "templates/aws/tsconfigs",
  base: "templates/aws/tsconfigs",
  path: "",
  globOptions: undefined,
};

const addDeploymentConfiguration: AddManyActionConfig = {
  type: "addMany",
  destination: `${process.cwd()}/deployment`,
  templateFiles: "templates/aws/deployment",
  base: "templates/aws/deployment",
  path: "",
  globOptions: undefined,
};

// figure out better naming instead of static
const addStaticFiles: AddManyActionConfig = {
  type: "addMany",
  destination: `${process.cwd()}`,
  templateFiles: "templates/aws/static",
  base: "templates/aws/static",
  path: "",
  globOptions: undefined,
};

const initInfrastructureFiles: AddManyActionConfig = {
  type: "addMany",
  destination: `${process.cwd()}/src/infrastructure`,
  templateFiles: "templates/aws/infrastructure",
  base: "templates/aws/infrastructure",
  path: "",
  globOptions: undefined,
};

const addFunctionsFolder: AddActionConfig = {
  type: "add",
  path: `${process.cwd()}/src/functions/index.ts`,
  template: "// module with functions",
};

const addInversifyConfigFile: AddActionConfig = {
  type: "add",
  path: `${process.cwd()}/src/inversify.config.ts`,
  templateFile: "templates/aws/inversify.config.ts.hbs",
};

const installDeps = async () => {
  const promisifiedExec = promisify(exec);
  try {
    console.info("Installing dependencies...");
    const { stdout, stderr } = await promisifiedExec("npm i");

    if (stderr) {
      return stderr;
    } else {
      return stdout;
    }
  } catch (error) {
    throw error;
  }
};

export const initActions: ActionType[] = [
  addTSConfigFiles,
  addDeploymentConfiguration,
  addStaticFiles,
  initInfrastructureFiles,
  addFunctionsFolder,
  addInversifyConfigFile,
  installDeps,
];
