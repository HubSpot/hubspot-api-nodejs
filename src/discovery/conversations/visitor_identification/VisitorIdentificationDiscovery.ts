import { createConfiguration } from '../../../../codegen/conversations/visitor_identification/configuration'
import {
  GenerateApi,
  RequestContext,
  ResponseContext,
} from '../../../../codegen/conversations/visitor_identification/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class VisitorIdentificationDiscovery {
  public generateApi: GenerateApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.generateApi = new GenerateApi(configuration)
  }
}
