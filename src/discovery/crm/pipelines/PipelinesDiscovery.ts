import { createConfiguration } from '../../../../codegen/crm/pipelines/configuration'
import {
  PipelinesApi,
  PipelineStagesApi,
  RequestContext,
  ResponseContext,
} from '../../../../codegen/crm/pipelines/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class PipelinesDiscovery extends BaseDiscovery {
  public pipelineStagesApi: PipelineStagesApi
  public pipelinesApi: PipelinesApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.pipelineStagesApi = new PipelineStagesApi(configuration)
    this.pipelinesApi = new PipelinesApi(configuration)
  }
}
