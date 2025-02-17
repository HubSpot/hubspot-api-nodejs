import { Request } from './Request'
import fetch from 'node-fetch'

export class HttpClient {
  public static async send(request: Request) {
    return await fetch(request.getUrl(), request.getSendData())
  }
}
