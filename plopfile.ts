// import awsGenerator from "./src/aws/generators/generator.js";

import { NodePlopAPI } from "plop";
import { awsGenerator } from "./src/aws/generator";
import { normalizeMethodName } from "./src/helpers/normalizeMethodPath";
import { initPartialsForFunctionName } from "./src/partials/functionNames";
import provider from "./src/utils/processCloudSwagFile";

export default function (plop: NodePlopAPI) {
  initPartialsForFunctionName(plop);
  normalizeMethodName(plop);

  if (!provider) {
    plop.setWelcomeMessage(
      "What's up?! It's Cloud SWAG (stands for Simple Web API Generator), what do you want to create?"
    );

    plop.setGenerator("AWS", awsGenerator(false));
    plop.setGenerator("WIP", {
      description:
        "Don't worry, just a placeholder to show some opportunities :) See ya!",
      prompts: [],
      actions: [],
    });
  } else {
    switch (provider) {
      case "aws":
        console.info(
          "Hey, wellcome back! What do you want to add to your AWS service?"
        );
        plop.setGenerator("AWS", awsGenerator(true));
        break;
    }
  }
}
