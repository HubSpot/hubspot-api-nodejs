import { IConfiguration } from '../../configuration/IConfiguration'
import { initObject } from '../../services/initObject'
import { AuditLogsDiscovery } from './audit_logs/AuditLogsDiscovery'
import { BaseDiscovery } from '../BaseDiscovery'
import { BlogsDiscovery } from './blogs/BlogsDiscovery'
import { DomainsDiscovery } from './domains/DomainsDiscovery'
import { HubdbDiscovery } from './hubdb/HubdbDiscovery'
import { PerformanceDiscovery } from './performance/PerformanceDiscovery'
import { SiteSearchDiscovery } from './site_search/SiteSearchDiscovery'
import { SourceCodeDiscovery } from './source_code/SourceCodeDiscovery'
import { UrlRedirectsDiscovery } from './url_redirects/UrlRedirectsDiscovery'

export default class CmsDiscovery extends BaseDiscovery {
  public auditLogs: AuditLogsDiscovery
  public blogs: BlogsDiscovery
  public domains: DomainsDiscovery
  public hubdb: HubdbDiscovery
  public performance: PerformanceDiscovery
  public siteSearch: SiteSearchDiscovery
  public sourceCode: SourceCodeDiscovery
  public urlRedirects: UrlRedirectsDiscovery

  constructor(config: IConfiguration = {}) {
    super(config)
    this.auditLogs = new AuditLogsDiscovery(config)
    this.blogs = new BlogsDiscovery(config)
    this.domains = new DomainsDiscovery(config)
    this.hubdb = new HubdbDiscovery(config)
    this.performance = new PerformanceDiscovery(config)
    this.siteSearch = new SiteSearchDiscovery(config)
    this.sourceCode = new SourceCodeDiscovery(config)
    this.urlRedirects = new UrlRedirectsDiscovery(config)
  }
}
