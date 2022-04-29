import { createConfiguration } from '../../../../codegen/crm/pipelines/configuration'
import {
  PipelineAuditsApi,
  PipelinesApi,
  PipelineStageAuditsApi,
  PipelineStagesApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/crm/pipelines/index'
import { Observable } from '../../../../codegen/crm/pipelines/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class PipelinesDiscovery {
  public pipelineAuditsApi: PipelineAuditsApi
  public pipelineStageAuditsApi: PipelineStageAuditsApi
  public pipelineStagesApi: PipelineStagesApi
  public pipelinesApi: PipelinesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable)
    )

    this.pipelineAuditsApi = new PipelineAuditsApi(configuration)
    this.pipelineStageAuditsApi = new PipelineStageAuditsApi(configuration)
    this.pipelineStagesApi = new PipelineStagesApi(configuration)
    this.pipelinesApi = new PipelinesApi(configuration)
  }
}
