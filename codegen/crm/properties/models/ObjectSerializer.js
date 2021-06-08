function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./BatchInputPropertyCreate'));
__export(require('./BatchInputPropertyName'));
__export(require('./BatchReadInputPropertyName'));
__export(require('./BatchResponseProperty'));
__export(require('./CollectionResponseProperty'));
__export(require('./CollectionResponsePropertyGroup'));
__export(require('./ErrorCategory'));
__export(require('./ErrorDetail'));
__export(require('./ModelError'));
__export(require('./NextPage'));
__export(require('./Option'));
__export(require('./OptionInput'));
__export(require('./Paging'));
__export(require('./Property'));
__export(require('./PropertyCreate'));
__export(require('./PropertyGroup'));
__export(require('./PropertyGroupCreate'));
__export(require('./PropertyGroupUpdate'));
__export(require('./PropertyModificationMetadata'));
__export(require('./PropertyName'));
__export(require('./PropertyUpdate'));
__export(require('./StandardError'));
var BatchInputPropertyCreate_2 = require('./BatchInputPropertyCreate');
var BatchInputPropertyName_2 = require('./BatchInputPropertyName');
var BatchReadInputPropertyName_2 = require('./BatchReadInputPropertyName');
var BatchResponseProperty_2 = require('./BatchResponseProperty');
var CollectionResponseProperty_2 = require('./CollectionResponseProperty');
var CollectionResponsePropertyGroup_2 = require('./CollectionResponsePropertyGroup');
var ErrorCategory_2 = require('./ErrorCategory');
var ErrorDetail_2 = require('./ErrorDetail');
var ModelError_2 = require('./ModelError');
var NextPage_2 = require('./NextPage');
var Option_2 = require('./Option');
var OptionInput_2 = require('./OptionInput');
var Paging_2 = require('./Paging');
var Property_2 = require('./Property');
var PropertyCreate_2 = require('./PropertyCreate');
var PropertyGroup_2 = require('./PropertyGroup');
var PropertyGroupCreate_2 = require('./PropertyGroupCreate');
var PropertyGroupUpdate_2 = require('./PropertyGroupUpdate');
var PropertyModificationMetadata_2 = require('./PropertyModificationMetadata');
var PropertyName_2 = require('./PropertyName');
var PropertyUpdate_2 = require('./PropertyUpdate');
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
    "BatchResponsePropertyStatusEnum",
    "ErrorCategoryHttpStatusEnum",
    "PropertyCreateTypeEnum",
    "PropertyCreateFieldTypeEnum",
    "PropertyUpdateTypeEnum",
    "PropertyUpdateFieldTypeEnum",
]);
var typeMap = {
    "BatchInputPropertyCreate": BatchInputPropertyCreate_2.BatchInputPropertyCreate,
    "BatchInputPropertyName": BatchInputPropertyName_2.BatchInputPropertyName,
    "BatchReadInputPropertyName": BatchReadInputPropertyName_2.BatchReadInputPropertyName,
    "BatchResponseProperty": BatchResponseProperty_2.BatchResponseProperty,
    "CollectionResponseProperty": CollectionResponseProperty_2.CollectionResponseProperty,
    "CollectionResponsePropertyGroup": CollectionResponsePropertyGroup_2.CollectionResponsePropertyGroup,
    "ErrorCategory": ErrorCategory_2.ErrorCategory,
    "ErrorDetail": ErrorDetail_2.ErrorDetail,
    "ModelError": ModelError_2.ModelError,
    "NextPage": NextPage_2.NextPage,
    "Option": Option_2.Option,
    "OptionInput": OptionInput_2.OptionInput,
    "Paging": Paging_2.Paging,
    "Property": Property_2.Property,
    "PropertyCreate": PropertyCreate_2.PropertyCreate,
    "PropertyGroup": PropertyGroup_2.PropertyGroup,
    "PropertyGroupCreate": PropertyGroupCreate_2.PropertyGroupCreate,
    "PropertyGroupUpdate": PropertyGroupUpdate_2.PropertyGroupUpdate,
    "PropertyModificationMetadata": PropertyModificationMetadata_2.PropertyModificationMetadata,
    "PropertyName": PropertyName_2.PropertyName,
    "PropertyUpdate": PropertyUpdate_2.PropertyUpdate,
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
