# AWS

This generator creates and extends project for [Serverless](https://www.serverless.com/framework) framework. 

Besides required serverless.ts file (where AWS service is described using CloudFormation template writte in TS) following folders are created

## deployment

This folder contains information of stages description. ```deployment/stage.ts``` file is deliberately left empty: you should provide sensitive data in order to package and deploy CloudFormation stack to AWS.

## src

As usual the main folder of the project where almost all implementation is placed.

The most interesting part here is architecture of the solution. AWS function itself represents ```controllers``` layer, i.e. serves only for request acceptence and returning responses, based on the results from ```processors```. 

```processors``` represents business logic layer, each processor should be responsible one specific ```domain``` (e.g. "user", "account" and etc), that's why generated function might or not might have ```injected processor```. 

All dependencies are defined using [Inversify IoC container](https://inversify.io/). Correponded interfaces and DI tokens are listed in ```infrastructure``` directory. Using Inversify IoC container allows to use DI pattern and implement the solution based on SOLID pronciples.

There is also entity called ```providers```. Providers are injectable services that should be used as wrappers around "physical" APIs, like HTTP, S3 bucket operations, convertors (from JSON to CSV for instance) and etc.