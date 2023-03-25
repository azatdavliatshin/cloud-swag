export const addFunctionActions = [
  {
    type: "addMany",
    destination: `${process.cwd()}/src/functions/{{> resolvedFunctionName}}`,
    templateFiles: "templates/aws/functions",
    base: "templates/aws/functions",
  },
  {
    type: "append",
    path: `${process.cwd()}/src/functions/index.ts`,
    pattern: "",
    template:
      "export { default as {{> resolvedFunctionName}} } from './{{> resolvedFunctionName}}';",
  },
];

export const addProcessorActions = [
  {
    type: "add",
    path: `${process.cwd()}/src/infrastructure/interfaces/{{> processorPath}}.ts`,
    template: `export interface {{> processorInterfaceName}} {}`,
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/inversify.config.ts`,
    pattern: /interfaces go here/gi,
    template:
      "interfaces go here\r\nimport { {{> processorInterfaceName}} } from '@infrastructure/interfaces/{{> processorPath}}'",
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/infrastructure/types.ts`,
    pattern: "",
    template:
      "export const {{> processorName}} = Symbol.for('{{> processorName}}');",
  },
  {
    type: "add",
    path: `${process.cwd()}/src/processors/{{> processorPath}}.ts`,
    templateFile: "templates/aws/processors/processor.ts.hbs",
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/inversify.config.ts`,
    pattern: /processors go here/gi,
    template:
      "processors go here\r\nimport { {{> processorName}} } from '@processors/{{> processorPath}}'",
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/inversify.config.ts`,
    pattern: /processors definitions go here/gi,
    template:
      "processors definitions go here\r\ncontainer.bind<{{> processorInterfaceName}}>(TYPES.{{> processorName}}).to({{> processorName}})",
  },
];
