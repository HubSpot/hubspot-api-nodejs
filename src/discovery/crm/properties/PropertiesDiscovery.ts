import { createConfiguration } from '../../../../codegen/crm/properties/configuration'
import { BatchApi, CoreApi, GroupsApi} from '../../../../codegen/crm/properties/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class PropertiesDiscovery extends BaseDiscovery {
    public batchApi: BatchApi
    public coreApi: CoreApi
    public groupsApi: GroupsApi

    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())

        this.batchApi = new BatchApi(configuration)
        this.coreApi = new CoreApi(configuration)
        this.groupsApi = new GroupsApi(configuration)
    }
}
