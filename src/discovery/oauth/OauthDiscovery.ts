import { configuration } from '../../configuration'
import { BaseDiscovery } from '../BaseDiscovery'
import { DefaultApi } from '../../../codegen/oauth/index'
import { createConfiguration } from '../../../codegen/oauth/configuration'


export class OauthDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi
    
    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
