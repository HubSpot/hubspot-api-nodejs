import { ISignatureOptions } from './ISignatureOptions'
import { subtle } from 'uncrypto'
import { TextEncoder, TextDecoder } from 'web-encoding'
import btoa from 'btoa'
export class Signature {
  public static readonly MAX_ALLOWED_TIMESTAMP = 300000

  public static async isValid({ method = 'POST', signatureVersion = 'v1', ...options }: ISignatureOptions): Promise<boolean> {
    const hash = await Signature.getSignature(method, signatureVersion, options)
    if (signatureVersion === 'v3') {
      const currentTime = Date.now()
      if (options.timestamp === undefined || currentTime - options.timestamp > Signature.MAX_ALLOWED_TIMESTAMP) {
        throw new Error('Timestamp is invalid, reject request')
      }
    }

    return options.signature === hash
  }

  private static async createHash(sourceString: string): Promise<string> {
    const sourceStringUint8 = new TextEncoder().encode(sourceString)
    const digest = await subtle.digest({name: 'SHA-256'}, sourceStringUint8)
    const digestUint8 = Array.from(new Uint8Array(digest))
    return digestUint8.map((b) => b.toString(16).padStart(2, "0")).join("")
  }

  private static getUtf8Bytes(str: string) {
    return new Uint8Array(
      [...(unescape(encodeURIComponent(str)))].map(c => c.charCodeAt(0))
    )
  }

  private static async createHmac(sourceString: string, clientSecret: string): Promise<string> {
    const algorithm = { name: "HMAC", hash: "SHA-256" }
    const encoder = new TextEncoder()
    const key = await subtle.importKey("raw", encoder.encode(clientSecret), algorithm, false, ["sign"])
    const signature = await subtle.sign('HMAC', key, this.getUtf8Bytes(sourceString))
    return btoa(String.fromCharCode(...(new Uint8Array(signature))))
  }

  public static async getSignature(method: string, signatureVersion: string, options: ISignatureOptions): Promise<string> {
    let sourceString = null
    switch (signatureVersion) {
      case 'v1':
        sourceString = options.clientSecret + options.requestBody
        return this.createHash(sourceString)
      case 'v2':
        sourceString = options.clientSecret + method + options.url + options.requestBody
        return this.createHash(sourceString)
      case 'v3':
        sourceString = method + options.url + options.requestBody + options.timestamp
        return this.createHmac(sourceString, options.clientSecret)
      default:
        throw new Error(`Not supported signature version: ${signatureVersion}`)
    }
  }
}
