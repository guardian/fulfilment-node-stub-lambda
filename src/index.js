import AWS from 'aws-sdk';
import {loadFromS3} from './config'
import repeat from 'lodash/repeat'

export function handler(event, context, callback) {
  console.log("Initialising.")
  let creds = loadFromS3()
  creds.then((creds)=>{
    console.log(creds)
    console.log(repeat('hello',10))
    callback(null)
  }).catch((error)=>{
    console.error("Failed to get credentials",error)
    callback(error)
  })

}
