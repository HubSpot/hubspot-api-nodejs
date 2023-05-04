import * as http from 'http'
import * as https from 'https'

export interface IConfiguration {
  apiKey?: string
  accessToken?: string
  developerApiKey?: string
  basePath?: string
  defaultHeaders?: { [key: string]: string }
  httpAgent?: http.Agent | https.Agent
}
