import * as _ from 'lodash'
import fetch from 'node-fetch'
import { ApiClientConfigurator } from '../configuration/ApiClientConfigurator'
import { IConfiguration } from '../configuration/IConfiguration'

export class HttpClient {
  protected config: IConfiguration
  protected baseUrl: string = 'https://api.hubapi.com'
  protected authTypes = {
    apiKey: 'qs',
    accessToken: 'oauth2',
    developerApiKey: 'qs',
  }

  constructor(config: IConfiguration = {}) {
    this.config = config
  }

  public async send(opts: any) {
    let sentData = {
      method: opts.method || 'GET',
      headers: Object.assign({}, opts.headers, this.getHeaders()),
    }

    if (opts.body) {
      let body = opts.body
      if (_.get(sentData.headers, 'Content-Type') === 'application/json' && _.get(opts, 'defaultJson', true)) {
        body = JSON.stringify(body)
      }
      sentData = Object.assign(sentData, { body })
    }

    const url = this.getUrl(opts)

    const auth = this.getAuth(opts)

    if (auth) {
      if (auth.type === 'qs') {
        url.searchParams.set('hapikey', auth.value)
      }
      if (auth.type === 'oauth2') {
        sentData.headers = Object.assign(sentData.headers, { Authorization: 'Bearer ' + auth.value })
      }
    }

    const respose = await fetch(url, sentData)

    return await respose.json()
  }

  protected getHeaders() {
    return {
      Accept: 'application/json, */*;q=0.8',
      'User-agent': ApiClientConfigurator.getUserAgent(),
      'Content-Type': 'application/json',
    }
  }

  protected getAuth(opts: any) {
    let auth
    if (opts.authType && _.get(this.config, opts.authType)) {
      auth = {
        type: _.get(this.authTypes, opts.authType),
        value: _.get(this.config, opts.authType),
      }
    } else {
      _.forIn(this.authTypes, (value, key) => {
        if (_.get(this.config, key)) {
          auth = {
            type: value,
            value: _.get(this.config, key),
          }
        }
      })
    }
    return auth
  }

  protected getUrl(opts: any): URL {
    let urlStr = opts.overlapUrl || this.baseUrl + (opts.path || '')
    if (opts.qs) {
      const params = new URLSearchParams(opts.qs)
      urlStr = urlStr + '?' + params.toString()
    }
    return new URL(urlStr)
  }
}
