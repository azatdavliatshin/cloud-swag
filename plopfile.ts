// import awsGenerator from "./src/aws/generators/generator.js";

import { NodePlopAPI } from "plop";
import { awsGenerator } from "./src/aws/generator";
import { initPartialsForFunctionName } from "./src/partials/functionNames";

export default function (plop: NodePlopAPI) {
  initPartialsForFunctionName(plop);

  plop.setWelcomeMessage(
    "What's up?! It's Cloud SWAG (stands for Simple Web API Generator), what do you want to create?"
  );

  plop.setGenerator("AWS", awsGenerator);
  plop.setGenerator("WIP", {
    description:
      "Don't worry, just a placeholder to show some opportunities :) See ya!",
    prompts: [],
    actions: [],
  });
}
