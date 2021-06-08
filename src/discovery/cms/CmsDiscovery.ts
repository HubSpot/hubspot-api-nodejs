import { configuration } from '../../configuration'
import { AuditLogsDiscovery } from './audit_logs/AuditLogsDiscovery'
import { DomainsDiscovery } from './domains/DomainsDiscovery'
import { HubdbDiscovery } from './hubdb/HubdbDiscovery'
import { PerformanceDiscovery } from './performance/PerformanceDiscovery'
import { SiteSearchDiscovery } from './site_search/SiteSearchDiscovery'
import { UrlRedirectsDiscovery } from './url_redirects/UrlRedirectsDiscovery'


export class CmsDiscovery {
    public auditLogs: AuditLogsDiscovery
    public domains: DomainsDiscovery
    public hubdb: HubdbDiscovery
    public performance: PerformanceDiscovery
    public siteSearch: SiteSearchDiscovery
    public urlRedirects: UrlRedirectsDiscovery

    constructor(config: configuration) {
        this.auditLogs = new AuditLogsDiscovery(config)
        this.domains = new DomainsDiscovery(config)
        this.hubdb = new HubdbDiscovery(config)
        this.performance = new PerformanceDiscovery(config)
        this.siteSearch = new SiteSearchDiscovery(config)
        this.urlRedirects = new UrlRedirectsDiscovery(config)
    }
}