import * as _ from 'lodash'
import fetch from 'node-fetch'
import { Request } from './Request'

export class HttpClient {
  public static async send(request: Request) {
    const respose = await fetch(request.getUrl(), request.getSendData())

    return await respose.json()
  }
}
