import crypto = require('crypto')
import * as _ from 'lodash'
import { ISignatureOptions } from './ISignatureOptions';

export class Signature {
    public isValid(
        options: ISignatureOptions = {method: 'POST'}
      ): boolean {
        let sourceString = null

        switch (signatureVersion) {
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
                throw new Error(`Not supported signature version: ${signatureVersion}`)
                break;
        }
      
        const hash = crypto
          .createHash('sha256')
          .update(sourceString)
          .digest('hex')
      
        return _.isEqual(signature, hash)
    }

    public getV3Signature(): string
    {
        return 'f'
    }
}      
