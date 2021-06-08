var AuditLogsDiscovery_1 = require('./audit_logs/AuditLogsDiscovery');
var DomainsDiscovery_1 = require('./domains/DomainsDiscovery');
var HubdbDiscovery_1 = require('./hubdb/HubdbDiscovery');
var PerformanceDiscovery_1 = require('./performance/PerformanceDiscovery');
var SiteSearchDiscovery_1 = require('./site_search/SiteSearchDiscovery');
var UrlRedirectsDiscovery_1 = require('./url_redirects/UrlRedirectsDiscovery');
var CmsDiscovery = (function () {
    function CmsDiscovery(config) {
        this.auditLogs = new AuditLogsDiscovery_1.AuditLogsDiscovery(config);
        this.domains = new DomainsDiscovery_1.DomainsDiscovery(config);
        this.hubdb = new HubdbDiscovery_1.HubdbDiscovery(config);
        this.performance = new PerformanceDiscovery_1.PerformanceDiscovery(config);
        this.siteSearch = new SiteSearchDiscovery_1.SiteSearchDiscovery(config);
        this.urlRedirects = new UrlRedirectsDiscovery_1.UrlRedirectsDiscovery(config);
    }
    return CmsDiscovery;
})();
exports.CmsDiscovery = CmsDiscovery;
