var ObservableAPI_1 = require('./ObservableAPI');
var PromiseBatchApi = (function () {
    function PromiseBatchApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).
     * Archive a batch of properties
     * @param objectType
     * @param batchInputPropertyName
     */
    PromiseBatchApi.prototype.archive = function (objectType, batchInputPropertyName, _options) {
        var result = this.api.archive(objectType, batchInputPropertyName, _options);
        return result.toPromise();
    };
    /**
     * Create a batch of properties using the same rules as when creating an individual property.
     * Create a batch of properties
     * @param objectType
     * @param batchInputPropertyCreate
     */
    PromiseBatchApi.prototype.create = function (objectType, batchInputPropertyCreate, _options) {
        var result = this.api.create(objectType, batchInputPropertyCreate, _options);
        return result.toPromise();
    };
    /**
     * Read a provided list of properties.
     * Read a batch of properties
     * @param objectType
     * @param batchReadInputPropertyName
     */
    PromiseBatchApi.prototype.read = function (objectType, batchReadInputPropertyName, _options) {
        var result = this.api.read(objectType, batchReadInputPropertyName, _options);
        return result.toPromise();
    };
    return PromiseBatchApi;
})();
exports.PromiseBatchApi = PromiseBatchApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseCoreApi = (function () {
    function PromiseCoreApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Move a property identified by {propertyName} to the recycling bin.
     * Archive a property
     * @param objectType
     * @param propertyName
     */
    PromiseCoreApi.prototype.archive = function (objectType, propertyName, _options) {
        var result = this.api.archive(objectType, propertyName, _options);
        return result.toPromise();
    };
    /**
     * Create and return a copy of a new property for the specified object type.
     * Create a property
     * @param objectType
     * @param propertyCreate
     */
    PromiseCoreApi.prototype.create = function (objectType, propertyCreate, _options) {
        var result = this.api.create(objectType, propertyCreate, _options);
        return result.toPromise();
    };
    /**
     * Read all existing properties for the specified object type and HubSpot account.
     * Read all properties
     * @param objectType
     * @param archived Whether to return only results that have been archived.
     */
    PromiseCoreApi.prototype.getAll = function (objectType, archived, _options) {
        var result = this.api.getAll(objectType, archived, _options);
        return result.toPromise();
    };
    /**
     * Read a property identified by {propertyName}.
     * Read a property
     * @param objectType
     * @param propertyName
     * @param archived Whether to return only results that have been archived.
     */
    PromiseCoreApi.prototype.getByName = function (objectType, propertyName, archived, _options) {
        var result = this.api.getByName(objectType, propertyName, archived, _options);
        return result.toPromise();
    };
    /**
     * Perform a partial update of a property identified by {propertyName}. Provided fields will be overwritten.
     * Update a property
     * @param objectType
     * @param propertyName
     * @param propertyUpdate
     */
    PromiseCoreApi.prototype.update = function (objectType, propertyName, propertyUpdate, _options) {
        var result = this.api.update(objectType, propertyName, propertyUpdate, _options);
        return result.toPromise();
    };
    return PromiseCoreApi;
})();
exports.PromiseCoreApi = PromiseCoreApi;
var ObservableAPI_3 = require('./ObservableAPI');
var PromiseGroupsApi = (function () {
    function PromiseGroupsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Move a property group identified by {groupName} to the recycling bin.
     * Archive a property group
     * @param objectType
     * @param groupName
     */
    PromiseGroupsApi.prototype.archive = function (objectType, groupName, _options) {
        var result = this.api.archive(objectType, groupName, _options);
        return result.toPromise();
    };
    /**
     * Create and return a copy of a new property group.
     * Create a property group
     * @param objectType
     * @param propertyGroupCreate
     */
    PromiseGroupsApi.prototype.create = function (objectType, propertyGroupCreate, _options) {
        var result = this.api.create(objectType, propertyGroupCreate, _options);
        return result.toPromise();
    };
    /**
     * Read all existing property groups for the specified object type and HubSpot account.
     * Read all property groups
     * @param objectType
     */
    PromiseGroupsApi.prototype.getAll = function (objectType, _options) {
        var result = this.api.getAll(objectType, _options);
        return result.toPromise();
    };
    /**
     * Read a property group identified by {groupName}.
     * Read a property group
     * @param objectType
     * @param groupName
     */
    PromiseGroupsApi.prototype.getByName = function (objectType, groupName, _options) {
        var result = this.api.getByName(objectType, groupName, _options);
        return result.toPromise();
    };
    /**
     * Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.
     * Update a property group
     * @param objectType
     * @param groupName
     * @param propertyGroupUpdate
     */
    PromiseGroupsApi.prototype.update = function (objectType, groupName, propertyGroupUpdate, _options) {
        var result = this.api.update(objectType, groupName, propertyGroupUpdate, _options);
        return result.toPromise();
    };
    return PromiseGroupsApi;
})();
exports.PromiseGroupsApi = PromiseGroupsApi;
