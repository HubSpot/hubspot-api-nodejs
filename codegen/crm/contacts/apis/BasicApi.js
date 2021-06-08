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
var CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1 = require('../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging');
var SimplePublicObject_1 = require('../models/SimplePublicObject');
var SimplePublicObjectInput_1 = require('../models/SimplePublicObjectInput');
var SimplePublicObjectWithAssociations_1 = require('../models/SimplePublicObjectWithAssociations');
/**
 * no description
 */
var BasicApiRequestFactory = (function (_super) {
    __extends(BasicApiRequestFactory, _super);
    function BasicApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Move an Object identified by `{contactId}` to the recycling bin.
         * Archive
         * @param contactId
         */
        this.async = archive(contactId, string, _options ?  : Configuration);
        /**
         * Create a contact with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard contacts is provided.
         * Create
         * @param simplePublicObjectInput
         */
        this.async = create(simplePublicObjectInput, SimplePublicObjectInput_1.SimplePublicObjectInput, _options ?  : Configuration);
        /**
         * Read an Object identified by `{contactId}`. `{contactId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
         * Read
         * @param contactId
         * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
         * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
         * @param archived Whether to return only results that have been archived.
         * @param idProperty The name of a property whose values are unique for this object type
         */
        this.async = getById(contactId, string, properties ?  : Array < string > , associations ?  : Array < string > , archived ?  : boolean, idProperty ?  : string, _options ?  : Configuration);
        /**
         * Read a page of contacts. Control what is returned via the `properties` query param.
         * List
         * @param limit The maximum number of results to display per page.
         * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
         * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
         * @param archived Whether to return only results that have been archived.
         */
        this.async = getPage(limit ?  : number, after ?  : string, properties ?  : Array < string > , associations ?  : Array < string > , archived ?  : boolean, _options ?  : Configuration);
        /**
         * Perform a partial update of an Object identified by `{contactId}`. `{contactId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
         * Update
         * @param contactId
         * @param simplePublicObjectInput
         * @param idProperty The name of a property whose values are unique for this object type
         */
        this.async = update(contactId, string, simplePublicObjectInput, SimplePublicObjectInput_1.SimplePublicObjectInput, idProperty ?  : string, _options ?  : Configuration);
    }
    BasicApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter contactId was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts/{contactId}'
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
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
    BasicApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'simplePublicObjectInput' is not null or undefined
        if (simplePublicObjectInput === null || simplePublicObjectInput === undefined) {
            throw new baseapi_1.RequiredError('Required parameter simplePublicObjectInput was null or undefined when calling create.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(simplePublicObjectInput, "SimplePublicObjectInput", ""), contentType);
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
    BasicApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter contactId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts/{contactId}'
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer_1.ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (associations !== undefined) {
            requestContext.setQueryParam("associations", ObjectSerializer_1.ObjectSerializer.serialize(associations, "Array<string>", ""));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (idProperty !== undefined) {
            requestContext.setQueryParam("idProperty", ObjectSerializer_1.ObjectSerializer.serialize(idProperty, "string", ""));
        }
        // Header Params
        // Form Params
        // Body Params
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
    BasicApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer_1.ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (associations !== undefined) {
            requestContext.setQueryParam("associations", ObjectSerializer_1.ObjectSerializer.serialize(associations, "Array<string>", ""));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        // Header Params
        // Form Params
        // Body Params
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
    BasicApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter contactId was null or undefined when calling update.');
        }
        // verify required parameter 'simplePublicObjectInput' is not null or undefined
        if (simplePublicObjectInput === null || simplePublicObjectInput === undefined) {
            throw new baseapi_1.RequiredError('Required parameter simplePublicObjectInput was null or undefined when calling update.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/contacts/{contactId}'
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (idProperty !== undefined) {
            requestContext.setQueryParam("idProperty", ObjectSerializer_1.ObjectSerializer.serialize(idProperty, "string", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(simplePublicObjectInput, "SimplePublicObjectInput", ""), contentType);
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
    return BasicApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.BasicApiRequestFactory = BasicApiRequestFactory;
var BasicApiResponseProcessor = (function () {
    function BasicApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    BasicApiResponseProcessor.prototype.Promise = ;
    return BasicApiResponseProcessor;
})();
exports.BasicApiResponseProcessor = BasicApiResponseProcessor;
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
Promise < SimplePublicObject_1.SimplePublicObject > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObject", ""), as = SimplePublicObject_1.SimplePublicObject;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObject", ""), as = SimplePublicObject_1.SimplePublicObject;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getById(response, http_1.ResponseContext);
Promise < SimplePublicObjectWithAssociations_1.SimplePublicObjectWithAssociations > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObjectWithAssociations", ""), as = SimplePublicObjectWithAssociations_1.SimplePublicObjectWithAssociations;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObjectWithAssociations", ""), as = SimplePublicObjectWithAssociations_1.SimplePublicObjectWithAssociations;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getPage(response, http_1.ResponseContext);
Promise < CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging", ""), as = CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging", ""), as = CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
update(response, http_1.ResponseContext);
Promise < SimplePublicObject_1.SimplePublicObject > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObject", ""), as = SimplePublicObject_1.SimplePublicObject;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObject", ""), as = SimplePublicObject_1.SimplePublicObject;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
