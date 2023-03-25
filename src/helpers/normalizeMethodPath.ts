import { NodePlopAPI } from "plop";

export const normalizeMethodName = (plop: NodePlopAPI) => {
  plop.setHelper("normalizeMethodName", (methodName: string) =>
    methodName.split("-").join("")
  );
};
