import { NodePlopAPI } from "plop";

export const initPartialsForFunctionName = (plop: NodePlopAPI) => {
  plop.setPartial(
    "resolvedFunctionName",
    "{{#if functionName}}{{functionName}}{{else}}{{camelCase (normalizeMethodName methodPath)}}Handler{{/if}}"
  );

  plop.setPartial(
    "processorPath",
    "{{camelCase (normalizeMethodName methodPath)}}Processor"
  );
  plop.setPartial(
    "processorName",
    "{{pascalCase (normalizeMethodName methodPath)}}Processor"
  );
  plop.setPartial(
    "processorInterfaceName",
    "I{{pascalCase (normalizeMethodName methodPath)}}Processor"
  );
};
