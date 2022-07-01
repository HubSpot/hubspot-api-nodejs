export interface ISignatureOptions {
    signature: string,
    clientSecret: string,
    requestBody: string,
    signatureVersion?: string,
    url?: string,
    method?: string,
    timestamp?: number,
}
