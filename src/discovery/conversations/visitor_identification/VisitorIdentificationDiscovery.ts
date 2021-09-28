import { createConfiguration } from '../../../../codegen/conversations/visitor_identification/configuration'
import { GenerateApi } from '../../../../codegen/conversations/visitor_identification/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class VisitorIdentificationDiscovery extends BaseDiscovery {
  public generateApi: GenerateApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.generateApi = new GenerateApi(configuration)
  }
}
