import awsGenerator from "./src/generators/aws/generator.js";

export default function (plop) {
  plop.setWelcomeMessage(
    "What's up?! It's cloud-swag, what do you want to create?"
  );
  plop.setGenerator("AWS", awsGenerator);
  plop.setGenerator("WIP", {
    description:
      "Don't worry, just a placeholder to show some opportunities :) See ya!",
    prompts: [],
    actions: [],
  });
}
