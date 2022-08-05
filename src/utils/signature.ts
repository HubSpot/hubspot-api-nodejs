import crypto = require('crypto')
import { ISignatureOptions } from './ISignatureOptions'

export class Signature {
  public static readonly MAX_ALLOWED_TIMESTAMP = 300000

  public static isValid({ method = 'POST', signatureVersion = 'v1', ...options }: ISignatureOptions): boolean {
    const hash = Signature.getSignature(method, signatureVersion, options)
    if (signatureVersion === 'v3') {
      const currentTime = Date.now()
      if (options.timestamp === undefined || currentTime - options.timestamp > Signature.MAX_ALLOWED_TIMESTAMP) {
        throw new Error('Timestamp is invalid, reject request')
      }
    }

    return options.signature === hash
  }

  public static getSignature(method: string, signatureVersion: string, options: ISignatureOptions): string {
    let sourceString = null
    switch (signatureVersion) {
      case 'v1':
        sourceString = options.clientSecret + options.requestBody
        return crypto
          .createHash('sha256')
          .update(sourceString)
          .digest('hex')
      case 'v2':
        sourceString = options.clientSecret + method + options.url + options.requestBody
        return crypto
          .createHash('sha256')
          .update(sourceString)
          .digest('hex')
      case 'v3':
        sourceString = method + options.url + options.requestBody + options.timestamp
        return crypto
          .createHmac('sha256', options.clientSecret)
          .update(sourceString)
          .digest('base64')
      default:
        throw new Error(`Not supported signature version: ${signatureVersion}`)
    }
  }
}
