import { createConfiguration } from '../../../../codegen/crm/pipelines/configuration'
import {
  PipelinesApi,
  PipelineStagesApi,
  RequestContext,
  ResponseContext,
} from '../../../../codegen/crm/pipelines/index'
import { Observable } from '../../../../codegen/crm/pipelines/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class PipelinesDiscovery {
  public pipelineStagesApi: PipelineStagesApi
  public pipelinesApi: PipelinesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.pipelineStagesApi = new PipelineStagesApi(configuration)
    this.pipelinesApi = new PipelinesApi(configuration)
  }
}
