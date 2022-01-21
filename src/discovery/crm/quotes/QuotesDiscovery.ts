import * as _ from 'lodash'
import { Configuration, createConfiguration } from '../../../../codegen/crm/quotes/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  SimplePublicObjectWithAssociations,
} from '../../../../codegen/crm/quotes/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { getAll } from '../../../services/getAll'

export class QuotesDiscovery extends BaseDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }

  public async getAll(
    limit?: number,
    after?: string,
    properties?: string[],
    associations?: string[],
    archived?: boolean,
  ): Promise<SimplePublicObjectWithAssociations[]> {
    return await getAll<SimplePublicObjectWithAssociations, Configuration>(
      this.basicApi,
      limit,
      after,
      properties,
      associations,
      archived,
    )
  }
}
