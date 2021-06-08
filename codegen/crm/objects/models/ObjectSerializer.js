function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./AssociatedId'));
__export(require('./BatchInputSimplePublicObjectBatchInput'));
__export(require('./BatchInputSimplePublicObjectId'));
__export(require('./BatchInputSimplePublicObjectInput'));
__export(require('./BatchReadInputSimplePublicObjectId'));
__export(require('./BatchResponseSimplePublicObject'));
__export(require('./BatchResponseSimplePublicObjectWithErrors'));
__export(require('./CollectionResponseAssociatedId'));
__export(require('./CollectionResponseAssociatedIdForwardPaging'));
__export(require('./CollectionResponseSimplePublicObjectWithAssociationsForwardPaging'));
__export(require('./CollectionResponseWithTotalSimplePublicObjectForwardPaging'));
__export(require('./ErrorCategory'));
__export(require('./ErrorDetail'));
__export(require('./Filter'));
__export(require('./FilterGroup'));
__export(require('./ForwardPaging'));
__export(require('./ModelError'));
__export(require('./NextPage'));
__export(require('./Paging'));
__export(require('./PreviousPage'));
__export(require('./PublicObjectSearchRequest'));
__export(require('./SimplePublicObject'));
__export(require('./SimplePublicObjectBatchInput'));
__export(require('./SimplePublicObjectId'));
__export(require('./SimplePublicObjectInput'));
__export(require('./SimplePublicObjectWithAssociations'));
__export(require('./StandardError'));
var AssociatedId_2 = require('./AssociatedId');
var BatchInputSimplePublicObjectBatchInput_2 = require('./BatchInputSimplePublicObjectBatchInput');
var BatchInputSimplePublicObjectId_2 = require('./BatchInputSimplePublicObjectId');
var BatchInputSimplePublicObjectInput_2 = require('./BatchInputSimplePublicObjectInput');
var BatchReadInputSimplePublicObjectId_2 = require('./BatchReadInputSimplePublicObjectId');
var BatchResponseSimplePublicObject_2 = require('./BatchResponseSimplePublicObject');
var BatchResponseSimplePublicObjectWithErrors_2 = require('./BatchResponseSimplePublicObjectWithErrors');
var CollectionResponseAssociatedId_2 = require('./CollectionResponseAssociatedId');
var CollectionResponseAssociatedIdForwardPaging_2 = require('./CollectionResponseAssociatedIdForwardPaging');
var CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_2 = require('./CollectionResponseSimplePublicObjectWithAssociationsForwardPaging');
var CollectionResponseWithTotalSimplePublicObjectForwardPaging_2 = require('./CollectionResponseWithTotalSimplePublicObjectForwardPaging');
var ErrorCategory_2 = require('./ErrorCategory');
var ErrorDetail_2 = require('./ErrorDetail');
var Filter_2 = require('./Filter');
var FilterGroup_2 = require('./FilterGroup');
var ForwardPaging_2 = require('./ForwardPaging');
var ModelError_2 = require('./ModelError');
var NextPage_2 = require('./NextPage');
var Paging_2 = require('./Paging');
var PreviousPage_2 = require('./PreviousPage');
var PublicObjectSearchRequest_2 = require('./PublicObjectSearchRequest');
var SimplePublicObject_2 = require('./SimplePublicObject');
var SimplePublicObjectBatchInput_2 = require('./SimplePublicObjectBatchInput');
var SimplePublicObjectId_2 = require('./SimplePublicObjectId');
var SimplePublicObjectInput_2 = require('./SimplePublicObjectInput');
var SimplePublicObjectWithAssociations_2 = require('./SimplePublicObjectWithAssociations');
var StandardError_2 = require('./StandardError');
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0
};
var enumsMap = new Set([
    "BatchResponseSimplePublicObjectStatusEnum",
    "BatchResponseSimplePublicObjectWithErrorsStatusEnum",
    "ErrorCategoryHttpStatusEnum",
    "FilterOperatorEnum",
]);
var typeMap = {
    "AssociatedId": AssociatedId_2.AssociatedId,
    "BatchInputSimplePublicObjectBatchInput": BatchInputSimplePublicObjectBatchInput_2.BatchInputSimplePublicObjectBatchInput,
    "BatchInputSimplePublicObjectId": BatchInputSimplePublicObjectId_2.BatchInputSimplePublicObjectId,
    "BatchInputSimplePublicObjectInput": BatchInputSimplePublicObjectInput_2.BatchInputSimplePublicObjectInput,
    "BatchReadInputSimplePublicObjectId": BatchReadInputSimplePublicObjectId_2.BatchReadInputSimplePublicObjectId,
    "BatchResponseSimplePublicObject": BatchResponseSimplePublicObject_2.BatchResponseSimplePublicObject,
    "BatchResponseSimplePublicObjectWithErrors": BatchResponseSimplePublicObjectWithErrors_2.BatchResponseSimplePublicObjectWithErrors,
    "CollectionResponseAssociatedId": CollectionResponseAssociatedId_2.CollectionResponseAssociatedId,
    "CollectionResponseAssociatedIdForwardPaging": CollectionResponseAssociatedIdForwardPaging_2.CollectionResponseAssociatedIdForwardPaging,
    "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging": CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_2.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
    "CollectionResponseWithTotalSimplePublicObjectForwardPaging": CollectionResponseWithTotalSimplePublicObjectForwardPaging_2.CollectionResponseWithTotalSimplePublicObjectForwardPaging,
    "ErrorCategory": ErrorCategory_2.ErrorCategory,
    "ErrorDetail": ErrorDetail_2.ErrorDetail,
    "Filter": Filter_2.Filter,
    "FilterGroup": FilterGroup_2.FilterGroup,
    "ForwardPaging": ForwardPaging_2.ForwardPaging,
    "ModelError": ModelError_2.ModelError,
    "NextPage": NextPage_2.NextPage,
    "Paging": Paging_2.Paging,
    "PreviousPage": PreviousPage_2.PreviousPage,
    "PublicObjectSearchRequest": PublicObjectSearchRequest_2.PublicObjectSearchRequest,
    "SimplePublicObject": SimplePublicObject_2.SimplePublicObject,
    "SimplePublicObjectBatchInput": SimplePublicObjectBatchInput_2.SimplePublicObjectBatchInput,
    "SimplePublicObjectId": SimplePublicObjectId_2.SimplePublicObjectId,
    "SimplePublicObjectInput": SimplePublicObjectInput_2.SimplePublicObjectInput,
    "SimplePublicObjectWithAssociations": SimplePublicObjectWithAssociations_2.SimplePublicObjectWithAssociations,
    "StandardError": StandardError_2.StandardError
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0; _i < normalMediaTypes.length; _i++) {
            var mediaType = normalMediaTypes[_i];
            if (supportedMediaTypes[mediaType])
                !;
             > selectedRank;
            {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
                !;
                ;
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
        !;
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    /**
     * Parse data from a string according to the given media type
     */
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
})();
exports.ObjectSerializer = ObjectSerializer;
