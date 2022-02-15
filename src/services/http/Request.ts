import * as _ from 'lodash'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'
import { AuthMethod } from './AuthMethod'
import { IHttpOptions } from './IHttpOptions'
import { Auth } from './Auth'
import { AnyAaaaRecord } from 'dns'

export type Headers = { [key: string]: string }

export class Request {
    protected opts: IHttpOptions
    protected config: IConfiguration
    protected baseUrl: string = 'https://api.hubapi.com'
    protected url: URL
    protected method: string
    protected headers: Headers
    protected body?: any
  
    constructor(config: IConfiguration = {}, opts: IHttpOptions = {}) {
      this.config = config
      this.opts = opts
      this.url = this.generateUrl()
      this.method = this.opts.method || 'GET'
      this.headers = Object.assign({}, this.opts.headers, this.getDefaultHeaders())
      this.applyAuth()
      this.setBody()
    }

    public getSendData() {
        let sendData = {
            method: this.method,
            headers: this.headers,
        }
    
        if (this.body) {
            sendData = Object.assign(sendData, { body: this.body })
        }

        return sendData
    }

    public getUrl(): URL {
        return this.url
    }

    protected applyAuth() {
        const auth: AuthMethod | null = Auth.chooseAuth(this.opts, this.config)
    
        if (auth) {
            if (auth.type === Auth.hapikey) {
                this.url.searchParams.set('hapikey', auth.value)
            }
            if (auth.type === Auth.oauth2) {
                this.headers = Object.assign(this.headers, { Authorization: `Bearer ${auth.value}` })
            }
        }
    }
  
    protected getDefaultHeaders(): Headers {
      return {
        Accept: 'application/json, */*;q=0.8',
        'User-agent': ApiClientConfigurator.getUserAgent(),
        'Content-Type': 'application/json',
      }
    }
  
    protected generateUrl(): URL {
      let urlStr = this.opts.overlapUrl || this.baseUrl + (this.opts.path || '')
      if (this.opts.qs) {
        const params = new URLSearchParams(this.opts.qs)
        urlStr = `${urlStr}?${params}`
      }
      return new URL(urlStr)
    }

    protected setBody() {
        if (this.opts.body) {
            let body = this.opts.body
            if (_.get(this.headers, 'Content-Type') === 'application/json' && _.get(this.opts, 'defaultJson', true)) {
                body = JSON.stringify(body)
            }

            this.body = body
        }
    }
}
