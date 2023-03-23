import { access, constants } from "node:fs/promises";
import { join } from "node:path";

export const isFileExists = async (filename: string) => {
  const pathToFile = join(process.cwd(), filename);

  try {
    await access(pathToFile, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};
