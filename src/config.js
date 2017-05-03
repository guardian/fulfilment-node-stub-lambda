import AWS from 'aws-sdk'

let s3 = new AWS.S3()
export  function loadFromS3() {
   return  new Promise((resolve, reject) =>{
     s3.getObject({ Bucket: "fulfilment-private", Key: "test.json" }, (err, creds) => {
         if(err){
             console.error("failed to retreive credentials", err)
             reject(err)
             return
         }
         let string = creds.Body.toString()
         let j = JSON.parse(string)
         resolve(j)
    })
}) 
}