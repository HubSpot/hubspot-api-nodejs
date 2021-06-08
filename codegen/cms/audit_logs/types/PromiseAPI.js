var ObservableAPI_1 = require('./ObservableAPI');
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param objectId Comma separated list of object ids to filter by.
     * @param userId Comma separated list of user ids to filter by.
     * @param after Timestamp after which audit logs will be returned
     * @param before Timestamp before which audit logs will be returned
     * @param sort The sort direction for the audit logs. (Can only sort by timestamp).
     * @param eventType Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @param limit The number of logs to return.
     * @param objectType Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     */
    PromiseDefaultApi.prototype.getPage = function (objectId, userId, after, before, sort, eventType, limit, objectType, _options) {
        var result = this.api.getPage(objectId, userId, after, before, sort, eventType, limit, objectType, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
})();
exports.PromiseDefaultApi = PromiseDefaultApi;
