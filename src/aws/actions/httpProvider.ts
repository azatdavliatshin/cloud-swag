import { AddActionConfig } from "plop";

const addInterfaceForHttpProvider: AddActionConfig = {
  type: "add",
  path: `${process.cwd()}/src/infrastructure/interfaces/httpProvider.ts`,
  template: "export interface IHttpProvider {}",
};

const addProvider: AddActionConfig = {
  type: "add",
  path: `${process.cwd()}/src/providers/httpProvider.ts`,
  templateFile: "templates/aws/httpProvider.ts.hbs",
};

export const httpProviderActions = [addInterfaceForHttpProvider, addProvider];
