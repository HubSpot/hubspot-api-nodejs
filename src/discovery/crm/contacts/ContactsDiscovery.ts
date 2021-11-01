import { createConfiguration } from '../../../../codegen/crm/contacts/configuration'
import { AssociationsApi, BasicApi, BatchApi, GDPRApi, SearchApi, SimplePublicObjectWithAssociations } from '../../../../codegen/crm/contacts/index'
import { IConfiguration } from '../../../IConfiguration'
import { ObjectDiscovery } from '../ObjectDiscovery'

export class ContactsDiscovery extends ObjectDiscovery<SimplePublicObjectWithAssociations> {
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
}
