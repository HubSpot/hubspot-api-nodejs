import { Request } from './Request'
import { sendFetchRequest } from './Transport'

export class HttpClient {
  public static async send(request: Request) {
    return await sendFetchRequest(request.getUrl(), request.getSendData())
  }
}
