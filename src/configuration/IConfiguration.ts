import * as http from 'http'
import * as https from 'https'
import Bottleneck from 'bottleneck'

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
  middleware?: Array<{
    pre(ctx: unknown): unknown
    post(ctx: unknown): unknown
  }>
}
