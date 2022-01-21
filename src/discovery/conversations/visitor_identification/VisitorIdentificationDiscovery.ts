import { createConfiguration } from '../../../../codegen/conversations/visitor_identification/configuration'
import {
  GenerateApi,
  RequestContext,
  ResponseContext,
} from '../../../../codegen/conversations/visitor_identification/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class VisitorIdentificationDiscovery extends BaseDiscovery {
  public generateApi: GenerateApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.generateApi = new GenerateApi(configuration)
  }
}
