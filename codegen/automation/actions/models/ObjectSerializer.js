function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./ActionFunction'));
__export(require('./ActionFunctionIdentifier'));
__export(require('./ActionLabels'));
__export(require('./ActionRevision'));
__export(require('./BatchInputCallbackCompletionBatchRequest'));
__export(require('./CallbackCompletionBatchRequest'));
__export(require('./CallbackCompletionRequest'));
__export(require('./CollectionResponseActionFunctionIdentifierNoPaging'));
__export(require('./CollectionResponseActionRevisionForwardPaging'));
__export(require('./CollectionResponseExtensionActionDefinitionForwardPaging'));
__export(require('./ConditionalSingleFieldDependency'));
__export(require('./ErrorDetail'));
__export(require('./ExtensionActionDefinition'));
__export(require('./ExtensionActionDefinitionInput'));
__export(require('./ExtensionActionDefinitionPatch'));
__export(require('./FieldTypeDefinition'));
__export(require('./ForwardPaging'));
__export(require('./InputFieldDefinition'));
__export(require('./ModelError'));
__export(require('./NextPage'));
__export(require('./ObjectRequestOptions'));
__export(require('./Option'));
__export(require('./SingleFieldDependency'));
var ActionFunction_2 = require('./ActionFunction');
var ActionFunctionIdentifier_2 = require('./ActionFunctionIdentifier');
var ActionLabels_2 = require('./ActionLabels');
var ActionRevision_2 = require('./ActionRevision');
var BatchInputCallbackCompletionBatchRequest_2 = require('./BatchInputCallbackCompletionBatchRequest');
var CallbackCompletionBatchRequest_2 = require('./CallbackCompletionBatchRequest');
var CallbackCompletionRequest_2 = require('./CallbackCompletionRequest');
var CollectionResponseActionFunctionIdentifierNoPaging_2 = require('./CollectionResponseActionFunctionIdentifierNoPaging');
var CollectionResponseActionRevisionForwardPaging_2 = require('./CollectionResponseActionRevisionForwardPaging');
var CollectionResponseExtensionActionDefinitionForwardPaging_2 = require('./CollectionResponseExtensionActionDefinitionForwardPaging');
var ConditionalSingleFieldDependency_2 = require('./ConditionalSingleFieldDependency');
var ErrorDetail_2 = require('./ErrorDetail');
var ExtensionActionDefinition_2 = require('./ExtensionActionDefinition');
var ExtensionActionDefinitionInput_2 = require('./ExtensionActionDefinitionInput');
var ExtensionActionDefinitionPatch_2 = require('./ExtensionActionDefinitionPatch');
var FieldTypeDefinition_2 = require('./FieldTypeDefinition');
var ForwardPaging_2 = require('./ForwardPaging');
var InputFieldDefinition_2 = require('./InputFieldDefinition');
var ModelError_2 = require('./ModelError');
var NextPage_2 = require('./NextPage');
var ObjectRequestOptions_2 = require('./ObjectRequestOptions');
var Option_2 = require('./Option');
var SingleFieldDependency_2 = require('./SingleFieldDependency');
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
    "ActionFunctionFunctionTypeEnum",
    "ActionFunctionIdentifierFunctionTypeEnum",
    "ConditionalSingleFieldDependencyDependencyTypeEnum",
    "FieldTypeDefinitionTypeEnum",
    "FieldTypeDefinitionFieldTypeEnum",
    "FieldTypeDefinitionReferencedObjectTypeEnum",
    "InputFieldDefinitionSupportedValueTypesEnum",
    "SingleFieldDependencyDependencyTypeEnum",
]);
var typeMap = {
    "ActionFunction": ActionFunction_2.ActionFunction,
    "ActionFunctionIdentifier": ActionFunctionIdentifier_2.ActionFunctionIdentifier,
    "ActionLabels": ActionLabels_2.ActionLabels,
    "ActionRevision": ActionRevision_2.ActionRevision,
    "BatchInputCallbackCompletionBatchRequest": BatchInputCallbackCompletionBatchRequest_2.BatchInputCallbackCompletionBatchRequest,
    "CallbackCompletionBatchRequest": CallbackCompletionBatchRequest_2.CallbackCompletionBatchRequest,
    "CallbackCompletionRequest": CallbackCompletionRequest_2.CallbackCompletionRequest,
    "CollectionResponseActionFunctionIdentifierNoPaging": CollectionResponseActionFunctionIdentifierNoPaging_2.CollectionResponseActionFunctionIdentifierNoPaging,
    "CollectionResponseActionRevisionForwardPaging": CollectionResponseActionRevisionForwardPaging_2.CollectionResponseActionRevisionForwardPaging,
    "CollectionResponseExtensionActionDefinitionForwardPaging": CollectionResponseExtensionActionDefinitionForwardPaging_2.CollectionResponseExtensionActionDefinitionForwardPaging,
    "ConditionalSingleFieldDependency": ConditionalSingleFieldDependency_2.ConditionalSingleFieldDependency,
    "ErrorDetail": ErrorDetail_2.ErrorDetail,
    "ExtensionActionDefinition": ExtensionActionDefinition_2.ExtensionActionDefinition,
    "ExtensionActionDefinitionInput": ExtensionActionDefinitionInput_2.ExtensionActionDefinitionInput,
    "ExtensionActionDefinitionPatch": ExtensionActionDefinitionPatch_2.ExtensionActionDefinitionPatch,
    "FieldTypeDefinition": FieldTypeDefinition_2.FieldTypeDefinition,
    "ForwardPaging": ForwardPaging_2.ForwardPaging,
    "InputFieldDefinition": InputFieldDefinition_2.InputFieldDefinition,
    "ModelError": ModelError_2.ModelError,
    "NextPage": NextPage_2.NextPage,
    "ObjectRequestOptions": ObjectRequestOptions_2.ObjectRequestOptions,
    "Option": Option_2.Option,
    "SingleFieldDependency": SingleFieldDependency_2.SingleFieldDependency
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
