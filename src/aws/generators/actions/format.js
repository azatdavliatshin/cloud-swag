import { exec } from "node:child_process";
import { promisify } from "node:util";

export default async function () {
  console.info("Let me clean up a little bit...");

  const promisifiedExec = promisify(exec);

  try {
    console.info("Installing dependencies...");
    const { stdout, stderr } = await promisifiedExec("npx prettier --write .");

    if (stderr) {
      console.info(stderr);
    } else {
      console.log(stdout);
    }
  } catch (error) {
    console.error(error);
  }
}
