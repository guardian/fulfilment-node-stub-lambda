#!/usr/bin/env node
const lambdaLocal = require("lambda-local")
const path = require("path")
const event = require("./event")
//"run": "lambda-local -l src/index.js -e event.json -h handler -P ~/.aws/credentials -p $AWS_PROFILE -r eu-west-1 -t 10 -E {\\\"Stage\\\":\\\"CODE\\\"}",

lambdaLocal.execute(
{
lambdaPath: path.join(__dirname, "src", "hello.js"),
event: event
}
)

console.log("hello")
