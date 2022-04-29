import * as _ from 'lodash'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'
import { Auth } from './Auth'
import { AuthMethods } from './AuthMethods'
import { AuthTypes } from './AuthTypes'
import { IHttpOptions } from './IHttpOptions'

export interface IHeaders {
  [key: string]: string
}

export class Request {
  protected opts: IHttpOptions
  protected config: IConfiguration
  protected baseUrl: string = 'https://api.hubapi.com'
  protected url: URL
  protected method: string
  protected headers: IHeaders
  protected body?: any

  constructor(config: IConfiguration = {}, opts: IHttpOptions = {}) {
    this.config = config
    this.opts = opts
    if (config.basePath) {
      this.baseUrl = config.basePath
    }
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
    const authType = Auth.chooseAuth(this.opts, this.config)

    if (authType) {
      const method = _.get(AuthTypes, authType)
      const value = _.get(this.config, authType)
      if (method === AuthMethods.hapikey) {
        this.url.searchParams.set('hapikey', value)
      }
      if (method === AuthMethods.accessToken) {
        this.headers = Object.assign(this.headers, { Authorization: `Bearer ${value}` })
      }
    }
  }

  protected getDefaultHeaders(): IHeaders {
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
      this.body = this.opts.body
      if (_.get(this.headers, 'Content-Type') === 'application/json' && _.get(this.opts, 'defaultJson', true)) {
        this.body = JSON.stringify(this.body)
      }
    }
  }
}
