import * as _ from 'lodash'
import { Configuration, createConfiguration } from '../../../../codegen/crm/companies/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  SearchApi,
  SimplePublicObjectWithAssociations,
} from '../../../../codegen/crm/companies/index'
import { DEFAULT_OBJECTS_LIMIT } from '../../../constants'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { getAll } from '../getAll'

export class CompaniesDiscovery extends BaseDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

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
    return await getAll< SimplePublicObjectWithAssociations, Configuration>(
      this.basicApi,
      limit,
      after,
      properties,
      associations,
      archived,
    )
  }
}
