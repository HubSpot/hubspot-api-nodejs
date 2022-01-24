import { createConfiguration } from '../../../../codegen/crm/pipelines/configuration'
import {
  PipelinesApi,
  PipelineStagesApi,
  RequestContext,
  ResponseContext,
} from '../../../../codegen/crm/pipelines/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class PipelinesDiscovery {
  public pipelineStagesApi: PipelineStagesApi
  public pipelinesApi: PipelinesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.pipelineStagesApi = new PipelineStagesApi(configuration)
    this.pipelinesApi = new PipelinesApi(configuration)
  }
}
