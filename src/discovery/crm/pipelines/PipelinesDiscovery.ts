import { createConfiguration } from '../../../../codegen/crm/pipelines/configuration'
import { PipelinesApi, PipelineStagesApi } from '../../../../codegen/crm/pipelines/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class PipelinesDiscovery extends BaseDiscovery {
  public pipelineStagesApi: PipelineStagesApi
  public pipelinesApi: PipelinesApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.pipelineStagesApi = new PipelineStagesApi(configuration)
    this.pipelinesApi = new PipelinesApi(configuration)
  }
}
