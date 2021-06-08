function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./BatchInputHubDbTableRowV3'));
__export(require('./BatchInputJsonNode'));
__export(require('./BatchInputString'));
__export(require('./BatchResponseHubDbTableRowV3WithErrors'));
__export(require('./CollectionResponseWithTotalHubDbTableRowV3ForwardPaging'));
__export(require('./CollectionResponseWithTotalHubDbTableV3ForwardPaging'));
__export(require('./Column'));
__export(require('./ColumnInput'));
__export(require('./ErrorDetail'));
__export(require('./ForeignId'));
__export(require('./ForwardPaging'));
__export(require('./HubDbTableCloneRequest'));
__export(require('./HubDbTableRowV3'));
__export(require('./HubDbTableRowV3Input'));
__export(require('./HubDbTableV3'));
__export(require('./HubDbTableV3Input'));
__export(require('./HubDbTableV3LiveInput'));
__export(require('./ImportResult'));
__export(require('./ModelError'));
__export(require('./NextPage'));
__export(require('./Option'));
__export(require('./SimpleUser'));
__export(require('./StandardError'));
var BatchInputHubDbTableRowV3_2 = require('./BatchInputHubDbTableRowV3');
var BatchInputJsonNode_2 = require('./BatchInputJsonNode');
var BatchInputString_2 = require('./BatchInputString');
var BatchResponseHubDbTableRowV3WithErrors_2 = require('./BatchResponseHubDbTableRowV3WithErrors');
var CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_2 = require('./CollectionResponseWithTotalHubDbTableRowV3ForwardPaging');
var CollectionResponseWithTotalHubDbTableV3ForwardPaging_2 = require('./CollectionResponseWithTotalHubDbTableV3ForwardPaging');
var Column_2 = require('./Column');
var ColumnInput_2 = require('./ColumnInput');
var ErrorDetail_2 = require('./ErrorDetail');
var ForeignId_2 = require('./ForeignId');
var ForwardPaging_2 = require('./ForwardPaging');
var HubDbTableCloneRequest_2 = require('./HubDbTableCloneRequest');
var HubDbTableRowV3_2 = require('./HubDbTableRowV3');
var HubDbTableRowV3Input_2 = require('./HubDbTableRowV3Input');
var HubDbTableV3_2 = require('./HubDbTableV3');
var HubDbTableV3Input_2 = require('./HubDbTableV3Input');
var HubDbTableV3LiveInput_2 = require('./HubDbTableV3LiveInput');
var ImportResult_2 = require('./ImportResult');
var ModelError_2 = require('./ModelError');
var NextPage_2 = require('./NextPage');
var Option_2 = require('./Option');
var SimpleUser_2 = require('./SimpleUser');
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
    "BatchResponseHubDbTableRowV3WithErrorsStatusEnum",
    "ColumnTypeEnum",
]);
var typeMap = {
    "BatchInputHubDbTableRowV3": BatchInputHubDbTableRowV3_2.BatchInputHubDbTableRowV3,
    "BatchInputJsonNode": BatchInputJsonNode_2.BatchInputJsonNode,
    "BatchInputString": BatchInputString_2.BatchInputString,
    "BatchResponseHubDbTableRowV3WithErrors": BatchResponseHubDbTableRowV3WithErrors_2.BatchResponseHubDbTableRowV3WithErrors,
    "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging": CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_2.CollectionResponseWithTotalHubDbTableRowV3ForwardPaging,
    "CollectionResponseWithTotalHubDbTableV3ForwardPaging": CollectionResponseWithTotalHubDbTableV3ForwardPaging_2.CollectionResponseWithTotalHubDbTableV3ForwardPaging,
    "Column": Column_2.Column,
    "ColumnInput": ColumnInput_2.ColumnInput,
    "ErrorDetail": ErrorDetail_2.ErrorDetail,
    "ForeignId": ForeignId_2.ForeignId,
    "ForwardPaging": ForwardPaging_2.ForwardPaging,
    "HubDbTableCloneRequest": HubDbTableCloneRequest_2.HubDbTableCloneRequest,
    "HubDbTableRowV3": HubDbTableRowV3_2.HubDbTableRowV3,
    "HubDbTableRowV3Input": HubDbTableRowV3Input_2.HubDbTableRowV3Input,
    "HubDbTableV3": HubDbTableV3_2.HubDbTableV3,
    "HubDbTableV3Input": HubDbTableV3Input_2.HubDbTableV3Input,
    "HubDbTableV3LiveInput": HubDbTableV3LiveInput_2.HubDbTableV3LiveInput,
    "ImportResult": ImportResult_2.ImportResult,
    "ModelError": ModelError_2.ModelError,
    "NextPage": NextPage_2.NextPage,
    "Option": Option_2.Option,
    "SimpleUser": SimpleUser_2.SimpleUser,
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
