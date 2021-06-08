import { configuration } from '../../../configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { DefaultApi} from '../../../../codegen/crm/owners/index'
import { createConfiguration } from '../../../../codegen/crm/owners/configuration'

export class OwnersDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.defaultApi = new DefaultApi(configuration)
    }
}
