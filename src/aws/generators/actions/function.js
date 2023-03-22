export default [
  {
    type: "addMany",
    // handle properly name for method
    destination: `${process.cwd()}/src/functions/{{> resolvedFunctionName}}Handler`,
    templateFiles: "src/aws/templates/functions",
    base: "src/aws/templates/functions",
  },
  {
    type: "append",
    path: `${process.cwd()}/src/functions/index.ts`,
    pattern: "",
    template:
      "export { default as {{> resolvedFunctionName}}Handler } from './{{> resolvedFunctionName}}Handler';",
  },
  {
    type: "add",
    path: `${process.cwd()}/src/infrastructure/interfaces/{{> resolvedFunctionName}}Processor.ts`,
    template: `export interface I{{> resolvedFunctionNamePascalCase}}Processor {}`,
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/inversify.config.ts`,
    pattern: /interfaces go here/gi,
    template:
      "interfaces go here\r\nimport { I{{> resolvedFunctionNamePascalCase}}Processor } from '@infrastructure/interfaces/{{> resolvedFunctionName}}Processor'",
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/infrastructure/types.ts`,
    pattern: "",
    template:
      "export const {{> resolvedFunctionNamePascalCase}}Processor = Symbol.for('{{> resolvedFunctionNamePascalCase}}Processor');",
  },
  {
    type: "add",
    path: `${process.cwd()}/src/processors/{{> resolvedFunctionName}}Processor.ts`,
    templateFile: "src/aws/templates/processors/processor.ts.hbs",
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/inversify.config.ts`,
    pattern: /processors go here/gi,
    template:
      "processors go here\r\nimport { {{> resolvedFunctionNamePascalCase}}Processor } from '@processors/{{> resolvedFunctionName}}Processor'",
  },
  {
    type: "modify",
    path: `${process.cwd()}/src/inversify.config.ts`,
    pattern: /processors definitions go here/gi,
    template:
      "processors definitions go here\r\ncontainer.bind<I{{> resolvedFunctionNamePascalCase}}Processor>(TYPES.{{> resolvedFunctionNamePascalCase}}Processor).to({{> resolvedFunctionNamePascalCase}}Processor)",
  },
];
