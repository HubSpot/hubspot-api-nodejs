import * as _ from 'lodash'
import { createConfiguration } from '../../../../codegen/crm/line_items/configuration'
import { DEFAULT_OBJECTS_LIMIT } from '../../../constants'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
  SearchApi,
  SimplePublicObjectWithAssociations,
} from '../../../../codegen/crm/line_items/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class LineItemsDiscovery extends BaseDiscovery {
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
    properties?: Array<string>,
    associations?: Array<string>,
    archived?: boolean,
  ): Promise<SimplePublicObjectWithAssociations[]> {
    const limitInternal = limit ?? DEFAULT_OBJECTS_LIMIT
    let afterInternal = after
    let result: SimplePublicObjectWithAssociations[] = []
    do {
      let response: CollectionResponseSimplePublicObjectWithAssociationsForwardPaging = await this.basicApi.getPage(
        limitInternal,
        after,
        properties,
        associations,
        archived,
      )
      result = result.concat(response.results)
      afterInternal = _.get(response, 'paging.next.after')
    } while (!_.isNil(afterInternal))

    return result
  }
}
