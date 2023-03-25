import { ActionType, PlopGeneratorConfig } from "plop";
import { isValidFunctionName } from "../utils/isValidFunctionName";
import { prettify } from "../utils/prettifyAction";

import { initActions } from "./actions/initActions";
import functionActions from "./actions/function";

export const awsGenerator: (
  isCloudSwagInitialized: boolean
) => PlopGeneratorConfig = (isCloudSwagInitialized) => ({
  description:
    "AWS resources: Cloud Fromation template (Serverless) and lambdas",
  prompts: [
    {
      type: "input",
      name: "serviceName",
      message: "Since it's a first time, you have to name your service:",
      validate(value: string) {
        if (value.length) {
          return true;
        }
        return "This input shoulnd't be empty, c'mon!";
      },
      when: !isCloudSwagInitialized,
    },
    {
      type: "list",
      name: "method",
      message: "HTTP method?",
      choices: ["get"],
    },
    {
      type: "input",
      name: "methodPath",
      message:
        "Method path? (It's URI for you resource, like, 'api/v1/{your_input}')",
      validate(value: string) {
        if (value.length) {
          return true;
        }
        return "This input shoulnd't be empty, c'mon!";
      },
    },
    {
      type: "input",
      name: "functionName",
      message:
        "It's not reqired, just an option to name your function differently",
      validate(value: string) {
        if (value.length) {
          if (!isValidFunctionName(value)) {
            return "Name function name properly, as in JS!";
          }
          return true;
        }
        return true;
      },
    },
  ],
  actions() {
    const actions: ActionType[] = [];

    if (!isCloudSwagInitialized) {
      actions.push(...initActions);
    }

    actions.push(...functionActions);
    actions.push(prettify);

    actions.push("It's done! Happy coding with AWS :)");
    return actions;
  },
});
