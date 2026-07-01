import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/pipelines/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/crm/pipelines/rxjsStub'

export default class PipelinesDiscovery {
  public pipelineAuditsApi: BasicApi
  public pipelineStageAuditsApi: BasicApi
  public pipelineStagesApi: BasicApi
  public pipelinesApi: BasicApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    const api = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.pipelineAuditsApi = api
    this.pipelineStageAuditsApi = api
    this.pipelineStagesApi = api
    this.pipelinesApi = api
  }
}
