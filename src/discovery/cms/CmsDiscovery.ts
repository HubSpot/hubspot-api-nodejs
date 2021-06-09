import { IConfiguration } from '../../IConfiguration'
import { AuditLogsDiscovery } from './audit_logs/AuditLogsDiscovery'
import { BlogsDiscovery } from './blogs/BlogsDiscovery'
import { DomainsDiscovery } from './domains/DomainsDiscovery'
import { HubdbDiscovery } from './hubdb/HubdbDiscovery'
import { PerformanceDiscovery } from './performance/PerformanceDiscovery'
import { SiteSearchDiscovery } from './site_search/SiteSearchDiscovery'
import { UrlRedirectsDiscovery } from './url_redirects/UrlRedirectsDiscovery'


export class CmsDiscovery {
    public auditLogs: AuditLogsDiscovery
    public blogs: BlogsDiscovery
    public domains: DomainsDiscovery
    public hubdb: HubdbDiscovery
    public performance: PerformanceDiscovery
    public siteSearch: SiteSearchDiscovery
    public urlRedirects: UrlRedirectsDiscovery

    constructor(config: IConfiguration) {
        this.auditLogs = new AuditLogsDiscovery(config)
        this.blogs = new BlogsDiscovery(config)
        this.domains = new DomainsDiscovery(config)
        this.hubdb = new HubdbDiscovery(config)
        this.performance = new PerformanceDiscovery(config)
        this.siteSearch = new SiteSearchDiscovery(config)
        this.urlRedirects = new UrlRedirectsDiscovery(config)
    }
}