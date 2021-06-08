var rxjsStub_1 = require('../rxjsStub');
var rxjsStub_2 = require('../rxjsStub');
var EventsApi_1 = require("../apis/EventsApi");
var ObservableEventsApi = (function () {
    function ObservableEventsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApi_1.EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApi_1.EventsApiResponseProcessor();
    }
    /**
     * Returns a collection of events matching a query.
     * @param occurredAfter The starting time as an ISO 8601 timestamp.
     * @param occurredBefore The ending time as an ISO 8601 timestamp.
     * @param objectType The type of object being selected. Valid values are hubspot named object types (e.g. &#x60;contact&#x60;).
     * @param objectId The id of the selected object. If not present, then the &#x60;objectProperty&#x60; parameter is required.
     * @param eventType Limits the response to the specified event type.  For example &#x60;&amp;eventType&#x3D;e_visited_page&#x60; returns only &#x60;e_visited_page&#x60; events.  If not present all event types are returned.
     * @param after An additional parameter that may be used to get the next &#x60;limit&#x60; set of results.
     * @param before
     * @param limit The maximum number of events to return, defaults to 20.
     * @param sort Selects the sort field and order. Defaults to ascending, prefix with &#x60;-&#x60; for descending order. &#x60;occurredAt&#x60; is the only field supported for sorting.
     */
    ObservableEventsApi.prototype.getPage = function (occurredAfter, occurredBefore, objectType, objectId, eventType, after, before, limit, sort, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPage(occurredAfter, occurredBefore, objectType, objectId, eventType, after, before, limit, sort, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getPage(rsp); }));
        }));
    };
    return ObservableEventsApi;
})();
exports.ObservableEventsApi = ObservableEventsApi;
