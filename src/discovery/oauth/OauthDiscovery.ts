import { createConfiguration } from '../../../codegen/oauth/configuration'
import { DefaultApi } from '../../../codegen/oauth/index'
import { IConfiguration } from '../../IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'

export class OauthDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi
    
    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
