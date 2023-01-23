import { initObjectOld } from '../../services/initObjectOld'
import BaseDiscovery from '../BaseDiscovery'
import type AuditLogsDiscovery from './audit_logs/AuditLogsDiscovery'
import type BlogsDiscovery from './blogs/BlogsDiscovery'
import type DomainsDiscovery from './domains/DomainsDiscovery'
import type HubdbDiscovery from './hubdb/HubdbDiscovery'
import type PerformanceDiscovery from './performance/PerformanceDiscovery'
import type SiteSearchDiscovery from './site_search/SiteSearchDiscovery'
import type SourceCodeDiscovery from './source_code/SourceCodeDiscovery'
import type UrlRedirectsDiscovery from './url_redirects/UrlRedirectsDiscovery'

export default class CmsDiscovery extends BaseDiscovery {
  protected _auditLogs: AuditLogsDiscovery | undefined
  protected _blogs: BlogsDiscovery | undefined
  protected _domains: DomainsDiscovery | undefined
  protected _hubdb: HubdbDiscovery | undefined
  protected _performance: PerformanceDiscovery | undefined
  protected _siteSearch: SiteSearchDiscovery | undefined
  protected _sourceCode: SourceCodeDiscovery | undefined
  protected _urlRedirects: UrlRedirectsDiscovery | undefined

  /**
   * Getter
   * @returns AuditLogsDiscovery
   */
  get auditLogs() {
    if (!this._auditLogs) {
      this._auditLogs = initObjectOld<AuditLogsDiscovery>('cms/audit_logs/AuditLogsDiscovery', this.config)
    }

    return this._auditLogs
  }

  /**
   * Getter
   * @returns BlogsDiscovery
   */
  get blogs() {
    if (!this._blogs) {
      this._blogs = initObjectOld<BlogsDiscovery>('cms/blogs/BlogsDiscovery', this.config)
    }

    return this._blogs
  }

  /**
   * Getter
   * @returns DomainsDiscovery
   */
  get domains() {
    if (!this._domains) {
      this._domains = initObjectOld<DomainsDiscovery>('cms/domains/DomainsDiscovery', this.config)
    }

    return this._domains
  }

  /**
   * Getter
   * @returns HubdbDiscovery
   */
  get hubdb() {
    if (!this._hubdb) {
      this._hubdb = initObjectOld<HubdbDiscovery>('cms/hubdb/HubdbDiscovery', this.config)
    }

    return this._hubdb
  }

  /**
   * Getter
   * @returns PerformanceDiscovery
   */
  get performance() {
    if (!this._performance) {
      this._performance = initObjectOld<PerformanceDiscovery>('cms/performance/PerformanceDiscovery', this.config)
    }

    return this._performance
  }

  /**
   * Getter
   * @returns SiteSearchDiscovery
   */
  get siteSearch() {
    if (!this._siteSearch) {
      this._siteSearch = initObjectOld<SiteSearchDiscovery>('cms/site_search/SiteSearchDiscovery', this.config)
    }

    return this._siteSearch
  }

  /**
   * Getter
   * @returns SourceCodeDiscovery
   */
  get sourceCode() {
    if (!this._sourceCode) {
      this._sourceCode = initObjectOld<SourceCodeDiscovery>('cms/source_code/SourceCodeDiscovery', this.config)
    }

    return this._sourceCode
  }

  /**
   * Getter
   * @returns UrlRedirectsDiscovery
   */
  get urlRedirects() {
    if (!this._urlRedirects) {
      this._urlRedirects = initObjectOld<UrlRedirectsDiscovery>('cms/url_redirects/UrlRedirectsDiscovery', this.config)
    }

    return this._urlRedirects
  }
}
