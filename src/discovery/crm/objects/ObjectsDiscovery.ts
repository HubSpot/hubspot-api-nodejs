import { createConfiguration } from '../../../../codegen/crm/objects/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  GDPRApi,
  RequestContext,
  ResponseContext,
  SearchApi,
} from '../../../../codegen/crm/objects/index'
import { Observable } from '../../../../codegen/crm/objects/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { FeedbackSubmissionsDiscovery } from './feedback_submissions/FeedbackSubmissionsDiscovery'

export class ObjectsDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
  public feedbackSubmissions: FeedbackSubmissionsDiscovery
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.gdprApi = new GDPRApi(configuration)
    this.feedbackSubmissions = new FeedbackSubmissionsDiscovery(config)
    this.searchApi = new SearchApi(configuration)
  }
}
