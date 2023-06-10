import { ISignatureOptions } from './ISignatureOptions'

export class Signature {
  public static readonly MAX_ALLOWED_TIMESTAMP = 300000

  public static isValid({ method = 'POST', signatureVersion = 'v1', ...options }: ISignatureOptions): boolean {
    return false
  }

 

  public static getSignature(method: string, signatureVersion: string, options: ISignatureOptions): string {
    return ''
  }
}
