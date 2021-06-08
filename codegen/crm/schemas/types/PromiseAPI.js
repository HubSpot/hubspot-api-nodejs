var ObservableAPI_1 = require('./ObservableAPI');
var PromiseCoreApi = (function () {
    function PromiseCoreApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param archived Whether to return only results that have been archived.
     */
    PromiseCoreApi.prototype.archive = function (objectType, archived, _options) {
        var result = this.api.archive(objectType, archived, _options);
        return result.toPromise();
    };
    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationIdentifier Unique ID of the association to remove.
     */
    PromiseCoreApi.prototype.archiveAssociation = function (objectType, associationIdentifier, _options) {
        var result = this.api.archiveAssociation(objectType, associationIdentifier, _options);
        return result.toPromise();
    };
    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
     * @param objectSchemaEgg Object schema definition, including properties and associations.
     */
    PromiseCoreApi.prototype.create = function (objectSchemaEgg, _options) {
        var result = this.api.create(objectSchemaEgg, _options);
        return result.toPromise();
    };
    /**
     * Defines a new association between the primary schema's object type and other object types.
     * Create an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationDefinitionEgg Attributes that define the association.
     */
    PromiseCoreApi.prototype.createAssociation = function (objectType, associationDefinitionEgg, _options) {
        var result = this.api.createAssociation(objectType, associationDefinitionEgg, _options);
        return result.toPromise();
    };
    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param archived Whether to return only results that have been archived.
     */
    PromiseCoreApi.prototype.getAll = function (archived, _options) {
        var result = this.api.getAll(archived, _options);
        return result.toPromise();
    };
    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    PromiseCoreApi.prototype.getById = function (objectType, _options) {
        var result = this.api.getById(objectType, _options);
        return result.toPromise();
    };
    /**
     * Update the details for an existing object schema.
     * Update a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param objectTypeDefinitionPatch Attributes to update in your schema.
     */
    PromiseCoreApi.prototype.update = function (objectType, objectTypeDefinitionPatch, _options) {
        var result = this.api.update(objectType, objectTypeDefinitionPatch, _options);
        return result.toPromise();
    };
    return PromiseCoreApi;
})();
exports.PromiseCoreApi = PromiseCoreApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * @param objectType
     */
    PromiseDefaultApi.prototype.purge = function (objectType, _options) {
        var result = this.api.purge(objectType, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
})();
exports.PromiseDefaultApi = PromiseDefaultApi;
