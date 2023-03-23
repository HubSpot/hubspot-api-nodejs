import {
  Configuration,
  createConfiguration,
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
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class PipelinesDiscovery {
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
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.pipelineAuditsApi = ApiDecoratorService.getInstance().apply<PipelineAuditsApi>(
      new PipelineAuditsApi(configuration),
    )
    this.pipelineStageAuditsApi = ApiDecoratorService.getInstance().apply<PipelineStageAuditsApi>(
      new PipelineStageAuditsApi(configuration),
    )
    this.pipelineStagesApi = ApiDecoratorService.getInstance().apply<PipelineStagesApi>(
      new PipelineStagesApi(configuration),
    )
    this.pipelinesApi = ApiDecoratorService.getInstance().apply<PipelinesApi>(new PipelinesApi(configuration))
  }
}
