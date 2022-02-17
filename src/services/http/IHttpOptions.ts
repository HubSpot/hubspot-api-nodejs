export interface IHttpOptions {
  method?: string
  headers?: { [key: string]: string }
  body?: any
  authType?: string
  overlapUrl?: string
  path?: string
  qs?: { [key: string]: any }
}
