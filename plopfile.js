import awsGenerator from "./src/aws/generators/generator.js";

export default function (plop) {
  plop.setWelcomeMessage(
    "What's up?! It's cloud-swag, what do you want to create?"
  );

  plop.setPartial(
    "resolvedFunctionName",
    "{{#if functionName}}{{functionName}}{{else}}{{methodPath}}{{/if}}"
  );

  plop.setPartial(
    "resolvedFunctionNamePascalCase",
    "{{#if functionName}}{{ pascalCase functionName}}{{else}}{{pascalCase methodPath}}{{/if}}"
  );

  plop.setGenerator("AWS", awsGenerator);
  plop.setGenerator("WIP", {
    description:
      "Don't worry, just a placeholder to show some opportunities :) See ya!",
    prompts: [],
    actions: [],
  });
}
