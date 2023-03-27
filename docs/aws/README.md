# AWS

This generator creates and extends projects for [Serverless](https://www.serverless.com/framework) framework. 

Besides, the required serverless.ts file (where AWS service is described using CloudFormation template written in TS) following folders are created

## deployment

This folder contains information on stages description. ```deployment/stage.ts``` file is deliberately left empty: you should provide sensitive data to package and deploy the CloudFormation stack to AWS.

## src

As usual, the main folder of the project is where almost all implementation is placed.

The most interesting part here is the architecture of the solution. AWS function itself represents the ```controllers``` layer, i.e. serves only for request acceptance and returning responses, based on the results from ```processors```. 

```processors``` represents the business logic layer, each processor should be responsible for one specific ```domain``` (e.g. "user", "account" etc), that's why generated function might or not might have ```injected processor```. 

All dependencies are defined using [Inversify IoC container](https://inversify.io/). Correspondent interfaces and DI tokens are listed in the ```infrastructure``` directory. Using Inversify IoC container allows to use of DI pattern and implement the solution based on SOLID principles.

There is also an entity called ```providers```. Providers are injectable services that should be used as wrappers around "physical" APIs, like HTTP, S3 bucket operations, convertors (from JSON to CSV for instance), etc.
