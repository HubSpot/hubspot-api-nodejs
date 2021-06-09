import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { RedirectsApi } from '../../../../codegen/cms/url_redirects/index'
import { createConfiguration } from '../../../../codegen/cms/url_redirects/configuration'

export class UrlRedirectsDiscovery extends BaseDiscovery {
    public redirectsApi: RedirectsApi

    constructor(config: Configuration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.redirectsApi = new RedirectsApi(configuration)
    }
}
