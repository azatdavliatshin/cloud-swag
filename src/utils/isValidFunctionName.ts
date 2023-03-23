export const isValidFunctionName = (functionName: string) =>
  /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(functionName);
