import { readFile } from "node:fs/promises";
import { join } from "node:path";

let provider: string | null = "test";

try {
  const stringified = await readFile(join(process.cwd(), ".cloudswag"), {
    encoding: "utf-8",
  });
  provider = stringified.split("=")[1];
} catch (error) {
  // doesn't exist
  provider = null;
}

export default provider;
