import * as _ from 'lodash'
import fetch from 'node-fetch'
import { IConfiguration } from '../../configuration/IConfiguration'
import { IHttpOptions } from './IHttpOptions'
import { Request } from './Request'

export class HttpClient {
  public static async send(config: IConfiguration = {}, opts: IHttpOptions = {}) {
    const request = new Request(config, opts)

    const respose = await fetch(request.getUrl(), request.getSendData())

    return await respose.json()
  }
}
