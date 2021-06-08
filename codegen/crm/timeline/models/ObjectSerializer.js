function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./BatchInputTimelineEvent'));
__export(require('./BatchResponseTimelineEventResponse'));
__export(require('./BatchResponseTimelineEventResponseWithErrors'));
__export(require('./CollectionResponseTimelineEventTemplate'));
__export(require('./ErrorCategory'));
__export(require('./ErrorDetail'));
__export(require('./EventDetail'));
__export(require('./ModelError'));
__export(require('./NextPage'));
__export(require('./Paging'));
__export(require('./PreviousPage'));
__export(require('./StandardError'));
__export(require('./TimelineEvent'));
__export(require('./TimelineEventIFrame'));
__export(require('./TimelineEventResponse'));
__export(require('./TimelineEventTemplate'));
__export(require('./TimelineEventTemplateCreateRequest'));
__export(require('./TimelineEventTemplateToken'));
__export(require('./TimelineEventTemplateTokenOption'));
__export(require('./TimelineEventTemplateTokenUpdateRequest'));
__export(require('./TimelineEventTemplateUpdateRequest'));
var BatchInputTimelineEvent_2 = require('./BatchInputTimelineEvent');
var BatchResponseTimelineEventResponse_2 = require('./BatchResponseTimelineEventResponse');
var BatchResponseTimelineEventResponseWithErrors_2 = require('./BatchResponseTimelineEventResponseWithErrors');
var CollectionResponseTimelineEventTemplate_2 = require('./CollectionResponseTimelineEventTemplate');
var ErrorCategory_2 = require('./ErrorCategory');
var ErrorDetail_2 = require('./ErrorDetail');
var EventDetail_2 = require('./EventDetail');
var ModelError_2 = require('./ModelError');
var NextPage_2 = require('./NextPage');
var Paging_2 = require('./Paging');
var PreviousPage_2 = require('./PreviousPage');
var StandardError_2 = require('./StandardError');
var TimelineEvent_2 = require('./TimelineEvent');
var TimelineEventIFrame_2 = require('./TimelineEventIFrame');
var TimelineEventResponse_2 = require('./TimelineEventResponse');
var TimelineEventTemplate_2 = require('./TimelineEventTemplate');
var TimelineEventTemplateCreateRequest_2 = require('./TimelineEventTemplateCreateRequest');
var TimelineEventTemplateToken_2 = require('./TimelineEventTemplateToken');
var TimelineEventTemplateTokenOption_2 = require('./TimelineEventTemplateTokenOption');
var TimelineEventTemplateTokenUpdateRequest_2 = require('./TimelineEventTemplateTokenUpdateRequest');
var TimelineEventTemplateUpdateRequest_2 = require('./TimelineEventTemplateUpdateRequest');
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
    "BatchResponseTimelineEventResponseStatusEnum",
    "BatchResponseTimelineEventResponseWithErrorsStatusEnum",
    "ErrorCategoryHttpStatusEnum",
    "TimelineEventTemplateTokenTypeEnum",
]);
var typeMap = {
    "BatchInputTimelineEvent": BatchInputTimelineEvent_2.BatchInputTimelineEvent,
    "BatchResponseTimelineEventResponse": BatchResponseTimelineEventResponse_2.BatchResponseTimelineEventResponse,
    "BatchResponseTimelineEventResponseWithErrors": BatchResponseTimelineEventResponseWithErrors_2.BatchResponseTimelineEventResponseWithErrors,
    "CollectionResponseTimelineEventTemplate": CollectionResponseTimelineEventTemplate_2.CollectionResponseTimelineEventTemplate,
    "ErrorCategory": ErrorCategory_2.ErrorCategory,
    "ErrorDetail": ErrorDetail_2.ErrorDetail,
    "EventDetail": EventDetail_2.EventDetail,
    "ModelError": ModelError_2.ModelError,
    "NextPage": NextPage_2.NextPage,
    "Paging": Paging_2.Paging,
    "PreviousPage": PreviousPage_2.PreviousPage,
    "StandardError": StandardError_2.StandardError,
    "TimelineEvent": TimelineEvent_2.TimelineEvent,
    "TimelineEventIFrame": TimelineEventIFrame_2.TimelineEventIFrame,
    "TimelineEventResponse": TimelineEventResponse_2.TimelineEventResponse,
    "TimelineEventTemplate": TimelineEventTemplate_2.TimelineEventTemplate,
    "TimelineEventTemplateCreateRequest": TimelineEventTemplateCreateRequest_2.TimelineEventTemplateCreateRequest,
    "TimelineEventTemplateToken": TimelineEventTemplateToken_2.TimelineEventTemplateToken,
    "TimelineEventTemplateTokenOption": TimelineEventTemplateTokenOption_2.TimelineEventTemplateTokenOption,
    "TimelineEventTemplateTokenUpdateRequest": TimelineEventTemplateTokenUpdateRequest_2.TimelineEventTemplateTokenUpdateRequest,
    "TimelineEventTemplateUpdateRequest": TimelineEventTemplateUpdateRequest_2.TimelineEventTemplateUpdateRequest
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
