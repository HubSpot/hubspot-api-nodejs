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
var CollectionResponseAssociatedIdForwardPaging_1 = require('../models/CollectionResponseAssociatedIdForwardPaging');
var SimplePublicObjectWithAssociations_1 = require('../models/SimplePublicObjectWithAssociations');
/**
 * no description
 */
var AssociationsApiRequestFactory = (function (_super) {
    __extends(AssociationsApiRequestFactory, _super);
    function AssociationsApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Remove an association between two companies
         * @param companyId
         * @param toObjectType
         * @param toObjectId
         * @param associationType
         */
        this.async = archive(companyId, string, toObjectType, string, toObjectId, string, associationType, string, _options ?  : Configuration);
        /**
         * Associate a company with another object
         * @param companyId
         * @param toObjectType
         * @param toObjectId
         * @param associationType
         */
        this.async = create(companyId, string, toObjectType, string, toObjectId, string, associationType, string, _options ?  : Configuration);
        /**
         * List associations of a company by type
         * @param companyId
         * @param toObjectType
         * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param limit The maximum number of results to display per page.
         */
        this.async = getAll(companyId, string, toObjectType, string, after ?  : string, limit ?  : number, _options ?  : Configuration);
    }
    AssociationsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter companyId was null or undefined when calling archive.');
        }
        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter toObjectType was null or undefined when calling archive.');
        }
        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter toObjectId was null or undefined when calling archive.');
        }
        // verify required parameter 'associationType' is not null or undefined
        if (associationType === null || associationType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter associationType was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/companies/{companyId}/associations/{toObjectType}/{toObjectId}/{associationType}'
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)))
            .replace('{' + 'associationType' + '}', encodeURIComponent(String(associationType)));
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
    AssociationsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter companyId was null or undefined when calling create.');
        }
        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter toObjectType was null or undefined when calling create.');
        }
        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter toObjectId was null or undefined when calling create.');
        }
        // verify required parameter 'associationType' is not null or undefined
        if (associationType === null || associationType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter associationType was null or undefined when calling create.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/companies/{companyId}/associations/{toObjectType}/{toObjectId}/{associationType}'
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)))
            .replace('{' + 'associationType' + '}', encodeURIComponent(String(associationType)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
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
    AssociationsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter companyId was null or undefined when calling getAll.');
        }
        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter toObjectType was null or undefined when calling getAll.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/companies/{companyId}/associations/{toObjectType}'
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
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
    return AssociationsApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.AssociationsApiRequestFactory = AssociationsApiRequestFactory;
var AssociationsApiResponseProcessor = (function () {
    function AssociationsApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    AssociationsApiResponseProcessor.prototype.Promise = ;
    return AssociationsApiResponseProcessor;
})();
exports.AssociationsApiResponseProcessor = AssociationsApiResponseProcessor;
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
getAll(response, http_1.ResponseContext);
Promise < CollectionResponseAssociatedIdForwardPaging_1.CollectionResponseAssociatedIdForwardPaging > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseAssociatedIdForwardPaging", ""), as = CollectionResponseAssociatedIdForwardPaging_1.CollectionResponseAssociatedIdForwardPaging;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseAssociatedIdForwardPaging", ""), as = CollectionResponseAssociatedIdForwardPaging_1.CollectionResponseAssociatedIdForwardPaging;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
