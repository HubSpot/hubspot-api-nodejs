import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  Configuration,
  createConfiguration,
  PublicObjectApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
  SimplePublicObjectWithAssociations,
} from '../../../../codegen/crm/companies/index'
import { Observable } from '../../../../codegen/crm/companies/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import { getAll } from '../../../services/getAll'

export default class CompaniesDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public publicObjectApi: PublicObjectApi
  public searchApi: SearchApi

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

    this.associationsApi = ApiDecoratorService.getInstance().apply<AssociationsApi, Configuration>(
      new AssociationsApi(configuration),
      configuration,
    )
    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi, Configuration>(
      new BasicApi(configuration),
      configuration,
    )
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi, Configuration>(
      new BatchApi(configuration),
      configuration,
    )
    this.publicObjectApi = ApiDecoratorService.getInstance().apply<PublicObjectApi, Configuration>(
      new PublicObjectApi(configuration),
      configuration,
    )
    this.searchApi = ApiDecoratorService.getInstance().apply<SearchApi, Configuration>(
      new SearchApi(configuration),
      configuration,
    )
  }

  public async getAll(
    limit?: number,
    after?: string,
    properties?: string[],
    propertiesWithHistory?: string[],
    associations?: string[],
    archived?: boolean,
  ): Promise<SimplePublicObjectWithAssociations[]> {
    return await getAll<SimplePublicObjectWithAssociations, Configuration>(
      this.basicApi,
      limit,
      after,
      properties,
      propertiesWithHistory,
      associations,
      archived,
    )
  }
}
