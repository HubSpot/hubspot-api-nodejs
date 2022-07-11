import crypto = require('crypto')
import * as _ from 'lodash'
import { ISignatureOptions } from './ISignatureOptions'

export class Signature {
  public static isValid({ method = 'POST', signatureVersion = 'v1', ...options }: ISignatureOptions): boolean {
    let sourceString = null
    let hash = null

    switch (signatureVersion) {
      case 'v1':
        sourceString = options.clientSecret + options.requestBody
        hash = crypto
          .createHash('sha256')
          .update(sourceString)
          .digest('hex')
        break
      case 'v2':
        sourceString = options.clientSecret + method + options.url + options.requestBody
        hash = crypto
          .createHash('sha256')
          .update(sourceString)
          .digest('hex')
        break
      case 'v3':
        sourceString = method + options.url + options.requestBody + options.timestamp
        hash = crypto
          .createHmac('sha256', options.clientSecret)
          .update(sourceString)
          .digest('base64')
        break
      default:
        throw new Error(`Not supported signature version: ${signatureVersion}`)
        break
    }

    return _.isEqual(options.signature, hash)
  }

  public getV3Signature(): string {
    return 'f'
  }
}
