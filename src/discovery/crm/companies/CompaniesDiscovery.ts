import * as _ from 'lodash'
import { Configuration, createConfiguration } from '../../../../codegen/crm/companies/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  PublicObjectApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
  SimplePublicObjectWithAssociations,
} from '../../../../codegen/crm/companies/index'
import { Observable } from '../../../../codegen/crm/companies/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { getAll } from '../../../services/getAll'

export class CompaniesDiscovery {
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

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.publicObjectApi = new PublicObjectApi(configuration)
    this.searchApi = new SearchApi(configuration)
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
