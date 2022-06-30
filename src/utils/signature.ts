import crypto = require('crypto')
import * as _ from 'lodash'

export class Signature {
    public isValid(
        signature: string,
        clientSecret: string,
        requestBody: string,
        signatureVersion = 'v1',
        webhooksUrl?: string,
        webhooksMethod = 'POST',
      ): boolean {
        let sourceString = null

        switch (signature) {
            case 'v1':
                sourceString = clientSecret + requestBody
                break;
            case 'v2':
                sourceString = clientSecret + webhooksMethod + webhooksUrl + requestBody
                break;
            case 'v3':
                sourceString = clientSecret + webhooksMethod + webhooksUrl + requestBody
                break;
            default:
                console.log("No such day exists!"); // throw error
                break;
        }
      
        const hash = crypto
          .createHash('sha256')
          .update(sourceString)
          .digest('hex')
      
        return _.isEqual(signature, hash)
    }
}      
