import get from 'lodash/get'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'
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
  protected headers: IHeaders = {}
  protected body?: any

  constructor(config: IConfiguration = {}, opts: IHttpOptions = {}) {
    this.config = config
    this.opts = opts
    if (config.basePath) {
      this.baseUrl = config.basePath
    }
    this.url = this.generateUrl()
    this.method = this.opts.method || 'GET'
    this.initHeaders()
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
      const method = get(AuthTypes, authType)
      const value = get(this.config, authType)
      if (method === AuthMethods.hapikey) {
        this.url.searchParams.set('hapikey', value)
      }
      if (method === AuthMethods.accessToken) {
        this.headers = Object.assign(this.headers, { Authorization: `Bearer ${value}` })
      }
    }
  }

  protected initHeaders() {
    if (get(this.opts, 'defaultJson', true)) {
      this.headers = { 'Content-Type': 'application/json' }
    }

    this.headers = Object.assign(this.headers, this.config.defaultHeaders, this.getDefaultHeaders(), this.opts.headers)
  }

  protected getDefaultHeaders(): IHeaders {
    return {
      Accept: 'application/json, */*;q=0.8',
      'User-agent': ApiClientConfigurator.getUserAgent(),
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
      if (get(this.headers, 'Content-Type') === 'application/json' && get(this.opts, 'defaultJson', true)) {
        this.body = JSON.stringify(this.body)
      }
    }
  }
}
