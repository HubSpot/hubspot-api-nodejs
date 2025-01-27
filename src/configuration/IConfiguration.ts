import Bottleneck from 'bottleneck'
import * as http from 'http'
import * as https from 'https'

export default interface IConfiguration {
  apiKey?: string
  accessToken?: string
  developerApiKey?: string
  basePath?: string
  defaultHeaders?: { [key: string]: string }
  numberOfApiCallRetries?: number
  limiterOptions?: Bottleneck.ConstructorOptions
  limiterJobOptions?: Bottleneck.JobOptions
  httpAgent?: http.Agent | https.Agent
}
