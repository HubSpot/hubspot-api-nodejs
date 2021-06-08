import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { RedirectsApi } from '../../../../codegen/cms/url_redirects/index'
import { createConfiguration } from '../../../../codegen/cms/url_redirects/configuration'

export class UrlRedirectsDiscovery extends baseDiscovery {
    public redirectsApi: RedirectsApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.redirectsApi = new RedirectsApi(configuration)
    }
}
