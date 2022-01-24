import { createConfiguration } from '../../../../codegen/crm/feedback_submissions/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  RequestContext,
  ResponseContext,
  SearchApi,
} from '../../../../codegen/crm/feedback_submissions/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class FeedbackSubmissionsDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }
}
