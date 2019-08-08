#!/usr/bin/env node
const lambdaLocal = require("lambda-local")
const path = require("path")
const event = require("./event")

lambdaLocal.execute(
{
lambdaPath: path.join(__dirname, "src", "hello.js"),
event: event
}
)

console.log("hello")
