function handler(event, context, callback){
    console.log("hello!")
    callback()
}

module.exports = {
  handler: handler
}
