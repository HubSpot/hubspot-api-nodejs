var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TODO: better import syntax?
var baseapi_1 = require('./baseapi');
var http_1 = require('../http/http');
var ObjectSerializer_1 = require('../models/ObjectSerializer');
var exception_1 = require('./exception');
var BatchInputSimplePublicObjectBatchInput_1 = require('../models/BatchInputSimplePublicObjectBatchInput');
var BatchInputSimplePublicObjectId_1 = require('../models/BatchInputSimplePublicObjectId');
var BatchInputSimplePublicObjectInput_1 = require('../models/BatchInputSimplePublicObjectInput');
var BatchReadInputSimplePublicObjectId_1 = require('../models/BatchReadInputSimplePublicObjectId');
var BatchResponseSimplePublicObject_1 = require('../models/BatchResponseSimplePublicObject');
var BatchResponseSimplePublicObjectWithErrors_1 = require('../models/BatchResponseSimplePublicObjectWithErrors');
/**
 * no description
 */
var BatchApiRequestFactory = (function (_super) {
    __extends(BatchApiRequestFactory, _super);
    function BatchApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Archive a list of contacts given a collection of IDs. This method will return a `204 No Content` response on success regardless of the initial state of the object (e.g. active, already archived, non-existent).
         * Archive a batch of contacts by ID
         * @param batchInputSimplePublicObjectId
         */
        this.async = archive(batchInputSimplePublicObjectId, BatchInputSimplePublicObjectId_1.BatchInputSimplePublicObjectId, _options ?  : Configuration);
        /**
         * Create a batch of contacts. This follows the same rules as creating an individual object.
         * Create a batch of contacts
         * @param batchInputSimplePublicObjectInput
         */
        this.async = create(batchInputSimplePublicObjectInput, BatchInputSimplePublicObjectInput_1.BatchInputSimplePublicObjectInput, _options ?  : Configuration);
        /**
         * Read a list of contacts given a collection of IDs. Use the `properties` request body property to control which properties are returned.
         * Read a batch of contacts by internal ID, or unique property values
         * @param batchReadInputSimplePublicObjectId
         * @param archived Whether to return only results that have been archived.
         */
        this.async = read(batchReadInputSimplePublicObjectId, BatchReadInputSimplePublicObjectId_1.BatchReadInputSimplePublicObjectId, archived ?  : boolean, _options ?  : Configuration);
        /**
         * Perform a partial upate on a batch of contacts. This follows the same rules as performing partial updates on an individual object.
         * Update a batch of contacts
         * @param batchInputSimplePublicObjectBatchInput
         */
        this.async = update(batchInputSimplePublicObjectBatchInput, BatchInputSimplePublicObjectBatchInput_1.BatchInputSimplePublicObjectBatchInput, _options ?  : Configuration);
    }
    BatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'batchInputSimplePublicObjectId' is not null or undefined
        if (batchInputSimplePublicObjectId === null || batchInputSimplePublicObjectId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputSimplePublicObjectId was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts/batch/archive';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputSimplePublicObjectId, "BatchInputSimplePublicObjectId", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    BatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'batchInputSimplePublicObjectInput' is not null or undefined
        if (batchInputSimplePublicObjectInput === null || batchInputSimplePublicObjectInput === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputSimplePublicObjectInput was null or undefined when calling create.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts/batch/create';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputSimplePublicObjectInput, "BatchInputSimplePublicObjectInput", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    BatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'batchReadInputSimplePublicObjectId' is not null or undefined
        if (batchReadInputSimplePublicObjectId === null || batchReadInputSimplePublicObjectId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchReadInputSimplePublicObjectId was null or undefined when calling read.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts/batch/read';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchReadInputSimplePublicObjectId, "BatchReadInputSimplePublicObjectId", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    BatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'batchInputSimplePublicObjectBatchInput' is not null or undefined
        if (batchInputSimplePublicObjectBatchInput === null || batchInputSimplePublicObjectBatchInput === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputSimplePublicObjectBatchInput was null or undefined when calling update.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts/batch/update';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputSimplePublicObjectBatchInput, "BatchInputSimplePublicObjectBatchInput", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    return BatchApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.BatchApiRequestFactory = BatchApiRequestFactory;
var BatchApiResponseProcessor = (function () {
    function BatchApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    BatchApiResponseProcessor.prototype.Promise = ;
    return BatchApiResponseProcessor;
})();
exports.BatchApiResponseProcessor = BatchApiResponseProcessor;
void  > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("204", response.httpStatusCode); }
        return;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "void", ""), as = void ;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
create(response, http_1.ResponseContext);
Promise < BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObject", ""), as = BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObjectWithErrors", ""), as = BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors", ""), as = BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
read(response, http_1.ResponseContext);
Promise < BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObject", ""), as = BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObjectWithErrors", ""), as = BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors", ""), as = BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
update(response, http_1.ResponseContext);
Promise < BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObject", ""), as = BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObjectWithErrors", ""), as = BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors", ""), as = BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
