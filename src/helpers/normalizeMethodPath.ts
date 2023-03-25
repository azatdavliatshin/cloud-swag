import { NodePlopAPI } from "plop";

export const normalizeMethodName = (plop: NodePlopAPI) => {
  plop.setHelper("normalizeMethodName", (methodName: string) => {
    console.log(methodName);

    console.log(methodName.split("-").join(" "));

    return methodName.split("-").join(" ");
  });
};
