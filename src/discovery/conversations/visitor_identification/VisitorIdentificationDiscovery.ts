import { createConfiguration } from '../../../../codegen/conversations/visitor_identification/configuration'
import {
  GenerateApi,
  RequestContext,
  ResponseContext,
} from '../../../../codegen/conversations/visitor_identification/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class VisitorIdentificationDiscovery {
  public generateApi: GenerateApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.generateApi = new GenerateApi(configuration)
  }
}
