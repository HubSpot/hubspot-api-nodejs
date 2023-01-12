export default interface IConfiguration {
  apiKey?: string
  accessToken?: string
  developerApiKey?: string
  basePath?: string
  defaultHeaders?: { [key: string]: string }
  numberOfApiCallRetries?: number
}
