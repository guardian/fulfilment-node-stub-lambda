import AWS from 'aws-sdk';
import {loadFromS3} from './config'

export function handler(event, context, callback) {
  console.log("Initialising.")
  let creds = loadFromS3()
  console.log(process.env)
  creds.then((creds)=>{
    console.log(creds)
    callback(null)
  }).catch((error)=>{
    console.error("Failed to get credentials",error)
    callback(error)
  })

}
