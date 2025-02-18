import BaseDiscovery from '../BaseDiscovery'
import type AuditLogsDiscovery from './audit_logs/AuditLogsDiscovery'
import type BlogsDiscovery from './blogs/BlogsDiscovery'
import type DomainsDiscovery from './domains/DomainsDiscovery'
import type HubdbDiscovery from './hubdb/HubdbDiscovery'
import type PagesDiscovery from './pages/PagesDiscovery'
import type PerformanceDiscovery from './performance/PerformanceDiscovery'
import type SiteSearchDiscovery from './site_search/SiteSearchDiscovery'
import type SourceCodeDiscovery from './source_code/SourceCodeDiscovery'
import type UrlRedirectsDiscovery from './url_redirects/UrlRedirectsDiscovery'

export default class CmsDiscovery extends BaseDiscovery {
  protected _auditLogs: AuditLogsDiscovery | undefined
  protected _blogs: BlogsDiscovery | undefined
  protected _domains: DomainsDiscovery | undefined
  protected _hubdb: HubdbDiscovery | undefined
  protected _pages: PagesDiscovery | undefined
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
      const requiredClass = require('./audit_logs/AuditLogsDiscovery')
      this._auditLogs = new requiredClass.default(this.config) as AuditLogsDiscovery
    }

    return this._auditLogs
  }

  /**
   * Getter
   * @returns BlogsDiscovery
   */
  get blogs() {
    if (!this._blogs) {
      const requiredClass = require('./blogs/BlogsDiscovery')
      this._blogs = new requiredClass.default(this.config) as BlogsDiscovery
    }

    return this._blogs
  }

  /**
   * Getter
   * @returns DomainsDiscovery
   */
  get domains() {
    if (!this._domains) {
      const requiredClass = require('./domains/DomainsDiscovery')
      this._domains = new requiredClass.default(this.config) as DomainsDiscovery
    }

    return this._domains
  }

  /**
   * Getter
   * @returns HubdbDiscovery
   */
  get hubdb() {
    if (!this._hubdb) {
      const requiredClass = require('./hubdb/HubdbDiscovery')
      this._hubdb = new requiredClass.default(this.config) as HubdbDiscovery
    }

    return this._hubdb
  }

  /**
   * Getter
   * @returns PagesDiscovery
   */
  get pages() {
    if (!this._pages) {
      const requiredClass = require('./pages/PagesDiscovery')
      this._pages = new requiredClass.default(this.config) as PagesDiscovery
    }

    return this._pages
  }

  /**
   * Getter
   * @returns PerformanceDiscovery
   */
  get performance() {
    if (!this._performance) {
      const requiredClass = require('./performance/PerformanceDiscovery')
      this._performance = new requiredClass.default(this.config) as PerformanceDiscovery
    }

    return this._performance
  }

  /**
   * Getter
   * @returns SiteSearchDiscovery
   */
  get siteSearch() {
    if (!this._siteSearch) {
      const requiredClass = require('./site_search/SiteSearchDiscovery')
      this._siteSearch = new requiredClass.default(this.config) as SiteSearchDiscovery
    }

    return this._siteSearch
  }

  /**
   * Getter
   * @returns SourceCodeDiscovery
   */
  get sourceCode() {
    if (!this._sourceCode) {
      const requiredClass = require('./source_code/SourceCodeDiscovery')
      this._sourceCode = new requiredClass.default(this.config) as SourceCodeDiscovery
    }

    return this._sourceCode
  }

  /**
   * Getter
   * @returns UrlRedirectsDiscovery
   */
  get urlRedirects() {
    if (!this._urlRedirects) {
      const requiredClass = require('./url_redirects/UrlRedirectsDiscovery')
      this._urlRedirects = new requiredClass.default(this.config) as UrlRedirectsDiscovery
    }

    return this._urlRedirects
  }
}
