import { Client } from '../../../index'
import AuditLogsDiscovery from '../../../src/discovery/cms/audit_logs/AuditLogsDiscovery'
import BlogsDiscovery from '../../../src/discovery/cms/blogs/BlogsDiscovery'
import DomainsDiscovery from '../../../src/discovery/cms/domains/DomainsDiscovery'
import HubdbDiscovery from '../../../src/discovery/cms/hubdb/HubdbDiscovery'
import PagesDiscovery from '../../../src/discovery/cms/pages/PagesDiscovery'
import PerformanceDiscovery from '../../../src/discovery/cms/performance/PerformanceDiscovery'
import SiteSearchDiscovery from '../../../src/discovery/cms/site_search/SiteSearchDiscovery'
import SourceCodeDiscovery from '../../../src/discovery/cms/source_code/SourceCodeDiscovery'
import UrlRedirectsDiscovery from '../../../src/discovery/cms/url_redirects/UrlRedirectsDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms
    expect(AuditLogsDiscovery.name).toBe(client.auditLogs.constructor.name)
    expect(BlogsDiscovery.name).toBe(client.blogs.constructor.name)
    expect(DomainsDiscovery.name).toBe(client.domains.constructor.name)
    expect(HubdbDiscovery.name).toBe(client.hubdb.constructor.name)
    expect(PagesDiscovery.name).toBe(client.pages.constructor.name)
    expect(PerformanceDiscovery.name).toBe(client.performance.constructor.name)
    expect(SiteSearchDiscovery.name).toBe(client.siteSearch.constructor.name)
    expect(SourceCodeDiscovery.name).toBe(client.sourceCode.constructor.name)
    expect(UrlRedirectsDiscovery.name).toBe(client.urlRedirects.constructor.name)
  })
})
