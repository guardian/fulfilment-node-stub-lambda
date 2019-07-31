# fulfilment-node-stub-lambda

## TODO

- Make this easily deployable in teamcity/riffraff.
- CODE/PROD seperation
- Tests

## Quick Start!

0. `nvm install && nvm use`
1. `yarn`
2. `yarn compile && yarn local`
3. fork this repo

## package.json 

This is responsible for building the lambda, this is a standard npm style package.json. We'll build it with [Yarn](https://yarnpkg.com/en/) to ensure versions of dependencies don't change between releases without knowing. 

### nvm

The latest node runtime available in AWS for lambdas is 10.15. The `.nvmrc` file will keep you using this when developing.

### rollup

To run our lambda, we need all the code, including any dependencies in the same place [Rollup](https://github.com/rollup/rollup) 
The lambda environoment includes the aws-sdk, so rollup is told to consider it as an external dependency. 

### [lambda-local](https://github.com/ashiina/lambda-local)

This provides us with a somewhat standard issue lambda environment, and allows you to run the lambda with the `yarn local` command. Preconfigured to use the membership profile from the normal place. When the file location can be auto-detected, this won't be hardcoded.

### Deployment


### [node-riffraff-artifact](https://www.npmjs.com/package/@guardian/node-riffraff-artifact)

This takes our built lambda, and packages it for deployment with riff-raff. It is responsible for the following settings:
- `isAwsLambda`
- `cloudformation`
- `projectName`
- `riffraffFile`
- `uploadArtefact`

