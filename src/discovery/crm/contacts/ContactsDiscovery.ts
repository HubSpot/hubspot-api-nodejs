import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  Configuration,
  createConfiguration,
  GDPRApi,
  PublicObjectApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
  SimplePublicObjectWithAssociations,
} from '../../../../codegen/crm/contacts/index'
import { Observable } from '../../../../codegen/crm/contacts/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorApplier from '../../../services/ApiDecoratorApplier'
import { getAll } from '../../../services/getAll'

export default class ContactsDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
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

    this.associationsApi = ApiDecoratorApplier.apply<AssociationsApi, Configuration>(
      new AssociationsApi(configuration),
      config,
      configuration,
    )
    this.basicApi = ApiDecoratorApplier.apply<BasicApi, Configuration>(
      new BasicApi(configuration),
      config,
      configuration,
    )
    this.batchApi = ApiDecoratorApplier.apply<BatchApi, Configuration>(
      new BatchApi(configuration),
      config,
      configuration,
    )
    this.gdprApi = ApiDecoratorApplier.apply<GDPRApi, Configuration>(new GDPRApi(configuration), config, configuration)
    this.publicObjectApi = ApiDecoratorApplier.apply<PublicObjectApi, Configuration>(
      new PublicObjectApi(configuration),
      config,
      configuration,
    )
    this.searchApi = ApiDecoratorApplier.apply<SearchApi, Configuration>(
      new SearchApi(configuration),
      config,
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
