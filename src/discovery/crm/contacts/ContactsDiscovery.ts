import * as _ from 'lodash'
import { createConfiguration } from '../../../../codegen/crm/contacts/configuration'
import { AssociationsApi, BasicApi, BatchApi, CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,  GDPRApi, SearchApi, SimplePublicObjectWithAssociations } from '../../../../codegen/crm/contacts/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class ContactsDiscovery extends BaseDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.gdprApi = new GDPRApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }

  public async getAll(properties?: Array<string>, associations?: Array<string>, archived?: boolean): Promise<SimplePublicObjectWithAssociations[]> {
    let after
    let result: SimplePublicObjectWithAssociations[] = []
    do {
      let response:CollectionResponseSimplePublicObjectWithAssociationsForwardPaging  = await this.basicApi.getPage(100, after, properties, associations, archived)
      result = result.concat(response.results)
      after = _.get(response, 'paging.next.after')
    } while (!_.isNil(after))

    return result
  }
  
}
