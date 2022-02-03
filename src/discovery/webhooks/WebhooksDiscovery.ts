import crypto = require('crypto')
import * as _ from 'lodash'
import { createConfiguration } from '../../../codegen/webhooks/configuration'
import { RequestContext, ResponseContext, SettingsApi, SubscriptionsApi } from '../../../codegen/webhooks/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class WebhooksDiscovery {
  public settingsApi: SettingsApi
  public subscriptionsApi: SubscriptionsApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.settingsApi = new SettingsApi(configuration)
    this.subscriptionsApi = new SubscriptionsApi(configuration)
  }

  public validateSignature(
    signature: string,
    clientSecret: string,
    requestBody: string,
    signatureVersion = 'v1',
    webhooksUrl?: string,
    webhooksMethod = 'POST',
  ): boolean {
    const sourceString = _.isEqual(signatureVersion, 'v1')
      ? clientSecret + requestBody
      : clientSecret + webhooksMethod + webhooksUrl + requestBody

    const hash = crypto
      .createHash('sha256')
      .update(sourceString)
      .digest('hex')

    return _.isEqual(signature, hash)
  }
}
