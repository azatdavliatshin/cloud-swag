import { exec } from "node:child_process";
import { promisify } from "node:util";
import { CustomActionFunction } from "plop";

export const prettify: CustomActionFunction = async () => {
  console.info("Let me clean up a little bit...");

  const promisifiedExec = promisify(exec);

  try {
    const { stdout, stderr } = await promisifiedExec("npx prettier --write .");

    if (stderr) {
      return stderr;
    } else {
      return stdout;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
