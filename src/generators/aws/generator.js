import isFileExists from "../../utils/isFileExists.js";
import initActions from "./actions/init.js";
import getActions from "./actions/get.js";

const prompts = [
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
    validate(value) {
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
  },
];

const isCloudSwagInitialized = await isFileExists(".cloudswag");

if (!isCloudSwagInitialized) {
  prompts.unshift({
    type: "input",
    name: "serviceName",
    message:
      "Yo! I noticed that the service hasn't been initialized, what's it's name?",
    validate(value) {
      if (value.length) {
        return true;
      }
      return "This input shoulnd't be empty, c'mon!";
    },
  });
}

export default {
  description: "Generator for AWS resources",
  prompts,
  actions(answers) {
    const actions = [];

    if (!isCloudSwagInitialized) {
      actions.push(...initActions);
    }

    switch (answers.method) {
      case "get":
        actions.push(...getActions);
        break;
    }

    return actions;
  },
};
