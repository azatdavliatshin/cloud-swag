import { NodePlopAPI } from "plop";

export const initPartialsForFunctionName = (plop: NodePlopAPI) => {
  plop.setPartial(
    "resolvedFunctionName",
    "{{#if functionName}}{{functionName}}{{else}}{{methodPath}}{{/if}}"
  );

  plop.setPartial(
    "resolvedFunctionNamePascalCase",
    "{{#if functionName}}{{ pascalCase functionName}}{{else}}{{pascalCase methodPath}}{{/if}}"
  );
};
