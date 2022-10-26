import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'

export class CmsDiscovery extends BaseDiscovery {
  protected _auditLogs: any
  protected _blogs: any
  protected _domains: any
  protected _hubdb: any
  protected _performance: any
  protected _siteSearch: any
  protected _sourceCode: any
  protected _urlRedirects: any

  /**
   * Getter
   * @returns AuditLogsDiscovery
   */
  get auditLogs() {
    if (!this._auditLogs) {
      this._auditLogs = initObject('cms/audit_logs/AuditLogsDiscovery', this.config)
    }

    return this._auditLogs
  }

  /**
   * Getter
   * @returns BlogsDiscovery
   */
  get blogs() {
    if (!this._blogs) {
      this._blogs = initObject('cms/blogs/BlogsDiscovery', this.config)
    }

    return this._blogs
  }

  /**
   * Getter
   * @returns DomainsDiscovery
   */
  get domains() {
    if (!this._domains) {
      this._domains = initObject('cms/domains/DomainsDiscovery', this.config)
    }

    return this._domains
  }

  /**
   * Getter
   * @returns HubdbDiscovery
   */
  get hubdb() {
    if (!this._hubdb) {
      this._hubdb = initObject('cms/hubdb/HubdbDiscovery', this.config)
    }

    return this._hubdb
  }

  /**
   * Getter
   * @returns PerformanceDiscovery
   */
  get performance() {
    if (!this._performance) {
      this._performance = initObject('cms/performance/PerformanceDiscovery', this.config)
    }

    return this._performance
  }

  /**
   * Getter
   * @returns SiteSearchDiscovery
   */
  get siteSearch() {
    if (!this._siteSearch) {
      this._siteSearch = initObject('cms/site_search/SiteSearchDiscovery', this.config)
    }

    return this._siteSearch
  }

  /**
   * Getter
   * @returns SourceCodeDiscovery
   */
  get sourceCode() {
    if (!this._sourceCode) {
      this._sourceCode = initObject('cms/source_code/SourceCodeDiscovery', this.config)
    }

    return this._sourceCode
  }

  /**
   * Getter
   * @returns UrlRedirectsDiscovery
   */
  get urlRedirects() {
    if (!this._urlRedirects) {
      this._urlRedirects = initObject('cms/url_redirects/UrlRedirectsDiscovery', this.config)
    }

    return this._urlRedirects
  }
}
